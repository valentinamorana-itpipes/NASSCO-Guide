(() => {
  const headerTitle = document.getElementById("header-title");
  const headerSubtitle = document.getElementById("header-subtitle");
  const backBtn = document.getElementById("back-btn");
  const main = document.getElementById("app-main");
  const searchInput = document.getElementById("search-input");
  const versionBar = document.getElementById("version-bar");
  const versionBarButtons = document.getElementById("version-bar-buttons");
  const appFooter = document.getElementById("app-footer");

  // Navigation stack of view descriptors: { view, catKey, materialId }
  let stack = [{ view: "home" }];

  // Codes version filter: "v6" | "v7" | "both". Persists across popups.
  let versionFilter = "both";
  try {
    versionFilter = localStorage.getItem("nassco-version-filter") || "both";
  } catch (e) { /* localStorage unavailable — fall back to "both" */ }

  function setVersionFilter(v) {
    versionFilter = v;
    try { localStorage.setItem("nassco-version-filter", v); } catch (e) { /* ignore */ }
    render();
  }

  versionBarButtons.addEventListener("click", (ev) => {
    const btn = ev.target.closest(".version-btn");
    if (btn) setVersionFilter(btn.dataset.v);
  });

  // Resolves a defect's display code against the active version filter.
  // Defects with a "codeV6" field have a different code name pre-V7.
  function displayCode(d) {
    if (versionFilter === "v6") return d.codeV6 || d.code;
    if (versionFilter === "v7") return d.code;
    return d.codeV6 ? `${d.code} / ${d.codeV6}` : d.code;
  }

  // Resolves a group's defect list against the active version filter. Under
  // "v6", several V7/V8 descriptors collapse onto the same legacy code (e.g.
  // IDB/IDJ both become ID) — those collapse into a single card using the
  // defect's nameV6/descV6 (falling back to name/desc). Under "v7"/"both",
  // every defect is shown as-is with its resolved code.
  function resolveDefectsForVersion(defects) {
    if (versionFilter !== "v6") {
      return defects.map((d) => ({ code: displayCode(d), name: d.name, desc: d.desc, threshold: d.threshold }));
    }
    const seen = new Set();
    const out = [];
    for (const d of defects) {
      const code = d.codeV6 || d.code;
      if (seen.has(code)) continue;
      seen.add(code);
      out.push({ code, name: d.nameV6 || d.name, desc: d.descV6 || d.desc, threshold: d.codeV6 ? undefined : d.threshold });
    }
    return out;
  }

  function esc(str) {
    const d = document.createElement("div");
    d.textContent = str == null ? "" : String(str);
    return d.innerHTML;
  }

  function matIcon(pattern, extraClass) {
    return `<span class="mat-icon ${esc(pattern || "solid")}${extraClass ? " " + extraClass : ""}"></span>`;
  }

  function mount(el) {
    el.classList.add("view-enter");
    main.appendChild(el);
  }

  function currentState() {
    return stack[stack.length - 1];
  }

  function push(state) {
    stack.push(state);
    render();
  }

  function pop() {
    if (stack.length > 1) stack.pop();
    render();
  }

  backBtn.addEventListener("click", pop);

  searchInput.addEventListener("input", () => {
    const q = searchInput.value.trim();
    if (q.length === 0) {
      if (currentState().view === "search") pop();
      return;
    }
    if (currentState().view === "search") {
      render();
    } else {
      push({ view: "search" });
    }
  });

  // ---------- Renderers ----------

  function render() {
    const state = currentState();
    backBtn.hidden = stack.length <= 1;
    main.innerHTML = "";

    versionBar.hidden = !(state.view === "codes-home" || state.view === "codes-section");
    for (const btn of versionBarButtons.querySelectorAll(".version-btn")) {
      btn.classList.toggle("active", btn.dataset.v === versionFilter);
    }
    appFooter.hidden = state.view !== "home";

    if (state.view === "home") return renderHome();
    if (state.view === "materials-home") return renderMaterialsHome();
    if (state.view === "category") return renderCategory(state.catKey);
    if (state.view === "material") return renderMaterial(state.catKey, state.materialId);
    if (state.view === "codes-home") return renderCodesHome();
    if (state.view === "codes-section") return renderCodesSection(state.sectionId);
    if (state.view === "pure") return renderPure();
    if (state.view === "operator-review") return renderOperatorReview();
    if (state.view === "search") return renderSearch();
  }

  function renderHome() {
    headerTitle.textContent = "NASSCO PACP Guide";
    headerSubtitle.textContent = "Pick a section to get started";

    const totalMaterials = MATERIALS.flexible.items.length + MATERIALS.rigid.items.length;

    const sections = [
      { view: "materials-home", cls: "", label: "Materials", count: `${totalMaterials} materials` },
      { view: "codes-home", cls: "codes", label: "Codes", count: "Coding rules & strategy" },
      { view: "pure", cls: "pure", label: "Pure vs Standard", count: `${PURE_COMPARISON.length} topics compared` },
      { view: "operator-review", cls: "opr", label: "Operator Review", count: "Do's, don'ts & edge cases" }
    ];

    const wrap = document.createElement("div");
    wrap.className = "home-cover";

    for (const s of sections) {
      const btn = document.createElement("button");
      btn.className = "cover-tile" + (s.cls ? " " + s.cls : "");
      btn.innerHTML = `
        <span class="cover-tile-ring"></span>
        <span class="cover-tile-text">
          <span class="cover-tile-label">${esc(s.label)}</span>
          <span class="cover-tile-count">${esc(s.count)}</span>
        </span>
      `;
      btn.addEventListener("click", () => push({ view: s.view }));
      wrap.appendChild(btn);
    }

    mount(wrap);
  }

  function renderMaterialsHome() {
    headerTitle.textContent = "Materials";
    headerSubtitle.textContent = "Pick a pipe behavior to get started";

    const wrap = document.createElement("div");
    wrap.className = "home-cover";

    for (const catKey of ["flexible", "rigid"]) {
      const cat = MATERIALS[catKey];
      const btn = document.createElement("button");
      btn.className = "cover-tile" + (catKey === "rigid" ? " rigid" : "");
      btn.innerHTML = `
        <span class="cover-tile-ring"></span>
        <span class="cover-tile-text">
          <span class="cover-tile-label">${esc(cat.label)}</span>
          <span class="cover-tile-count">${cat.items.length} materials</span>
        </span>
      `;
      btn.addEventListener("click", () => push({ view: "category", catKey }));
      wrap.appendChild(btn);
    }

    mount(wrap);
  }

  function renderCodesHome() {
    headerTitle.textContent = "Codes";
    headerSubtitle.textContent = "Coding rules & strategy guides";

    const wrap = document.createElement("div");
    wrap.className = "codes-cat";

    const sectionIds = Object.keys(CODES).sort((a, b) => CODES[a].label.localeCompare(CODES[b].label));

    for (const sectionId of sectionIds) {
      const section = CODES[sectionId];
      const isStrategy = sectionId === "continuousDefects";
      const btn = document.createElement("button");
      btn.className = "material-card" + (isStrategy ? " material-card-compact" : "");
      btn.innerHTML = `
        ${matIcon("solid", "on-codes" + (isStrategy ? " sm" : ""))}
        <div class="mc-body">
          <div class="mc-top">
            <span class="mc-name">${esc(section.label)}</span>
          </div>
          ${isStrategy ? "" : `<div class="mc-summary">${esc(section.blurb || "")}</div>`}
        </div>
      `;
      btn.addEventListener("click", () => push({ view: "codes-section", sectionId }));
      wrap.appendChild(btn);
    }

    mount(wrap);
  }

  function renderCodesSection(sectionId) {
    const section = CODES[sectionId];
    if (!section) return renderCodesHome();

    headerTitle.textContent = section.label;
    headerSubtitle.textContent = section.versions || "";

    const wrap = document.createElement("div");
    wrap.className = "codes-cat";

    if (section.blurb) {
      const p = document.createElement("p");
      p.className = "summary-text";
      p.textContent = section.blurb;
      wrap.appendChild(p);
    }

    if (section.generalRules && section.generalRules.length) {
      const block = document.createElement("div");
      block.className = "group-block";
      const h = document.createElement("h2");
      h.className = "group-title";
      h.textContent = "General Rules";
      block.appendChild(h);
      const ul = document.createElement("ul");
      ul.className = "rules-list";
      for (const rule of section.generalRules) {
        const li = document.createElement("li");
        li.textContent = rule;
        ul.appendChild(li);
      }
      block.appendChild(ul);
      wrap.appendChild(block);
    }

    for (const group of section.groups || []) {
      const block = document.createElement("div");
      block.className = "group-block";
      const h = document.createElement("h2");
      h.className = "group-title";
      h.textContent = group.title;
      block.appendChild(h);

      for (const d of resolveDefectsForVersion(group.defects)) {
        const card = document.createElement("div");
        card.className = "defect-card";
        card.innerHTML = `
          <div class="dc-top">
            <span class="defect-code">${esc(d.code)}</span>
            <span class="defect-name">${esc(d.name)}</span>
          </div>
          <div class="defect-desc">${esc(d.desc)}</div>
        `;
        block.appendChild(card);
      }
      wrap.appendChild(block);
    }

    mount(wrap);
  }

  function renderPure() {
    headerTitle.textContent = "Pure vs Standard";
    headerSubtitle.textContent = "Where NASSCO Pure coding diverges from standard coding";

    const wrap = document.createElement("div");

    for (const row of PURE_COMPARISON) {
      const card = document.createElement("div");
      card.className = "compare-card";
      card.innerHTML = `
        <div class="cc-topic">
          ${row.code ? `<span class="cc-code">${esc(row.code)}</span>` : ""}
          <span>${esc(row.topic)}</span>
        </div>
        <div class="compare-row standard">
          <div class="cr-label">Standard Coding</div>
          <div>${esc(row.standard)}</div>
        </div>
        <div class="compare-row pure">
          <div class="cr-label">NASSCO Pure Coding</div>
          <div>${esc(row.pure)}</div>
        </div>
      `;
      wrap.appendChild(card);
    }

    mount(wrap);
  }

  function renderOperatorReview() {
    headerTitle.textContent = OPERATOR_REVIEW.title;
    headerSubtitle.textContent = OPERATOR_REVIEW.subtitle;

    const wrap = document.createElement("div");

    const doBlock = document.createElement("div");
    doBlock.className = "group-block";
    doBlock.innerHTML = `<h2 class="group-title">Do's</h2>`;
    const doList = document.createElement("ul");
    doList.className = "do-list";
    for (const item of OPERATOR_REVIEW.dos) {
      const li = document.createElement("li");
      li.textContent = item;
      doList.appendChild(li);
    }
    doBlock.appendChild(doList);
    wrap.appendChild(doBlock);

    const dontBlock = document.createElement("div");
    dontBlock.className = "group-block";
    dontBlock.innerHTML = `<h2 class="group-title">Don'ts</h2>`;
    const dontList = document.createElement("ul");
    dontList.className = "dont-list";
    for (const item of OPERATOR_REVIEW.donts) {
      const li = document.createElement("li");
      li.textContent = item;
      dontList.appendChild(li);
    }
    dontBlock.appendChild(dontList);
    wrap.appendChild(dontBlock);

    for (const c of OPERATOR_REVIEW.cases) {
      const notes = document.createElement("div");
      notes.className = "notes-block";
      notes.innerHTML = `<b>${esc(c.title)}:</b> ${esc(c.desc)}`;
      wrap.appendChild(notes);
    }

    mount(wrap);
  }

  function renderCategory(catKey) {
    const cat = MATERIALS[catKey];
    headerTitle.textContent = cat.label;
    headerSubtitle.textContent = `${cat.items.length} materials · tap one for its common defects`;

    const wrap = document.createElement("div");
    wrap.className = catKey === "rigid" ? "rigid-cat" : "";

    for (const mat of cat.items) {
      const btn = document.createElement("button");
      btn.className = "material-card";
      btn.innerHTML = `
        ${matIcon(mat.pattern, "lg")}
        <div class="mc-body">
          <div class="mc-top">
            <span class="code-badge${catKey === "rigid" ? " rigid" : ""}">${esc(mat.code)}</span>
            <span class="mc-name">${esc(mat.name)}</span>
          </div>
          <div class="mc-summary">${esc(mat.summary || "")}</div>
        </div>
      `;
      btn.addEventListener("click", () => push({ view: "material", catKey, materialId: mat.id }));
      wrap.appendChild(btn);
    }

    mount(wrap);
  }

  function renderMaterial(catKey, materialId) {
    const cat = MATERIALS[catKey];
    const mat = cat.items.find((m) => m.id === materialId);
    if (!mat) return renderHome();

    headerTitle.textContent = `${mat.code} — ${mat.name}`;
    headerSubtitle.textContent = cat.label;

    const wrap = document.createElement("div");
    wrap.className = catKey === "rigid" ? "rigid-cat" : "";

    const head = document.createElement("div");
    head.className = "material-header";
    head.innerHTML = `${matIcon(mat.pattern, "lg")}<span class="code-badge${catKey === "rigid" ? " rigid" : ""}">${esc(mat.code)}</span><span class="mc-name">${esc(mat.name)}</span>`;
    wrap.appendChild(head);

    if (mat.summary) {
      const p = document.createElement("p");
      p.className = "summary-text";
      p.textContent = mat.summary;
      wrap.appendChild(p);
    }

    const infoEntries = Object.entries(mat.info || {});
    if (infoEntries.length) {
      const dl = document.createElement("dl");
      dl.className = "info-grid";
      for (const [k, v] of infoEntries) {
        const dt = document.createElement("dt");
        dt.textContent = k;
        const dd = document.createElement("dd");
        dd.textContent = v;
        dl.appendChild(dt);
        dl.appendChild(dd);
      }
      wrap.appendChild(dl);
    }

    for (const group of mat.groups || []) {
      const block = document.createElement("div");
      block.className = "group-block";
      const h = document.createElement("h2");
      h.className = "group-title";
      h.textContent = group.title;
      block.appendChild(h);

      for (const d of group.defects) {
        const card = document.createElement("div");
        card.className = "defect-card";
        card.innerHTML = `
          <div class="dc-top">
            <span class="defect-code">${esc(d.code)}</span>
            <span class="defect-name">${esc(d.name)}</span>
          </div>
          <div class="defect-desc">${esc(d.desc)}</div>
          ${d.threshold ? `<div class="defect-threshold"><b>Threshold/rule:</b> ${esc(d.threshold)}</div>` : ""}
        `;
        block.appendChild(card);
      }
      wrap.appendChild(block);
    }

    if (mat.notes) {
      const notes = document.createElement("div");
      notes.className = "notes-block";
      notes.innerHTML = `<b>Field notes:</b> ${esc(mat.notes)}`;
      wrap.appendChild(notes);
    }

    mount(wrap);
  }

  function renderSearch() {
    const q = searchInput.value.trim().toLowerCase();
    headerTitle.textContent = "Search";
    headerSubtitle.textContent = q ? `Results for "${q}"` : "Type to search codes and materials";

    const wrap = document.createElement("div");

    if (!q) {
      const hint = document.createElement("div");
      hint.className = "search-hint";
      hint.textContent = "Search across every material and defect code (e.g. \"SRI\", \"roots\", \"VCP\", \"deformed\").";
      wrap.appendChild(hint);
      mount(wrap);
      return;
    }

    const matches = SEARCH_INDEX.filter((row) => row.text.toLowerCase().includes(q)).slice(0, 40);

    if (matches.length === 0) {
      const empty = document.createElement("div");
      empty.className = "empty-state";
      empty.textContent = "No matches. Try a different code or keyword.";
      wrap.appendChild(empty);
      mount(wrap);
      return;
    }

    for (const row of matches) {
      const btn = document.createElement("button");
      btn.className = "result-item";

      if (row.type === "material") {
        btn.innerHTML = `
          ${matIcon(row.pattern, row.catKey === "rigid" ? "on-rigid" : "")}
          <div class="ri-body">
            <div class="ri-top">
              <span class="code-badge${row.catKey === "rigid" ? " rigid" : ""}">${esc(row.code)}</span>
              <span class="mc-name">${esc(row.name)}</span>
            </div>
            <div class="ri-path">${esc(MATERIALS[row.catKey].label)}</div>
          </div>
        `;
      } else if (row.type === "defect") {
        btn.innerHTML = `
          ${matIcon(row.pattern, row.catKey === "rigid" ? "on-rigid" : "")}
          <div class="ri-body">
            <div class="ri-top">
              <span class="defect-code" style="color:${row.catKey === "rigid" ? "var(--rigid)" : "var(--teal)"}">${esc(row.code)}</span>
              <span class="mc-name">${esc(row.name)}</span>
            </div>
            <div class="ri-path">${esc(MATERIALS[row.catKey].label)} → ${esc(row.materialName)} → ${esc(row.group)}</div>
          </div>
        `;
      } else if (row.type === "codes-section") {
        btn.innerHTML = `
          ${matIcon("solid", "on-codes")}
          <div class="ri-body">
            <div class="ri-top"><span class="mc-name">${esc(row.name)}</span></div>
            <div class="ri-path">Codes</div>
          </div>
        `;
      } else if (row.type === "codes-defect") {
        btn.innerHTML = `
          ${matIcon("solid", "on-codes")}
          <div class="ri-body">
            <div class="ri-top">
              <span class="defect-code" style="color:var(--codes)">${esc(row.code)}</span>
              <span class="mc-name">${esc(row.name)}</span>
            </div>
            <div class="ri-path">${esc(row.sectionLabel)} → ${esc(row.group)}</div>
          </div>
        `;
      } else if (row.type === "pure") {
        btn.innerHTML = `
          ${matIcon("solid", "on-pure")}
          <div class="ri-body">
            <div class="ri-top">
              ${row.code ? `<span class="defect-code" style="color:var(--pure-dark)">${esc(row.code)}</span>` : ""}
              <span class="mc-name">${esc(row.name)}</span>
            </div>
            <div class="ri-path">Pure vs Standard</div>
          </div>
        `;
      } else if (row.type === "operator-review") {
        btn.innerHTML = `
          ${matIcon("solid", "on-opr")}
          <div class="ri-body">
            <div class="ri-top"><span class="mc-name">${esc(row.name)}</span></div>
            <div class="ri-path">Operator Review</div>
          </div>
        `;
      }

      btn.addEventListener("click", () => {
        searchInput.value = "";
        if (row.type === "material" || row.type === "defect") {
          stack = [{ view: "home" }, { view: "materials-home" }, { view: "category", catKey: row.catKey }, { view: "material", catKey: row.catKey, materialId: row.materialId }];
        } else if (row.type === "codes-section" || row.type === "codes-defect") {
          stack = [{ view: "home" }, { view: "codes-home" }, { view: "codes-section", sectionId: row.sectionId }];
        } else if (row.type === "pure") {
          stack = [{ view: "home" }, { view: "pure" }];
        } else if (row.type === "operator-review") {
          stack = [{ view: "home" }, { view: "operator-review" }];
        }
        render();
      });
      wrap.appendChild(btn);
    }

    mount(wrap);
  }

  render();
})();

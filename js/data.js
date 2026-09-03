/*
  NASSCO PACP Guide — reference data
  Compiled from: NASSCO PACP v7.0.0 (2015) manual sections 4-7, Appendix A,
  and an internal field-coding training reference.
  Not an official NASSCO document — a memory aid for new coders.
*/

const MATERIALS = {
  flexible: {
    label: "Flexible Pipes",
    blurb: "Flexible materials deform and continue to resist external loading before cracking or fracturing. Watch for bulging, creasing, and elliptical deformation before structural cracks appear.",
    items: [
      {
        id: "cmp",
        code: "CMP",
        pattern: "ripple",
        name: "Corrugated Metal Pipe",
        summary: "Corrugated metal, common in large storm sewers. Flexes and redistributes load instead of cracking.",
        info: {
          "Installation": "Taps may be factory-manufactured or cut into the main",
          "Shape": "Circular, Arch, Oval",
          "Coating": "Sometimes a heavy tar/asphaltic coating for corrosion protection",
          "Color": "Grey/silver when new; grey/brown/rust when aged",
          "Lifespan": "~40 years (in use since the early 1900s)"
        },
        groups: [
          {
            title: "Structural",
            defects: [
              { code: "SSC", name: "Surface Damage – Spalling of Coating", desc: "Whitish coating damage/flaking, sometimes visible all the way around the pipe." },
              { code: "SCP", name: "Surface Damage – Corrosion", desc: "Metal no longer smooth, developing shallow pits that can flake off; can advance to Missing Wall." },
              { code: "SMW", name: "Surface Damage – Missing Wall", desc: "Corrosion has fully eaten through the pipe material." },
              { code: "DFC", name: "Deformed Flexible – Creasing", desc: "A sharp outward longitudinal fold." },
              { code: "WFS", name: "Weld Failure – Spiral", desc: "Weld failure following the spiral seam typical of large-diameter CMP." }
            ]
          }
        ],
        notes: "Common access points in storm/CMP contexts: ACB (Catch Basin), AJB (Junction Box), ADP (Discharge Point). A heavy tar/asphaltic coating is sometimes applied for corrosion protection — don't mistake normal tar coating wear for a different surface-damage code; confirm the metal underneath is actually affected."
      },
      {
        id: "dip",
        code: "DIP",
        pattern: "hatch",
        name: "Ductile Iron Pipe",
        summary: "Strong cast metal pipe, usually coated with concrete plus an epoxy layer. Classified flexible relative to plain cast iron.",
        info: {
          "Installation": "Mechanical joints with thick gaskets, commonly bolted on the outside",
          "Shape": "Circular",
          "Coating": "Usually a concrete layer plus an epoxy layer on top",
          "Color": "Metal gray/silver; concrete coating white/gray; epoxy coating black",
          "Joint Lengths": "18–20 ft / 5.5–6 m — the longest of any material; the best trait for telling DIP apart from CAS",
          "Lifespan": "~100 years (in use since the 1950s; standard by the 1970s)"
        },
        groups: [
          {
            title: "Structural",
            defects: [
              { code: "SSC (V7) / SSSC (V6)", name: "Surface Damage – Spalling of Coating", desc: "Coating erosion. Trigger point varies by reviewer, following a progression: epoxy fading → epoxy \"cobweb cracking\" / mostly gone → concrete layer damaged → metal exposed." },
              { code: "SCP", name: "Surface Damage – Corrosion", desc: "Rare / late-stage in DIP thanks to its resistance. Requires exposed metal, a rusty orange color (don't confuse with orange-stained concrete coating), and a texture/volume change. Most often seen as a point defect at joints, where coating is thinner." }
            ]
          }
        ],
        notes: "Do not use repeated continuous-defect coding at every joint in DIP — code point defects at each joint instead, and reserve continuous defects for barrel-length features. If a repeating joint-code grade is below 3 it may be coded continuous; grade 3 or higher must be coded as point defects. The 18–20in joint length is the fastest way to distinguish DIP from CAS."
      },
      {
        id: "hdpe",
        code: "HDPE",
        pattern: "solid",
        name: "High-Density Polyethylene",
        summary: "The high-density PE variant you'll actually see most: new gravity sewer, force mains, and pipe-bursting carrier pipe.",
        info: {
          "Installation": "Heat-fused joints (butt-fusion or electrofusion) — no gasket, no bell-and-spigot",
          "Shape": "Circular",
          "Coating": "None (homogeneous wall)",
          "Color": "Usually black, often with a colored stripe (blue = water, green = sewer)",
          "Joint Lengths": "Highly variable / long fused runs; wall thickness and deformation tolerance depend on the pipe's SDR (Standard Dimension Ratio) rating",
          "Lifespan": "100+ years, depending on installation"
        },
        groups: [],
        notes: "Camera tip: the smooth black/dark-grey interior absorbs light and makes defects noticeably harder to spot on camera than lighter-colored pipe — slow down and adjust lighting. When HDPE is the carrier pipe in a pipe-bursting rehab job, defects seen shortly after installation (kinks, wrinkles at push-length transitions) are usually installation artifacts rather than in-service deterioration — worth distinguishing in Remarks. Heat-fused joints make it excellent at resisting infiltration and root intrusion, since there's no gasketed joint for either to enter through."
      },
      {
        id: "lining",
        code: "LINER",
        pattern: "wave",
        name: "Pipe Linings (CIPP, Fold & Form, etc.)",
        summary: "A rehab layer installed inside a host pipe (CIPP, fold & form, spiral wound, spray-on, grouted-in-place) — behaves flexibly regardless of the host material.",
        info: {},
        groups: [
          {
            title: "Lining Features",
            defects: [
              { code: "KI (V6) / DFBI (V7)", name: "Bulging Inverse Curvature", desc: "A heart-shaped or inverted-triangle bulge in the liner." },
              { code: "LFAC", name: "Abandoned Connection", desc: "Liner installed over a connection; an outward dimple in the liner is visible at the tap location." },
              { code: "LFB", name: "Blistered", desc: "Bubbles or raised areas on the inside coating caused by trapped air, resin, or water." },
              { code: "LFBU (V6) / DFBR (V7)", name: "Small Bumps", desc: "Small raised bumps in the liner, informally called \"little mountains\"." },
              { code: "LFDC", name: "Discoloration", desc: "Stains with bleeding color forming crack-like lines, from moisture bleeding into the liner from the outside. Usually red or pink; wait for visible intensity before coding." },
              { code: "LFDE", name: "Defective End", desc: "The end of the liner is ragged, warped, and/or shrunken." },
              { code: "LFDL", name: "Delamination", desc: "Liner material layers have separated." },
              { code: "LFOC", name: "Overcut Service", desc: "Too much liner cut around the service connection, leaving part of the host pipe exposed without liner. In Sanity, does not require an accompanying tap code; if a hole is also observed at the connection, follow with an HVV/HSV on the mainline." },
              { code: "LFPH", name: "Pinhole (weep points)", desc: "Water drops appearing to fall from the liner; can be black or orange. Sometimes accompanied by an IS (infiltration) code." },
              { code: "LFRS", name: "Resin Slug", desc: "Cured resin obstructing a connection." },
              { code: "LFUC", name: "Undercut Service", desc: "Tap reinstatement cut too small for the tap diameter, obstructing flow. Does not require an accompanying tap code in Sanity." },
              { code: "LFW", name: "Wrinkle", desc: "Caused by excess liner material (incorrect sizing).", threshold: "Sanity: code when the wrinkle reaches ~5% and is at/near the flow line (it should \"look uncomfortable\" to the eye). NASSCO Pure: code all wrinkles." },
              { code: "LFZ", name: "Other", desc: "Must be specified in Remarks — e.g. a circular sticker-like liner patch (round or not, possibly loose/peeling), a spiral-shaped spliced liner seam, or fingernail-like scratches." },
              { code: "RPL", name: "Point Repair – Liner", desc: "A short liner installed over a defective section — e.g. remark \"CIPP\"." }
            ]
          }
        ],
        notes: "Manufacturing marking letters visible on a liner are normal and should not be coded. If a JOMD condition is present at a liner, remark \"JOMD\" under LFZ; if the pipe is simply following the flow through a JOM, it does not need to be coded."
      },
      {
        id: "pe",
        code: "PE",
        pattern: "solid",
        name: "Polyethylene",
        summary: "General polyethylene family, joined by heat-fused welds instead of gaskets — no traditional bell-and-spigot joint.",
        info: {
          "Installation": "Heat-fused joints (butt-fusion or electrofusion) — no gasket, no bell-and-spigot",
          "Shape": "Circular",
          "Coating": "None (homogeneous wall)",
          "Color": "Usually black, often with a colored stripe (blue = water, green = sewer) depending on the utility",
          "Joint Lengths": "Highly variable — pipe is often supplied in long fused runs, so welds are far less frequent than gasketed-pipe joints"
        },
        groups: [],
        notes: "Since there are no gasketed joints, the standard Joint (J) offset/separation/angular codes generally don't apply — look for weld failures instead. Roots and infiltration are correspondingly rare except at a failed weld or a damaged section of wall."
      },
      {
        id: "pp",
        code: "PP",
        pattern: "dash",
        name: "Polypropylene",
        summary: "Thermoplastic pipe, corrugated (storm) or smooth-wall (sanitary). Technically flexible but really \"semi-rigid\" — leans on soil support.",
        info: {
          "Shape": "Corrugated exterior or smooth wall, depending on the product",
          "Coating": "None",
          "Color": "Usually white or grey"
        },
        groups: [],
        notes: "Because PP depends so heavily on proper soil embedment, poor haunching/bedding shows up as deformation (corrugated) or cracking (smooth-wall) much faster than in a fully rigid material. If you have more specific field trigger points for PP from your own crews, they should override the general guidance above."
      },
      {
        id: "pvc",
        code: "PVC",
        pattern: "solid",
        name: "PolyVinyl Chloride",
        summary: "Common flexible plastic pipe, bell-and-spigot with a gasket. Deforms into an oval shape before it cracks.",
        info: {
          "Installation": "Bell-and-spigot with gasket",
          "Shape": "Circular",
          "Coating": "None",
          "Color": "White, blue, green, gray, and (rarely) orange",
          "Joint Lengths": "10–20 ft / 3–6 m",
          "Lifespan": "~80 years (in use since the 1960s)"
        },
        groups: [
          {
            title: "Things to Keep in Mind",
            defects: [
              { code: "Manufacturing", name: "Plastic Burrs at Taps", desc: "After factory cuts, PVC taps commonly leave small plastic burrs or thread-like shavings at the joint. This is a manufacturing artifact — do not code it as Roots Fine (RF)." }
            ]
          },
          {
            title: "Structural",
            defects: [
              { code: "DFE (V7) / KW (V6)", name: "Deformed Elliptical", desc: "Pipe compressed under load into an oval shape, losing its original circular geometry and structural integrity.", threshold: "Code once deformation reaches 10%. PVC typically withstands up to 40% deformation before collapse risk rises sharply." }
            ]
          },
          {
            title: "Construction / Taps",
            defects: [
              { code: "TFA", name: "Tap Factory Activity", desc: "A visible pre-molded fitting, factory-installed into the pipe wall. If there is no fitting, it is not a TFA — consider TSA or TBA instead." }
            ]
          }
        ]
      }
    ]
  },

  rigid: {
    label: "Rigid (Non-Flexible) Pipes",
    blurb: "Rigid materials such as concrete, clay, and brick are the most likely to crack and fracture. If untreated, these defects can deteriorate further into broken pipe, holes, deformation, and ultimately collapse.",
    items: [
      {
        id: "ac",
        code: "AC",
        pattern: "speckle",
        name: "Asbestos Cement",
        summary: "Asbestos-fiber cement pipe, no longer installed. Should look completely flat and smooth — no aggregate.",
        info: {
          "Installation": "Bell-and-spigot with gasket; taps may be manufactured/factory or cut into the main",
          "Shape": "Circular",
          "Color": "New: grey (dark grey asbestos fibers may be visible). Aged: grey/brown",
          "Joint Lengths": "10–13 ft / 3–4 m",
          "Lifespan": "~70 years (in use since the 1920s; no longer installed today due to health risks)"
        },
        groups: [
          {
            title: "Structural",
            defects: [
              { code: "SRI", name: "Surface Damage – Roughness Increased", desc: "Same trigger and continuous-coding rules as in Concrete Pipe (see CP)." }
            ]
          }
        ],
        notes: "Material ID tip: a healthy AC pipe wall should look completely flat and smooth. Unlike Concrete or Reinforced Concrete Pipe, it contains no stone/aggregate — if you see aggregate-like texture in the wall, reconsider whether it's actually AC. No longer installed today due to health risks associated with asbestos."
      },
      {
        id: "cas",
        code: "CAS",
        pattern: "hatch",
        name: "Cast Iron",
        summary: "Metal pipe, standard since the 1800s. Main risk is tuberculation — oxidation buildup that eats into flow capacity.",
        info: {
          "Coating": "May be cement-lined or lined with a bituminous coating",
          "Shape": "Circular",
          "Color": "New: dark grey. Over time, oxidation/tuberculation turns it red, orange, pink, black, and yellow in uneven patterns",
          "Joint Lengths": "5–15 ft / 1.5–3.2 m",
          "Lifespan": "~50 years (in use since the early 1800s; no longer commonly installed)"
        },
        groups: [
          {
            title: "Structural",
            defects: [
              { code: "SCP", name: "Surface Damage – Corrosion", desc: "Metal surface no longer smooth, developing shallow pits that build up and can flake off over time; DAE is often present alongside it." },
              { code: "SMW", name: "Surface Damage – Missing Wall", desc: "Pipe wall completely eroded away in a spot, typically from severe corrosion or H2S attack. Identify by thin, tapered, uneven edges — this is the key difference from a Hole (H/HVV), where the original wall thickness is still visible at the edge." }
            ]
          }
        ],
        notes: "Cracks and fractures are quite infrequent in cast iron since it's a metal — most common codes here are the surface-damage family (SCP, SMW)."
      },
      {
        id: "cp",
        code: "CP",
        pattern: "speckle",
        name: "Concrete Pipe (non-reinforced)",
        summary: "Plain cement-and-aggregate pipe. Deteriorates in a predictable sequence as H2S attacks the cement paste.",
        info: {
          "Shape": "Circular, square, rectangular, oval, arch, custom",
          "Coating": "None",
          "Color": "New: grey. Aged: grey/brown",
          "Joint Lengths": "8–12 ft / 2.5–3.5 m",
          "Lifespan": "~75 years (in use since the 1800s)"
        },
        groups: [
          {
            title: "Structural (progressive severity)",
            defects: [
              { code: "SRI", name: "Surface Damage – Roughness Increased", desc: "Surface is slightly worn/abraded/deteriorated — run a finger along the wall: if it feels rough, code SRI; if still smooth, it's not deteriorated enough yet." },
              { code: "SAV", name: "Surface Damage – Aggregate Visible", desc: "Intermediate stage: cement paste worn away enough that aggregate (stones) is clearly visible, but not yet projecting." },
              { code: "SAP", name: "Surface Damage – Aggregate Projecting", desc: "Aggregate is now projecting from the pipe wall, though not yet missing." },
              { code: "SAM", name: "Surface Damage – Aggregate Missing", desc: "Most severe stage: aggregate has completely fallen out, leaving visible pits/pockmarks/voids." },
              { code: "SZ", name: "Surface Damage – Other", desc: "Used for chipped joints in CP (instead of SSS), since concrete rarely spalls that way — SZ is the more appropriate code for chipped joints." }
            ]
          }
        ],
        notes: "Infiltration rule: if the pipe wall is wet in general, a stain there is normal; but if the wall is dry and a specific spot is wet, that's a true weeper — flag it for BQA recode (code IWB)."
      },
      {
        id: "pcp",
        code: "PCP",
        pattern: "dash",
        name: "Polymer Concrete Pipe",
        summary: "Rare resin-and-quartz composite, no cement or water. Very strong but brittle on impact; needs diamond saws to cut.",
        info: {
          "Shape": "Circular",
          "Coating": "None (homogeneous resin/aggregate composite)",
          "Strength": "Roughly 4–5x stronger than Reinforced Concrete Pipe (RCP)",
          "Field cutting": "Very difficult — requires diamond saws, unlike standard concrete pipe",
          "Lifespan": "75+ years with minimal maintenance"
        },
        groups: [],
        notes: "Because it's non-porous and contains no cement, it won't show the aggregate-exposure progression seen in CP/RCP (SRI/SAV/SAP/SAM) — those codes don't apply here. Infiltration should only be possible through joints or a crack, never through the wall itself. If you're not sure whether you're looking at PCP vs. RCP, the giveaway is usually no visible stone aggregate and no steel reinforcement when damaged, just a uniform resin/sand matrix — and it will resist a standard concrete-pipe cutting tool."
      },
      {
        id: "rcp",
        code: "RCP",
        pattern: "speckle",
        name: "Reinforced Concrete Pipe",
        summary: "Concrete pipe with an internal steel rebar cage — same deterioration as CP, plus reinforcement-exposure codes once it's eaten through.",
        info: {
          "Shape": "Circular, square, rectangular, oval, arch, custom",
          "Coating": "None",
          "Color": "New: grey. Aged: grey/brown",
          "Joint Lengths": "8–12 ft / 2.5–3.5 m",
          "Lifespan": "~75 years (in use since the 1900s)"
        },
        groups: [
          {
            title: "Structural (progressive severity)",
            defects: [
              { code: "SRI", name: "Surface Damage – Roughness Increased", desc: "Surface is slightly worn/abraded/deteriorated — run a finger along the wall: if it feels rough, code SRI; if still smooth, it's not deteriorated enough yet." },
              { code: "SAV", name: "Surface Damage – Aggregate Visible", desc: "Intermediate stage: cement paste worn away enough that aggregate (stones) is clearly visible, but not yet projecting." },
              { code: "SAP", name: "Surface Damage – Aggregate Projecting", desc: "Aggregate is now projecting from the pipe wall, though not yet missing." },
              { code: "SAM", name: "Surface Damage – Aggregate Missing", desc: "Most severe stage: aggregate has completely fallen out, leaving visible pits/pockmarks/voids." },
              { code: "SZ", name: "Surface Damage – Other", desc: "Used for chipped joints in CP (instead of SSS), since concrete rarely spalls that way — SZ is the more appropriate code for chipped joints." }
            ]
          },
          {
            title: "Structural (reinforcement-specific)",
            defects: [
              { code: "SRV", name: "Surface Damage – Reinforcement Visible", desc: "Concrete has eroded (often H2S-related) enough that reinforcement rebar is visible, but not yet projecting into the pipe." },
              { code: "SRP", name: "Surface Damage – Reinforcement Projecting", desc: "Erosion is now serious; rebar is almost fully exposed and appears to project into the pipe." },
              { code: "SRC", name: "Surface Damage – Reinforcement Corroded", desc: "Rebar shows a texture/color change from corrosion, sometimes with pieces missing." }
            ]
          }
        ],
        notes: "Most codes are treated the same as plain Concrete Pipe (SRI, SAV, SAP, SAM, C, F, DR, etc. all share the same trigger points). The real difference is the reinforcement-exposure codes (SRV/SRP/SRC). Rebar is welded in two directions (circumferential and longitudinal); which direction shows first in SRV depends on which layer is welded on the inside."
      },
      {
        id: "rpm",
        code: "RPM",
        pattern: "ring",
        name: "Reinforced Plastic / Truss Pipe",
        summary: "Double-walled truss plastic pipe. Rigid by classification, but its structural codes behave more like a flexible material.",
        info: {
          "Shape": "Circular",
          "Coating": "Uncommon, but epoxy or polyethylene may be used",
          "Color": "White, beige, gray, blue",
          "Joint Lengths": "10–13 ft / 3–4 m",
          "Lifespan": "~70 years (introduced in 1963)"
        },
        groups: [],
        notes: "Key ID trait: RPM joints are adhesive, not gasketed — peeling adhesive at a joint is the most common thing new coders misread as a defective sealing ring."
      },
      {
        id: "vcp",
        code: "VCP",
        pattern: "speckle",
        name: "Vitrified Clay Pipe",
        summary: "Fired clay pipe, very brittle. The most crack/fracture- and root-prone material, thanks to short, frequent joints.",
        info: {
          "Installation": "Bell-and-spigot with gasket",
          "Shape": "Circular",
          "Coating": "Glazed",
          "Color": "Most commonly orange when new; older pipe turns darker/browner, though joints and taps stay more noticeably orange",
          "Joint Lengths": "2–6 ft / 0.6–1.8 m — very short and frequent joints",
          "Lifespan": "~65 years (in use since the 1800s; standard by the 1920s)"
        },
        groups: [
          {
            title: "Surface Damage",
            defects: [
              { code: "SSS", name: "Surface Damage – Structure (Spalling)", desc: "Brighter-orange patches where the wall starts flaking off, exposing the pipe's interior layer. Also used with remark \"Chipped Joint\" when chips are missing at a joint. Modifier SSSM flags spalling that looks too square/perfect, indicating mechanical damage." }
            ]
          }
        ]
      },
    ]
  }
};

/*
  Codes — field coding rules and strategy guides that aren't tied to a
  specific pipe material. Each entry reuses the same { groups: [{ title,
  defects: [{ code, name, desc }] }] } shape as MATERIALS so the material
  detail renderer's group/defect-card markup can be reused as-is.
  Compiled from: internal "Continuous Defects Clinic" training deck.
*/
const CODES = {
  continuousDefects: {
    id: "continuousDefects",
    label: "Continuous Defects Strategy",
    blurb: "How far a Truly Continuous or Repeated Continuous defect is allowed to wander, and which code families it applies to at all.",
    generalRules: [
      "Defects inside a continuous defect can wander up and down to two clock positions.",
      "Defects separated by more than two clock positions must be split into two codes.",
      "Defects with a percentage variance greater than 15% must be split into two codes.",
      "Repeated continuous defects are allowed to skip only 1 joint.",
      "A continuous MWLS can rise and fall up to 15% and still stay one code.",
      "Truly Continuous travels along the barrel; Repeated Continuous is identified at joints.",
      "If the code driving a Repeated Continuous also appears in the barrel, it's covered by the repeated continuous and doesn't need its own code — e.g. a repeated SAV from clock 3 to 4 covers all SAV in the barrel until the continuous closes.",
      "To apply a Repeated Continuous defect, 3 out of 4 joints must be affected. Joint spacing doesn't matter for NASSCO Pure (e.g. DIP with long joint spacing).",
      "Avoid applying continuous defects in sanity coding."
    ],
    groups: [
      {
        title: "Structural — Primary Codes",
        defects: [
          { code: "C", name: "Crack", desc: "Longitudinal/Multiple: Truly Continuous if it extends > 3 ft (1 m). Circumferential: Repeated Continuous if 75% of joints are affected." },
          { code: "F", name: "Fracture", desc: "Longitudinal/Multiple: Truly Continuous if it extends > 3 ft (1 m). Circumferential: Repeated Continuous if 75% of joints are affected." },
          { code: "B", name: "Broken", desc: "Truly Continuous if it extends > 3 ft (1 m)." },
          { code: "H", name: "Hole", desc: "Truly Continuous if it extends > 3 ft (1 m)." },
          { code: "D", name: "Deformed", desc: "Truly Continuous if it extends > 3 ft (1 m)." },
          { code: "X", name: "Collapse", desc: "Does NOT use Continuous Defect." }
        ]
      },
      {
        title: "Structural — Other Codes",
        defects: [
          { code: "S", name: "Surface Damage", desc: "Use Truly or Repeated Continuous as necessary." },
          { code: "LF", name: "Lining Features", desc: "Truly Continuous applies to several of the LF codes." },
          { code: "WF", name: "Weld Failure", desc: "Applies to longitudinal, multiple, and spiral descriptors as Truly Continuous." },
          { code: "RP", name: "Point Repair", desc: "Truly Continuous if the repair itself is > 3 ft (1 m)." },
          { code: "Brickwork", name: "Brick codes", desc: "Truly Continuous if the defect is > 3 ft (1 m). Repeated Continuous does NOT apply to brickwork." }
        ]
      },
      {
        title: "Operation & Maintenance (O&M)",
        defects: [
          { code: "DA*", name: "Deposits", desc: "Truly Continuous Defect applicable if needed." },
          { code: "R*", name: "Roots", desc: "Typically Repeated Continuous (often found at joints); Truly Continuous for roots traveling in the barrel > 3 ft (1 m)." },
          { code: "I*", name: "Infiltration", desc: "Can be Truly or Repeated Continuous in certain circumstances." },
          { code: "OB*", name: "Obstacles", desc: "Continuous is not recommended, but can apply as Truly Continuous for obstructions > 3 ft (1 m), and as Repeated Continuous for OBJ (wedged in the joint)." },
          { code: "V / G", name: "Vermin / Grout Test", desc: "Do NOT apply as Continuous Defect." }
        ]
      },
      {
        title: "Miscellaneous Features (M)",
        defects: [
          { code: "MCU", name: "Camera Underwater", desc: "If underwater, code as Truly Continuous > 3 ft (1 m). If less, note the footage in Remarks instead." },
          { code: "MWLS", name: "Water Level Sag", desc: "Code as Truly Continuous. Rise/fall can wander up to 15%; start and finish must log the same %." },
          { code: "MLC", name: "Lining Change", desc: "A Continuous Defect may be used if necessary." },
          { code: "MWL / MWM", name: "Water Level / Water Mark", desc: "Do NOT apply as Continuous Defects." }
        ]
      },
      {
        title: "Construction Features",
        defects: [
          { code: "IS*", name: "Intruding Sealing Material", desc: "Apply as Repeated Continuous if present in at least 3 of 4 joints." },
          { code: "L*", name: "Line Changes", desc: "Use Truly Continuous if the change in direction is > 3 ft (1 m)." },
          { code: "T* / A*", name: "Taps and Access Points", desc: "Do NOT use Continuous Defect." }
        ]
      }
    ]
  },

  taps: {
    id: "taps",
    label: "Taps",
    blurb: "Code: T. Descriptors: B (Break-in), F (Factory), R (Rehabilitated), S (Saddle). Modifiers, most to least significant: I (Intruding) > D (Defective) > C (Capped) > A (Activity) > B (Abandoned).",
    generalRules: [
      "Diameter of the tap is entered in the Value Dimension 1st column, to the nearest inch or 10mm.",
      "A single clock position records the tap's location.",
      "When multiple modifiers could apply to one tap, code in order of significance — Intruding, then Defective, then Capped, then Activity, then Abandoned — and note the rest in Remarks."
    ],
    groups: [
      {
        title: "Factory (TF)",
        defects: [
          { code: "TF", name: "Tap Factory", desc: "A purpose-made or pre-formed fitting installed during construction, no defects seen. White fittings are commonly used with green PVC, and CAS fittings with DIP — neither needs its own code. To tell factory from break-in, check whether the tap's material matches the host pipe; if it doesn't, assume it's a break-in. A \"Drop Section\" (a new mainline joining the inspected one, usually at 12 or 6 o'clock) can look like a same-size TFA — code it TFA with remark \"Upper Section\" or \"Drop Section\"; if the inspection ends there without reaching a manhole, the last code must be MSA with remark \"TFA Drop Section.\"" },
          { code: "TFA", name: "Tap Factory Active", desc: "No defects seen, sits flush with the pipe wall, and flow is observed during the inspection. Current flow or staining below the tap is also evidence of activity. VC, VR, or VZ do NOT make the tap defective — code TFA/TBA and note the VC/VR/VZ in Remarks." },
          { code: "TFB", name: "Tap Factory Abandoned", desc: "No longer in use — may be filled with debris or collapsed. Spider-webs across the opening are a common sign it's inactive." },
          { code: "TFC", name: "Tap Factory Capped", desc: "Capped with a fitting or stopper. A well-installed cap shows no defects, fits the tap's size, and looks machine-made. Hand-made caps (often bricks sealed together with concrete/adhesive) are less durable and more prone to damage — still code TFC if no defects are visible. If any defect shows at a capped tap, code TFD/TBD instead, with remark \"Defective cap\" plus the defects seen." },
          { code: "TFI", name: "Tap Factory Intruding", desc: "Intrudes into the mainline. Rare except in brick pipe. May carry other defects or observed flow — note in Remarks." }
        ]
      },
      {
        title: "Break-in (TB)",
        defects: [
          { code: "TB", name: "Tap Break-in", desc: "A hole made in the pipe wall to install the tap, aligned evenly with no defects seen. \"Connection\" is the touching point between lateral and main (TF has none, TB does). Square cuts are coded TB with remark \"Square cut\" and are not defective unless gapping or leaking is present." },
          { code: "TBA", name: "Tap Break-in Active", desc: "No defects seen, aligned evenly, flow observed during the inspection." },
          { code: "TBB", name: "Tap Break-in Abandoned", desc: "No longer in use — may be filled with debris or collapsed. If abandonment can't be confirmed because of other defects present, code TBD instead, with remark \"possibly abandoned\" plus the defects seen." },
          { code: "TBC", name: "Tap Break-in Capped", desc: "Capped with a fitting or stopper. If true defects are present, code TBD instead, with remarks noting the defects plus \"capped.\"" },
          { code: "TBD", name: "Tap Break-in Defective", desc: "Any defect at the tap or connection makes it defective — including a gap around the connection, installation against flow, or installation below the springline. Under sanity coding, VC/VR/VZ alone don't make it defective unless paired with a structural defect or ≥10% deposits; NASSCO Pure counts any defect touching the connection or inside the lateral. Square cuts alone don't make a tap defective." },
          { code: "TBI", name: "Tap Break-in Intruding", desc: "Intrudes into the pipe. May carry other defects or observed flow — note in Remarks." }
        ]
      },
      {
        title: "Rehabilitated (TR)",
        defects: [
          { code: "TR", name: "Tap Rehabilitated", desc: "A repaired/rehabilitated tap, no defects seen, aligned evenly with the pipe wall." },
          { code: "TRI", name: "Tap Rehabilitated Intruding", desc: "A repaired/rehabilitated tap intruding into the main by more than 1\"." }
        ]
      },
      {
        title: "Saddle (TS)",
        defects: [
          { code: "TS", name: "Tap Saddle", desc: "A fitting used to connect and seal the lateral to the inner or outer wall of the main after it was already installed. The rubber gasket seal is almost always black." },
          { code: "TSA", name: "Tap Saddle Active", desc: "Aligned evenly with the pipe wall, flow observed during the inspection." },
          { code: "TSB", name: "Tap Saddle Abandoned", desc: "No longer in use — may be filled with debris or collapsed; spider-webs are a common sign." },
          { code: "TSC", name: "Tap Saddle Capped", desc: "Capped with a fitting or stopper. A well-installed cap shows no defects, fits the tap's size, and looks machine-made." },
          { code: "TSD", name: "Tap Saddle Defective", desc: "Same defective logic as TBD — any defect at the tap/connection, a gap around the connection, installation against flow, or installation below the springline all make it defective." },
          { code: "TSI", name: "Tap Saddle Intruding", desc: "Intrudes into the mainline. Defects at the tap itself can go in Remarks; defects at the connection get their own separate mainline entry." }
        ]
      }
    ]
  },

  sealingMaterial: {
    id: "sealingMaterial",
    label: "Intruding Sealing Material",
    blurb: "Code: IS. Descriptors: GT (Grout), SR (Sealing Ring), Z (Other). Modifiers on ISSR only (required in V7/V8): B (Broken), H (Hanging), L (Loose/Poorly Fitting).",
    generalRules: [
      "All IS codes fall at a joint — the Joint (J) notation always applies.",
      "Coded as Repeated when the material is seen at 3 out of 4 joints.",
      "Value: CSL recorded to the nearest 5%, for every descriptor except ISSRL.",
      "Clocks: 1 or 2, marking the entry and exit points."
    ],
    groups: [
      {
        title: "Grout / Other",
        defects: [
          { code: "ISGT", name: "Grout", desc: "Excess grout or concrete squeezed through the joint during grout injection. Mostly found in rigid pipe (VCP, concrete) — grout doesn't stick to metal or plastic. Irregular, \"mountain-like\" shape (unlike the uniform shape of a sealing ring), usually dark grey or beige. In lined pipe, resin intruding from an unexpected cut in the liner can be coded ISGT if the intrusion is >5% and the adhesion clearly failed — confirm with management first." },
          { code: "ISZ", name: "Other", desc: "Sealing material that isn't grout or a sealing ring. Not to be confused with deposits: ISZ is intentionally-placed sealing material that was installed defectively; deposit codes cover unintentional debris caught at the joint. In RPM (truss pipe), adhesive intrusion ≥5% is coded ISZ with remark \"Adhesive.\" Dirt commonly accumulating at PVC joints is NOT sealing material and shouldn't be coded." }
        ]
      },
      {
        title: "Sealing Ring (ISSR)",
        defects: [
          { code: "ISSRB", name: "Sealing Ring — Broken", desc: "A black or copper-colored ring, thin, generally following the pipe's circular shape, that has moved away from the joint and does NOT return to it — that's what makes it Broken rather than Hanging. DIP can have sealing rings, but weld failures on DIP usually occur outside the pipe, so they're uncommon to see on inspection." },
          { code: "ISSRH", name: "Sealing Ring — Hanging", desc: "Intrudes into the pipe but re-enters the joint unbroken. Can appear at the invert without necessarily hanging down from an upper clock position." },
          { code: "ISSRL", name: "Sealing Ring — Loose / Poorly Fitting", desc: "Rings are meant to fit snugly between bell and spigot. A loose ring isn't visible until the camera pans." }
        ]
      }
    ]
  },

  lineDirection: {
    id: "lineDirection",
    label: "Line Direction",
    blurb: "Code: L. A deliberate, gradual construction feature — not a defect. Full codes are L + direction: LL/LR/LU/LD for a single direction, LLU/LLD/LRU/LRD for a diagonal.",
    generalRules: [
      "Expressed as % deviation: a 90° bend = 100%, a 45° bend = 50%, a 22.5° bend = 25%.",
      "Truly Continuous applies where the direction change is a bend greater than 3 ft / 1 m.",
      "A change spanning two directions at once (e.g. Left and Up) needs the smaller value noted in Remarks along with its direction.",
      "No joint or clock notation applies to Line Direction codes."
    ],
    groups: [
      {
        title: "Directional Descriptors",
        defects: [
          { code: "LL", name: "Left", desc: "Line deviates to the left." },
          { code: "LR", name: "Right", desc: "Line deviates to the right." },
          { code: "LU", name: "Up", desc: "Line deviates up." },
          { code: "LD", name: "Down", desc: "Line deviates down." },
          { code: "LLU", name: "Left Up", desc: "Line deviates to the left and up." },
          { code: "LLD", name: "Left Down", desc: "Line deviates to the left and down." },
          { code: "LRU", name: "Right Up", desc: "Line deviates to the right and up." },
          { code: "LRD", name: "Right Down", desc: "Line deviates to the right and down." }
        ]
      },
      {
        title: "Line Direction vs. JAM / JAL",
        defects: [
          { code: "L vs JAM/JAL", name: "Telling them apart", desc: "Look for design intent. A Line Direction change is gradual, smooth, and deliberate — it helps the water flow rather than obstructing it, and it doesn't come with surrounding damage. JAM/JAL, by contrast, does NOT look gradual: it shows poor construction, surrounding defects (fractures or a gap right at the joint), and it redirects the intended flow path rather than following it. A single joint that's oddly placed or redirected, with no gradual buildup around it, is a strong sign it's JAM/JAL rather than a deliberate line change. When a JA code applies, a separate line code is not also needed." }
        ]
      }
    ]
  },

  accessPoints: {
    id: "accessPoints",
    label: "Access Points",
    blurb: "Code: A. Required at the start of every survey, and at the end wherever the access point was reached. Modifiers: M (Mainline/right-of-way), P (Property), H (House).",
    generalRules: [
      "Value is used for ATC only, recording the tee's diameter. Clocks are used for ATC only, marking where the tee connection meets the pipe being inspected.",
      "Remarks must include the specific structure name."
    ],
    groups: [
      {
        title: "Access Point Types",
        defects: [
          { code: "AMH", name: "Manhole", desc: "A man-entry structure for maintenance and inspection access. Inspections MUST start and end at access points unless an MSA is coded. Unmapped access points are common — code them and flag them to team managers regardless. If there's visual confirmation of driving past an access point that the operator didn't call or code, code it yourself and stop the inspection there." },
          { code: "AEP", name: "End of Pipe", desc: "The pipe ends underground with no manhole, cleanout, or other structure. Weirs are a common structure found near an AEP close to a WWTP — a flat, vertical surface with evenly spaced holes." },
          { code: "ACB", name: "Catch Basin", desc: "An inlet/structure allowing stormwater inflow into the storm sewer. Only switch from AMH to ACB at the start/end of an inspection when the lid is slotted and square/rectangular — a catch-basin-shaped manhole is still coded AMH." },
          { code: "ACOM", name: "Cleanout — Mainline", desc: "A cleanout installed directly on the mainline (a.k.a. lamp hole), or on a lateral but within the public right-of-way. Looks like a vertical tap the same size as the mainline, usually at the very end of the pipe. ACOM is itself an access point — no MSA is required, and no tap code is needed alongside it. Remarks must include the associated upstream/downstream manhole number." },
          { code: "ADP", name: "Discharge Point", desc: "Where the pipe (normally storm) empties into a stream or other body of water." },
          { code: "AJB", name: "Junction Box", desc: "A chamber where two or more pipes join, usually located outside a treatment facility where large-diameter pipes converge." },
          { code: "AM", name: "Meter", desc: "A structure built to house flow measurement equipment. A regular manhole with a flow meter installed is still coded AMH — note the meter in the header's Comments field instead." },
          { code: "ATC", name: "Tee Connection", desc: "A junction where two or more pipes meet without a typical access structure — often plumbing tees/wyes, so it can look like a 90° or 45° bend from inside. Made of a run (the fitting's main body) and a branch (the intersecting segment). The inspection ends at another pipe with flow; the required clock position marks that pipe's flow direction." },
          { code: "AWA", name: "Wastewater Access", desc: "Intermediate access between manholes, at a grade/direction change, or at an end-of-line segment — not large enough for man-entry, but sized for CCTV and cleaning equipment. Also covers temporary access installed for a construction project." },
          { code: "AWW", name: "Wet Well", desc: "Access through a pump station wet well, tank, pit, or reservoir — commonly called a \"lift station,\" since pumps lift water from the reservoir into force/trunk mains. Can look manhole-like; don't call it AWW without visual confirmation of pumping equipment or weirs." }
        ]
      }
    ]
  },

  misc: {
    id: "misc",
    label: "Miscellaneous",
    blurb: "Code: M. General condition and survey-status codes that don't fit any other family — water level, survey abandonment, material/shape/lining changes, and general observations.",
    groups: [
      {
        title: "Water Level & Survey Status",
        defects: [
          { code: "MWL", name: "Water Level", desc: "Mandatory at 0 ft after the access point, expressed as % of diameter/height to the nearest 5%. One MWL entry covers changes of up to 10% up or down without needing a new code — only add a new code once the level moves enough to matter (e.g. it climbs to 20% and doesn't fully return). Code 0% only with visual confirmation that no water was present at all." },
          { code: "MWLS", name: "Water Level Sag (S modifier)", desc: "Used only with visual confirmation of a sag — a downward dip that can signal structural issues in the surrounding soil. A sag is still water, not water simply being pushed along by the camera. Recorded as the percentage at the sag's lowest point. Debris-caused water changes (e.g. toilet paper) are NOT sags. A sag can be coded without JOM/JAM support, but a clear elevation change must be visible; poor camera positioning (too low) can create the illusion of deeper water." },
          { code: "MWM", name: "Water Mark", desc: "An obvious mark on the pipe wall showing where water regularly reaches, even though it's not present during the survey. Tracked alongside MWL with the same ≥10% change threshold — mainly used when a project specifically needs data on surcharging pipes." },
          { code: "MSA", name: "Survey Abandoned", desc: "Coded when the operator stops the inspection because of a defect. Must be the last code — nothing follows it. Two codes are required: the cause code, then MSA at the same distance with the cause code in Remarks (e.g. \"4.5 OBR\" then \"4.5 MSA — Remark: OBR\"). If there's no clear cause, use \"Unknown reason.\" A continuous defect extending past the MSA point gets an estimated distance in Remarks, but the closing distance must still land before the MSA." }
        ]
      },
      {
        title: "Material, Shape & Lining Changes",
        defects: [
          { code: "MMC", name: "Material Change", desc: "Coded where a material change was part of the original construction — otherwise, consider RPR instead. If asset records list a material that the video contradicts, add an MMC noting the correct material. An RPR is a short section replaced years after installation to fix defects; MMC indicates two materials installed together by original design." },
          { code: "MSC", name: "Shape/Size Change", desc: "Circular pipe: record the nearest inch/10mm in Value Dimension 1. Non-circular: vertical dimension in Value Dimension 1, horizontal in Value Dimension 2. If the shape itself changes (circular to non-circular or vice versa), note the shape code from the header section in Remarks." },
          { code: "MLC", name: "Lining Change", desc: "Coating or lining changes partway through the pipe — record the new lining/coating code from the header section in Remarks." },
          { code: "MJL", name: "Joint Length Change", desc: "When the distance between joints changes, record the new joint length (feet to the tenths, or metres to two decimal places) in Value Dimension 1." }
        ]
      },
      {
        title: "Observations & Testing",
        defects: [
          { code: "MGO", name: "General Observation", desc: "Any condition not classified by another PACP code. Remarks are mandatory." },
          { code: "MGP", name: "General Photograph", desc: "A still photo documenting a condition not classified elsewhere, used in place of MGO. If tilt is used, note the relevant clock position(s) in Remarks." },
          { code: "MCU", name: "Camera Underwater", desc: "Coded when the camera is submerged, typically above 50%. Can be Truly Continuous. If the camera resurfaces for less than 3 ft/1 m, log that footage in Remarks instead of breaking the continuous." },
          { code: "MY", name: "Dye Test", desc: "Coded when the survey coincides with a dye test (checking cross-connections, I/I sources, or specific building connections). Modifiers: V (Visible — record the dye color and details in Remarks) or N (Not Visible — test conducted but dye wasn't seen)." }
        ]
      }
    ]
  },

  om: {
    id: "om",
    label: "Operation & Maintenance",
    blurb: "Code families: D (Deposits), R (Roots), I (Infiltration), OB (Obstacles), V (Vermin), G (Grout Test and Seal) — conditions from ongoing use and groundwater, not construction or structural failure.",
    generalRules: [
      "V6 doesn't use the B (Barrel)/C (Connection)/J (Joint)/L (Lateral) location modifiers on Infiltration codes — code just ID, IS, IW, IR, or IG. V7/V8 require the modifier.",
      "Deposits (D) and Obstacles (OB) record % cross-sectional loss (CSL) to the nearest 5% in the Value % column.",
      "Roots (R) also record CSL to the nearest 5%, except the F (Fine) descriptor, which doesn't use Value.",
      "When a deposit or root mass appears on both sides of the pipe, use two entries with matching clock positions — or, in V8, a single entry with two clock positions.",
      "Vermin (V) records a headcount in Value Dimension 1 for Rat and Other; Cockroach doesn't use Value.",
      "Grout Test and Seal (G) records the grout volume (gallons/litres) in Value Dimension 1 and the tested/retested pressure (kPa/psi) in Value Dimension 2."
    ],
    groups: [
      {
        title: "Deposits — Attached (DA)",
        defects: [
          { code: "DAE", name: "Encrustation", desc: "A mineral deposit from ongoing groundwater leakage — organic, not man-made. Needs an external source of ingression (a defective joint, fracture, hole, deformation, or defective tap connection); if none of those are visible, DAE probably isn't the right code. Usually shows up together with its source defect and an infiltration code as three separate entries at the same location. In metal pipe, tuberculation is coded as DAE. NASSCO Pure codes at >1%; sanity coding waits for >5%." },
          { code: "DAGS", name: "Grease", desc: "A man-made deposit from an external source (kitchens, bathroom products) — never created by soil or nature, so taps/access points are the source to check first. Builds up above the water line in parallel lines, or in a \"shelf\" pattern with round, mountain-like edges; beige/grey/yellowish, similar to candle wax. Use two codes and clock positions for both sides (or a single entry with two clocks in V8). NASSCO Pure codes at ≥1%; sanity coding waits for ≥5%." },
          { code: "DAR", name: "Ragging", desc: "Human-made debris (towels, diapers, feminine products, toilet paper) caught on a defect or sewer component. Sanitary debris is expected in sanitary sewers, so it doesn't always need coding — code it once it's created a real problem: significant mass, snagged on something, or obstructing flow. If it points to surcharging, add MGO \"evidence of surcharging.\"" },
          { code: "DAZ", name: "Other", desc: "Unclassified attached deposits — remarks mandatory (e.g. \"Unknown deposit\"). Also used for cockroach nests (remark \"Cockroach nest\"), non-DAGS scale/slime layers (remark \"Slime layer\"), and in V8, metal-pipe tuberculation. Sanity coding waits for ≥5%; NASSCO Pure codes at any %." }
        ]
      },
      {
        title: "Deposits — Ingress (DN)",
        defects: [
          { code: "DNF", name: "Fine", desc: "Fine particulate (soil, sand, mud) washed in from a pipe defect, settling at the bottom — the clue that separates it from DSF is a clear defect it's ingressing through (e.g. a hole or tap). With no visible external origin, DSF is the better code instead." },
          { code: "DNGV", name: "Gravel", desc: "Small pebble-like rocks washed in from a defect." },
          { code: "DNZ", name: "Other", desc: "Ingressing deposits not classified by the other descriptors." }
        ]
      },
      {
        title: "Deposits — Settled (DS)",
        defects: [
          { code: "DSC", name: "Hard/Compacted", desc: "Hardened or compacted debris (e.g. spilled, cured concrete), dense and structurally bound — firm or solid whether wet or dry, low porosity, and will physically stop the camera from riding over it. Contrast with DSF: DSF is loose, easily disturbed, and porous, even when it looks solidified." },
          { code: "DSF", name: "Fine", desc: "Fine particulate settled in the invert — can look muddy or fluid, especially once the water turns from clear to brown and \"heavy.\" Wait for clear visual evidence and confirmed circumferential loss before coding deposits underwater." },
          { code: "DSGV", name: "Gravel", desc: "Small pebble-like rocks settled in the invert." },
          { code: "DSS", name: "Sanitary", desc: "Sanitary deposits (toilet paper, organic material) settled in the invert. V8 only, and only in storm sewer pipes, coded once CSL exceeds 5%." },
          { code: "DSZ", name: "Other", desc: "Unclassified deposit settled in the invert." }
        ]
      },
      {
        title: "Grout Test and Seal (G)",
        defects: [
          { code: "GRT", name: "At a Location", desc: "Coded at the time of the grouting procedure itself, at a specific location." },
          { code: "GTF", name: "Test Fail", desc: "A grout test or seal that failed at the joint/lateral." },
          { code: "GTP", name: "Test Pass", desc: "A grout test or seal that passed at the joint/lateral." },
          { code: "GTU", name: "Unable to Test", desc: "The test couldn't be completed — note why in Remarks." }
        ]
      },
      {
        title: "Infiltration (I)",
        defects: [
          { code: "IDB", codeV6: "ID", name: "Dripper, Barrel", desc: "A steady drip along the barrel, typically tied to a structural defect. V6 doesn't use location modifiers — code it just as ID." },
          { code: "IDJ", codeV6: "ID", name: "Dripper, Joint", desc: "A steady drip at the joint — more than a weeper, less than a runner. V6 doesn't use location modifiers — code it just as ID." },
          { code: "IGB", codeV6: "IG", name: "Gusher, Barrel", desc: "Water forcing its way through a defect and gushing in under pressure. V6 doesn't use location modifiers — code it just as IG." },
          { code: "IRC", codeV6: "IR", name: "Runner, Connection", desc: "Continuous flow without pressure at a tap connection — only used on break-in or intruding taps, since a factory tap (TF) has no connection for it to enter through. V6 doesn't use location modifiers — code it just as IR." },
          { code: "IRJ", codeV6: "IR", name: "Runner, Joint", desc: "Runs like a faucet at the joint, but without pressure behind it. V6 doesn't use location modifiers — code it just as IR." },
          { code: "ISB", codeV6: "IS", name: "Stain, Barrel", desc: "Dry at the time of inspection — the discoloration is evidence of past infiltration, not current moisture. V6 doesn't use location modifiers — code it just as IS." },
          { code: "ISJ", codeV6: "IS", name: "Stain, Joint", desc: "Dry at the time of inspection. Look for a triangle-shaped stain at the joint; without that shape, it could just be dirt. V6 doesn't use location modifiers — code it just as IS." },
          { code: "IWJ", codeV6: "IW", name: "Weeper, Joint", desc: "Wet with no visible moving water. If the joint is wet but the surrounding pipe wall is dry, the Pre-Cleaning field doesn't matter here — that field only matters when a flushing nozzle was present or cleaning obviously happened during the inspection (wall visibly wet all the way around). V6 doesn't use location modifiers — code it just as IW." }
        ]
      },
      {
        title: "Obstacles / Obstructions (OB)",
        defects: [
          { code: "OBB", name: "Brick or Masonry", desc: "Bricks or other masonry causing significant CSL/obstructing flow, typically in the invert." },
          { code: "OBC", name: "Through Connection", desc: "An object entering the main through a tap or lateral." },
          { code: "OBI", name: "Intruding Through Wall (Cross Bore)", desc: "A utility line (gas, water, fiber, power, telephone) driven through the pipe wall after construction — doesn't look finished, is a public-safety hazard, and must be reported to the owner immediately. Always accompanied by two H codes (or one H with two clock positions) at the points where it meets the pipe wall — that pairing is mandatory." },
          { code: "OBJ", name: "Wedged in the Joint", desc: "Any object wedged in the joint, with remarks — except intruding sealing rings/material, which get their own IS codes instead." },
          { code: "OBM", name: "Pipe Material in Invert", desc: "Medium-to-large sections of broken pipe lying in the invert — the source hole is typically found upstream." },
          { code: "OBN", name: "Construction Debris", desc: "Loose concrete, metal, or wood timbers in the invert, with remarks describing what it is. Hardened concrete from a spill is DSC, not OBN." },
          { code: "OBP", name: "External Pipe or Cable", desc: "A hose or deliberately installed cable that doesn't intrude through the wall — typically runs the length of the sewer in the invert." },
          { code: "OBR", name: "Rocks", desc: "Rocks larger than gravel, obstructing flow in the invert." },
          { code: "OBS", name: "Built into Structure", desc: "An object intentionally built into the pipe structure, looking finished — describe it in remarks." },
          { code: "OBZ", name: "Other", desc: "An obstacle not clearly classified by the other descriptors (e.g. a plumber's snake or drain cable)." }
        ]
      },
      {
        title: "Roots (R)",
        defects: [
          { code: "RBJ", name: "Ball, Joint", desc: "Roots gathered into a mass greater than 50% CSL, directly at the joint. If RBJ and DAGS are fused into the same mass, split the total CSL between them rather than double-counting (e.g. a 90% mass = 40% RBJ + 50% DAGS, not 90 of each). Continuous defect coding doesn't apply to a defect this severe — only code it once the root ball itself is ≥50%." },
          { code: "RFC", name: "Fine, Connection", desc: "Fine roots around a tap connection. Only coded on break-in/saddle/intruding taps, since a factory tap (TF) has no connection for roots to enter through. Add a separate mainline entry if visible there; otherwise it only goes in the tap's remarks." },
          { code: "RFJ", name: "Fine, Joint", desc: "Hair-like roots, under 5% CSL, occurring right at the joint. Use separate clock positions if the roots vary by more than two clock positions; use a single code with two clock positions if they're visible on both sides." },
          { code: "RMB", name: "Medium, Barrel", desc: "A root mass in the barrel/wall, typically growing through a defect (fracture, hole, etc). Use two codes and matching clock positions for both sides." },
          { code: "RMJ", name: "Medium, Joint", desc: "A root mass between 5% and 50% CSL, directly at the joint. Use two codes and matching clock positions for both sides." },
          { code: "RML", name: "Medium, Lateral", desc: "Roots entering the mainline through a service lateral. In V7+, use the L modifier for roots inside a lateral even if the lateral is capped." },
          { code: "RTJ", name: "Tap, Joint", desc: "A single thick, branch-like root, over ½\" (10mm) thick, at the joint — can expand or create new defects on its own. Check the size/thickness before coding, and check with the team before coding what might actually be a tree branch (obstacle) instead. Doesn't need its own code when already covered by a Roots Medium entry." }
        ]
      },
      {
        title: "Vermin (V)",
        defects: [
          { code: "VC", name: "Cockroach", desc: "Cockroaches or other insects, including spiders. No headcount value is recorded." },
          { code: "VR", name: "Rat", desc: "Rats or mice — record the count in Value Dimension 1." },
          { code: "VZ", name: "Other", desc: "Any other animal (worm, lizard, snake, frog) — describe it in Remarks." }
        ]
      }
    ]
  },

  structural: {
    id: "structural",
    label: "Structural Defects",
    blurb: "The full family of structural defect codes: Cracks, Fractures, Broken, Hole, Deformed/Buckling, Collapse, Joints, Surface Damage, Lining Features, Weld Failure, Point Repair, and Brickwork.",
    groups: [
      {
        title: "Cracks (C) — visible, NOT visibly open",
        defects: [
          { code: "CC", name: "Crack Circumferential", desc: "Circular in nature, common near joints and manholes. Don't confuse with manufacturing defects also seen near joints — if the break looks too perfect, with even/smooth edges, it's likely manufactured and shouldn't be coded. True cracks appear from external pressure on the pipe." },
          { code: "CH", name: "Crack Hinge", desc: "Occurs concurrently at 12, 3, 6, and 9 o'clock. If one of the longitudinal breaks is open (a Fracture), the whole defect escalates to Fracture Hinge (FH). Coded CH 2/3/4 for the clock positions affected." },
          { code: "CL", name: "Crack Longitudinal", desc: "Runs lengthwise along the pipe axis. Common at joints and taps. A closed breakline with no visible gap." },
          { code: "CM", name: "Crack Multiple", desc: "A longitudinal and circumferential break intersecting. If any of the intersecting breaklines is a Fracture, code the whole thing as FM instead. Structural defects from C to X at the same location don't need separate codes — e.g. a CM intersecting an H is coded as H alone, using whichever code has the highest severity." },
          { code: "CS", name: "Crack Spiral", desc: "Coded when a crack changes position or \"turns\" — e.g. starts longitudinal, turns circumferential. Commonly starts at a joint and may return to the same joint; typically doesn't travel across joints. A longitudinal that travels between clock positions becomes a spiral." }
        ]
      },
      {
        title: "Fractures (F) — visibly open, gap/depth visible",
        defects: [
          { code: "FC", name: "Fracture Circumferential", desc: "Circular, parallel to joints, commonly seen near joints and manholes. If FC appears at every joint with unusually uniform spacing, it's most likely a manufacturing defect and shouldn't be coded." },
          { code: "FH", name: "Fracture Hinge", desc: "Occurs concurrently at 12, 3, 6, 9. When a fracture at 12 pairs with cracks at 3 and 9, the worse defect (fracture) is what's reported — a combination of an FL and a CL becomes FH, but an FM at the location doesn't qualify. Coded when 3, 6, 9, or 12 are affected; when it covers every clock position, code it 12 to 12. If it causes the rigid pipe to go out-of-round, escalate to Deformed (DR)." },
          { code: "FL", name: "Fracture Longitudinal", desc: "Runs lengthwise along the pipe axis, common at joints and taps. The breakline is visibly open, revealing a gap — that openness is what separates a Fracture from a Crack." },
          { code: "FM", name: "Fracture Multiple", desc: "Where fractures intersect each other, or a fracture intersects a crack — the whole defect is coded FM." },
          { code: "FS", name: "Fracture Spiral", desc: "A single fracture that travels both longitudinally and circumferentially, changing position or \"turning.\" Typically starts at a joint and may return to it; typically doesn't cross joints." }
        ]
      },
      {
        title: "Broken (B)",
        defects: [
          { code: "B", name: "Broken", desc: "Pipe wall has visibly moved from its original position. V6 threshold: at least ½ pipe wall thickness displaced. V7/V8 threshold: approximately ¼ pipe wall thickness." },
          { code: "BSV", name: "Broken, Soil Visible", desc: "Pipe wall has moved and soil is visible in the gap, but hasn't eroded away yet." },
          { code: "BVV", name: "Broken, Void Visible", desc: "Pipe wall has moved and is not yet missing, but a void/cavity is visible — soil has eroded away outside the pipe." }
        ]
      },
      {
        title: "Hole (H)",
        defects: [
          { code: "H", name: "Hole", desc: "Pipe material is missing — a small amount of wall gone, with no soil or void present. When an extremely large H/HSV/HVV shows up in a lateral near the main or at the connection, identify it as a defective tap with an appropriate remark, and also code the hole on the main." },
          { code: "HSV", name: "Hole, Soil Visible", desc: "Pipe wall is missing and soil is visible in the gap, but hasn't eroded away yet." },
          { code: "HVV", name: "Hole, Void Visible", desc: "Pipe wall is missing and a void/cavity is visible, indicating soil has eroded away outside the pipe. Any broken/fracture/crack touching the hole gets coded too." }
        ]
      },
      {
        title: "Deformed / Buckling (D)",
        defects: [
          { code: "DFBI", codeV6: "KI", name: "Deformed Flexible, Bulging Inverse Curvature", desc: "An inward bulge with a sharp crest — can look like a heart or a fin, distinct from a rounded bulge." },
          { code: "DFBR", codeV6: "KD", name: "Deformed Flexible, Bulging Round", desc: "One or more rounded projections into the pipe. V6's KD had no grade. Can resemble dimpling in RPM/PVC — if it's mountain-like and sits on a liner, consider LFBU instead (see LFB vs DFBR under Lining Features)." },
          { code: "DFC", codeV6: "KW", name: "Deformed Flexible, Creasing", desc: "Sharp outward folding of the pipe wall. V6's KW (Buckling Wall) had no grade." },
          { code: "DFE", codeV6: "KW", name: "Deformed Flexible, Elliptical", desc: "Original circular shape visibly compressed into an oval. Graded by CSL in V7/V8: ≤5% = Grade 2, >5–10% = Grade 3, >10–20% = Grade 4, >20–40% = Grade 5. V6's KW (Buckling Wall) had no grade." },
          { code: "DR", name: "Deformed Rigid", desc: "Pipe wall has moved and is broken/cracked, original shape visibly compressed. Other structural defects present at the location don't need separate coding, but O&M defects still do. Only used up to 40% CSL — beyond that (e.g. 45%) it's Collapse (X). % of CSL lost sets the severity grade: ≤5% = Grade 4, >5% = Grade 5." },
          { code: "DV / DH", name: "Deformed Vertically / Horizontally", desc: "DV: pressure at 12 and 6 forces 9 and 3 to bow outward. DH: pressure at 9 and 3 forces 12 and 6 to bow outward." }
        ]
      },
      {
        title: "Collapse (X)",
        defects: [
          { code: "X", name: "Collapse", desc: "Complete loss of structural integrity — greater than 40% cross-sectional area lost, flow conveyance completely disrupted. No descriptors, modifiers, joint, or clocks apply; value is CSL % (>40%). Does NOT use Continuous Defect." }
        ]
      },
      {
        title: "Joints — defective displacements",
        defects: [
          { code: "JAM / JAL", name: "Joint Angular Medium / Large", desc: "JAM: out of alignment more than 5°, up to 10°. JAL: out of alignment more than 10°. Both are caused by pipe movement (usually lost support), unintentionally changing flow direction — shown as left-right snaking of the pipe visible in the flow." },
          { code: "JOL", name: "Joint Offset Large", desc: "Displaced more than 1.5x pipe wall thickness. Normalized coding adds HSV/HVV when soil/voids are also visible at the JOL; under NASSCO Pure, whether HSV/HVV applies is debatable and depends on the reviewer." },
          { code: "JOM", name: "Joint Offset Medium", desc: "Displaced more than 1 but less than 1.5x the pipe wall thickness." },
          { code: "JOMD / JOLD", name: "Joint Offset Medium/Large, Defective", desc: "Displaced enough to disrupt flow — doesn't exist in V6. Whether the Defective modifier applies depends on whether the JOM/JOL is actually disrupting water flow." },
          { code: "JSL", name: "Joint Separated Large", desc: "Gap ≥1.5x pipe wall thickness between joints, with evidence of gasket displacement (gasketed systems). Bell-and-spigot: the spigot has pulled back out of the bell — look for an exposed/twisted/missing gasket or a visible gap at the insertion mark. Non-bell-and-spigot (couplers/slip/butt joints): the ends have separated within, or pulled apart from, the coupling. Code JSL with a 90° full-circumference pan confirming the bell is NOT touching the spigot, OR (with no pan) when infiltration/soil/debris ingress confirms it, and the gap is ≥1.5x wall thickness. Don't code JSL if the bell is still visibly touching the spigot. Add HSV/HVV alongside JSL only when the resulting void is significant — a cavern, the full exterior visible through the joint, daylight/running water visible, or a void large enough to risk soil infiltration/settlement/subsidence; ingressing soil/debris through a JSL is a good trigger too. If a separated joint was already repaired from the outside and the repair is visible on pan, don't code JSL — code the RPR only, since it indicates the JSL was already rehabbed." },
          { code: "JSM", name: "Joint Separated Medium", desc: "Separated up to 1x pipe wall thickness." }
        ]
      },
      {
        title: "Surface Damage (S)",
        defects: [
          { code: "SAM", name: "Aggregate Missing", desc: "Aggregate has fallen out, leaving small pits in the wall. Concrete pipes only." },
          { code: "SAP", name: "Aggregate Projecting", desc: "Aggregate projecting but not yet missing. Concrete pipes only." },
          { code: "SAV", name: "Aggregate Visible", desc: "Aggregate visible but not yet projecting. Concrete pipes only." },
          { code: "SCP", name: "Corrosion", desc: "Metal pipe only — the pipe is still intact but appears rusted. Requires all three: coating has deteriorated, the pipe shows a rusty color and rough texture, AND the corrosion has changed the surface's texture/volume/depth. Color or texture alone isn't enough. Builds up and flakes off over time; DAE can occur alongside SCP, and SSC/SSS often precede it when the damage is less severe." },
          { code: "SMW", name: "Missing Wall", desc: "Wall has completely eroded away, with smooth edges — distinct from a Hole, where wall thickness stays consistent at the edges. SMW forms gradually from corrosion/H2S attack, leaving thinner, more uneven edges. Applies to all pipe types affected by H2S." },
          { code: "SRC", name: "Reinforcement Corroded", desc: "Reinforcement/rebar is corroding or deteriorating, and may be missing in places. Reinforced concrete only." },
          { code: "SRI", name: "Roughness Increased", desc: "Surface slightly worn, abraded, or deteriorated. Concrete pipes only." },
          { code: "SRP", name: "Reinforcement Projecting", desc: "Serious erosion that fully exposes reinforcement/rebar, now projecting into the pipe. Reinforced concrete only." },
          { code: "SRV", name: "Reinforcement Visible", desc: "Concrete has eroded enough to expose reinforcement/rebar, with no projection into the pipe. Reinforced concrete only." },
          { code: "SSC", name: "Spalling of Coating", desc: "The interior coating is damaged, abraded, flaked, or splintered — often a spider-web cracking pattern. Used on VCP and other coated pipe." },
          { code: "SSS", name: "Spalling", desc: "Flaking deeper than a coating, mainly on VCP. A chip of wall missing right at the joint is better described as spalling. In V6, modifiers M (Mechanical)/C (Chemical)/Z (Not evident) applied — use M when the spalling edges are too clean/square, indicating machine damage (e.g. a root remover) rather than natural gas attack." },
          { code: "SZ", name: "Other", desc: "Any surface damage not covered above. In PVC, overheated joint welds can look melted or show wrinkles/bubbles resembling a lining — code as SZ or ignore. In concrete pipe with chipping at joints, prefer SZ over SSS in most cases, since concrete rarely truly spalls." }
        ]
      },
      {
        title: "Lining Features (LF)",
        defects: [
          { code: "LFAC", name: "Abandoned Connection", desc: "An outward dimple in the liner where it was installed over a now-abandoned connection." },
          { code: "LFAS", name: "Annular Space", desc: "The liner doesn't fit tightly against the host pipe, leaving a visible gap — usually at liner ends near access points, at patch-repair ends, or at a tap connection. Requires visual confirmation of a significant gap." },
          { code: "LFB", name: "Blistered", desc: "Bubbles/raised pockets in the liner's interior coating, caused by trapped air, resin, water, solvent, or excess heat during curing. See LFB vs DFBR: LFB blisters are smaller, dome-shaped, and circular with round edges; DFBR bulges are larger, pushed outward by an intruding defect covered by the liner." },
          { code: "LFCS", name: "Service Cut Shifted", desc: "The liner has moved or shrunk relative to the tap connection, obstructing it — differs from an occasional undercut/overcut since it will likely affect most or all taps." },
          { code: "LFD", name: "Detached", desc: "Liner has detached from the host pipe. If sections are hanging/loose at the edge or beginning of the lined section, code RPLD instead and add remarks plus any other defects present." },
          { code: "LFDC", name: "Discoloration", desc: "Abnormal/inconsistent liner color, often from bacteria buildup or water permeation — aging liners can turn orange or reddish. \"Crack-like\" bleeding/staining lines mean moisture outside the liner has bled in and stained it." },
          { code: "LFDE", name: "Defective End", desc: "The liner's end is ragged, warped, or shrunk." },
          { code: "LFDL", name: "Delamination", desc: "The liner's material layers have separated during installation and are no longer homogeneous." },
          { code: "LFOC", name: "Overcut Service", desc: "Too much liner cut around a service connection, leaving part of the host pipe unlined. Under normalized coding, LFOC doesn't need an accompanying tap code — but if an H is seen at the connection, add the matching HVV/HSV on the mainline (a TBD may also apply). Tip: if the overcut is covered by a gasket, LFOC isn't needed." },
          { code: "LFRS", name: "Resin Slug", desc: "Cured resin left in the connection, obstructing flow." },
          { code: "LFUC", name: "Undercut Service", desc: "The reinstatement cut is too small for the tap diameter, obstructing flow. Normalized coding doesn't require an accompanying tap code." },
          { code: "LFW", name: "Wrinkle", desc: "Fins / circumferential wrinkling from too much liner material (oversized) or a liner installed on a bend — flow may be disrupted if it sits in the invert. A spiral-looking pattern (a \"splice\") is not a defect and shouldn't be coded. Normalized coding: code once the wrinkle reaches ~5% and sits at/near normal flow. NASSCO Pure codes every wrinkle regardless of size." },
          { code: "LFZ", name: "Other", desc: "Any lining defect not covered above — e.g. detached seam tapes (long, peelable strips, often white or liner-colored, usually minor up to 5% coverage), a liner patch, or scratches. \"MGO: Splice\" in Remarks is used for the spiral-splice pattern noted under LFW." }
        ]
      },
      {
        title: "Weld Failure (WF)",
        defects: [
          { code: "WFC / WFL / WFM / WFS / WFZ", name: "Weld Failure", desc: "Applies to large-diameter, plastic, spiral-wound, butt-fused, metal, or plastic-lined RCP with non-uniform or failed welds. Descriptors: C (Circumferential), L (Longitudinal), M (Multiple), S (Spiral — spiral-wound pipe only), Z (Other). So rare on gravity sewer inspections that there aren't many field examples — more relevant on pressure pipe. WFC specifically can't be coded as continuous, though L/M/S can be Truly or Repeated Continuous." }
        ]
      },
      {
        title: "Point Repair (RP)",
        defects: [
          { code: "RPL", name: "Liner", desc: "A short trenchless repair with a different texture than the host pipe — you can often see the spot liner's edge or leftover resin on the host pipe wall." },
          { code: "RPM", name: "Mechanical Sleeve", desc: "A mechanical sleeve (steel, PVC, or rubber) that fits tightly around the pipe circumference, sealing the joint with a rubber gasket. New in V8 — not available in V6/V7, where it was coded as RPZ/RPZD with remark \"mechanical sleeve.\"" },
          { code: "RPP", name: "Patch", desc: "A patch installed over a defect from OUTSIDE the pipe. RPP can resemble HSV, but soil isn't uniformly flat — if the surface is unusually even and flat, it's more likely an RPP. Remarks should note the patch material." },
          { code: "RPR", name: "Replacement", desc: "A section of pipe has been replaced, possibly in a different material. A color/texture change at a tap fitting (e.g. PVC green-to-white, or DIP's cast-iron tap fittings) is NOT an RPR or MMC by itself. An RPR of the same material as the host pipe is still an RPR — it's an obviously new, short section, not necessarily a material change." },
          { code: "RPRD", name: "Replacement Defective", desc: "The replacement wasn't effective, was damaged during installation, wasn't long enough to correct the original defects, or damaged the host pipe. Enter the resulting defect codes as new observations (e.g. an RPRD due to a JOL gets followed by a JOL code) — any defect at the RPR makes it defective." }
        ]
      },
      {
        title: "Brick Work — brick & clay tile sewers only",
        defects: [
          { code: "DB", name: "Displaced Brick", desc: "One or more bricks have shifted from their original position but haven't fallen." },
          { code: "DI", name: "Dropped Invert", desc: "Brickwork at the invert has separated/dropped relative to the sewer walls, with a gap greater than 1\". May affect one or both sides — estimate the gap to the nearest ½\"." },
          { code: "MB", name: "Missing Brick", desc: "One or more bricks are missing/have fallen away, possibly across more than one course." },
          { code: "MM", name: "Missing Mortar", desc: "Mortar — the sand/water/cement mix that binds bricks and seals joints — has receded while the bricks are still in place. Modifiers: S (<½\" loss), M (½–2\" loss), L (>2\" loss). Truly Continuous applies if the defect is >3 ft (1 m); Repeated Continuous is NOT applicable to brickwork." }
        ]
      }
    ]
  }
};

/*
  Pure vs Standard — where NASSCO Pure coding diverges from this shop's
  standard (sanity) coding, topic by topic.
  Compiled from: internal "NASSCO Pure VS Standard Coding" training deck.
*/
const PURE_COMPARISON = [
  {
    id: "cc-fc",
    topic: "Circumferential Cracks/Fractures split by water",
    code: "CC / FC",
    standard: "If a circumferential defect visibly aligns across a water gap, code it as one defect regardless of water clarity.",
    pure: "Split into two separate observations if the circumferential defect is separated by more than two clock positions."
  },
  {
    id: "csl",
    topic: "Cross-sectional loss estimates (roots, obstructions, deposits, intrusions)",
    code: "CSL",
    standard: "Wait until the defect is estimated at >5% CSL before coding it.",
    pure: "Code at any % of CSL — if you can see it and it isn't underwater, code it."
  },
  {
    id: "offset-holes",
    topic: "Offset/separated joints with HSV/VV",
    code: "HSV/VV + JOL/JSL",
    standard: "Code HSV/VV alongside a significant offset joint.",
    pure: "Do not code HSV/VV for a joint problem unless the void itself is significant (V7 only — in V8, JSL/JOL already grades as a 5, so HSV isn't needed)."
  },
  {
    id: "jam",
    topic: "Joint Angular Medium (JAM) direction",
    code: "JAM",
    standard: "Left-to-right movement only — never code up/down movement as JAM.",
    pure: "Does not differentiate direction at all (up, down, left, or right all qualify)."
  },
  {
    id: "lfoc-lfuc",
    topic: "Lining Feature Overcut/Undercut vs tap codes",
    code: "LFOC / LFUC",
    standard: "LFOC/LFUC replace the tap code — no separate tap code is needed alongside them.",
    pure: "LFOC/LFUC do NOT replace the tap code. Since NASSCO doesn't specify either way, code both the lining feature and the tap."
  },
  {
    id: "lfw",
    topic: "Lining Feature Wrinkle (LFW) threshold",
    code: "LFW",
    standard: "Code only when the wrinkle exceeds ~5% CSL and sits in the invert (clock 3–9), where it could obstruct flow.",
    pure: "Code at any % of CSL — if you can see it and it isn't underwater, code it."
  },
  {
    id: "mwl",
    topic: "Miscellaneous Water Level (MWL)",
    code: "MWL",
    standard: "Start with an average MWL that covers the water level changes throughout the inspection, and only re-code when it moves outside a ±15% band from that average.",
    pure: "After the initial MWL entry, only re-code on a significant change of at least 10% from the last logged level."
  },
  {
    id: "mwls",
    topic: "Miscellaneous Water Level Sag (MWLS)",
    code: "MWLS",
    standard: "Code MWLS only when the sag is 15–20% greater than the initial MWL.",
    pure: "Code MWLS at any water level, as long as the sag is visually confirmed."
  },
  {
    id: "continuous-clocks",
    topic: "Continuous defects — clock movement",
    code: "RMJ / IWJ",
    standard: "Clock positions may wander up to 4 clock positions within one continuous defect. For RFJ, keep clocks close and use 1 position instead of multiple.",
    pure: "Clock positions may wander up to only 2 positions within one continuous defect."
  },
  {
    id: "active-taps",
    topic: "Active taps",
    code: "TFA / TF",
    standard: "Code the Active modifier if water is actively running OR if any sign of activity is perceived (e.g. a wet tap/pipe wall).",
    pure: "Code Active only if water is actively running during the inspection; otherwise code TF."
  },
  {
    id: "defective-taps",
    topic: "Defective taps",
    code: "TFD / TBD",
    standard: "Requires actual function/structure degradation (e.g. DSF >10%, JOM, FC). VC alone does not make a tap defective. A hole at the connection (or an enormous hole in the tap) is coded H/SV/VV on the main; otherwise note it only in remarks.",
    pure: "Defective applies when any defect is seen at all (e.g. VC, or CSL at any level). A hole seen inside the tap should still get an H code on the mainline."
  }
];

/*
  Operator Review — Do's/don'ts for editing existing inspection data.
  Compiled from: internal "Operator Review" training deck (Charlotte storm program).
*/
const OPERATOR_REVIEW = {
  title: "Operator Review",
  subtitle: "Standard Operating Instructions — Charlotte Storm Operator Review",
  versions: "V6 V7 V8",
  dos: [
    "Edit/repurpose an existing code before creating a new one.",
    "Add \"Delete\" in the Remarks instead of deleting a pre-existing code.",
    "Add missing codes where necessary."
  ],
  donts: [
    "Delete original codes.",
    "Shift distances by less than 2 ft.",
    "Delete and re-enter MWL at 0.",
    "Adjust an MWL of 0 to 0.1 just for ordering purposes — this breaks exports!",
    "Change Line Direction codes.",
    "Change MGO Chip to SZ Chip.",
    "Change MGO WRINKLE to LFZ WRINKLE.",
    "Change clocks by 1 position.",
    "Add joint notations."
  ],
  cases: [
    {
      title: "B / H / MGO (Chip) — Charlotte Only",
      desc: "If there's a chip at the joint but no gasket is visible, code the defect itself (B, H, etc). If there's a chip at the joint and the gasket IS visible, code MGO with \"Chip\" in Remarks."
    }
  ]
};

// Flattened index of every defect, precomputed for search.
const SEARCH_INDEX = (() => {
  const rows = [];
  for (const catKey of Object.keys(MATERIALS)) {
    const cat = MATERIALS[catKey];
    for (const mat of cat.items) {
      rows.push({ type: "material", catKey, materialId: mat.id, pattern: mat.pattern, code: mat.code, name: mat.name, text: `${mat.code} ${mat.name} ${mat.summary || ""}` });
      for (const g of mat.groups || []) {
        for (const d of g.defects) {
          rows.push({
            type: "defect",
            catKey,
            materialId: mat.id,
            materialName: mat.name,
            pattern: mat.pattern,
            group: g.title,
            code: d.code,
            name: d.name,
            text: `${d.code} ${d.name} ${d.desc} ${d.threshold || ""}`
          });
        }
      }
    }
  }

  for (const sectionId of Object.keys(CODES)) {
    const section = CODES[sectionId];
    rows.push({ type: "codes-section", sectionId, code: "", name: section.label, text: `${section.label} ${section.blurb || ""}` });
    for (const g of section.groups || []) {
      for (const d of g.defects) {
        rows.push({
          type: "codes-defect",
          sectionId,
          sectionLabel: section.label,
          group: g.title,
          code: d.code,
          name: d.name,
          text: `${d.code} ${d.name} ${d.desc}`
        });
      }
    }
  }

  for (const row of PURE_COMPARISON) {
    rows.push({ type: "pure", topicId: row.id, code: row.code, name: row.topic, text: `${row.code} ${row.topic} ${row.standard} ${row.pure}` });
  }

  rows.push({
    type: "operator-review",
    code: "",
    name: OPERATOR_REVIEW.title,
    text: `${OPERATOR_REVIEW.title} ${[...OPERATOR_REVIEW.dos, ...OPERATOR_REVIEW.donts].join(" ")} ${OPERATOR_REVIEW.cases.map((c) => `${c.title} ${c.desc}`).join(" ")}`
  });

  return rows;
})();

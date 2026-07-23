/*
  NASSCO PACP Field Guide — reference data
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
          "Joint Lengths": "10–20 ft / 3–6 m"
        },
        groups: [
          {
            title: "Structural",
            defects: [
              { code: "DFE (V7) / KW (V6)", name: "Deformed Elliptical", desc: "Pipe compressed under load into an oval shape, losing its original circular geometry and structural integrity.", threshold: "Code once deformation reaches 10%. PVC typically withstands up to 40% deformation before collapse risk rises sharply." }
            ]
          },
          {
            title: "Construction / Taps",
            defects: [
              { code: "TFA", name: "Tap Factory Activity", desc: "A visible pre-molded fitting, factory-installed into the pipe wall. If there is no fitting, it is not a TFA — consider TSA or TBA instead." },
              { code: "TSA", name: "Tap Saddle Activity", desc: "Saddle fitting with a black rubber insert visible inside the opening, securing the lateral connection. White saddles also occur." },
              { code: "ISSRH", name: "Intruding Sealing Ring – Hanging", desc: "A joint sealing ring (black or copper-colored) that intrudes into the pipe but re-enters the joint unbroken." }
            ]
          },
          {
            title: "O&M",
            defects: [
              { code: "DAR", name: "Deposits Attached – Ragging", desc: "Paper or hygiene-product debris attached to the pipe wall." },
              { code: "DAGS", name: "Deposits Attached – Grease", desc: "Builds up above the water line in parallel lines, beige/grey/yellowish, resembling candle wax. Use two codes and clock positions if it appears on both sides.", threshold: "Sanity codes at ≥5% cross-sectional loss; NASSCO Pure codes from ≥1%." }
            ]
          },
          {
            title: "Misc / Notes",
            defects: [
              { code: "MMC", name: "Miscellaneous Material Change", desc: "Pipe material changes and does not revert, continuing with the new material to the next access point." }
            ]
          }
        ],
        notes: "After factory cuts, PVC taps commonly leave small plastic burrs or thread-like shavings at the joint. This is a manufacturing artifact — do not code it as Roots Fine (RF)."
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
        groups: [
          {
            title: "Structural",
            defects: [
              { code: "WFL / WFC / WFM / WFZ", name: "Weld Failure", desc: "Because PE joints are fused rather than gasketed, a failed or incomplete fusion weld — not a defective gasket — is the main joint-related structural concern. Coded with the same Longitudinal/Circumferential/Multiple/Other pattern as Crack/Fracture." },
              { code: "DFBR / DFBI / DFC / DFE", name: "Deformed Flexible (Bulging / Creasing / Elliptical)", desc: "PE is very ductile and will deform/oval well before it cracks — expect bulging or elliptical deformation as the earliest visible distress, not surface cracking." }
            ]
          },
          {
            title: "Construction / Taps",
            defects: [
              { code: "TSA", name: "Tap Saddle Activity", desc: "An electrofusion saddle fitting fused onto an existing PE main — the most common way to add a tap after installation." },
              { code: "TFA", name: "Tap Factory Activity", desc: "A factory tee, common on new PE installs." }
            ]
          }
        ],
        notes: "Since there are no gasketed joints, the standard Joint (J) offset/separation/angular codes generally don't apply — look for weld failures instead. Roots and infiltration are correspondingly rare except at a failed weld or a damaged section of wall."
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
          "Joint Lengths": "Highly variable / long fused runs; wall thickness and deformation tolerance depend on the pipe's SDR (Standard Dimension Ratio) rating"
        },
        groups: [
          {
            title: "Structural",
            defects: [
              { code: "DFBR / DFBI / DFC / DFE", name: "Deformed Flexible", desc: "HDPE tolerates significant deformation before failure, so it can visibly bulge or oval quite a bit before approaching the general 40% collapse threshold — don't assume a rounded shape is fine just because no cracking is visible." },
              { code: "WFL / WFC / WFM / WFZ", name: "Weld Failure", desc: "Same logic as generic PE — a failed fusion weld is the structural concern at a joint, not a gasket defect." }
            ]
          },
          {
            title: "Construction / Taps",
            defects: [
              { code: "TSA", name: "Tap Saddle Activity", desc: "Electrofusion saddle onto an existing HDPE main." },
              { code: "TFA", name: "Tap Factory Activity", desc: "Factory tee on new installs." }
            ]
          }
        ],
        notes: "Camera tip: the smooth black/dark-grey interior absorbs light and makes defects noticeably harder to spot on camera than lighter-colored pipe — slow down and adjust lighting. When HDPE is the carrier pipe in a pipe-bursting rehab job, defects seen shortly after installation (kinks, wrinkles at push-length transitions) are usually installation artifacts rather than in-service deterioration — worth distinguishing in Remarks. Heat-fused joints make it excellent at resisting infiltration and root intrusion, since there's no gasketed joint for either to enter through."
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
        groups: [
          {
            title: "Structural",
            defects: [
              { code: "DFBR / DFBI / DFC / DFE", name: "Deformed Flexible", desc: "Applies mainly to the corrugated form, which behaves like other flexible profile-wall pipe and will bulge/oval under load." },
              { code: "C / F (smooth-wall only)", name: "Cracks / Fractures", desc: "The smooth-wall, more rigid variant can behave closer to a rigid plastic under poor bedding — watch for cracking rather than pure deformation if the pipe looks stiffer than typical corrugated product." }
            ]
          }
        ],
        notes: "Because PP depends so heavily on proper soil embedment, poor haunching/bedding shows up as deformation (corrugated) or cracking (smooth-wall) much faster than in a fully rigid material. If you have more specific field trigger points for PP from your own crews, they should override the general guidance above."
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
          "Joint Lengths": "18–20 in — the longest of any material; the best trait for telling DIP apart from CAS"
        },
        groups: [
          {
            title: "Structural",
            defects: [
              { code: "SSC (V7) / SSSC (V6)", name: "Surface Damage – Spalling of Coating", desc: "Coating erosion. Trigger point varies by reviewer, following a progression: epoxy fading → epoxy \"cobweb cracking\" / mostly gone → concrete layer damaged → metal exposed." },
              { code: "SCP", name: "Surface Damage – Corrosion", desc: "Rare / late-stage in DIP thanks to its resistance. Requires exposed metal, a rusty orange color (don't confuse with orange-stained concrete coating), and a texture/volume change. Most often seen as a point defect at joints, where coating is thinner." }
            ]
          },
          {
            title: "Construction / Notes",
            defects: [
              { code: "CAS fittings", name: "Cast-Iron Fittings at Taps", desc: "Taps in DIP commonly use short, bulky CAS fittings — watch for them near service connections." }
            ]
          }
        ],
        notes: "Do not use repeated continuous-defect coding at every joint in DIP — code point defects at each joint instead, and reserve continuous defects for barrel-length features. If a repeating joint-code grade is below 3 it may be coded continuous; grade 3 or higher must be coded as point defects. The 18–20in joint length is the fastest way to distinguish DIP from CAS."
      },
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
          "Color": "Grey/silver when new; grey/brown/rust when aged"
        },
        groups: [
          {
            title: "Structural",
            defects: [
              { code: "SSC", name: "Surface Damage – Spalling of Coating", desc: "Whitish coating damage/flaking, sometimes visible all the way around the pipe." },
              { code: "SCP", name: "Surface Damage – Corrosion", desc: "Metal no longer smooth, developing shallow pits that can flake off; can advance to Missing Wall." },
              { code: "SMW", name: "Surface Damage – Missing Wall", desc: "Corrosion has fully eaten through the pipe material." },
              { code: "DFBR", name: "Deformed Flexible – Bulging Round", desc: "A rounded inward bulge." },
              { code: "DFBI", name: "Deformed Flexible – Bulging Inverse Curvature", desc: "A heart-shaped or inverted-triangle bulge." },
              { code: "DFC", name: "Deformed Flexible – Creasing", desc: "A sharp outward longitudinal fold." },
              { code: "WFS", name: "Weld Failure – Spiral", desc: "Weld failure following the spiral seam typical of large-diameter CMP." },
              { code: "HSV", name: "Hole – Soil Visible", desc: "Pipe wall material missing, with soil visible beyond the gap." }
            ]
          },
          {
            title: "O&M",
            defects: [
              { code: "DAE", name: "Deposits Attached – Encrustation", desc: "Mineral build-up; don't confuse with settled deposits (DSC)." },
              { code: "ISB / ISJ", name: "Infiltration Stain – Barrel / Joint", desc: "Discoloration indicating past infiltration, no current moisture." },
              { code: "RMJ", name: "Roots Medium – Joint", desc: "Root mass at a joint.", threshold: "5–50% cross-sectional area loss." }
            ]
          },
          {
            title: "Construction / Taps",
            defects: [
              { code: "TBI", name: "Tap Break-In – Intruding", desc: "Often paired with DFBR when part of the pipe wall is left hanging from a break-in tap." }
            ]
          },
          {
            title: "Misc",
            defects: [
              { code: "MSC", name: "Miscellaneous Shape/Size Change", desc: "For arched CMP where dimensions cannot be verified, record Asset Height as the first value." }
            ]
          }
        ],
        notes: "Common access points in storm/CMP contexts: ACB (Catch Basin), AJB (Junction Box), ADP (Discharge Point). A heavy tar/asphaltic coating is sometimes applied for corrosion protection — don't mistake normal tar coating wear for a different surface-damage code; confirm the metal underneath is actually affected."
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
              { code: "LFAC", name: "Abandoned Connection", desc: "Liner installed over a connection; an outward dimple in the liner is visible at the tap location." },
              { code: "LFOC", name: "Overcut Service", desc: "Too much liner cut around the service connection, leaving part of the host pipe exposed without liner. In Sanity, does not require an accompanying tap code; if a hole is also observed at the connection, follow with an HVV/HSV on the mainline." },
              { code: "LFUC", name: "Undercut Service", desc: "Tap reinstatement cut too small for the tap diameter, obstructing flow. Does not require an accompanying tap code in Sanity." },
              { code: "LFDE", name: "Defective End", desc: "The end of the liner is ragged, warped, and/or shrunken." },
              { code: "LFW", name: "Wrinkle", desc: "Caused by excess liner material (incorrect sizing).", threshold: "Sanity: code when the wrinkle reaches ~5% and is at/near the flow line (it should \"look uncomfortable\" to the eye). NASSCO Pure: code all wrinkles." },
              { code: "LFZ", name: "Other", desc: "Must be specified in Remarks — e.g. a circular sticker-like liner patch (round or not, possibly loose/peeling), a spiral-shaped spliced liner seam, or fingernail-like scratches." },
              { code: "LFBU (V6) / DFBR (V7)", name: "Small Bumps", desc: "Small raised bumps in the liner, informally called \"little mountains\"." },
              { code: "KI (V6) / DFBI (V7)", name: "Bulging Inverse Curvature", desc: "A heart-shaped or inverted-triangle bulge in the liner." },
              { code: "LFB", name: "Blistered", desc: "Bubbles or raised areas on the inside coating caused by trapped air, resin, or water." },
              { code: "LFDC", name: "Discoloration", desc: "Stains with bleeding color forming crack-like lines, from moisture bleeding into the liner from the outside. Usually red or pink; wait for visible intensity before coding." },
              { code: "LFPH", name: "Pinhole (weep points)", desc: "Water drops appearing to fall from the liner; can be black or orange. Sometimes accompanied by an IS (infiltration) code." },
              { code: "LFRS", name: "Resin Slug", desc: "Cured resin obstructing a connection." },
              { code: "LFDL", name: "Delamination", desc: "Liner material layers have separated." },
              { code: "RPL", name: "Point Repair – Liner", desc: "A short liner installed over a defective section — e.g. remark \"CIPP\"." }
            ]
          }
        ],
        notes: "Manufacturing marking letters visible on a liner are normal and should not be coded. If a JOMD condition is present at a liner, remark \"JOMD\" under LFZ; if the pipe is simply following the flow through a JOM, it does not need to be coded."
      }
    ]
  },

  rigid: {
    label: "Rigid (Non-Flexible) Pipes",
    blurb: "Rigid materials such as concrete, clay, and brick are the most likely to crack and fracture. If untreated, these defects can deteriorate further into broken pipe, holes, deformation, and ultimately collapse.",
    items: [
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
          "Joint Lengths": "2–6 inches — very short and frequent joints"
        },
        groups: [
          {
            title: "Roots",
            defects: [
              { code: "RFJ", name: "Roots Fine – Joint", desc: "Extremely common in VCP — from barely visible \"hairs\" at joints to long, sprawling threads entering the pipe." },
              { code: "RMJ", name: "Roots Medium – Joint", desc: "Roots have started to form a mass.", threshold: "5–45% cross-sectional area loss." },
              { code: "RBJ", name: "Roots Ball – Joint", desc: "Root mass has become severe.", threshold: "≥50% cross-sectional area loss." }
            ]
          },
          {
            title: "Structural (most → least common)",
            defects: [
              { code: "C / F", name: "Cracks / Fractures", desc: "Extremely frequent, mainly as longitudinal/spiral/multiple defects, usually accompanied by a Joint mark due to how close together VCP joints are." },
              { code: "B", name: "Broken", desc: "Wall has been displaced; soil or void behind the pipe may be visible (BSV/BVV). Often caused by roots — usually paired with RMJ, and sometimes RTJ/RMB/RBJ. No need to also code touching C/F.", threshold: "Wall displaced by 1/2 wall thickness (V6) or 1/4 wall thickness (V7/V8)." },
              { code: "H", name: "Hole", desc: "Less likely than Broken but still probable, typically with soil inside (HSV). No need to also code touching F/C." },
              { code: "DR", name: "Deformed Rigid", desc: "Surprisingly rare in VCP compared to concrete pipe — check the aspect ratio to confirm." },
              { code: "FC", name: "\"Fake Joints\"", desc: "Circumferential fractures running 12-to-12 that closely resemble a real joint. Spot them by a sudden joint-length change with no obvious direction change; real joints show the bell-and-spigot shape, while FC looks flat and jagged." }
            ]
          },
          {
            title: "Surface Damage",
            defects: [
              { code: "SSS", name: "Surface Damage – Structure (Spalling)", desc: "Brighter-orange patches where the wall starts flaking off, exposing the pipe's interior layer. Also used with remark \"Chipped Joint\" when chips are missing at a joint. Modifier SSSM flags spalling that looks too square/perfect, indicating mechanical damage." }
            ]
          },
          {
            title: "O&M / Infiltration",
            defects: [
              { code: "F + ISB/DAE", name: "Fracture with Infiltration Stain", desc: "Fractures that allow infiltration often show a white \"curtain\" stain below them. If the stain has started to form mass, use DAE instead of ISB." },
              { code: "DAZ", name: "Deposits Attached – Other (Scale)", desc: "Frequent white barrel-wide staining, remark \"Scale\"." }
            ]
          },
          {
            title: "Construction / Notes",
            defects: [
              { code: "JAL", name: "Joint Angular – Large", desc: "Combination of JOM (Joint Offset Medium) plus a Line Direction change." },
              { code: "ISZ", name: "Intruding Sealing Material – Other", desc: "Joints sealed with adhesive; if peeling/intruding, code ISZ with remark \"Mastic\"." },
              { code: "SZ", name: "Surface Damage – Other", desc: "Crackled surface / unconfirmed possible cracks." }
            ]
          }
        ],
        notes: "If you code a HVV (Hole, Void Visible) and fractures/cracks are touching it, you MUST also code the F and C. If you code a HSV (Hole, Soil Visible), you must NOT also code touching structural defects — that would be overcoding. Roots rarely survive at the 5, 6, and 7 o'clock positions unless the pipe is dry (0% water level) — double-check those aren't deposited/cut roots instead."
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
          "Joint Lengths": "8–12 ft / 2.5–3.5 m"
        },
        groups: [
          {
            title: "Structural (progressive severity)",
            defects: [
              { code: "SRI", name: "Surface Damage – Roughness Increased", desc: "Surface is slightly worn/abraded/deteriorated — run a finger along the wall: if it feels rough, code SRI; if still smooth, it's not deteriorated enough yet.", threshold: "In Sanity, generally coded continuous from 7 to 5 as a \"wildcard\" as long as visible throughout the inspection and not worsening; cut the continuous code if the condition deteriorates or if an RPR (point repair) appears." },
              { code: "SAV", name: "Surface Damage – Aggregate Visible", desc: "Intermediate stage: cement paste worn away enough that aggregate (stones) is clearly visible, but not yet projecting." },
              { code: "SAP", name: "Surface Damage – Aggregate Projecting", desc: "Aggregate is now projecting from the pipe wall, though not yet missing." },
              { code: "SAM", name: "Surface Damage – Aggregate Missing", desc: "Most severe stage: aggregate has completely fallen out, leaving visible pits/pockmarks/voids." },
              { code: "SZ", name: "Surface Damage – Other", desc: "Used for chipped joints in CP (instead of SSS), since concrete rarely spalls that way — SZ is the more appropriate code for chipped joints." },
              { code: "X", name: "Collapse", desc: "Catastrophic failure; structural integrity lost and flow conveyance completely disrupted — pipe is no longer passable." }
            ]
          }
        ],
        notes: "Infiltration rule: if the pipe wall is wet in general, a stain there is normal; but if the wall is dry and a specific spot is wet, that's a true weeper — flag it for BQA recode (code IWB)."
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
          "Joint Lengths": "8–12 ft / 2.5–3.5 m"
        },
        groups: [
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
        id: "ac",
        code: "AC",
        pattern: "speckle",
        name: "Asbestos Cement",
        summary: "Asbestos-fiber cement pipe, no longer installed. Should look completely flat and smooth — no aggregate.",
        info: {
          "Installation": "Bell-and-spigot with gasket; taps may be manufactured/factory or cut into the main",
          "Shape": "Circular",
          "Color": "New: grey (dark grey asbestos fibers may be visible). Aged: grey/brown",
          "Joint Lengths": "10–13 ft / 3–4 m"
        },
        groups: [
          {
            title: "Structural",
            defects: [
              { code: "SRI", name: "Surface Damage – Roughness Increased", desc: "Same trigger and continuous-coding rules as in Concrete Pipe (see CP)." }
            ]
          },
          {
            title: "O&M",
            defects: [
              { code: "DAE", name: "Deposits Attached – Encrustation", desc: "Mineral build-up on the pipe wall." }
            ]
          },
          {
            title: "Construction / Taps",
            defects: [
              { code: "TBA / TBI", name: "Tap Break-In – Activity / Intruding", desc: "Whether a break-in tap counts as \"Intruding\" depends on pipe diameter — e.g. an 8-inch pipe won't reach the 1-inch threshold, but a 12-inch pipe would." }
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
          "Joint Lengths": "5–15 ft / 1.5–3.2 m"
        },
        groups: [
          {
            title: "O&M",
            defects: [
              { code: "DAE (V6/V7) / DAZ (V8)", name: "Deposits Attached – Tuberculation", desc: "Build-up of oxidation from the corrosion process reduces capacity. Reference cross-sectional-loss (CSL) diagrams; remark \"Tuberculation\".", threshold: "Coded starting at 10% CSL; the actual blockage percentage is often greater than it first appears." }
            ]
          },
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
        id: "rpm",
        code: "RPM",
        pattern: "ring",
        name: "Reinforced Plastic / Truss Pipe",
        summary: "Double-walled truss plastic pipe. Rigid by classification, but its structural codes behave more like a flexible material.",
        info: {
          "Shape": "Circular",
          "Coating": "Uncommon, but epoxy or polyethylene may be used",
          "Color": "White, beige, gray, blue",
          "Joint Lengths": "10–13 ft / 3–4 m"
        },
        groups: [
          {
            title: "Structural (rules differ from other materials)",
            defects: [
              { code: "CL / CC / CS", name: "Cracks – Longitudinal / Circumferential / Spiral", desc: "In truss pipe the crack definition is broader than usual — it also covers visibly open gaps with NO visible sand/soil infiltration. CS is used when a crack changes direction/\"turns\", commonly at joints." },
              { code: "FL / FM / FS", name: "Fractures – Longitudinal / Multiple / Spiral", desc: "Stricter than cracks here: a visible gap is not enough — sand or soil infiltration within the gap must also be present. FM (multiple fractures not necessarily touching, just distributed in the same area) is only valid in truss pipe." },
              { code: "DFBR (V7) / KD (V6)", name: "Deformed – Bulging Round", desc: "\"Mountain\"-shaped buckles/bulges with no visible fractures; can be confused with DSF.", threshold: "Deformation in truss pipe is coded starting at just 5% — lower than most other materials." },
              { code: "DFE (V7) / KW (V6)", name: "Deformed Elliptical", desc: "If multiple structural defects are present, check each joint to see if it has produced a DFE." },
              { code: "B", name: "Broken", desc: "Pipe wall moved about half a wall thickness, with visible fractures. Commonly paired with DAR." },
              { code: "H", name: "Hole", desc: "Small amount of pipe wall missing, no soil or void present. Commonly paired with IWB." }
            ]
          },
          {
            title: "O&M",
            defects: [
              { code: "ISJ", name: "Infiltration Stain – Joint", desc: "Should be dry when observed, with a triangle-shaped stain — otherwise it could just be dirt." },
              { code: "ISB", name: "Infiltration Stain – Barrel", desc: "Staining along the pipe barrel." },
              { code: "IWB", name: "Infiltration Weeper – Barrel", desc: "Wet, but no visible moving water." },
              { code: "IRB / IGB", name: "Infiltration Runner / Gusher – Barrel", desc: "Continuous flow (Runner) or pressurized inflow (Gusher)." }
            ]
          },
          {
            title: "Construction / Taps",
            defects: [
              { code: "TFA / TBA", name: "Tap Factory / Break-In Activity", desc: "Square cuts alone do not make a tap defective. Hair- or root-like marks at tap edges are usually just a manufacturing cutting characteristic and should not be coded." },
              { code: "TSA", name: "Tap Saddle Activity", desc: "Connects the lateral to the mainline wall, almost always with a black rubber gasket seal, aligned evenly with the pipe wall." },
              { code: "TBD", name: "Tap Break-In – Defective", desc: "Note the underlying defect code in Remarks; if the defect also affects the mainline, code it separately (e.g. RFC)." },
              { code: "TFD", name: "Tap Factory – Defective", desc: "Remark \"OBZ\" without an additional code." },
              { code: "ISZ", name: "Intruding Sealing Material – Other", desc: "RPM sections are joined with adhesive rather than a gasket. When it peels/intrudes into the pipe, code ISZ with remark \"Adhesive\" — but look closely first, since peeling adhesive is very easy to mistake for a hanging intruding sealing ring (ISSRH-style defect)." },
              { code: "JSM", name: "Joint – Soil/Roots/Infiltration", desc: "Code when soil, roots, or infiltration are present at a joint and the whole joint circumference is visible." },
              { code: "RPZ", name: "Joint – Gasket Visible", desc: "Remark \"Gasket visible\" when a pan-and-tilt shows the gasket — no separate joint code is needed in this case." },
              { code: "JAM", name: "Joint Angular – Medium", desc: "Coded when one side of the joint is closed and the other open, with a visible change in angle." }
            ]
          }
        ],
        notes: "Key ID trait: RPM joints are adhesive, not gasketed — peeling adhesive at a joint is the most common thing new coders misread as a defective sealing ring. Structural coding rules for cracks/fractures/deformation are stricter and more particular here than for other materials (see the Structural group above)."
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
          "Field cutting": "Very difficult — requires diamond saws, unlike standard concrete pipe"
        },
        groups: [
          {
            title: "Structural",
            defects: [
              { code: "C / F", name: "Cracks / Fractures", desc: "PCP is very strong but brittle on impact. If the trench bedding is poor, it fractures rather than deforming — treat it with the same rigid-pipe crack/fracture logic as CP/RCP, not the deformation family." }
            ]
          }
        ],
        notes: "Because it's non-porous and contains no cement, it won't show the aggregate-exposure progression seen in CP/RCP (SRI/SAV/SAP/SAM) — those codes don't apply here. Infiltration should only be possible through joints or a crack, never through the wall itself. If you're not sure whether you're looking at PCP vs. RCP, the giveaway is usually no visible stone aggregate and no steel reinforcement when damaged, just a uniform resin/sand matrix — and it will resist a standard concrete-pipe cutting tool."
      }
    ]
  }
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
  return rows;
})();

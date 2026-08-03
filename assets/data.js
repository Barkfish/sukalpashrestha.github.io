/* ==========================================================================
   MEPP 436 — Advanced Machine Design · Question Bank Data
   Sources: MEPP 436 slide decks + lecture notes, Feb 2025 & July 2025 past
   papers, and the reference texts (Norton, Shigley, Juvinall & Marshek,
   Shukla, Ulrich & Eppinger). Answers verified against the 2025 answer key.

   tag legend:  feb25 = seen in Feb 2025 paper · jul25 = seen July 2025 paper
                model = model question · out = extends beyond the slides
   ========================================================================== */

window.BLOCKS = {
  A:{name:"Design fundamentals, materials & tolerances", exam:"Part I"},
  B:{name:"Stresses, strains & failure theories",        exam:"Section B · Q1"},
  C:{name:"Fracture mechanics",                           exam:"Section B · Q2"},
  D:{name:"Material fatigue",                             exam:"Section B · Q3"},
  E:{name:"Design for Manufacturing & Assembly (DFMA)",   exam:"Section B · Q4"},
  F:{name:"Design for Safety & Reliability",              exam:"Section B · Q4"},
  G:{name:"Human engineering / ergonomics",              exam:"Section B · Q4"}
};

/* -------------------------------------------------------------------------
   OBJECTIVE BANK  (Section A style — 1 mark each)
   Each item: {id, block, tag, q, opts[4], correct, exp[4], reason}
   exp[i] = feedback shown when option i is chosen.
   ------------------------------------------------------------------------- */
window.OBJECTIVE = [
/* ===== A · Design fundamentals, materials & tolerances ===== */
{id:"A1",block:"A",tag:"feb25",q:"What is the purpose of a factor of safety in machine design?",
 opts:["To increase the weight of the product","To compensate for uncertainties in material properties and loading conditions","To reduce the cost of manufacturing","To improve the aesthetic appeal of the machine"],correct:1,
 exp:["No — a FoS does not add weight on purpose; extra material is a side-effect, not the goal.",
      "Correct. The FoS is a margin covering the unknowns in strength, loads and analysis.",
      "No — tighter margins usually cost more, not less.",
      "No — aesthetics is unrelated to the safety margin."],
 reason:"FoS n = S/σ is a margin for uncertainty in strength and loading, not a cost/weight/style device."},

{id:"A2",block:"A",tag:"model",q:"The factor of safety is defined as:",
 opts:["Stress ÷ Strength","Strength ÷ Stress","Load × Area","Strain ÷ Stress"],correct:1,
 exp:["Inverted — this is less than 1 for a safe part.","Correct. n = S/σ, with strength and stress of the same type, units and location.","That is force, not a ratio.","Dimensionally meaningless here."],
 reason:"n = S/σ (loss-of-function parameter ÷ maximum-allowable parameter)."},

{id:"A3",block:"A",tag:"model",q:"A “code” (as opposed to a “standard”) is primarily intended to achieve:",
 opts:["Uniformity/interchangeability of parts","A specified degree of safety, efficiency and performance","The lowest possible cost","Marketing appeal"],correct:1,
 exp:["That is the aim of a standard.","Correct. Codes govern analysis, design, manufacture & construction to a safety/performance level.","Cost is not the defining purpose of a code.","Not relevant."],
 reason:"Standards → uniformity/quality; Codes → safety, efficiency & performance."},

{id:"A4",block:"A",tag:"model",q:"The first principle of cost reduction in design is to:",
 opts:["Specify tighter tolerances","Use standard sizes and components","Choose exotic materials","Add more inspection steps"],correct:1,
 exp:["Tighter tolerances raise cost.","Correct. Standard sizes cut tooling and procurement cost.","Exotic materials increase cost.","Inspection adds cost."],
 reason:"Using standard sizes is the first principle of cost reduction."},

{id:"A5",block:"A",tag:"model",q:"Tightening (making closer) the tolerances on a part generally:",
 opts:["Reduces cost","Has no effect on cost","Increases cost","Increases production rate"],correct:2,
 exp:["Opposite.","Not true.","Correct. Extra processing, extra inspection and slower machines all add cost.","Usually slows production."],
 reason:"Close tolerances raise cost — more processing, inspection and slower machines."},

{id:"A6",block:"A",tag:"model",q:"“Allowance” between two mating parts is:",
 opts:["The difference between the two limits","The minimum clearance (or maximum interference)","The nominal size","A single stated limit"],correct:1,
 exp:["That defines tolerance, not allowance.","Correct. Allowance = minimum stated clearance (or maximum interference) of mating parts.","That is nominal size.","That is a limit."],
 reason:"Allowance = minimum clearance / maximum interference of a fit."},

{id:"A7",block:"A",tag:"feb25",q:"What is the main advantage of composite materials in engineering design?",
 opts:["Low manufacturing cost","High strength-to-weight ratio and tailored properties","Uniformity in mechanical properties","Easy recyclability"],correct:1,
 exp:["Composites are usually expensive.","Correct. Excellent specific strength/stiffness, and properties can be tailored by lay-up.","They are anisotropic, not uniform.","They are hard to recycle."],
 reason:"Composites give high specific strength/stiffness and tailorable, directional properties."},

{id:"A8",block:"A",tag:"feb25",q:"Which material property is most important when selecting a material for high-temperature applications?",
 opts:["Hardness","Thermal conductivity","Creep resistance","Fatigue strength"],correct:2,
 exp:["Hardness is a surface property, not the governing one at temperature.","Useful but not the failure-limiting property.","Correct. Creep — time-dependent deformation under load at high T — governs high-temperature design.","Matters under cyclic load, not the primary high-T concern."],
 reason:"Creep resistance governs sustained-load service at high temperature."},

{id:"A9",block:"A",tag:"model",q:"True strain is defined as:",
 opts:["δ / L₀","ln(l / l₀)","l / l₀","(l − l₀) / l"],correct:1,
 exp:["That is engineering strain.","Correct. True strain uses the instantaneous length: εₜ = ln(l/l₀).","That is a stretch ratio.","Not a standard definition."],
 reason:"True strain εₜ = ln(l/l₀); engineering strain uses the original length."},

{id:"A10",block:"A",tag:"model",q:"Ceramics are best described as:",
 opts:["Ductile with high tensile strength","Brittle, high compressive strength, low tensile strength","Magnetic electrical conductors","Low-modulus, flexible materials"],correct:1,
 exp:["Ceramics have essentially no plasticity.","Correct. Tension–compression asymmetry: tensile strength ≈ 10% of compressive; no plasticity.","They are insulators.","They have very high modulus."],
 reason:"Ceramics: high E, high compressive strength, tension ≈ 10% of compression, brittle."},

{id:"A11",block:"A",tag:"model",q:"Quenching a steel primarily:",
 opts:["Softens it","Forms hard martensite, trading ductility for strength","Removes residual stresses","Increases its ductility"],correct:1,
 exp:["Quenching hardens.","Correct. Rapid cooling forms martensite — very hard/strong but less ductile; tempering restores some ductility.","That is annealing.","Ductility drops."],
 reason:"Quench → martensite (hard/strong, brittle); temper restores ductility; anneal softens."},

{id:"A12",block:"A",tag:"model",q:"For many engineering metals the shear modulus G is approximately:",
 opts:["0.1 E","0.4 E","1.0 E","2.0 E"],correct:1,
 exp:["Too low.","Correct. G ≈ 0.4E for many metals; shear yield ≈ 0.5–0.75 × tensile yield.","G is always < E.","Impossible for isotropic metals."],
 reason:"G ≈ 0.4E; G = E/[2(1+ν)]."},

{id:"A13",block:"A",tag:"model",q:"On an Ashby (material-selection) chart, a light-and-stiff design is best served by materials in the:",
 opts:["Bottom-right region","Top-left region (high E, low ρ)","Centre","Bottom-left region"],correct:1,
 exp:["High density, low stiffness — worst.","Correct. A constant E/ρ guideline is pushed to the top-left; composites usually win.","Compromise, not optimal.","Low stiffness."],
 reason:"Slide the E/ρ guideline toward the top-left corner for light-and-stiff."},

{id:"A14",block:"A",tag:"jul25",q:"Which of the following stages is NOT part of the design process?",
 opts:["Definition stage","Preliminary design","Detailed design","Mass production"],correct:3,
 exp:["A genuine early stage.","A genuine stage.","A genuine stage.","Correct. Mass production is manufacturing, downstream of the design process (need → definition → synthesis → analysis → evaluation → presentation)."],
 reason:"Mass production is a manufacturing activity, not a design-process stage."},

{id:"A15",block:"A",tag:"jul25",q:"In an Ashby chart plotting Young's modulus (E) vs density (ρ), materials in the lower-left region are typically:",
 opts:["Strong and dense","Lightweight and stiff","Lightweight and flexible","Dense and flexible"],correct:2,
 exp:["Dense sits to the right.","Stiff sits high up.","Correct. Lower-left = low E (flexible) and low ρ (lightweight) → e.g. polymers, foams.","Dense sits to the right."],
 reason:"Low-left = low modulus (flexible) + low density (light): polymers/foams."},

{id:"A16",block:"A",tag:"jul25",q:"In material selection, which combination is ideal for a lightweight AND strong structural component?",
 opts:["High yield strength and high density","Low elastic modulus and high density","High specific strength (strength-to-density ratio)","Low specific modulus"],correct:2,
 exp:["High density defeats ‘lightweight’.","Both properties are wrong.","Correct. Specific strength σₑ/ρ captures ‘strong per unit weight’.","Low specific modulus means floppy for its weight."],
 reason:"Maximise specific strength σ/ρ for light-and-strong parts."},

{id:"A17",block:"A",tag:"jul25",q:"A hollow shaft (Do = 100 mm, di = 60 mm), 5 m long, carries torque limited to τ = 35 MPa. With G = 85 GPa, the angle of twist per metre is:",
 opts:["4.7°","0.47°","0.047°","0.0082°"],correct:1,
 exp:["Ten times too big.","Correct. φ = τL/(RG) = (35×1000)/(50×85000) = 0.0082 rad = 0.47° per metre.","Ten times too small.","This is the answer in radians, not degrees."],
 reason:"φ = τL/(RG) = 0.0082 rad × (180/π) ≈ 0.47° per metre."},

{id:"A18",block:"A",tag:"out",q:"Which of the following is NOT a fundamental (intrinsic) material property?",
 opts:["Young's modulus E","Yield strength","Hardness (Brinell/Rockwell)","Poisson's ratio ν"],correct:2,
 exp:["Intrinsic elastic property.","A fundamental strength property.","Correct. Hardness is a resistance-to-indentation index, correlated to (not equal to) strength — e.g. UTS ≈ 3.4×HB for steels.","Intrinsic elastic property."],
 reason:"Hardness is an empirical index, not a fundamental property."},

/* ===== B · Stresses, strains & failure theories ===== */
{id:"B1",block:"B",tag:"model",q:"The state of stress at a point is a:",
 opts:["Scalar","Vector","Second-order tensor","Fourth-order tensor"],correct:2,
 exp:["Stress has direction and plane — not a scalar.","A vector is only first-order.","Correct. 9 components, 6 independent (symmetric) — a second-order tensor.","The stiffness C is 4th-order; stress is 2nd."],
 reason:"Stress is a symmetric 2nd-order tensor: 9 components, 6 independent."},

{id:"B2",block:"B",tag:"model",q:"The plane-stress assumption is most appropriate for:",
 opts:["A thick dam","A long shaft","A thin plate / pressure-vessel wall","A solid sphere"],correct:2,
 exp:["Thick body → plane strain.","Thick/long body → plane strain.","Correct. Thin bodies have ≈ zero stress on the free (z) faces → plane stress.","Not a plane idealisation."],
 reason:"Thin bodies → plane stress; thick bodies → plane strain."},

{id:"B3",block:"B",tag:"model",q:"Principal planes are planes on which:",
 opts:["Shear stress is maximum","Shear stress is zero","Normal stress is zero","Strain is zero"],correct:1,
 exp:["Max shear planes are at 45° to the principal planes.","Correct. Principal planes carry only normal (principal) stresses; τ = 0.","Normal stress is generally non-zero there.","Not defined this way."],
 reason:"Principal planes carry only normal stress; shear = 0."},

{id:"B4",block:"B",tag:"model",q:"On Mohr's circle, a physical rotation of θ on the stress element corresponds to a rotation of:",
 opts:["θ","θ/2","2θ","4θ"],correct:2,
 exp:["Angles are doubled on the circle.","Halved is wrong.","Correct. Angles double on Mohr's circle (centre = σₐᵥ₉, radius = τₘₐₓ).","Too much."],
 reason:"Angles double on Mohr's circle."},

{id:"B5",block:"B",tag:"feb25",q:"In the design of shafts, which failure criterion is commonly used for ductile materials?",
 opts:["Maximum Principal Stress Theory","Maximum Principal Strain Theory","Maximum Shear Stress Theory (Tresca)","Maximum Strain Energy Theory"],correct:2,
 exp:["That is the brittle-material theory.","Rarely used.","Correct. Tresca (max shear) is the safe, standard ductile choice; Von Mises is more accurate/less conservative.","Not the standard shaft criterion."],
 reason:"Tresca (max shear stress) is the standard conservative ductile criterion."},

{id:"B6",block:"B",tag:"model",q:"The Von Mises (distortion-energy) theory is based on:",
 opts:["Maximum normal stress","Maximum distortion (shape-change) energy","Total strain energy","Maximum principal strain"],correct:1,
 exp:["That is Rankine.","Correct. Only the shape-changing part of strain energy causes ductile yield; hydrostatic pressure does not yield metals.","That is Haigh's total-energy theory.","That is St. Venant."],
 reason:"Only distortion energy drives ductile yield — the physical basis of Von Mises."},

{id:"B7",block:"B",tag:"model",q:"The Maximum Principal Stress (Rankine) theory is most suitable for:",
 opts:["Ductile metals","Brittle materials","Polymers only","Fatigue loading"],correct:1,
 exp:["Ductile metals use Tresca/Von Mises.","Correct. Brittle materials fracture on the plane of maximum normal stress.","Not specific to polymers.","Fatigue uses different methods."],
 reason:"Brittle materials fail by the maximum normal stress → Rankine."},

{id:"B8",block:"B",tag:"feb25",q:"A hollow shaft (di = 15 mm, Do = 30 mm) carries a torque of 100 N·m. The shear stress on the outer surface is about:",
 opts:["8.74 MPa","20.12 MPa","40.24 MPa","50.26 MPa"],correct:1,
 exp:["Too low — check J.","Correct. J = π(30⁴−15⁴)/32 = 74 490 mm⁴; τ = T·r/J = 100000·15/74490 ≈ 20.1 MPa.","This would use only the solid-shaft J.","Too high."],
 reason:"τ = T·rₒ/J, J = π(D⁴−d⁴)/32 → 20.12 MPa."},

{id:"B9",block:"B",tag:"model",q:"In principal-stress space, the 2-D Tresca yield surface is a ______ and the Von Mises surface is a ______ .",
 opts:["circle / square","hexagon / ellipse","ellipse / hexagon","square / circle"],correct:1,
 exp:["Neither is a circle.","Correct. The Tresca hexagon is inscribed inside the Von Mises ellipse (Tresca is more conservative).","Reversed.","Neither is a square."],
 reason:"Tresca = hexagon inscribed in the Von Mises ellipse."},

{id:"B10",block:"B",tag:"model",q:"The 3-D stress tensor has 9 components. How many are independent?",
 opts:["3","6","9","12"],correct:1,
 exp:["Only the normals — ignores shear.","Correct. Symmetry (τᵢⱼ = τⱼᵢ) leaves 6 independent: 3 normal + 3 shear.","Ignores symmetry.","Too many."],
 reason:"Symmetry → 6 independent components (3 normal, 3 shear)."},

{id:"B11",block:"B",tag:"model",q:"Generalized Hooke's law for an isotropic linear-elastic solid relates:",
 opts:["Stress to temperature","Each strain to all three normal stresses via E and ν","Stress to crack length","Strain to hardness"],correct:1,
 exp:["That is thermal expansion.","Correct. εₓ = (1/E)[σₓ − ν(σᵧ+σᵩ)], and cyclically; shear γ = τ/G.","That is fracture mechanics.","Unrelated."],
 reason:"εₓ = (1/E)[σₓ − ν(σᵧ+σᵩ)]; γₓᵧ = τₓᵧ/G."},

{id:"B12",block:"B",tag:"model",q:"The plane-strain condition (all z-direction strains = 0) is used for:",
 opts:["Thin aircraft skin","Pressure-vessel walls","Thick bodies such as dams and long shafts","Free surfaces"],correct:2,
 exp:["Thin → plane stress.","Thin → plane stress.","Correct. In thick/constrained bodies the material cannot strain in z → plane strain.","Free surface → plane stress."],
 reason:"Thick, constrained bodies → plane strain."},

/* ===== C · Fracture mechanics ===== */
{id:"C1",block:"C",tag:"feb25",q:"Which of the following is NOT a mode of application of force for crack propagation?",
 opts:["Opening mode","Sliding mode","Tearing mode","Rolling mode"],correct:3,
 exp:["Mode I — real.","Mode II — real.","Mode III — real.","Correct. Only Modes I (opening), II (sliding) and III (tearing) exist; ‘rolling’ is not a mode."],
 reason:"The only crack modes are I-Opening, II-Sliding, III-Tearing."},

{id:"C2",block:"C",tag:"feb25",q:"Which of the following is NOT a defining characteristic of a crack in fracture mechanics?",
 opts:["Crack length","Crack surface roughness","Crack tip radius","Crack orientation"],correct:1,
 exp:["A defining characteristic — longer is worse.","Correct. Roughness is not one of them; the four are length, tip radius, orientation and surface connection.","A defining characteristic — sharper is worse.","A defining characteristic."],
 reason:"Cracks are defined by length, tip radius, orientation and surface connection — not roughness."},

{id:"C3",block:"C",tag:"model",q:"A crack is best described as a:",
 opts:["Creator of stress","Amplifier of the far-field stress","Reliever of strain","Source of heat"],correct:1,
 exp:["Cracks do not create stress.","Correct. A sharp crack intensifies the existing far-field stress — sharper tip, higher local stress.","No.","No."],
 reason:"A crack is a stress amplifier, not a stress source."},

{id:"C4",block:"C",tag:"model",q:"The Mode-I stress intensity factor is given by:",
 opts:["K = σ/√a","K = Yσ√(πa)","K = Yσa²","K = σ²πa"],correct:1,
 exp:["Wrong power of a.","Correct. Kᵢ = Yσ√(πa); fracture when Kᵢ ≥ Kᴵᴄ.","Wrong form.","Wrong form."],
 reason:"Kᵢ = Yσ√(πa), units MPa·√m."},

{id:"C5",block:"C",tag:"model",q:"The geometry factor Y for a single edge crack in a plate is about:",
 opts:["1.00","1.12","0.64","2.00"],correct:1,
 exp:["That is a central crack in an infinite plate.","Correct. ≈ 1.12 — about 12% higher than a central crack because the free surface releases extra energy.","That is an embedded penny crack (2/π).","Too high."],
 reason:"Edge crack Y ≈ 1.12; central crack Y = 1.0; penny 2/π."},

{id:"C6",block:"C",tag:"model",q:"Fracture toughness Kᴵᴄ is measured under ______ because it gives the conservative (lowest) value.",
 opts:["Plane stress (thin specimen)","Plane strain (thick specimen)","Pure shear","Torsion"],correct:1,
 exp:["Thin specimens give higher, non-conservative values.","Correct. Thick specimens suppress crack-tip plasticity → lowest, conservative toughness.","Not how Kᴵᴄ is defined.","Not how Kᴵᴄ is defined."],
 reason:"Kᴵᴄ is the plane-strain (thick-section) fracture toughness — the conservative value."},

{id:"C7",block:"C",tag:"feb25",q:"A mild-steel plate with an edge crack sees cyclic load Δσ = 0→260 MPa. With Kᴵᴄ = 165 MPa√m (Y = 1.12), the critical crack length is:",
 opts:["82.3 mm","68.6 mm","71.9 mm","102.2 mm"],correct:3,
 exp:["Too small — recheck.","Too small.","Too small.","Correct. aᴄ = (1/π)(165/(1.12·260))² = (1/π)(0.5666)² ≈ 0.102 m = 102.2 mm."],
 reason:"aᴄ = (1/π)(Kᴵᴄ/(Yσₘₐₓ))² = 102.2 mm."},

{id:"C8",block:"C",tag:"model",q:"For plane stress, the energy release rate G and stress intensity K are related by:",
 opts:["G = K√E","G = K²/E","G = KE²","G = E/K²"],correct:1,
 exp:["Wrong form.","Correct. G = K²/E (plane stress); use E' = E/(1−ν²) for plane strain.","Wrong form.","Wrong form."],
 reason:"G = K²/E' (E' = E plane stress, E/(1−ν²) plane strain)."},

{id:"C9",block:"C",tag:"model",q:"Griffith's criterion for crack growth is based on:",
 opts:["The local crack-tip stress only","Strain energy released ≥ surface energy created","Material hardness","The fatigue limit"],correct:1,
 exp:["That is Inglis's local condition.","Correct. Griffith is a global energy balance: energy released must at least pay for the new crack faces.","Unrelated.","Unrelated."],
 reason:"Griffith: dUₛ/da ≥ dUᵧ/da (energy released ≥ surface energy created)."},

{id:"C10",block:"C",tag:"model",q:"The cohesive stress of a material is:",
 opts:["Its yield stress","The theoretical stress needed to break atomic bonds","Its endurance limit","Its hardness"],correct:1,
 exp:["Much lower than cohesive stress.","Correct. σᴄ = √(Eγₛ/x₀); real fracture stress is far below it because flaws concentrate stress.","No.","No."],
 reason:"Cohesive stress = theoretical bond-breaking stress; real strength is far lower due to flaws."},

{id:"C11",block:"C",tag:"out",q:"The J-integral and CTOD (δ) are used when:",
 opts:["The material is perfectly brittle","There is significant crack-tip plasticity (EPFM)","No crack exists","Loading is purely static"],correct:1,
 exp:["Brittle behaviour is handled by K and G (LEFM).","Correct. When the plastic zone is large, LEFM fails and elastic-plastic FM uses J-integral / CTOD.","They describe cracks.","Not about static vs dynamic."],
 reason:"J-integral and CTOD extend fracture analysis into the elastic-plastic (EPFM) regime."},

{id:"C12",block:"C",tag:"feb25",q:"In fracture mechanics, the term “fatigue crack growth rate” refers to:",
 opts:["The rate at which a crack propagates under cyclic loading (da/dN)","The time for a crack to reach critical length","The resistance of a material to crack initiation","The ability to withstand dynamic loading"],correct:0,
 exp:["Correct. da/dN = crack extension per load cycle, correlated with ΔK by Paris' law.","That is life, not rate.","That is initiation resistance.","Too vague."],
 reason:"Fatigue crack growth rate = da/dN, the crack advance per cycle."},

{id:"C13",block:"C",tag:"jul25",q:"Under the LEFM assumption, the stress field near the crack tip is given by:",
 opts:["σₓₓ = Kᵢ f(θ)/√(2πr)","σₓₓ = Kᵢ f(θ)√(2πr)","σₓₓ = Kᵢ f(θ)/(2πr)","σₓₓ = 2πr Kᵢ f(θ)"],correct:0,
 exp:["Correct. The stress has an inverse-square-root singularity: σ = K f(θ)/√(2πr).","Would fall to zero at the tip — wrong.","Wrong power (1/r).","Wrong — stress rises at the tip, not falls linearly."],
 reason:"σᵢⱼ = K/√(2πr)·fᵢⱼ(θ) — the 1/√r crack-tip singularity."},

{id:"C14",block:"C",tag:"jul25",q:"A composite plate with an edge crack is loaded at σ = 330 MPa; Kᴵᴄ = 165 MPa√m. The critical crack length is:",
 opts:["82.3 mm","68.6 mm","63.4 mm","55.2 mm"],correct:2,
 exp:["Too big.","Too big.","Correct. aᴄ = (1/π)(165/(1.12·330))² = (1/π)(0.4464)² ≈ 0.0634 m = 63.4 mm.","Too small."],
 reason:"aᴄ = (1/π)(Kᴵᴄ/(Yσ))² with Y=1.12 → 63.4 mm."},

{id:"C15",block:"C",tag:"jul25",q:"If a surface crack causing fracture in a brittle material is made twice as deep, the fracture strength will:",
 opts:["Decrease by a factor of √2","Decrease by a factor of 2","Decrease by a factor of 2²","Not change"],correct:0,
 exp:["Correct. σₑ ∝ 1/√a, so doubling a divides strength by √2.","Would need σ ∝ 1/a.","Would need σ ∝ 1/a².","Strength does depend on crack size."],
 reason:"Since K = Yσ√(πa), σₑ ∝ a^(−1/2): 2a → strength /√2."},

{id:"C16",block:"C",tag:"jul25",q:"According to Griffith's energy criterion, a crack will propagate when:",
 opts:["Applied stress exceeds yield strength","The energy release rate G ≥ Gᴄ","The stress intensity factor K ≥ Kᴵᴄ","Strain energy is constant"],correct:1,
 exp:["Not the energy criterion.","Correct. Energy-based growth occurs when the driving energy release rate reaches the critical value Gᴄ.","That is Irwin's K-criterion (equivalent, but stated in terms of K).","No — growth needs net energy release."],
 reason:"Griffith/Irwin energy criterion: crack grows when G ≥ Gᴄ."},

{id:"C17",block:"C",tag:"out",q:"The prediction of infinite stress at a sharp crack tip in LEFM is called the:",
 opts:["Stress plateau","Stress singularity","Residual stress","Mean stress"],correct:1,
 exp:["Opposite of what happens.","Correct. The 1/√r term makes the elastic stress tend to infinity — a mathematical singularity relieved in reality by plasticity.","Unrelated.","Unrelated."],
 reason:"The 1/√r crack-tip field → stress singularity (limited in reality by the plastic zone)."},

/* ===== D · Fatigue ===== */
{id:"D1",block:"D",tag:"feb25",q:"What is the primary mechanism responsible for fatigue failure in materials?",
 opts:["Creep deformation","Dislocation movement","Crack propagation","Plastic deformation"],correct:2,
 exp:["Creep is time/temperature-driven, not cyclic.","Dislocations initiate slip bands, but the governing failure mechanism is crack growth.","Correct. Fatigue is initiation followed by progressive crack propagation to final fracture.","Bulk plasticity is limited in HCF."],
 reason:"Fatigue = crack initiation → propagation → fast fracture; propagation governs life."},

{id:"D2",block:"D",tag:"feb25",q:"A specimen is cycled between σmin = 50 MPa and σmax = 250 MPa. The stress amplitude is:",
 opts:["100 MPa","150 MPa","200 MPa","250 MPa"],correct:0,
 exp:["Correct. σₐ = (σmax−σmin)/2 = (250−50)/2 = 100 MPa.","That is the mean stress σₘ.","That is the range Δσ.","That is σmax."],
 reason:"σₐ = (σmax−σmin)/2 = 100 MPa (mean = 150, range = 200)."},

{id:"D3",block:"D",tag:"feb25",q:"A part follows Basquin S = a·N^(−0.15). It lasts 10⁵ cycles at S = 400 MPa. The estimated stress for a life of 10⁶ cycles is:",
 opts:["250 MPa","280 MPa","320 MPa","380 MPa"],correct:1,
 exp:["Too low.","Correct. S₂ = 400·(10⁶/10⁵)^(−0.15) = 400·10^(−0.15) = 400·0.708 ≈ 283 ≈ 280 MPa.","Stress must fall as life rises.","Stress falls, not stays high."],
 reason:"S₂ = S₁(N₂/N₁)^b = 400·10^−0.15 ≈ 280 MPa."},

{id:"D4",block:"D",tag:"model",q:"For fully-reversed loading, the stress ratio R is:",
 opts:["0","+1","−1","∞"],correct:2,
 exp:["R = 0 is repeated (zero-to-tension) loading.","R = +1 is a static load.","Correct. Fully reversed → σₘ = 0, σmin = −σmax, so R = −1.","Not physical here."],
 reason:"Fully reversed: σₘ = 0 → R = σmin/σmax = −1."},

{id:"D5",block:"D",tag:"model",q:"Low-cycle fatigue (LCF) is best analysed by the:",
 opts:["Stress-life (S-N) approach","Strain-life (ε-N) approach","Hardness test","Creep test"],correct:1,
 exp:["S-N suits HCF, where behaviour is nearly elastic.","Correct. LCF is plasticity-dominated, so the strain-life (Coffin–Manson) approach is used.","Not a fatigue-life method.","Different failure mode."],
 reason:"LCF → strain-life (ε-N); HCF → stress-life (S-N)."},

{id:"D6",block:"D",tag:"model",q:"In Paris' law da/dN = C(ΔK)^m, the driving term ΔK equals:",
 opts:["Yσmax√(πa)","YΔσ√(πa)","Yσₘ√(πa)","Kᴵᴄ"],correct:1,
 exp:["Uses the peak stress — a classic mistake.","Correct. Crack growth is driven by the stress RANGE: ΔK = YΔσ√(πa).","Uses the mean stress.","That is the toughness, not the range."],
 reason:"ΔK uses the stress range Δσ = σmax−σmin, not σmax."},

{id:"D7",block:"D",tag:"model",q:"Paris' law describes which region of the da/dN vs ΔK curve?",
 opts:["Region I (threshold)","Region II (linear on log–log)","Region III (unstable)","All three regions"],correct:1,
 exp:["Below threshold there is essentially no growth.","Correct. The power law da/dN = C(ΔK)^m holds in the linear mid-region II.","Region III accelerates toward Kᴵᴄ and is not linear.","Only region II is linear."],
 reason:"Paris' power law fits the linear middle (Region II)."},

{id:"D8",block:"D",tag:"model",q:"The endurance ratio (endurance limit ÷ UTS) for many metals is roughly:",
 opts:["0.05–0.1","0.3–0.4","0.6–0.7","≈ 1"],correct:1,
 exp:["Too low.","Correct. Endurance limit ≈ 0.3–0.4 × UTS for many metallic materials.","Too high.","Impossible."],
 reason:"Endurance ratio ≈ 0.3–0.4 for metals."},

{id:"D9",block:"D",tag:"model",q:"The Palmgren–Miner rule predicts failure when:",
 opts:["Σ(nᵢ/Nᵢ) = 0","Σ(nᵢ/Nᵢ) = 1","nᵢ = Nᵢ for a single level","ΔK = Kᴵᴄ"],correct:1,
 exp:["Zero damage means no loading.","Correct. Cumulative damage D = Σ(nᵢ/Nᵢ) reaching 1 predicts failure.","Only true if a single level is applied.","That is a fracture condition, not cumulative damage."],
 reason:"Miner: failure when cumulative damage D = Σ(nᵢ/Nᵢ) = 1."},

{id:"D10",block:"D",tag:"model",q:"Introducing compressive residual stress at a surface (e.g. by shot-peening):",
 opts:["Reduces fatigue life","Increases fatigue life","Has no effect","Causes creep"],correct:1,
 exp:["Opposite — that is what tensile residual stress does.","Correct. It lowers the effective surface mean/peak tensile stress, delaying crack initiation.","It has a strong effect.","Unrelated."],
 reason:"Compressive residual stress delays crack initiation → longer fatigue life."},

{id:"D11",block:"D",tag:"model",q:"Which fatigue-design philosophy assumes cracks already exist and relies on scheduled inspection?",
 opts:["Infinite-life","Safe-life","Damage-tolerance","Over-the-wall"],correct:2,
 exp:["Keeps stress below the fatigue limit — assumes no crack.","Retires the part at a finite life without assuming a crack.","Correct. Damage-tolerance uses fracture mechanics + NDI to catch cracks before they become critical.","Not a fatigue philosophy."],
 reason:"Damage-tolerance = assume cracks + inspect (fracture mechanics + NDI)."},

{id:"D12",block:"D",tag:"out",q:"Which materials typically show NO true endurance (fatigue) limit?",
 opts:["Mild steel","Aluminium alloys","Cast iron","Low-alloy steel"],correct:1,
 exp:["Ferrous — shows a clear limit.","Correct. Non-ferrous metals (Al, Cu) keep losing strength with cycles, so a fatigue strength at ~5×10⁸ cycles is quoted instead.","Ferrous — shows a limit.","Ferrous — shows a limit."],
 reason:"Aluminium (non-ferrous) has no true endurance limit — hence safe-life/damage-tolerant design."},

{id:"D13",block:"D",tag:"jul25",q:"Which of the following is NOT part of the fatigue crack-initiation stage?",
 opts:["Microcrack growth","Macrocrack growth","Crack nucleation","Cyclic slip"],correct:1,
 exp:["Occurs during initiation.","Correct. Macrocrack growth is the propagation (Stage II) stage, not initiation.","Part of initiation.","The very first step of initiation."],
 reason:"Macrocrack growth belongs to Stage II (propagation), not initiation."},

{id:"D14",block:"D",tag:"jul25",q:"A component has an endurance limit of 250 MPa. If the cyclic stress amplitude is 270 MPa, what is likely to happen?",
 opts:["Infinite life","No fatigue damage","Fatigue failure after a finite number of cycles","Creep failure"],correct:2,
 exp:["Only if stress stays below the endurance limit.","270 > 250, so damage accumulates.","Correct. Above the endurance limit the S-N curve gives a finite life to failure.","Not a creep situation."],
 reason:"Amplitude (270) > endurance limit (250) → finite fatigue life."},

{id:"D15",block:"D",tag:"jul25",q:"Miner's rule assumes that:",
 opts:["Fatigue life is unaffected by loading history","Damage accumulates linearly with load cycles","Fatigue is independent of stress level","Crack growth is unpredictable"],correct:1,
 exp:["It does depend on the number of cycles at each level.","Correct. Palmgren–Miner assumes linear cumulative damage, D = Σ(nᵢ/Nᵢ).","Damage clearly depends on stress level (via Nᵢ).","It gives a predictable estimate."],
 reason:"Miner assumes linear cumulative damage summed over stress levels."},

{id:"D16",block:"D",tag:"jul25",q:"In which fatigue-design approach is a component designed for a finite life and removed from service at a specific design life?",
 opts:["Infinite-life design","Safe-life design","Fail-safe design","Damage-tolerance design"],correct:1,
 exp:["Infinite-life keeps stress below the fatigue limit forever.","Correct. Safe-life sets a finite life (with scatter margin) after which the part is retired.","Fail-safe is about surviving a component failure.","Damage-tolerance relies on inspection, not a fixed retirement life."],
 reason:"Safe-life = finite design life, retire the part before failure."},

{id:"D17",block:"D",tag:"jul25",q:"A shaft is cycled between σmin = 55 MPa and σmax = 550 MPa. The stress ratio R is:",
 opts:["0","0.1","0.5","1"],correct:1,
 exp:["R = 0 needs σmin = 0.","Correct. R = σmin/σmax = 55/550 = 0.1.","Would need σmin = 275.","Would need equal stresses (static)."],
 reason:"R = σmin/σmax = 55/550 = 0.1."},

/* ===== E · DFMA ===== */
{id:"E1",block:"E",tag:"feb25",q:"Approximately how much of the cost of product development and manufacture is determined at the design stage?",
 opts:["40–50%","50–70%","70–80%","75–85%"],correct:2,
 exp:["Too low.","Too low.","Correct. Design decisions lock in roughly 70–80% of total product cost.","Slightly overstated versus the quoted band."],
 reason:"~70–80% of product cost is committed by design decisions."},

{id:"E2",block:"E",tag:"feb25",q:"What role does Design for Assembly (DFA) play within DFM?",
 opts:["It optimises the assembly process for efficiency","It emphasises complex geometries","It ensures aesthetic requirements","It sets the material properties for production"],correct:0,
 exp:["Correct. DFA reduces part count and simplifies assembly to cut cost and time.","Opposite — it simplifies geometry.","Aesthetics is not its aim.","That is material selection."],
 reason:"DFA streamlines assembly (fewer parts, easier joining) within the DFMA effort."},

{id:"E3",block:"E",tag:"model",q:"The design–manufacturing paradigm in which both teams work together from concept to launch is called:",
 opts:["Over-the-wall","Sign-off","Concurrent engineering","Limited collaboration"],correct:2,
 exp:["That is the traditional, siloed approach.","Manufacturing only approves drawings.","Correct. Concurrent engineering integrates design and manufacturing from the start — the basis of DFX.","Teams interact only at critical points."],
 reason:"Concurrent engineering underpins DFMA/DFX."},

{id:"E4",block:"E",tag:"model",q:"Which of the following is a core Design-for-Assembly (DFA) guideline?",
 opts:["Add more separate fasteners","Minimise part count and use self-locating parts","Require part reorientation during assembly","Tighten all tolerances"],correct:1,
 exp:["Fewer fasteners, not more.","Correct. Fewer parts, self-aligning/locating features, mistake-proofing and minimal fasteners.","Avoid reorientation.","Avoid unnecessary tight tolerances."],
 reason:"DFA: minimise part count, self-locating parts, mistake-proofing, fewer fasteners."},

{id:"E5",block:"E",tag:"model",q:"A typical external draft angle for a forging is:",
 opts:["0–1°","5–7°","15–20°","45°"],correct:1,
 exp:["Too little to release the part.","Correct. ~5–7° external (7–10° internal) so the forging releases from the die.","Excessive.","Excessive."],
 reason:"Forging draft ≈ 5–7° external, 7–10° internal."},

{id:"E6",block:"E",tag:"model",q:"The five principles of DFMA are Process, Design, Material, Environment and:",
 opts:["Aesthetics","Compliance / Testing","Marketing","Packaging"],correct:1,
 exp:["Not one of the five.","Correct. The product must comply with safety and quality standards (compliance/testing).","Not one of the five.","Not one of the five."],
 reason:"Five DFMA principles: Process, Design, Material, Environment, Compliance/Testing."},

{id:"E7",block:"E",tag:"model",q:"In the classic Ford-vs-GM case, the Ford Taurus front bumper compared with GM's had:",
 opts:["More parts","Far fewer parts (about 10 vs 100)","The same number of parts","No bumper"],correct:1,
 exp:["Opposite.","Correct. Ford's bumper used ~10 parts vs GM's ~100 — a decisive manufacturability advantage.","No — the counts differed greatly.","No."],
 reason:"Ford's DFA bumper (~10 parts) beat GM's (~100), driving GM to adopt DFMA."},

{id:"E8",block:"E",tag:"model",q:"“Poka-yoke” in a DFA context means:",
 opts:["Adding weight","Mistake-proofing the design/assembly","Painting the part","Heat-treating the part"],correct:1,
 exp:["Unrelated.","Correct. Features (asymmetry, tapers, bosses) that make wrong assembly impossible.","Unrelated.","Unrelated."],
 reason:"Poka-yoke = mistake-proofing so parts can only be assembled correctly."},

{id:"E9",block:"E",tag:"jul25",q:"According to DFMA principles, reducing the number of fasteners (screws, rivets, etc.) in a product helps to:",
 opts:["Improve product aesthetics","Eliminate the need for quality control","Increase assembly precision","Simplify assembly and reduce cost"],correct:3,
 exp:["Not the main benefit.","QC is still required.","Precision is not the point.","Correct. Fewer fasteners means fewer operations, faster/cheaper (often automatable) assembly."],
 reason:"Fewer fasteners → simpler, cheaper, faster assembly."},

{id:"E10",block:"E",tag:"jul25",q:"Which of the following is NOT typically part of Design for Manufacturing (DFM)?",
 opts:["Minimise number of parts","Standardise components","Minimise finishing operations","Mistake-proof the design"],correct:3,
 exp:["A DFM guideline.","A DFM guideline.","A DFM guideline.","Correct. Mistake-proofing (poka-yoke) is a Design-for-Assembly (DFA) guideline, not DFM."],
 reason:"Mistake-proofing is a DFA guideline; the others are DFM."},

{id:"E11",block:"E",tag:"jul25",q:"Which of the following is NOT typically part of the DFX philosophy?",
 opts:["Design for Service","Design for Environment","Design for Comfort","Design for Quality"],correct:2,
 exp:["A recognised DFX.","A recognised DFX.","Correct. ‘Design for Comfort’ is not a standard DFX category (comfort falls under ergonomics).","A recognised DFX."],
 reason:"Standard DFX names: Manufacture, Assembly, Service, Environment, Quality, Reliability, Safety, Cost — not ‘Comfort’."},

{id:"E12",block:"E",tag:"model",q:"The main goal of DFM (as distinct from DFA) is to:",
 opts:["Reduce part production cost","Reduce assembly cost","Improve marketing","Increase part count"],correct:0,
 exp:["Correct. DFM optimises material and process choice to reduce the cost of making each part.","That is DFA's goal.","Not a DFM aim.","Opposite of good practice."],
 reason:"DFM → reduce production cost; DFA → reduce assembly cost."},

/* ===== F · Design for Safety & Reliability ===== */
{id:"F1",block:"F",tag:"feb25",q:"Which of the following is NOT a typical approach to enhance product reliability?",
 opts:["Redundancy","Design simplification","Increasing component complexity","Improved quality control"],correct:2,
 exp:["Adds a backup path → more reliable.","Fewer parts → more reliable.","Correct. More complexity generally lowers reliability (more failure modes).","Reduces defects → more reliable."],
 reason:"Redundancy, simplification and QC raise reliability; added complexity lowers it."},

{id:"F2",block:"F",tag:"feb25",q:"A ball bearing's reliability follows a Weibull distribution with m = 0.7 and θ = 7500 h. The probability it lasts more than 1450 h is about:",
 opts:["24.31%","27.5%","75.69%","72.8%"],correct:3,
 exp:["That is the failure probability, not the survival.","Too low.","Close but not from the correct exponent.","Correct. R = e^−(1450/7500)^0.7 = e^−0.314 ≈ 0.728 = 72.8%."],
 reason:"R(t) = e^−(t/θ)^m = e^−0.314 ≈ 72.8%."},

{id:"F3",block:"F",tag:"feb25",q:"As worded in the 2025 paper, the “safety factor” in Design for Safety refers to:",
 opts:["The ratio of actual load to the design load","The maximum allowable stress before failure","The number of redundant components","The level of compliance with safety regulations"],correct:0,
 exp:["Correct (as the paper defined it) — a load-ratio form of the safety factor.","That is allowable stress, not the ratio.","That is redundancy.","That is compliance."],
 reason:"Per the 2025 key, safety factor = ratio of actual load to design load (trust the reasoning; wording is debatable)."},

{id:"F4",block:"F",tag:"feb25",q:"Which of the following factors is NOT applicable to Design for Reliability (DFR) of electrical appliances?",
 opts:["Derating","Redundancy","Simplicity","Safety"],correct:3,
 exp:["A DFR guideline.","A DFR guideline.","A DFR guideline.","Correct (per the 2025 key). Derating, redundancy and simplicity are DFR guidelines; ‘safety’ is a separate design objective."],
 reason:"Derating/redundancy/simplicity are DFR guidelines; safety is a separate objective."},

{id:"F5",block:"F",tag:"model",q:"The middle (useful-life) region of the bathtub curve has a:",
 opts:["Decreasing failure rate","Constant (random) failure rate","Increasing failure rate","Zero failure rate"],correct:1,
 exp:["That is the infant-mortality region.","Correct. Random overloads dominate → constant failure rate.","That is the wear-out region.","Failures still occur, just randomly."],
 reason:"Bathtub: infant-mortality (falling) → useful-life (constant) → wear-out (rising)."},

{id:"F6",block:"F",tag:"model",q:"For a constant failure rate λ, the mean time to failure (MTTF) equals:",
 opts:["λ","λ²","1/λ","ln λ"],correct:2,
 exp:["Inverse relation.","No.","Correct. MTTF = ∫R dt = 1/λ for the exponential (constant-λ) model.","No."],
 reason:"Exponential model: MTTF = MTBF = 1/λ."},

{id:"F7",block:"F",tag:"model",q:"A Weibull shape parameter m > 1 represents a:",
 opts:["Decreasing failure rate","Constant failure rate","Increasing (wear-out) failure rate","Zero failure rate"],correct:2,
 exp:["m < 1 gives decreasing (infant mortality).","m = 1 gives constant (exponential).","Correct. m > 1 → increasing failure rate (wear-out); m ≈ 3.5 ≈ normal.","Failures still occur."],
 reason:"Weibull m<1 infant-mortality, m=1 exponential, m>1 wear-out."},

{id:"F8",block:"F",tag:"model",q:"Three units with R = 0.95, 0.85 and 0.75 arranged in series give a system reliability of about:",
 opts:["0.998","0.605","0.95","0.75"],correct:1,
 exp:["That is the parallel value.","Correct. Series R = 0.95·0.85·0.75 = 0.605.","Ignores the other units.","Ignores the other units."],
 reason:"Series R = ΠRᵢ = 0.605 (parallel would be 0.998)."},

{id:"F9",block:"F",tag:"model",q:"A circuit breaker that de-energises the system when it fails is an example of:",
 opts:["Fail-active","Fail-passive","Fail-operational","Redundancy"],correct:1,
 exp:["Fail-active stays energised in a safe mode.","Correct. Fail-passive drops to the lowest-energy (safe) state until reset.","Fail-operational keeps functioning.","Not the classification asked."],
 reason:"Fail-passive → drops to a safe, low-energy state on failure."},

{id:"F10",block:"F",tag:"model",q:"The “memoryless” property of the exponential distribution means:",
 opts:["Failure depends on the item's age","The probability of failure in an interval is independent of age","The item never fails","It only models wear-out"],correct:1,
 exp:["Opposite.","Correct. Random failures depend on external loads, not accumulated age.","It does fail — randomly.","It models the constant-rate (useful-life) region."],
 reason:"Constant-λ (exponential) failures have no memory of past age."},

{id:"F11",block:"F",tag:"out",q:"A bottom-up reliability technique that ranks failure modes by Severity × Occurrence × Detection is:",
 opts:["FTA (Fault Tree Analysis)","FMEA (Failure Mode & Effects Analysis)","A Weibull plot","Bathtub analysis"],correct:1,
 exp:["FTA is top-down with AND/OR gates.","Correct. FMEA is bottom-up and computes a Risk Priority Number (RPN = S×O×D).","A plotting method, not a hazard analysis.","A life-model concept."],
 reason:"FMEA = bottom-up, RPN = S×O×D; FTA = top-down logic tree."},

{id:"F12",block:"F",tag:"jul25",q:"A resistor has a constant failure rate λ = 0.017/hr. The probability it fails during the first 21 hours of operation is:",
 opts:["0.18","0.24","0.30","0.38"],correct:2,
 exp:["Too low.","Too low.","Correct. F = 1 − e^(−λt) = 1 − e^(−0.017·21) = 1 − e^(−0.357) ≈ 0.30.","Too high."],
 reason:"F(t) = 1 − e^−λt = 1 − e^−0.357 ≈ 0.30."},

{id:"F13",block:"F",tag:"jul25",q:"If the Weibull shape parameter β < 1, it indicates a:",
 opts:["Constant failure rate","Decreasing failure rate","Increasing failure rate","Maximum failure rate"],correct:1,
 exp:["β = 1 gives constant.","Correct. β < 1 → decreasing failure rate (infant-mortality / burn-in region).","β > 1 gives increasing.","Not meaningful."],
 reason:"Weibull β (= m) < 1 → decreasing (infant-mortality) failure rate."},

{id:"F14",block:"F",tag:"model",q:"Two identical units each of reliability R are placed in parallel (redundant). The system reliability is:",
 opts:["R²","1 − (1−R)²","2R","R/2"],correct:1,
 exp:["That is the series result.","Correct. Parallel: system fails only if both fail → Rₛ = 1 − (1−R)².","Can exceed 1 — impossible.","Wrong."],
 reason:"Parallel Rₛ = 1 − Π(1−Rᵢ); for two units, 1−(1−R)²."},

{id:"F15",block:"F",tag:"model",q:"The cumulative distribution function F(t) of failure time represents the:",
 opts:["Reliability","Unreliability (probability of failure by time t)","Failure rate","Hazard slope"],correct:1,
 exp:["Reliability is R = 1 − F.","Correct. F(t) = ∫₀ᵗ f dx is the unreliability; R(t) = 1 − F(t).","Failure rate is λ(t) = f/R.","Not F."],
 reason:"F(t) = unreliability = 1 − R(t)."},

/* ===== G · Human engineering / ergonomics ===== */
{id:"G1",block:"G",tag:"feb25",q:"Anthropometric human factors in design are related to:",
 opts:["Human sensation and feel of the operator","The physical size of the human body","The psychological condition of the operator","Man–machine interaction dynamics"],correct:1,
 exp:["That is the physiological factor.","Correct. Anthropometry = static body dimensions (reach, height, clearances).","That is the psychological factor.","That is broader system interaction."],
 reason:"Anthropometric = physical body size/reach (static)."},

{id:"G2",block:"G",tag:"feb25",q:"Which type of display is most effective for presenting rapidly changing quantitative information?",
 opts:["Digital numerical display","Analog dial (moving pointer)","Symbolic display","Text-based display"],correct:1,
 exp:["Digital is best for precise, static readings.","Correct. A moving pointer shows rate and direction of change at a glance.","Not quantitative enough.","Poor for changing values."],
 reason:"Analog dial/pointer for changing values; digital for precise static values."},

{id:"G3",block:"G",tag:"model",q:"The guiding motto of ergonomics is:",
 opts:["Fit the man to the job","Fit the job to the man","Maximise output at any cost","Automate everything"],correct:1,
 exp:["Opposite of the ergonomic principle.","Correct. Design to human capability and limits — efficiency, health, safety, comfort.","Not ergonomics.","Not ergonomics."],
 reason:"Ergonomics = fit the job/machine to the human."},

{id:"G4",block:"G",tag:"model",q:"The recommended letter height for a display viewed at distance D (mm) is:",
 opts:["D / 50","D / 100","D / 200","D / 500"],correct:2,
 exp:["Too tall.","Too tall.","Correct. Letter height (mm) = viewing distance (mm) / 200.","Too small to read."],
 reason:"Letter height = viewing distance / 200."},

{id:"G5",block:"G",tag:"model",q:"Consistency-of-motion says that a clockwise turn of a control should mean:",
 opts:["Decrease","Increase","Stop","Reverse"],correct:1,
 exp:["Opposite convention.","Correct. Clockwise → increase, and the display pointer should move in the same direction as the control.","Not a level change.","Not a level change."],
 reason:"Clockwise → increase; display moves with the control."},

{id:"G6",block:"G",tag:"model",q:"Physiological human factors deal mainly with:",
 opts:["Body size","Human sensations (visual, auditory, tactile)","Mental strain","Cost"],correct:1,
 exp:["That is anthropometric.","Correct. Physiological = sensory responses — e.g. display brightness, alarm loudness.","That is psychological.","Not a human factor."],
 reason:"Physiological = the operator's sensory responses."},

{id:"G7",block:"G",tag:"model",q:"The first of the ten ergonomic principles is to work in:",
 opts:["Any comfortable posture","Neutral postures (keep the spine's S-curve)","Fixed static loads","High-reach positions"],correct:1,
 exp:["Too vague.","Correct. Neutral neck, elbows in, wrists neutral — to prevent musculoskeletal disorders.","Static loading is to be minimised.","Reaching high is discouraged."],
 reason:"Principle 1: work in neutral postures to avoid MSDs."},

{id:"G8",block:"G",tag:"out",q:"Reach distances should be sized for the ____ user and clearances for the ____ user.",
 opts:["95th / 5th percentile","5th / 95th percentile","average / average","tallest / tallest"],correct:1,
 exp:["Reversed.","Correct. If the smallest can reach and the largest fits, everyone is accommodated.","Designing for the average fits almost no one.","Ignores small users' reach."],
 reason:"Reach → 5th percentile; clearance → 95th percentile."},

{id:"G9",block:"G",tag:"jul25",q:"The Man–Machine System is best defined as:",
 opts:["The scientific study of the relationship between man and his working environment","The study of a man and his machine working hours","The study of instruction and command flow between man and machine","The study of man and machine inter-dependence"],correct:3,
 exp:["That is closer to a definition of ergonomics/environment.","Not a system definition.","Too narrow — only the signal flow.","Correct. A man–machine system is the study of the inter-dependence of the human and the machine working together."],
 reason:"Man–machine system = study of the interdependence of human and machine."},

{id:"G10",block:"G",tag:"jul25",q:"Which of the following best reflects the goal of ergonomic workplace design?",
 opts:["Increase repetitive movement","Limit movement to fixed postures","Match the task to human capabilities","Keep all essentials within reach"],correct:2,
 exp:["Repetition causes injury — to be reduced.","Static/fixed postures are discouraged.","Correct. Ergonomics fits the task and workplace to human capabilities and limits.","A useful practice, but not the overarching goal."],
 reason:"Ergonomic design fits the task/workplace to human capability."}
];

/* -------------------------------------------------------------------------
   SUBJECTIVE PARTS  (Section B building blocks + browsable bank)
   Grouped by exam block. Each: {id, block, q, marks, tags[], like, sol(html)}
   like = likelihood 1..3 stars (past-paper trend + slide emphasis)
   ------------------------------------------------------------------------- */
window.PARTS = [
/* ============ BLOCK 1 — Elasticity, stress analysis & failure ============ */
{id:"P1a",block:"B",marks:5,like:3,tags:["feb25","derivation"],
 q:"Explain the three-dimensional stress state and its tensor notation. For the 3-D stress and strain field, define the generalized Hooke's law.",
 sol:`<p>At any point, the stress is fully described on three mutually perpendicular planes — a <b>second-order stress tensor</b> with 9 components, of which only <b>6 are independent</b> (symmetry, τᵢⱼ = τⱼᵢ):</p>
 <div class="eq">σᵢⱼ = [ σₓₓ  τₓᵧ  τₓᵩ
       τᵧₓ  σᵧᵧ  τᵧᵩ
       τᵩₓ  τᵩᵧ  σᵩᵩ ]</div>
 <p>σ = normal stresses, τ = shear stresses. <b>Generalized Hooke's law</b> (homogeneous, isotropic, linear-elastic) by superposition:</p>
 <div class="eq">εₓ = (1/E)[σₓ − ν(σᵧ + σᵩ)]   (cyclic for εᵧ, εᵩ)
γₓᵧ = τₓᵧ / G ,  etc.</div>
 <p>Tensor / Lamé form: <code class="k">σᵢⱼ = λ εₖₖ δᵢⱼ + 2μ εᵢⱼ</code> (λ, μ = G are the Lamé constants). The anisotropic generalisation is σᵢⱼ = Cᵢⱼₖₗ εₖₗ with the 4th-order stiffness tensor C.</p>`},

{id:"P1b",block:"B",marks:2,like:3,tags:["feb25"],
 q:"Ceramics are considered a linear-elastic material with no plasticity. Draw an illustrative stress–strain diagram for a ceramic.",
 sol:`<p>A <b>single straight line</b> from the origin (slope = E, high) rising to a point where it <b>stops abruptly at brittle fracture</b> — no yield point, no plastic/necking region. Note the small failure strain and that ceramic tensile strength is only ~10% of its compressive strength.</p>
 <figure>__SVG_CERAMIC__<figcaption>Ceramic: linear-elastic to sudden brittle fracture (×).</figcaption></figure>`},

{id:"P1c",block:"B",marks:3,like:2,tags:["feb25"],
 q:"Define a material selection chart and explain how it helps in product design.",
 sol:`<p>A <b>material selection (Ashby) chart</b> plots one material property against another (e.g. Young's modulus vs density, or strength vs cost), with each material class shown as a “bubble”. It helps design by:</p>
 <ul class="tight"><li>letting you <b>screen thousands of materials visually</b> against two requirements at once;</li>
 <li>overlaying a <b>performance guideline</b> (e.g. constant specific stiffness E/ρ = C) and sliding it toward the best region (top-left for light &amp; stiff);</li>
 <li>narrowing to a class, then comparing members within it.</li></ul>
 <div class="box beyond"><span class="lbl">Beyond the slides (Norton / Ashby)</span>Behind the guideline is a <b>material index</b>: maximise E^(1/2)/ρ for a light-stiff beam, σₑ^(2/3)/ρ for a light-strong beam. The guideline slope on the log–log chart comes from this index.</div>`},

{id:"P1d",block:"B",marks:4,like:3,tags:["feb25"],
 q:"State the Tresca criterion for failure of ductile materials. Draw the 2-D Tresca yield surface in terms of principal stresses.",
 sol:`<p><b>Tresca (maximum-shear-stress) criterion:</b> a ductile material yields when the maximum shear stress reaches the shear yield value from a tension test:</p>
 <div class="eq">τₘₐₓ = (σ₁ − σ₃)/2 = σᵧ/2   ⟶   σ₁ − σ₃ = σᵧ</div>
 <p>In 2-D (σ₃ = 0) the yield surface is an <b>irregular hexagon</b> through (±σᵧ,0), (0,±σᵧ) and the 45° points (σᵧ,σᵧ), (−σᵧ,−σᵧ). It lies <b>inside</b> the Von Mises ellipse (Tresca is more conservative).</p>
 <figure>__SVG_YIELD__<figcaption>Tresca hexagon inscribed in the Von Mises ellipse.</figcaption></figure>`},

{id:"P1e",block:"B",marks:4,like:2,tags:["jul25","numerical"],
 q:"Define principal stresses and explain their significance in stress analysis. For a 2-D field σₓ = 40 MPa, σᵧ = 10 MPa, τₓᵧ = 30 MPa, calculate the principal stresses.",
 sol:`<p><b>Principal stresses</b> are the normal stresses on the planes where the shear stress is zero; they are the maximum and minimum normal stresses at the point, and they set the values used in failure theories.</p>
 <div class="eq">σ₁,₂ = (σₓ+σᵧ)/2 ± √[ ((σₓ−σᵧ)/2)² + τₓᵧ² ]
     = 25 ± √[15² + 30²] = 25 ± 33.54</div>
 <p><b>σ₁ = 58.5 MPa, σ₂ = −8.5 MPa</b>; τₘₐₓ = 33.5 MPa. (For the actual July-2025 figure use its given σₓ, σᵧ, τₓᵧ values in the same formula.)</p>`},

{id:"P1f",block:"B",marks:7,like:2,tags:["jul25","conceptual"],
 q:"A thin-walled cylindrical pressure vessel carries internal pressure P. Considering the curved section: (i) draw and explain the stress state on a small element; (ii) which 2-D approximation suits such vessels, and why; (iii) which failure theory is most appropriate for ductile material under this state, and why.",
 sol:`<p><b>(i) Stress state.</b> On the curved wall the element sees two mutually perpendicular tensile stresses and no shear on those faces (they are principal):</p>
 <div class="eq">Hoop (circumferential): σθ = P r / t
Longitudinal (axial):    σₗ = P r / 2t   →  σθ = 2σₗ
Radial σᵣ ≈ 0 on the outer/free surface (thin wall).</div>
 <p><b>(ii) Approximation:</b> <b>plane stress</b> — the wall is thin, so the through-thickness (radial) stress is negligible compared with the hoop and axial stresses; the free surface has zero z-face stress.</p>
 <p><b>(iii) Failure theory:</b> for a ductile material the <b>distortion-energy (Von Mises)</b> theory is most appropriate — it is the most accurate for ductile yielding under biaxial stress. (Tresca is the safe, conservative alternative.) Physically, only shape-changing distortion energy causes yield; the hydrostatic part does not.</p>`},

{id:"P1g",block:"B",marks:3,like:2,tags:["jul25","conceptual"],
 q:"In mechanical design, components are subjected to unpredictable and varying loads. What is a design factor, and how is it different from a factor of safety?",
 sol:`<p>A <b>design factor</b> n_d is the margin the engineer <i>applies during design</i> to cover uncertainty in material strength, loading and analysis:</p>
 <div class="eq">n_d = loss-of-function parameter / maximum-allowable parameter   →   n = S / σ</div>
 <p>The <b>factor of safety</b> is the <i>realised</i> margin of the finished design — the value that actually results after dimensions are rounded up to standard sizes/components. In short: the design factor is the target chosen before sizing; the factor of safety is what you end up with afterwards. Stress and strength must be of the same type, units and critical location.</p>`},

{id:"P1h",block:"B",marks:4,like:2,tags:["model","numerical"],
 q:"For σₓ = 80, σᵧ = −20 MPa, τₓᵧ = 30 MPa, find the principal stresses and the maximum in-plane shear stress.",
 sol:`<div class="eq">avg = (80−20)/2 = 30 ;  R = √[ ((80−(−20))/2)² + 30² ] = √[50² + 30²] = √3400 = 58.3</div>
 <p><b>σ₁ = 30 + 58.3 = 88.3 MPa, σ₂ = 30 − 58.3 = −28.3 MPa, τₘₐₓ = R = 58.3 MPa.</b></p>`},

{id:"P1i",block:"B",marks:5,like:2,tags:["model","derivation"],
 q:"Distinguish plane stress from plane strain with an example of each, and write Hooke's law for 2-D plane stress.",
 sol:`<p><b>Plane stress:</b> all stresses on the z-faces are zero (σᵩ = τₓᵩ = τᵧᵩ = 0) — for <b>thin</b> bodies (plates, pressure-vessel walls, aircraft skin). <b>Plane strain:</b> all z-direction strains are zero — for <b>thick</b>, constrained bodies (dams, long shafts).</p>
 <div class="eq">Plane stress Hooke's law:
εₓ = (σₓ − νσᵧ)/E ,  εᵧ = (σᵧ − νσₓ)/E ,  γₓᵧ = τₓᵧ/G</div>`},

{id:"P1j",block:"B",marks:4,like:2,tags:["model"],
 q:"Compare the five classical failure theories and state which suits ductile and which suits brittle materials.",
 sol:`<div class="tbl-wrap"><table class="compact"><tr><th>Theory</th><th>Criterion</th><th>Suited to</th></tr>
 <tr><td>Rankine (max principal stress)</td><td>σ₁ ≥ σult</td><td>Brittle</td></tr>
 <tr><td>Tresca (max shear)</td><td>σ₁ − σ₃ ≥ σᵧ</td><td>Ductile (conservative)</td></tr>
 <tr><td>St. Venant (max principal strain)</td><td>ε₁ ≥ εᵧ</td><td>Rarely used</td></tr>
 <tr><td>Haigh (max total strain energy)</td><td>U ≥ Uᵧ</td><td>Brittle-ish</td></tr>
 <tr><td>Von Mises (distortion energy)</td><td>σ' ≥ σᵧ</td><td>Ductile (accurate)</td></tr></table></div>
 <div class="box beyond"><span class="lbl">Why Von Mises beats Tresca</span>Only distortion (shape-change) energy drives ductile yield; hydrostatic pressure alone does not yield metals.</div>`},

/* ============ BLOCK 2 — Fracture mechanics ============ */
{id:"P2a",block:"C",marks:3,like:3,tags:["feb25","derivation"],
 q:"Define cohesive stress and explain its significance in the fracture process.",
 sol:`<p><b>Cohesive stress σᴄ</b> is the theoretical stress needed to pull atomic planes apart (break bonds), estimated from the interatomic force–displacement curve (approximated as half a sine wave):</p>
 <div class="eq">σᴄ = √(E γₛ / x₀)   (γₛ = surface energy, x₀ = atomic spacing)</div>
 <p><b>Significance:</b> real materials fracture at stresses <b>orders of magnitude below σᴄ</b> because pre-existing flaws concentrate stress at their tips (σₜᵢₚ = 2σ√(a/ρ)). Fracture occurs when the amplified tip stress reaches σᴄ — this gap between theoretical and real strength is the very reason fracture mechanics exists.</p>`},

{id:"P2b",block:"C",marks:3,like:3,tags:["feb25","derivation"],
 q:"Define the energy release rate (G) and state the energy-release-rate criterion for crack propagation.",
 sol:`<p><b>Energy release rate</b> G = −dΠ/dA — the potential energy released per unit increase in crack area (the crack “driving force”). For linear elasticity:</p>
 <div class="eq">G = Kᵢ² / E'   (E' = E plane stress; E/(1−ν²) plane strain)</div>
 <p><b>Irwin's criterion:</b> the crack propagates when <b>G ≥ Gᴄ</b>, where Gᴄ is the critical energy release rate (fracture toughness in energy terms). It is the global-energy counterpart of the local K ≥ Kᴵᴄ criterion.</p>`},

{id:"P2c",block:"C",marks:5,like:3,tags:["feb25","numerical"],
 q:"A cantilever beam (thickness 5 mm) has a 2 mm edge crack. Kᴵᴄ = 30 MPa√m, σᵧ = 300 MPa, section modulus Z = 400 mm³, L = 100 mm; nominal stress = M/Z; edge-crack Kᵢ = 1.12σ√(πa). Find (i) failure load P by fracture, (ii) failure load P by yielding, (iii) predict the failure mode.",
 sol:`<p><b>(i) Fracture</b> — set Kᵢ = Kᴵᴄ:</p>
 <div class="eq">σₑ = Kᴵᴄ / (1.12√(πa)) = 30 / (1.12·√(π·0.002)) = 30 / (1.12·0.07927) = 337.9 MPa
M = σₑ·Z = 337.9·400 = 1.352×10⁵ N·mm ;  P_fracture = M/L = 135200/100 ≈ 1.35 kN</div>
 <p><b>(ii) Yielding</b> — M = σᵧ·Z = 300·400 = 1.20×10⁵ N·mm ; P_yield = 120000/100 = <b>1.20 kN</b>.</p>
 <p><b>(iii) Mode:</b> P_yield (1.20 kN) &lt; P_fracture (1.35 kN), so the beam <b>yields at the fixed end first</b> — failure is by yielding, not fracture. <i>Rule: the smaller of the two loads always governs.</i></p>`},

{id:"P2d",block:"C",marks:4,like:2,tags:["jul25","conceptual"],
 q:"What is a crack in the context of fracture mechanics? Crack geometry is an important parameter — explain the parameters used to define crack geometry.",
 sol:`<p>A <b>crack</b> is a sharp planar void/discontinuity in a material that acts as a <b>stress amplifier</b> — it intensifies the far-field stress at its tip (it does not create stress). Its geometry is defined by:</p>
 <ul class="tight"><li><b>Connection to a free surface</b> — fully internal, internal-connected-to-surface, or surface crack (surface cracks also risk corrosion/oxidation);</li>
 <li><b>Crack length</b> — longer is more dangerous (raises K);</li>
 <li><b>Crack-tip radius</b> — sharper is more dangerous; plasticity blunts tips in ductile metals;</li>
 <li><b>Crack orientation</b> relative to the loading direction.</li></ul>
 <figure>__SVG_MODES__<figcaption>The three crack-loading modes: I Opening, II Sliding, III Tearing.</figcaption></figure>`},

{id:"P2e",block:"C",marks:3,like:3,tags:["jul25","derivation"],
 q:"For a crack to propagate, both the Griffith global criterion and the Inglis local criterion must be satisfied. State the Griffith criterion and the Inglis criterion for fracture.",
 sol:`<p><b>Inglis (local, stress-based):</b> a crack grows when the amplified crack-tip stress reaches the theoretical fracture stress:</p>
 <div class="eq">σₜᵢₚ = σ(1 + 2a/b) ≈ 2σ√(a/ρ) ≥ σₑ</div>
 <p><b>Griffith (global, energy-based):</b> a crack grows only if the elastic strain energy released per unit extension is at least the surface energy of the new faces:</p>
 <div class="eq">dUₛ/da ≥ dUᵧ/da   ⟶   σₑ = √(2Eγₛ/πa)   (plane stress)</div>
 <div class="box beyond"><span class="lbl">Beyond the slides (Shukla)</span>Irwin–Orowan modification for metals: replace γₛ by an effective fracture energy w_f = γₛ + γₚ, where the plastic work γₚ ≫ γₛ — this is why tough metals absorb far more energy than their bond energy alone predicts.</div>`},

{id:"P2f",block:"C",marks:2,like:2,tags:["jul25","conceptual"],
 q:"In LEFM, analytical solutions show that stress approaches infinity as the crack tip is approached. Explain the concept of stress singularity at the crack tip.",
 sol:`<p>The Williams crack-tip solution has the form σᵢⱼ = K/√(2πr)·fᵢⱼ(θ). As the distance from the tip r → 0, the <b>1/√r</b> term makes the elastic stress tend to <b>infinity</b> — a mathematical <b>stress singularity</b>. Real materials cannot sustain infinite stress, so a small <b>plastic zone</b> forms at the tip and blunts it. LEFM stays valid provided this plastic zone is small compared with the crack and specimen dimensions (small-scale yielding); otherwise elastic-plastic FM (J-integral/CTOD) is required.</p>`},

{id:"P2g",block:"C",marks:3,like:2,tags:["jul25","numerical"],
 q:"A 2.5 mm thick composite panel (width 80 mm) has a 2 mm edge crack and yields at 100 kN. An identical panel fractures completely at 85 kN when the crack length is 6 mm. Find the yield stress σᵧ and the fracture toughness Kᴵᴄ. (Kᵢ = 1.12σ√(πa).)",
 sol:`<p><b>Yield stress</b> from the panel that yields (net or gross section — use gross area = width × thickness):</p>
 <div class="eq">σᵧ = F_yield / A = 100000 / (80×2.5) = 100000/200 = 500 MPa</div>
 <p><b>Fracture toughness</b> from the panel that fractures at a = 6 mm, σ = 85000/200 = 425 MPa:</p>
 <div class="eq">Kᴵᴄ = 1.12·σ·√(πa) = 1.12·425·√(π·0.006) = 1.12·425·0.1373 ≈ 65.3 MPa√m</div>
 <p>(Exact numbers depend on whether net-section area is used; state your assumption — the method earns the marks.)</p>`},

{id:"P2h",block:"C",marks:4,like:2,tags:["model","numerical"],
 q:"Evaluate the critical crack length for a centre-cracked infinite plate: σ = 200 MPa, Kᴵᴄ = 50 MPa√m, Y = 1.",
 sol:`<div class="eq">K = Yσ√(πa) = Kᴵᴄ  ⟶  aᴄ = (1/π)(Kᴵᴄ/Yσ)²
aᴄ = (1/π)(50/200)² = (1/π)(0.0625) = 0.0199 m ≈ 19.9 mm (half-length; full 2a ≈ 39.8 mm)</div>`},

{id:"P2i",block:"C",marks:3,like:2,tags:["model"],
 q:"Relate K and G, and explain the difference between LEFM and EPFM.",
 sol:`<p><b>G = K²/E'</b> — K is a <i>local</i> crack-tip parameter, G a <i>global</i> energy parameter; they are uniquely related for linear-elastic behaviour. <b>LEFM</b> (using K, G) applies when the crack-tip plastic zone is small (brittle / high-strength materials). When plasticity is large, LEFM breaks down and <b>EPFM</b> uses the <b>J-integral</b> or <b>CTOD (δ)</b>; the J-integral reduces to G in the elastic limit, which is why it “generalises” the energy-release-rate concept.</p>`},

/* ============ BLOCK 3 — Fatigue ============ */
{id:"P3a",block:"D",marks:3,like:3,tags:["feb25"],
 q:"Define High-Cycle Fatigue (HCF) and Low-Cycle Fatigue (LCF). Explain the major difference in terms of failure mechanism.",
 sol:`<div class="tbl-wrap"><table class="compact"><tr><th></th><th>HCF</th><th>LCF</th></tr>
 <tr><td>Cycles</td><td>&gt; 10³ (often ≫)</td><td>&lt; 10³</td></tr>
 <tr><td>Stress</td><td>Low, below yield</td><td>High, local yielding</td></tr>
 <tr><td>Strain</td><td>Mostly elastic</td><td>Plastic-dominated</td></tr>
 <tr><td>Analysis</td><td>Stress-life (S-N)</td><td>Strain-life (ε-N)</td></tr></table></div>
 <p><b>Mechanism difference:</b> in HCF, failure is dominated by <b>crack initiation</b> at stress raisers under nominally elastic stress (long initiation, high cycle count). In LCF, the bulk material undergoes <b>reversed plastic strain</b> each cycle, so cracks initiate quickly and life is governed by plastic-strain accumulation.</p>`},

{id:"P3b",block:"D",marks:2,like:3,tags:["feb25","jul25"],
 q:"How do residual stresses affect the fatigue strength and fatigue life of a material?",
 sol:`<p>Residual stresses add algebraically to the applied stress at the surface, shifting the local mean stress. <b>Compressive</b> residual stress (shot-peening, cold-rolling, carburising) lowers the effective mean and peak tensile stress at the surface, <b>delaying crack initiation and raising fatigue strength/life</b>. <b>Tensile</b> residual stress (welding, aggressive machining, grinding burn) does the opposite — it <b>reduces</b> fatigue life. This is why surface-compression treatments are deliberately applied to fatigue-critical parts (gears, springs, shafts).</p>`},

{id:"P3c",block:"D",marks:4,like:3,tags:["internal26","feb25","numerical","derivation"],
 src:"Shukla, Practical Fracture Mechanics in Design — Ch. 5 (fatigue crack growth). Appeared in BOTH the 25 May 2026 internal (Q4) and Feb 2025 (Q3c).",
 q:"A large low-carbon steel plate has a 30 mm edge crack under cyclic load 0→180 MPa. The crack must not exceed half the critical length for Kᴵᴄ = 150 MPa√m. Using Paris' law with C = 7.2×10⁻¹² (MPa√m units), m = 3, determine the fatigue crack-propagation life.",
 sol:`<p><b>Step 1 — critical &amp; limiting crack length</b> (Y = 1.12, σmax = 180):</p>
 <div class="eq">aᴄ = (1/π)(Kᴵᴄ/(Yσmax))² = (1/π)(150/(1.12·180))² = (1/π)(0.7440)² = 0.1762 m
a_f = aᴄ/2 = 0.0881 m</div>
 <p><b>Step 2 — integrate Paris' law</b> (m = 3, so exponent −1⁄₂):</p>
 <div class="eq">N = 2 / [C(YΔσ√π)³] · (aᵢ⁻½ − a_f⁻½),   aᵢ = 0.030 m, Δσ = 180 MPa
YΔσ√π = 1.12·180·1.77245 = 357.3 → cube = 4.561×10⁷ ; ×C = 3.284×10⁻⁴
aᵢ⁻½ = 5.7735, a_f⁻½ = 3.3693
N = (2 / 3.284×10⁻⁴)(2.4042) ≈ 1.46×10⁴ cycles</div>
 <div class="box warn"><span class="lbl">Common mistakes</span>Use Δσ (not σmax) in ΔK; keep a in metres to match C; the m = 3 integral gives a⁻½ terms (exponent 1−m/2 = −½). Always show the method.</div>`},

{id:"P3d",block:"D",marks:2,like:3,tags:["feb25"],
 q:"Explain the damage-tolerance fatigue design strategy.",
 sol:`<p><b>Damage-tolerance</b> assumes cracks already exist (from processing or fatigue) and uses <b>fracture mechanics + scheduled non-destructive inspection (NDI)</b> to ensure any crack is detected and repaired before it grows to critical size. It requires three things: (1) known <b>residual strength</b> as a function of crack size, (2) a validated <b>fatigue-crack-growth law</b> (Paris), and (3) a reliable <b>crack-detection / inspection interval</b>. It is a refinement of fail-safe design and is standard for modern aircraft.</p>`},

{id:"P3e",block:"D",marks:3,like:2,tags:["jul25","numerical"],
 q:"A material is subjected to fully tensile cyclic loading with σmin = 0 and σmax = 250 MPa. Draw the fatigue load and calculate: stress range, stress amplitude, mean stress, stress ratio R and amplitude ratio A.",
 sol:`<div class="eq">Δσ = σmax − σmin = 250 − 0 = 250 MPa
σₐ = (σmax − σmin)/2 = 125 MPa
σₘ = (σmax + σmin)/2 = 125 MPa
R = σmin/σmax = 0/250 = 0   (repeated / zero-to-tension)
A = σₐ/σₘ = 125/125 = 1</div>
 <figure>__SVG_FATLOAD__<figcaption>Repeated (R = 0) loading: a sinusoid from 0 to σmax.</figcaption></figure>`},

{id:"P3f",block:"D",marks:5,like:3,tags:["jul25","numerical","derivation"],
 q:"A stainless-steel shaft has σᵤ = 1100 MPa. Using the S-N (S = a N^b) approach with two conditions — start of HCF (N = 10³, S = 0.9σᵤ) and endurance limit (N = 10⁷, S = 0.5σᵤ) — evaluate the S-N relation. Correction factors: load Cₗ = 1, size C_D = 1, surface Cₛ = 0.9, treatment Cₒ = 0.95.",
 sol:`<p><b>Corrected endpoint stresses:</b> apply the Marin-type factors k = Cₗ·C_D·Cₛ·Cₒ = 1·1·0.9·0.95 = 0.855.</p>
 <div class="eq">S₁ (N=10³) = 0.9·1100 = 990 MPa      (some texts leave the 10³ point uncorrected)
S₂ (N=10⁷) = 0.5·1100·0.855 = 470.3 MPa   (endurance limit × correction factors)</div>
 <p><b>Solve S = aN^b</b> from the two points:</p>
 <div class="eq">b = log(S₁/S₂) / log(N₁/N₂) = log(990/470.3) / log(10³/10⁷)
  = log(2.105) / log(10⁻⁴) = 0.3232 / (−4) = −0.0808
a = S₁ / N₁^b = 990 / (10³)^(−0.0808) = 990 / 0.573 ≈ 1727 MPa</div>
 <p><b>S-N relation:  S ≈ 1727 · N^(−0.081) MPa.</b> (Numbers shift slightly depending on whether the 10³ point is also corrected; state your assumption.)</p>`},

{id:"P3g",block:"D",marks:4,like:3,tags:["jul25","conceptual"],
 q:"In the context of LEFM, discuss the fatigue crack-growth-rate curve (da/dN vs ΔK) and explain the physical significance of its different regions.",
 sol:`<p>Plotting log(da/dN) against log(ΔK) gives a <b>sigmoidal</b> curve with three regions:</p>
 <div class="tbl-wrap"><table class="compact"><tr><th>Region</th><th>Behaviour</th><th>Controlled by</th></tr>
 <tr><td>I — threshold</td><td>Below ΔK_th essentially no growth (~10⁻¹⁰ m/cycle)</td><td>Microstructure, mean stress, environment</td></tr>
 <tr><td>II — Paris régime</td><td>Linear log–log: da/dN = C(ΔK)^m</td><td>ΔK; insensitive to microstructure</td></tr>
 <tr><td>III — unstable</td><td>Accelerating growth as K_max → Kᴵᴄ</td><td>Fracture toughness K_c</td></tr></table></div>
 <figure>__SVG_DADN__<figcaption>The three-region da/dN vs ΔK curve (log–log).</figcaption></figure>`},

{id:"P3h",block:"D",marks:2,like:2,tags:["jul25"],
 q:"Discuss the effect of (i) state of stress (mean stress) and (ii) residual stress state on fatigue behaviour.",
 sol:`<p><b>(i) Mean stress:</b> for a given amplitude, a higher (more tensile) mean stress <b>reduces fatigue life</b>; a compressive mean stress increases it. This is captured by mean-stress corrections (Goodman/Gerber/Soderberg), which reduce the allowable amplitude as σₘ rises toward the UTS.</p>
 <p><b>(ii) Residual stress:</b> compressive surface residual stress (shot-peening) lowers the effective mean and <b>extends life</b>; tensile residual stress (welding, grinding burn) <b>shortens</b> it. Surface treatments are chosen to leave the fatigue-critical surface in compression.</p>`},

{id:"P3i",block:"D",marks:4,like:2,tags:["model","numerical"],
 q:"A member sees the load spectrum: (1) n₁ = 10⁴ at N₁ = 5×10⁴; (2) n₂ = 10⁵ at N₂ = 10⁶; (3) n₃ = 10⁶ at N₃ = 24×10⁷; (4) n₄ = 10⁷ at N₄ = 12×10⁷. Use Miner's rule to decide if one pass causes failure and find the blocks-to-failure.",
 sol:`<div class="eq">D = Σ nᵢ/Nᵢ = 10⁴/5×10⁴ + 10⁵/10⁶ + 10⁶/24×10⁷ + 10⁷/12×10⁷
  = 0.200 + 0.100 + 0.00417 + 0.0833 = 0.388</div>
 <p>Since D = 0.388 &lt; 1, <b>one pass does not cause failure</b>. If the block repeats, <b>blocks-to-failure = 1/0.388 ≈ 2.58 blocks.</b></p>`},

{id:"P3j",block:"D",marks:3,like:2,tags:["model"],
 q:"Describe the stages of fatigue failure.",
 sol:`<p><b>Stage I — initiation:</b> cyclic plastic slip forms persistent slip bands and surface roughness → micro-cracks at slip bands, grain boundaries or inclusions. <b>Stage II — propagation:</b> micro-cracks coalesce into a macro-crack that grows each cycle (da/dN vs ΔK; beach marks visible). <b>Stage III — final fracture:</b> the remaining section can no longer carry the load and fails rapidly. The three governing parameters across the process are K_t (stress-concentration) → K_I (stress-intensity) → K_IC (fracture toughness).</p>`},

{id:"P3k",block:"D",marks:3,like:2,tags:["model"],
 q:"Compare the four fatigue design strategies with an example of each.",
 sol:`<div class="tbl-wrap"><table class="compact"><tr><th>Strategy</th><th>Principle</th><th>Example</th></tr>
 <tr><td>Infinite-life</td><td>Stay below the fatigue limit forever</td><td>Valve springs</td></tr>
 <tr><td>Safe-life</td><td>Retire at a finite life with margin</td><td>Bearings, jet-engine parts</td></tr>
 <tr><td>Fail-safe</td><td>System survives one part failing</td><td>Multi-load-path airframe</td></tr>
 <tr><td>Damage-tolerance</td><td>Assume cracks, inspect before critical</td><td>Modern aircraft</td></tr></table></div>`},

/* ============ BLOCK 4 — DFMA, reliability & ergonomics ============ */
{id:"P4a",block:"E",marks:3,like:3,tags:["feb25"],
 q:"List and briefly describe three key aspects of DFX commonly used in engineering design.",
 sol:`<ul class="tight"><li><b>DFM (Design for Manufacture)</b> — design parts for easy, low-cost, high-quality production: right process, simple geometry, standard materials, avoid tight tolerances.</li>
 <li><b>DFA (Design for Assembly)</b> — minimise part count, use self-locating/self-aligning parts, mistake-proofing, few fasteners.</li>
 <li><b>DFR (Design for Reliability)</b> — build in margins, derating, redundancy, durability and ease of inspection to meet the life target.</li></ul>
 <p class="small">(Others acceptable: Design for Safety, Serviceability, Environment/Sustainability, Cost, Quality.)</p>`},

{id:"P4b",block:"E",marks:7,like:3,tags:["feb25","jul25"],
 q:"Discuss how DFMA improves supply-chain efficiency and reduces lead time in mass production (automotive / consumer electronics). State any four DFMA guidelines with examples. (Or: explain how DFMA is applied to redesign a fingernail clipper.)",
 sol:`<p><b>Supply-chain &amp; lead-time benefits:</b> by reducing part count and standardising components, DFMA cuts the number of suppliers, part numbers and inventory to manage; fewer/simpler parts mean less tooling, shorter assembly lines, lower labour and faster ramp-up. Standardisation enables common parts across product lines (economies of scale, easier procurement), and designing manufacturability in early avoids costly late engineering changes — all of which shrink time-to-market and lead time. (Ford Taurus/Boothroyd DFA saved billions; GM traced 41% of its productivity gap to manufacturability — Ford's bumper had 10 parts vs GM's 100.)</p>
 <p><b>Four guidelines with examples:</b></p>
 <ol><li><b>Minimise part count</b> — combine a bracket + fastener + spacer into one moulded part.</li>
 <li><b>Use standard components</b> — common M6 bolts/bearings across models (bulk purchasing, less inventory).</li>
 <li><b>Design self-locating, one-way parts</b> — a connector that only fits one way (poka-yoke) prevents misassembly.</li>
 <li><b>Eliminate separate fasteners</b> — snap-fits/integral clips instead of screws (faster, cheaper, robot-friendly).</li></ol>
 <p class="small"><b>Fingernail-clipper version:</b> reduce the lever, pin, spring and body into fewer, snap-together parts; use a single-piece stamped lever; symmetric parts for easy orientation; eliminate the rivet where a formed tab will do — cutting both piece cost (DFM) and assembly moves (DFA).</p>`},

{id:"P4c",block:"F",marks:4,like:3,tags:["feb25","numerical"],
 q:"A ball bearing's mean life is Normal with mean μ = 6 years and standard deviation σ = 1 year. Determine (i) P(fail before 7 yr), (ii) reliability for 7 yr, (iii) service life for a 10% failure probability.",
 sol:`<div class="eq">(i) z = (7−6)/1 = +1.00  →  Φ(1.00) = 0.8413   (84.13% fail before 7 yr)
(ii) R(7) = 1 − 0.8413 = 0.1587   (15.87%)
(iii) P(fail) = 0.10 → Φ(z) = 0.10 → z = −1.28
     T = μ + zσ = 6 + (−1.28)(1) = 4.72 years</div>
 <p>Read Φ from the standard-normal table; for the 10% point use the negative-z side (z = −1.28).</p>`},

{id:"P4d",block:"G",marks:5,like:3,tags:["feb25"],
 q:"Explain “Man” as an important part of an effective Man–Machine system with a suitable example. Discuss the design guidelines for ergonomic design of controls.",
 sol:`<p><b>Man in the system:</b> the human is the flexible, adaptable controller. The sequence is: sense the stimulus (read a display) → perceive/interpret → judge → store/recall (memory) → decide → act on a control. Unlike a machine built for one purpose, a person can change roles rapidly and handle the unexpected — this flexibility is the human's most valuable quality. <i>Example:</i> a lathe operator reads the dial, judges the cut, and turns the feed knob; if the tool chatters he adapts instantly.</p>
 <p><b>Ergonomic guidelines for controls:</b></p>
 <ul class="tight"><li>Locate controls to be clearly visible and comfortably operable (within easy reach).</li>
 <li><b>Consistency of motion</b> — clockwise = increase; the display pointer moves the same direction as the control.</li>
 <li>Mark each control's function, on/off and levels; use colour codes, sound tones, shape/alignment coding, symbols.</li>
 <li>Use conventional standard sizes so a new operator avoids errors/accidents.</li>
 <li>Always pair a control with a suitable display so the operator sees the effect of the action.</li></ul>`},

{id:"P4e",block:"F",marks:4,like:3,tags:["jul25","numerical"],
 q:"A limit switch fails per an exponential distribution with MTTF = 650 h. Find (i) reliability at 850 h; (ii) probability of failure before 850 h; (iii) reliability with two such switches in parallel; (iv) how many parallel switches give R ≥ 0.6 at 850 h.",
 sol:`<div class="eq">λ = 1/MTTF = 1/650 = 1.538×10⁻³ /h ;  λt = 850/650 = 1.3077
(i) R = e^−λt = e^−1.3077 = 0.2704
(ii) F = 1 − R = 0.7296
(iii) Parallel (2): Rₛ = 1 − (1−R)² = 1 − (0.7296)² = 1 − 0.5324 = 0.4676
(iv) Need 1 − (1−R)^n ≥ 0.6 → (0.7296)^n ≤ 0.4 → n ≥ ln0.4/ln0.7296 = 0.916/0.3151 = 2.91</div>
 <p>So <b>n = 3</b> parallel switches (Rₛ = 1 − 0.7296³ = 1 − 0.388 = 0.612 ≥ 0.6).</p>`},

{id:"P4f",block:"G",marks:4,like:3,tags:["jul25"],
 q:"Explain the importance of considering ergonomic factors in product design. List and briefly describe four fundamental principles of ergonomic design.",
 sol:`<p><b>Importance:</b> designing to human abilities and limits improves efficiency, health, safety and comfort; it reduces operator error, fatigue and musculoskeletal injury, and makes the product usable by the intended population — all of which raise productivity and reduce accidents and liability.</p>
 <p><b>Four principles (from the ten):</b></p>
 <ol><li><b>Work in neutral postures</b> — keep the spine's S-curve, neck aligned, wrists neutral.</li>
 <li><b>Keep everything within easy reach</b> and work at proper heights.</li>
 <li><b>Reduce excessive force and repetitive motions</b> to limit fatigue and injury.</li>
 <li><b>Provide clearance and minimise pressure points</b>; maintain a comfortable environment.</li></ol>`},

{id:"P4g",block:"F",marks:4,like:2,tags:["model","numerical"],
 q:"Explain the bathtub curve and define failure rate λ, MTTF and MTBF.",
 sol:`<p>The <b>bathtub curve</b> plots failure rate vs time in three phases: (1) <b>infant mortality</b> — decreasing rate from manufacturing defects (burn-in); (2) <b>useful life</b> — constant rate from random overloads; (3) <b>wear-out</b> — increasing rate from corrosion/fatigue/wear.</p>
 <div class="eq">λ(t) = f(t)/R(t) = failures per unit operating time
MTTF = ∫₀^∞ R dt = 1/λ  (non-repairable) ;  MTBF = 1/λ (repairable)</div>
 <figure>__SVG_BATHTUB__<figcaption>The bathtub curve: burn-in → useful life → wear-out.</figcaption></figure>`},

{id:"P4h",block:"F",marks:4,like:2,tags:["model","numerical"],
 q:"Compare series and parallel system reliability. Three sub-units R = 0.9, 0.8, 0.7 — compute both.",
 sol:`<div class="eq">Series (all must work):  R = 0.9·0.8·0.7 = 0.504
Parallel (any one works): R = 1 − (0.1)(0.2)(0.3) = 1 − 0.006 = 0.994</div>
 <p>Redundancy (parallel) sharply raises reliability; adding series components lowers it.</p>`},

{id:"P4i",block:"F",marks:3,like:2,tags:["model"],
 q:"State the three-step hazard hierarchy of Design for Safety and the three fail-safe variants.",
 sol:`<p><b>Hazard hierarchy:</b> (1) <b>design the hazard out</b> (inherently safe); (2) if not, <b>add protective devices</b> (guards, cut-offs, relief valves); (3) if hazards remain, <b>warn the user</b> (labels, lights, sounds).</p>
 <p><b>Fail-safe variants:</b> <i>fail-passive</i> (drops to lowest-energy state — circuit breaker); <i>fail-active</i> (stays energised in a safe mode — standby redundancy); <i>fail-operational</i> (keeps its critical function — a valve that fails open).</p>`},

{id:"P4j",block:"G",marks:4,like:2,tags:["model"],
 q:"Describe the four forms of human factors and give the guidelines for ergonomic design of displays.",
 sol:`<p><b>Four forms:</b> <b>anthropometric</b> (body size/reach), <b>physiological</b> (sensations — visual/auditory/tactile), <b>psychological</b> (mental behaviour, strain, fatigue), <b>ergonomic</b> (the whole work system).</p>
 <p><b>Display guidelines:</b> show only the accuracy actually needed (no superfluous info); subdivide scales in multiples of 1/2/5; numerals upright on fixed scales, tangential on moving scales; sharp single-plane pointer to avoid parallax; <b>letter height (mm) = viewing distance (mm)/200</b>. Use a moving pointer for rapidly changing values, a digital readout for precise static values.</p>`},

{id:"P4k",block:"F",marks:3,like:2,tags:["model","numerical"],
 q:"A system has constant failure rate λ = 0.02/hr. Find (a) unreliability in the first 10 hr, (b) probability it fails in the next 10 hr given it survived 100 hr.",
 sol:`<div class="eq">(a) F(10) = 1 − e^(−0.02·10) = 1 − e^−0.2 = 0.181
(b) Memoryless: F = 1 − R(110)/R(100) = 1 − e^(−0.02·110)/e^(−0.02·100) = 1 − e^−0.2 = 0.181</div>
 <p>Identical — a constant-λ (exponential) system has no memory of past age.</p>`},

{id:"P4l",block:"E",marks:4,like:2,tags:["model"],
 q:"Explain concurrent engineering and give four DFM and four DFA guidelines.",
 sol:`<p><b>Concurrent engineering</b> integrates design and manufacturing from concept to launch (vs the traditional “over-the-wall” hand-off), so manufacturability is built in early — the basis of DFX.</p>
 <div class="grid cols-2">
 <div><b>DFM guidelines</b><ul class="tight"><li>Minimise number of parts; standardise components</li><li>Keep designs simple; make parts multifunctional</li><li>Avoid tight tolerances; minimise finishing operations</li><li>Design for ease of fabrication; exploit process characteristics</li></ul></div>
 <div><b>DFA guidelines</b><ul class="tight"><li>Minimise part count; minimise assembly directions</li><li>Use self-aligning / self-locating parts</li><li>Mistake-proof (poka-yoke); avoid separate fasteners</li><li>Provide unobstructed access; design for symmetry (or clear asymmetry)</li></ul></div></div>`},

/* ============ MOST RECENT — First Internal Assessment, 25 May 2026 ============ */
{id:"PI1",block:"B",marks:1.5,like:3,tags:["internal26"],
 src:"Juvinall & Marshek — stress-analysis fundamentals (Ch. 4). Internal 2026 · Q1.",
 q:"State the differences between the plane-stress and plane-strain approximations.",
 sol:`<div class="tbl-wrap"><table class="compact"><tr><th></th><th>Plane stress</th><th>Plane strain</th></tr>
 <tr><td>Zero quantity</td><td>Stresses on the z-faces are zero: σᵩ = τₓᵩ = τᵧᵩ = 0</td><td>Strains in z are zero: εᵩ = γₓᵩ = γᵧᵩ = 0</td></tr>
 <tr><td>Body type</td><td>Thin bodies (free front/back faces)</td><td>Thick, constrained bodies</td></tr>
 <tr><td>Examples</td><td>Plates, pressure-vessel walls, aircraft skin</td><td>Dams, long shafts, thick machine parts</td></tr>
 <tr><td>Out-of-plane stress</td><td>σᵩ = 0 (but εᵩ ≠ 0)</td><td>σᵩ = ν(σₓ+σᵧ) ≠ 0 (but εᵩ = 0)</td></tr></table></div>
 <p class="small">Note in fracture: plane strain gives the lowest (conservative) Kᴵᴄ, which is why thick specimens are used to measure toughness.</p>`},

{id:"PI2",block:"C",marks:3,like:3,tags:["internal26","numerical"],
 src:"Juvinall & Marshek — Ch. 6, Problem 6.1 style (“similar sheet”), with maraging-steel data from Shukla, Practical Fracture Mechanics in Design. Internal 2026 · Q2.",
 q:"If the fracture stress of a large sheet of maraging steel containing a central crack of length 40 mm is 480 MPa, calculate the fracture stress of a similar sheet containing a central crack of length 100 mm.",
 sol:`<p>Same material ⇒ same fracture toughness Kᴵᴄ = Yσₑ√(πa) = constant. For a similar sheet, Y is unchanged, so σₑ√a = constant (a = half-crack length; the ratio is identical whether you use a or 2c):</p>
 <div class="eq">σf₁ √a₁ = σf₂ √a₂   ⟶   σf₂ = σf₁ √(a₁/a₂)
a₁ = 40/2 = 20 mm ,  a₂ = 100/2 = 50 mm
σf₂ = 480 · √(20/50) = 480 · √0.4 = 480 · 0.6325 = 303.6 MPa</div>
 <p><b>σf₂ ≈ 303.6 MPa.</b> The longer crack lowers the fracture stress by the factor √(a₁/a₂) — the essence of the Griffith/Irwin relation σₑ ∝ a^(−1/2).</p>
 <div class="box ref"><span class="lbl">Source book</span>The “fracture stress of a <i>similar sheet</i>” wording is Juvinall &amp; Marshek Problem 6.1; the maraging-steel numbers match Shukla's fracture-mechanics design problems. <b>Prioritise this Griffith-scaling type — it is the most recent (2026) exam problem.</b></div>`},

{id:"PI3",block:"D",marks:3,like:3,tags:["internal26","numerical","derivation"],
 src:"Juvinall & Marshek — Ch. 8 (Fatigue): estimated S-N line (0.9 Sᵤ at 10³, corrected endurance limit at 10⁶) with modifying factors Cₗ, C_G(size), Cₛ, Cₒ. Internal 2026 · Q3.",
 q:"A steel shaft (d = 30 mm, σᵤ = 1100 MPa) follows Sₐ = a·N^b. Using Sₐ'(10³) = Sₐ(10³) = 0.9σᵤ and Sₐ'(10⁶) = Sₐ(10⁶)·Cₗ·C_D·Cₛ·Cₒ with Sₐ(10⁶) = 0.5σᵤ, Cₗ = 1, C_D = 0.61 d^(−0.097), Cₛ = 0.9, Cₒ = 1, determine the S-N relation.",
 sol:`<p><b>Step 1 — the two S-N anchor points.</b> The 10³-cycle point is uncorrected; the 10⁶ endurance point is corrected by the modifying factors.</p>
 <div class="eq">C_D = 0.61·d^(−0.097) = 0.61·30^(−0.097) = 0.61·0.719 = 0.439
Sₐ'(10³) = 0.9·1100 = 990 MPa
Sₐ'(10⁶) = 0.5·1100·(Cₗ·C_D·Cₛ·Cₒ) = 550·(1·0.439·0.9·1) = 217.4 MPa</div>
 <p><b>Step 2 — fit S = a·N^b through the two points.</b></p>
 <div class="eq">b = log(Sₐ'(10³)/Sₐ'(10⁶)) / log(10³/10⁶) = log(990/217.4) / log(10⁻³)
  = 0.6585 / (−3) = −0.2195
a = Sₐ'(10³) / (10³)^b = 990 / 10^(−0.6585) = 990 / 0.2196 = 4508 MPa</div>
 <p><b>S-N relation:  S ≈ 4508 · N^(−0.220) MPa</b> (valid 10³ ≤ N ≤ 10⁶). Numbers depend on C_D; state your assumption and show the method — that is where the marks are.</p>
 <div class="box ref"><span class="lbl">Source book</span>This is Juvinall &amp; Marshek's estimated-S-N method (endurance-limit modifying factors Cₗ load, C_G gradient/size, Cₛ surface). The July-2025 Section-B Q3(b) is the same method with C_D = 1, Cₒ = 0.95 and the endurance point at 10⁷.</div>`},

{id:"PI4",block:"C",marks:3,like:2,tags:["internal26","numerical"],
 src:"Shukla, Practical Fracture Mechanics in Design — Design Problem 3.3 (maraging steel, critical crack size from load). Extra book problem in the same family as Internal 2026.",
 q:"A 500 mm wide, 1.3 mm thick maraging-steel sheet (Kᴵᴄ = 55 MPa√m) is loaded in tension by a 160 kN force and contains a central slit. Estimate the maximum allowable slit length (critical crack size) before fracture. Take Y ≈ 1.",
 sol:`<div class="eq">Gross stress σ = F/A = 160000 / (500·1.3) = 160000/650 = 246 MPa
aᴄ = (1/π)(Kᴵᴄ/(Yσ))² = (1/π)(55/246)² = (1/π)(0.2236)² = (1/π)(0.05) = 0.0159 m</div>
 <p>Critical half-length aᴄ ≈ 15.9 mm ⇒ <b>maximum central slit length 2aᴄ ≈ 31.8 mm.</b> (Iterate with the finite-width correction Y = √sec(πa/w) if a/w is not small.)</p>`}
];

/* -------------------------------------------------------------------------
   SEEN PAST-PAPER STRUCTURE (for reference on the model-exam page)
   ------------------------------------------------------------------------- */
window.PAPER_META = {
  university:"KATHMANDU UNIVERSITY",
  exam:"End Semester Examination",
  course:"MEPP 436 — Advanced Machine Design",
  level:"B.E. · Year IV · Semester I",
  secA:{title:"SECTION A", instr:"Choose the most appropriate answer and mark [X].", marks:20, count:20, time:"30 mins"},
  secB:{title:"SECTION B", instr:"Attempt ALL the questions. Assume suitable data if necessary.", marks:55, time:"2 hrs 30 mins",
        blocks:[
          {tag:"B",label:"Q1 — Elasticity, stress analysis & failure theories", target:14},
          {tag:"C",label:"Q2 — Fracture mechanics", target:14},
          {tag:"D",label:"Q3 — Material fatigue", target:13},
          {tag:"MIX",label:"Q4 — DFMA, reliability & ergonomics", target:14}
        ]}
};

/* Most-recent internal assessment (25 May 2026) — highest priority */
window.INTERNAL_META = {
  title:"First Internal Assessment", date:"25 May 2026", time:"1 hour", fm:10,
  note:"Most recent paper. Fracture + fatigue heavy; sourced from Juvinall & Marshek and Shukla.",
  parts:["PI1","PI2","PI3","P3c"]   // Q1 plane stress/strain · Q2 fracture scaling · Q3 S-N · Q4 Paris
};

/* Reference-book attribution used throughout the guide */
window.SOURCES = {
  norton:"Norton — Machine Design: An Integrated Approach (REF1)",
  shigley:"Shigley & Mitchell — Mechanical Engineering Design (REF2)",
  juvinall:"Juvinall & Marshek — Fundamentals of Machine Component Design (REF3)",
  shukla:"Shukla — Practical Fracture Mechanics in Design (REF4)",
  ulrich:"Ulrich & Eppinger — Product Design and Development (REF5)",
  dieter:"Dieter & Schmidt — Engineering Design (DFMA reference)"
};

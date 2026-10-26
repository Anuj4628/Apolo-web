/**
 * APOLLO FORGE & FITTING — COMPREHENSIVE INDUSTRIAL CATALOG DATABASE
 * Product -> Material -> Grade / Type -> Technical Detail System
 * Traceable metadata, zero fabricated standards, verified metallurgy.
 */

export const CATALOG_PRODUCTS_DATA = [
  {
    "slug": "flanges",
    "name": "Flanges",
    "title": "FLANGES",
    "suffix": "Flanges",
    "eyebrow": "ASME B16.5 & B16.47 CERTIFIED",
    "heroImage": "assets/hero-products/flanges-hero.png",
    "heroTag": "ASME B16.5 / B16.47 CERTIFIED FLANGES",
    "description": "Apollo Forge & Fittings manufactures and stocks high-integrity industrial pipe flanges across a comprehensive metallurgical spectrum. Designed for extreme pressure, elevated temperature, and aggressive chemical environments, our flanges provide certified leak-tight sealing across global oil & gas, petrochemical, and power generation systems.",
    "overview": {
      "lead": "Flanges are forged or plate-machined mechanical connection rings designed to connect pipes, valves, pumps, and other equipment to form a complete piping loop. They provide easy access for cleaning, inspection, and modification while maintaining high pressure containment.",
      "highlights": [
        {
          "title": "Pressure Classes",
          "desc": "Manufactured across ASME Class 150, 300, 600, 900, 1500, and 2500 ratings with full hydrostatic testing."
        },
        {
          "title": "Facing Configurations",
          "desc": "Precision machined with Raised Face (RF), Flat Face (FF), and Ring Type Joint (RTJ) with standard serrated finishes."
        },
        {
          "title": "Strict Traceability",
          "desc": "100% heat-coded with EN 10204 3.1 inspection certification and complete chemical/mechanical test reports."
        },
        {
          "title": "Applicable Codes",
          "desc": "Fully compliant with ASME B16.5 (up to 24\" NB) and ASME B16.47 Series A & B (26\" to 60\" NB)."
        }
      ]
    },
    "hasTypes": true,
    "types": [
      {
        "slug": "slip-on",
        "name": "Slip-On Flange",
        "shortName": "Slip-On",
        "image": "assets/types of product/flanges/alloy steel types/slip-on-flanges.jpg",
        "description": "A low-hub flange designed to slip over the outer diameter of the pipe before being fillet-welded at both the flange hub and pipe interior for reliable alignment.",
        "design": "The inner diameter of a slip-on flange is slightly larger than the outer diameter of the mating pipe. The pipe is positioned inside the flange hub recessed roughly 1/16\" from the face, allowing double fillet welds (inside and outside) to establish seal integrity.",
        "function": "Ideal for low-to-medium pressure non-critical applications where alignment is simpler and initial fabrication costs must be controlled.",
        "facing": "Raised Face (RF) with 125-250 µin serrated concentric or phonographic finish, Flat Face (FF), and Ring Type Joint (RTJ).",
        "standards": "ASME B16.5, ASME B16.47, DIN 2573 / 2576, EN 1092-1 Type 01/12",
        "sizes": "1/2\" NB through 24\" NB (ASME B16.5) and up to 48\" (ASME B16.47)",
        "pressureClasses": "Class 150#, 300#, 600#, 900#, 1500#",
        "materialsSupported": [
          "stainless-steel",
          "carbon-steel",
          "alloy-steel",
          "duplex",
          "high-alloy",
          "nickel",
          "titanium",
          "copper",
          "aluminium"
        ]
      },
      {
        "slug": "weld-neck",
        "name": "Weld Neck Flange",
        "shortName": "Weld Neck",
        "image": "assets/types of product/flanges/alloy steel types/Weld Neck Flange.jpeg",
        "description": "Engineered with a long tapered hub that transitions wall thickness smoothly to the pipe, minimizing stress concentration under severe line pressure, thermal cycles, and bending moments.",
        "design": "Features a reinforced tapered neck beveled at the end to match the schedule thickness of the pipe. Joined with a single full-penetration butt weld that can be 100% radiographed.",
        "function": "The premium standard for severe-service, high-pressure, cryogenic, and cyclic thermal operating conditions where stress distribution is paramount.",
        "facing": "Raised Face (RF), Ring Type Joint (RTJ) with octagonal or oval ring grooves, and Flat Face (FF).",
        "standards": "ASME B16.5, ASME B16.47 Series A & B, DIN 2631-2638, EN 1092-1 Type 11",
        "sizes": "1/2\" NB to 24\" NB (B16.5) and 26\" to 60\" NB (B16.47)",
        "pressureClasses": "Class 150#, 300#, 600#, 900#, 1500#, 2500#",
        "materialsSupported": [
          "stainless-steel",
          "carbon-steel",
          "alloy-steel",
          "duplex",
          "high-alloy",
          "nickel",
          "titanium",
          "copper",
          "aluminium"
        ]
      },
      {
        "slug": "blind",
        "name": "Blind Flange",
        "shortName": "Blind",
        "image": "assets/types of product/flanges/alloy steel types/blind.jpeg",
        "description": "A solid circular forged disk with standard bolt holes used to seal the termination end of a piping system, pressure vessel nozzle, or valve station.",
        "design": "Solid center disk manufactured without a central bore. Subject to substantial mechanical bending stress concentrated at the center under high internal system pressure.",
        "function": "Provides absolute termination closure while allowing quick bolt removal for future piping expansion, maintenance washouts, and system hydrostatic testing.",
        "facing": "Raised Face (RF) with spiral or concentric serration, Ring Type Joint (RTJ), and Flat Face (FF).",
        "standards": "ASME B16.5, ASME B16.47, DIN 2527, EN 1092-1 Type 05",
        "sizes": "1/2\" NB to 24\" NB (B16.5) and 26\" to 60\" NB (B16.47)",
        "pressureClasses": "Class 150#, 300#, 600#, 900#, 1500#, 2500#",
        "materialsSupported": [
          "stainless-steel",
          "carbon-steel",
          "alloy-steel",
          "duplex",
          "high-alloy",
          "nickel",
          "titanium",
          "copper",
          "aluminium"
        ]
      },
      {
        "slug": "socket-weld",
        "name": "Socket Weld Flange",
        "shortName": "Socket Weld",
        "image": "assets/types of product/flanges/alloy steel types/socket weld.jpeg",
        "description": "Features an internal recessed socket bore to seat the pipe end before external fillet welding, preventing weld spatter intrusion into small-bore piping.",
        "design": "Machined with a shoulder counterbore that holds the pipe end with an expansion clearance gap of approximately 1/16\" (1.6 mm) prior to welding to avoid thermal contraction cracking.",
        "function": "Widely specified in compact, small-diameter (1/2\" to 2\" NB) high-pressure instrumentation loops, steam lines, and hydraulic manifolds.",
        "facing": "Raised Face (RF) and Flat Face (FF).",
        "standards": "ASME B16.5, BS 3293",
        "sizes": "1/2\" NB to 3\" NB (primarily 1/2\" to 2\" NB)",
        "pressureClasses": "Class 150#, 300#, 600#, 1500#",
        "materialsSupported": [
          "stainless-steel",
          "carbon-steel",
          "alloy-steel",
          "duplex",
          "high-alloy",
          "nickel",
          "titanium"
        ]
      },
      {
        "slug": "threaded",
        "name": "Threaded Flange",
        "shortName": "Threaded",
        "image": "assets/types of product/flanges/alloy steel types/Threaded Flange.jpeg",
        "description": "Taper-threaded internally with NPT or BSPT threads, allowing quick assembly onto threaded pipe without requiring hot-work welding on site.",
        "design": "Internal bore machined with precision ASME B1.20.1 NPT taper threads that engage with externally threaded piping to achieve a pressure-tight seal.",
        "function": "Essential in flammable oilfield environments, explosive fuel depots, and hazardous gas zones where open-flame welding is prohibited.",
        "facing": "Raised Face (RF) and Flat Face (FF).",
        "standards": "ASME B16.5, DIN 2566, EN 1092-1 Type 13",
        "sizes": "1/2\" NB to 6\" NB",
        "pressureClasses": "Class 150#, 300#, 600#, 900#",
        "materialsSupported": [
          "stainless-steel",
          "carbon-steel",
          "alloy-steel",
          "duplex",
          "high-alloy",
          "copper"
        ]
      },
      {
        "slug": "lap-joint",
        "name": "Lap Joint Flange",
        "shortName": "Lap Joint",
        "image": "assets/types of product/flanges/alloy steel types/lap joint flanges.jpeg",
        "description": "Paired with a matching stub end fitting, the lap joint flange slips freely over the pipe while the stub end is butt-welded, allowing 360° rotational bolt alignment.",
        "design": "Machined with a curved radius at the bore corner to fit snugly against the radiused flare of the lap joint stub end.",
        "function": "Frequently utilized in stainless steel and exotic alloy piping systems requiring frequent disassembly for cleaning or maintenance.",
        "facing": "Flat back with radiused bore corner; sealing is governed entirely by the gasket face of the mating stub end.",
        "standards": "ASME B16.5, DIN 2642, EN 1092-1 Type 02",
        "sizes": "1/2\" NB to 24\" NB",
        "pressureClasses": "Class 150#, 300#, 600#, 900#",
        "materialsSupported": [
          "stainless-steel",
          "carbon-steel",
          "alloy-steel",
          "duplex",
          "high-alloy",
          "nickel",
          "titanium"
        ]
      },
      {
        "slug": "orifice",
        "name": "Orifice Flange",
        "shortName": "Orifice",
        "image": "assets/types of product/flanges/alloy steel types/orifice flanges.jpeg",
        "description": "Specialized flow-metering flanges fitted in pairs with radial tapped pressure ports to measure differential pressure across an orifice plate.",
        "design": "Manufactured with drilled and tapped differential pressure sensing holes in the flange ring, complete with jack screws to ease plate replacement.",
        "function": "Standard flow-measurement station in natural gas transmission, refinery pipelines, and chemical feed loops.",
        "facing": "Raised Face (RF) and Ring Type Joint (RTJ).",
        "standards": "ASME B16.36, AGA-3 / API 14.3",
        "sizes": "1\" NB to 24\" NB",
        "pressureClasses": "Class 300#, 600#, 900#, 1500#, 2500#",
        "materialsSupported": [
          "stainless-steel",
          "carbon-steel",
          "alloy-steel",
          "duplex",
          "high-alloy"
        ]
      },
      {
        "slug": "ring-type-joint",
        "name": "Ring Type Joint Flange",
        "shortName": "RTJ",
        "image": "assets/flanges/types/ring-type-joint-flanges.jpg",
        "description": "Precision machined with an annular metallic ring groove in the face designed to accommodate an octagonal or oval solid metal ring gasket.",
        "design": "High-precision trapezoidal groove machined into the flange face. Bolt torque compresses the metal ring into the groove walls, generating high contact stress.",
        "function": "The industry benchmark for extreme high-pressure (Class 600# to 2500#) and high-temperature oilfield and subsea Christmas tree installations.",
        "facing": "Ring Type Joint (RTJ) matching standard ASME B16.20 metallic ring gaskets (R, RX, BX series).",
        "standards": "ASME B16.5, ASME B16.47, API 6A",
        "sizes": "1/2\" NB to 24\" NB",
        "pressureClasses": "Class 600#, 900#, 1500#, 2500#",
        "materialsSupported": [
          "stainless-steel",
          "carbon-steel",
          "alloy-steel",
          "duplex",
          "high-alloy"
        ]
      }
    ],
    "materials": [
      {
        "slug": "stainless-steel",
        "name": "Stainless Steel",
        "number": "01",
        "description": "Austenitic and martensitic stainless steels offering superior resistance to chemical attack, pitting, and high-temperature scaling across process industries.",
        "applicableStandards": "ASTM A182, ASTM A240, ASTM A312, ASTM A403, ASME B16.5",
        "pressureClasses": "Class 150#, 300#, 600#, 900#, 1500#, 2500#",
        "sizeRange": "1/2\" NB to 60\" NB (DN15 to DN1500)",
        "grades": [
          {
            "slug": "304",
            "name": "304",
            "fullName": "304 Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S30400",
              "en": "1.4301 (X5CrNi18-10)"
            },
            "description": "The classic 18/8 austenitic stainless steel delivering dependable general corrosion resistance, excellent formability, and cryogenic impact toughness.",
            "characteristics": [
              "Excellent atmospheric and chemical corrosion resistance in organic and mildly oxidizing acids.",
              "Retains high impact toughness from cryogenic temperatures (-196°C) up to 800°C.",
              "Readily weldable by all standard commercial fusion methods without requiring preheat.",
              "Non-magnetic in the solution-annealed condition with moderate work hardening rate."
            ],
            "applications": [
              "Chemical processing manifolds",
              "Food, dairy & beverage piping",
              "Petrochemical low-temperature loops",
              "Cryogenic storage vessel nozzles",
              "Architectural structural piping"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "205 MPa (30 ksi) minimum",
              "elongation": "40% minimum in 2 inches",
              "hardness": "HBW ≤ 201 (HRB ≤ 92)",
              "heatTreatment": "Solution Annealed at 1040°C - 1120°C followed by rapid water quench",
              "inspection": "EN 10204 Type 3.1 MTC with complete chemical and mechanical test results"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.47",
              "ASTM A182",
              "ASME SA182",
              "MSS-SP-43",
              "NACE MR0175 (annealed)"
            ],
            "image": "assets/flanges/grades/ss-flanges.jpg"
          },
          {
            "slug": "304l",
            "name": "304L",
            "fullName": "304L Low-Carbon Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S30403",
              "en": "1.4307 (X2CrNi18-9)"
            },
            "description": "Extra-low carbon modification (C ≤ 0.030%) that eliminates chromium carbide precipitation during welding, providing immunity to intergranular corrosion in as-welded assemblies.",
            "characteristics": [
              "Immunity to sensitization and intergranular attack in heat-affected zones (HAZ) of welded components.",
              "Eliminates the mandatory requirement for post-weld solution annealing.",
              "Maintains cryogenic mechanical ductility down to liquid nitrogen temperatures (-196°C).",
              "Compatible with dual-certified 304/304L pressure vessel specifications."
            ],
            "applications": [
              "Heavy-wall welded piping systems",
              "Wet chemical processing lines",
              "Refinery flare header lines",
              "Marine deck piping systems",
              "Pulp and paper bleaching equipment"
            ],
            "specs": {
              "tensileStrength": "485 MPa (70 ksi) minimum",
              "yieldStrength": "170 MPa (25 ksi) minimum",
              "elongation": "40% minimum in 2 inches",
              "hardness": "HBW ≤ 201",
              "heatTreatment": "Solution Annealed at 1040°C - 1100°C and water quenched",
              "inspection": "EN 10204 Type 3.1 MTC / NACE MR0175 compliant"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.9",
              "ASTM A182",
              "ASTM A403",
              "ASME Section VIII Div 1"
            ],
            "image": "assets/flanges/grades/ss-flanges.jpg"
          },
          {
            "slug": "316",
            "name": "316",
            "fullName": "316 Molybdenum-Bearing Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S31600",
              "en": "1.4401 (X5CrNiMo17-12-2)"
            },
            "description": "Formulated with 2.0% to 3.0% molybdenum to significantly improve localized resistance to pitting and crevice corrosion in chloride and halide-bearing environments.",
            "characteristics": [
              "Significantly higher pitting resistance equivalent (PREN ~ 23-25) compared to 304.",
              "Superior resistance to sulfuric, phosphoric, acetic, and tartaric acid solutions.",
              "Elevated creep rupture strength at elevated operating temperatures up to 870°C.",
              "Standard specification for marine atmospheres, offshore platforms, and coastal chemical plants."
            ],
            "applications": [
              "Offshore oil & gas production manifolds",
              "Marine seawater cooling circuits",
              "Pharmaceutical reaction vessels",
              "Petrochemical acid-wash scrubbers",
              "Fertilizer production piping"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "205 MPa (30 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 217",
              "heatTreatment": "Solution Annealed at 1040°C - 1150°C and rapidly quenched",
              "inspection": "EN 10204 3.1 / PMI / Ultrasonic Inspection to ASTM A388"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.47",
              "ASTM A182",
              "ASTM A312",
              "NACE MR0175 / ISO 15156"
            ],
            "image": "assets/flanges/grades/ss-flanges.jpg"
          },
          {
            "slug": "316l",
            "name": "316L",
            "fullName": "316L Low-Carbon Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S31603",
              "en": "1.4404 (X2CrNiMo17-12-2)"
            },
            "description": "Low-carbon molybdenum alloy combining superior chloride pitting resistance with complete protection against intergranular carbide precipitation in critical welded joints.",
            "characteristics": [
              "Carbon restricted to 0.030% max, preventing grain boundary sensitization during field welding.",
              "Exceptional resistance to localized pitting in marine and brackish water piping systems.",
              "Widely accepted in sour service under NACE MR0175 / ISO 15156 standards.",
              "Clean interior surface finish capability suitable for sanitary and high-purity applications."
            ],
            "applications": [
              "Subsea umbilical and manifold piping",
              "Chemical tanker cargo lines",
              "Pharmaceutical clean-in-place (CIP) loops",
              "Desalination plant brine piping",
              "Sour hydrocarbon gas handling"
            ],
            "specs": {
              "tensileStrength": "485 MPa (70 ksi) minimum",
              "yieldStrength": "170 MPa (25 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 217",
              "heatTreatment": "Solution Annealed at 1040°C - 1120°C and water quenched",
              "inspection": "EN 10204 Type 3.1 MTC / NACE MR0175 / MR0103"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.11",
              "ASTM A182",
              "ASTM A403",
              "ASME BPE"
            ],
            "image": "assets/flanges/grades/ss-flanges.jpg"
          },
          {
            "slug": "321",
            "name": "321",
            "fullName": "321 Titanium-Stabilized Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S32100",
              "en": "1.4541 (X6CrNiTi18-10)"
            },
            "description": "Stabilized with titanium (Ti ≥ 5x C) to tie up carbon as titanium carbides, preventing sensitization during prolonged service in the critical 427°C to 816°C temperature range.",
            "characteristics": [
              "Complete immunity to intergranular corrosion during continuous high-temperature service.",
              "Superior creep and stress-rupture properties compared to standard 304/304L.",
              "Resists polythionic acid stress corrosion cracking during refinery shutdown cycles.",
              "Standard choice for aircraft exhaust systems and refinery thermal crackers."
            ],
            "applications": [
              "Refinery thermal cracker piping",
              "Catalytic reformer units",
              "High-temperature steam boiler bypass lines",
              "Aircraft engine exhaust manifolds",
              "Chemical furnace tube connections"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "205 MPa (30 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 217",
              "heatTreatment": "Solution Annealed at 1000°C - 1100°C followed by stabilization heat treatment at 850°C - 900°C",
              "inspection": "EN 10204 3.1 / Intergranular Corrosion Test to ASTM A262 Practice E"
            },
            "standards": [
              "ASME B16.5",
              "ASTM A182",
              "ASME SA182",
              "API 530"
            ],
            "image": "assets/flanges/grades/ss-flanges.jpg"
          },
          {
            "slug": "347",
            "name": "347",
            "fullName": "347 Niobium-Stabilized Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S34700",
              "en": "1.4550 (X6CrNiNb18-10)"
            },
            "description": "Stabilized with niobium/columbium (Nb ≥ 10x C) providing enhanced creep resistance and intergranular corrosion resistance at severe temperatures up to 870°C.",
            "characteristics": [
              "High creep strength and stress rupture resistance in heavy wall forged components.",
              "Resistant to polythionic acid stress cracking in hydrocracking and hydrotreating units.",
              "Superior fatigue strength under extreme thermal shock cycling.",
              "Certified for nuclear and supercritical power generation piping."
            ],
            "applications": [
              "Hydroprocessing and hydrodesulfurization units",
              "Supercritical power boiler piping",
              "Radiant superheater tube headers",
              "High-temperature radioactive waste handling",
              "Gas turbine exhaust nozzles"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "205 MPa (30 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 217",
              "heatTreatment": "Solution Annealed at 1040°C - 1150°C and water quenched",
              "inspection": "EN 10204 Type 3.1 with ASTM A262 Practice E IGC certification"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.9",
              "ASTM A182",
              "ASME Section III Class 1"
            ],
            "image": "assets/flanges/grades/ss-flanges.jpg"
          },
          {
            "slug": "310s",
            "name": "310S",
            "fullName": "310S High-Temperature Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S31008",
              "en": "1.4845 (X8CrNi25-21)"
            },
            "description": "High-alloy austenitic stainless steel formulated with 25% chromium and 20% nickel for exceptional resistance to high-temperature oxidation and sulfidation up to 1150°C.",
            "characteristics": [
              "Continuous oxidation resistance in air up to 1150°C (2100°F) under cyclic thermal conditions.",
              "Resistant to carburization in moderately carburizing petrochemical atmospheres.",
              "Maintains high ductile toughness and structural stability at elevated temperatures.",
              "Low magnetic permeability and high thermal creep endurance."
            ],
            "applications": [
              "Thermal incinerator burner piping",
              "Fluidized bed coal combustors",
              "Cement rotary kiln exhaust nozzles",
              "Petrochemical pyrolysis furnaces",
              "Heat treatment furnace fixtures"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "205 MPa (30 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 217",
              "heatTreatment": "Solution Annealed at 1040°C - 1150°C followed by rapid air or water cooling",
              "inspection": "EN 10204 3.1 MTC / High-temperature mechanical testing"
            },
            "standards": [
              "ASME B16.5",
              "ASTM A182",
              "ASTM A312",
              "ASME Section VIII Div 1"
            ],
            "image": "assets/flanges/grades/ss-flanges.jpg"
          },
          {
            "slug": "904l",
            "name": "904L",
            "fullName": "904L Super Austenitic Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS N08904",
              "en": "1.4539 (X1NiCrMoCu25-20-5)"
            },
            "description": "High-alloy super-austenitic stainless steel formulated with 4.5% molybdenum and 1.5% copper, specifically developed to withstand aggressive sulfuric and phosphoric acids.",
            "characteristics": [
              "High PREN (≥ 34), offering extraordinary resistance to warm seawater pitting.",
              "Added copper content provides outstanding resistance to concentrated sulfuric acid across all concentration ranges.",
              "Immune to chloride-induced stress corrosion cracking up to 60°C.",
              "Fully austenitic structure provides high ductility and ease of welding."
            ],
            "applications": [
              "Sulfuric acid manufacturing pipelines",
              "Phosphate fertilizer production units",
              "Flue gas desulfurization (FGD) scrubbers",
              "Seawater reverse osmosis piping",
              "Pulp mill bleaching towers"
            ],
            "specs": {
              "tensileStrength": "490 MPa (71 ksi) minimum",
              "yieldStrength": "220 MPa (32 ksi) minimum",
              "elongation": "35% minimum in 2 inches",
              "hardness": "HBW ≤ 217 (HRB ≤ 95)",
              "heatTreatment": "Solution Annealed at 1090°C - 1150°C followed by rapid water quench",
              "inspection": "EN 10204 Type 3.1 MTC with ASTM G48 pitting test verification"
            },
            "standards": [
              "ASTM A182",
              "ASME B16.5",
              "ASTM B625",
              "NACE MR0175"
            ],
            "image": "assets/flanges/grades/ss-flanges.jpg"
          }
        ],
        "image": "assets/hero-products/flanges-hero.png",
        "fallback": "assets/flanges/grades/ss-304-304l-flanges.jpg"
      },
      {
        "slug": "carbon-steel",
        "name": "Carbon Steel",
        "number": "02",
        "description": "Forged and plate-formed carbon steels engineered for structural strength, high pressure containment, and reliable impact ductility in utility and industrial piping.",
        "applicableStandards": "ASTM A105, ASTM A350 LF2, ASTM A106, ASTM A234 WPB, ASME B16.5",
        "pressureClasses": "Class 150#, 300#, 600#, 900#, 1500#, 2500#",
        "sizeRange": "1/2\" NB to 60\" NB",
        "grades": [
          {
            "slug": "a105",
            "name": "A105",
            "fullName": "ASTM A105 Forged Carbon Steel",
            "designation": {
              "astm": "ASTM A105 / A105N",
              "asme": "ASME SA105",
              "uns": "UNS K03504",
              "en": "1.0460 (C22.8 / P250GH)"
            },
            "description": "The premier forged carbon steel specification for ambient and elevated-temperature piping components, flanges, fittings, and valves.",
            "characteristics": [
              "Excellent machinability and weldability with balanced carbon-manganese metallurgy.",
              "Supplied in normalized (A105N) heat-treated condition for fine grain size and optimal Charpy V-notch toughness.",
              "High proof pressure containment for petroleum refineries, power stations, and steam pipelines.",
              "Fully qualified under ASME Section VIII and ASME B31.3 piping codes."
            ],
            "applications": [
              "Refinery steam and hydrocarbon lines",
              "Boiler feed water piping",
              "Natural gas transmission stations",
              "District heating networks",
              "General industrial utility piping"
            ],
            "specs": {
              "tensileStrength": "485 MPa (70 ksi) minimum",
              "yieldStrength": "250 MPa (36 ksi) minimum",
              "elongation": "22% minimum in 2 inches",
              "hardness": "HBW 137 - 187",
              "heatTreatment": "Normalized at 880°C - 920°C and air cooled",
              "inspection": "EN 10204 Type 3.1 MTC / 100% NDT inspection"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.11",
              "ASTM A105",
              "MSS-SP-79",
              "NACE MR0175 (normalized)"
            ],
            "image": "assets/flanges/types/carbon-steel-flanges.jpg"
          },
          {
            "slug": "a350-lf2",
            "name": "A350 LF2",
            "fullName": "ASTM A350 LF2 Low-Temperature Carbon Steel",
            "designation": {
              "astm": "ASTM A350 LF2 Class 1",
              "asme": "ASME SA350 LF2",
              "uns": "UNS K03011",
              "en": "1.0566 (TStE 355)"
            },
            "description": "Forged carbon and low-alloy steel specifically treated for notched-bar toughness in low-temperature piping systems down to -46°C (-50°F).",
            "characteristics": [
              "Guaranteed Charpy V-notch impact toughness of 20 Joules (15 ft-lbs) minimum at -46°C (-50°F).",
              "Fine-grained, fully killed steel heat treated by normalizing and tempering or quenching and tempering.",
              "Mandatory for Arctic pipelines, cold gas transmission, and LPG/LNG cryogenic utility lines.",
              "Fully compliant with NACE MR0175 hardness limits (≤ 22 HRC)."
            ],
            "applications": [
              "Arctic oil and gas extraction lines",
              "LPG/LNG transport and storage terminals",
              "Refrigeration compressor piping",
              "Subsea cold-water export lines",
              "Cryogenic gas processing facilities"
            ],
            "specs": {
              "tensileStrength": "485 - 655 MPa (70 - 95 ksi)",
              "yieldStrength": "250 MPa (36 ksi) minimum",
              "elongation": "22% minimum in 2 inches",
              "hardness": "HBW ≤ 197 (HRC ≤ 22)",
              "heatTreatment": "Normalized at 900°C and Tempered at 600°C",
              "inspection": "EN 10204 3.1 / Charpy V-Notch Impact Test at -46°C"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.11",
              "ASTM A350",
              "NACE MR0175 / ISO 15156"
            ],
            "image": "assets/flanges/types/carbon-steel-flanges.jpg"
          },
          {
            "slug": "a234-wpb",
            "name": "A234 WPB",
            "fullName": "ASTM A234 WPB Wrought Carbon Steel",
            "designation": {
              "astm": "ASTM A234 Grade WPB",
              "asme": "ASME SA234 WPB",
              "uns": "UNS K03006",
              "en": "1.0488 (P275NH)"
            },
            "description": "The standard wrought carbon steel material specification for seamless and welded butt weld elbows, tees, reducers, and pipe caps.",
            "characteristics": [
              "Formed from seamless pipe (ASTM A106 Grade B) or plate (ASTM A285/A516) with uniform grain distribution.",
              "High weldability and ductility for high-speed automated pipe spool fabrication.",
              "Engineered for moderate and high-temperature pressure piping systems.",
              "Supplied in normalized, stress-relieved, or annealed condition."
            ],
            "applications": [
              "Cross-country oil & gas pipelines",
              "Power plant steam header loops",
              "Industrial boiler piping",
              "Chemical plant water injection mains",
              "District heating infrastructure"
            ],
            "specs": {
              "tensileStrength": "415 - 585 MPa (60 - 85 ksi)",
              "yieldStrength": "240 MPa (35 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 197",
              "heatTreatment": "Normalized or hot-formed above 620°C",
              "inspection": "EN 10204 3.1 / 100% Hydrostatic and NDT Testing"
            },
            "standards": [
              "ASME B16.9",
              "ASME B16.28",
              "ASTM A234",
              "MSS-SP-25"
            ],
            "image": "assets/flanges/types/carbon-steel-flanges.jpg"
          },
          {
            "slug": "a516-gr70",
            "name": "A516 Gr. 70",
            "fullName": "ASTM A516 Grade 70 Pressure Vessel Plate",
            "designation": {
              "astm": "ASTM A516 / A516M Gr. 70",
              "asme": "ASME SA516 Gr. 70",
              "uns": "UNS K02700",
              "en": "1.0473 (P355GH)"
            },
            "description": "The standard boiler and pressure-vessel quality carbon steel plate material for circular blanks, dished heads, and vessel shells operating at ambient and lower temperatures.",
            "characteristics": [
              "Superior notch toughness and weldability with vacuum-degassed, fine-grain steel practice.",
              "High yield strength and resistance to lamellar tearing under transverse welded loads.",
              "Normalized for improved low-temperature impact properties (available with Charpy testing down to -46°C).",
              "Standard material for heavy industrial autoclaves and storage vessels."
            ],
            "applications": [
              "Pressure vessel shells and circular dished ends",
              "Heat exchanger tube sheets and circular blind covers",
              "Storage tank bottom and shell plates",
              "Heavy-wall welded vessel nozzles"
            ],
            "specs": {
              "tensileStrength": "485 - 620 MPa (70 - 90 ksi)",
              "yieldStrength": "260 MPa (38 ksi) minimum",
              "elongation": "21% minimum in 2 inches",
              "hardness": "HBW ≤ 187",
              "heatTreatment": "Normalized above 40 mm plate thickness",
              "inspection": "EN 10204 3.1 / Ultrasonic testing to ASTM A435 / A578"
            },
            "standards": [
              "ASTM A516",
              "ASME SA516",
              "ASME Section VIII Div 1 & 2"
            ],
            "image": "assets/flanges/types/carbon-steel-flanges.jpg"
          }
        ],
        "image": "assets/flanges/types/carbon-steel-flanges.jpg",
        "fallback": "assets/flanges/types/cs-weld-neck-flanges.jpg"
      },
      {
        "slug": "alloy-steel",
        "name": "Alloy Steel",
        "number": "03",
        "description": "Chromium-molybdenum alloy steels engineered for elevated-temperature creep strength, hydrogen attack resistance, and severe power boiler and hydroprocessing service.",
        "applicableStandards": "ASTM A182, ASTM A234, ASTM A335, ASME B16.5, ASME B16.11",
        "pressureClasses": "Class 300#, 600#, 900#, 1500#, 2500#",
        "sizeRange": "1/2\" NB to 36\" NB",
        "grades": [
          {
            "slug": "f11",
            "name": "F11",
            "fullName": "ASTM A182 F11 (1.25% Cr - 0.5% Mo)",
            "designation": {
              "astm": "ASTM A182 F11 Class 2",
              "asme": "ASME SA182 F11",
              "uns": "UNS K11572",
              "en": "1.7335 (13CrMo4-5)"
            },
            "description": "Nominal 1.25% chromium, 0.5% molybdenum alloy steel engineered for high-temperature steam lines and refinery hydrocrackers operating up to 550°C.",
            "characteristics": [
              "High creep rupture strength and resistance to graphitization at elevated steam temperatures.",
              "Resistance to high-temperature hydrogen attack (HTHA) according to Nelson curve criteria.",
              "Supplied in normalized and tempered condition for structural microstructural stability.",
              "Standard alloy for thermal power plant main steam and hot reheat lines."
            ],
            "applications": [
              "Main steam headers in thermal power plants",
              "Hydrodesulfurization reactor piping",
              "Superheater piping and headers",
              "Refinery furnace transfer lines"
            ],
            "specs": {
              "tensileStrength": "485 MPa (70 ksi) minimum",
              "yieldStrength": "275 MPa (40 ksi) minimum",
              "elongation": "20% minimum in 2 inches",
              "hardness": "HBW 143 - 207",
              "heatTreatment": "Normalized at 900°C - 950°C and Tempered at 650°C minimum",
              "inspection": "EN 10204 3.1 / Hot tensile test verified"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.11",
              "ASTM A182",
              "API 941"
            ],
            "image": "assets/Product Images/Flanges/alloy steel.jpg"
          },
          {
            "slug": "f22",
            "name": "F22",
            "fullName": "ASTM A182 F22 (2.25% Cr - 1.0% Mo)",
            "designation": {
              "astm": "ASTM A182 F22 Class 3",
              "asme": "ASME SA182 F22",
              "uns": "UNS K21590",
              "en": "1.7380 (10CrMo9-10)"
            },
            "description": "Nominal 2.25% chromium, 1.0% molybdenum alloy steel offering superior creep endurance, corrosion resistance to sulfur-bearing oil streams, and hydrogen resistance up to 600°C.",
            "characteristics": [
              "Elevated creep resistance and high allowable design stress under ASME Section I and VIII.",
              "Enhanced resistance to high-pressure hydrogen embrittlement in hydroprocessing units.",
              "Quenched and tempered or normalized and tempered for high fracture toughness.",
              "Specified for high-pressure catalytic cracking and supercritical boiler loops."
            ],
            "applications": [
              "Hydrocracker reactor nozzles and loop piping",
              "Supercritical boiler superheater headers",
              "Gasifier syngas transfer lines",
              "Petrochemical high-pressure steam headers"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "310 MPa (45 ksi) minimum",
              "elongation": "20% minimum in 2 inches",
              "hardness": "HBW 156 - 207",
              "heatTreatment": "Normalized at 900°C - 950°C and Tempered at 675°C minimum",
              "inspection": "EN 10204 3.1 / Ultrasonic and Magnetic Particle Inspection"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.9",
              "ASTM A182",
              "ASTM A335 Grade P22"
            ],
            "image": "assets/Product Images/Flanges/alloy steel.jpg"
          },
          {
            "slug": "f91",
            "name": "F91",
            "fullName": "ASTM A182 F91 (9% Cr - 1% Mo - V - Nb)",
            "designation": {
              "astm": "ASTM A182 F91 Type 1",
              "asme": "ASME SA182 F91",
              "uns": "UNS K90901",
              "en": "1.4903 (X10CrMoVNb9-1)"
            },
            "description": "Advanced modified 9Cr-1Mo-V-Nb martensitic alloy steel engineered for supercritical and ultra-supercritical (USC) power stations operating up to 620°C with reduced wall thickness.",
            "characteristics": [
              "Twice the creep rupture strength of F22 at 600°C, enabling thinner component wall sections.",
              "Lower thermal stress and reduced cyclic thermal fatigue in high-efficiency power boilers.",
              "Requires tight control of heat treatment: normalizing at 1040°C–1080°C and tempering at 730°C–800°C.",
              "Strict compliance with hardness and microstructural martensite grain requirements."
            ],
            "applications": [
              "Ultra-supercritical power plant main steam lines",
              "Combined cycle gas turbine (CCGT) HRSG headers",
              "High-pressure steam bypass manifolds",
              "Nuclear power steam generator loops"
            ],
            "specs": {
              "tensileStrength": "585 - 760 MPa (85 - 110 ksi)",
              "yieldStrength": "415 MPa (60 ksi) minimum",
              "elongation": "20% minimum in 2 inches",
              "hardness": "HBW 190 - 248",
              "heatTreatment": "Normalized at 1050°C and Tempered at 750°C - 780°C",
              "inspection": "EN 10204 Type 3.1 / 100% Ultrasonic & Hardness verification"
            },
            "standards": [
              "ASME B16.5",
              "ASTM A182",
              "ASTM A335 Grade P91",
              "EPRI Guidelines"
            ],
            "image": "assets/Product Images/Flanges/alloy steel.jpg"
          }
        ],
        "image": "assets/Product Images/Flanges/alloy steel.jpg",
        "fallback": "assets/Product Section/Manufacturer division/Flanges/alloy steel.jpg"
      },
      {
        "slug": "duplex",
        "name": "Duplex & Super Duplex",
        "number": "04",
        "description": "Dual-phase austenitic-ferritic microstructures delivering yield strength roughly twice that of standard stainless steel combined with superior resistance to chloride stress corrosion cracking.",
        "applicableStandards": "ASTM A182, ASTM A240, ASTM A790, ASTM A815, ASME B16.5",
        "pressureClasses": "Class 150#, 300#, 600#, 900#, 1500#, 2500#",
        "sizeRange": "1/2\" NB to 36\" NB",
        "grades": [
          {
            "slug": "2205",
            "name": "2205",
            "fullName": "2205 Standard Duplex (UNS S31803 / S32205)",
            "designation": {
              "astm": "ASTM A182 F51 / F60",
              "asme": "ASME SA182 F51 / F60",
              "uns": "UNS S31803 / S32205",
              "en": "1.4462 (X2CrNiMoN22-5-3)"
            },
            "description": "The workhorse 22% chromium duplex stainless steel with approximately 50/50 ferrite-austenite phase balance, offering high yield strength and high chloride resistance (PREN 35).",
            "characteristics": [
              "Yield strength roughly twice that of austenitic 316L, allowing substantial weight reduction.",
              "High resistance to chloride stress corrosion cracking in sour environments.",
              "High resistance to erosion-corrosion and pitting in seawater and brackish cooling water.",
              "Temperature limit typically restricted to -50°C to +280°C to prevent 475°C embrittlement."
            ],
            "applications": [
              "Offshore oil & gas topside piping",
              "Chemical tanker cargo holds and piping",
              "Desalination high-pressure reverse osmosis headers",
              "Flue gas cleaning systems",
              "Biofuel processing digesters"
            ],
            "specs": {
              "tensileStrength": "655 MPa (95 ksi) minimum",
              "yieldStrength": "450 MPa (65 ksi) minimum",
              "elongation": "25% minimum in 2 inches",
              "hardness": "HBW ≤ 290 (HRC ≤ 28)",
              "heatTreatment": "Solution Annealed at 1020°C - 1100°C and rapidly water quenched",
              "inspection": "EN 10204 3.1 / Phase balance check (40-60% ferrite) / ASTM G48 Method A test"
            },
            "standards": [
              "ASME B16.5",
              "ASTM A182",
              "NORSK M-630 MDS D44",
              "NACE MR0175 / ISO 15156"
            ],
            "image": "assets/Product Images/Flanges/super duplex.jpg"
          },
          {
            "slug": "2507",
            "name": "2507",
            "fullName": "2507 Super Duplex (UNS S32750)",
            "designation": {
              "astm": "ASTM A182 F53",
              "asme": "ASME SA182 F53",
              "uns": "UNS S32750",
              "en": "1.4410 (X2CrNiMoN25-7-4)"
            },
            "description": "25% chromium super duplex stainless steel with 4% molybdenum and 0.28% nitrogen, providing exceptional pitting and crevice corrosion resistance with PREN ≥ 42.",
            "characteristics": [
              "PREN ≥ 42 guaranteeing immunity to pitting in high-temperature chlorinated seawater.",
              "Exceptionally high mechanical yield strength (≥ 550 MPa) for high-pressure subsea lines.",
              "Immune to chloride stress corrosion cracking in aggressive sour gas reservoirs.",
              "Manufactured strictly to NORSOK M-630 and NACE MR0175 compliance."
            ],
            "applications": [
              "Subsea manifolds, risers, and Christmas tree piping",
              "Seawater fire-water ring mains",
              "Offshore high-pressure sour gas export lines",
              "Geothermal high-chloride brine piping",
              "Chemical plants handling hot chlorinated media"
            ],
            "specs": {
              "tensileStrength": "750 MPa (109 ksi) minimum",
              "yieldStrength": "550 MPa (80 ksi) minimum",
              "elongation": "15% minimum in 2 inches",
              "hardness": "HBW ≤ 310 (HRC ≤ 32)",
              "heatTreatment": "Solution Annealed at 1050°C - 1125°C and water quenched",
              "inspection": "EN 10204 3.1 / Microstructure audit / ASTM G48 Method A test at 50°C"
            },
            "standards": [
              "ASME B16.5",
              "ASTM A182 F53",
              "NORSOK M-630 MDS D54",
              "ISO 15156"
            ],
            "image": "assets/Product Images/Flanges/super duplex.jpg"
          }
        ],
        "image": "assets/Product Images/Flanges/super duplex.jpg",
        "fallback": "assets/Product Images/Flanges/duplex.jpg"
      },
      {
        "slug": "high-alloy",
        "name": "High Alloy",
        "number": "05",
        "description": "Nickel-chromium-molybdenum superalloys engineered to withstand severe chemical environments, high temperatures, boiling mineral acids, and extreme mechanical stress.",
        "applicableStandards": "ASTM B564, ASTM B366, ASTM B622, ASME B16.5, ASME B16.11",
        "pressureClasses": "Class 150#, 300#, 600#, 900#, 1500#, 2500#",
        "sizeRange": "1/2\" NB to 24\" NB",
        "grades": [
          {
            "slug": "inconel-625",
            "name": "Inconel 625",
            "fullName": "Inconel 625 (UNS N06625)",
            "designation": {
              "astm": "ASTM B564 / B444",
              "asme": "ASME SB564",
              "uns": "UNS N06625",
              "en": "2.4856 (NiCr22Mo9Nb)"
            },
            "description": "Nickel-chromium-molybdenum alloy with niobium addition providing solid solution strengthening without heat treatment, resistant from cryogenic temperatures up to 980°C.",
            "characteristics": [
              "Virtually immune to chloride-induced stress corrosion cracking.",
              "Exceptional fatigue and thermal-fatigue strength in marine and aerospace environments.",
              "High resistance to a wide range of organic and inorganic acids, including wet chlorine.",
              "Certified for NACE sour service and nuclear reactor core piping."
            ],
            "applications": [
              "Marine exhaust scrubbers",
              "Subsea wellhead equipment",
              "Chemical waste disposal incinerator nozzles",
              "Nuclear reactor control rod drive piping",
              "Sour gas production downhole components"
            ],
            "specs": {
              "tensileStrength": "827 MPa (120 ksi) minimum",
              "yieldStrength": "414 MPa (60 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 220",
              "heatTreatment": "Annealed at 980°C - 1050°C",
              "inspection": "EN 10204 Type 3.1 / 100% Ultrasonic inspection"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B564",
              "NACE MR0175",
              "AMS 5666"
            ],
            "image": "assets/Product Images/Flanges/hastelloy.png"
          },
          {
            "slug": "hastelloy-c276",
            "name": "Hastelloy C276",
            "fullName": "Hastelloy C276 (UNS N10276)",
            "designation": {
              "astm": "ASTM B564 / B575",
              "asme": "ASME SB564",
              "uns": "UNS N10276",
              "en": "2.4819 (NiMo16Cr15W)"
            },
            "description": "The universal corrosion-resistant nickel-molybdenum-chromium superalloy with tungsten, engineered to withstand aggressive wet chlorine gas, hypochlorite, and boiling mineral acids.",
            "characteristics": [
              "Unmatched resistance to localized pitting, crevice corrosion, and stress corrosion cracking.",
              "One of the few materials to withstand wet chlorine gas, hypochlorite, and chlorine dioxide solutions.",
              "Low carbon content minimizes carbide precipitation during welding, preserving as-welded corrosion resistance.",
              "Proven longevity in harsh chemical synthesis reactors."
            ],
            "applications": [
              "Flue gas desulfurization (FGD) scrubbers",
              "Sulfuric and hydrochloric acid synthesis plants",
              "Chlorination reaction systems",
              "Pharmaceutical active ingredient reactors",
              "Hazardous waste treatment vessels"
            ],
            "specs": {
              "tensileStrength": "690 MPa (100 ksi) minimum",
              "yieldStrength": "283 MPa (41 ksi) minimum",
              "elongation": "40% minimum in 2 inches",
              "hardness": "HBW ≤ 220",
              "heatTreatment": "Solution heat-treated at 1120°C and water quenched",
              "inspection": "EN 10204 Type 3.1 / Microstructure and ASTM G28 corrosion testing"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B564",
              "NACE MR0175 / ISO 15156"
            ],
            "image": "assets/Product Images/Flanges/hastelloy.png"
          },
          {
            "slug": "monel-400",
            "name": "Monel 400",
            "fullName": "Monel 400 (UNS N04400)",
            "designation": {
              "astm": "ASTM B564 / B127",
              "asme": "ASME SB564",
              "uns": "UNS N04400",
              "en": "2.4360 (NiCu30Fe)"
            },
            "description": "Ductile nickel-copper alloy (67% Ni, 30% Cu) exhibiting exceptional resistance to rapidly flowing seawater, hydrofluoric acid, sulfuric acid, and high-temperature alkalies.",
            "characteristics": [
              "Standard engineering material for marine salt water immersion and splash zones.",
              "Exceptional resistance to hydrofluoric acid (HF) in all concentrations up to the boiling point.",
              "Resistant to non-oxidizing mineral acids and deaerated salt solutions.",
              "Non-magnetic down to room temperature with high impact toughness."
            ],
            "applications": [
              "Hydrofluoric acid alkylation units in oil refineries",
              "Marine propeller shafts and seawater valve trims",
              "Offshore splash-zone sheathing",
              "Chlorinated solvent recovery systems",
              "Salt plant brine evaporators"
            ],
            "specs": {
              "tensileStrength": "480 MPa (70 ksi) minimum",
              "yieldStrength": "195 MPa (28 ksi) minimum",
              "elongation": "35% minimum in 2 inches",
              "hardness": "HBW 110 - 150",
              "heatTreatment": "Annealed at 760°C - 900°C followed by water quench",
              "inspection": "EN 10204 3.1 / Ultrasonic and Dye Penetrant testing"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B564",
              "NACE MR0175",
              "MSS-SP-25"
            ],
            "image": "assets/Product Images/Flanges/hastelloy.png"
          }
        ],
        "image": "assets/Product Images/Flanges/hastelloy.png",
        "fallback": "assets/Product Images/Flanges/high alloy.jpeg"
      },
      {
        "slug": "nickel",
        "name": "Nickel",
        "number": "06",
        "description": "Commercially pure nickel alloys engineered for caustic soda evaporators, non-oxidizing halogen systems, and high-purity chemical processing.",
        "applicableStandards": "ASTM B564, ASTM B160, ASTM B162, ASME B16.5",
        "pressureClasses": "Class 150#, 300#, 600#",
        "sizeRange": "1/2\" NB to 24\" NB",
        "grades": [
          {
            "slug": "nickel-200",
            "name": "Nickel 200",
            "fullName": "Nickel 200 (UNS N02200)",
            "designation": {
              "astm": "ASTM B564 / B160",
              "asme": "ASME SB564",
              "uns": "UNS N02200",
              "en": "2.4066 (Ni99.2)"
            },
            "description": "Commercially pure (99.6%) wrought nickel providing exceptional thermal conductivity, electrical properties, and uncompromised resistance to hot caustic alkalies.",
            "characteristics": [
              "Immune to stress corrosion cracking in all concentrations of boiling caustic soda (NaOH).",
              "Excellent resistance to dry fluorine, chlorine, and hydrogen chloride gases.",
              "High thermal conductivity and low electrical resistivity for electrochemical electrodes.",
              "Maintains cryogenic mechanical ductility without ductile-to-brittle transition."
            ],
            "applications": [
              "Caustic soda production evaporators",
              "Synthetic fiber manufacturing equipment",
              "Chlorine and hydrogen chloride dry gas transfer",
              "Food and soap processing reaction vessels"
            ],
            "specs": {
              "tensileStrength": "380 MPa (55 ksi) minimum",
              "yieldStrength": "105 MPa (15 ksi) minimum",
              "elongation": "40% minimum in 2 inches",
              "hardness": "HBW ≤ 130",
              "heatTreatment": "Annealed at 700°C - 900°C",
              "inspection": "EN 10204 Type 3.1 MTC"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B564",
              "ASME Section VIII Div 1"
            ],
            "image": "assets/Product Images/Flanges/iconel.jpeg"
          },
          {
            "slug": "nickel-201",
            "name": "Nickel 201",
            "fullName": "Nickel 201 (UNS N02201)",
            "designation": {
              "astm": "ASTM B564 / B160",
              "asme": "ASME SB564",
              "uns": "UNS N02201",
              "en": "2.4068 (LC-Ni99.2)"
            },
            "description": "Low-carbon version (C ≤ 0.02%) of Nickel 200 engineered to prevent graphitization and intergranular embrittlement during service above 315°C (600°F).",
            "characteristics": [
              "Certified for continuous service at temperatures exceeding 315°C (600°F) up to 650°C.",
              "Low carbon prevents intercrystalline graphite precipitation in caustic environments.",
              "Exceptional resistance to molten hydroxide and fused caustic salts.",
              "High ductility and ease of cold forming and orbital welding."
            ],
            "applications": [
              "High-temperature caustic concentration evaporators",
              "Vinyl chloride monomer (VCM) thermal reactors",
              "Fluorochemical reactors",
              "Molten salt nuclear heat transfer loops"
            ],
            "specs": {
              "tensileStrength": "345 MPa (50 ksi) minimum",
              "yieldStrength": "70 MPa (10 ksi) minimum",
              "elongation": "40% minimum in 2 inches",
              "hardness": "HBW ≤ 120",
              "heatTreatment": "Annealed at 700°C - 900°C",
              "inspection": "EN 10204 Type 3.1 MTC / Carbon verification"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B564",
              "DIN 17750"
            ],
            "image": "assets/Product Images/Flanges/iconel.jpeg"
          }
        ],
        "image": "assets/Product Images/Flanges/iconel.jpeg",
        "fallback": "assets/Product Images/Flanges/monel.jpeg"
      },
      {
        "slug": "titanium",
        "name": "Titanium",
        "number": "07",
        "description": "Lightweight, ultra-corrosion-resistant titanium alloys delivering total immunity to marine seawater, wet chlorine, and organic chlorides with extraordinary strength-to-weight ratios.",
        "applicableStandards": "ASTM B381, ASTM B348, ASTM B861, ASME B16.5",
        "pressureClasses": "Class 150#, 300#, 600#, 900#",
        "sizeRange": "1/2\" NB to 24\" NB",
        "grades": [
          {
            "slug": "grade-2",
            "name": "Grade 2",
            "fullName": "Titanium Grade 2 (UNS R50400)",
            "designation": {
              "astm": "ASTM B381 / B348 Gr. 2",
              "asme": "ASME SB381",
              "uns": "UNS R50400",
              "en": "3.7035 (Ti2)"
            },
            "description": "The workhorse commercially pure titanium grade offering the optimum balance of moderate strength, high ductility, excellent weldability, and total seawater corrosion resistance.",
            "characteristics": [
              "Forms a tenacious, self-healing titanium dioxide (TiO2) passive oxide film instantly upon exposure to oxygen.",
              "Complete immunity to marine microbiologically influenced corrosion (MIC) and crevice attack.",
              "Approximately 45% lighter than steel, significantly reducing topside platform loads.",
              "Certified biocompatible for medical and food-contact installations."
            ],
            "applications": [
              "Seawater desalination reverse osmosis and multi-stage flash units",
              "Offshore oil platform seawater cooling systems",
              "Chlor-alkali electrolytic cell anode connections",
              "Bleaching towers in pulp and paper mills"
            ],
            "specs": {
              "tensileStrength": "345 MPa (50 ksi) minimum",
              "yieldStrength": "275 MPa (40 ksi) minimum",
              "elongation": "20% minimum in 2 inches",
              "hardness": "HBW ≤ 200",
              "heatTreatment": "Stress Relieved at 500°C - 550°C",
              "inspection": "EN 10204 3.1 / Gas analysis (C, O, N, H) verified"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B381",
              "NACE MR0175 / ISO 15156"
            ],
            "image": "assets/Product Images/Flanges/titanium.jpg"
          },
          {
            "slug": "grade-5",
            "name": "Grade 5",
            "fullName": "Titanium Grade 5 (Ti-6Al-4V / UNS R56400)",
            "designation": {
              "astm": "ASTM B381 / B348 Gr. 5",
              "asme": "ASME SB381",
              "uns": "UNS R56400",
              "en": "3.7165 (Ti6Al4V)"
            },
            "description": "Alpha-beta titanium alloy containing 6% aluminum and 4% vanadium, delivering twice the mechanical tensile strength of commercially pure grades with high fatigue endurance.",
            "characteristics": [
              "Tensile strength exceeding 895 MPa (130 ksi) with low density of 4.43 g/cm³.",
              "Exceptional strength-to-weight ratio for aerospace and subsea structural bolting.",
              "Maintains mechanical properties up to 400°C while resisting high-velocity seawater erosion.",
              "Heat treatable by solution treating and aging (STA)."
            ],
            "applications": [
              "Subsea high-pressure wellhead riser bolts",
              "Aerospace hydraulic fluid connections",
              "High-speed marine hydrofoil fasteners",
              "Deepwater oceanographic exploration casings"
            ],
            "specs": {
              "tensileStrength": "895 MPa (130 ksi) minimum",
              "yieldStrength": "828 MPa (120 ksi) minimum",
              "elongation": "10% minimum in 2 inches",
              "hardness": "HRC 30 - 36",
              "heatTreatment": "Mill Annealed at 700°C - 785°C and air cooled",
              "inspection": "EN 10204 Type 3.1 MTC / Ultrasonic testing"
            },
            "standards": [
              "ASTM B381",
              "ASME B16.5",
              "AMS 4928",
              "NACE MR0175"
            ],
            "image": "assets/Product Images/Flanges/titanium.jpg"
          }
        ],
        "image": "assets/Product Images/Flanges/titanium.jpg",
        "fallback": "assets/Product Images/Flanges/titanium.jpg"
      },
      {
        "slug": "copper",
        "name": "Copper",
        "number": "08",
        "description": "Copper-nickel alloys, brasses, and pure copper engineered for high thermal/electrical conductivity, natural marine biofouling resistance, and naval piping circuits.",
        "applicableStandards": "ASTM B151, ASTM B171, ASTM B466, ASME B16.5, DIN 86019",
        "pressureClasses": "Class 150#, 300#, DIN PN10 - PN16",
        "sizeRange": "1/2\" NB to 24\" NB",
        "grades": [
          {
            "slug": "cu-ni-90-10",
            "name": "Cu-Ni 90/10",
            "fullName": "Copper-Nickel 90/10 (C70600)",
            "designation": {
              "astm": "ASTM B151 / B171 C70600",
              "asme": "ASME SB151 C70600",
              "uns": "UNS C70600",
              "en": "2.0872 (CuNi10Fe1Mn)"
            },
            "description": "90% copper, 10% nickel alloy formulated with controlled iron and manganese additions, delivering natural resistance to marine biofouling and seawater impingement erosion.",
            "characteristics": [
              "Natural antimicrobial and macro-fouling resistance; eliminates marine barnacle growth.",
              "High thermal conductivity for marine condensers and heat exchanger tubing.",
              "Resistant to stress corrosion cracking in high-salinity seawater.",
              "Readily brazeable and weldable by TIG and MIG processes."
            ],
            "applications": [
              "Naval warship seawater cooling mains",
              "Offshore platform firewater ring mains",
              "Commercial shipbuilding ballast piping",
              "Desalination multi-stage flash heat recovery tubes"
            ],
            "specs": {
              "tensileStrength": "310 MPa (45 ksi) minimum",
              "yieldStrength": "125 MPa (18 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW 70 - 100",
              "heatTreatment": "Annealed at 600°C - 750°C",
              "inspection": "EN 10204 Type 3.1 MTC / Eddy current inspection"
            },
            "standards": [
              "ASME B16.5",
              "EEMUA 145 / 234",
              "DIN 86019",
              "MIL-C-15726"
            ],
            "image": "assets/Product Images/Flanges/copper-nickel.jpg"
          },
          {
            "slug": "cu-ni-70-30",
            "name": "Cu-Ni 70/30",
            "fullName": "Copper-Nickel 70/30 (C71500)",
            "designation": {
              "astm": "ASTM B151 / B171 C71500",
              "asme": "ASME SB151 C71500",
              "uns": "UNS C71500",
              "en": "2.0882 (CuNi30Mn1Fe)"
            },
            "description": "70% copper, 30% nickel alloy engineered for higher seawater velocity tolerances (up to 4.5 m/s) and severe naval service where high impingement resistance is mandatory.",
            "characteristics": [
              "Permissible seawater flow velocity up to 4.5 m/s without protective film breakdown.",
              "Superior resistance to hydrogen embrittlement and sulfide stress cracking.",
              "Enhanced mechanical strength compared to 90/10 grade.",
              "Standard naval submarine and destroyer condenser specification."
            ],
            "applications": [
              "Submarine seawater intake systems",
              "High-velocity naval auxiliary condenser piping",
              "Offshore oil rig cooling manifolds",
              "Desalination brine heater bundles"
            ],
            "specs": {
              "tensileStrength": "380 MPa (55 ksi) minimum",
              "yieldStrength": "140 MPa (20 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW 80 - 120",
              "heatTreatment": "Annealed at 650°C - 800°C",
              "inspection": "EN 10204 Type 3.1 MTC / Hydrostatic verification"
            },
            "standards": [
              "ASME B16.5",
              "EEMUA 145 / 234",
              "DIN 86019",
              "MIL-C-15726"
            ],
            "image": "assets/Product Images/Flanges/copper-nickel.jpg"
          }
        ],
        "image": "assets/Product Images/Flanges/copper-nickel.jpg",
        "fallback": "assets/flanges/types/cuni-slip-on-flanges.jpg"
      },
      {
        "slug": "aluminium",
        "name": "Aluminium",
        "number": "09",
        "description": "High-strength wrought and extruded aluminium alloys delivering lightweight structural capability, high thermal dissipation, and cryogenic ductility for aerospace and marine service.",
        "applicableStandards": "ASTM B221, ASTM B241, ASTM B209, ASME B16.5",
        "pressureClasses": "Class 150#, PN10, PN16",
        "sizeRange": "1/2\" NB to 24\" NB",
        "grades": [
          {
            "slug": "6061-t6",
            "name": "6061-T6",
            "fullName": "6061-T6 Structural Aluminium",
            "designation": {
              "astm": "ASTM B221 / B241 Gr. 6061",
              "asme": "ASME SB221",
              "uns": "UNS A96061",
              "en": "3.3211 (AlMg1SiCu)"
            },
            "description": "Precipitation-hardened magnesium-silicon alloy delivering high structural yield strength, excellent CNC machinability, and clean surface anodizing characteristics.",
            "characteristics": [
              "High strength-to-weight ratio with density of only 2.70 g/cm³.",
              "Excellent atmospheric corrosion resistance in industrial environments.",
              "Readily machinable to tight geometric tolerances on multi-axis CNC machines.",
              "Excellent TIG/MIG weldability using 4043 or 5356 filler wires."
            ],
            "applications": [
              "Aerospace fuel and hydraulic fluid lines",
              "Cryogenic air separation plant piping",
              "Automotive racing fluid manifolds",
              "Precision robotic automation frames"
            ],
            "specs": {
              "tensileStrength": "290 MPa (42 ksi) minimum",
              "yieldStrength": "240 MPa (35 ksi) minimum",
              "elongation": "8% - 10% in 2 inches",
              "hardness": "HBW ~ 95",
              "heatTreatment": "Solution heat-treated and artificially aged (T6 temper)",
              "inspection": "EN 10204 Type 3.1 MTC / Conductivity check"
            },
            "standards": [
              "ASTM B221",
              "ASTM B241",
              "AMS 4027",
              "ASME B16.5"
            ],
            "image": "assets/flanges/types/steel-flanges-types.jpg"
          },
          {
            "slug": "5083-h116",
            "name": "5083-H116",
            "fullName": "5083-H116 Marine Aluminium",
            "designation": {
              "astm": "ASTM B209 / B221 Gr. 5083",
              "asme": "ASME SB209",
              "uns": "UNS A95083",
              "en": "3.3547 (AlMg4.5Mn0.7)"
            },
            "description": "High-magnesium marine alloy engineered specifically for exceptional corrosion resistance in seawater and cryogenic storage tanks down to -269°C without embrittlement.",
            "characteristics": [
              "The premier structural aluminium alloy for saltwater immersion.",
              "Maintains exceptional ductility and toughness at cryogenic temperatures down to liquid helium (-269°C).",
              "High weld joint efficiency without requiring post-weld solution treatment.",
              "Certified by DNV, Lloyd's Register, and ABS for marine construction."
            ],
            "applications": [
              "LNG/LPG cryogenic cargo tank piping",
              "High-speed marine ferry hull piping",
              "Naval radar mast structural flanges",
              "Chemical rail tanker vessels"
            ],
            "specs": {
              "tensileStrength": "305 MPa (44 ksi) minimum",
              "yieldStrength": "215 MPa (31 ksi) minimum",
              "elongation": "10% minimum in 2 inches",
              "hardness": "HBW ~ 85",
              "heatTreatment": "Strain-hardened and stabilized (H116 temper) for intergranular corrosion resistance",
              "inspection": "EN 10204 3.1 / Nitric Acid Mass Loss Test (NAMLT) to ASTM G67"
            },
            "standards": [
              "ASTM B209",
              "ASTM B221",
              "DNV-GL Marine Rules",
              "ASME Section VIII"
            ],
            "image": "assets/flanges/types/steel-flanges-types.jpg"
          }
        ],
        "image": "assets/flanges/types/steel-flanges-types.jpg",
        "fallback": "assets/images/products/flanges.png"
      }
    ]
  },
  {
    "slug": "forge-fittings",
    "name": "Forge Fittings",
    "title": "FORGE FITTINGS",
    "suffix": "Forge Fittings",
    "eyebrow": "ASME B16.11 / BS 3799 CLASS 2000# TO 9000#",
    "heroImage": "assets/hero-products/forge-fittings-hero.png",
    "heroTag": "ASME B16.11 HIGH-PRESSURE FORGED FITTINGS",
    "description": "Apollo Forge & Fittings manufactures certified high-pressure forged steel pipe fittings engineered for severe mechanical containment. Produced from hot-forged billets with grain flow aligned to fitting contours, these components withstand extreme pressure shocks, thermal cycling, and harsh industrial environments.",
    "overview": {
      "lead": "Forged fittings provide directional transitions, branch connections, and pipe size reductions in small-bore piping systems. Manufactured by closed-die forging followed by precision CNC machining.",
      "highlights": [
        {
          "title": "Pressure Ratings",
          "desc": "Class 2000#, 3000#, 6000#, and 9000# ratings with wall thicknesses designed for severe mechanical containment."
        },
        {
          "title": "Joint Configurations",
          "desc": "Available in Socket Weld (SW) and Threaded (NPT / BSPT) connection ends to ASME B1.20.1."
        },
        {
          "title": "Normalized Grain Structure",
          "desc": "Heat-treated by normalizing or solution annealing to enhance impact toughness and fracture resistance."
        },
        {
          "title": "Standards Compliance",
          "desc": "Manufactured strictly in accordance with ASME B16.11, MSS-SP-79, MSS-SP-83, and BS 3799."
        }
      ]
    },
    "hasTypes": true,
    "types": [
      {
        "slug": "90-deg-elbow",
        "name": "90° Forged Elbow",
        "shortName": "90° Elbow",
        "image": "assets/types of product/flanges/SS/elbow.jpeg",
        "description": "High-pressure directional fitting engineered to alter fluid flow by 90 degrees with reinforced forged crotch thickness.",
        "design": "Socket weld or NPT threaded connection with heavy wall crotch reinforcement to withstand fluid impingement erosion.",
        "function": "Directional routing in high-pressure oilfield manifolds and refinery steam loops.",
        "facing": "Socket Weld (SW) or Threaded (NPT).",
        "standards": "ASME B16.11, BS 3799",
        "sizes": "1/8\" NB to 4\" NB",
        "pressureClasses": "Class 2000#, 3000#, 6000#, 9000#",
        "materialsSupported": [
          "stainless-steel",
          "carbon-steel",
          "alloy-steel",
          "duplex",
          "high-alloy"
        ]
      },
      {
        "slug": "forged-tee",
        "name": "Forged Equal & Reducing Tee",
        "shortName": "Forged Tee",
        "image": "assets/New Product img/pipe fittings/fittings-showcase.jpg",
        "description": "Three-way forged intersection fitting providing 90-degree branch fluid distribution from the main run pipe.",
        "design": "Closed-die forged with reinforced branch junction to absorb torsional stress and thermal expansion.",
        "function": "Branching flow in hydraulic piping, chemical feed lines, and pump stations.",
        "facing": "Socket Weld (SW) or NPT Threaded.",
        "standards": "ASME B16.11, MSS-SP-97",
        "sizes": "1/8\" NB to 4\" NB",
        "pressureClasses": "Class 2000#, 3000#, 6000#, 9000#",
        "materialsSupported": [
          "stainless-steel",
          "carbon-steel",
          "alloy-steel",
          "duplex",
          "high-alloy"
        ]
      },
      {
        "slug": "forged-union",
        "name": "Forged Pipe Union",
        "shortName": "Union",
        "image": "assets/New Product img/pipe fittings/copper-nickel-pipe-fittings.jpg",
        "description": "Three-piece threaded or socket weld fitting featuring male, female, and nut components with precision ground metal-to-metal seating.",
        "design": "Ground ball-and-cone or flat gasket seating face that allows piping disconnection without cutting or unthreading pipe runs.",
        "function": "Quick disconnection points for pumps, flow meters, valves, and regulator assemblies.",
        "facing": "Ground bronze or stainless-to-steel ball seat.",
        "standards": "MSS-SP-83, ASME B16.11",
        "sizes": "1/8\" NB to 3\" NB",
        "pressureClasses": "Class 3000#, 6000#",
        "materialsSupported": [
          "stainless-steel",
          "carbon-steel",
          "alloy-steel",
          "duplex"
        ]
      },
      {
        "slug": "full-coupling",
        "name": "Full & Half Coupling",
        "shortName": "Coupling",
        "image": "assets/New Product img/pipe fittings/fittings-showcase.jpg",
        "description": "Forged cylindrical sleeve used to join two pipe lengths end-to-end (full coupling) or to create a branch welded nozzle (half coupling).",
        "design": "Continuous female socket bore or internal female taper threads with heavy outer wall thickness.",
        "function": "Straight pipe connections and pressure vessel instrument tap connections.",
        "facing": "Socket Weld or NPT Threaded.",
        "standards": "ASME B16.11, BS 3799",
        "sizes": "1/8\" NB to 4\" NB",
        "pressureClasses": "Class 3000#, 6000#, 9000#",
        "materialsSupported": [
          "stainless-steel",
          "carbon-steel",
          "alloy-steel",
          "duplex",
          "high-alloy"
        ]
      }
    ],
    "materials": [
      {
        "slug": "stainless-steel",
        "name": "Stainless Steel",
        "number": "01",
        "description": "Austenitic and martensitic stainless steels offering superior resistance to chemical attack, pitting, and high-temperature scaling across process industries.",
        "applicableStandards": "ASTM A182, ASTM A240, ASTM A312, ASTM A403, ASME B16.5",
        "pressureClasses": "Class 150#, 300#, 600#, 900#, 1500#, 2500#",
        "sizeRange": "1/2\" NB to 60\" NB (DN15 to DN1500)",
        "grades": [
          {
            "slug": "304",
            "name": "304",
            "fullName": "304 Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S30400",
              "en": "1.4301 (X5CrNi18-10)"
            },
            "description": "The classic 18/8 austenitic stainless steel delivering dependable general corrosion resistance, excellent formability, and cryogenic impact toughness.",
            "characteristics": [
              "Excellent atmospheric and chemical corrosion resistance in organic and mildly oxidizing acids.",
              "Retains high impact toughness from cryogenic temperatures (-196°C) up to 800°C.",
              "Readily weldable by all standard commercial fusion methods without requiring preheat.",
              "Non-magnetic in the solution-annealed condition with moderate work hardening rate."
            ],
            "applications": [
              "Chemical processing manifolds",
              "Food, dairy & beverage piping",
              "Petrochemical low-temperature loops",
              "Cryogenic storage vessel nozzles",
              "Architectural structural piping"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "205 MPa (30 ksi) minimum",
              "elongation": "40% minimum in 2 inches",
              "hardness": "HBW ≤ 201 (HRB ≤ 92)",
              "heatTreatment": "Solution Annealed at 1040°C - 1120°C followed by rapid water quench",
              "inspection": "EN 10204 Type 3.1 MTC with complete chemical and mechanical test results"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.47",
              "ASTM A182",
              "ASME SA182",
              "MSS-SP-43",
              "NACE MR0175 (annealed)"
            ],
            "image": "assets/Product Section/Manufacturer division/Forged Fittings/stainles steel.jpg"
          },
          {
            "slug": "304l",
            "name": "304L",
            "fullName": "304L Low-Carbon Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S30403",
              "en": "1.4307 (X2CrNi18-9)"
            },
            "description": "Extra-low carbon modification (C ≤ 0.030%) that eliminates chromium carbide precipitation during welding, providing immunity to intergranular corrosion in as-welded assemblies.",
            "characteristics": [
              "Immunity to sensitization and intergranular attack in heat-affected zones (HAZ) of welded components.",
              "Eliminates the mandatory requirement for post-weld solution annealing.",
              "Maintains cryogenic mechanical ductility down to liquid nitrogen temperatures (-196°C).",
              "Compatible with dual-certified 304/304L pressure vessel specifications."
            ],
            "applications": [
              "Heavy-wall welded piping systems",
              "Wet chemical processing lines",
              "Refinery flare header lines",
              "Marine deck piping systems",
              "Pulp and paper bleaching equipment"
            ],
            "specs": {
              "tensileStrength": "485 MPa (70 ksi) minimum",
              "yieldStrength": "170 MPa (25 ksi) minimum",
              "elongation": "40% minimum in 2 inches",
              "hardness": "HBW ≤ 201",
              "heatTreatment": "Solution Annealed at 1040°C - 1100°C and water quenched",
              "inspection": "EN 10204 Type 3.1 MTC / NACE MR0175 compliant"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.9",
              "ASTM A182",
              "ASTM A403",
              "ASME Section VIII Div 1"
            ],
            "image": "assets/Product Section/Manufacturer division/Forged Fittings/stainles steel.jpg"
          },
          {
            "slug": "316",
            "name": "316",
            "fullName": "316 Molybdenum-Bearing Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S31600",
              "en": "1.4401 (X5CrNiMo17-12-2)"
            },
            "description": "Formulated with 2.0% to 3.0% molybdenum to significantly improve localized resistance to pitting and crevice corrosion in chloride and halide-bearing environments.",
            "characteristics": [
              "Significantly higher pitting resistance equivalent (PREN ~ 23-25) compared to 304.",
              "Superior resistance to sulfuric, phosphoric, acetic, and tartaric acid solutions.",
              "Elevated creep rupture strength at elevated operating temperatures up to 870°C.",
              "Standard specification for marine atmospheres, offshore platforms, and coastal chemical plants."
            ],
            "applications": [
              "Offshore oil & gas production manifolds",
              "Marine seawater cooling circuits",
              "Pharmaceutical reaction vessels",
              "Petrochemical acid-wash scrubbers",
              "Fertilizer production piping"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "205 MPa (30 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 217",
              "heatTreatment": "Solution Annealed at 1040°C - 1150°C and rapidly quenched",
              "inspection": "EN 10204 3.1 / PMI / Ultrasonic Inspection to ASTM A388"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.47",
              "ASTM A182",
              "ASTM A312",
              "NACE MR0175 / ISO 15156"
            ],
            "image": "assets/Product Section/Manufacturer division/Forged Fittings/stainles steel.jpg"
          },
          {
            "slug": "316l",
            "name": "316L",
            "fullName": "316L Low-Carbon Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S31603",
              "en": "1.4404 (X2CrNiMo17-12-2)"
            },
            "description": "Low-carbon molybdenum alloy combining superior chloride pitting resistance with complete protection against intergranular carbide precipitation in critical welded joints.",
            "characteristics": [
              "Carbon restricted to 0.030% max, preventing grain boundary sensitization during field welding.",
              "Exceptional resistance to localized pitting in marine and brackish water piping systems.",
              "Widely accepted in sour service under NACE MR0175 / ISO 15156 standards.",
              "Clean interior surface finish capability suitable for sanitary and high-purity applications."
            ],
            "applications": [
              "Subsea umbilical and manifold piping",
              "Chemical tanker cargo lines",
              "Pharmaceutical clean-in-place (CIP) loops",
              "Desalination plant brine piping",
              "Sour hydrocarbon gas handling"
            ],
            "specs": {
              "tensileStrength": "485 MPa (70 ksi) minimum",
              "yieldStrength": "170 MPa (25 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 217",
              "heatTreatment": "Solution Annealed at 1040°C - 1120°C and water quenched",
              "inspection": "EN 10204 Type 3.1 MTC / NACE MR0175 / MR0103"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.11",
              "ASTM A182",
              "ASTM A403",
              "ASME BPE"
            ],
            "image": "assets/Product Section/Manufacturer division/Forged Fittings/stainles steel.jpg"
          },
          {
            "slug": "321",
            "name": "321",
            "fullName": "321 Titanium-Stabilized Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S32100",
              "en": "1.4541 (X6CrNiTi18-10)"
            },
            "description": "Stabilized with titanium (Ti ≥ 5x C) to tie up carbon as titanium carbides, preventing sensitization during prolonged service in the critical 427°C to 816°C temperature range.",
            "characteristics": [
              "Complete immunity to intergranular corrosion during continuous high-temperature service.",
              "Superior creep and stress-rupture properties compared to standard 304/304L.",
              "Resists polythionic acid stress corrosion cracking during refinery shutdown cycles.",
              "Standard choice for aircraft exhaust systems and refinery thermal crackers."
            ],
            "applications": [
              "Refinery thermal cracker piping",
              "Catalytic reformer units",
              "High-temperature steam boiler bypass lines",
              "Aircraft engine exhaust manifolds",
              "Chemical furnace tube connections"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "205 MPa (30 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 217",
              "heatTreatment": "Solution Annealed at 1000°C - 1100°C followed by stabilization heat treatment at 850°C - 900°C",
              "inspection": "EN 10204 3.1 / Intergranular Corrosion Test to ASTM A262 Practice E"
            },
            "standards": [
              "ASME B16.5",
              "ASTM A182",
              "ASME SA182",
              "API 530"
            ],
            "image": "assets/Product Section/Manufacturer division/Forged Fittings/stainles steel.jpg"
          },
          {
            "slug": "347",
            "name": "347",
            "fullName": "347 Niobium-Stabilized Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S34700",
              "en": "1.4550 (X6CrNiNb18-10)"
            },
            "description": "Stabilized with niobium/columbium (Nb ≥ 10x C) providing enhanced creep resistance and intergranular corrosion resistance at severe temperatures up to 870°C.",
            "characteristics": [
              "High creep strength and stress rupture resistance in heavy wall forged components.",
              "Resistant to polythionic acid stress cracking in hydrocracking and hydrotreating units.",
              "Superior fatigue strength under extreme thermal shock cycling.",
              "Certified for nuclear and supercritical power generation piping."
            ],
            "applications": [
              "Hydroprocessing and hydrodesulfurization units",
              "Supercritical power boiler piping",
              "Radiant superheater tube headers",
              "High-temperature radioactive waste handling",
              "Gas turbine exhaust nozzles"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "205 MPa (30 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 217",
              "heatTreatment": "Solution Annealed at 1040°C - 1150°C and water quenched",
              "inspection": "EN 10204 Type 3.1 with ASTM A262 Practice E IGC certification"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.9",
              "ASTM A182",
              "ASME Section III Class 1"
            ],
            "image": "assets/Product Section/Manufacturer division/Forged Fittings/stainles steel.jpg"
          },
          {
            "slug": "310s",
            "name": "310S",
            "fullName": "310S High-Temperature Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S31008",
              "en": "1.4845 (X8CrNi25-21)"
            },
            "description": "High-alloy austenitic stainless steel formulated with 25% chromium and 20% nickel for exceptional resistance to high-temperature oxidation and sulfidation up to 1150°C.",
            "characteristics": [
              "Continuous oxidation resistance in air up to 1150°C (2100°F) under cyclic thermal conditions.",
              "Resistant to carburization in moderately carburizing petrochemical atmospheres.",
              "Maintains high ductile toughness and structural stability at elevated temperatures.",
              "Low magnetic permeability and high thermal creep endurance."
            ],
            "applications": [
              "Thermal incinerator burner piping",
              "Fluidized bed coal combustors",
              "Cement rotary kiln exhaust nozzles",
              "Petrochemical pyrolysis furnaces",
              "Heat treatment furnace fixtures"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "205 MPa (30 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 217",
              "heatTreatment": "Solution Annealed at 1040°C - 1150°C followed by rapid air or water cooling",
              "inspection": "EN 10204 3.1 MTC / High-temperature mechanical testing"
            },
            "standards": [
              "ASME B16.5",
              "ASTM A182",
              "ASTM A312",
              "ASME Section VIII Div 1"
            ],
            "image": "assets/Product Section/Manufacturer division/Forged Fittings/stainles steel.jpg"
          },
          {
            "slug": "904l",
            "name": "904L",
            "fullName": "904L Super Austenitic Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS N08904",
              "en": "1.4539 (X1NiCrMoCu25-20-5)"
            },
            "description": "High-alloy super-austenitic stainless steel formulated with 4.5% molybdenum and 1.5% copper, specifically developed to withstand aggressive sulfuric and phosphoric acids.",
            "characteristics": [
              "High PREN (≥ 34), offering extraordinary resistance to warm seawater pitting.",
              "Added copper content provides outstanding resistance to concentrated sulfuric acid across all concentration ranges.",
              "Immune to chloride-induced stress corrosion cracking up to 60°C.",
              "Fully austenitic structure provides high ductility and ease of welding."
            ],
            "applications": [
              "Sulfuric acid manufacturing pipelines",
              "Phosphate fertilizer production units",
              "Flue gas desulfurization (FGD) scrubbers",
              "Seawater reverse osmosis piping",
              "Pulp mill bleaching towers"
            ],
            "specs": {
              "tensileStrength": "490 MPa (71 ksi) minimum",
              "yieldStrength": "220 MPa (32 ksi) minimum",
              "elongation": "35% minimum in 2 inches",
              "hardness": "HBW ≤ 217 (HRB ≤ 95)",
              "heatTreatment": "Solution Annealed at 1090°C - 1150°C followed by rapid water quench",
              "inspection": "EN 10204 Type 3.1 MTC with ASTM G48 pitting test verification"
            },
            "standards": [
              "ASTM A182",
              "ASME B16.5",
              "ASTM B625",
              "NACE MR0175"
            ],
            "image": "assets/Product Section/Manufacturer division/Forged Fittings/stainles steel.jpg"
          }
        ],
        "image": "assets/hero-products/forge-fittings-hero.png",
        "fallback": "assets/New Product img/pipe fittings/fittings-showcase.jpg"
      },
      {
        "slug": "carbon-steel",
        "name": "Carbon Steel",
        "number": "02",
        "description": "Forged and plate-formed carbon steels engineered for structural strength, high pressure containment, and reliable impact ductility in utility and industrial piping.",
        "applicableStandards": "ASTM A105, ASTM A350 LF2, ASTM A106, ASTM A234 WPB, ASME B16.5",
        "pressureClasses": "Class 150#, 300#, 600#, 900#, 1500#, 2500#",
        "sizeRange": "1/2\" NB to 60\" NB",
        "grades": [
          {
            "slug": "a105",
            "name": "A105",
            "fullName": "ASTM A105 Forged Carbon Steel",
            "designation": {
              "astm": "ASTM A105 / A105N",
              "asme": "ASME SA105",
              "uns": "UNS K03504",
              "en": "1.0460 (C22.8 / P250GH)"
            },
            "description": "The premier forged carbon steel specification for ambient and elevated-temperature piping components, flanges, fittings, and valves.",
            "characteristics": [
              "Excellent machinability and weldability with balanced carbon-manganese metallurgy.",
              "Supplied in normalized (A105N) heat-treated condition for fine grain size and optimal Charpy V-notch toughness.",
              "High proof pressure containment for petroleum refineries, power stations, and steam pipelines.",
              "Fully qualified under ASME Section VIII and ASME B31.3 piping codes."
            ],
            "applications": [
              "Refinery steam and hydrocarbon lines",
              "Boiler feed water piping",
              "Natural gas transmission stations",
              "District heating networks",
              "General industrial utility piping"
            ],
            "specs": {
              "tensileStrength": "485 MPa (70 ksi) minimum",
              "yieldStrength": "250 MPa (36 ksi) minimum",
              "elongation": "22% minimum in 2 inches",
              "hardness": "HBW 137 - 187",
              "heatTreatment": "Normalized at 880°C - 920°C and air cooled",
              "inspection": "EN 10204 Type 3.1 MTC / 100% NDT inspection"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.11",
              "ASTM A105",
              "MSS-SP-79",
              "NACE MR0175 (normalized)"
            ],
            "image": "assets/Product Section/Manufacturer division/Forged Fittings/carbon.avif"
          },
          {
            "slug": "a350-lf2",
            "name": "A350 LF2",
            "fullName": "ASTM A350 LF2 Low-Temperature Carbon Steel",
            "designation": {
              "astm": "ASTM A350 LF2 Class 1",
              "asme": "ASME SA350 LF2",
              "uns": "UNS K03011",
              "en": "1.0566 (TStE 355)"
            },
            "description": "Forged carbon and low-alloy steel specifically treated for notched-bar toughness in low-temperature piping systems down to -46°C (-50°F).",
            "characteristics": [
              "Guaranteed Charpy V-notch impact toughness of 20 Joules (15 ft-lbs) minimum at -46°C (-50°F).",
              "Fine-grained, fully killed steel heat treated by normalizing and tempering or quenching and tempering.",
              "Mandatory for Arctic pipelines, cold gas transmission, and LPG/LNG cryogenic utility lines.",
              "Fully compliant with NACE MR0175 hardness limits (≤ 22 HRC)."
            ],
            "applications": [
              "Arctic oil and gas extraction lines",
              "LPG/LNG transport and storage terminals",
              "Refrigeration compressor piping",
              "Subsea cold-water export lines",
              "Cryogenic gas processing facilities"
            ],
            "specs": {
              "tensileStrength": "485 - 655 MPa (70 - 95 ksi)",
              "yieldStrength": "250 MPa (36 ksi) minimum",
              "elongation": "22% minimum in 2 inches",
              "hardness": "HBW ≤ 197 (HRC ≤ 22)",
              "heatTreatment": "Normalized at 900°C and Tempered at 600°C",
              "inspection": "EN 10204 3.1 / Charpy V-Notch Impact Test at -46°C"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.11",
              "ASTM A350",
              "NACE MR0175 / ISO 15156"
            ],
            "image": "assets/Product Section/Manufacturer division/Forged Fittings/carbon.avif"
          },
          {
            "slug": "a234-wpb",
            "name": "A234 WPB",
            "fullName": "ASTM A234 WPB Wrought Carbon Steel",
            "designation": {
              "astm": "ASTM A234 Grade WPB",
              "asme": "ASME SA234 WPB",
              "uns": "UNS K03006",
              "en": "1.0488 (P275NH)"
            },
            "description": "The standard wrought carbon steel material specification for seamless and welded butt weld elbows, tees, reducers, and pipe caps.",
            "characteristics": [
              "Formed from seamless pipe (ASTM A106 Grade B) or plate (ASTM A285/A516) with uniform grain distribution.",
              "High weldability and ductility for high-speed automated pipe spool fabrication.",
              "Engineered for moderate and high-temperature pressure piping systems.",
              "Supplied in normalized, stress-relieved, or annealed condition."
            ],
            "applications": [
              "Cross-country oil & gas pipelines",
              "Power plant steam header loops",
              "Industrial boiler piping",
              "Chemical plant water injection mains",
              "District heating infrastructure"
            ],
            "specs": {
              "tensileStrength": "415 - 585 MPa (60 - 85 ksi)",
              "yieldStrength": "240 MPa (35 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 197",
              "heatTreatment": "Normalized or hot-formed above 620°C",
              "inspection": "EN 10204 3.1 / 100% Hydrostatic and NDT Testing"
            },
            "standards": [
              "ASME B16.9",
              "ASME B16.28",
              "ASTM A234",
              "MSS-SP-25"
            ],
            "image": "assets/Product Section/Manufacturer division/Forged Fittings/carbon.avif"
          },
          {
            "slug": "a516-gr70",
            "name": "A516 Gr. 70",
            "fullName": "ASTM A516 Grade 70 Pressure Vessel Plate",
            "designation": {
              "astm": "ASTM A516 / A516M Gr. 70",
              "asme": "ASME SA516 Gr. 70",
              "uns": "UNS K02700",
              "en": "1.0473 (P355GH)"
            },
            "description": "The standard boiler and pressure-vessel quality carbon steel plate material for circular blanks, dished heads, and vessel shells operating at ambient and lower temperatures.",
            "characteristics": [
              "Superior notch toughness and weldability with vacuum-degassed, fine-grain steel practice.",
              "High yield strength and resistance to lamellar tearing under transverse welded loads.",
              "Normalized for improved low-temperature impact properties (available with Charpy testing down to -46°C).",
              "Standard material for heavy industrial autoclaves and storage vessels."
            ],
            "applications": [
              "Pressure vessel shells and circular dished ends",
              "Heat exchanger tube sheets and circular blind covers",
              "Storage tank bottom and shell plates",
              "Heavy-wall welded vessel nozzles"
            ],
            "specs": {
              "tensileStrength": "485 - 620 MPa (70 - 90 ksi)",
              "yieldStrength": "260 MPa (38 ksi) minimum",
              "elongation": "21% minimum in 2 inches",
              "hardness": "HBW ≤ 187",
              "heatTreatment": "Normalized above 40 mm plate thickness",
              "inspection": "EN 10204 3.1 / Ultrasonic testing to ASTM A435 / A578"
            },
            "standards": [
              "ASTM A516",
              "ASME SA516",
              "ASME Section VIII Div 1 & 2"
            ],
            "image": "assets/Product Section/Manufacturer division/Forged Fittings/carbon.avif"
          }
        ],
        "image": "assets/Product Section/Manufacturer division/Forged Fittings/carbon.avif",
        "fallback": "assets/New Product img/pipe fittings/fittings-showcase.jpg"
      },
      {
        "slug": "alloy-steel",
        "name": "Alloy Steel",
        "number": "03",
        "description": "Chromium-molybdenum alloy steels engineered for elevated-temperature creep strength, hydrogen attack resistance, and severe power boiler and hydroprocessing service.",
        "applicableStandards": "ASTM A182, ASTM A234, ASTM A335, ASME B16.5, ASME B16.11",
        "pressureClasses": "Class 300#, 600#, 900#, 1500#, 2500#",
        "sizeRange": "1/2\" NB to 36\" NB",
        "grades": [
          {
            "slug": "f11",
            "name": "F11",
            "fullName": "ASTM A182 F11 (1.25% Cr - 0.5% Mo)",
            "designation": {
              "astm": "ASTM A182 F11 Class 2",
              "asme": "ASME SA182 F11",
              "uns": "UNS K11572",
              "en": "1.7335 (13CrMo4-5)"
            },
            "description": "Nominal 1.25% chromium, 0.5% molybdenum alloy steel engineered for high-temperature steam lines and refinery hydrocrackers operating up to 550°C.",
            "characteristics": [
              "High creep rupture strength and resistance to graphitization at elevated steam temperatures.",
              "Resistance to high-temperature hydrogen attack (HTHA) according to Nelson curve criteria.",
              "Supplied in normalized and tempered condition for structural microstructural stability.",
              "Standard alloy for thermal power plant main steam and hot reheat lines."
            ],
            "applications": [
              "Main steam headers in thermal power plants",
              "Hydrodesulfurization reactor piping",
              "Superheater piping and headers",
              "Refinery furnace transfer lines"
            ],
            "specs": {
              "tensileStrength": "485 MPa (70 ksi) minimum",
              "yieldStrength": "275 MPa (40 ksi) minimum",
              "elongation": "20% minimum in 2 inches",
              "hardness": "HBW 143 - 207",
              "heatTreatment": "Normalized at 900°C - 950°C and Tempered at 650°C minimum",
              "inspection": "EN 10204 3.1 / Hot tensile test verified"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.11",
              "ASTM A182",
              "API 941"
            ],
            "image": "assets/Product Section/Manufacturer division/Forged Fittings/alloy steel.jpg"
          },
          {
            "slug": "f22",
            "name": "F22",
            "fullName": "ASTM A182 F22 (2.25% Cr - 1.0% Mo)",
            "designation": {
              "astm": "ASTM A182 F22 Class 3",
              "asme": "ASME SA182 F22",
              "uns": "UNS K21590",
              "en": "1.7380 (10CrMo9-10)"
            },
            "description": "Nominal 2.25% chromium, 1.0% molybdenum alloy steel offering superior creep endurance, corrosion resistance to sulfur-bearing oil streams, and hydrogen resistance up to 600°C.",
            "characteristics": [
              "Elevated creep resistance and high allowable design stress under ASME Section I and VIII.",
              "Enhanced resistance to high-pressure hydrogen embrittlement in hydroprocessing units.",
              "Quenched and tempered or normalized and tempered for high fracture toughness.",
              "Specified for high-pressure catalytic cracking and supercritical boiler loops."
            ],
            "applications": [
              "Hydrocracker reactor nozzles and loop piping",
              "Supercritical boiler superheater headers",
              "Gasifier syngas transfer lines",
              "Petrochemical high-pressure steam headers"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "310 MPa (45 ksi) minimum",
              "elongation": "20% minimum in 2 inches",
              "hardness": "HBW 156 - 207",
              "heatTreatment": "Normalized at 900°C - 950°C and Tempered at 675°C minimum",
              "inspection": "EN 10204 3.1 / Ultrasonic and Magnetic Particle Inspection"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.9",
              "ASTM A182",
              "ASTM A335 Grade P22"
            ],
            "image": "assets/Product Section/Manufacturer division/Forged Fittings/alloy steel.jpg"
          },
          {
            "slug": "f91",
            "name": "F91",
            "fullName": "ASTM A182 F91 (9% Cr - 1% Mo - V - Nb)",
            "designation": {
              "astm": "ASTM A182 F91 Type 1",
              "asme": "ASME SA182 F91",
              "uns": "UNS K90901",
              "en": "1.4903 (X10CrMoVNb9-1)"
            },
            "description": "Advanced modified 9Cr-1Mo-V-Nb martensitic alloy steel engineered for supercritical and ultra-supercritical (USC) power stations operating up to 620°C with reduced wall thickness.",
            "characteristics": [
              "Twice the creep rupture strength of F22 at 600°C, enabling thinner component wall sections.",
              "Lower thermal stress and reduced cyclic thermal fatigue in high-efficiency power boilers.",
              "Requires tight control of heat treatment: normalizing at 1040°C–1080°C and tempering at 730°C–800°C.",
              "Strict compliance with hardness and microstructural martensite grain requirements."
            ],
            "applications": [
              "Ultra-supercritical power plant main steam lines",
              "Combined cycle gas turbine (CCGT) HRSG headers",
              "High-pressure steam bypass manifolds",
              "Nuclear power steam generator loops"
            ],
            "specs": {
              "tensileStrength": "585 - 760 MPa (85 - 110 ksi)",
              "yieldStrength": "415 MPa (60 ksi) minimum",
              "elongation": "20% minimum in 2 inches",
              "hardness": "HBW 190 - 248",
              "heatTreatment": "Normalized at 1050°C and Tempered at 750°C - 780°C",
              "inspection": "EN 10204 Type 3.1 / 100% Ultrasonic & Hardness verification"
            },
            "standards": [
              "ASME B16.5",
              "ASTM A182",
              "ASTM A335 Grade P91",
              "EPRI Guidelines"
            ],
            "image": "assets/Product Section/Manufacturer division/Forged Fittings/alloy steel.jpg"
          }
        ],
        "image": "assets/Product Section/Manufacturer division/Forged Fittings/alloy steel.jpg",
        "fallback": "assets/New Product img/pipe fittings/fittings-showcase.jpg"
      },
      {
        "slug": "duplex",
        "name": "Duplex & Super Duplex",
        "number": "04",
        "description": "Dual-phase austenitic-ferritic microstructures delivering yield strength roughly twice that of standard stainless steel combined with superior resistance to chloride stress corrosion cracking.",
        "applicableStandards": "ASTM A182, ASTM A240, ASTM A790, ASTM A815, ASME B16.5",
        "pressureClasses": "Class 150#, 300#, 600#, 900#, 1500#, 2500#",
        "sizeRange": "1/2\" NB to 36\" NB",
        "grades": [
          {
            "slug": "2205",
            "name": "2205",
            "fullName": "2205 Standard Duplex (UNS S31803 / S32205)",
            "designation": {
              "astm": "ASTM A182 F51 / F60",
              "asme": "ASME SA182 F51 / F60",
              "uns": "UNS S31803 / S32205",
              "en": "1.4462 (X2CrNiMoN22-5-3)"
            },
            "description": "The workhorse 22% chromium duplex stainless steel with approximately 50/50 ferrite-austenite phase balance, offering high yield strength and high chloride resistance (PREN 35).",
            "characteristics": [
              "Yield strength roughly twice that of austenitic 316L, allowing substantial weight reduction.",
              "High resistance to chloride stress corrosion cracking in sour environments.",
              "High resistance to erosion-corrosion and pitting in seawater and brackish cooling water.",
              "Temperature limit typically restricted to -50°C to +280°C to prevent 475°C embrittlement."
            ],
            "applications": [
              "Offshore oil & gas topside piping",
              "Chemical tanker cargo holds and piping",
              "Desalination high-pressure reverse osmosis headers",
              "Flue gas cleaning systems",
              "Biofuel processing digesters"
            ],
            "specs": {
              "tensileStrength": "655 MPa (95 ksi) minimum",
              "yieldStrength": "450 MPa (65 ksi) minimum",
              "elongation": "25% minimum in 2 inches",
              "hardness": "HBW ≤ 290 (HRC ≤ 28)",
              "heatTreatment": "Solution Annealed at 1020°C - 1100°C and rapidly water quenched",
              "inspection": "EN 10204 3.1 / Phase balance check (40-60% ferrite) / ASTM G48 Method A test"
            },
            "standards": [
              "ASME B16.5",
              "ASTM A182",
              "NORSK M-630 MDS D44",
              "NACE MR0175 / ISO 15156"
            ],
            "image": "assets/Product Section/Manufacturer division/Forged Fittings/duplex.jpg"
          },
          {
            "slug": "2507",
            "name": "2507",
            "fullName": "2507 Super Duplex (UNS S32750)",
            "designation": {
              "astm": "ASTM A182 F53",
              "asme": "ASME SA182 F53",
              "uns": "UNS S32750",
              "en": "1.4410 (X2CrNiMoN25-7-4)"
            },
            "description": "25% chromium super duplex stainless steel with 4% molybdenum and 0.28% nitrogen, providing exceptional pitting and crevice corrosion resistance with PREN ≥ 42.",
            "characteristics": [
              "PREN ≥ 42 guaranteeing immunity to pitting in high-temperature chlorinated seawater.",
              "Exceptionally high mechanical yield strength (≥ 550 MPa) for high-pressure subsea lines.",
              "Immune to chloride stress corrosion cracking in aggressive sour gas reservoirs.",
              "Manufactured strictly to NORSOK M-630 and NACE MR0175 compliance."
            ],
            "applications": [
              "Subsea manifolds, risers, and Christmas tree piping",
              "Seawater fire-water ring mains",
              "Offshore high-pressure sour gas export lines",
              "Geothermal high-chloride brine piping",
              "Chemical plants handling hot chlorinated media"
            ],
            "specs": {
              "tensileStrength": "750 MPa (109 ksi) minimum",
              "yieldStrength": "550 MPa (80 ksi) minimum",
              "elongation": "15% minimum in 2 inches",
              "hardness": "HBW ≤ 310 (HRC ≤ 32)",
              "heatTreatment": "Solution Annealed at 1050°C - 1125°C and water quenched",
              "inspection": "EN 10204 3.1 / Microstructure audit / ASTM G48 Method A test at 50°C"
            },
            "standards": [
              "ASME B16.5",
              "ASTM A182 F53",
              "NORSOK M-630 MDS D54",
              "ISO 15156"
            ],
            "image": "assets/Product Section/Manufacturer division/Forged Fittings/duplex.jpg"
          }
        ],
        "image": "assets/Product Section/Manufacturer division/Forged Fittings/duplex.jpg",
        "fallback": "assets/New Product img/pipe fittings/fittings-showcase.jpg"
      },
      {
        "slug": "high-alloy",
        "name": "High Alloy",
        "number": "05",
        "description": "Nickel-chromium-molybdenum superalloys engineered to withstand severe chemical environments, high temperatures, boiling mineral acids, and extreme mechanical stress.",
        "applicableStandards": "ASTM B564, ASTM B366, ASTM B622, ASME B16.5, ASME B16.11",
        "pressureClasses": "Class 150#, 300#, 600#, 900#, 1500#, 2500#",
        "sizeRange": "1/2\" NB to 24\" NB",
        "grades": [
          {
            "slug": "inconel-625",
            "name": "Inconel 625",
            "fullName": "Inconel 625 (UNS N06625)",
            "designation": {
              "astm": "ASTM B564 / B444",
              "asme": "ASME SB564",
              "uns": "UNS N06625",
              "en": "2.4856 (NiCr22Mo9Nb)"
            },
            "description": "Nickel-chromium-molybdenum alloy with niobium addition providing solid solution strengthening without heat treatment, resistant from cryogenic temperatures up to 980°C.",
            "characteristics": [
              "Virtually immune to chloride-induced stress corrosion cracking.",
              "Exceptional fatigue and thermal-fatigue strength in marine and aerospace environments.",
              "High resistance to a wide range of organic and inorganic acids, including wet chlorine.",
              "Certified for NACE sour service and nuclear reactor core piping."
            ],
            "applications": [
              "Marine exhaust scrubbers",
              "Subsea wellhead equipment",
              "Chemical waste disposal incinerator nozzles",
              "Nuclear reactor control rod drive piping",
              "Sour gas production downhole components"
            ],
            "specs": {
              "tensileStrength": "827 MPa (120 ksi) minimum",
              "yieldStrength": "414 MPa (60 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 220",
              "heatTreatment": "Annealed at 980°C - 1050°C",
              "inspection": "EN 10204 Type 3.1 / 100% Ultrasonic inspection"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B564",
              "NACE MR0175",
              "AMS 5666"
            ],
            "image": "assets/Product Section/Manufacturer division/Forged Fittings/high alloys.jpeg"
          },
          {
            "slug": "hastelloy-c276",
            "name": "Hastelloy C276",
            "fullName": "Hastelloy C276 (UNS N10276)",
            "designation": {
              "astm": "ASTM B564 / B575",
              "asme": "ASME SB564",
              "uns": "UNS N10276",
              "en": "2.4819 (NiMo16Cr15W)"
            },
            "description": "The universal corrosion-resistant nickel-molybdenum-chromium superalloy with tungsten, engineered to withstand aggressive wet chlorine gas, hypochlorite, and boiling mineral acids.",
            "characteristics": [
              "Unmatched resistance to localized pitting, crevice corrosion, and stress corrosion cracking.",
              "One of the few materials to withstand wet chlorine gas, hypochlorite, and chlorine dioxide solutions.",
              "Low carbon content minimizes carbide precipitation during welding, preserving as-welded corrosion resistance.",
              "Proven longevity in harsh chemical synthesis reactors."
            ],
            "applications": [
              "Flue gas desulfurization (FGD) scrubbers",
              "Sulfuric and hydrochloric acid synthesis plants",
              "Chlorination reaction systems",
              "Pharmaceutical active ingredient reactors",
              "Hazardous waste treatment vessels"
            ],
            "specs": {
              "tensileStrength": "690 MPa (100 ksi) minimum",
              "yieldStrength": "283 MPa (41 ksi) minimum",
              "elongation": "40% minimum in 2 inches",
              "hardness": "HBW ≤ 220",
              "heatTreatment": "Solution heat-treated at 1120°C and water quenched",
              "inspection": "EN 10204 Type 3.1 / Microstructure and ASTM G28 corrosion testing"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B564",
              "NACE MR0175 / ISO 15156"
            ],
            "image": "assets/Product Section/Manufacturer division/Forged Fittings/high alloys.jpeg"
          },
          {
            "slug": "monel-400",
            "name": "Monel 400",
            "fullName": "Monel 400 (UNS N04400)",
            "designation": {
              "astm": "ASTM B564 / B127",
              "asme": "ASME SB564",
              "uns": "UNS N04400",
              "en": "2.4360 (NiCu30Fe)"
            },
            "description": "Ductile nickel-copper alloy (67% Ni, 30% Cu) exhibiting exceptional resistance to rapidly flowing seawater, hydrofluoric acid, sulfuric acid, and high-temperature alkalies.",
            "characteristics": [
              "Standard engineering material for marine salt water immersion and splash zones.",
              "Exceptional resistance to hydrofluoric acid (HF) in all concentrations up to the boiling point.",
              "Resistant to non-oxidizing mineral acids and deaerated salt solutions.",
              "Non-magnetic down to room temperature with high impact toughness."
            ],
            "applications": [
              "Hydrofluoric acid alkylation units in oil refineries",
              "Marine propeller shafts and seawater valve trims",
              "Offshore splash-zone sheathing",
              "Chlorinated solvent recovery systems",
              "Salt plant brine evaporators"
            ],
            "specs": {
              "tensileStrength": "480 MPa (70 ksi) minimum",
              "yieldStrength": "195 MPa (28 ksi) minimum",
              "elongation": "35% minimum in 2 inches",
              "hardness": "HBW 110 - 150",
              "heatTreatment": "Annealed at 760°C - 900°C followed by water quench",
              "inspection": "EN 10204 3.1 / Ultrasonic and Dye Penetrant testing"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B564",
              "NACE MR0175",
              "MSS-SP-25"
            ],
            "image": "assets/Product Section/Manufacturer division/Forged Fittings/high alloys.jpeg"
          }
        ],
        "image": "assets/Product Section/Manufacturer division/Forged Fittings/high alloys.jpeg",
        "fallback": "assets/New Product img/pipe fittings/fittings-showcase.jpg"
      },
      {
        "slug": "nickel",
        "name": "Nickel",
        "number": "06",
        "description": "Commercially pure nickel alloys engineered for caustic soda evaporators, non-oxidizing halogen systems, and high-purity chemical processing.",
        "applicableStandards": "ASTM B564, ASTM B160, ASTM B162, ASME B16.5",
        "pressureClasses": "Class 150#, 300#, 600#",
        "sizeRange": "1/2\" NB to 24\" NB",
        "grades": [
          {
            "slug": "nickel-200",
            "name": "Nickel 200",
            "fullName": "Nickel 200 (UNS N02200)",
            "designation": {
              "astm": "ASTM B564 / B160",
              "asme": "ASME SB564",
              "uns": "UNS N02200",
              "en": "2.4066 (Ni99.2)"
            },
            "description": "Commercially pure (99.6%) wrought nickel providing exceptional thermal conductivity, electrical properties, and uncompromised resistance to hot caustic alkalies.",
            "characteristics": [
              "Immune to stress corrosion cracking in all concentrations of boiling caustic soda (NaOH).",
              "Excellent resistance to dry fluorine, chlorine, and hydrogen chloride gases.",
              "High thermal conductivity and low electrical resistivity for electrochemical electrodes.",
              "Maintains cryogenic mechanical ductility without ductile-to-brittle transition."
            ],
            "applications": [
              "Caustic soda production evaporators",
              "Synthetic fiber manufacturing equipment",
              "Chlorine and hydrogen chloride dry gas transfer",
              "Food and soap processing reaction vessels"
            ],
            "specs": {
              "tensileStrength": "380 MPa (55 ksi) minimum",
              "yieldStrength": "105 MPa (15 ksi) minimum",
              "elongation": "40% minimum in 2 inches",
              "hardness": "HBW ≤ 130",
              "heatTreatment": "Annealed at 700°C - 900°C",
              "inspection": "EN 10204 Type 3.1 MTC"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B564",
              "ASME Section VIII Div 1"
            ],
            "image": "assets/Product Section/Manufacturer division/Forged Fittings/nikle.jpeg"
          },
          {
            "slug": "nickel-201",
            "name": "Nickel 201",
            "fullName": "Nickel 201 (UNS N02201)",
            "designation": {
              "astm": "ASTM B564 / B160",
              "asme": "ASME SB564",
              "uns": "UNS N02201",
              "en": "2.4068 (LC-Ni99.2)"
            },
            "description": "Low-carbon version (C ≤ 0.02%) of Nickel 200 engineered to prevent graphitization and intergranular embrittlement during service above 315°C (600°F).",
            "characteristics": [
              "Certified for continuous service at temperatures exceeding 315°C (600°F) up to 650°C.",
              "Low carbon prevents intercrystalline graphite precipitation in caustic environments.",
              "Exceptional resistance to molten hydroxide and fused caustic salts.",
              "High ductility and ease of cold forming and orbital welding."
            ],
            "applications": [
              "High-temperature caustic concentration evaporators",
              "Vinyl chloride monomer (VCM) thermal reactors",
              "Fluorochemical reactors",
              "Molten salt nuclear heat transfer loops"
            ],
            "specs": {
              "tensileStrength": "345 MPa (50 ksi) minimum",
              "yieldStrength": "70 MPa (10 ksi) minimum",
              "elongation": "40% minimum in 2 inches",
              "hardness": "HBW ≤ 120",
              "heatTreatment": "Annealed at 700°C - 900°C",
              "inspection": "EN 10204 Type 3.1 MTC / Carbon verification"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B564",
              "DIN 17750"
            ],
            "image": "assets/Product Section/Manufacturer division/Forged Fittings/nikle.jpeg"
          }
        ],
        "image": "assets/Product Section/Manufacturer division/Forged Fittings/nikle.jpeg",
        "fallback": "assets/New Product img/pipe fittings/fittings-showcase.jpg"
      },
      {
        "slug": "titanium",
        "name": "Titanium",
        "number": "07",
        "description": "Lightweight, ultra-corrosion-resistant titanium alloys delivering total immunity to marine seawater, wet chlorine, and organic chlorides with extraordinary strength-to-weight ratios.",
        "applicableStandards": "ASTM B381, ASTM B348, ASTM B861, ASME B16.5",
        "pressureClasses": "Class 150#, 300#, 600#, 900#",
        "sizeRange": "1/2\" NB to 24\" NB",
        "grades": [
          {
            "slug": "grade-2",
            "name": "Grade 2",
            "fullName": "Titanium Grade 2 (UNS R50400)",
            "designation": {
              "astm": "ASTM B381 / B348 Gr. 2",
              "asme": "ASME SB381",
              "uns": "UNS R50400",
              "en": "3.7035 (Ti2)"
            },
            "description": "The workhorse commercially pure titanium grade offering the optimum balance of moderate strength, high ductility, excellent weldability, and total seawater corrosion resistance.",
            "characteristics": [
              "Forms a tenacious, self-healing titanium dioxide (TiO2) passive oxide film instantly upon exposure to oxygen.",
              "Complete immunity to marine microbiologically influenced corrosion (MIC) and crevice attack.",
              "Approximately 45% lighter than steel, significantly reducing topside platform loads.",
              "Certified biocompatible for medical and food-contact installations."
            ],
            "applications": [
              "Seawater desalination reverse osmosis and multi-stage flash units",
              "Offshore oil platform seawater cooling systems",
              "Chlor-alkali electrolytic cell anode connections",
              "Bleaching towers in pulp and paper mills"
            ],
            "specs": {
              "tensileStrength": "345 MPa (50 ksi) minimum",
              "yieldStrength": "275 MPa (40 ksi) minimum",
              "elongation": "20% minimum in 2 inches",
              "hardness": "HBW ≤ 200",
              "heatTreatment": "Stress Relieved at 500°C - 550°C",
              "inspection": "EN 10204 3.1 / Gas analysis (C, O, N, H) verified"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B381",
              "NACE MR0175 / ISO 15156"
            ],
            "image": "assets/Product Section/Manufacturer division/Forged Fittings/titainium.jpg"
          },
          {
            "slug": "grade-5",
            "name": "Grade 5",
            "fullName": "Titanium Grade 5 (Ti-6Al-4V / UNS R56400)",
            "designation": {
              "astm": "ASTM B381 / B348 Gr. 5",
              "asme": "ASME SB381",
              "uns": "UNS R56400",
              "en": "3.7165 (Ti6Al4V)"
            },
            "description": "Alpha-beta titanium alloy containing 6% aluminum and 4% vanadium, delivering twice the mechanical tensile strength of commercially pure grades with high fatigue endurance.",
            "characteristics": [
              "Tensile strength exceeding 895 MPa (130 ksi) with low density of 4.43 g/cm³.",
              "Exceptional strength-to-weight ratio for aerospace and subsea structural bolting.",
              "Maintains mechanical properties up to 400°C while resisting high-velocity seawater erosion.",
              "Heat treatable by solution treating and aging (STA)."
            ],
            "applications": [
              "Subsea high-pressure wellhead riser bolts",
              "Aerospace hydraulic fluid connections",
              "High-speed marine hydrofoil fasteners",
              "Deepwater oceanographic exploration casings"
            ],
            "specs": {
              "tensileStrength": "895 MPa (130 ksi) minimum",
              "yieldStrength": "828 MPa (120 ksi) minimum",
              "elongation": "10% minimum in 2 inches",
              "hardness": "HRC 30 - 36",
              "heatTreatment": "Mill Annealed at 700°C - 785°C and air cooled",
              "inspection": "EN 10204 Type 3.1 MTC / Ultrasonic testing"
            },
            "standards": [
              "ASTM B381",
              "ASME B16.5",
              "AMS 4928",
              "NACE MR0175"
            ],
            "image": "assets/Product Section/Manufacturer division/Forged Fittings/titainium.jpg"
          }
        ],
        "image": "assets/Product Section/Manufacturer division/Forged Fittings/titainium.jpg",
        "fallback": "assets/New Product img/pipe fittings/fittings-showcase.jpg"
      },
      {
        "slug": "copper",
        "name": "Copper",
        "number": "08",
        "description": "Copper-nickel alloys, brasses, and pure copper engineered for high thermal/electrical conductivity, natural marine biofouling resistance, and naval piping circuits.",
        "applicableStandards": "ASTM B151, ASTM B171, ASTM B466, ASME B16.5, DIN 86019",
        "pressureClasses": "Class 150#, 300#, DIN PN10 - PN16",
        "sizeRange": "1/2\" NB to 24\" NB",
        "grades": [
          {
            "slug": "cu-ni-90-10",
            "name": "Cu-Ni 90/10",
            "fullName": "Copper-Nickel 90/10 (C70600)",
            "designation": {
              "astm": "ASTM B151 / B171 C70600",
              "asme": "ASME SB151 C70600",
              "uns": "UNS C70600",
              "en": "2.0872 (CuNi10Fe1Mn)"
            },
            "description": "90% copper, 10% nickel alloy formulated with controlled iron and manganese additions, delivering natural resistance to marine biofouling and seawater impingement erosion.",
            "characteristics": [
              "Natural antimicrobial and macro-fouling resistance; eliminates marine barnacle growth.",
              "High thermal conductivity for marine condensers and heat exchanger tubing.",
              "Resistant to stress corrosion cracking in high-salinity seawater.",
              "Readily brazeable and weldable by TIG and MIG processes."
            ],
            "applications": [
              "Naval warship seawater cooling mains",
              "Offshore platform firewater ring mains",
              "Commercial shipbuilding ballast piping",
              "Desalination multi-stage flash heat recovery tubes"
            ],
            "specs": {
              "tensileStrength": "310 MPa (45 ksi) minimum",
              "yieldStrength": "125 MPa (18 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW 70 - 100",
              "heatTreatment": "Annealed at 600°C - 750°C",
              "inspection": "EN 10204 Type 3.1 MTC / Eddy current inspection"
            },
            "standards": [
              "ASME B16.5",
              "EEMUA 145 / 234",
              "DIN 86019",
              "MIL-C-15726"
            ],
            "image": "assets/New Product img/pipe fittings/copper-nickel-pipe-fittings.jpg"
          },
          {
            "slug": "cu-ni-70-30",
            "name": "Cu-Ni 70/30",
            "fullName": "Copper-Nickel 70/30 (C71500)",
            "designation": {
              "astm": "ASTM B151 / B171 C71500",
              "asme": "ASME SB151 C71500",
              "uns": "UNS C71500",
              "en": "2.0882 (CuNi30Mn1Fe)"
            },
            "description": "70% copper, 30% nickel alloy engineered for higher seawater velocity tolerances (up to 4.5 m/s) and severe naval service where high impingement resistance is mandatory.",
            "characteristics": [
              "Permissible seawater flow velocity up to 4.5 m/s without protective film breakdown.",
              "Superior resistance to hydrogen embrittlement and sulfide stress cracking.",
              "Enhanced mechanical strength compared to 90/10 grade.",
              "Standard naval submarine and destroyer condenser specification."
            ],
            "applications": [
              "Submarine seawater intake systems",
              "High-velocity naval auxiliary condenser piping",
              "Offshore oil rig cooling manifolds",
              "Desalination brine heater bundles"
            ],
            "specs": {
              "tensileStrength": "380 MPa (55 ksi) minimum",
              "yieldStrength": "140 MPa (20 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW 80 - 120",
              "heatTreatment": "Annealed at 650°C - 800°C",
              "inspection": "EN 10204 Type 3.1 MTC / Hydrostatic verification"
            },
            "standards": [
              "ASME B16.5",
              "EEMUA 145 / 234",
              "DIN 86019",
              "MIL-C-15726"
            ],
            "image": "assets/New Product img/pipe fittings/copper-nickel-pipe-fittings.jpg"
          }
        ],
        "image": "assets/New Product img/pipe fittings/copper-nickel-pipe-fittings.jpg",
        "fallback": "assets/New Product img/pipe fittings/fittings-showcase.jpg"
      },
      {
        "slug": "aluminium",
        "name": "Aluminium",
        "number": "09",
        "description": "High-strength wrought and extruded aluminium alloys delivering lightweight structural capability, high thermal dissipation, and cryogenic ductility for aerospace and marine service.",
        "applicableStandards": "ASTM B221, ASTM B241, ASTM B209, ASME B16.5",
        "pressureClasses": "Class 150#, PN10, PN16",
        "sizeRange": "1/2\" NB to 24\" NB",
        "grades": [
          {
            "slug": "6061-t6",
            "name": "6061-T6",
            "fullName": "6061-T6 Structural Aluminium",
            "designation": {
              "astm": "ASTM B221 / B241 Gr. 6061",
              "asme": "ASME SB221",
              "uns": "UNS A96061",
              "en": "3.3211 (AlMg1SiCu)"
            },
            "description": "Precipitation-hardened magnesium-silicon alloy delivering high structural yield strength, excellent CNC machinability, and clean surface anodizing characteristics.",
            "characteristics": [
              "High strength-to-weight ratio with density of only 2.70 g/cm³.",
              "Excellent atmospheric corrosion resistance in industrial environments.",
              "Readily machinable to tight geometric tolerances on multi-axis CNC machines.",
              "Excellent TIG/MIG weldability using 4043 or 5356 filler wires."
            ],
            "applications": [
              "Aerospace fuel and hydraulic fluid lines",
              "Cryogenic air separation plant piping",
              "Automotive racing fluid manifolds",
              "Precision robotic automation frames"
            ],
            "specs": {
              "tensileStrength": "290 MPa (42 ksi) minimum",
              "yieldStrength": "240 MPa (35 ksi) minimum",
              "elongation": "8% - 10% in 2 inches",
              "hardness": "HBW ~ 95",
              "heatTreatment": "Solution heat-treated and artificially aged (T6 temper)",
              "inspection": "EN 10204 Type 3.1 MTC / Conductivity check"
            },
            "standards": [
              "ASTM B221",
              "ASTM B241",
              "AMS 4027",
              "ASME B16.5"
            ],
            "image": "assets/Product Section/Manufacturer division/Forged Fittings/super duplex.jpeg"
          },
          {
            "slug": "5083-h116",
            "name": "5083-H116",
            "fullName": "5083-H116 Marine Aluminium",
            "designation": {
              "astm": "ASTM B209 / B221 Gr. 5083",
              "asme": "ASME SB209",
              "uns": "UNS A95083",
              "en": "3.3547 (AlMg4.5Mn0.7)"
            },
            "description": "High-magnesium marine alloy engineered specifically for exceptional corrosion resistance in seawater and cryogenic storage tanks down to -269°C without embrittlement.",
            "characteristics": [
              "The premier structural aluminium alloy for saltwater immersion.",
              "Maintains exceptional ductility and toughness at cryogenic temperatures down to liquid helium (-269°C).",
              "High weld joint efficiency without requiring post-weld solution treatment.",
              "Certified by DNV, Lloyd's Register, and ABS for marine construction."
            ],
            "applications": [
              "LNG/LPG cryogenic cargo tank piping",
              "High-speed marine ferry hull piping",
              "Naval radar mast structural flanges",
              "Chemical rail tanker vessels"
            ],
            "specs": {
              "tensileStrength": "305 MPa (44 ksi) minimum",
              "yieldStrength": "215 MPa (31 ksi) minimum",
              "elongation": "10% minimum in 2 inches",
              "hardness": "HBW ~ 85",
              "heatTreatment": "Strain-hardened and stabilized (H116 temper) for intergranular corrosion resistance",
              "inspection": "EN 10204 3.1 / Nitric Acid Mass Loss Test (NAMLT) to ASTM G67"
            },
            "standards": [
              "ASTM B209",
              "ASTM B221",
              "DNV-GL Marine Rules",
              "ASME Section VIII"
            ],
            "image": "assets/Product Section/Manufacturer division/Forged Fittings/super duplex.jpeg"
          }
        ],
        "image": "assets/Product Section/Manufacturer division/Forged Fittings/super duplex.jpeg",
        "fallback": "assets/New Product img/pipe fittings/fittings-showcase.jpg"
      }
    ]
  },
  {
    "slug": "butt-weld-fittings",
    "name": "Butt Weld Fittings",
    "title": "BUTT WELD FITTINGS",
    "suffix": "Butt Weld Fittings",
    "eyebrow": "ASME B16.9 / MSS-SP-43 SEAMLESS & WELDED",
    "heroImage": "assets/hero-products/buttweld-fittings-hero.png",
    "heroTag": "ASME B16.9 SEAMLESS BUTT WELD FITTINGS",
    "description": "Manufactured from seamless and welded pipe stock using hot-mandrel forming, cold-pressing, and hydraulic sizing, Apollo butt weld fittings ensure smooth internal flow transitions with zero turbulent recirculation.",
    "overview": {
      "lead": "Butt weld fittings are welded directly to the beveled ends of pipe to allow directional changes, diameter reductions, and branch flow in large-diameter, high-pressure piping systems.",
      "highlights": [
        {
          "title": "Laminar Flow",
          "desc": "Long radius curvature minimizes pressure drop and internal friction loss across high-velocity piping circuits."
        },
        {
          "title": "Beveled Ends",
          "desc": "Precision beveled to ASME B16.25 standards (37.5° ± 2.5° with 1.6 mm land) for automated orbital or manual TIG/MIG welding."
        },
        {
          "title": "100% Radiography",
          "desc": "Welded joints on fittings are fully radiographed and ultrasonic-inspected to ASME Section VIII / IX requirements."
        },
        {
          "title": "Standards Compliance",
          "desc": "Fully compliant with ASME B16.9, ASME B16.28, MSS-SP-43, and DIN / EN specifications."
        }
      ]
    },
    "hasTypes": true,
    "types": [
      {
        "slug": "90-deg-lr-elbow",
        "name": "90° Long Radius Elbow",
        "shortName": "90° LR Elbow",
        "image": "assets/grades images/buttweld fitting/SS buttweld/SS 304 - 304L BUTTWELD FITTINGS.jpeg",
        "description": "Center-to-face dimension equals 1.5 times the nominal pipe diameter (1.5D), delivering optimal hydraulic flow with low pressure drop.",
        "design": "Hot-mandrel expanded seamless elbow with beveled weld ends.",
        "function": "Primary directional change fitting in high-velocity process piping.",
        "facing": "ASME B16.25 Beveled ends.",
        "standards": "ASME B16.9, DIN 2605",
        "sizes": "1/2\" NB to 36\" NB",
        "pressureClasses": "Schedules 10, 20, 40, STD, 80, XS, 160, XXS",
        "materialsSupported": [
          "stainless-steel",
          "carbon-steel",
          "alloy-steel",
          "duplex",
          "high-alloy",
          "nickel",
          "titanium",
          "copper",
          "aluminium"
        ]
      },
      {
        "slug": "equal-tee",
        "name": "Equal Tee & Reducing Tee",
        "shortName": "Tee",
        "image": "assets/our product new images/buttweld fittings.png",
        "description": "Provides a 90-degree branch intersection from the main run pipe with uniform or reduced branch diameter.",
        "design": "Hydraulically bulged or hot-forged tee with smooth crotch radius.",
        "function": "Splitting or combining fluid streams in process loops.",
        "facing": "Beveled ends.",
        "standards": "ASME B16.9",
        "sizes": "1/2\" NB to 36\" NB",
        "pressureClasses": "All Standard Schedule Wall Thicknesses",
        "materialsSupported": [
          "stainless-steel",
          "carbon-steel",
          "alloy-steel",
          "duplex",
          "high-alloy"
        ]
      },
      {
        "slug": "concentric-reducer",
        "name": "Concentric & Eccentric Reducer",
        "shortName": "Reducer",
        "image": "assets/our product new images/buttweld fittings.png",
        "description": "Transitions line diameter inline along the center axis (concentric) or maintains a flat bottom line to prevent cavitation (eccentric).",
        "design": "Tapered conical transition formed with continuous wall thickness.",
        "function": "Inline pipe size transitions at pump suction/discharge and control valve stations.",
        "facing": "Beveled ends.",
        "standards": "ASME B16.9",
        "sizes": "3/4\" x 1/2\" up to 36\" x 24\" NB",
        "pressureClasses": "All Standard Schedule Wall Thicknesses",
        "materialsSupported": [
          "stainless-steel",
          "carbon-steel",
          "alloy-steel",
          "duplex",
          "high-alloy"
        ]
      },
      {
        "slug": "pipe-cap",
        "name": "Ellipsoidal Pipe Cap",
        "shortName": "End Cap",
        "image": "assets/grades images/buttweld fitting/carbon buttweld/astm a234 gr wpb.jpeg",
        "description": "Semi-ellipsoidal domed fitting designed to cap and permanently seal the open end of a butt-welded piping circuit.",
        "design": "Deep-drawn ellipsoidal head with straight cylindrical flange skirt.",
        "function": "Permanent line closure on dead-end headers and manifold headers.",
        "facing": "Beveled weld end.",
        "standards": "ASME B16.9, DIN 2617",
        "sizes": "1/2\" NB to 36\" NB",
        "pressureClasses": "All Standard Schedule Wall Thicknesses",
        "materialsSupported": [
          "stainless-steel",
          "carbon-steel",
          "alloy-steel",
          "duplex",
          "high-alloy"
        ]
      }
    ],
    "materials": [
      {
        "slug": "stainless-steel",
        "name": "Stainless Steel",
        "number": "01",
        "description": "Austenitic and martensitic stainless steels offering superior resistance to chemical attack, pitting, and high-temperature scaling across process industries.",
        "applicableStandards": "ASTM A182, ASTM A240, ASTM A312, ASTM A403, ASME B16.5",
        "pressureClasses": "Class 150#, 300#, 600#, 900#, 1500#, 2500#",
        "sizeRange": "1/2\" NB to 60\" NB (DN15 to DN1500)",
        "grades": [
          {
            "slug": "304",
            "name": "304",
            "fullName": "304 Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S30400",
              "en": "1.4301 (X5CrNi18-10)"
            },
            "description": "The classic 18/8 austenitic stainless steel delivering dependable general corrosion resistance, excellent formability, and cryogenic impact toughness.",
            "characteristics": [
              "Excellent atmospheric and chemical corrosion resistance in organic and mildly oxidizing acids.",
              "Retains high impact toughness from cryogenic temperatures (-196°C) up to 800°C.",
              "Readily weldable by all standard commercial fusion methods without requiring preheat.",
              "Non-magnetic in the solution-annealed condition with moderate work hardening rate."
            ],
            "applications": [
              "Chemical processing manifolds",
              "Food, dairy & beverage piping",
              "Petrochemical low-temperature loops",
              "Cryogenic storage vessel nozzles",
              "Architectural structural piping"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "205 MPa (30 ksi) minimum",
              "elongation": "40% minimum in 2 inches",
              "hardness": "HBW ≤ 201 (HRB ≤ 92)",
              "heatTreatment": "Solution Annealed at 1040°C - 1120°C followed by rapid water quench",
              "inspection": "EN 10204 Type 3.1 MTC with complete chemical and mechanical test results"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.47",
              "ASTM A182",
              "ASME SA182",
              "MSS-SP-43",
              "NACE MR0175 (annealed)"
            ],
            "image": "assets/Product Section/Manufacturer division/Butt weld fit/stainless steel.jpg"
          },
          {
            "slug": "304l",
            "name": "304L",
            "fullName": "304L Low-Carbon Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S30403",
              "en": "1.4307 (X2CrNi18-9)"
            },
            "description": "Extra-low carbon modification (C ≤ 0.030%) that eliminates chromium carbide precipitation during welding, providing immunity to intergranular corrosion in as-welded assemblies.",
            "characteristics": [
              "Immunity to sensitization and intergranular attack in heat-affected zones (HAZ) of welded components.",
              "Eliminates the mandatory requirement for post-weld solution annealing.",
              "Maintains cryogenic mechanical ductility down to liquid nitrogen temperatures (-196°C).",
              "Compatible with dual-certified 304/304L pressure vessel specifications."
            ],
            "applications": [
              "Heavy-wall welded piping systems",
              "Wet chemical processing lines",
              "Refinery flare header lines",
              "Marine deck piping systems",
              "Pulp and paper bleaching equipment"
            ],
            "specs": {
              "tensileStrength": "485 MPa (70 ksi) minimum",
              "yieldStrength": "170 MPa (25 ksi) minimum",
              "elongation": "40% minimum in 2 inches",
              "hardness": "HBW ≤ 201",
              "heatTreatment": "Solution Annealed at 1040°C - 1100°C and water quenched",
              "inspection": "EN 10204 Type 3.1 MTC / NACE MR0175 compliant"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.9",
              "ASTM A182",
              "ASTM A403",
              "ASME Section VIII Div 1"
            ],
            "image": "assets/Product Section/Manufacturer division/Butt weld fit/stainless steel.jpg"
          },
          {
            "slug": "316",
            "name": "316",
            "fullName": "316 Molybdenum-Bearing Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S31600",
              "en": "1.4401 (X5CrNiMo17-12-2)"
            },
            "description": "Formulated with 2.0% to 3.0% molybdenum to significantly improve localized resistance to pitting and crevice corrosion in chloride and halide-bearing environments.",
            "characteristics": [
              "Significantly higher pitting resistance equivalent (PREN ~ 23-25) compared to 304.",
              "Superior resistance to sulfuric, phosphoric, acetic, and tartaric acid solutions.",
              "Elevated creep rupture strength at elevated operating temperatures up to 870°C.",
              "Standard specification for marine atmospheres, offshore platforms, and coastal chemical plants."
            ],
            "applications": [
              "Offshore oil & gas production manifolds",
              "Marine seawater cooling circuits",
              "Pharmaceutical reaction vessels",
              "Petrochemical acid-wash scrubbers",
              "Fertilizer production piping"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "205 MPa (30 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 217",
              "heatTreatment": "Solution Annealed at 1040°C - 1150°C and rapidly quenched",
              "inspection": "EN 10204 3.1 / PMI / Ultrasonic Inspection to ASTM A388"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.47",
              "ASTM A182",
              "ASTM A312",
              "NACE MR0175 / ISO 15156"
            ],
            "image": "assets/Product Section/Manufacturer division/Butt weld fit/stainless steel.jpg"
          },
          {
            "slug": "316l",
            "name": "316L",
            "fullName": "316L Low-Carbon Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S31603",
              "en": "1.4404 (X2CrNiMo17-12-2)"
            },
            "description": "Low-carbon molybdenum alloy combining superior chloride pitting resistance with complete protection against intergranular carbide precipitation in critical welded joints.",
            "characteristics": [
              "Carbon restricted to 0.030% max, preventing grain boundary sensitization during field welding.",
              "Exceptional resistance to localized pitting in marine and brackish water piping systems.",
              "Widely accepted in sour service under NACE MR0175 / ISO 15156 standards.",
              "Clean interior surface finish capability suitable for sanitary and high-purity applications."
            ],
            "applications": [
              "Subsea umbilical and manifold piping",
              "Chemical tanker cargo lines",
              "Pharmaceutical clean-in-place (CIP) loops",
              "Desalination plant brine piping",
              "Sour hydrocarbon gas handling"
            ],
            "specs": {
              "tensileStrength": "485 MPa (70 ksi) minimum",
              "yieldStrength": "170 MPa (25 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 217",
              "heatTreatment": "Solution Annealed at 1040°C - 1120°C and water quenched",
              "inspection": "EN 10204 Type 3.1 MTC / NACE MR0175 / MR0103"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.11",
              "ASTM A182",
              "ASTM A403",
              "ASME BPE"
            ],
            "image": "assets/Product Section/Manufacturer division/Butt weld fit/stainless steel.jpg"
          },
          {
            "slug": "321",
            "name": "321",
            "fullName": "321 Titanium-Stabilized Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S32100",
              "en": "1.4541 (X6CrNiTi18-10)"
            },
            "description": "Stabilized with titanium (Ti ≥ 5x C) to tie up carbon as titanium carbides, preventing sensitization during prolonged service in the critical 427°C to 816°C temperature range.",
            "characteristics": [
              "Complete immunity to intergranular corrosion during continuous high-temperature service.",
              "Superior creep and stress-rupture properties compared to standard 304/304L.",
              "Resists polythionic acid stress corrosion cracking during refinery shutdown cycles.",
              "Standard choice for aircraft exhaust systems and refinery thermal crackers."
            ],
            "applications": [
              "Refinery thermal cracker piping",
              "Catalytic reformer units",
              "High-temperature steam boiler bypass lines",
              "Aircraft engine exhaust manifolds",
              "Chemical furnace tube connections"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "205 MPa (30 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 217",
              "heatTreatment": "Solution Annealed at 1000°C - 1100°C followed by stabilization heat treatment at 850°C - 900°C",
              "inspection": "EN 10204 3.1 / Intergranular Corrosion Test to ASTM A262 Practice E"
            },
            "standards": [
              "ASME B16.5",
              "ASTM A182",
              "ASME SA182",
              "API 530"
            ],
            "image": "assets/Product Section/Manufacturer division/Butt weld fit/stainless steel.jpg"
          },
          {
            "slug": "347",
            "name": "347",
            "fullName": "347 Niobium-Stabilized Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S34700",
              "en": "1.4550 (X6CrNiNb18-10)"
            },
            "description": "Stabilized with niobium/columbium (Nb ≥ 10x C) providing enhanced creep resistance and intergranular corrosion resistance at severe temperatures up to 870°C.",
            "characteristics": [
              "High creep strength and stress rupture resistance in heavy wall forged components.",
              "Resistant to polythionic acid stress cracking in hydrocracking and hydrotreating units.",
              "Superior fatigue strength under extreme thermal shock cycling.",
              "Certified for nuclear and supercritical power generation piping."
            ],
            "applications": [
              "Hydroprocessing and hydrodesulfurization units",
              "Supercritical power boiler piping",
              "Radiant superheater tube headers",
              "High-temperature radioactive waste handling",
              "Gas turbine exhaust nozzles"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "205 MPa (30 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 217",
              "heatTreatment": "Solution Annealed at 1040°C - 1150°C and water quenched",
              "inspection": "EN 10204 Type 3.1 with ASTM A262 Practice E IGC certification"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.9",
              "ASTM A182",
              "ASME Section III Class 1"
            ],
            "image": "assets/Product Section/Manufacturer division/Butt weld fit/stainless steel.jpg"
          },
          {
            "slug": "310s",
            "name": "310S",
            "fullName": "310S High-Temperature Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S31008",
              "en": "1.4845 (X8CrNi25-21)"
            },
            "description": "High-alloy austenitic stainless steel formulated with 25% chromium and 20% nickel for exceptional resistance to high-temperature oxidation and sulfidation up to 1150°C.",
            "characteristics": [
              "Continuous oxidation resistance in air up to 1150°C (2100°F) under cyclic thermal conditions.",
              "Resistant to carburization in moderately carburizing petrochemical atmospheres.",
              "Maintains high ductile toughness and structural stability at elevated temperatures.",
              "Low magnetic permeability and high thermal creep endurance."
            ],
            "applications": [
              "Thermal incinerator burner piping",
              "Fluidized bed coal combustors",
              "Cement rotary kiln exhaust nozzles",
              "Petrochemical pyrolysis furnaces",
              "Heat treatment furnace fixtures"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "205 MPa (30 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 217",
              "heatTreatment": "Solution Annealed at 1040°C - 1150°C followed by rapid air or water cooling",
              "inspection": "EN 10204 3.1 MTC / High-temperature mechanical testing"
            },
            "standards": [
              "ASME B16.5",
              "ASTM A182",
              "ASTM A312",
              "ASME Section VIII Div 1"
            ],
            "image": "assets/Product Section/Manufacturer division/Butt weld fit/stainless steel.jpg"
          },
          {
            "slug": "904l",
            "name": "904L",
            "fullName": "904L Super Austenitic Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS N08904",
              "en": "1.4539 (X1NiCrMoCu25-20-5)"
            },
            "description": "High-alloy super-austenitic stainless steel formulated with 4.5% molybdenum and 1.5% copper, specifically developed to withstand aggressive sulfuric and phosphoric acids.",
            "characteristics": [
              "High PREN (≥ 34), offering extraordinary resistance to warm seawater pitting.",
              "Added copper content provides outstanding resistance to concentrated sulfuric acid across all concentration ranges.",
              "Immune to chloride-induced stress corrosion cracking up to 60°C.",
              "Fully austenitic structure provides high ductility and ease of welding."
            ],
            "applications": [
              "Sulfuric acid manufacturing pipelines",
              "Phosphate fertilizer production units",
              "Flue gas desulfurization (FGD) scrubbers",
              "Seawater reverse osmosis piping",
              "Pulp mill bleaching towers"
            ],
            "specs": {
              "tensileStrength": "490 MPa (71 ksi) minimum",
              "yieldStrength": "220 MPa (32 ksi) minimum",
              "elongation": "35% minimum in 2 inches",
              "hardness": "HBW ≤ 217 (HRB ≤ 95)",
              "heatTreatment": "Solution Annealed at 1090°C - 1150°C followed by rapid water quench",
              "inspection": "EN 10204 Type 3.1 MTC with ASTM G48 pitting test verification"
            },
            "standards": [
              "ASTM A182",
              "ASME B16.5",
              "ASTM B625",
              "NACE MR0175"
            ],
            "image": "assets/Product Section/Manufacturer division/Butt weld fit/stainless steel.jpg"
          }
        ],
        "image": "assets/hero-products/buttweld-fittings-hero.png",
        "fallback": "assets/our product new images/buttweld fittings.png"
      },
      {
        "slug": "carbon-steel",
        "name": "Carbon Steel",
        "number": "02",
        "description": "Forged and plate-formed carbon steels engineered for structural strength, high pressure containment, and reliable impact ductility in utility and industrial piping.",
        "applicableStandards": "ASTM A105, ASTM A350 LF2, ASTM A106, ASTM A234 WPB, ASME B16.5",
        "pressureClasses": "Class 150#, 300#, 600#, 900#, 1500#, 2500#",
        "sizeRange": "1/2\" NB to 60\" NB",
        "grades": [
          {
            "slug": "a105",
            "name": "A105",
            "fullName": "ASTM A105 Forged Carbon Steel",
            "designation": {
              "astm": "ASTM A105 / A105N",
              "asme": "ASME SA105",
              "uns": "UNS K03504",
              "en": "1.0460 (C22.8 / P250GH)"
            },
            "description": "The premier forged carbon steel specification for ambient and elevated-temperature piping components, flanges, fittings, and valves.",
            "characteristics": [
              "Excellent machinability and weldability with balanced carbon-manganese metallurgy.",
              "Supplied in normalized (A105N) heat-treated condition for fine grain size and optimal Charpy V-notch toughness.",
              "High proof pressure containment for petroleum refineries, power stations, and steam pipelines.",
              "Fully qualified under ASME Section VIII and ASME B31.3 piping codes."
            ],
            "applications": [
              "Refinery steam and hydrocarbon lines",
              "Boiler feed water piping",
              "Natural gas transmission stations",
              "District heating networks",
              "General industrial utility piping"
            ],
            "specs": {
              "tensileStrength": "485 MPa (70 ksi) minimum",
              "yieldStrength": "250 MPa (36 ksi) minimum",
              "elongation": "22% minimum in 2 inches",
              "hardness": "HBW 137 - 187",
              "heatTreatment": "Normalized at 880°C - 920°C and air cooled",
              "inspection": "EN 10204 Type 3.1 MTC / 100% NDT inspection"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.11",
              "ASTM A105",
              "MSS-SP-79",
              "NACE MR0175 (normalized)"
            ],
            "image": "assets/Product Section/Manufacturer division/Butt weld fit/carbon.jpg"
          },
          {
            "slug": "a350-lf2",
            "name": "A350 LF2",
            "fullName": "ASTM A350 LF2 Low-Temperature Carbon Steel",
            "designation": {
              "astm": "ASTM A350 LF2 Class 1",
              "asme": "ASME SA350 LF2",
              "uns": "UNS K03011",
              "en": "1.0566 (TStE 355)"
            },
            "description": "Forged carbon and low-alloy steel specifically treated for notched-bar toughness in low-temperature piping systems down to -46°C (-50°F).",
            "characteristics": [
              "Guaranteed Charpy V-notch impact toughness of 20 Joules (15 ft-lbs) minimum at -46°C (-50°F).",
              "Fine-grained, fully killed steel heat treated by normalizing and tempering or quenching and tempering.",
              "Mandatory for Arctic pipelines, cold gas transmission, and LPG/LNG cryogenic utility lines.",
              "Fully compliant with NACE MR0175 hardness limits (≤ 22 HRC)."
            ],
            "applications": [
              "Arctic oil and gas extraction lines",
              "LPG/LNG transport and storage terminals",
              "Refrigeration compressor piping",
              "Subsea cold-water export lines",
              "Cryogenic gas processing facilities"
            ],
            "specs": {
              "tensileStrength": "485 - 655 MPa (70 - 95 ksi)",
              "yieldStrength": "250 MPa (36 ksi) minimum",
              "elongation": "22% minimum in 2 inches",
              "hardness": "HBW ≤ 197 (HRC ≤ 22)",
              "heatTreatment": "Normalized at 900°C and Tempered at 600°C",
              "inspection": "EN 10204 3.1 / Charpy V-Notch Impact Test at -46°C"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.11",
              "ASTM A350",
              "NACE MR0175 / ISO 15156"
            ],
            "image": "assets/Product Section/Manufacturer division/Butt weld fit/carbon.jpg"
          },
          {
            "slug": "a234-wpb",
            "name": "A234 WPB",
            "fullName": "ASTM A234 WPB Wrought Carbon Steel",
            "designation": {
              "astm": "ASTM A234 Grade WPB",
              "asme": "ASME SA234 WPB",
              "uns": "UNS K03006",
              "en": "1.0488 (P275NH)"
            },
            "description": "The standard wrought carbon steel material specification for seamless and welded butt weld elbows, tees, reducers, and pipe caps.",
            "characteristics": [
              "Formed from seamless pipe (ASTM A106 Grade B) or plate (ASTM A285/A516) with uniform grain distribution.",
              "High weldability and ductility for high-speed automated pipe spool fabrication.",
              "Engineered for moderate and high-temperature pressure piping systems.",
              "Supplied in normalized, stress-relieved, or annealed condition."
            ],
            "applications": [
              "Cross-country oil & gas pipelines",
              "Power plant steam header loops",
              "Industrial boiler piping",
              "Chemical plant water injection mains",
              "District heating infrastructure"
            ],
            "specs": {
              "tensileStrength": "415 - 585 MPa (60 - 85 ksi)",
              "yieldStrength": "240 MPa (35 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 197",
              "heatTreatment": "Normalized or hot-formed above 620°C",
              "inspection": "EN 10204 3.1 / 100% Hydrostatic and NDT Testing"
            },
            "standards": [
              "ASME B16.9",
              "ASME B16.28",
              "ASTM A234",
              "MSS-SP-25"
            ],
            "image": "assets/Product Section/Manufacturer division/Butt weld fit/carbon.jpg"
          },
          {
            "slug": "a516-gr70",
            "name": "A516 Gr. 70",
            "fullName": "ASTM A516 Grade 70 Pressure Vessel Plate",
            "designation": {
              "astm": "ASTM A516 / A516M Gr. 70",
              "asme": "ASME SA516 Gr. 70",
              "uns": "UNS K02700",
              "en": "1.0473 (P355GH)"
            },
            "description": "The standard boiler and pressure-vessel quality carbon steel plate material for circular blanks, dished heads, and vessel shells operating at ambient and lower temperatures.",
            "characteristics": [
              "Superior notch toughness and weldability with vacuum-degassed, fine-grain steel practice.",
              "High yield strength and resistance to lamellar tearing under transverse welded loads.",
              "Normalized for improved low-temperature impact properties (available with Charpy testing down to -46°C).",
              "Standard material for heavy industrial autoclaves and storage vessels."
            ],
            "applications": [
              "Pressure vessel shells and circular dished ends",
              "Heat exchanger tube sheets and circular blind covers",
              "Storage tank bottom and shell plates",
              "Heavy-wall welded vessel nozzles"
            ],
            "specs": {
              "tensileStrength": "485 - 620 MPa (70 - 90 ksi)",
              "yieldStrength": "260 MPa (38 ksi) minimum",
              "elongation": "21% minimum in 2 inches",
              "hardness": "HBW ≤ 187",
              "heatTreatment": "Normalized above 40 mm plate thickness",
              "inspection": "EN 10204 3.1 / Ultrasonic testing to ASTM A435 / A578"
            },
            "standards": [
              "ASTM A516",
              "ASME SA516",
              "ASME Section VIII Div 1 & 2"
            ],
            "image": "assets/Product Section/Manufacturer division/Butt weld fit/carbon.jpg"
          }
        ],
        "image": "assets/Product Section/Manufacturer division/Butt weld fit/carbon.jpg",
        "fallback": "assets/our product new images/buttweld fittings.png"
      },
      {
        "slug": "alloy-steel",
        "name": "Alloy Steel",
        "number": "03",
        "description": "Chromium-molybdenum alloy steels engineered for elevated-temperature creep strength, hydrogen attack resistance, and severe power boiler and hydroprocessing service.",
        "applicableStandards": "ASTM A182, ASTM A234, ASTM A335, ASME B16.5, ASME B16.11",
        "pressureClasses": "Class 300#, 600#, 900#, 1500#, 2500#",
        "sizeRange": "1/2\" NB to 36\" NB",
        "grades": [
          {
            "slug": "f11",
            "name": "F11",
            "fullName": "ASTM A182 F11 (1.25% Cr - 0.5% Mo)",
            "designation": {
              "astm": "ASTM A182 F11 Class 2",
              "asme": "ASME SA182 F11",
              "uns": "UNS K11572",
              "en": "1.7335 (13CrMo4-5)"
            },
            "description": "Nominal 1.25% chromium, 0.5% molybdenum alloy steel engineered for high-temperature steam lines and refinery hydrocrackers operating up to 550°C.",
            "characteristics": [
              "High creep rupture strength and resistance to graphitization at elevated steam temperatures.",
              "Resistance to high-temperature hydrogen attack (HTHA) according to Nelson curve criteria.",
              "Supplied in normalized and tempered condition for structural microstructural stability.",
              "Standard alloy for thermal power plant main steam and hot reheat lines."
            ],
            "applications": [
              "Main steam headers in thermal power plants",
              "Hydrodesulfurization reactor piping",
              "Superheater piping and headers",
              "Refinery furnace transfer lines"
            ],
            "specs": {
              "tensileStrength": "485 MPa (70 ksi) minimum",
              "yieldStrength": "275 MPa (40 ksi) minimum",
              "elongation": "20% minimum in 2 inches",
              "hardness": "HBW 143 - 207",
              "heatTreatment": "Normalized at 900°C - 950°C and Tempered at 650°C minimum",
              "inspection": "EN 10204 3.1 / Hot tensile test verified"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.11",
              "ASTM A182",
              "API 941"
            ],
            "image": "assets/Product Section/Manufacturer division/Butt weld fit/alloy steel.jpg"
          },
          {
            "slug": "f22",
            "name": "F22",
            "fullName": "ASTM A182 F22 (2.25% Cr - 1.0% Mo)",
            "designation": {
              "astm": "ASTM A182 F22 Class 3",
              "asme": "ASME SA182 F22",
              "uns": "UNS K21590",
              "en": "1.7380 (10CrMo9-10)"
            },
            "description": "Nominal 2.25% chromium, 1.0% molybdenum alloy steel offering superior creep endurance, corrosion resistance to sulfur-bearing oil streams, and hydrogen resistance up to 600°C.",
            "characteristics": [
              "Elevated creep resistance and high allowable design stress under ASME Section I and VIII.",
              "Enhanced resistance to high-pressure hydrogen embrittlement in hydroprocessing units.",
              "Quenched and tempered or normalized and tempered for high fracture toughness.",
              "Specified for high-pressure catalytic cracking and supercritical boiler loops."
            ],
            "applications": [
              "Hydrocracker reactor nozzles and loop piping",
              "Supercritical boiler superheater headers",
              "Gasifier syngas transfer lines",
              "Petrochemical high-pressure steam headers"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "310 MPa (45 ksi) minimum",
              "elongation": "20% minimum in 2 inches",
              "hardness": "HBW 156 - 207",
              "heatTreatment": "Normalized at 900°C - 950°C and Tempered at 675°C minimum",
              "inspection": "EN 10204 3.1 / Ultrasonic and Magnetic Particle Inspection"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.9",
              "ASTM A182",
              "ASTM A335 Grade P22"
            ],
            "image": "assets/Product Section/Manufacturer division/Butt weld fit/alloy steel.jpg"
          },
          {
            "slug": "f91",
            "name": "F91",
            "fullName": "ASTM A182 F91 (9% Cr - 1% Mo - V - Nb)",
            "designation": {
              "astm": "ASTM A182 F91 Type 1",
              "asme": "ASME SA182 F91",
              "uns": "UNS K90901",
              "en": "1.4903 (X10CrMoVNb9-1)"
            },
            "description": "Advanced modified 9Cr-1Mo-V-Nb martensitic alloy steel engineered for supercritical and ultra-supercritical (USC) power stations operating up to 620°C with reduced wall thickness.",
            "characteristics": [
              "Twice the creep rupture strength of F22 at 600°C, enabling thinner component wall sections.",
              "Lower thermal stress and reduced cyclic thermal fatigue in high-efficiency power boilers.",
              "Requires tight control of heat treatment: normalizing at 1040°C–1080°C and tempering at 730°C–800°C.",
              "Strict compliance with hardness and microstructural martensite grain requirements."
            ],
            "applications": [
              "Ultra-supercritical power plant main steam lines",
              "Combined cycle gas turbine (CCGT) HRSG headers",
              "High-pressure steam bypass manifolds",
              "Nuclear power steam generator loops"
            ],
            "specs": {
              "tensileStrength": "585 - 760 MPa (85 - 110 ksi)",
              "yieldStrength": "415 MPa (60 ksi) minimum",
              "elongation": "20% minimum in 2 inches",
              "hardness": "HBW 190 - 248",
              "heatTreatment": "Normalized at 1050°C and Tempered at 750°C - 780°C",
              "inspection": "EN 10204 Type 3.1 / 100% Ultrasonic & Hardness verification"
            },
            "standards": [
              "ASME B16.5",
              "ASTM A182",
              "ASTM A335 Grade P91",
              "EPRI Guidelines"
            ],
            "image": "assets/Product Section/Manufacturer division/Butt weld fit/alloy steel.jpg"
          }
        ],
        "image": "assets/Product Section/Manufacturer division/Butt weld fit/alloy steel.jpg",
        "fallback": "assets/our product new images/buttweld fittings.png"
      },
      {
        "slug": "duplex",
        "name": "Duplex & Super Duplex",
        "number": "04",
        "description": "Dual-phase austenitic-ferritic microstructures delivering yield strength roughly twice that of standard stainless steel combined with superior resistance to chloride stress corrosion cracking.",
        "applicableStandards": "ASTM A182, ASTM A240, ASTM A790, ASTM A815, ASME B16.5",
        "pressureClasses": "Class 150#, 300#, 600#, 900#, 1500#, 2500#",
        "sizeRange": "1/2\" NB to 36\" NB",
        "grades": [
          {
            "slug": "2205",
            "name": "2205",
            "fullName": "2205 Standard Duplex (UNS S31803 / S32205)",
            "designation": {
              "astm": "ASTM A182 F51 / F60",
              "asme": "ASME SA182 F51 / F60",
              "uns": "UNS S31803 / S32205",
              "en": "1.4462 (X2CrNiMoN22-5-3)"
            },
            "description": "The workhorse 22% chromium duplex stainless steel with approximately 50/50 ferrite-austenite phase balance, offering high yield strength and high chloride resistance (PREN 35).",
            "characteristics": [
              "Yield strength roughly twice that of austenitic 316L, allowing substantial weight reduction.",
              "High resistance to chloride stress corrosion cracking in sour environments.",
              "High resistance to erosion-corrosion and pitting in seawater and brackish cooling water.",
              "Temperature limit typically restricted to -50°C to +280°C to prevent 475°C embrittlement."
            ],
            "applications": [
              "Offshore oil & gas topside piping",
              "Chemical tanker cargo holds and piping",
              "Desalination high-pressure reverse osmosis headers",
              "Flue gas cleaning systems",
              "Biofuel processing digesters"
            ],
            "specs": {
              "tensileStrength": "655 MPa (95 ksi) minimum",
              "yieldStrength": "450 MPa (65 ksi) minimum",
              "elongation": "25% minimum in 2 inches",
              "hardness": "HBW ≤ 290 (HRC ≤ 28)",
              "heatTreatment": "Solution Annealed at 1020°C - 1100°C and rapidly water quenched",
              "inspection": "EN 10204 3.1 / Phase balance check (40-60% ferrite) / ASTM G48 Method A test"
            },
            "standards": [
              "ASME B16.5",
              "ASTM A182",
              "NORSK M-630 MDS D44",
              "NACE MR0175 / ISO 15156"
            ],
            "image": "assets/Product Section/Manufacturer division/Butt weld fit/duplex.jpeg"
          },
          {
            "slug": "2507",
            "name": "2507",
            "fullName": "2507 Super Duplex (UNS S32750)",
            "designation": {
              "astm": "ASTM A182 F53",
              "asme": "ASME SA182 F53",
              "uns": "UNS S32750",
              "en": "1.4410 (X2CrNiMoN25-7-4)"
            },
            "description": "25% chromium super duplex stainless steel with 4% molybdenum and 0.28% nitrogen, providing exceptional pitting and crevice corrosion resistance with PREN ≥ 42.",
            "characteristics": [
              "PREN ≥ 42 guaranteeing immunity to pitting in high-temperature chlorinated seawater.",
              "Exceptionally high mechanical yield strength (≥ 550 MPa) for high-pressure subsea lines.",
              "Immune to chloride stress corrosion cracking in aggressive sour gas reservoirs.",
              "Manufactured strictly to NORSOK M-630 and NACE MR0175 compliance."
            ],
            "applications": [
              "Subsea manifolds, risers, and Christmas tree piping",
              "Seawater fire-water ring mains",
              "Offshore high-pressure sour gas export lines",
              "Geothermal high-chloride brine piping",
              "Chemical plants handling hot chlorinated media"
            ],
            "specs": {
              "tensileStrength": "750 MPa (109 ksi) minimum",
              "yieldStrength": "550 MPa (80 ksi) minimum",
              "elongation": "15% minimum in 2 inches",
              "hardness": "HBW ≤ 310 (HRC ≤ 32)",
              "heatTreatment": "Solution Annealed at 1050°C - 1125°C and water quenched",
              "inspection": "EN 10204 3.1 / Microstructure audit / ASTM G48 Method A test at 50°C"
            },
            "standards": [
              "ASME B16.5",
              "ASTM A182 F53",
              "NORSOK M-630 MDS D54",
              "ISO 15156"
            ],
            "image": "assets/Product Section/Manufacturer division/Butt weld fit/duplex.jpeg"
          }
        ],
        "image": "assets/Product Section/Manufacturer division/Butt weld fit/duplex.jpeg",
        "fallback": "assets/our product new images/buttweld fittings.png"
      },
      {
        "slug": "high-alloy",
        "name": "High Alloy",
        "number": "05",
        "description": "Nickel-chromium-molybdenum superalloys engineered to withstand severe chemical environments, high temperatures, boiling mineral acids, and extreme mechanical stress.",
        "applicableStandards": "ASTM B564, ASTM B366, ASTM B622, ASME B16.5, ASME B16.11",
        "pressureClasses": "Class 150#, 300#, 600#, 900#, 1500#, 2500#",
        "sizeRange": "1/2\" NB to 24\" NB",
        "grades": [
          {
            "slug": "inconel-625",
            "name": "Inconel 625",
            "fullName": "Inconel 625 (UNS N06625)",
            "designation": {
              "astm": "ASTM B564 / B444",
              "asme": "ASME SB564",
              "uns": "UNS N06625",
              "en": "2.4856 (NiCr22Mo9Nb)"
            },
            "description": "Nickel-chromium-molybdenum alloy with niobium addition providing solid solution strengthening without heat treatment, resistant from cryogenic temperatures up to 980°C.",
            "characteristics": [
              "Virtually immune to chloride-induced stress corrosion cracking.",
              "Exceptional fatigue and thermal-fatigue strength in marine and aerospace environments.",
              "High resistance to a wide range of organic and inorganic acids, including wet chlorine.",
              "Certified for NACE sour service and nuclear reactor core piping."
            ],
            "applications": [
              "Marine exhaust scrubbers",
              "Subsea wellhead equipment",
              "Chemical waste disposal incinerator nozzles",
              "Nuclear reactor control rod drive piping",
              "Sour gas production downhole components"
            ],
            "specs": {
              "tensileStrength": "827 MPa (120 ksi) minimum",
              "yieldStrength": "414 MPa (60 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 220",
              "heatTreatment": "Annealed at 980°C - 1050°C",
              "inspection": "EN 10204 Type 3.1 / 100% Ultrasonic inspection"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B564",
              "NACE MR0175",
              "AMS 5666"
            ],
            "image": "assets/Product Section/Manufacturer division/Butt weld fit/high alloy.jpg"
          },
          {
            "slug": "hastelloy-c276",
            "name": "Hastelloy C276",
            "fullName": "Hastelloy C276 (UNS N10276)",
            "designation": {
              "astm": "ASTM B564 / B575",
              "asme": "ASME SB564",
              "uns": "UNS N10276",
              "en": "2.4819 (NiMo16Cr15W)"
            },
            "description": "The universal corrosion-resistant nickel-molybdenum-chromium superalloy with tungsten, engineered to withstand aggressive wet chlorine gas, hypochlorite, and boiling mineral acids.",
            "characteristics": [
              "Unmatched resistance to localized pitting, crevice corrosion, and stress corrosion cracking.",
              "One of the few materials to withstand wet chlorine gas, hypochlorite, and chlorine dioxide solutions.",
              "Low carbon content minimizes carbide precipitation during welding, preserving as-welded corrosion resistance.",
              "Proven longevity in harsh chemical synthesis reactors."
            ],
            "applications": [
              "Flue gas desulfurization (FGD) scrubbers",
              "Sulfuric and hydrochloric acid synthesis plants",
              "Chlorination reaction systems",
              "Pharmaceutical active ingredient reactors",
              "Hazardous waste treatment vessels"
            ],
            "specs": {
              "tensileStrength": "690 MPa (100 ksi) minimum",
              "yieldStrength": "283 MPa (41 ksi) minimum",
              "elongation": "40% minimum in 2 inches",
              "hardness": "HBW ≤ 220",
              "heatTreatment": "Solution heat-treated at 1120°C and water quenched",
              "inspection": "EN 10204 Type 3.1 / Microstructure and ASTM G28 corrosion testing"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B564",
              "NACE MR0175 / ISO 15156"
            ],
            "image": "assets/Product Section/Manufacturer division/Butt weld fit/high alloy.jpg"
          },
          {
            "slug": "monel-400",
            "name": "Monel 400",
            "fullName": "Monel 400 (UNS N04400)",
            "designation": {
              "astm": "ASTM B564 / B127",
              "asme": "ASME SB564",
              "uns": "UNS N04400",
              "en": "2.4360 (NiCu30Fe)"
            },
            "description": "Ductile nickel-copper alloy (67% Ni, 30% Cu) exhibiting exceptional resistance to rapidly flowing seawater, hydrofluoric acid, sulfuric acid, and high-temperature alkalies.",
            "characteristics": [
              "Standard engineering material for marine salt water immersion and splash zones.",
              "Exceptional resistance to hydrofluoric acid (HF) in all concentrations up to the boiling point.",
              "Resistant to non-oxidizing mineral acids and deaerated salt solutions.",
              "Non-magnetic down to room temperature with high impact toughness."
            ],
            "applications": [
              "Hydrofluoric acid alkylation units in oil refineries",
              "Marine propeller shafts and seawater valve trims",
              "Offshore splash-zone sheathing",
              "Chlorinated solvent recovery systems",
              "Salt plant brine evaporators"
            ],
            "specs": {
              "tensileStrength": "480 MPa (70 ksi) minimum",
              "yieldStrength": "195 MPa (28 ksi) minimum",
              "elongation": "35% minimum in 2 inches",
              "hardness": "HBW 110 - 150",
              "heatTreatment": "Annealed at 760°C - 900°C followed by water quench",
              "inspection": "EN 10204 3.1 / Ultrasonic and Dye Penetrant testing"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B564",
              "NACE MR0175",
              "MSS-SP-25"
            ],
            "image": "assets/Product Section/Manufacturer division/Butt weld fit/high alloy.jpg"
          }
        ],
        "image": "assets/Product Section/Manufacturer division/Butt weld fit/high alloy.jpg",
        "fallback": "assets/our product new images/buttweld fittings.png"
      },
      {
        "slug": "nickel",
        "name": "Nickel",
        "number": "06",
        "description": "Commercially pure nickel alloys engineered for caustic soda evaporators, non-oxidizing halogen systems, and high-purity chemical processing.",
        "applicableStandards": "ASTM B564, ASTM B160, ASTM B162, ASME B16.5",
        "pressureClasses": "Class 150#, 300#, 600#",
        "sizeRange": "1/2\" NB to 24\" NB",
        "grades": [
          {
            "slug": "nickel-200",
            "name": "Nickel 200",
            "fullName": "Nickel 200 (UNS N02200)",
            "designation": {
              "astm": "ASTM B564 / B160",
              "asme": "ASME SB564",
              "uns": "UNS N02200",
              "en": "2.4066 (Ni99.2)"
            },
            "description": "Commercially pure (99.6%) wrought nickel providing exceptional thermal conductivity, electrical properties, and uncompromised resistance to hot caustic alkalies.",
            "characteristics": [
              "Immune to stress corrosion cracking in all concentrations of boiling caustic soda (NaOH).",
              "Excellent resistance to dry fluorine, chlorine, and hydrogen chloride gases.",
              "High thermal conductivity and low electrical resistivity for electrochemical electrodes.",
              "Maintains cryogenic mechanical ductility without ductile-to-brittle transition."
            ],
            "applications": [
              "Caustic soda production evaporators",
              "Synthetic fiber manufacturing equipment",
              "Chlorine and hydrogen chloride dry gas transfer",
              "Food and soap processing reaction vessels"
            ],
            "specs": {
              "tensileStrength": "380 MPa (55 ksi) minimum",
              "yieldStrength": "105 MPa (15 ksi) minimum",
              "elongation": "40% minimum in 2 inches",
              "hardness": "HBW ≤ 130",
              "heatTreatment": "Annealed at 700°C - 900°C",
              "inspection": "EN 10204 Type 3.1 MTC"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B564",
              "ASME Section VIII Div 1"
            ],
            "image": "assets/Product Section/Manufacturer division/Butt weld fit/nikle.jpg"
          },
          {
            "slug": "nickel-201",
            "name": "Nickel 201",
            "fullName": "Nickel 201 (UNS N02201)",
            "designation": {
              "astm": "ASTM B564 / B160",
              "asme": "ASME SB564",
              "uns": "UNS N02201",
              "en": "2.4068 (LC-Ni99.2)"
            },
            "description": "Low-carbon version (C ≤ 0.02%) of Nickel 200 engineered to prevent graphitization and intergranular embrittlement during service above 315°C (600°F).",
            "characteristics": [
              "Certified for continuous service at temperatures exceeding 315°C (600°F) up to 650°C.",
              "Low carbon prevents intercrystalline graphite precipitation in caustic environments.",
              "Exceptional resistance to molten hydroxide and fused caustic salts.",
              "High ductility and ease of cold forming and orbital welding."
            ],
            "applications": [
              "High-temperature caustic concentration evaporators",
              "Vinyl chloride monomer (VCM) thermal reactors",
              "Fluorochemical reactors",
              "Molten salt nuclear heat transfer loops"
            ],
            "specs": {
              "tensileStrength": "345 MPa (50 ksi) minimum",
              "yieldStrength": "70 MPa (10 ksi) minimum",
              "elongation": "40% minimum in 2 inches",
              "hardness": "HBW ≤ 120",
              "heatTreatment": "Annealed at 700°C - 900°C",
              "inspection": "EN 10204 Type 3.1 MTC / Carbon verification"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B564",
              "DIN 17750"
            ],
            "image": "assets/Product Section/Manufacturer division/Butt weld fit/nikle.jpg"
          }
        ],
        "image": "assets/Product Section/Manufacturer division/Butt weld fit/nikle.jpg",
        "fallback": "assets/our product new images/buttweld fittings.png"
      },
      {
        "slug": "titanium",
        "name": "Titanium",
        "number": "07",
        "description": "Lightweight, ultra-corrosion-resistant titanium alloys delivering total immunity to marine seawater, wet chlorine, and organic chlorides with extraordinary strength-to-weight ratios.",
        "applicableStandards": "ASTM B381, ASTM B348, ASTM B861, ASME B16.5",
        "pressureClasses": "Class 150#, 300#, 600#, 900#",
        "sizeRange": "1/2\" NB to 24\" NB",
        "grades": [
          {
            "slug": "grade-2",
            "name": "Grade 2",
            "fullName": "Titanium Grade 2 (UNS R50400)",
            "designation": {
              "astm": "ASTM B381 / B348 Gr. 2",
              "asme": "ASME SB381",
              "uns": "UNS R50400",
              "en": "3.7035 (Ti2)"
            },
            "description": "The workhorse commercially pure titanium grade offering the optimum balance of moderate strength, high ductility, excellent weldability, and total seawater corrosion resistance.",
            "characteristics": [
              "Forms a tenacious, self-healing titanium dioxide (TiO2) passive oxide film instantly upon exposure to oxygen.",
              "Complete immunity to marine microbiologically influenced corrosion (MIC) and crevice attack.",
              "Approximately 45% lighter than steel, significantly reducing topside platform loads.",
              "Certified biocompatible for medical and food-contact installations."
            ],
            "applications": [
              "Seawater desalination reverse osmosis and multi-stage flash units",
              "Offshore oil platform seawater cooling systems",
              "Chlor-alkali electrolytic cell anode connections",
              "Bleaching towers in pulp and paper mills"
            ],
            "specs": {
              "tensileStrength": "345 MPa (50 ksi) minimum",
              "yieldStrength": "275 MPa (40 ksi) minimum",
              "elongation": "20% minimum in 2 inches",
              "hardness": "HBW ≤ 200",
              "heatTreatment": "Stress Relieved at 500°C - 550°C",
              "inspection": "EN 10204 3.1 / Gas analysis (C, O, N, H) verified"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B381",
              "NACE MR0175 / ISO 15156"
            ],
            "image": "assets/Product Section/Manufacturer division/Butt weld fit/titainium.webp"
          },
          {
            "slug": "grade-5",
            "name": "Grade 5",
            "fullName": "Titanium Grade 5 (Ti-6Al-4V / UNS R56400)",
            "designation": {
              "astm": "ASTM B381 / B348 Gr. 5",
              "asme": "ASME SB381",
              "uns": "UNS R56400",
              "en": "3.7165 (Ti6Al4V)"
            },
            "description": "Alpha-beta titanium alloy containing 6% aluminum and 4% vanadium, delivering twice the mechanical tensile strength of commercially pure grades with high fatigue endurance.",
            "characteristics": [
              "Tensile strength exceeding 895 MPa (130 ksi) with low density of 4.43 g/cm³.",
              "Exceptional strength-to-weight ratio for aerospace and subsea structural bolting.",
              "Maintains mechanical properties up to 400°C while resisting high-velocity seawater erosion.",
              "Heat treatable by solution treating and aging (STA)."
            ],
            "applications": [
              "Subsea high-pressure wellhead riser bolts",
              "Aerospace hydraulic fluid connections",
              "High-speed marine hydrofoil fasteners",
              "Deepwater oceanographic exploration casings"
            ],
            "specs": {
              "tensileStrength": "895 MPa (130 ksi) minimum",
              "yieldStrength": "828 MPa (120 ksi) minimum",
              "elongation": "10% minimum in 2 inches",
              "hardness": "HRC 30 - 36",
              "heatTreatment": "Mill Annealed at 700°C - 785°C and air cooled",
              "inspection": "EN 10204 Type 3.1 MTC / Ultrasonic testing"
            },
            "standards": [
              "ASTM B381",
              "ASME B16.5",
              "AMS 4928",
              "NACE MR0175"
            ],
            "image": "assets/Product Section/Manufacturer division/Butt weld fit/titainium.webp"
          }
        ],
        "image": "assets/Product Section/Manufacturer division/Butt weld fit/titainium.webp",
        "fallback": "assets/our product new images/buttweld fittings.png"
      },
      {
        "slug": "copper",
        "name": "Copper",
        "number": "08",
        "description": "Copper-nickel alloys, brasses, and pure copper engineered for high thermal/electrical conductivity, natural marine biofouling resistance, and naval piping circuits.",
        "applicableStandards": "ASTM B151, ASTM B171, ASTM B466, ASME B16.5, DIN 86019",
        "pressureClasses": "Class 150#, 300#, DIN PN10 - PN16",
        "sizeRange": "1/2\" NB to 24\" NB",
        "grades": [
          {
            "slug": "cu-ni-90-10",
            "name": "Cu-Ni 90/10",
            "fullName": "Copper-Nickel 90/10 (C70600)",
            "designation": {
              "astm": "ASTM B151 / B171 C70600",
              "asme": "ASME SB151 C70600",
              "uns": "UNS C70600",
              "en": "2.0872 (CuNi10Fe1Mn)"
            },
            "description": "90% copper, 10% nickel alloy formulated with controlled iron and manganese additions, delivering natural resistance to marine biofouling and seawater impingement erosion.",
            "characteristics": [
              "Natural antimicrobial and macro-fouling resistance; eliminates marine barnacle growth.",
              "High thermal conductivity for marine condensers and heat exchanger tubing.",
              "Resistant to stress corrosion cracking in high-salinity seawater.",
              "Readily brazeable and weldable by TIG and MIG processes."
            ],
            "applications": [
              "Naval warship seawater cooling mains",
              "Offshore platform firewater ring mains",
              "Commercial shipbuilding ballast piping",
              "Desalination multi-stage flash heat recovery tubes"
            ],
            "specs": {
              "tensileStrength": "310 MPa (45 ksi) minimum",
              "yieldStrength": "125 MPa (18 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW 70 - 100",
              "heatTreatment": "Annealed at 600°C - 750°C",
              "inspection": "EN 10204 Type 3.1 MTC / Eddy current inspection"
            },
            "standards": [
              "ASME B16.5",
              "EEMUA 145 / 234",
              "DIN 86019",
              "MIL-C-15726"
            ],
            "image": "assets/grades images/buttweld fitting/copper/cu 90-10.jpeg"
          },
          {
            "slug": "cu-ni-70-30",
            "name": "Cu-Ni 70/30",
            "fullName": "Copper-Nickel 70/30 (C71500)",
            "designation": {
              "astm": "ASTM B151 / B171 C71500",
              "asme": "ASME SB151 C71500",
              "uns": "UNS C71500",
              "en": "2.0882 (CuNi30Mn1Fe)"
            },
            "description": "70% copper, 30% nickel alloy engineered for higher seawater velocity tolerances (up to 4.5 m/s) and severe naval service where high impingement resistance is mandatory.",
            "characteristics": [
              "Permissible seawater flow velocity up to 4.5 m/s without protective film breakdown.",
              "Superior resistance to hydrogen embrittlement and sulfide stress cracking.",
              "Enhanced mechanical strength compared to 90/10 grade.",
              "Standard naval submarine and destroyer condenser specification."
            ],
            "applications": [
              "Submarine seawater intake systems",
              "High-velocity naval auxiliary condenser piping",
              "Offshore oil rig cooling manifolds",
              "Desalination brine heater bundles"
            ],
            "specs": {
              "tensileStrength": "380 MPa (55 ksi) minimum",
              "yieldStrength": "140 MPa (20 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW 80 - 120",
              "heatTreatment": "Annealed at 650°C - 800°C",
              "inspection": "EN 10204 Type 3.1 MTC / Hydrostatic verification"
            },
            "standards": [
              "ASME B16.5",
              "EEMUA 145 / 234",
              "DIN 86019",
              "MIL-C-15726"
            ],
            "image": "assets/grades images/buttweld fitting/copper/cu 90-10.jpeg"
          }
        ],
        "image": "assets/grades images/buttweld fitting/copper/cu 90-10.jpeg",
        "fallback": "assets/our product new images/buttweld fittings.png"
      },
      {
        "slug": "aluminium",
        "name": "Aluminium",
        "number": "09",
        "description": "High-strength wrought and extruded aluminium alloys delivering lightweight structural capability, high thermal dissipation, and cryogenic ductility for aerospace and marine service.",
        "applicableStandards": "ASTM B221, ASTM B241, ASTM B209, ASME B16.5",
        "pressureClasses": "Class 150#, PN10, PN16",
        "sizeRange": "1/2\" NB to 24\" NB",
        "grades": [
          {
            "slug": "6061-t6",
            "name": "6061-T6",
            "fullName": "6061-T6 Structural Aluminium",
            "designation": {
              "astm": "ASTM B221 / B241 Gr. 6061",
              "asme": "ASME SB221",
              "uns": "UNS A96061",
              "en": "3.3211 (AlMg1SiCu)"
            },
            "description": "Precipitation-hardened magnesium-silicon alloy delivering high structural yield strength, excellent CNC machinability, and clean surface anodizing characteristics.",
            "characteristics": [
              "High strength-to-weight ratio with density of only 2.70 g/cm³.",
              "Excellent atmospheric corrosion resistance in industrial environments.",
              "Readily machinable to tight geometric tolerances on multi-axis CNC machines.",
              "Excellent TIG/MIG weldability using 4043 or 5356 filler wires."
            ],
            "applications": [
              "Aerospace fuel and hydraulic fluid lines",
              "Cryogenic air separation plant piping",
              "Automotive racing fluid manifolds",
              "Precision robotic automation frames"
            ],
            "specs": {
              "tensileStrength": "290 MPa (42 ksi) minimum",
              "yieldStrength": "240 MPa (35 ksi) minimum",
              "elongation": "8% - 10% in 2 inches",
              "hardness": "HBW ~ 95",
              "heatTreatment": "Solution heat-treated and artificially aged (T6 temper)",
              "inspection": "EN 10204 Type 3.1 MTC / Conductivity check"
            },
            "standards": [
              "ASTM B221",
              "ASTM B241",
              "AMS 4027",
              "ASME B16.5"
            ],
            "image": "assets/Product Section/Manufacturer division/Butt weld fit/super duplex.jpeg"
          },
          {
            "slug": "5083-h116",
            "name": "5083-H116",
            "fullName": "5083-H116 Marine Aluminium",
            "designation": {
              "astm": "ASTM B209 / B221 Gr. 5083",
              "asme": "ASME SB209",
              "uns": "UNS A95083",
              "en": "3.3547 (AlMg4.5Mn0.7)"
            },
            "description": "High-magnesium marine alloy engineered specifically for exceptional corrosion resistance in seawater and cryogenic storage tanks down to -269°C without embrittlement.",
            "characteristics": [
              "The premier structural aluminium alloy for saltwater immersion.",
              "Maintains exceptional ductility and toughness at cryogenic temperatures down to liquid helium (-269°C).",
              "High weld joint efficiency without requiring post-weld solution treatment.",
              "Certified by DNV, Lloyd's Register, and ABS for marine construction."
            ],
            "applications": [
              "LNG/LPG cryogenic cargo tank piping",
              "High-speed marine ferry hull piping",
              "Naval radar mast structural flanges",
              "Chemical rail tanker vessels"
            ],
            "specs": {
              "tensileStrength": "305 MPa (44 ksi) minimum",
              "yieldStrength": "215 MPa (31 ksi) minimum",
              "elongation": "10% minimum in 2 inches",
              "hardness": "HBW ~ 85",
              "heatTreatment": "Strain-hardened and stabilized (H116 temper) for intergranular corrosion resistance",
              "inspection": "EN 10204 3.1 / Nitric Acid Mass Loss Test (NAMLT) to ASTM G67"
            },
            "standards": [
              "ASTM B209",
              "ASTM B221",
              "DNV-GL Marine Rules",
              "ASME Section VIII"
            ],
            "image": "assets/Product Section/Manufacturer division/Butt weld fit/super duplex.jpeg"
          }
        ],
        "image": "assets/Product Section/Manufacturer division/Butt weld fit/super duplex.jpeg",
        "fallback": "assets/our product new images/buttweld fittings.png"
      }
    ]
  },
  {
    "slug": "fasteners",
    "name": "Fasteners",
    "title": "FASTENERS",
    "suffix": "Fasteners",
    "eyebrow": "ASTM A193 / A194 / A320 HEAVY INDUSTRIAL BOLTING",
    "heroImage": "assets/our product new images/fasteners.png",
    "heroTag": "HEAVY HEX BOLTS, STUDS & INDUSTRIAL NUTS",
    "description": "Engineered for critical flanged joints, pressure vessels, and structural connections, Apollo fasteners are manufactured with precision cold/hot forging and roll-threaded geometry to guarantee proof-load integrity.",
    "overview": {
      "lead": "Industrial fasteners maintain clamping force across gasketed flange interfaces and structural assemblies under elevated mechanical stress, thermal expansion, and vibration.",
      "highlights": [
        {
          "title": "Rolled Threads",
          "desc": "Precision UN, UNC, UNF, and metric threads formed by thread rolling for improved fatigue resistance over cut threads."
        },
        {
          "title": "High-Tensile Grades",
          "desc": "ASTM A193 B7, B8, B8M, B16, and A320 L7 with proof loads up to 125,000 psi."
        },
        {
          "title": "Surface Coatings",
          "desc": "Supplied plain, hot-dip galvanized, cadmium plated, PTFE / Xylan fluoropolymer coated, and zinc-nickel."
        },
        {
          "title": "Heavy Pattern",
          "desc": "Heavy hex geometry matching ASME B18.2.1 and ASME B18.2.2 standards."
        }
      ]
    },
    "hasTypes": true,
    "types": [
      {
        "slug": "stud-bolts",
        "name": "Stud Bolts with Heavy Hex Nuts",
        "shortName": "Stud Bolts",
        "image": "assets/fasteners/types/stud-bolts.jpg",
        "description": "Continuous all-thread studs paired with two ASME B18.2.2 heavy hex nuts, providing uniform torque tension across flanged joints.",
        "design": "Full-thread rod with chamfered point ends, roll-threaded to Class 2A tolerance.",
        "function": "Standard bolting for ASME B16.5 and B16.47 pressure flanges.",
        "facing": "Chamfered ends.",
        "standards": "ASME B18.31.2, ASTM A193, ASTM A194",
        "sizes": "1/2\" to 4\" diameter, custom lengths",
        "pressureClasses": "Engineered for Class 150# to 2500# flanged connections",
        "materialsSupported": [
          "stainless-steel",
          "carbon-steel",
          "alloy-steel",
          "duplex",
          "high-alloy",
          "nickel",
          "titanium",
          "copper",
          "aluminium"
        ]
      },
      {
        "slug": "hex-head-bolts",
        "name": "Heavy Hex Head Bolts",
        "shortName": "Hex Bolts",
        "image": "assets/fasteners/types/hex-head-bolts.jpg",
        "description": "Forged hexagonal head bolts with integral washer face, designed for structural steel frameworks and equipment flange mounting.",
        "design": "One-piece hot-forged hex head with machined under-head radius.",
        "function": "Structural bolting, machinery foundation, and compact equipment flange joints.",
        "facing": "Flat washer-faced bearing surface.",
        "standards": "ASME B18.2.1, DIN 931 / 933, ISO 4014",
        "sizes": "M12 to M64 / 1/2\" to 2-1/2\" diameter",
        "pressureClasses": "Standard structural and pressure ratings",
        "materialsSupported": [
          "stainless-steel",
          "carbon-steel",
          "alloy-steel",
          "duplex",
          "high-alloy"
        ]
      },
      {
        "slug": "hex-nuts",
        "name": "Heavy Hex Nuts",
        "shortName": "Hex Nuts",
        "image": "assets/fasteners/types/hex-nuts.jpg",
        "description": "Thick-walled heavy hex pattern nuts providing enhanced thread engagement length to prevent thread stripping under severe proof loads.",
        "design": "ASME B18.2.2 heavy pattern with precision Class 2B tapped threads.",
        "function": "Mating nut component for stud bolts and heavy hex bolts in pressure boundary service.",
        "facing": "Double-chamfered or washer-faced bearing surfaces.",
        "standards": "ASME B18.2.2, ASTM A194 Grades 2H, 4, 7, 8, 8M",
        "sizes": "1/2\" to 4\" nominal thread size",
        "pressureClasses": "Proof stress ratings up to 175,000 psi",
        "materialsSupported": [
          "stainless-steel",
          "carbon-steel",
          "alloy-steel",
          "duplex",
          "high-alloy"
        ]
      },
      {
        "slug": "washers",
        "name": "Plain & Spring Structural Washers",
        "shortName": "Washers",
        "image": "assets/fasteners/types/washers.jpg",
        "description": "Hardened circular washers engineered to distribute bolt clamping load evenly, protect flange surfaces, and prevent embedment.",
        "design": "Quenched and tempered hardened carbon or stainless steel stamping.",
        "function": "Load distribution and galvanic isolation beneath bolt heads and nuts.",
        "facing": "Deburred flat parallel surfaces.",
        "standards": "ASTM F436, ASME B18.21.1, DIN 125",
        "sizes": "1/2\" to 4\" inner diameter",
        "pressureClasses": "Compatible with all ASTM A193 bolting classes",
        "materialsSupported": [
          "stainless-steel",
          "carbon-steel",
          "alloy-steel",
          "duplex",
          "high-alloy"
        ]
      }
    ],
    "materials": [
      {
        "slug": "stainless-steel",
        "name": "Stainless Steel",
        "number": "01",
        "description": "Austenitic and martensitic stainless steels offering superior resistance to chemical attack, pitting, and high-temperature scaling across process industries.",
        "applicableStandards": "ASTM A182, ASTM A240, ASTM A312, ASTM A403, ASME B16.5",
        "pressureClasses": "Class 150#, 300#, 600#, 900#, 1500#, 2500#",
        "sizeRange": "1/2\" NB to 60\" NB (DN15 to DN1500)",
        "grades": [
          {
            "slug": "304",
            "name": "304",
            "fullName": "304 Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S30400",
              "en": "1.4301 (X5CrNi18-10)"
            },
            "description": "The classic 18/8 austenitic stainless steel delivering dependable general corrosion resistance, excellent formability, and cryogenic impact toughness.",
            "characteristics": [
              "Excellent atmospheric and chemical corrosion resistance in organic and mildly oxidizing acids.",
              "Retains high impact toughness from cryogenic temperatures (-196°C) up to 800°C.",
              "Readily weldable by all standard commercial fusion methods without requiring preheat.",
              "Non-magnetic in the solution-annealed condition with moderate work hardening rate."
            ],
            "applications": [
              "Chemical processing manifolds",
              "Food, dairy & beverage piping",
              "Petrochemical low-temperature loops",
              "Cryogenic storage vessel nozzles",
              "Architectural structural piping"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "205 MPa (30 ksi) minimum",
              "elongation": "40% minimum in 2 inches",
              "hardness": "HBW ≤ 201 (HRB ≤ 92)",
              "heatTreatment": "Solution Annealed at 1040°C - 1120°C followed by rapid water quench",
              "inspection": "EN 10204 Type 3.1 MTC with complete chemical and mechanical test results"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.47",
              "ASTM A182",
              "ASME SA182",
              "MSS-SP-43",
              "NACE MR0175 (annealed)"
            ],
            "image": "assets/Product Section/Manufacturer division/Fasteners/stainless-steel.webp"
          },
          {
            "slug": "304l",
            "name": "304L",
            "fullName": "304L Low-Carbon Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S30403",
              "en": "1.4307 (X2CrNi18-9)"
            },
            "description": "Extra-low carbon modification (C ≤ 0.030%) that eliminates chromium carbide precipitation during welding, providing immunity to intergranular corrosion in as-welded assemblies.",
            "characteristics": [
              "Immunity to sensitization and intergranular attack in heat-affected zones (HAZ) of welded components.",
              "Eliminates the mandatory requirement for post-weld solution annealing.",
              "Maintains cryogenic mechanical ductility down to liquid nitrogen temperatures (-196°C).",
              "Compatible with dual-certified 304/304L pressure vessel specifications."
            ],
            "applications": [
              "Heavy-wall welded piping systems",
              "Wet chemical processing lines",
              "Refinery flare header lines",
              "Marine deck piping systems",
              "Pulp and paper bleaching equipment"
            ],
            "specs": {
              "tensileStrength": "485 MPa (70 ksi) minimum",
              "yieldStrength": "170 MPa (25 ksi) minimum",
              "elongation": "40% minimum in 2 inches",
              "hardness": "HBW ≤ 201",
              "heatTreatment": "Solution Annealed at 1040°C - 1100°C and water quenched",
              "inspection": "EN 10204 Type 3.1 MTC / NACE MR0175 compliant"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.9",
              "ASTM A182",
              "ASTM A403",
              "ASME Section VIII Div 1"
            ],
            "image": "assets/Product Section/Manufacturer division/Fasteners/stainless-steel.webp"
          },
          {
            "slug": "316",
            "name": "316",
            "fullName": "316 Molybdenum-Bearing Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S31600",
              "en": "1.4401 (X5CrNiMo17-12-2)"
            },
            "description": "Formulated with 2.0% to 3.0% molybdenum to significantly improve localized resistance to pitting and crevice corrosion in chloride and halide-bearing environments.",
            "characteristics": [
              "Significantly higher pitting resistance equivalent (PREN ~ 23-25) compared to 304.",
              "Superior resistance to sulfuric, phosphoric, acetic, and tartaric acid solutions.",
              "Elevated creep rupture strength at elevated operating temperatures up to 870°C.",
              "Standard specification for marine atmospheres, offshore platforms, and coastal chemical plants."
            ],
            "applications": [
              "Offshore oil & gas production manifolds",
              "Marine seawater cooling circuits",
              "Pharmaceutical reaction vessels",
              "Petrochemical acid-wash scrubbers",
              "Fertilizer production piping"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "205 MPa (30 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 217",
              "heatTreatment": "Solution Annealed at 1040°C - 1150°C and rapidly quenched",
              "inspection": "EN 10204 3.1 / PMI / Ultrasonic Inspection to ASTM A388"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.47",
              "ASTM A182",
              "ASTM A312",
              "NACE MR0175 / ISO 15156"
            ],
            "image": "assets/Product Section/Manufacturer division/Fasteners/stainless-steel.webp"
          },
          {
            "slug": "316l",
            "name": "316L",
            "fullName": "316L Low-Carbon Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S31603",
              "en": "1.4404 (X2CrNiMo17-12-2)"
            },
            "description": "Low-carbon molybdenum alloy combining superior chloride pitting resistance with complete protection against intergranular carbide precipitation in critical welded joints.",
            "characteristics": [
              "Carbon restricted to 0.030% max, preventing grain boundary sensitization during field welding.",
              "Exceptional resistance to localized pitting in marine and brackish water piping systems.",
              "Widely accepted in sour service under NACE MR0175 / ISO 15156 standards.",
              "Clean interior surface finish capability suitable for sanitary and high-purity applications."
            ],
            "applications": [
              "Subsea umbilical and manifold piping",
              "Chemical tanker cargo lines",
              "Pharmaceutical clean-in-place (CIP) loops",
              "Desalination plant brine piping",
              "Sour hydrocarbon gas handling"
            ],
            "specs": {
              "tensileStrength": "485 MPa (70 ksi) minimum",
              "yieldStrength": "170 MPa (25 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 217",
              "heatTreatment": "Solution Annealed at 1040°C - 1120°C and water quenched",
              "inspection": "EN 10204 Type 3.1 MTC / NACE MR0175 / MR0103"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.11",
              "ASTM A182",
              "ASTM A403",
              "ASME BPE"
            ],
            "image": "assets/Product Section/Manufacturer division/Fasteners/stainless-steel.webp"
          },
          {
            "slug": "321",
            "name": "321",
            "fullName": "321 Titanium-Stabilized Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S32100",
              "en": "1.4541 (X6CrNiTi18-10)"
            },
            "description": "Stabilized with titanium (Ti ≥ 5x C) to tie up carbon as titanium carbides, preventing sensitization during prolonged service in the critical 427°C to 816°C temperature range.",
            "characteristics": [
              "Complete immunity to intergranular corrosion during continuous high-temperature service.",
              "Superior creep and stress-rupture properties compared to standard 304/304L.",
              "Resists polythionic acid stress corrosion cracking during refinery shutdown cycles.",
              "Standard choice for aircraft exhaust systems and refinery thermal crackers."
            ],
            "applications": [
              "Refinery thermal cracker piping",
              "Catalytic reformer units",
              "High-temperature steam boiler bypass lines",
              "Aircraft engine exhaust manifolds",
              "Chemical furnace tube connections"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "205 MPa (30 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 217",
              "heatTreatment": "Solution Annealed at 1000°C - 1100°C followed by stabilization heat treatment at 850°C - 900°C",
              "inspection": "EN 10204 3.1 / Intergranular Corrosion Test to ASTM A262 Practice E"
            },
            "standards": [
              "ASME B16.5",
              "ASTM A182",
              "ASME SA182",
              "API 530"
            ],
            "image": "assets/Product Section/Manufacturer division/Fasteners/stainless-steel.webp"
          },
          {
            "slug": "347",
            "name": "347",
            "fullName": "347 Niobium-Stabilized Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S34700",
              "en": "1.4550 (X6CrNiNb18-10)"
            },
            "description": "Stabilized with niobium/columbium (Nb ≥ 10x C) providing enhanced creep resistance and intergranular corrosion resistance at severe temperatures up to 870°C.",
            "characteristics": [
              "High creep strength and stress rupture resistance in heavy wall forged components.",
              "Resistant to polythionic acid stress cracking in hydrocracking and hydrotreating units.",
              "Superior fatigue strength under extreme thermal shock cycling.",
              "Certified for nuclear and supercritical power generation piping."
            ],
            "applications": [
              "Hydroprocessing and hydrodesulfurization units",
              "Supercritical power boiler piping",
              "Radiant superheater tube headers",
              "High-temperature radioactive waste handling",
              "Gas turbine exhaust nozzles"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "205 MPa (30 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 217",
              "heatTreatment": "Solution Annealed at 1040°C - 1150°C and water quenched",
              "inspection": "EN 10204 Type 3.1 with ASTM A262 Practice E IGC certification"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.9",
              "ASTM A182",
              "ASME Section III Class 1"
            ],
            "image": "assets/Product Section/Manufacturer division/Fasteners/stainless-steel.webp"
          },
          {
            "slug": "310s",
            "name": "310S",
            "fullName": "310S High-Temperature Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S31008",
              "en": "1.4845 (X8CrNi25-21)"
            },
            "description": "High-alloy austenitic stainless steel formulated with 25% chromium and 20% nickel for exceptional resistance to high-temperature oxidation and sulfidation up to 1150°C.",
            "characteristics": [
              "Continuous oxidation resistance in air up to 1150°C (2100°F) under cyclic thermal conditions.",
              "Resistant to carburization in moderately carburizing petrochemical atmospheres.",
              "Maintains high ductile toughness and structural stability at elevated temperatures.",
              "Low magnetic permeability and high thermal creep endurance."
            ],
            "applications": [
              "Thermal incinerator burner piping",
              "Fluidized bed coal combustors",
              "Cement rotary kiln exhaust nozzles",
              "Petrochemical pyrolysis furnaces",
              "Heat treatment furnace fixtures"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "205 MPa (30 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 217",
              "heatTreatment": "Solution Annealed at 1040°C - 1150°C followed by rapid air or water cooling",
              "inspection": "EN 10204 3.1 MTC / High-temperature mechanical testing"
            },
            "standards": [
              "ASME B16.5",
              "ASTM A182",
              "ASTM A312",
              "ASME Section VIII Div 1"
            ],
            "image": "assets/Product Section/Manufacturer division/Fasteners/stainless-steel.webp"
          },
          {
            "slug": "904l",
            "name": "904L",
            "fullName": "904L Super Austenitic Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS N08904",
              "en": "1.4539 (X1NiCrMoCu25-20-5)"
            },
            "description": "High-alloy super-austenitic stainless steel formulated with 4.5% molybdenum and 1.5% copper, specifically developed to withstand aggressive sulfuric and phosphoric acids.",
            "characteristics": [
              "High PREN (≥ 34), offering extraordinary resistance to warm seawater pitting.",
              "Added copper content provides outstanding resistance to concentrated sulfuric acid across all concentration ranges.",
              "Immune to chloride-induced stress corrosion cracking up to 60°C.",
              "Fully austenitic structure provides high ductility and ease of welding."
            ],
            "applications": [
              "Sulfuric acid manufacturing pipelines",
              "Phosphate fertilizer production units",
              "Flue gas desulfurization (FGD) scrubbers",
              "Seawater reverse osmosis piping",
              "Pulp mill bleaching towers"
            ],
            "specs": {
              "tensileStrength": "490 MPa (71 ksi) minimum",
              "yieldStrength": "220 MPa (32 ksi) minimum",
              "elongation": "35% minimum in 2 inches",
              "hardness": "HBW ≤ 217 (HRB ≤ 95)",
              "heatTreatment": "Solution Annealed at 1090°C - 1150°C followed by rapid water quench",
              "inspection": "EN 10204 Type 3.1 MTC with ASTM G48 pitting test verification"
            },
            "standards": [
              "ASTM A182",
              "ASME B16.5",
              "ASTM B625",
              "NACE MR0175"
            ],
            "image": "assets/Product Section/Manufacturer division/Fasteners/stainless-steel.webp"
          }
        ],
        "image": "assets/Product Section/Manufacturer division/Fasteners/stainless-steel.webp",
        "fallback": "assets/our product new images/fasteners.png"
      },
      {
        "slug": "carbon-steel",
        "name": "Carbon Steel",
        "number": "02",
        "description": "Forged and plate-formed carbon steels engineered for structural strength, high pressure containment, and reliable impact ductility in utility and industrial piping.",
        "applicableStandards": "ASTM A105, ASTM A350 LF2, ASTM A106, ASTM A234 WPB, ASME B16.5",
        "pressureClasses": "Class 150#, 300#, 600#, 900#, 1500#, 2500#",
        "sizeRange": "1/2\" NB to 60\" NB",
        "grades": [
          {
            "slug": "a105",
            "name": "A105",
            "fullName": "ASTM A105 Forged Carbon Steel",
            "designation": {
              "astm": "ASTM A105 / A105N",
              "asme": "ASME SA105",
              "uns": "UNS K03504",
              "en": "1.0460 (C22.8 / P250GH)"
            },
            "description": "The premier forged carbon steel specification for ambient and elevated-temperature piping components, flanges, fittings, and valves.",
            "characteristics": [
              "Excellent machinability and weldability with balanced carbon-manganese metallurgy.",
              "Supplied in normalized (A105N) heat-treated condition for fine grain size and optimal Charpy V-notch toughness.",
              "High proof pressure containment for petroleum refineries, power stations, and steam pipelines.",
              "Fully qualified under ASME Section VIII and ASME B31.3 piping codes."
            ],
            "applications": [
              "Refinery steam and hydrocarbon lines",
              "Boiler feed water piping",
              "Natural gas transmission stations",
              "District heating networks",
              "General industrial utility piping"
            ],
            "specs": {
              "tensileStrength": "485 MPa (70 ksi) minimum",
              "yieldStrength": "250 MPa (36 ksi) minimum",
              "elongation": "22% minimum in 2 inches",
              "hardness": "HBW 137 - 187",
              "heatTreatment": "Normalized at 880°C - 920°C and air cooled",
              "inspection": "EN 10204 Type 3.1 MTC / 100% NDT inspection"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.11",
              "ASTM A105",
              "MSS-SP-79",
              "NACE MR0175 (normalized)"
            ],
            "image": "assets/Product Section/Manufacturer division/Fasteners/carbon.jpeg"
          },
          {
            "slug": "a350-lf2",
            "name": "A350 LF2",
            "fullName": "ASTM A350 LF2 Low-Temperature Carbon Steel",
            "designation": {
              "astm": "ASTM A350 LF2 Class 1",
              "asme": "ASME SA350 LF2",
              "uns": "UNS K03011",
              "en": "1.0566 (TStE 355)"
            },
            "description": "Forged carbon and low-alloy steel specifically treated for notched-bar toughness in low-temperature piping systems down to -46°C (-50°F).",
            "characteristics": [
              "Guaranteed Charpy V-notch impact toughness of 20 Joules (15 ft-lbs) minimum at -46°C (-50°F).",
              "Fine-grained, fully killed steel heat treated by normalizing and tempering or quenching and tempering.",
              "Mandatory for Arctic pipelines, cold gas transmission, and LPG/LNG cryogenic utility lines.",
              "Fully compliant with NACE MR0175 hardness limits (≤ 22 HRC)."
            ],
            "applications": [
              "Arctic oil and gas extraction lines",
              "LPG/LNG transport and storage terminals",
              "Refrigeration compressor piping",
              "Subsea cold-water export lines",
              "Cryogenic gas processing facilities"
            ],
            "specs": {
              "tensileStrength": "485 - 655 MPa (70 - 95 ksi)",
              "yieldStrength": "250 MPa (36 ksi) minimum",
              "elongation": "22% minimum in 2 inches",
              "hardness": "HBW ≤ 197 (HRC ≤ 22)",
              "heatTreatment": "Normalized at 900°C and Tempered at 600°C",
              "inspection": "EN 10204 3.1 / Charpy V-Notch Impact Test at -46°C"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.11",
              "ASTM A350",
              "NACE MR0175 / ISO 15156"
            ],
            "image": "assets/Product Section/Manufacturer division/Fasteners/carbon.jpeg"
          },
          {
            "slug": "a234-wpb",
            "name": "A234 WPB",
            "fullName": "ASTM A234 WPB Wrought Carbon Steel",
            "designation": {
              "astm": "ASTM A234 Grade WPB",
              "asme": "ASME SA234 WPB",
              "uns": "UNS K03006",
              "en": "1.0488 (P275NH)"
            },
            "description": "The standard wrought carbon steel material specification for seamless and welded butt weld elbows, tees, reducers, and pipe caps.",
            "characteristics": [
              "Formed from seamless pipe (ASTM A106 Grade B) or plate (ASTM A285/A516) with uniform grain distribution.",
              "High weldability and ductility for high-speed automated pipe spool fabrication.",
              "Engineered for moderate and high-temperature pressure piping systems.",
              "Supplied in normalized, stress-relieved, or annealed condition."
            ],
            "applications": [
              "Cross-country oil & gas pipelines",
              "Power plant steam header loops",
              "Industrial boiler piping",
              "Chemical plant water injection mains",
              "District heating infrastructure"
            ],
            "specs": {
              "tensileStrength": "415 - 585 MPa (60 - 85 ksi)",
              "yieldStrength": "240 MPa (35 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 197",
              "heatTreatment": "Normalized or hot-formed above 620°C",
              "inspection": "EN 10204 3.1 / 100% Hydrostatic and NDT Testing"
            },
            "standards": [
              "ASME B16.9",
              "ASME B16.28",
              "ASTM A234",
              "MSS-SP-25"
            ],
            "image": "assets/Product Section/Manufacturer division/Fasteners/carbon.jpeg"
          },
          {
            "slug": "a516-gr70",
            "name": "A516 Gr. 70",
            "fullName": "ASTM A516 Grade 70 Pressure Vessel Plate",
            "designation": {
              "astm": "ASTM A516 / A516M Gr. 70",
              "asme": "ASME SA516 Gr. 70",
              "uns": "UNS K02700",
              "en": "1.0473 (P355GH)"
            },
            "description": "The standard boiler and pressure-vessel quality carbon steel plate material for circular blanks, dished heads, and vessel shells operating at ambient and lower temperatures.",
            "characteristics": [
              "Superior notch toughness and weldability with vacuum-degassed, fine-grain steel practice.",
              "High yield strength and resistance to lamellar tearing under transverse welded loads.",
              "Normalized for improved low-temperature impact properties (available with Charpy testing down to -46°C).",
              "Standard material for heavy industrial autoclaves and storage vessels."
            ],
            "applications": [
              "Pressure vessel shells and circular dished ends",
              "Heat exchanger tube sheets and circular blind covers",
              "Storage tank bottom and shell plates",
              "Heavy-wall welded vessel nozzles"
            ],
            "specs": {
              "tensileStrength": "485 - 620 MPa (70 - 90 ksi)",
              "yieldStrength": "260 MPa (38 ksi) minimum",
              "elongation": "21% minimum in 2 inches",
              "hardness": "HBW ≤ 187",
              "heatTreatment": "Normalized above 40 mm plate thickness",
              "inspection": "EN 10204 3.1 / Ultrasonic testing to ASTM A435 / A578"
            },
            "standards": [
              "ASTM A516",
              "ASME SA516",
              "ASME Section VIII Div 1 & 2"
            ],
            "image": "assets/Product Section/Manufacturer division/Fasteners/carbon.jpeg"
          }
        ],
        "image": "assets/Product Section/Manufacturer division/Fasteners/carbon.jpeg",
        "fallback": "assets/our product new images/fasteners.png"
      },
      {
        "slug": "alloy-steel",
        "name": "Alloy Steel",
        "number": "03",
        "description": "Chromium-molybdenum alloy steels engineered for elevated-temperature creep strength, hydrogen attack resistance, and severe power boiler and hydroprocessing service.",
        "applicableStandards": "ASTM A182, ASTM A234, ASTM A335, ASME B16.5, ASME B16.11",
        "pressureClasses": "Class 300#, 600#, 900#, 1500#, 2500#",
        "sizeRange": "1/2\" NB to 36\" NB",
        "grades": [
          {
            "slug": "f11",
            "name": "F11",
            "fullName": "ASTM A182 F11 (1.25% Cr - 0.5% Mo)",
            "designation": {
              "astm": "ASTM A182 F11 Class 2",
              "asme": "ASME SA182 F11",
              "uns": "UNS K11572",
              "en": "1.7335 (13CrMo4-5)"
            },
            "description": "Nominal 1.25% chromium, 0.5% molybdenum alloy steel engineered for high-temperature steam lines and refinery hydrocrackers operating up to 550°C.",
            "characteristics": [
              "High creep rupture strength and resistance to graphitization at elevated steam temperatures.",
              "Resistance to high-temperature hydrogen attack (HTHA) according to Nelson curve criteria.",
              "Supplied in normalized and tempered condition for structural microstructural stability.",
              "Standard alloy for thermal power plant main steam and hot reheat lines."
            ],
            "applications": [
              "Main steam headers in thermal power plants",
              "Hydrodesulfurization reactor piping",
              "Superheater piping and headers",
              "Refinery furnace transfer lines"
            ],
            "specs": {
              "tensileStrength": "485 MPa (70 ksi) minimum",
              "yieldStrength": "275 MPa (40 ksi) minimum",
              "elongation": "20% minimum in 2 inches",
              "hardness": "HBW 143 - 207",
              "heatTreatment": "Normalized at 900°C - 950°C and Tempered at 650°C minimum",
              "inspection": "EN 10204 3.1 / Hot tensile test verified"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.11",
              "ASTM A182",
              "API 941"
            ],
            "image": "assets/Product Section/Manufacturer division/Fasteners/alloy steel.avif"
          },
          {
            "slug": "f22",
            "name": "F22",
            "fullName": "ASTM A182 F22 (2.25% Cr - 1.0% Mo)",
            "designation": {
              "astm": "ASTM A182 F22 Class 3",
              "asme": "ASME SA182 F22",
              "uns": "UNS K21590",
              "en": "1.7380 (10CrMo9-10)"
            },
            "description": "Nominal 2.25% chromium, 1.0% molybdenum alloy steel offering superior creep endurance, corrosion resistance to sulfur-bearing oil streams, and hydrogen resistance up to 600°C.",
            "characteristics": [
              "Elevated creep resistance and high allowable design stress under ASME Section I and VIII.",
              "Enhanced resistance to high-pressure hydrogen embrittlement in hydroprocessing units.",
              "Quenched and tempered or normalized and tempered for high fracture toughness.",
              "Specified for high-pressure catalytic cracking and supercritical boiler loops."
            ],
            "applications": [
              "Hydrocracker reactor nozzles and loop piping",
              "Supercritical boiler superheater headers",
              "Gasifier syngas transfer lines",
              "Petrochemical high-pressure steam headers"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "310 MPa (45 ksi) minimum",
              "elongation": "20% minimum in 2 inches",
              "hardness": "HBW 156 - 207",
              "heatTreatment": "Normalized at 900°C - 950°C and Tempered at 675°C minimum",
              "inspection": "EN 10204 3.1 / Ultrasonic and Magnetic Particle Inspection"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.9",
              "ASTM A182",
              "ASTM A335 Grade P22"
            ],
            "image": "assets/Product Section/Manufacturer division/Fasteners/alloy steel.avif"
          },
          {
            "slug": "f91",
            "name": "F91",
            "fullName": "ASTM A182 F91 (9% Cr - 1% Mo - V - Nb)",
            "designation": {
              "astm": "ASTM A182 F91 Type 1",
              "asme": "ASME SA182 F91",
              "uns": "UNS K90901",
              "en": "1.4903 (X10CrMoVNb9-1)"
            },
            "description": "Advanced modified 9Cr-1Mo-V-Nb martensitic alloy steel engineered for supercritical and ultra-supercritical (USC) power stations operating up to 620°C with reduced wall thickness.",
            "characteristics": [
              "Twice the creep rupture strength of F22 at 600°C, enabling thinner component wall sections.",
              "Lower thermal stress and reduced cyclic thermal fatigue in high-efficiency power boilers.",
              "Requires tight control of heat treatment: normalizing at 1040°C–1080°C and tempering at 730°C–800°C.",
              "Strict compliance with hardness and microstructural martensite grain requirements."
            ],
            "applications": [
              "Ultra-supercritical power plant main steam lines",
              "Combined cycle gas turbine (CCGT) HRSG headers",
              "High-pressure steam bypass manifolds",
              "Nuclear power steam generator loops"
            ],
            "specs": {
              "tensileStrength": "585 - 760 MPa (85 - 110 ksi)",
              "yieldStrength": "415 MPa (60 ksi) minimum",
              "elongation": "20% minimum in 2 inches",
              "hardness": "HBW 190 - 248",
              "heatTreatment": "Normalized at 1050°C and Tempered at 750°C - 780°C",
              "inspection": "EN 10204 Type 3.1 / 100% Ultrasonic & Hardness verification"
            },
            "standards": [
              "ASME B16.5",
              "ASTM A182",
              "ASTM A335 Grade P91",
              "EPRI Guidelines"
            ],
            "image": "assets/Product Section/Manufacturer division/Fasteners/alloy steel.avif"
          }
        ],
        "image": "assets/Product Section/Manufacturer division/Fasteners/alloy steel.avif",
        "fallback": "assets/our product new images/fasteners.png"
      },
      {
        "slug": "duplex",
        "name": "Duplex & Super Duplex",
        "number": "04",
        "description": "Dual-phase austenitic-ferritic microstructures delivering yield strength roughly twice that of standard stainless steel combined with superior resistance to chloride stress corrosion cracking.",
        "applicableStandards": "ASTM A182, ASTM A240, ASTM A790, ASTM A815, ASME B16.5",
        "pressureClasses": "Class 150#, 300#, 600#, 900#, 1500#, 2500#",
        "sizeRange": "1/2\" NB to 36\" NB",
        "grades": [
          {
            "slug": "2205",
            "name": "2205",
            "fullName": "2205 Standard Duplex (UNS S31803 / S32205)",
            "designation": {
              "astm": "ASTM A182 F51 / F60",
              "asme": "ASME SA182 F51 / F60",
              "uns": "UNS S31803 / S32205",
              "en": "1.4462 (X2CrNiMoN22-5-3)"
            },
            "description": "The workhorse 22% chromium duplex stainless steel with approximately 50/50 ferrite-austenite phase balance, offering high yield strength and high chloride resistance (PREN 35).",
            "characteristics": [
              "Yield strength roughly twice that of austenitic 316L, allowing substantial weight reduction.",
              "High resistance to chloride stress corrosion cracking in sour environments.",
              "High resistance to erosion-corrosion and pitting in seawater and brackish cooling water.",
              "Temperature limit typically restricted to -50°C to +280°C to prevent 475°C embrittlement."
            ],
            "applications": [
              "Offshore oil & gas topside piping",
              "Chemical tanker cargo holds and piping",
              "Desalination high-pressure reverse osmosis headers",
              "Flue gas cleaning systems",
              "Biofuel processing digesters"
            ],
            "specs": {
              "tensileStrength": "655 MPa (95 ksi) minimum",
              "yieldStrength": "450 MPa (65 ksi) minimum",
              "elongation": "25% minimum in 2 inches",
              "hardness": "HBW ≤ 290 (HRC ≤ 28)",
              "heatTreatment": "Solution Annealed at 1020°C - 1100°C and rapidly water quenched",
              "inspection": "EN 10204 3.1 / Phase balance check (40-60% ferrite) / ASTM G48 Method A test"
            },
            "standards": [
              "ASME B16.5",
              "ASTM A182",
              "NORSK M-630 MDS D44",
              "NACE MR0175 / ISO 15156"
            ],
            "image": "assets/Product Section/Manufacturer division/Fasteners/duplex.jpg"
          },
          {
            "slug": "2507",
            "name": "2507",
            "fullName": "2507 Super Duplex (UNS S32750)",
            "designation": {
              "astm": "ASTM A182 F53",
              "asme": "ASME SA182 F53",
              "uns": "UNS S32750",
              "en": "1.4410 (X2CrNiMoN25-7-4)"
            },
            "description": "25% chromium super duplex stainless steel with 4% molybdenum and 0.28% nitrogen, providing exceptional pitting and crevice corrosion resistance with PREN ≥ 42.",
            "characteristics": [
              "PREN ≥ 42 guaranteeing immunity to pitting in high-temperature chlorinated seawater.",
              "Exceptionally high mechanical yield strength (≥ 550 MPa) for high-pressure subsea lines.",
              "Immune to chloride stress corrosion cracking in aggressive sour gas reservoirs.",
              "Manufactured strictly to NORSOK M-630 and NACE MR0175 compliance."
            ],
            "applications": [
              "Subsea manifolds, risers, and Christmas tree piping",
              "Seawater fire-water ring mains",
              "Offshore high-pressure sour gas export lines",
              "Geothermal high-chloride brine piping",
              "Chemical plants handling hot chlorinated media"
            ],
            "specs": {
              "tensileStrength": "750 MPa (109 ksi) minimum",
              "yieldStrength": "550 MPa (80 ksi) minimum",
              "elongation": "15% minimum in 2 inches",
              "hardness": "HBW ≤ 310 (HRC ≤ 32)",
              "heatTreatment": "Solution Annealed at 1050°C - 1125°C and water quenched",
              "inspection": "EN 10204 3.1 / Microstructure audit / ASTM G48 Method A test at 50°C"
            },
            "standards": [
              "ASME B16.5",
              "ASTM A182 F53",
              "NORSOK M-630 MDS D54",
              "ISO 15156"
            ],
            "image": "assets/Product Section/Manufacturer division/Fasteners/duplex.jpg"
          }
        ],
        "image": "assets/Product Section/Manufacturer division/Fasteners/duplex.jpg",
        "fallback": "assets/our product new images/fasteners.png"
      },
      {
        "slug": "high-alloy",
        "name": "High Alloy",
        "number": "05",
        "description": "Nickel-chromium-molybdenum superalloys engineered to withstand severe chemical environments, high temperatures, boiling mineral acids, and extreme mechanical stress.",
        "applicableStandards": "ASTM B564, ASTM B366, ASTM B622, ASME B16.5, ASME B16.11",
        "pressureClasses": "Class 150#, 300#, 600#, 900#, 1500#, 2500#",
        "sizeRange": "1/2\" NB to 24\" NB",
        "grades": [
          {
            "slug": "inconel-625",
            "name": "Inconel 625",
            "fullName": "Inconel 625 (UNS N06625)",
            "designation": {
              "astm": "ASTM B564 / B444",
              "asme": "ASME SB564",
              "uns": "UNS N06625",
              "en": "2.4856 (NiCr22Mo9Nb)"
            },
            "description": "Nickel-chromium-molybdenum alloy with niobium addition providing solid solution strengthening without heat treatment, resistant from cryogenic temperatures up to 980°C.",
            "characteristics": [
              "Virtually immune to chloride-induced stress corrosion cracking.",
              "Exceptional fatigue and thermal-fatigue strength in marine and aerospace environments.",
              "High resistance to a wide range of organic and inorganic acids, including wet chlorine.",
              "Certified for NACE sour service and nuclear reactor core piping."
            ],
            "applications": [
              "Marine exhaust scrubbers",
              "Subsea wellhead equipment",
              "Chemical waste disposal incinerator nozzles",
              "Nuclear reactor control rod drive piping",
              "Sour gas production downhole components"
            ],
            "specs": {
              "tensileStrength": "827 MPa (120 ksi) minimum",
              "yieldStrength": "414 MPa (60 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 220",
              "heatTreatment": "Annealed at 980°C - 1050°C",
              "inspection": "EN 10204 Type 3.1 / 100% Ultrasonic inspection"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B564",
              "NACE MR0175",
              "AMS 5666"
            ],
            "image": "assets/Product Section/Manufacturer division/Fasteners/high alloy.webp"
          },
          {
            "slug": "hastelloy-c276",
            "name": "Hastelloy C276",
            "fullName": "Hastelloy C276 (UNS N10276)",
            "designation": {
              "astm": "ASTM B564 / B575",
              "asme": "ASME SB564",
              "uns": "UNS N10276",
              "en": "2.4819 (NiMo16Cr15W)"
            },
            "description": "The universal corrosion-resistant nickel-molybdenum-chromium superalloy with tungsten, engineered to withstand aggressive wet chlorine gas, hypochlorite, and boiling mineral acids.",
            "characteristics": [
              "Unmatched resistance to localized pitting, crevice corrosion, and stress corrosion cracking.",
              "One of the few materials to withstand wet chlorine gas, hypochlorite, and chlorine dioxide solutions.",
              "Low carbon content minimizes carbide precipitation during welding, preserving as-welded corrosion resistance.",
              "Proven longevity in harsh chemical synthesis reactors."
            ],
            "applications": [
              "Flue gas desulfurization (FGD) scrubbers",
              "Sulfuric and hydrochloric acid synthesis plants",
              "Chlorination reaction systems",
              "Pharmaceutical active ingredient reactors",
              "Hazardous waste treatment vessels"
            ],
            "specs": {
              "tensileStrength": "690 MPa (100 ksi) minimum",
              "yieldStrength": "283 MPa (41 ksi) minimum",
              "elongation": "40% minimum in 2 inches",
              "hardness": "HBW ≤ 220",
              "heatTreatment": "Solution heat-treated at 1120°C and water quenched",
              "inspection": "EN 10204 Type 3.1 / Microstructure and ASTM G28 corrosion testing"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B564",
              "NACE MR0175 / ISO 15156"
            ],
            "image": "assets/Product Section/Manufacturer division/Fasteners/high alloy.webp"
          },
          {
            "slug": "monel-400",
            "name": "Monel 400",
            "fullName": "Monel 400 (UNS N04400)",
            "designation": {
              "astm": "ASTM B564 / B127",
              "asme": "ASME SB564",
              "uns": "UNS N04400",
              "en": "2.4360 (NiCu30Fe)"
            },
            "description": "Ductile nickel-copper alloy (67% Ni, 30% Cu) exhibiting exceptional resistance to rapidly flowing seawater, hydrofluoric acid, sulfuric acid, and high-temperature alkalies.",
            "characteristics": [
              "Standard engineering material for marine salt water immersion and splash zones.",
              "Exceptional resistance to hydrofluoric acid (HF) in all concentrations up to the boiling point.",
              "Resistant to non-oxidizing mineral acids and deaerated salt solutions.",
              "Non-magnetic down to room temperature with high impact toughness."
            ],
            "applications": [
              "Hydrofluoric acid alkylation units in oil refineries",
              "Marine propeller shafts and seawater valve trims",
              "Offshore splash-zone sheathing",
              "Chlorinated solvent recovery systems",
              "Salt plant brine evaporators"
            ],
            "specs": {
              "tensileStrength": "480 MPa (70 ksi) minimum",
              "yieldStrength": "195 MPa (28 ksi) minimum",
              "elongation": "35% minimum in 2 inches",
              "hardness": "HBW 110 - 150",
              "heatTreatment": "Annealed at 760°C - 900°C followed by water quench",
              "inspection": "EN 10204 3.1 / Ultrasonic and Dye Penetrant testing"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B564",
              "NACE MR0175",
              "MSS-SP-25"
            ],
            "image": "assets/Product Section/Manufacturer division/Fasteners/high alloy.webp"
          }
        ],
        "image": "assets/Product Section/Manufacturer division/Fasteners/high alloy.webp",
        "fallback": "assets/our product new images/fasteners.png"
      },
      {
        "slug": "nickel",
        "name": "Nickel",
        "number": "06",
        "description": "Commercially pure nickel alloys engineered for caustic soda evaporators, non-oxidizing halogen systems, and high-purity chemical processing.",
        "applicableStandards": "ASTM B564, ASTM B160, ASTM B162, ASME B16.5",
        "pressureClasses": "Class 150#, 300#, 600#",
        "sizeRange": "1/2\" NB to 24\" NB",
        "grades": [
          {
            "slug": "nickel-200",
            "name": "Nickel 200",
            "fullName": "Nickel 200 (UNS N02200)",
            "designation": {
              "astm": "ASTM B564 / B160",
              "asme": "ASME SB564",
              "uns": "UNS N02200",
              "en": "2.4066 (Ni99.2)"
            },
            "description": "Commercially pure (99.6%) wrought nickel providing exceptional thermal conductivity, electrical properties, and uncompromised resistance to hot caustic alkalies.",
            "characteristics": [
              "Immune to stress corrosion cracking in all concentrations of boiling caustic soda (NaOH).",
              "Excellent resistance to dry fluorine, chlorine, and hydrogen chloride gases.",
              "High thermal conductivity and low electrical resistivity for electrochemical electrodes.",
              "Maintains cryogenic mechanical ductility without ductile-to-brittle transition."
            ],
            "applications": [
              "Caustic soda production evaporators",
              "Synthetic fiber manufacturing equipment",
              "Chlorine and hydrogen chloride dry gas transfer",
              "Food and soap processing reaction vessels"
            ],
            "specs": {
              "tensileStrength": "380 MPa (55 ksi) minimum",
              "yieldStrength": "105 MPa (15 ksi) minimum",
              "elongation": "40% minimum in 2 inches",
              "hardness": "HBW ≤ 130",
              "heatTreatment": "Annealed at 700°C - 900°C",
              "inspection": "EN 10204 Type 3.1 MTC"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B564",
              "ASME Section VIII Div 1"
            ],
            "image": "assets/Product Section/Manufacturer division/Fasteners/nikle.jpeg"
          },
          {
            "slug": "nickel-201",
            "name": "Nickel 201",
            "fullName": "Nickel 201 (UNS N02201)",
            "designation": {
              "astm": "ASTM B564 / B160",
              "asme": "ASME SB564",
              "uns": "UNS N02201",
              "en": "2.4068 (LC-Ni99.2)"
            },
            "description": "Low-carbon version (C ≤ 0.02%) of Nickel 200 engineered to prevent graphitization and intergranular embrittlement during service above 315°C (600°F).",
            "characteristics": [
              "Certified for continuous service at temperatures exceeding 315°C (600°F) up to 650°C.",
              "Low carbon prevents intercrystalline graphite precipitation in caustic environments.",
              "Exceptional resistance to molten hydroxide and fused caustic salts.",
              "High ductility and ease of cold forming and orbital welding."
            ],
            "applications": [
              "High-temperature caustic concentration evaporators",
              "Vinyl chloride monomer (VCM) thermal reactors",
              "Fluorochemical reactors",
              "Molten salt nuclear heat transfer loops"
            ],
            "specs": {
              "tensileStrength": "345 MPa (50 ksi) minimum",
              "yieldStrength": "70 MPa (10 ksi) minimum",
              "elongation": "40% minimum in 2 inches",
              "hardness": "HBW ≤ 120",
              "heatTreatment": "Annealed at 700°C - 900°C",
              "inspection": "EN 10204 Type 3.1 MTC / Carbon verification"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B564",
              "DIN 17750"
            ],
            "image": "assets/Product Section/Manufacturer division/Fasteners/nikle.jpeg"
          }
        ],
        "image": "assets/Product Section/Manufacturer division/Fasteners/nikle.jpeg",
        "fallback": "assets/our product new images/fasteners.png"
      },
      {
        "slug": "titanium",
        "name": "Titanium",
        "number": "07",
        "description": "Lightweight, ultra-corrosion-resistant titanium alloys delivering total immunity to marine seawater, wet chlorine, and organic chlorides with extraordinary strength-to-weight ratios.",
        "applicableStandards": "ASTM B381, ASTM B348, ASTM B861, ASME B16.5",
        "pressureClasses": "Class 150#, 300#, 600#, 900#",
        "sizeRange": "1/2\" NB to 24\" NB",
        "grades": [
          {
            "slug": "grade-2",
            "name": "Grade 2",
            "fullName": "Titanium Grade 2 (UNS R50400)",
            "designation": {
              "astm": "ASTM B381 / B348 Gr. 2",
              "asme": "ASME SB381",
              "uns": "UNS R50400",
              "en": "3.7035 (Ti2)"
            },
            "description": "The workhorse commercially pure titanium grade offering the optimum balance of moderate strength, high ductility, excellent weldability, and total seawater corrosion resistance.",
            "characteristics": [
              "Forms a tenacious, self-healing titanium dioxide (TiO2) passive oxide film instantly upon exposure to oxygen.",
              "Complete immunity to marine microbiologically influenced corrosion (MIC) and crevice attack.",
              "Approximately 45% lighter than steel, significantly reducing topside platform loads.",
              "Certified biocompatible for medical and food-contact installations."
            ],
            "applications": [
              "Seawater desalination reverse osmosis and multi-stage flash units",
              "Offshore oil platform seawater cooling systems",
              "Chlor-alkali electrolytic cell anode connections",
              "Bleaching towers in pulp and paper mills"
            ],
            "specs": {
              "tensileStrength": "345 MPa (50 ksi) minimum",
              "yieldStrength": "275 MPa (40 ksi) minimum",
              "elongation": "20% minimum in 2 inches",
              "hardness": "HBW ≤ 200",
              "heatTreatment": "Stress Relieved at 500°C - 550°C",
              "inspection": "EN 10204 3.1 / Gas analysis (C, O, N, H) verified"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B381",
              "NACE MR0175 / ISO 15156"
            ],
            "image": "assets/Product Section/Manufacturer division/Fasteners/titainium.jpeg"
          },
          {
            "slug": "grade-5",
            "name": "Grade 5",
            "fullName": "Titanium Grade 5 (Ti-6Al-4V / UNS R56400)",
            "designation": {
              "astm": "ASTM B381 / B348 Gr. 5",
              "asme": "ASME SB381",
              "uns": "UNS R56400",
              "en": "3.7165 (Ti6Al4V)"
            },
            "description": "Alpha-beta titanium alloy containing 6% aluminum and 4% vanadium, delivering twice the mechanical tensile strength of commercially pure grades with high fatigue endurance.",
            "characteristics": [
              "Tensile strength exceeding 895 MPa (130 ksi) with low density of 4.43 g/cm³.",
              "Exceptional strength-to-weight ratio for aerospace and subsea structural bolting.",
              "Maintains mechanical properties up to 400°C while resisting high-velocity seawater erosion.",
              "Heat treatable by solution treating and aging (STA)."
            ],
            "applications": [
              "Subsea high-pressure wellhead riser bolts",
              "Aerospace hydraulic fluid connections",
              "High-speed marine hydrofoil fasteners",
              "Deepwater oceanographic exploration casings"
            ],
            "specs": {
              "tensileStrength": "895 MPa (130 ksi) minimum",
              "yieldStrength": "828 MPa (120 ksi) minimum",
              "elongation": "10% minimum in 2 inches",
              "hardness": "HRC 30 - 36",
              "heatTreatment": "Mill Annealed at 700°C - 785°C and air cooled",
              "inspection": "EN 10204 Type 3.1 MTC / Ultrasonic testing"
            },
            "standards": [
              "ASTM B381",
              "ASME B16.5",
              "AMS 4928",
              "NACE MR0175"
            ],
            "image": "assets/Product Section/Manufacturer division/Fasteners/titainium.jpeg"
          }
        ],
        "image": "assets/Product Section/Manufacturer division/Fasteners/titainium.jpeg",
        "fallback": "assets/our product new images/fasteners.png"
      },
      {
        "slug": "copper",
        "name": "Copper",
        "number": "08",
        "description": "Copper-nickel alloys, brasses, and pure copper engineered for high thermal/electrical conductivity, natural marine biofouling resistance, and naval piping circuits.",
        "applicableStandards": "ASTM B151, ASTM B171, ASTM B466, ASME B16.5, DIN 86019",
        "pressureClasses": "Class 150#, 300#, DIN PN10 - PN16",
        "sizeRange": "1/2\" NB to 24\" NB",
        "grades": [
          {
            "slug": "cu-ni-90-10",
            "name": "Cu-Ni 90/10",
            "fullName": "Copper-Nickel 90/10 (C70600)",
            "designation": {
              "astm": "ASTM B151 / B171 C70600",
              "asme": "ASME SB151 C70600",
              "uns": "UNS C70600",
              "en": "2.0872 (CuNi10Fe1Mn)"
            },
            "description": "90% copper, 10% nickel alloy formulated with controlled iron and manganese additions, delivering natural resistance to marine biofouling and seawater impingement erosion.",
            "characteristics": [
              "Natural antimicrobial and macro-fouling resistance; eliminates marine barnacle growth.",
              "High thermal conductivity for marine condensers and heat exchanger tubing.",
              "Resistant to stress corrosion cracking in high-salinity seawater.",
              "Readily brazeable and weldable by TIG and MIG processes."
            ],
            "applications": [
              "Naval warship seawater cooling mains",
              "Offshore platform firewater ring mains",
              "Commercial shipbuilding ballast piping",
              "Desalination multi-stage flash heat recovery tubes"
            ],
            "specs": {
              "tensileStrength": "310 MPa (45 ksi) minimum",
              "yieldStrength": "125 MPa (18 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW 70 - 100",
              "heatTreatment": "Annealed at 600°C - 750°C",
              "inspection": "EN 10204 Type 3.1 MTC / Eddy current inspection"
            },
            "standards": [
              "ASME B16.5",
              "EEMUA 145 / 234",
              "DIN 86019",
              "MIL-C-15726"
            ],
            "image": "assets/New Product img/fasteners/copper-nickel-fasteners.jpg"
          },
          {
            "slug": "cu-ni-70-30",
            "name": "Cu-Ni 70/30",
            "fullName": "Copper-Nickel 70/30 (C71500)",
            "designation": {
              "astm": "ASTM B151 / B171 C71500",
              "asme": "ASME SB151 C71500",
              "uns": "UNS C71500",
              "en": "2.0882 (CuNi30Mn1Fe)"
            },
            "description": "70% copper, 30% nickel alloy engineered for higher seawater velocity tolerances (up to 4.5 m/s) and severe naval service where high impingement resistance is mandatory.",
            "characteristics": [
              "Permissible seawater flow velocity up to 4.5 m/s without protective film breakdown.",
              "Superior resistance to hydrogen embrittlement and sulfide stress cracking.",
              "Enhanced mechanical strength compared to 90/10 grade.",
              "Standard naval submarine and destroyer condenser specification."
            ],
            "applications": [
              "Submarine seawater intake systems",
              "High-velocity naval auxiliary condenser piping",
              "Offshore oil rig cooling manifolds",
              "Desalination brine heater bundles"
            ],
            "specs": {
              "tensileStrength": "380 MPa (55 ksi) minimum",
              "yieldStrength": "140 MPa (20 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW 80 - 120",
              "heatTreatment": "Annealed at 650°C - 800°C",
              "inspection": "EN 10204 Type 3.1 MTC / Hydrostatic verification"
            },
            "standards": [
              "ASME B16.5",
              "EEMUA 145 / 234",
              "DIN 86019",
              "MIL-C-15726"
            ],
            "image": "assets/New Product img/fasteners/copper-nickel-fasteners.jpg"
          }
        ],
        "image": "assets/New Product img/fasteners/copper-nickel-fasteners.jpg",
        "fallback": "assets/our product new images/fasteners.png"
      },
      {
        "slug": "aluminium",
        "name": "Aluminium",
        "number": "09",
        "description": "High-strength wrought and extruded aluminium alloys delivering lightweight structural capability, high thermal dissipation, and cryogenic ductility for aerospace and marine service.",
        "applicableStandards": "ASTM B221, ASTM B241, ASTM B209, ASME B16.5",
        "pressureClasses": "Class 150#, PN10, PN16",
        "sizeRange": "1/2\" NB to 24\" NB",
        "grades": [
          {
            "slug": "6061-t6",
            "name": "6061-T6",
            "fullName": "6061-T6 Structural Aluminium",
            "designation": {
              "astm": "ASTM B221 / B241 Gr. 6061",
              "asme": "ASME SB221",
              "uns": "UNS A96061",
              "en": "3.3211 (AlMg1SiCu)"
            },
            "description": "Precipitation-hardened magnesium-silicon alloy delivering high structural yield strength, excellent CNC machinability, and clean surface anodizing characteristics.",
            "characteristics": [
              "High strength-to-weight ratio with density of only 2.70 g/cm³.",
              "Excellent atmospheric corrosion resistance in industrial environments.",
              "Readily machinable to tight geometric tolerances on multi-axis CNC machines.",
              "Excellent TIG/MIG weldability using 4043 or 5356 filler wires."
            ],
            "applications": [
              "Aerospace fuel and hydraulic fluid lines",
              "Cryogenic air separation plant piping",
              "Automotive racing fluid manifolds",
              "Precision robotic automation frames"
            ],
            "specs": {
              "tensileStrength": "290 MPa (42 ksi) minimum",
              "yieldStrength": "240 MPa (35 ksi) minimum",
              "elongation": "8% - 10% in 2 inches",
              "hardness": "HBW ~ 95",
              "heatTreatment": "Solution heat-treated and artificially aged (T6 temper)",
              "inspection": "EN 10204 Type 3.1 MTC / Conductivity check"
            },
            "standards": [
              "ASTM B221",
              "ASTM B241",
              "AMS 4027",
              "ASME B16.5"
            ],
            "image": "assets/fasteners/types/aluminum-fasteners.jpg"
          },
          {
            "slug": "5083-h116",
            "name": "5083-H116",
            "fullName": "5083-H116 Marine Aluminium",
            "designation": {
              "astm": "ASTM B209 / B221 Gr. 5083",
              "asme": "ASME SB209",
              "uns": "UNS A95083",
              "en": "3.3547 (AlMg4.5Mn0.7)"
            },
            "description": "High-magnesium marine alloy engineered specifically for exceptional corrosion resistance in seawater and cryogenic storage tanks down to -269°C without embrittlement.",
            "characteristics": [
              "The premier structural aluminium alloy for saltwater immersion.",
              "Maintains exceptional ductility and toughness at cryogenic temperatures down to liquid helium (-269°C).",
              "High weld joint efficiency without requiring post-weld solution treatment.",
              "Certified by DNV, Lloyd's Register, and ABS for marine construction."
            ],
            "applications": [
              "LNG/LPG cryogenic cargo tank piping",
              "High-speed marine ferry hull piping",
              "Naval radar mast structural flanges",
              "Chemical rail tanker vessels"
            ],
            "specs": {
              "tensileStrength": "305 MPa (44 ksi) minimum",
              "yieldStrength": "215 MPa (31 ksi) minimum",
              "elongation": "10% minimum in 2 inches",
              "hardness": "HBW ~ 85",
              "heatTreatment": "Strain-hardened and stabilized (H116 temper) for intergranular corrosion resistance",
              "inspection": "EN 10204 3.1 / Nitric Acid Mass Loss Test (NAMLT) to ASTM G67"
            },
            "standards": [
              "ASTM B209",
              "ASTM B221",
              "DNV-GL Marine Rules",
              "ASME Section VIII"
            ],
            "image": "assets/fasteners/types/aluminum-fasteners.jpg"
          }
        ],
        "image": "assets/fasteners/types/aluminum-fasteners.jpg",
        "fallback": "assets/our product new images/fasteners.png"
      }
    ]
  },
  {
    "slug": "pipes-tubes",
    "name": "Pipes",
    "title": "PIPES & TUBES",
    "suffix": "Pipes & Tubes",
    "eyebrow": "ASTM A312 / A335 / A790 HEAVY INDUSTRIAL TUBING",
    "heroImage": "assets/our product new images/pipe.png",
    "heroTag": "SEAMLESS & WELDED INDUSTRIAL PIPING",
    "description": "Apollo Forge & Fittings supplies seamless and welded industrial pipes and precision instrumentation tubing for refinery, petrochemical, offshore, and cryogenic fluid transfer.",
    "overview": {
      "lead": "Industrial pipes and tubes provide pressurized containment for high-temperature steam, corrosive acids, hydrocarbons, and cryogenic gases. Available in standard nominal pipe sizes (NPS) and precise outside diameters.",
      "highlights": [
        {
          "title": "Manufacturing Methods",
          "desc": "Supplied in Seamless (hot-extruded/cold-drawn) and Welded (ERW, EFW, SAW) configurations."
        },
        {
          "title": "Testing Protocols",
          "desc": "100% Eddy Current, Ultrasonic, and Hydrostatic testing to verified ASME Section III / VIII standards."
        },
        {
          "title": "End Preparations",
          "desc": "Plain End (PE), Beveled End (BE) for butt-welding, and Threaded & Coupled (T&C)."
        },
        {
          "title": "Wall Schedules",
          "desc": "Sch 5S through Sch XXS conforming strictly to ASME B36.10M and ASME B36.19M."
        }
      ]
    },
    "hasTypes": false,
    "types": [],
    "materials": [
      {
        "slug": "stainless-steel",
        "name": "Stainless Steel",
        "number": "01",
        "description": "Austenitic and martensitic stainless steels offering superior resistance to chemical attack, pitting, and high-temperature scaling across process industries.",
        "applicableStandards": "ASTM A182, ASTM A240, ASTM A312, ASTM A403, ASME B16.5",
        "pressureClasses": "Class 150#, 300#, 600#, 900#, 1500#, 2500#",
        "sizeRange": "1/2\" NB to 60\" NB (DN15 to DN1500)",
        "grades": [
          {
            "slug": "304",
            "name": "304",
            "fullName": "304 Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S30400",
              "en": "1.4301 (X5CrNi18-10)"
            },
            "description": "The classic 18/8 austenitic stainless steel delivering dependable general corrosion resistance, excellent formability, and cryogenic impact toughness.",
            "characteristics": [
              "Excellent atmospheric and chemical corrosion resistance in organic and mildly oxidizing acids.",
              "Retains high impact toughness from cryogenic temperatures (-196°C) up to 800°C.",
              "Readily weldable by all standard commercial fusion methods without requiring preheat.",
              "Non-magnetic in the solution-annealed condition with moderate work hardening rate."
            ],
            "applications": [
              "Chemical processing manifolds",
              "Food, dairy & beverage piping",
              "Petrochemical low-temperature loops",
              "Cryogenic storage vessel nozzles",
              "Architectural structural piping"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "205 MPa (30 ksi) minimum",
              "elongation": "40% minimum in 2 inches",
              "hardness": "HBW ≤ 201 (HRB ≤ 92)",
              "heatTreatment": "Solution Annealed at 1040°C - 1120°C followed by rapid water quench",
              "inspection": "EN 10204 Type 3.1 MTC with complete chemical and mechanical test results"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.47",
              "ASTM A182",
              "ASME SA182",
              "MSS-SP-43",
              "NACE MR0175 (annealed)"
            ],
            "image": "assets/Product Images/Pipes and Tubes/stainless steel.png"
          },
          {
            "slug": "304l",
            "name": "304L",
            "fullName": "304L Low-Carbon Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S30403",
              "en": "1.4307 (X2CrNi18-9)"
            },
            "description": "Extra-low carbon modification (C ≤ 0.030%) that eliminates chromium carbide precipitation during welding, providing immunity to intergranular corrosion in as-welded assemblies.",
            "characteristics": [
              "Immunity to sensitization and intergranular attack in heat-affected zones (HAZ) of welded components.",
              "Eliminates the mandatory requirement for post-weld solution annealing.",
              "Maintains cryogenic mechanical ductility down to liquid nitrogen temperatures (-196°C).",
              "Compatible with dual-certified 304/304L pressure vessel specifications."
            ],
            "applications": [
              "Heavy-wall welded piping systems",
              "Wet chemical processing lines",
              "Refinery flare header lines",
              "Marine deck piping systems",
              "Pulp and paper bleaching equipment"
            ],
            "specs": {
              "tensileStrength": "485 MPa (70 ksi) minimum",
              "yieldStrength": "170 MPa (25 ksi) minimum",
              "elongation": "40% minimum in 2 inches",
              "hardness": "HBW ≤ 201",
              "heatTreatment": "Solution Annealed at 1040°C - 1100°C and water quenched",
              "inspection": "EN 10204 Type 3.1 MTC / NACE MR0175 compliant"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.9",
              "ASTM A182",
              "ASTM A403",
              "ASME Section VIII Div 1"
            ],
            "image": "assets/Product Images/Pipes and Tubes/stainless steel.png"
          },
          {
            "slug": "316",
            "name": "316",
            "fullName": "316 Molybdenum-Bearing Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S31600",
              "en": "1.4401 (X5CrNiMo17-12-2)"
            },
            "description": "Formulated with 2.0% to 3.0% molybdenum to significantly improve localized resistance to pitting and crevice corrosion in chloride and halide-bearing environments.",
            "characteristics": [
              "Significantly higher pitting resistance equivalent (PREN ~ 23-25) compared to 304.",
              "Superior resistance to sulfuric, phosphoric, acetic, and tartaric acid solutions.",
              "Elevated creep rupture strength at elevated operating temperatures up to 870°C.",
              "Standard specification for marine atmospheres, offshore platforms, and coastal chemical plants."
            ],
            "applications": [
              "Offshore oil & gas production manifolds",
              "Marine seawater cooling circuits",
              "Pharmaceutical reaction vessels",
              "Petrochemical acid-wash scrubbers",
              "Fertilizer production piping"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "205 MPa (30 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 217",
              "heatTreatment": "Solution Annealed at 1040°C - 1150°C and rapidly quenched",
              "inspection": "EN 10204 3.1 / PMI / Ultrasonic Inspection to ASTM A388"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.47",
              "ASTM A182",
              "ASTM A312",
              "NACE MR0175 / ISO 15156"
            ],
            "image": "assets/Product Images/Pipes and Tubes/stainless steel.png"
          },
          {
            "slug": "316l",
            "name": "316L",
            "fullName": "316L Low-Carbon Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S31603",
              "en": "1.4404 (X2CrNiMo17-12-2)"
            },
            "description": "Low-carbon molybdenum alloy combining superior chloride pitting resistance with complete protection against intergranular carbide precipitation in critical welded joints.",
            "characteristics": [
              "Carbon restricted to 0.030% max, preventing grain boundary sensitization during field welding.",
              "Exceptional resistance to localized pitting in marine and brackish water piping systems.",
              "Widely accepted in sour service under NACE MR0175 / ISO 15156 standards.",
              "Clean interior surface finish capability suitable for sanitary and high-purity applications."
            ],
            "applications": [
              "Subsea umbilical and manifold piping",
              "Chemical tanker cargo lines",
              "Pharmaceutical clean-in-place (CIP) loops",
              "Desalination plant brine piping",
              "Sour hydrocarbon gas handling"
            ],
            "specs": {
              "tensileStrength": "485 MPa (70 ksi) minimum",
              "yieldStrength": "170 MPa (25 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 217",
              "heatTreatment": "Solution Annealed at 1040°C - 1120°C and water quenched",
              "inspection": "EN 10204 Type 3.1 MTC / NACE MR0175 / MR0103"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.11",
              "ASTM A182",
              "ASTM A403",
              "ASME BPE"
            ],
            "image": "assets/Product Images/Pipes and Tubes/stainless steel.png"
          },
          {
            "slug": "321",
            "name": "321",
            "fullName": "321 Titanium-Stabilized Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S32100",
              "en": "1.4541 (X6CrNiTi18-10)"
            },
            "description": "Stabilized with titanium (Ti ≥ 5x C) to tie up carbon as titanium carbides, preventing sensitization during prolonged service in the critical 427°C to 816°C temperature range.",
            "characteristics": [
              "Complete immunity to intergranular corrosion during continuous high-temperature service.",
              "Superior creep and stress-rupture properties compared to standard 304/304L.",
              "Resists polythionic acid stress corrosion cracking during refinery shutdown cycles.",
              "Standard choice for aircraft exhaust systems and refinery thermal crackers."
            ],
            "applications": [
              "Refinery thermal cracker piping",
              "Catalytic reformer units",
              "High-temperature steam boiler bypass lines",
              "Aircraft engine exhaust manifolds",
              "Chemical furnace tube connections"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "205 MPa (30 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 217",
              "heatTreatment": "Solution Annealed at 1000°C - 1100°C followed by stabilization heat treatment at 850°C - 900°C",
              "inspection": "EN 10204 3.1 / Intergranular Corrosion Test to ASTM A262 Practice E"
            },
            "standards": [
              "ASME B16.5",
              "ASTM A182",
              "ASME SA182",
              "API 530"
            ],
            "image": "assets/Product Images/Pipes and Tubes/stainless steel.png"
          },
          {
            "slug": "347",
            "name": "347",
            "fullName": "347 Niobium-Stabilized Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S34700",
              "en": "1.4550 (X6CrNiNb18-10)"
            },
            "description": "Stabilized with niobium/columbium (Nb ≥ 10x C) providing enhanced creep resistance and intergranular corrosion resistance at severe temperatures up to 870°C.",
            "characteristics": [
              "High creep strength and stress rupture resistance in heavy wall forged components.",
              "Resistant to polythionic acid stress cracking in hydrocracking and hydrotreating units.",
              "Superior fatigue strength under extreme thermal shock cycling.",
              "Certified for nuclear and supercritical power generation piping."
            ],
            "applications": [
              "Hydroprocessing and hydrodesulfurization units",
              "Supercritical power boiler piping",
              "Radiant superheater tube headers",
              "High-temperature radioactive waste handling",
              "Gas turbine exhaust nozzles"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "205 MPa (30 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 217",
              "heatTreatment": "Solution Annealed at 1040°C - 1150°C and water quenched",
              "inspection": "EN 10204 Type 3.1 with ASTM A262 Practice E IGC certification"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.9",
              "ASTM A182",
              "ASME Section III Class 1"
            ],
            "image": "assets/Product Images/Pipes and Tubes/stainless steel.png"
          },
          {
            "slug": "310s",
            "name": "310S",
            "fullName": "310S High-Temperature Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S31008",
              "en": "1.4845 (X8CrNi25-21)"
            },
            "description": "High-alloy austenitic stainless steel formulated with 25% chromium and 20% nickel for exceptional resistance to high-temperature oxidation and sulfidation up to 1150°C.",
            "characteristics": [
              "Continuous oxidation resistance in air up to 1150°C (2100°F) under cyclic thermal conditions.",
              "Resistant to carburization in moderately carburizing petrochemical atmospheres.",
              "Maintains high ductile toughness and structural stability at elevated temperatures.",
              "Low magnetic permeability and high thermal creep endurance."
            ],
            "applications": [
              "Thermal incinerator burner piping",
              "Fluidized bed coal combustors",
              "Cement rotary kiln exhaust nozzles",
              "Petrochemical pyrolysis furnaces",
              "Heat treatment furnace fixtures"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "205 MPa (30 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 217",
              "heatTreatment": "Solution Annealed at 1040°C - 1150°C followed by rapid air or water cooling",
              "inspection": "EN 10204 3.1 MTC / High-temperature mechanical testing"
            },
            "standards": [
              "ASME B16.5",
              "ASTM A182",
              "ASTM A312",
              "ASME Section VIII Div 1"
            ],
            "image": "assets/Product Images/Pipes and Tubes/stainless steel.png"
          },
          {
            "slug": "904l",
            "name": "904L",
            "fullName": "904L Super Austenitic Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS N08904",
              "en": "1.4539 (X1NiCrMoCu25-20-5)"
            },
            "description": "High-alloy super-austenitic stainless steel formulated with 4.5% molybdenum and 1.5% copper, specifically developed to withstand aggressive sulfuric and phosphoric acids.",
            "characteristics": [
              "High PREN (≥ 34), offering extraordinary resistance to warm seawater pitting.",
              "Added copper content provides outstanding resistance to concentrated sulfuric acid across all concentration ranges.",
              "Immune to chloride-induced stress corrosion cracking up to 60°C.",
              "Fully austenitic structure provides high ductility and ease of welding."
            ],
            "applications": [
              "Sulfuric acid manufacturing pipelines",
              "Phosphate fertilizer production units",
              "Flue gas desulfurization (FGD) scrubbers",
              "Seawater reverse osmosis piping",
              "Pulp mill bleaching towers"
            ],
            "specs": {
              "tensileStrength": "490 MPa (71 ksi) minimum",
              "yieldStrength": "220 MPa (32 ksi) minimum",
              "elongation": "35% minimum in 2 inches",
              "hardness": "HBW ≤ 217 (HRB ≤ 95)",
              "heatTreatment": "Solution Annealed at 1090°C - 1150°C followed by rapid water quench",
              "inspection": "EN 10204 Type 3.1 MTC with ASTM G48 pitting test verification"
            },
            "standards": [
              "ASTM A182",
              "ASME B16.5",
              "ASTM B625",
              "NACE MR0175"
            ],
            "image": "assets/Product Images/Pipes and Tubes/stainless steel.png"
          }
        ],
        "image": "assets/Product Images/Pipes and Tubes/stainless steel.png",
        "fallback": "assets/our product new images/pipe.png"
      },
      {
        "slug": "carbon-steel",
        "name": "Carbon Steel",
        "number": "02",
        "description": "Forged and plate-formed carbon steels engineered for structural strength, high pressure containment, and reliable impact ductility in utility and industrial piping.",
        "applicableStandards": "ASTM A105, ASTM A350 LF2, ASTM A106, ASTM A234 WPB, ASME B16.5",
        "pressureClasses": "Class 150#, 300#, 600#, 900#, 1500#, 2500#",
        "sizeRange": "1/2\" NB to 60\" NB",
        "grades": [
          {
            "slug": "a105",
            "name": "A105",
            "fullName": "ASTM A105 Forged Carbon Steel",
            "designation": {
              "astm": "ASTM A105 / A105N",
              "asme": "ASME SA105",
              "uns": "UNS K03504",
              "en": "1.0460 (C22.8 / P250GH)"
            },
            "description": "The premier forged carbon steel specification for ambient and elevated-temperature piping components, flanges, fittings, and valves.",
            "characteristics": [
              "Excellent machinability and weldability with balanced carbon-manganese metallurgy.",
              "Supplied in normalized (A105N) heat-treated condition for fine grain size and optimal Charpy V-notch toughness.",
              "High proof pressure containment for petroleum refineries, power stations, and steam pipelines.",
              "Fully qualified under ASME Section VIII and ASME B31.3 piping codes."
            ],
            "applications": [
              "Refinery steam and hydrocarbon lines",
              "Boiler feed water piping",
              "Natural gas transmission stations",
              "District heating networks",
              "General industrial utility piping"
            ],
            "specs": {
              "tensileStrength": "485 MPa (70 ksi) minimum",
              "yieldStrength": "250 MPa (36 ksi) minimum",
              "elongation": "22% minimum in 2 inches",
              "hardness": "HBW 137 - 187",
              "heatTreatment": "Normalized at 880°C - 920°C and air cooled",
              "inspection": "EN 10204 Type 3.1 MTC / 100% NDT inspection"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.11",
              "ASTM A105",
              "MSS-SP-79",
              "NACE MR0175 (normalized)"
            ],
            "image": "assets/Product Images/Pipes and Tubes/carbon.png"
          },
          {
            "slug": "a350-lf2",
            "name": "A350 LF2",
            "fullName": "ASTM A350 LF2 Low-Temperature Carbon Steel",
            "designation": {
              "astm": "ASTM A350 LF2 Class 1",
              "asme": "ASME SA350 LF2",
              "uns": "UNS K03011",
              "en": "1.0566 (TStE 355)"
            },
            "description": "Forged carbon and low-alloy steel specifically treated for notched-bar toughness in low-temperature piping systems down to -46°C (-50°F).",
            "characteristics": [
              "Guaranteed Charpy V-notch impact toughness of 20 Joules (15 ft-lbs) minimum at -46°C (-50°F).",
              "Fine-grained, fully killed steel heat treated by normalizing and tempering or quenching and tempering.",
              "Mandatory for Arctic pipelines, cold gas transmission, and LPG/LNG cryogenic utility lines.",
              "Fully compliant with NACE MR0175 hardness limits (≤ 22 HRC)."
            ],
            "applications": [
              "Arctic oil and gas extraction lines",
              "LPG/LNG transport and storage terminals",
              "Refrigeration compressor piping",
              "Subsea cold-water export lines",
              "Cryogenic gas processing facilities"
            ],
            "specs": {
              "tensileStrength": "485 - 655 MPa (70 - 95 ksi)",
              "yieldStrength": "250 MPa (36 ksi) minimum",
              "elongation": "22% minimum in 2 inches",
              "hardness": "HBW ≤ 197 (HRC ≤ 22)",
              "heatTreatment": "Normalized at 900°C and Tempered at 600°C",
              "inspection": "EN 10204 3.1 / Charpy V-Notch Impact Test at -46°C"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.11",
              "ASTM A350",
              "NACE MR0175 / ISO 15156"
            ],
            "image": "assets/Product Images/Pipes and Tubes/carbon.png"
          },
          {
            "slug": "a234-wpb",
            "name": "A234 WPB",
            "fullName": "ASTM A234 WPB Wrought Carbon Steel",
            "designation": {
              "astm": "ASTM A234 Grade WPB",
              "asme": "ASME SA234 WPB",
              "uns": "UNS K03006",
              "en": "1.0488 (P275NH)"
            },
            "description": "The standard wrought carbon steel material specification for seamless and welded butt weld elbows, tees, reducers, and pipe caps.",
            "characteristics": [
              "Formed from seamless pipe (ASTM A106 Grade B) or plate (ASTM A285/A516) with uniform grain distribution.",
              "High weldability and ductility for high-speed automated pipe spool fabrication.",
              "Engineered for moderate and high-temperature pressure piping systems.",
              "Supplied in normalized, stress-relieved, or annealed condition."
            ],
            "applications": [
              "Cross-country oil & gas pipelines",
              "Power plant steam header loops",
              "Industrial boiler piping",
              "Chemical plant water injection mains",
              "District heating infrastructure"
            ],
            "specs": {
              "tensileStrength": "415 - 585 MPa (60 - 85 ksi)",
              "yieldStrength": "240 MPa (35 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 197",
              "heatTreatment": "Normalized or hot-formed above 620°C",
              "inspection": "EN 10204 3.1 / 100% Hydrostatic and NDT Testing"
            },
            "standards": [
              "ASME B16.9",
              "ASME B16.28",
              "ASTM A234",
              "MSS-SP-25"
            ],
            "image": "assets/Product Images/Pipes and Tubes/carbon.png"
          },
          {
            "slug": "a516-gr70",
            "name": "A516 Gr. 70",
            "fullName": "ASTM A516 Grade 70 Pressure Vessel Plate",
            "designation": {
              "astm": "ASTM A516 / A516M Gr. 70",
              "asme": "ASME SA516 Gr. 70",
              "uns": "UNS K02700",
              "en": "1.0473 (P355GH)"
            },
            "description": "The standard boiler and pressure-vessel quality carbon steel plate material for circular blanks, dished heads, and vessel shells operating at ambient and lower temperatures.",
            "characteristics": [
              "Superior notch toughness and weldability with vacuum-degassed, fine-grain steel practice.",
              "High yield strength and resistance to lamellar tearing under transverse welded loads.",
              "Normalized for improved low-temperature impact properties (available with Charpy testing down to -46°C).",
              "Standard material for heavy industrial autoclaves and storage vessels."
            ],
            "applications": [
              "Pressure vessel shells and circular dished ends",
              "Heat exchanger tube sheets and circular blind covers",
              "Storage tank bottom and shell plates",
              "Heavy-wall welded vessel nozzles"
            ],
            "specs": {
              "tensileStrength": "485 - 620 MPa (70 - 90 ksi)",
              "yieldStrength": "260 MPa (38 ksi) minimum",
              "elongation": "21% minimum in 2 inches",
              "hardness": "HBW ≤ 187",
              "heatTreatment": "Normalized above 40 mm plate thickness",
              "inspection": "EN 10204 3.1 / Ultrasonic testing to ASTM A435 / A578"
            },
            "standards": [
              "ASTM A516",
              "ASME SA516",
              "ASME Section VIII Div 1 & 2"
            ],
            "image": "assets/Product Images/Pipes and Tubes/carbon.png"
          }
        ],
        "image": "assets/Product Images/Pipes and Tubes/carbon.png",
        "fallback": "assets/our product new images/pipe.png"
      },
      {
        "slug": "alloy-steel",
        "name": "Alloy Steel",
        "number": "03",
        "description": "Chromium-molybdenum alloy steels engineered for elevated-temperature creep strength, hydrogen attack resistance, and severe power boiler and hydroprocessing service.",
        "applicableStandards": "ASTM A182, ASTM A234, ASTM A335, ASME B16.5, ASME B16.11",
        "pressureClasses": "Class 300#, 600#, 900#, 1500#, 2500#",
        "sizeRange": "1/2\" NB to 36\" NB",
        "grades": [
          {
            "slug": "f11",
            "name": "F11",
            "fullName": "ASTM A182 F11 (1.25% Cr - 0.5% Mo)",
            "designation": {
              "astm": "ASTM A182 F11 Class 2",
              "asme": "ASME SA182 F11",
              "uns": "UNS K11572",
              "en": "1.7335 (13CrMo4-5)"
            },
            "description": "Nominal 1.25% chromium, 0.5% molybdenum alloy steel engineered for high-temperature steam lines and refinery hydrocrackers operating up to 550°C.",
            "characteristics": [
              "High creep rupture strength and resistance to graphitization at elevated steam temperatures.",
              "Resistance to high-temperature hydrogen attack (HTHA) according to Nelson curve criteria.",
              "Supplied in normalized and tempered condition for structural microstructural stability.",
              "Standard alloy for thermal power plant main steam and hot reheat lines."
            ],
            "applications": [
              "Main steam headers in thermal power plants",
              "Hydrodesulfurization reactor piping",
              "Superheater piping and headers",
              "Refinery furnace transfer lines"
            ],
            "specs": {
              "tensileStrength": "485 MPa (70 ksi) minimum",
              "yieldStrength": "275 MPa (40 ksi) minimum",
              "elongation": "20% minimum in 2 inches",
              "hardness": "HBW 143 - 207",
              "heatTreatment": "Normalized at 900°C - 950°C and Tempered at 650°C minimum",
              "inspection": "EN 10204 3.1 / Hot tensile test verified"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.11",
              "ASTM A182",
              "API 941"
            ],
            "image": "assets/Product Images/Pipes and Tubes/alloy steel.png"
          },
          {
            "slug": "f22",
            "name": "F22",
            "fullName": "ASTM A182 F22 (2.25% Cr - 1.0% Mo)",
            "designation": {
              "astm": "ASTM A182 F22 Class 3",
              "asme": "ASME SA182 F22",
              "uns": "UNS K21590",
              "en": "1.7380 (10CrMo9-10)"
            },
            "description": "Nominal 2.25% chromium, 1.0% molybdenum alloy steel offering superior creep endurance, corrosion resistance to sulfur-bearing oil streams, and hydrogen resistance up to 600°C.",
            "characteristics": [
              "Elevated creep resistance and high allowable design stress under ASME Section I and VIII.",
              "Enhanced resistance to high-pressure hydrogen embrittlement in hydroprocessing units.",
              "Quenched and tempered or normalized and tempered for high fracture toughness.",
              "Specified for high-pressure catalytic cracking and supercritical boiler loops."
            ],
            "applications": [
              "Hydrocracker reactor nozzles and loop piping",
              "Supercritical boiler superheater headers",
              "Gasifier syngas transfer lines",
              "Petrochemical high-pressure steam headers"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "310 MPa (45 ksi) minimum",
              "elongation": "20% minimum in 2 inches",
              "hardness": "HBW 156 - 207",
              "heatTreatment": "Normalized at 900°C - 950°C and Tempered at 675°C minimum",
              "inspection": "EN 10204 3.1 / Ultrasonic and Magnetic Particle Inspection"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.9",
              "ASTM A182",
              "ASTM A335 Grade P22"
            ],
            "image": "assets/Product Images/Pipes and Tubes/alloy steel.png"
          },
          {
            "slug": "f91",
            "name": "F91",
            "fullName": "ASTM A182 F91 (9% Cr - 1% Mo - V - Nb)",
            "designation": {
              "astm": "ASTM A182 F91 Type 1",
              "asme": "ASME SA182 F91",
              "uns": "UNS K90901",
              "en": "1.4903 (X10CrMoVNb9-1)"
            },
            "description": "Advanced modified 9Cr-1Mo-V-Nb martensitic alloy steel engineered for supercritical and ultra-supercritical (USC) power stations operating up to 620°C with reduced wall thickness.",
            "characteristics": [
              "Twice the creep rupture strength of F22 at 600°C, enabling thinner component wall sections.",
              "Lower thermal stress and reduced cyclic thermal fatigue in high-efficiency power boilers.",
              "Requires tight control of heat treatment: normalizing at 1040°C–1080°C and tempering at 730°C–800°C.",
              "Strict compliance with hardness and microstructural martensite grain requirements."
            ],
            "applications": [
              "Ultra-supercritical power plant main steam lines",
              "Combined cycle gas turbine (CCGT) HRSG headers",
              "High-pressure steam bypass manifolds",
              "Nuclear power steam generator loops"
            ],
            "specs": {
              "tensileStrength": "585 - 760 MPa (85 - 110 ksi)",
              "yieldStrength": "415 MPa (60 ksi) minimum",
              "elongation": "20% minimum in 2 inches",
              "hardness": "HBW 190 - 248",
              "heatTreatment": "Normalized at 1050°C and Tempered at 750°C - 780°C",
              "inspection": "EN 10204 Type 3.1 / 100% Ultrasonic & Hardness verification"
            },
            "standards": [
              "ASME B16.5",
              "ASTM A182",
              "ASTM A335 Grade P91",
              "EPRI Guidelines"
            ],
            "image": "assets/Product Images/Pipes and Tubes/alloy steel.png"
          }
        ],
        "image": "assets/Product Images/Pipes and Tubes/alloy steel.png",
        "fallback": "assets/our product new images/pipe.png"
      },
      {
        "slug": "duplex",
        "name": "Duplex & Super Duplex",
        "number": "04",
        "description": "Dual-phase austenitic-ferritic microstructures delivering yield strength roughly twice that of standard stainless steel combined with superior resistance to chloride stress corrosion cracking.",
        "applicableStandards": "ASTM A182, ASTM A240, ASTM A790, ASTM A815, ASME B16.5",
        "pressureClasses": "Class 150#, 300#, 600#, 900#, 1500#, 2500#",
        "sizeRange": "1/2\" NB to 36\" NB",
        "grades": [
          {
            "slug": "2205",
            "name": "2205",
            "fullName": "2205 Standard Duplex (UNS S31803 / S32205)",
            "designation": {
              "astm": "ASTM A182 F51 / F60",
              "asme": "ASME SA182 F51 / F60",
              "uns": "UNS S31803 / S32205",
              "en": "1.4462 (X2CrNiMoN22-5-3)"
            },
            "description": "The workhorse 22% chromium duplex stainless steel with approximately 50/50 ferrite-austenite phase balance, offering high yield strength and high chloride resistance (PREN 35).",
            "characteristics": [
              "Yield strength roughly twice that of austenitic 316L, allowing substantial weight reduction.",
              "High resistance to chloride stress corrosion cracking in sour environments.",
              "High resistance to erosion-corrosion and pitting in seawater and brackish cooling water.",
              "Temperature limit typically restricted to -50°C to +280°C to prevent 475°C embrittlement."
            ],
            "applications": [
              "Offshore oil & gas topside piping",
              "Chemical tanker cargo holds and piping",
              "Desalination high-pressure reverse osmosis headers",
              "Flue gas cleaning systems",
              "Biofuel processing digesters"
            ],
            "specs": {
              "tensileStrength": "655 MPa (95 ksi) minimum",
              "yieldStrength": "450 MPa (65 ksi) minimum",
              "elongation": "25% minimum in 2 inches",
              "hardness": "HBW ≤ 290 (HRC ≤ 28)",
              "heatTreatment": "Solution Annealed at 1020°C - 1100°C and rapidly water quenched",
              "inspection": "EN 10204 3.1 / Phase balance check (40-60% ferrite) / ASTM G48 Method A test"
            },
            "standards": [
              "ASME B16.5",
              "ASTM A182",
              "NORSK M-630 MDS D44",
              "NACE MR0175 / ISO 15156"
            ],
            "image": "assets/Product Images/Pipes and Tubes/duplex.png"
          },
          {
            "slug": "2507",
            "name": "2507",
            "fullName": "2507 Super Duplex (UNS S32750)",
            "designation": {
              "astm": "ASTM A182 F53",
              "asme": "ASME SA182 F53",
              "uns": "UNS S32750",
              "en": "1.4410 (X2CrNiMoN25-7-4)"
            },
            "description": "25% chromium super duplex stainless steel with 4% molybdenum and 0.28% nitrogen, providing exceptional pitting and crevice corrosion resistance with PREN ≥ 42.",
            "characteristics": [
              "PREN ≥ 42 guaranteeing immunity to pitting in high-temperature chlorinated seawater.",
              "Exceptionally high mechanical yield strength (≥ 550 MPa) for high-pressure subsea lines.",
              "Immune to chloride stress corrosion cracking in aggressive sour gas reservoirs.",
              "Manufactured strictly to NORSOK M-630 and NACE MR0175 compliance."
            ],
            "applications": [
              "Subsea manifolds, risers, and Christmas tree piping",
              "Seawater fire-water ring mains",
              "Offshore high-pressure sour gas export lines",
              "Geothermal high-chloride brine piping",
              "Chemical plants handling hot chlorinated media"
            ],
            "specs": {
              "tensileStrength": "750 MPa (109 ksi) minimum",
              "yieldStrength": "550 MPa (80 ksi) minimum",
              "elongation": "15% minimum in 2 inches",
              "hardness": "HBW ≤ 310 (HRC ≤ 32)",
              "heatTreatment": "Solution Annealed at 1050°C - 1125°C and water quenched",
              "inspection": "EN 10204 3.1 / Microstructure audit / ASTM G48 Method A test at 50°C"
            },
            "standards": [
              "ASME B16.5",
              "ASTM A182 F53",
              "NORSOK M-630 MDS D54",
              "ISO 15156"
            ],
            "image": "assets/Product Images/Pipes and Tubes/duplex.png"
          }
        ],
        "image": "assets/Product Images/Pipes and Tubes/duplex.png",
        "fallback": "assets/our product new images/pipe.png"
      },
      {
        "slug": "high-alloy",
        "name": "High Alloy",
        "number": "05",
        "description": "Nickel-chromium-molybdenum superalloys engineered to withstand severe chemical environments, high temperatures, boiling mineral acids, and extreme mechanical stress.",
        "applicableStandards": "ASTM B564, ASTM B366, ASTM B622, ASME B16.5, ASME B16.11",
        "pressureClasses": "Class 150#, 300#, 600#, 900#, 1500#, 2500#",
        "sizeRange": "1/2\" NB to 24\" NB",
        "grades": [
          {
            "slug": "inconel-625",
            "name": "Inconel 625",
            "fullName": "Inconel 625 (UNS N06625)",
            "designation": {
              "astm": "ASTM B564 / B444",
              "asme": "ASME SB564",
              "uns": "UNS N06625",
              "en": "2.4856 (NiCr22Mo9Nb)"
            },
            "description": "Nickel-chromium-molybdenum alloy with niobium addition providing solid solution strengthening without heat treatment, resistant from cryogenic temperatures up to 980°C.",
            "characteristics": [
              "Virtually immune to chloride-induced stress corrosion cracking.",
              "Exceptional fatigue and thermal-fatigue strength in marine and aerospace environments.",
              "High resistance to a wide range of organic and inorganic acids, including wet chlorine.",
              "Certified for NACE sour service and nuclear reactor core piping."
            ],
            "applications": [
              "Marine exhaust scrubbers",
              "Subsea wellhead equipment",
              "Chemical waste disposal incinerator nozzles",
              "Nuclear reactor control rod drive piping",
              "Sour gas production downhole components"
            ],
            "specs": {
              "tensileStrength": "827 MPa (120 ksi) minimum",
              "yieldStrength": "414 MPa (60 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 220",
              "heatTreatment": "Annealed at 980°C - 1050°C",
              "inspection": "EN 10204 Type 3.1 / 100% Ultrasonic inspection"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B564",
              "NACE MR0175",
              "AMS 5666"
            ],
            "image": "assets/Product Images/Pipes and Tubes/high alloy.png"
          },
          {
            "slug": "hastelloy-c276",
            "name": "Hastelloy C276",
            "fullName": "Hastelloy C276 (UNS N10276)",
            "designation": {
              "astm": "ASTM B564 / B575",
              "asme": "ASME SB564",
              "uns": "UNS N10276",
              "en": "2.4819 (NiMo16Cr15W)"
            },
            "description": "The universal corrosion-resistant nickel-molybdenum-chromium superalloy with tungsten, engineered to withstand aggressive wet chlorine gas, hypochlorite, and boiling mineral acids.",
            "characteristics": [
              "Unmatched resistance to localized pitting, crevice corrosion, and stress corrosion cracking.",
              "One of the few materials to withstand wet chlorine gas, hypochlorite, and chlorine dioxide solutions.",
              "Low carbon content minimizes carbide precipitation during welding, preserving as-welded corrosion resistance.",
              "Proven longevity in harsh chemical synthesis reactors."
            ],
            "applications": [
              "Flue gas desulfurization (FGD) scrubbers",
              "Sulfuric and hydrochloric acid synthesis plants",
              "Chlorination reaction systems",
              "Pharmaceutical active ingredient reactors",
              "Hazardous waste treatment vessels"
            ],
            "specs": {
              "tensileStrength": "690 MPa (100 ksi) minimum",
              "yieldStrength": "283 MPa (41 ksi) minimum",
              "elongation": "40% minimum in 2 inches",
              "hardness": "HBW ≤ 220",
              "heatTreatment": "Solution heat-treated at 1120°C and water quenched",
              "inspection": "EN 10204 Type 3.1 / Microstructure and ASTM G28 corrosion testing"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B564",
              "NACE MR0175 / ISO 15156"
            ],
            "image": "assets/Product Images/Pipes and Tubes/high alloy.png"
          },
          {
            "slug": "monel-400",
            "name": "Monel 400",
            "fullName": "Monel 400 (UNS N04400)",
            "designation": {
              "astm": "ASTM B564 / B127",
              "asme": "ASME SB564",
              "uns": "UNS N04400",
              "en": "2.4360 (NiCu30Fe)"
            },
            "description": "Ductile nickel-copper alloy (67% Ni, 30% Cu) exhibiting exceptional resistance to rapidly flowing seawater, hydrofluoric acid, sulfuric acid, and high-temperature alkalies.",
            "characteristics": [
              "Standard engineering material for marine salt water immersion and splash zones.",
              "Exceptional resistance to hydrofluoric acid (HF) in all concentrations up to the boiling point.",
              "Resistant to non-oxidizing mineral acids and deaerated salt solutions.",
              "Non-magnetic down to room temperature with high impact toughness."
            ],
            "applications": [
              "Hydrofluoric acid alkylation units in oil refineries",
              "Marine propeller shafts and seawater valve trims",
              "Offshore splash-zone sheathing",
              "Chlorinated solvent recovery systems",
              "Salt plant brine evaporators"
            ],
            "specs": {
              "tensileStrength": "480 MPa (70 ksi) minimum",
              "yieldStrength": "195 MPa (28 ksi) minimum",
              "elongation": "35% minimum in 2 inches",
              "hardness": "HBW 110 - 150",
              "heatTreatment": "Annealed at 760°C - 900°C followed by water quench",
              "inspection": "EN 10204 3.1 / Ultrasonic and Dye Penetrant testing"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B564",
              "NACE MR0175",
              "MSS-SP-25"
            ],
            "image": "assets/Product Images/Pipes and Tubes/high alloy.png"
          }
        ],
        "image": "assets/Product Images/Pipes and Tubes/high alloy.png",
        "fallback": "assets/our product new images/pipe.png"
      },
      {
        "slug": "nickel",
        "name": "Nickel",
        "number": "06",
        "description": "Commercially pure nickel alloys engineered for caustic soda evaporators, non-oxidizing halogen systems, and high-purity chemical processing.",
        "applicableStandards": "ASTM B564, ASTM B160, ASTM B162, ASME B16.5",
        "pressureClasses": "Class 150#, 300#, 600#",
        "sizeRange": "1/2\" NB to 24\" NB",
        "grades": [
          {
            "slug": "nickel-200",
            "name": "Nickel 200",
            "fullName": "Nickel 200 (UNS N02200)",
            "designation": {
              "astm": "ASTM B564 / B160",
              "asme": "ASME SB564",
              "uns": "UNS N02200",
              "en": "2.4066 (Ni99.2)"
            },
            "description": "Commercially pure (99.6%) wrought nickel providing exceptional thermal conductivity, electrical properties, and uncompromised resistance to hot caustic alkalies.",
            "characteristics": [
              "Immune to stress corrosion cracking in all concentrations of boiling caustic soda (NaOH).",
              "Excellent resistance to dry fluorine, chlorine, and hydrogen chloride gases.",
              "High thermal conductivity and low electrical resistivity for electrochemical electrodes.",
              "Maintains cryogenic mechanical ductility without ductile-to-brittle transition."
            ],
            "applications": [
              "Caustic soda production evaporators",
              "Synthetic fiber manufacturing equipment",
              "Chlorine and hydrogen chloride dry gas transfer",
              "Food and soap processing reaction vessels"
            ],
            "specs": {
              "tensileStrength": "380 MPa (55 ksi) minimum",
              "yieldStrength": "105 MPa (15 ksi) minimum",
              "elongation": "40% minimum in 2 inches",
              "hardness": "HBW ≤ 130",
              "heatTreatment": "Annealed at 700°C - 900°C",
              "inspection": "EN 10204 Type 3.1 MTC"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B564",
              "ASME Section VIII Div 1"
            ],
            "image": "assets/Product Images/Pipes and Tubes/nikle.png"
          },
          {
            "slug": "nickel-201",
            "name": "Nickel 201",
            "fullName": "Nickel 201 (UNS N02201)",
            "designation": {
              "astm": "ASTM B564 / B160",
              "asme": "ASME SB564",
              "uns": "UNS N02201",
              "en": "2.4068 (LC-Ni99.2)"
            },
            "description": "Low-carbon version (C ≤ 0.02%) of Nickel 200 engineered to prevent graphitization and intergranular embrittlement during service above 315°C (600°F).",
            "characteristics": [
              "Certified for continuous service at temperatures exceeding 315°C (600°F) up to 650°C.",
              "Low carbon prevents intercrystalline graphite precipitation in caustic environments.",
              "Exceptional resistance to molten hydroxide and fused caustic salts.",
              "High ductility and ease of cold forming and orbital welding."
            ],
            "applications": [
              "High-temperature caustic concentration evaporators",
              "Vinyl chloride monomer (VCM) thermal reactors",
              "Fluorochemical reactors",
              "Molten salt nuclear heat transfer loops"
            ],
            "specs": {
              "tensileStrength": "345 MPa (50 ksi) minimum",
              "yieldStrength": "70 MPa (10 ksi) minimum",
              "elongation": "40% minimum in 2 inches",
              "hardness": "HBW ≤ 120",
              "heatTreatment": "Annealed at 700°C - 900°C",
              "inspection": "EN 10204 Type 3.1 MTC / Carbon verification"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B564",
              "DIN 17750"
            ],
            "image": "assets/Product Images/Pipes and Tubes/nikle.png"
          }
        ],
        "image": "assets/Product Images/Pipes and Tubes/nikle.png",
        "fallback": "assets/our product new images/pipe.png"
      },
      {
        "slug": "titanium",
        "name": "Titanium",
        "number": "07",
        "description": "Lightweight, ultra-corrosion-resistant titanium alloys delivering total immunity to marine seawater, wet chlorine, and organic chlorides with extraordinary strength-to-weight ratios.",
        "applicableStandards": "ASTM B381, ASTM B348, ASTM B861, ASME B16.5",
        "pressureClasses": "Class 150#, 300#, 600#, 900#",
        "sizeRange": "1/2\" NB to 24\" NB",
        "grades": [
          {
            "slug": "grade-2",
            "name": "Grade 2",
            "fullName": "Titanium Grade 2 (UNS R50400)",
            "designation": {
              "astm": "ASTM B381 / B348 Gr. 2",
              "asme": "ASME SB381",
              "uns": "UNS R50400",
              "en": "3.7035 (Ti2)"
            },
            "description": "The workhorse commercially pure titanium grade offering the optimum balance of moderate strength, high ductility, excellent weldability, and total seawater corrosion resistance.",
            "characteristics": [
              "Forms a tenacious, self-healing titanium dioxide (TiO2) passive oxide film instantly upon exposure to oxygen.",
              "Complete immunity to marine microbiologically influenced corrosion (MIC) and crevice attack.",
              "Approximately 45% lighter than steel, significantly reducing topside platform loads.",
              "Certified biocompatible for medical and food-contact installations."
            ],
            "applications": [
              "Seawater desalination reverse osmosis and multi-stage flash units",
              "Offshore oil platform seawater cooling systems",
              "Chlor-alkali electrolytic cell anode connections",
              "Bleaching towers in pulp and paper mills"
            ],
            "specs": {
              "tensileStrength": "345 MPa (50 ksi) minimum",
              "yieldStrength": "275 MPa (40 ksi) minimum",
              "elongation": "20% minimum in 2 inches",
              "hardness": "HBW ≤ 200",
              "heatTreatment": "Stress Relieved at 500°C - 550°C",
              "inspection": "EN 10204 3.1 / Gas analysis (C, O, N, H) verified"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B381",
              "NACE MR0175 / ISO 15156"
            ],
            "image": "assets/Product Images/Pipes and Tubes/titanium.png"
          },
          {
            "slug": "grade-5",
            "name": "Grade 5",
            "fullName": "Titanium Grade 5 (Ti-6Al-4V / UNS R56400)",
            "designation": {
              "astm": "ASTM B381 / B348 Gr. 5",
              "asme": "ASME SB381",
              "uns": "UNS R56400",
              "en": "3.7165 (Ti6Al4V)"
            },
            "description": "Alpha-beta titanium alloy containing 6% aluminum and 4% vanadium, delivering twice the mechanical tensile strength of commercially pure grades with high fatigue endurance.",
            "characteristics": [
              "Tensile strength exceeding 895 MPa (130 ksi) with low density of 4.43 g/cm³.",
              "Exceptional strength-to-weight ratio for aerospace and subsea structural bolting.",
              "Maintains mechanical properties up to 400°C while resisting high-velocity seawater erosion.",
              "Heat treatable by solution treating and aging (STA)."
            ],
            "applications": [
              "Subsea high-pressure wellhead riser bolts",
              "Aerospace hydraulic fluid connections",
              "High-speed marine hydrofoil fasteners",
              "Deepwater oceanographic exploration casings"
            ],
            "specs": {
              "tensileStrength": "895 MPa (130 ksi) minimum",
              "yieldStrength": "828 MPa (120 ksi) minimum",
              "elongation": "10% minimum in 2 inches",
              "hardness": "HRC 30 - 36",
              "heatTreatment": "Mill Annealed at 700°C - 785°C and air cooled",
              "inspection": "EN 10204 Type 3.1 MTC / Ultrasonic testing"
            },
            "standards": [
              "ASTM B381",
              "ASME B16.5",
              "AMS 4928",
              "NACE MR0175"
            ],
            "image": "assets/Product Images/Pipes and Tubes/titanium.png"
          }
        ],
        "image": "assets/Product Images/Pipes and Tubes/titanium.png",
        "fallback": "assets/our product new images/pipe.png"
      },
      {
        "slug": "copper",
        "name": "Copper",
        "number": "08",
        "description": "Copper-nickel alloys, brasses, and pure copper engineered for high thermal/electrical conductivity, natural marine biofouling resistance, and naval piping circuits.",
        "applicableStandards": "ASTM B151, ASTM B171, ASTM B466, ASME B16.5, DIN 86019",
        "pressureClasses": "Class 150#, 300#, DIN PN10 - PN16",
        "sizeRange": "1/2\" NB to 24\" NB",
        "grades": [
          {
            "slug": "cu-ni-90-10",
            "name": "Cu-Ni 90/10",
            "fullName": "Copper-Nickel 90/10 (C70600)",
            "designation": {
              "astm": "ASTM B151 / B171 C70600",
              "asme": "ASME SB151 C70600",
              "uns": "UNS C70600",
              "en": "2.0872 (CuNi10Fe1Mn)"
            },
            "description": "90% copper, 10% nickel alloy formulated with controlled iron and manganese additions, delivering natural resistance to marine biofouling and seawater impingement erosion.",
            "characteristics": [
              "Natural antimicrobial and macro-fouling resistance; eliminates marine barnacle growth.",
              "High thermal conductivity for marine condensers and heat exchanger tubing.",
              "Resistant to stress corrosion cracking in high-salinity seawater.",
              "Readily brazeable and weldable by TIG and MIG processes."
            ],
            "applications": [
              "Naval warship seawater cooling mains",
              "Offshore platform firewater ring mains",
              "Commercial shipbuilding ballast piping",
              "Desalination multi-stage flash heat recovery tubes"
            ],
            "specs": {
              "tensileStrength": "310 MPa (45 ksi) minimum",
              "yieldStrength": "125 MPa (18 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW 70 - 100",
              "heatTreatment": "Annealed at 600°C - 750°C",
              "inspection": "EN 10204 Type 3.1 MTC / Eddy current inspection"
            },
            "standards": [
              "ASME B16.5",
              "EEMUA 145 / 234",
              "DIN 86019",
              "MIL-C-15726"
            ],
            "image": "assets/New Product img/Pipes/copper-nickel-pipes.jpg"
          },
          {
            "slug": "cu-ni-70-30",
            "name": "Cu-Ni 70/30",
            "fullName": "Copper-Nickel 70/30 (C71500)",
            "designation": {
              "astm": "ASTM B151 / B171 C71500",
              "asme": "ASME SB151 C71500",
              "uns": "UNS C71500",
              "en": "2.0882 (CuNi30Mn1Fe)"
            },
            "description": "70% copper, 30% nickel alloy engineered for higher seawater velocity tolerances (up to 4.5 m/s) and severe naval service where high impingement resistance is mandatory.",
            "characteristics": [
              "Permissible seawater flow velocity up to 4.5 m/s without protective film breakdown.",
              "Superior resistance to hydrogen embrittlement and sulfide stress cracking.",
              "Enhanced mechanical strength compared to 90/10 grade.",
              "Standard naval submarine and destroyer condenser specification."
            ],
            "applications": [
              "Submarine seawater intake systems",
              "High-velocity naval auxiliary condenser piping",
              "Offshore oil rig cooling manifolds",
              "Desalination brine heater bundles"
            ],
            "specs": {
              "tensileStrength": "380 MPa (55 ksi) minimum",
              "yieldStrength": "140 MPa (20 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW 80 - 120",
              "heatTreatment": "Annealed at 650°C - 800°C",
              "inspection": "EN 10204 Type 3.1 MTC / Hydrostatic verification"
            },
            "standards": [
              "ASME B16.5",
              "EEMUA 145 / 234",
              "DIN 86019",
              "MIL-C-15726"
            ],
            "image": "assets/New Product img/Pipes/copper-nickel-pipes.jpg"
          }
        ],
        "image": "assets/New Product img/Pipes/copper-nickel-pipes.jpg",
        "fallback": "assets/our product new images/pipe.png"
      },
      {
        "slug": "aluminium",
        "name": "Aluminium",
        "number": "09",
        "description": "High-strength wrought and extruded aluminium alloys delivering lightweight structural capability, high thermal dissipation, and cryogenic ductility for aerospace and marine service.",
        "applicableStandards": "ASTM B221, ASTM B241, ASTM B209, ASME B16.5",
        "pressureClasses": "Class 150#, PN10, PN16",
        "sizeRange": "1/2\" NB to 24\" NB",
        "grades": [
          {
            "slug": "6061-t6",
            "name": "6061-T6",
            "fullName": "6061-T6 Structural Aluminium",
            "designation": {
              "astm": "ASTM B221 / B241 Gr. 6061",
              "asme": "ASME SB221",
              "uns": "UNS A96061",
              "en": "3.3211 (AlMg1SiCu)"
            },
            "description": "Precipitation-hardened magnesium-silicon alloy delivering high structural yield strength, excellent CNC machinability, and clean surface anodizing characteristics.",
            "characteristics": [
              "High strength-to-weight ratio with density of only 2.70 g/cm³.",
              "Excellent atmospheric corrosion resistance in industrial environments.",
              "Readily machinable to tight geometric tolerances on multi-axis CNC machines.",
              "Excellent TIG/MIG weldability using 4043 or 5356 filler wires."
            ],
            "applications": [
              "Aerospace fuel and hydraulic fluid lines",
              "Cryogenic air separation plant piping",
              "Automotive racing fluid manifolds",
              "Precision robotic automation frames"
            ],
            "specs": {
              "tensileStrength": "290 MPa (42 ksi) minimum",
              "yieldStrength": "240 MPa (35 ksi) minimum",
              "elongation": "8% - 10% in 2 inches",
              "hardness": "HBW ~ 95",
              "heatTreatment": "Solution heat-treated and artificially aged (T6 temper)",
              "inspection": "EN 10204 Type 3.1 MTC / Conductivity check"
            },
            "standards": [
              "ASTM B221",
              "ASTM B241",
              "AMS 4027",
              "ASME B16.5"
            ],
            "image": "assets/New Product img/Pipes/aluminium-pipes.jpg"
          },
          {
            "slug": "5083-h116",
            "name": "5083-H116",
            "fullName": "5083-H116 Marine Aluminium",
            "designation": {
              "astm": "ASTM B209 / B221 Gr. 5083",
              "asme": "ASME SB209",
              "uns": "UNS A95083",
              "en": "3.3547 (AlMg4.5Mn0.7)"
            },
            "description": "High-magnesium marine alloy engineered specifically for exceptional corrosion resistance in seawater and cryogenic storage tanks down to -269°C without embrittlement.",
            "characteristics": [
              "The premier structural aluminium alloy for saltwater immersion.",
              "Maintains exceptional ductility and toughness at cryogenic temperatures down to liquid helium (-269°C).",
              "High weld joint efficiency without requiring post-weld solution treatment.",
              "Certified by DNV, Lloyd's Register, and ABS for marine construction."
            ],
            "applications": [
              "LNG/LPG cryogenic cargo tank piping",
              "High-speed marine ferry hull piping",
              "Naval radar mast structural flanges",
              "Chemical rail tanker vessels"
            ],
            "specs": {
              "tensileStrength": "305 MPa (44 ksi) minimum",
              "yieldStrength": "215 MPa (31 ksi) minimum",
              "elongation": "10% minimum in 2 inches",
              "hardness": "HBW ~ 85",
              "heatTreatment": "Strain-hardened and stabilized (H116 temper) for intergranular corrosion resistance",
              "inspection": "EN 10204 3.1 / Nitric Acid Mass Loss Test (NAMLT) to ASTM G67"
            },
            "standards": [
              "ASTM B209",
              "ASTM B221",
              "DNV-GL Marine Rules",
              "ASME Section VIII"
            ],
            "image": "assets/New Product img/Pipes/aluminium-pipes.jpg"
          }
        ],
        "image": "assets/New Product img/Pipes/aluminium-pipes.jpg",
        "fallback": "assets/our product new images/pipe.png"
      }
    ]
  },
  {
    "slug": "sheets-plates",
    "name": "Sheets",
    "title": "SHEETS & PLATES",
    "suffix": "Sheets & Plates",
    "eyebrow": "ASTM A240 / ASME SA240 CERTIFIED PLATES",
    "heroImage": "assets/our product new images/sheet and plates.png",
    "heroTag": "HOT ROLLED & COLD ROLLED METALLURGICAL PLATES",
    "description": "Hot-rolled and cold-rolled industrial metal sheets, heavy plates, and slit coils leveled, sheared, and ultrasonic-inspected for pressure vessel shells, storage tanks, and architectural engineering.",
    "overview": {
      "lead": "Metallurgical sheets and plates provide the foundational raw material for welded vessels, equipment housings, pipe fabrications, and structural cladding across severe industrial sectors.",
      "highlights": [
        {
          "title": "Thickness Spectrum",
          "desc": "Sheets from 0.5 mm to 4.0 mm; heavy boiler plates from 5.0 mm up to 150 mm thickness."
        },
        {
          "title": "Surface Treatments",
          "desc": "2B cold-rolled, No. 1 hot-rolled annealed and pickled, No. 4 brushed, and mirror finishes."
        },
        {
          "title": "Testing & Ultrasonic",
          "desc": "100% Level 1 / Level 2 ultrasonic testing to ASTM A435 / A578 for internal lamination check."
        },
        {
          "title": "Custom Profiling",
          "desc": "CNC waterjet, high-definition plasma, and fiber-laser profiling to customer CAD drawings."
        }
      ]
    },
    "hasTypes": false,
    "types": [],
    "materials": [
      {
        "slug": "stainless-steel",
        "name": "Stainless Steel",
        "number": "01",
        "description": "Austenitic and martensitic stainless steels offering superior resistance to chemical attack, pitting, and high-temperature scaling across process industries.",
        "applicableStandards": "ASTM A182, ASTM A240, ASTM A312, ASTM A403, ASME B16.5",
        "pressureClasses": "Class 150#, 300#, 600#, 900#, 1500#, 2500#",
        "sizeRange": "1/2\" NB to 60\" NB (DN15 to DN1500)",
        "grades": [
          {
            "slug": "304",
            "name": "304",
            "fullName": "304 Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S30400",
              "en": "1.4301 (X5CrNi18-10)"
            },
            "description": "The classic 18/8 austenitic stainless steel delivering dependable general corrosion resistance, excellent formability, and cryogenic impact toughness.",
            "characteristics": [
              "Excellent atmospheric and chemical corrosion resistance in organic and mildly oxidizing acids.",
              "Retains high impact toughness from cryogenic temperatures (-196°C) up to 800°C.",
              "Readily weldable by all standard commercial fusion methods without requiring preheat.",
              "Non-magnetic in the solution-annealed condition with moderate work hardening rate."
            ],
            "applications": [
              "Chemical processing manifolds",
              "Food, dairy & beverage piping",
              "Petrochemical low-temperature loops",
              "Cryogenic storage vessel nozzles",
              "Architectural structural piping"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "205 MPa (30 ksi) minimum",
              "elongation": "40% minimum in 2 inches",
              "hardness": "HBW ≤ 201 (HRB ≤ 92)",
              "heatTreatment": "Solution Annealed at 1040°C - 1120°C followed by rapid water quench",
              "inspection": "EN 10204 Type 3.1 MTC with complete chemical and mechanical test results"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.47",
              "ASTM A182",
              "ASME SA182",
              "MSS-SP-43",
              "NACE MR0175 (annealed)"
            ],
            "image": "assets/Product Images/Sheet and plates/stainless steel.png"
          },
          {
            "slug": "304l",
            "name": "304L",
            "fullName": "304L Low-Carbon Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S30403",
              "en": "1.4307 (X2CrNi18-9)"
            },
            "description": "Extra-low carbon modification (C ≤ 0.030%) that eliminates chromium carbide precipitation during welding, providing immunity to intergranular corrosion in as-welded assemblies.",
            "characteristics": [
              "Immunity to sensitization and intergranular attack in heat-affected zones (HAZ) of welded components.",
              "Eliminates the mandatory requirement for post-weld solution annealing.",
              "Maintains cryogenic mechanical ductility down to liquid nitrogen temperatures (-196°C).",
              "Compatible with dual-certified 304/304L pressure vessel specifications."
            ],
            "applications": [
              "Heavy-wall welded piping systems",
              "Wet chemical processing lines",
              "Refinery flare header lines",
              "Marine deck piping systems",
              "Pulp and paper bleaching equipment"
            ],
            "specs": {
              "tensileStrength": "485 MPa (70 ksi) minimum",
              "yieldStrength": "170 MPa (25 ksi) minimum",
              "elongation": "40% minimum in 2 inches",
              "hardness": "HBW ≤ 201",
              "heatTreatment": "Solution Annealed at 1040°C - 1100°C and water quenched",
              "inspection": "EN 10204 Type 3.1 MTC / NACE MR0175 compliant"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.9",
              "ASTM A182",
              "ASTM A403",
              "ASME Section VIII Div 1"
            ],
            "image": "assets/Product Images/Sheet and plates/stainless steel.png"
          },
          {
            "slug": "316",
            "name": "316",
            "fullName": "316 Molybdenum-Bearing Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S31600",
              "en": "1.4401 (X5CrNiMo17-12-2)"
            },
            "description": "Formulated with 2.0% to 3.0% molybdenum to significantly improve localized resistance to pitting and crevice corrosion in chloride and halide-bearing environments.",
            "characteristics": [
              "Significantly higher pitting resistance equivalent (PREN ~ 23-25) compared to 304.",
              "Superior resistance to sulfuric, phosphoric, acetic, and tartaric acid solutions.",
              "Elevated creep rupture strength at elevated operating temperatures up to 870°C.",
              "Standard specification for marine atmospheres, offshore platforms, and coastal chemical plants."
            ],
            "applications": [
              "Offshore oil & gas production manifolds",
              "Marine seawater cooling circuits",
              "Pharmaceutical reaction vessels",
              "Petrochemical acid-wash scrubbers",
              "Fertilizer production piping"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "205 MPa (30 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 217",
              "heatTreatment": "Solution Annealed at 1040°C - 1150°C and rapidly quenched",
              "inspection": "EN 10204 3.1 / PMI / Ultrasonic Inspection to ASTM A388"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.47",
              "ASTM A182",
              "ASTM A312",
              "NACE MR0175 / ISO 15156"
            ],
            "image": "assets/Product Images/Sheet and plates/stainless steel.png"
          },
          {
            "slug": "316l",
            "name": "316L",
            "fullName": "316L Low-Carbon Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S31603",
              "en": "1.4404 (X2CrNiMo17-12-2)"
            },
            "description": "Low-carbon molybdenum alloy combining superior chloride pitting resistance with complete protection against intergranular carbide precipitation in critical welded joints.",
            "characteristics": [
              "Carbon restricted to 0.030% max, preventing grain boundary sensitization during field welding.",
              "Exceptional resistance to localized pitting in marine and brackish water piping systems.",
              "Widely accepted in sour service under NACE MR0175 / ISO 15156 standards.",
              "Clean interior surface finish capability suitable for sanitary and high-purity applications."
            ],
            "applications": [
              "Subsea umbilical and manifold piping",
              "Chemical tanker cargo lines",
              "Pharmaceutical clean-in-place (CIP) loops",
              "Desalination plant brine piping",
              "Sour hydrocarbon gas handling"
            ],
            "specs": {
              "tensileStrength": "485 MPa (70 ksi) minimum",
              "yieldStrength": "170 MPa (25 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 217",
              "heatTreatment": "Solution Annealed at 1040°C - 1120°C and water quenched",
              "inspection": "EN 10204 Type 3.1 MTC / NACE MR0175 / MR0103"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.11",
              "ASTM A182",
              "ASTM A403",
              "ASME BPE"
            ],
            "image": "assets/Product Images/Sheet and plates/stainless steel.png"
          },
          {
            "slug": "321",
            "name": "321",
            "fullName": "321 Titanium-Stabilized Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S32100",
              "en": "1.4541 (X6CrNiTi18-10)"
            },
            "description": "Stabilized with titanium (Ti ≥ 5x C) to tie up carbon as titanium carbides, preventing sensitization during prolonged service in the critical 427°C to 816°C temperature range.",
            "characteristics": [
              "Complete immunity to intergranular corrosion during continuous high-temperature service.",
              "Superior creep and stress-rupture properties compared to standard 304/304L.",
              "Resists polythionic acid stress corrosion cracking during refinery shutdown cycles.",
              "Standard choice for aircraft exhaust systems and refinery thermal crackers."
            ],
            "applications": [
              "Refinery thermal cracker piping",
              "Catalytic reformer units",
              "High-temperature steam boiler bypass lines",
              "Aircraft engine exhaust manifolds",
              "Chemical furnace tube connections"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "205 MPa (30 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 217",
              "heatTreatment": "Solution Annealed at 1000°C - 1100°C followed by stabilization heat treatment at 850°C - 900°C",
              "inspection": "EN 10204 3.1 / Intergranular Corrosion Test to ASTM A262 Practice E"
            },
            "standards": [
              "ASME B16.5",
              "ASTM A182",
              "ASME SA182",
              "API 530"
            ],
            "image": "assets/Product Images/Sheet and plates/stainless steel.png"
          },
          {
            "slug": "347",
            "name": "347",
            "fullName": "347 Niobium-Stabilized Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S34700",
              "en": "1.4550 (X6CrNiNb18-10)"
            },
            "description": "Stabilized with niobium/columbium (Nb ≥ 10x C) providing enhanced creep resistance and intergranular corrosion resistance at severe temperatures up to 870°C.",
            "characteristics": [
              "High creep strength and stress rupture resistance in heavy wall forged components.",
              "Resistant to polythionic acid stress cracking in hydrocracking and hydrotreating units.",
              "Superior fatigue strength under extreme thermal shock cycling.",
              "Certified for nuclear and supercritical power generation piping."
            ],
            "applications": [
              "Hydroprocessing and hydrodesulfurization units",
              "Supercritical power boiler piping",
              "Radiant superheater tube headers",
              "High-temperature radioactive waste handling",
              "Gas turbine exhaust nozzles"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "205 MPa (30 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 217",
              "heatTreatment": "Solution Annealed at 1040°C - 1150°C and water quenched",
              "inspection": "EN 10204 Type 3.1 with ASTM A262 Practice E IGC certification"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.9",
              "ASTM A182",
              "ASME Section III Class 1"
            ],
            "image": "assets/Product Images/Sheet and plates/stainless steel.png"
          },
          {
            "slug": "310s",
            "name": "310S",
            "fullName": "310S High-Temperature Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S31008",
              "en": "1.4845 (X8CrNi25-21)"
            },
            "description": "High-alloy austenitic stainless steel formulated with 25% chromium and 20% nickel for exceptional resistance to high-temperature oxidation and sulfidation up to 1150°C.",
            "characteristics": [
              "Continuous oxidation resistance in air up to 1150°C (2100°F) under cyclic thermal conditions.",
              "Resistant to carburization in moderately carburizing petrochemical atmospheres.",
              "Maintains high ductile toughness and structural stability at elevated temperatures.",
              "Low magnetic permeability and high thermal creep endurance."
            ],
            "applications": [
              "Thermal incinerator burner piping",
              "Fluidized bed coal combustors",
              "Cement rotary kiln exhaust nozzles",
              "Petrochemical pyrolysis furnaces",
              "Heat treatment furnace fixtures"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "205 MPa (30 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 217",
              "heatTreatment": "Solution Annealed at 1040°C - 1150°C followed by rapid air or water cooling",
              "inspection": "EN 10204 3.1 MTC / High-temperature mechanical testing"
            },
            "standards": [
              "ASME B16.5",
              "ASTM A182",
              "ASTM A312",
              "ASME Section VIII Div 1"
            ],
            "image": "assets/Product Images/Sheet and plates/stainless steel.png"
          },
          {
            "slug": "904l",
            "name": "904L",
            "fullName": "904L Super Austenitic Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS N08904",
              "en": "1.4539 (X1NiCrMoCu25-20-5)"
            },
            "description": "High-alloy super-austenitic stainless steel formulated with 4.5% molybdenum and 1.5% copper, specifically developed to withstand aggressive sulfuric and phosphoric acids.",
            "characteristics": [
              "High PREN (≥ 34), offering extraordinary resistance to warm seawater pitting.",
              "Added copper content provides outstanding resistance to concentrated sulfuric acid across all concentration ranges.",
              "Immune to chloride-induced stress corrosion cracking up to 60°C.",
              "Fully austenitic structure provides high ductility and ease of welding."
            ],
            "applications": [
              "Sulfuric acid manufacturing pipelines",
              "Phosphate fertilizer production units",
              "Flue gas desulfurization (FGD) scrubbers",
              "Seawater reverse osmosis piping",
              "Pulp mill bleaching towers"
            ],
            "specs": {
              "tensileStrength": "490 MPa (71 ksi) minimum",
              "yieldStrength": "220 MPa (32 ksi) minimum",
              "elongation": "35% minimum in 2 inches",
              "hardness": "HBW ≤ 217 (HRB ≤ 95)",
              "heatTreatment": "Solution Annealed at 1090°C - 1150°C followed by rapid water quench",
              "inspection": "EN 10204 Type 3.1 MTC with ASTM G48 pitting test verification"
            },
            "standards": [
              "ASTM A182",
              "ASME B16.5",
              "ASTM B625",
              "NACE MR0175"
            ],
            "image": "assets/Product Images/Sheet and plates/stainless steel.png"
          }
        ],
        "image": "assets/Product Images/Sheet and plates/stainless steel.png",
        "fallback": "assets/our product new images/sheet and plates.png"
      },
      {
        "slug": "carbon-steel",
        "name": "Carbon Steel",
        "number": "02",
        "description": "Forged and plate-formed carbon steels engineered for structural strength, high pressure containment, and reliable impact ductility in utility and industrial piping.",
        "applicableStandards": "ASTM A105, ASTM A350 LF2, ASTM A106, ASTM A234 WPB, ASME B16.5",
        "pressureClasses": "Class 150#, 300#, 600#, 900#, 1500#, 2500#",
        "sizeRange": "1/2\" NB to 60\" NB",
        "grades": [
          {
            "slug": "a105",
            "name": "A105",
            "fullName": "ASTM A105 Forged Carbon Steel",
            "designation": {
              "astm": "ASTM A105 / A105N",
              "asme": "ASME SA105",
              "uns": "UNS K03504",
              "en": "1.0460 (C22.8 / P250GH)"
            },
            "description": "The premier forged carbon steel specification for ambient and elevated-temperature piping components, flanges, fittings, and valves.",
            "characteristics": [
              "Excellent machinability and weldability with balanced carbon-manganese metallurgy.",
              "Supplied in normalized (A105N) heat-treated condition for fine grain size and optimal Charpy V-notch toughness.",
              "High proof pressure containment for petroleum refineries, power stations, and steam pipelines.",
              "Fully qualified under ASME Section VIII and ASME B31.3 piping codes."
            ],
            "applications": [
              "Refinery steam and hydrocarbon lines",
              "Boiler feed water piping",
              "Natural gas transmission stations",
              "District heating networks",
              "General industrial utility piping"
            ],
            "specs": {
              "tensileStrength": "485 MPa (70 ksi) minimum",
              "yieldStrength": "250 MPa (36 ksi) minimum",
              "elongation": "22% minimum in 2 inches",
              "hardness": "HBW 137 - 187",
              "heatTreatment": "Normalized at 880°C - 920°C and air cooled",
              "inspection": "EN 10204 Type 3.1 MTC / 100% NDT inspection"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.11",
              "ASTM A105",
              "MSS-SP-79",
              "NACE MR0175 (normalized)"
            ],
            "image": "assets/Product Images/Sheet and plates/Carbon.png"
          },
          {
            "slug": "a350-lf2",
            "name": "A350 LF2",
            "fullName": "ASTM A350 LF2 Low-Temperature Carbon Steel",
            "designation": {
              "astm": "ASTM A350 LF2 Class 1",
              "asme": "ASME SA350 LF2",
              "uns": "UNS K03011",
              "en": "1.0566 (TStE 355)"
            },
            "description": "Forged carbon and low-alloy steel specifically treated for notched-bar toughness in low-temperature piping systems down to -46°C (-50°F).",
            "characteristics": [
              "Guaranteed Charpy V-notch impact toughness of 20 Joules (15 ft-lbs) minimum at -46°C (-50°F).",
              "Fine-grained, fully killed steel heat treated by normalizing and tempering or quenching and tempering.",
              "Mandatory for Arctic pipelines, cold gas transmission, and LPG/LNG cryogenic utility lines.",
              "Fully compliant with NACE MR0175 hardness limits (≤ 22 HRC)."
            ],
            "applications": [
              "Arctic oil and gas extraction lines",
              "LPG/LNG transport and storage terminals",
              "Refrigeration compressor piping",
              "Subsea cold-water export lines",
              "Cryogenic gas processing facilities"
            ],
            "specs": {
              "tensileStrength": "485 - 655 MPa (70 - 95 ksi)",
              "yieldStrength": "250 MPa (36 ksi) minimum",
              "elongation": "22% minimum in 2 inches",
              "hardness": "HBW ≤ 197 (HRC ≤ 22)",
              "heatTreatment": "Normalized at 900°C and Tempered at 600°C",
              "inspection": "EN 10204 3.1 / Charpy V-Notch Impact Test at -46°C"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.11",
              "ASTM A350",
              "NACE MR0175 / ISO 15156"
            ],
            "image": "assets/Product Images/Sheet and plates/Carbon.png"
          },
          {
            "slug": "a234-wpb",
            "name": "A234 WPB",
            "fullName": "ASTM A234 WPB Wrought Carbon Steel",
            "designation": {
              "astm": "ASTM A234 Grade WPB",
              "asme": "ASME SA234 WPB",
              "uns": "UNS K03006",
              "en": "1.0488 (P275NH)"
            },
            "description": "The standard wrought carbon steel material specification for seamless and welded butt weld elbows, tees, reducers, and pipe caps.",
            "characteristics": [
              "Formed from seamless pipe (ASTM A106 Grade B) or plate (ASTM A285/A516) with uniform grain distribution.",
              "High weldability and ductility for high-speed automated pipe spool fabrication.",
              "Engineered for moderate and high-temperature pressure piping systems.",
              "Supplied in normalized, stress-relieved, or annealed condition."
            ],
            "applications": [
              "Cross-country oil & gas pipelines",
              "Power plant steam header loops",
              "Industrial boiler piping",
              "Chemical plant water injection mains",
              "District heating infrastructure"
            ],
            "specs": {
              "tensileStrength": "415 - 585 MPa (60 - 85 ksi)",
              "yieldStrength": "240 MPa (35 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 197",
              "heatTreatment": "Normalized or hot-formed above 620°C",
              "inspection": "EN 10204 3.1 / 100% Hydrostatic and NDT Testing"
            },
            "standards": [
              "ASME B16.9",
              "ASME B16.28",
              "ASTM A234",
              "MSS-SP-25"
            ],
            "image": "assets/Product Images/Sheet and plates/Carbon.png"
          },
          {
            "slug": "a516-gr70",
            "name": "A516 Gr. 70",
            "fullName": "ASTM A516 Grade 70 Pressure Vessel Plate",
            "designation": {
              "astm": "ASTM A516 / A516M Gr. 70",
              "asme": "ASME SA516 Gr. 70",
              "uns": "UNS K02700",
              "en": "1.0473 (P355GH)"
            },
            "description": "The standard boiler and pressure-vessel quality carbon steel plate material for circular blanks, dished heads, and vessel shells operating at ambient and lower temperatures.",
            "characteristics": [
              "Superior notch toughness and weldability with vacuum-degassed, fine-grain steel practice.",
              "High yield strength and resistance to lamellar tearing under transverse welded loads.",
              "Normalized for improved low-temperature impact properties (available with Charpy testing down to -46°C).",
              "Standard material for heavy industrial autoclaves and storage vessels."
            ],
            "applications": [
              "Pressure vessel shells and circular dished ends",
              "Heat exchanger tube sheets and circular blind covers",
              "Storage tank bottom and shell plates",
              "Heavy-wall welded vessel nozzles"
            ],
            "specs": {
              "tensileStrength": "485 - 620 MPa (70 - 90 ksi)",
              "yieldStrength": "260 MPa (38 ksi) minimum",
              "elongation": "21% minimum in 2 inches",
              "hardness": "HBW ≤ 187",
              "heatTreatment": "Normalized above 40 mm plate thickness",
              "inspection": "EN 10204 3.1 / Ultrasonic testing to ASTM A435 / A578"
            },
            "standards": [
              "ASTM A516",
              "ASME SA516",
              "ASME Section VIII Div 1 & 2"
            ],
            "image": "assets/Product Images/Sheet and plates/Carbon.png"
          }
        ],
        "image": "assets/Product Images/Sheet and plates/Carbon.png",
        "fallback": "assets/our product new images/sheet and plates.png"
      },
      {
        "slug": "alloy-steel",
        "name": "Alloy Steel",
        "number": "03",
        "description": "Chromium-molybdenum alloy steels engineered for elevated-temperature creep strength, hydrogen attack resistance, and severe power boiler and hydroprocessing service.",
        "applicableStandards": "ASTM A182, ASTM A234, ASTM A335, ASME B16.5, ASME B16.11",
        "pressureClasses": "Class 300#, 600#, 900#, 1500#, 2500#",
        "sizeRange": "1/2\" NB to 36\" NB",
        "grades": [
          {
            "slug": "f11",
            "name": "F11",
            "fullName": "ASTM A182 F11 (1.25% Cr - 0.5% Mo)",
            "designation": {
              "astm": "ASTM A182 F11 Class 2",
              "asme": "ASME SA182 F11",
              "uns": "UNS K11572",
              "en": "1.7335 (13CrMo4-5)"
            },
            "description": "Nominal 1.25% chromium, 0.5% molybdenum alloy steel engineered for high-temperature steam lines and refinery hydrocrackers operating up to 550°C.",
            "characteristics": [
              "High creep rupture strength and resistance to graphitization at elevated steam temperatures.",
              "Resistance to high-temperature hydrogen attack (HTHA) according to Nelson curve criteria.",
              "Supplied in normalized and tempered condition for structural microstructural stability.",
              "Standard alloy for thermal power plant main steam and hot reheat lines."
            ],
            "applications": [
              "Main steam headers in thermal power plants",
              "Hydrodesulfurization reactor piping",
              "Superheater piping and headers",
              "Refinery furnace transfer lines"
            ],
            "specs": {
              "tensileStrength": "485 MPa (70 ksi) minimum",
              "yieldStrength": "275 MPa (40 ksi) minimum",
              "elongation": "20% minimum in 2 inches",
              "hardness": "HBW 143 - 207",
              "heatTreatment": "Normalized at 900°C - 950°C and Tempered at 650°C minimum",
              "inspection": "EN 10204 3.1 / Hot tensile test verified"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.11",
              "ASTM A182",
              "API 941"
            ],
            "image": "assets/Product Images/Sheet and plates/alloy steel.png"
          },
          {
            "slug": "f22",
            "name": "F22",
            "fullName": "ASTM A182 F22 (2.25% Cr - 1.0% Mo)",
            "designation": {
              "astm": "ASTM A182 F22 Class 3",
              "asme": "ASME SA182 F22",
              "uns": "UNS K21590",
              "en": "1.7380 (10CrMo9-10)"
            },
            "description": "Nominal 2.25% chromium, 1.0% molybdenum alloy steel offering superior creep endurance, corrosion resistance to sulfur-bearing oil streams, and hydrogen resistance up to 600°C.",
            "characteristics": [
              "Elevated creep resistance and high allowable design stress under ASME Section I and VIII.",
              "Enhanced resistance to high-pressure hydrogen embrittlement in hydroprocessing units.",
              "Quenched and tempered or normalized and tempered for high fracture toughness.",
              "Specified for high-pressure catalytic cracking and supercritical boiler loops."
            ],
            "applications": [
              "Hydrocracker reactor nozzles and loop piping",
              "Supercritical boiler superheater headers",
              "Gasifier syngas transfer lines",
              "Petrochemical high-pressure steam headers"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "310 MPa (45 ksi) minimum",
              "elongation": "20% minimum in 2 inches",
              "hardness": "HBW 156 - 207",
              "heatTreatment": "Normalized at 900°C - 950°C and Tempered at 675°C minimum",
              "inspection": "EN 10204 3.1 / Ultrasonic and Magnetic Particle Inspection"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.9",
              "ASTM A182",
              "ASTM A335 Grade P22"
            ],
            "image": "assets/Product Images/Sheet and plates/alloy steel.png"
          },
          {
            "slug": "f91",
            "name": "F91",
            "fullName": "ASTM A182 F91 (9% Cr - 1% Mo - V - Nb)",
            "designation": {
              "astm": "ASTM A182 F91 Type 1",
              "asme": "ASME SA182 F91",
              "uns": "UNS K90901",
              "en": "1.4903 (X10CrMoVNb9-1)"
            },
            "description": "Advanced modified 9Cr-1Mo-V-Nb martensitic alloy steel engineered for supercritical and ultra-supercritical (USC) power stations operating up to 620°C with reduced wall thickness.",
            "characteristics": [
              "Twice the creep rupture strength of F22 at 600°C, enabling thinner component wall sections.",
              "Lower thermal stress and reduced cyclic thermal fatigue in high-efficiency power boilers.",
              "Requires tight control of heat treatment: normalizing at 1040°C–1080°C and tempering at 730°C–800°C.",
              "Strict compliance with hardness and microstructural martensite grain requirements."
            ],
            "applications": [
              "Ultra-supercritical power plant main steam lines",
              "Combined cycle gas turbine (CCGT) HRSG headers",
              "High-pressure steam bypass manifolds",
              "Nuclear power steam generator loops"
            ],
            "specs": {
              "tensileStrength": "585 - 760 MPa (85 - 110 ksi)",
              "yieldStrength": "415 MPa (60 ksi) minimum",
              "elongation": "20% minimum in 2 inches",
              "hardness": "HBW 190 - 248",
              "heatTreatment": "Normalized at 1050°C and Tempered at 750°C - 780°C",
              "inspection": "EN 10204 Type 3.1 / 100% Ultrasonic & Hardness verification"
            },
            "standards": [
              "ASME B16.5",
              "ASTM A182",
              "ASTM A335 Grade P91",
              "EPRI Guidelines"
            ],
            "image": "assets/Product Images/Sheet and plates/alloy steel.png"
          }
        ],
        "image": "assets/Product Images/Sheet and plates/alloy steel.png",
        "fallback": "assets/our product new images/sheet and plates.png"
      },
      {
        "slug": "duplex",
        "name": "Duplex & Super Duplex",
        "number": "04",
        "description": "Dual-phase austenitic-ferritic microstructures delivering yield strength roughly twice that of standard stainless steel combined with superior resistance to chloride stress corrosion cracking.",
        "applicableStandards": "ASTM A182, ASTM A240, ASTM A790, ASTM A815, ASME B16.5",
        "pressureClasses": "Class 150#, 300#, 600#, 900#, 1500#, 2500#",
        "sizeRange": "1/2\" NB to 36\" NB",
        "grades": [
          {
            "slug": "2205",
            "name": "2205",
            "fullName": "2205 Standard Duplex (UNS S31803 / S32205)",
            "designation": {
              "astm": "ASTM A182 F51 / F60",
              "asme": "ASME SA182 F51 / F60",
              "uns": "UNS S31803 / S32205",
              "en": "1.4462 (X2CrNiMoN22-5-3)"
            },
            "description": "The workhorse 22% chromium duplex stainless steel with approximately 50/50 ferrite-austenite phase balance, offering high yield strength and high chloride resistance (PREN 35).",
            "characteristics": [
              "Yield strength roughly twice that of austenitic 316L, allowing substantial weight reduction.",
              "High resistance to chloride stress corrosion cracking in sour environments.",
              "High resistance to erosion-corrosion and pitting in seawater and brackish cooling water.",
              "Temperature limit typically restricted to -50°C to +280°C to prevent 475°C embrittlement."
            ],
            "applications": [
              "Offshore oil & gas topside piping",
              "Chemical tanker cargo holds and piping",
              "Desalination high-pressure reverse osmosis headers",
              "Flue gas cleaning systems",
              "Biofuel processing digesters"
            ],
            "specs": {
              "tensileStrength": "655 MPa (95 ksi) minimum",
              "yieldStrength": "450 MPa (65 ksi) minimum",
              "elongation": "25% minimum in 2 inches",
              "hardness": "HBW ≤ 290 (HRC ≤ 28)",
              "heatTreatment": "Solution Annealed at 1020°C - 1100°C and rapidly water quenched",
              "inspection": "EN 10204 3.1 / Phase balance check (40-60% ferrite) / ASTM G48 Method A test"
            },
            "standards": [
              "ASME B16.5",
              "ASTM A182",
              "NORSK M-630 MDS D44",
              "NACE MR0175 / ISO 15156"
            ],
            "image": "assets/Product Images/Sheet and plates/Duplex.png"
          },
          {
            "slug": "2507",
            "name": "2507",
            "fullName": "2507 Super Duplex (UNS S32750)",
            "designation": {
              "astm": "ASTM A182 F53",
              "asme": "ASME SA182 F53",
              "uns": "UNS S32750",
              "en": "1.4410 (X2CrNiMoN25-7-4)"
            },
            "description": "25% chromium super duplex stainless steel with 4% molybdenum and 0.28% nitrogen, providing exceptional pitting and crevice corrosion resistance with PREN ≥ 42.",
            "characteristics": [
              "PREN ≥ 42 guaranteeing immunity to pitting in high-temperature chlorinated seawater.",
              "Exceptionally high mechanical yield strength (≥ 550 MPa) for high-pressure subsea lines.",
              "Immune to chloride stress corrosion cracking in aggressive sour gas reservoirs.",
              "Manufactured strictly to NORSOK M-630 and NACE MR0175 compliance."
            ],
            "applications": [
              "Subsea manifolds, risers, and Christmas tree piping",
              "Seawater fire-water ring mains",
              "Offshore high-pressure sour gas export lines",
              "Geothermal high-chloride brine piping",
              "Chemical plants handling hot chlorinated media"
            ],
            "specs": {
              "tensileStrength": "750 MPa (109 ksi) minimum",
              "yieldStrength": "550 MPa (80 ksi) minimum",
              "elongation": "15% minimum in 2 inches",
              "hardness": "HBW ≤ 310 (HRC ≤ 32)",
              "heatTreatment": "Solution Annealed at 1050°C - 1125°C and water quenched",
              "inspection": "EN 10204 3.1 / Microstructure audit / ASTM G48 Method A test at 50°C"
            },
            "standards": [
              "ASME B16.5",
              "ASTM A182 F53",
              "NORSOK M-630 MDS D54",
              "ISO 15156"
            ],
            "image": "assets/Product Images/Sheet and plates/Duplex.png"
          }
        ],
        "image": "assets/Product Images/Sheet and plates/Duplex.png",
        "fallback": "assets/our product new images/sheet and plates.png"
      },
      {
        "slug": "high-alloy",
        "name": "High Alloy",
        "number": "05",
        "description": "Nickel-chromium-molybdenum superalloys engineered to withstand severe chemical environments, high temperatures, boiling mineral acids, and extreme mechanical stress.",
        "applicableStandards": "ASTM B564, ASTM B366, ASTM B622, ASME B16.5, ASME B16.11",
        "pressureClasses": "Class 150#, 300#, 600#, 900#, 1500#, 2500#",
        "sizeRange": "1/2\" NB to 24\" NB",
        "grades": [
          {
            "slug": "inconel-625",
            "name": "Inconel 625",
            "fullName": "Inconel 625 (UNS N06625)",
            "designation": {
              "astm": "ASTM B564 / B444",
              "asme": "ASME SB564",
              "uns": "UNS N06625",
              "en": "2.4856 (NiCr22Mo9Nb)"
            },
            "description": "Nickel-chromium-molybdenum alloy with niobium addition providing solid solution strengthening without heat treatment, resistant from cryogenic temperatures up to 980°C.",
            "characteristics": [
              "Virtually immune to chloride-induced stress corrosion cracking.",
              "Exceptional fatigue and thermal-fatigue strength in marine and aerospace environments.",
              "High resistance to a wide range of organic and inorganic acids, including wet chlorine.",
              "Certified for NACE sour service and nuclear reactor core piping."
            ],
            "applications": [
              "Marine exhaust scrubbers",
              "Subsea wellhead equipment",
              "Chemical waste disposal incinerator nozzles",
              "Nuclear reactor control rod drive piping",
              "Sour gas production downhole components"
            ],
            "specs": {
              "tensileStrength": "827 MPa (120 ksi) minimum",
              "yieldStrength": "414 MPa (60 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 220",
              "heatTreatment": "Annealed at 980°C - 1050°C",
              "inspection": "EN 10204 Type 3.1 / 100% Ultrasonic inspection"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B564",
              "NACE MR0175",
              "AMS 5666"
            ],
            "image": "assets/New Product img/sheet plates coil/hastelloy-coils.jpg"
          },
          {
            "slug": "hastelloy-c276",
            "name": "Hastelloy C276",
            "fullName": "Hastelloy C276 (UNS N10276)",
            "designation": {
              "astm": "ASTM B564 / B575",
              "asme": "ASME SB564",
              "uns": "UNS N10276",
              "en": "2.4819 (NiMo16Cr15W)"
            },
            "description": "The universal corrosion-resistant nickel-molybdenum-chromium superalloy with tungsten, engineered to withstand aggressive wet chlorine gas, hypochlorite, and boiling mineral acids.",
            "characteristics": [
              "Unmatched resistance to localized pitting, crevice corrosion, and stress corrosion cracking.",
              "One of the few materials to withstand wet chlorine gas, hypochlorite, and chlorine dioxide solutions.",
              "Low carbon content minimizes carbide precipitation during welding, preserving as-welded corrosion resistance.",
              "Proven longevity in harsh chemical synthesis reactors."
            ],
            "applications": [
              "Flue gas desulfurization (FGD) scrubbers",
              "Sulfuric and hydrochloric acid synthesis plants",
              "Chlorination reaction systems",
              "Pharmaceutical active ingredient reactors",
              "Hazardous waste treatment vessels"
            ],
            "specs": {
              "tensileStrength": "690 MPa (100 ksi) minimum",
              "yieldStrength": "283 MPa (41 ksi) minimum",
              "elongation": "40% minimum in 2 inches",
              "hardness": "HBW ≤ 220",
              "heatTreatment": "Solution heat-treated at 1120°C and water quenched",
              "inspection": "EN 10204 Type 3.1 / Microstructure and ASTM G28 corrosion testing"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B564",
              "NACE MR0175 / ISO 15156"
            ],
            "image": "assets/New Product img/sheet plates coil/hastelloy-coils.jpg"
          },
          {
            "slug": "monel-400",
            "name": "Monel 400",
            "fullName": "Monel 400 (UNS N04400)",
            "designation": {
              "astm": "ASTM B564 / B127",
              "asme": "ASME SB564",
              "uns": "UNS N04400",
              "en": "2.4360 (NiCu30Fe)"
            },
            "description": "Ductile nickel-copper alloy (67% Ni, 30% Cu) exhibiting exceptional resistance to rapidly flowing seawater, hydrofluoric acid, sulfuric acid, and high-temperature alkalies.",
            "characteristics": [
              "Standard engineering material for marine salt water immersion and splash zones.",
              "Exceptional resistance to hydrofluoric acid (HF) in all concentrations up to the boiling point.",
              "Resistant to non-oxidizing mineral acids and deaerated salt solutions.",
              "Non-magnetic down to room temperature with high impact toughness."
            ],
            "applications": [
              "Hydrofluoric acid alkylation units in oil refineries",
              "Marine propeller shafts and seawater valve trims",
              "Offshore splash-zone sheathing",
              "Chlorinated solvent recovery systems",
              "Salt plant brine evaporators"
            ],
            "specs": {
              "tensileStrength": "480 MPa (70 ksi) minimum",
              "yieldStrength": "195 MPa (28 ksi) minimum",
              "elongation": "35% minimum in 2 inches",
              "hardness": "HBW 110 - 150",
              "heatTreatment": "Annealed at 760°C - 900°C followed by water quench",
              "inspection": "EN 10204 3.1 / Ultrasonic and Dye Penetrant testing"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B564",
              "NACE MR0175",
              "MSS-SP-25"
            ],
            "image": "assets/New Product img/sheet plates coil/hastelloy-coils.jpg"
          }
        ],
        "image": "assets/New Product img/sheet plates coil/hastelloy-coils.jpg",
        "fallback": "assets/our product new images/sheet and plates.png"
      },
      {
        "slug": "nickel",
        "name": "Nickel",
        "number": "06",
        "description": "Commercially pure nickel alloys engineered for caustic soda evaporators, non-oxidizing halogen systems, and high-purity chemical processing.",
        "applicableStandards": "ASTM B564, ASTM B160, ASTM B162, ASME B16.5",
        "pressureClasses": "Class 150#, 300#, 600#",
        "sizeRange": "1/2\" NB to 24\" NB",
        "grades": [
          {
            "slug": "nickel-200",
            "name": "Nickel 200",
            "fullName": "Nickel 200 (UNS N02200)",
            "designation": {
              "astm": "ASTM B564 / B160",
              "asme": "ASME SB564",
              "uns": "UNS N02200",
              "en": "2.4066 (Ni99.2)"
            },
            "description": "Commercially pure (99.6%) wrought nickel providing exceptional thermal conductivity, electrical properties, and uncompromised resistance to hot caustic alkalies.",
            "characteristics": [
              "Immune to stress corrosion cracking in all concentrations of boiling caustic soda (NaOH).",
              "Excellent resistance to dry fluorine, chlorine, and hydrogen chloride gases.",
              "High thermal conductivity and low electrical resistivity for electrochemical electrodes.",
              "Maintains cryogenic mechanical ductility without ductile-to-brittle transition."
            ],
            "applications": [
              "Caustic soda production evaporators",
              "Synthetic fiber manufacturing equipment",
              "Chlorine and hydrogen chloride dry gas transfer",
              "Food and soap processing reaction vessels"
            ],
            "specs": {
              "tensileStrength": "380 MPa (55 ksi) minimum",
              "yieldStrength": "105 MPa (15 ksi) minimum",
              "elongation": "40% minimum in 2 inches",
              "hardness": "HBW ≤ 130",
              "heatTreatment": "Annealed at 700°C - 900°C",
              "inspection": "EN 10204 Type 3.1 MTC"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B564",
              "ASME Section VIII Div 1"
            ],
            "image": "assets/Product Images/Sheet and plates/Nikle.png"
          },
          {
            "slug": "nickel-201",
            "name": "Nickel 201",
            "fullName": "Nickel 201 (UNS N02201)",
            "designation": {
              "astm": "ASTM B564 / B160",
              "asme": "ASME SB564",
              "uns": "UNS N02201",
              "en": "2.4068 (LC-Ni99.2)"
            },
            "description": "Low-carbon version (C ≤ 0.02%) of Nickel 200 engineered to prevent graphitization and intergranular embrittlement during service above 315°C (600°F).",
            "characteristics": [
              "Certified for continuous service at temperatures exceeding 315°C (600°F) up to 650°C.",
              "Low carbon prevents intercrystalline graphite precipitation in caustic environments.",
              "Exceptional resistance to molten hydroxide and fused caustic salts.",
              "High ductility and ease of cold forming and orbital welding."
            ],
            "applications": [
              "High-temperature caustic concentration evaporators",
              "Vinyl chloride monomer (VCM) thermal reactors",
              "Fluorochemical reactors",
              "Molten salt nuclear heat transfer loops"
            ],
            "specs": {
              "tensileStrength": "345 MPa (50 ksi) minimum",
              "yieldStrength": "70 MPa (10 ksi) minimum",
              "elongation": "40% minimum in 2 inches",
              "hardness": "HBW ≤ 120",
              "heatTreatment": "Annealed at 700°C - 900°C",
              "inspection": "EN 10204 Type 3.1 MTC / Carbon verification"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B564",
              "DIN 17750"
            ],
            "image": "assets/Product Images/Sheet and plates/Nikle.png"
          }
        ],
        "image": "assets/Product Images/Sheet and plates/Nikle.png",
        "fallback": "assets/our product new images/sheet and plates.png"
      },
      {
        "slug": "titanium",
        "name": "Titanium",
        "number": "07",
        "description": "Lightweight, ultra-corrosion-resistant titanium alloys delivering total immunity to marine seawater, wet chlorine, and organic chlorides with extraordinary strength-to-weight ratios.",
        "applicableStandards": "ASTM B381, ASTM B348, ASTM B861, ASME B16.5",
        "pressureClasses": "Class 150#, 300#, 600#, 900#",
        "sizeRange": "1/2\" NB to 24\" NB",
        "grades": [
          {
            "slug": "grade-2",
            "name": "Grade 2",
            "fullName": "Titanium Grade 2 (UNS R50400)",
            "designation": {
              "astm": "ASTM B381 / B348 Gr. 2",
              "asme": "ASME SB381",
              "uns": "UNS R50400",
              "en": "3.7035 (Ti2)"
            },
            "description": "The workhorse commercially pure titanium grade offering the optimum balance of moderate strength, high ductility, excellent weldability, and total seawater corrosion resistance.",
            "characteristics": [
              "Forms a tenacious, self-healing titanium dioxide (TiO2) passive oxide film instantly upon exposure to oxygen.",
              "Complete immunity to marine microbiologically influenced corrosion (MIC) and crevice attack.",
              "Approximately 45% lighter than steel, significantly reducing topside platform loads.",
              "Certified biocompatible for medical and food-contact installations."
            ],
            "applications": [
              "Seawater desalination reverse osmosis and multi-stage flash units",
              "Offshore oil platform seawater cooling systems",
              "Chlor-alkali electrolytic cell anode connections",
              "Bleaching towers in pulp and paper mills"
            ],
            "specs": {
              "tensileStrength": "345 MPa (50 ksi) minimum",
              "yieldStrength": "275 MPa (40 ksi) minimum",
              "elongation": "20% minimum in 2 inches",
              "hardness": "HBW ≤ 200",
              "heatTreatment": "Stress Relieved at 500°C - 550°C",
              "inspection": "EN 10204 3.1 / Gas analysis (C, O, N, H) verified"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B381",
              "NACE MR0175 / ISO 15156"
            ],
            "image": "assets/Product Images/Sheet and plates/Titainium.png"
          },
          {
            "slug": "grade-5",
            "name": "Grade 5",
            "fullName": "Titanium Grade 5 (Ti-6Al-4V / UNS R56400)",
            "designation": {
              "astm": "ASTM B381 / B348 Gr. 5",
              "asme": "ASME SB381",
              "uns": "UNS R56400",
              "en": "3.7165 (Ti6Al4V)"
            },
            "description": "Alpha-beta titanium alloy containing 6% aluminum and 4% vanadium, delivering twice the mechanical tensile strength of commercially pure grades with high fatigue endurance.",
            "characteristics": [
              "Tensile strength exceeding 895 MPa (130 ksi) with low density of 4.43 g/cm³.",
              "Exceptional strength-to-weight ratio for aerospace and subsea structural bolting.",
              "Maintains mechanical properties up to 400°C while resisting high-velocity seawater erosion.",
              "Heat treatable by solution treating and aging (STA)."
            ],
            "applications": [
              "Subsea high-pressure wellhead riser bolts",
              "Aerospace hydraulic fluid connections",
              "High-speed marine hydrofoil fasteners",
              "Deepwater oceanographic exploration casings"
            ],
            "specs": {
              "tensileStrength": "895 MPa (130 ksi) minimum",
              "yieldStrength": "828 MPa (120 ksi) minimum",
              "elongation": "10% minimum in 2 inches",
              "hardness": "HRC 30 - 36",
              "heatTreatment": "Mill Annealed at 700°C - 785°C and air cooled",
              "inspection": "EN 10204 Type 3.1 MTC / Ultrasonic testing"
            },
            "standards": [
              "ASTM B381",
              "ASME B16.5",
              "AMS 4928",
              "NACE MR0175"
            ],
            "image": "assets/Product Images/Sheet and plates/Titainium.png"
          }
        ],
        "image": "assets/Product Images/Sheet and plates/Titainium.png",
        "fallback": "assets/our product new images/sheet and plates.png"
      },
      {
        "slug": "copper",
        "name": "Copper",
        "number": "08",
        "description": "Copper-nickel alloys, brasses, and pure copper engineered for high thermal/electrical conductivity, natural marine biofouling resistance, and naval piping circuits.",
        "applicableStandards": "ASTM B151, ASTM B171, ASTM B466, ASME B16.5, DIN 86019",
        "pressureClasses": "Class 150#, 300#, DIN PN10 - PN16",
        "sizeRange": "1/2\" NB to 24\" NB",
        "grades": [
          {
            "slug": "cu-ni-90-10",
            "name": "Cu-Ni 90/10",
            "fullName": "Copper-Nickel 90/10 (C70600)",
            "designation": {
              "astm": "ASTM B151 / B171 C70600",
              "asme": "ASME SB151 C70600",
              "uns": "UNS C70600",
              "en": "2.0872 (CuNi10Fe1Mn)"
            },
            "description": "90% copper, 10% nickel alloy formulated with controlled iron and manganese additions, delivering natural resistance to marine biofouling and seawater impingement erosion.",
            "characteristics": [
              "Natural antimicrobial and macro-fouling resistance; eliminates marine barnacle growth.",
              "High thermal conductivity for marine condensers and heat exchanger tubing.",
              "Resistant to stress corrosion cracking in high-salinity seawater.",
              "Readily brazeable and weldable by TIG and MIG processes."
            ],
            "applications": [
              "Naval warship seawater cooling mains",
              "Offshore platform firewater ring mains",
              "Commercial shipbuilding ballast piping",
              "Desalination multi-stage flash heat recovery tubes"
            ],
            "specs": {
              "tensileStrength": "310 MPa (45 ksi) minimum",
              "yieldStrength": "125 MPa (18 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW 70 - 100",
              "heatTreatment": "Annealed at 600°C - 750°C",
              "inspection": "EN 10204 Type 3.1 MTC / Eddy current inspection"
            },
            "standards": [
              "ASME B16.5",
              "EEMUA 145 / 234",
              "DIN 86019",
              "MIL-C-15726"
            ],
            "image": "assets/New Product img/sheet plates coil/cs-sheet carbon.jpg"
          },
          {
            "slug": "cu-ni-70-30",
            "name": "Cu-Ni 70/30",
            "fullName": "Copper-Nickel 70/30 (C71500)",
            "designation": {
              "astm": "ASTM B151 / B171 C71500",
              "asme": "ASME SB151 C71500",
              "uns": "UNS C71500",
              "en": "2.0882 (CuNi30Mn1Fe)"
            },
            "description": "70% copper, 30% nickel alloy engineered for higher seawater velocity tolerances (up to 4.5 m/s) and severe naval service where high impingement resistance is mandatory.",
            "characteristics": [
              "Permissible seawater flow velocity up to 4.5 m/s without protective film breakdown.",
              "Superior resistance to hydrogen embrittlement and sulfide stress cracking.",
              "Enhanced mechanical strength compared to 90/10 grade.",
              "Standard naval submarine and destroyer condenser specification."
            ],
            "applications": [
              "Submarine seawater intake systems",
              "High-velocity naval auxiliary condenser piping",
              "Offshore oil rig cooling manifolds",
              "Desalination brine heater bundles"
            ],
            "specs": {
              "tensileStrength": "380 MPa (55 ksi) minimum",
              "yieldStrength": "140 MPa (20 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW 80 - 120",
              "heatTreatment": "Annealed at 650°C - 800°C",
              "inspection": "EN 10204 Type 3.1 MTC / Hydrostatic verification"
            },
            "standards": [
              "ASME B16.5",
              "EEMUA 145 / 234",
              "DIN 86019",
              "MIL-C-15726"
            ],
            "image": "assets/New Product img/sheet plates coil/cs-sheet carbon.jpg"
          }
        ],
        "image": "assets/New Product img/sheet plates coil/cs-sheet carbon.jpg",
        "fallback": "assets/our product new images/sheet and plates.png"
      },
      {
        "slug": "aluminium",
        "name": "Aluminium",
        "number": "09",
        "description": "High-strength wrought and extruded aluminium alloys delivering lightweight structural capability, high thermal dissipation, and cryogenic ductility for aerospace and marine service.",
        "applicableStandards": "ASTM B221, ASTM B241, ASTM B209, ASME B16.5",
        "pressureClasses": "Class 150#, PN10, PN16",
        "sizeRange": "1/2\" NB to 24\" NB",
        "grades": [
          {
            "slug": "6061-t6",
            "name": "6061-T6",
            "fullName": "6061-T6 Structural Aluminium",
            "designation": {
              "astm": "ASTM B221 / B241 Gr. 6061",
              "asme": "ASME SB221",
              "uns": "UNS A96061",
              "en": "3.3211 (AlMg1SiCu)"
            },
            "description": "Precipitation-hardened magnesium-silicon alloy delivering high structural yield strength, excellent CNC machinability, and clean surface anodizing characteristics.",
            "characteristics": [
              "High strength-to-weight ratio with density of only 2.70 g/cm³.",
              "Excellent atmospheric corrosion resistance in industrial environments.",
              "Readily machinable to tight geometric tolerances on multi-axis CNC machines.",
              "Excellent TIG/MIG weldability using 4043 or 5356 filler wires."
            ],
            "applications": [
              "Aerospace fuel and hydraulic fluid lines",
              "Cryogenic air separation plant piping",
              "Automotive racing fluid manifolds",
              "Precision robotic automation frames"
            ],
            "specs": {
              "tensileStrength": "290 MPa (42 ksi) minimum",
              "yieldStrength": "240 MPa (35 ksi) minimum",
              "elongation": "8% - 10% in 2 inches",
              "hardness": "HBW ~ 95",
              "heatTreatment": "Solution heat-treated and artificially aged (T6 temper)",
              "inspection": "EN 10204 Type 3.1 MTC / Conductivity check"
            },
            "standards": [
              "ASTM B221",
              "ASTM B241",
              "AMS 4027",
              "ASME B16.5"
            ],
            "image": "assets/New Product img/sheet plates coil/alloy-steel-sheet.jpg"
          },
          {
            "slug": "5083-h116",
            "name": "5083-H116",
            "fullName": "5083-H116 Marine Aluminium",
            "designation": {
              "astm": "ASTM B209 / B221 Gr. 5083",
              "asme": "ASME SB209",
              "uns": "UNS A95083",
              "en": "3.3547 (AlMg4.5Mn0.7)"
            },
            "description": "High-magnesium marine alloy engineered specifically for exceptional corrosion resistance in seawater and cryogenic storage tanks down to -269°C without embrittlement.",
            "characteristics": [
              "The premier structural aluminium alloy for saltwater immersion.",
              "Maintains exceptional ductility and toughness at cryogenic temperatures down to liquid helium (-269°C).",
              "High weld joint efficiency without requiring post-weld solution treatment.",
              "Certified by DNV, Lloyd's Register, and ABS for marine construction."
            ],
            "applications": [
              "LNG/LPG cryogenic cargo tank piping",
              "High-speed marine ferry hull piping",
              "Naval radar mast structural flanges",
              "Chemical rail tanker vessels"
            ],
            "specs": {
              "tensileStrength": "305 MPa (44 ksi) minimum",
              "yieldStrength": "215 MPa (31 ksi) minimum",
              "elongation": "10% minimum in 2 inches",
              "hardness": "HBW ~ 85",
              "heatTreatment": "Strain-hardened and stabilized (H116 temper) for intergranular corrosion resistance",
              "inspection": "EN 10204 3.1 / Nitric Acid Mass Loss Test (NAMLT) to ASTM G67"
            },
            "standards": [
              "ASTM B209",
              "ASTM B221",
              "DNV-GL Marine Rules",
              "ASME Section VIII"
            ],
            "image": "assets/New Product img/sheet plates coil/alloy-steel-sheet.jpg"
          }
        ],
        "image": "assets/New Product img/sheet plates coil/alloy-steel-sheet.jpg",
        "fallback": "assets/our product new images/sheet and plates.png"
      }
    ]
  },
  {
    "slug": "rods-bars",
    "name": "Rods & Bars",
    "title": "RODS & BARS",
    "suffix": "Rods & Bars",
    "eyebrow": "ASTM A276 / A479 PRECISION GROUND & PEELED",
    "heroImage": "assets/hero-products/rods-bars-hero.jpg",
    "heroTag": "BRIGHT DRAWN, PEELED & GROUND ROUND BARS",
    "description": "Precision centerless ground, peeled, and cold-drawn round bars, hex rods, and square stock engineered to tight diametrical tolerances (h9/h11) for automated CNC machining, pump shafts, and valve spindles.",
    "overview": {
      "lead": "Solid metal round bars and rods are essential feedstock for precision CNC turned parts, hydraulic piston shafts, valve stems, fasteners, and heavy industrial machinery components.",
      "highlights": [
        {
          "title": "Dimensional Accuracy",
          "desc": "Supplied in ISO h9, h10, and h11 precision diameter tolerances with excellent straightness."
        },
        {
          "title": "Surface Condition",
          "desc": "Bright drawn, smooth peeled, centerless ground, and polished to Ra ≤ 0.4 µm."
        },
        {
          "title": "Internal Soundness",
          "desc": "100% ultrasonic tested for internal core porosity and inclusion freedom."
        },
        {
          "title": "Applicable Standards",
          "desc": "ASTM A276, ASTM A479, EN 10088-3, DIN 1013, and aerospace AMS specifications."
        }
      ]
    },
    "hasTypes": false,
    "types": [],
    "materials": [
      {
        "slug": "stainless-steel",
        "name": "Stainless Steel",
        "number": "01",
        "description": "Austenitic and martensitic stainless steels offering superior resistance to chemical attack, pitting, and high-temperature scaling across process industries.",
        "applicableStandards": "ASTM A182, ASTM A240, ASTM A312, ASTM A403, ASME B16.5",
        "pressureClasses": "Class 150#, 300#, 600#, 900#, 1500#, 2500#",
        "sizeRange": "1/2\" NB to 60\" NB (DN15 to DN1500)",
        "grades": [
          {
            "slug": "304",
            "name": "304",
            "fullName": "304 Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S30400",
              "en": "1.4301 (X5CrNi18-10)"
            },
            "description": "The classic 18/8 austenitic stainless steel delivering dependable general corrosion resistance, excellent formability, and cryogenic impact toughness.",
            "characteristics": [
              "Excellent atmospheric and chemical corrosion resistance in organic and mildly oxidizing acids.",
              "Retains high impact toughness from cryogenic temperatures (-196°C) up to 800°C.",
              "Readily weldable by all standard commercial fusion methods without requiring preheat.",
              "Non-magnetic in the solution-annealed condition with moderate work hardening rate."
            ],
            "applications": [
              "Chemical processing manifolds",
              "Food, dairy & beverage piping",
              "Petrochemical low-temperature loops",
              "Cryogenic storage vessel nozzles",
              "Architectural structural piping"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "205 MPa (30 ksi) minimum",
              "elongation": "40% minimum in 2 inches",
              "hardness": "HBW ≤ 201 (HRB ≤ 92)",
              "heatTreatment": "Solution Annealed at 1040°C - 1120°C followed by rapid water quench",
              "inspection": "EN 10204 Type 3.1 MTC with complete chemical and mechanical test results"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.47",
              "ASTM A182",
              "ASME SA182",
              "MSS-SP-43",
              "NACE MR0175 (annealed)"
            ],
            "image": "assets/Product Images/Rods and BArs/stainless steel.png"
          },
          {
            "slug": "304l",
            "name": "304L",
            "fullName": "304L Low-Carbon Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S30403",
              "en": "1.4307 (X2CrNi18-9)"
            },
            "description": "Extra-low carbon modification (C ≤ 0.030%) that eliminates chromium carbide precipitation during welding, providing immunity to intergranular corrosion in as-welded assemblies.",
            "characteristics": [
              "Immunity to sensitization and intergranular attack in heat-affected zones (HAZ) of welded components.",
              "Eliminates the mandatory requirement for post-weld solution annealing.",
              "Maintains cryogenic mechanical ductility down to liquid nitrogen temperatures (-196°C).",
              "Compatible with dual-certified 304/304L pressure vessel specifications."
            ],
            "applications": [
              "Heavy-wall welded piping systems",
              "Wet chemical processing lines",
              "Refinery flare header lines",
              "Marine deck piping systems",
              "Pulp and paper bleaching equipment"
            ],
            "specs": {
              "tensileStrength": "485 MPa (70 ksi) minimum",
              "yieldStrength": "170 MPa (25 ksi) minimum",
              "elongation": "40% minimum in 2 inches",
              "hardness": "HBW ≤ 201",
              "heatTreatment": "Solution Annealed at 1040°C - 1100°C and water quenched",
              "inspection": "EN 10204 Type 3.1 MTC / NACE MR0175 compliant"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.9",
              "ASTM A182",
              "ASTM A403",
              "ASME Section VIII Div 1"
            ],
            "image": "assets/Product Images/Rods and BArs/stainless steel.png"
          },
          {
            "slug": "316",
            "name": "316",
            "fullName": "316 Molybdenum-Bearing Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S31600",
              "en": "1.4401 (X5CrNiMo17-12-2)"
            },
            "description": "Formulated with 2.0% to 3.0% molybdenum to significantly improve localized resistance to pitting and crevice corrosion in chloride and halide-bearing environments.",
            "characteristics": [
              "Significantly higher pitting resistance equivalent (PREN ~ 23-25) compared to 304.",
              "Superior resistance to sulfuric, phosphoric, acetic, and tartaric acid solutions.",
              "Elevated creep rupture strength at elevated operating temperatures up to 870°C.",
              "Standard specification for marine atmospheres, offshore platforms, and coastal chemical plants."
            ],
            "applications": [
              "Offshore oil & gas production manifolds",
              "Marine seawater cooling circuits",
              "Pharmaceutical reaction vessels",
              "Petrochemical acid-wash scrubbers",
              "Fertilizer production piping"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "205 MPa (30 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 217",
              "heatTreatment": "Solution Annealed at 1040°C - 1150°C and rapidly quenched",
              "inspection": "EN 10204 3.1 / PMI / Ultrasonic Inspection to ASTM A388"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.47",
              "ASTM A182",
              "ASTM A312",
              "NACE MR0175 / ISO 15156"
            ],
            "image": "assets/Product Images/Rods and BArs/stainless steel.png"
          },
          {
            "slug": "316l",
            "name": "316L",
            "fullName": "316L Low-Carbon Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S31603",
              "en": "1.4404 (X2CrNiMo17-12-2)"
            },
            "description": "Low-carbon molybdenum alloy combining superior chloride pitting resistance with complete protection against intergranular carbide precipitation in critical welded joints.",
            "characteristics": [
              "Carbon restricted to 0.030% max, preventing grain boundary sensitization during field welding.",
              "Exceptional resistance to localized pitting in marine and brackish water piping systems.",
              "Widely accepted in sour service under NACE MR0175 / ISO 15156 standards.",
              "Clean interior surface finish capability suitable for sanitary and high-purity applications."
            ],
            "applications": [
              "Subsea umbilical and manifold piping",
              "Chemical tanker cargo lines",
              "Pharmaceutical clean-in-place (CIP) loops",
              "Desalination plant brine piping",
              "Sour hydrocarbon gas handling"
            ],
            "specs": {
              "tensileStrength": "485 MPa (70 ksi) minimum",
              "yieldStrength": "170 MPa (25 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 217",
              "heatTreatment": "Solution Annealed at 1040°C - 1120°C and water quenched",
              "inspection": "EN 10204 Type 3.1 MTC / NACE MR0175 / MR0103"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.11",
              "ASTM A182",
              "ASTM A403",
              "ASME BPE"
            ],
            "image": "assets/Product Images/Rods and BArs/stainless steel.png"
          },
          {
            "slug": "321",
            "name": "321",
            "fullName": "321 Titanium-Stabilized Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S32100",
              "en": "1.4541 (X6CrNiTi18-10)"
            },
            "description": "Stabilized with titanium (Ti ≥ 5x C) to tie up carbon as titanium carbides, preventing sensitization during prolonged service in the critical 427°C to 816°C temperature range.",
            "characteristics": [
              "Complete immunity to intergranular corrosion during continuous high-temperature service.",
              "Superior creep and stress-rupture properties compared to standard 304/304L.",
              "Resists polythionic acid stress corrosion cracking during refinery shutdown cycles.",
              "Standard choice for aircraft exhaust systems and refinery thermal crackers."
            ],
            "applications": [
              "Refinery thermal cracker piping",
              "Catalytic reformer units",
              "High-temperature steam boiler bypass lines",
              "Aircraft engine exhaust manifolds",
              "Chemical furnace tube connections"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "205 MPa (30 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 217",
              "heatTreatment": "Solution Annealed at 1000°C - 1100°C followed by stabilization heat treatment at 850°C - 900°C",
              "inspection": "EN 10204 3.1 / Intergranular Corrosion Test to ASTM A262 Practice E"
            },
            "standards": [
              "ASME B16.5",
              "ASTM A182",
              "ASME SA182",
              "API 530"
            ],
            "image": "assets/Product Images/Rods and BArs/stainless steel.png"
          },
          {
            "slug": "347",
            "name": "347",
            "fullName": "347 Niobium-Stabilized Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S34700",
              "en": "1.4550 (X6CrNiNb18-10)"
            },
            "description": "Stabilized with niobium/columbium (Nb ≥ 10x C) providing enhanced creep resistance and intergranular corrosion resistance at severe temperatures up to 870°C.",
            "characteristics": [
              "High creep strength and stress rupture resistance in heavy wall forged components.",
              "Resistant to polythionic acid stress cracking in hydrocracking and hydrotreating units.",
              "Superior fatigue strength under extreme thermal shock cycling.",
              "Certified for nuclear and supercritical power generation piping."
            ],
            "applications": [
              "Hydroprocessing and hydrodesulfurization units",
              "Supercritical power boiler piping",
              "Radiant superheater tube headers",
              "High-temperature radioactive waste handling",
              "Gas turbine exhaust nozzles"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "205 MPa (30 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 217",
              "heatTreatment": "Solution Annealed at 1040°C - 1150°C and water quenched",
              "inspection": "EN 10204 Type 3.1 with ASTM A262 Practice E IGC certification"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.9",
              "ASTM A182",
              "ASME Section III Class 1"
            ],
            "image": "assets/Product Images/Rods and BArs/stainless steel.png"
          },
          {
            "slug": "310s",
            "name": "310S",
            "fullName": "310S High-Temperature Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S31008",
              "en": "1.4845 (X8CrNi25-21)"
            },
            "description": "High-alloy austenitic stainless steel formulated with 25% chromium and 20% nickel for exceptional resistance to high-temperature oxidation and sulfidation up to 1150°C.",
            "characteristics": [
              "Continuous oxidation resistance in air up to 1150°C (2100°F) under cyclic thermal conditions.",
              "Resistant to carburization in moderately carburizing petrochemical atmospheres.",
              "Maintains high ductile toughness and structural stability at elevated temperatures.",
              "Low magnetic permeability and high thermal creep endurance."
            ],
            "applications": [
              "Thermal incinerator burner piping",
              "Fluidized bed coal combustors",
              "Cement rotary kiln exhaust nozzles",
              "Petrochemical pyrolysis furnaces",
              "Heat treatment furnace fixtures"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "205 MPa (30 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 217",
              "heatTreatment": "Solution Annealed at 1040°C - 1150°C followed by rapid air or water cooling",
              "inspection": "EN 10204 3.1 MTC / High-temperature mechanical testing"
            },
            "standards": [
              "ASME B16.5",
              "ASTM A182",
              "ASTM A312",
              "ASME Section VIII Div 1"
            ],
            "image": "assets/Product Images/Rods and BArs/stainless steel.png"
          },
          {
            "slug": "904l",
            "name": "904L",
            "fullName": "904L Super Austenitic Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS N08904",
              "en": "1.4539 (X1NiCrMoCu25-20-5)"
            },
            "description": "High-alloy super-austenitic stainless steel formulated with 4.5% molybdenum and 1.5% copper, specifically developed to withstand aggressive sulfuric and phosphoric acids.",
            "characteristics": [
              "High PREN (≥ 34), offering extraordinary resistance to warm seawater pitting.",
              "Added copper content provides outstanding resistance to concentrated sulfuric acid across all concentration ranges.",
              "Immune to chloride-induced stress corrosion cracking up to 60°C.",
              "Fully austenitic structure provides high ductility and ease of welding."
            ],
            "applications": [
              "Sulfuric acid manufacturing pipelines",
              "Phosphate fertilizer production units",
              "Flue gas desulfurization (FGD) scrubbers",
              "Seawater reverse osmosis piping",
              "Pulp mill bleaching towers"
            ],
            "specs": {
              "tensileStrength": "490 MPa (71 ksi) minimum",
              "yieldStrength": "220 MPa (32 ksi) minimum",
              "elongation": "35% minimum in 2 inches",
              "hardness": "HBW ≤ 217 (HRB ≤ 95)",
              "heatTreatment": "Solution Annealed at 1090°C - 1150°C followed by rapid water quench",
              "inspection": "EN 10204 Type 3.1 MTC with ASTM G48 pitting test verification"
            },
            "standards": [
              "ASTM A182",
              "ASME B16.5",
              "ASTM B625",
              "NACE MR0175"
            ],
            "image": "assets/Product Images/Rods and BArs/stainless steel.png"
          }
        ],
        "image": "assets/Product Images/Rods and BArs/stainless steel.png",
        "fallback": "assets/our product new images/bars.png"
      },
      {
        "slug": "carbon-steel",
        "name": "Carbon Steel",
        "number": "02",
        "description": "Forged and plate-formed carbon steels engineered for structural strength, high pressure containment, and reliable impact ductility in utility and industrial piping.",
        "applicableStandards": "ASTM A105, ASTM A350 LF2, ASTM A106, ASTM A234 WPB, ASME B16.5",
        "pressureClasses": "Class 150#, 300#, 600#, 900#, 1500#, 2500#",
        "sizeRange": "1/2\" NB to 60\" NB",
        "grades": [
          {
            "slug": "a105",
            "name": "A105",
            "fullName": "ASTM A105 Forged Carbon Steel",
            "designation": {
              "astm": "ASTM A105 / A105N",
              "asme": "ASME SA105",
              "uns": "UNS K03504",
              "en": "1.0460 (C22.8 / P250GH)"
            },
            "description": "The premier forged carbon steel specification for ambient and elevated-temperature piping components, flanges, fittings, and valves.",
            "characteristics": [
              "Excellent machinability and weldability with balanced carbon-manganese metallurgy.",
              "Supplied in normalized (A105N) heat-treated condition for fine grain size and optimal Charpy V-notch toughness.",
              "High proof pressure containment for petroleum refineries, power stations, and steam pipelines.",
              "Fully qualified under ASME Section VIII and ASME B31.3 piping codes."
            ],
            "applications": [
              "Refinery steam and hydrocarbon lines",
              "Boiler feed water piping",
              "Natural gas transmission stations",
              "District heating networks",
              "General industrial utility piping"
            ],
            "specs": {
              "tensileStrength": "485 MPa (70 ksi) minimum",
              "yieldStrength": "250 MPa (36 ksi) minimum",
              "elongation": "22% minimum in 2 inches",
              "hardness": "HBW 137 - 187",
              "heatTreatment": "Normalized at 880°C - 920°C and air cooled",
              "inspection": "EN 10204 Type 3.1 MTC / 100% NDT inspection"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.11",
              "ASTM A105",
              "MSS-SP-79",
              "NACE MR0175 (normalized)"
            ],
            "image": "assets/Product Images/Rods and BArs/carbon.png"
          },
          {
            "slug": "a350-lf2",
            "name": "A350 LF2",
            "fullName": "ASTM A350 LF2 Low-Temperature Carbon Steel",
            "designation": {
              "astm": "ASTM A350 LF2 Class 1",
              "asme": "ASME SA350 LF2",
              "uns": "UNS K03011",
              "en": "1.0566 (TStE 355)"
            },
            "description": "Forged carbon and low-alloy steel specifically treated for notched-bar toughness in low-temperature piping systems down to -46°C (-50°F).",
            "characteristics": [
              "Guaranteed Charpy V-notch impact toughness of 20 Joules (15 ft-lbs) minimum at -46°C (-50°F).",
              "Fine-grained, fully killed steel heat treated by normalizing and tempering or quenching and tempering.",
              "Mandatory for Arctic pipelines, cold gas transmission, and LPG/LNG cryogenic utility lines.",
              "Fully compliant with NACE MR0175 hardness limits (≤ 22 HRC)."
            ],
            "applications": [
              "Arctic oil and gas extraction lines",
              "LPG/LNG transport and storage terminals",
              "Refrigeration compressor piping",
              "Subsea cold-water export lines",
              "Cryogenic gas processing facilities"
            ],
            "specs": {
              "tensileStrength": "485 - 655 MPa (70 - 95 ksi)",
              "yieldStrength": "250 MPa (36 ksi) minimum",
              "elongation": "22% minimum in 2 inches",
              "hardness": "HBW ≤ 197 (HRC ≤ 22)",
              "heatTreatment": "Normalized at 900°C and Tempered at 600°C",
              "inspection": "EN 10204 3.1 / Charpy V-Notch Impact Test at -46°C"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.11",
              "ASTM A350",
              "NACE MR0175 / ISO 15156"
            ],
            "image": "assets/Product Images/Rods and BArs/carbon.png"
          },
          {
            "slug": "a234-wpb",
            "name": "A234 WPB",
            "fullName": "ASTM A234 WPB Wrought Carbon Steel",
            "designation": {
              "astm": "ASTM A234 Grade WPB",
              "asme": "ASME SA234 WPB",
              "uns": "UNS K03006",
              "en": "1.0488 (P275NH)"
            },
            "description": "The standard wrought carbon steel material specification for seamless and welded butt weld elbows, tees, reducers, and pipe caps.",
            "characteristics": [
              "Formed from seamless pipe (ASTM A106 Grade B) or plate (ASTM A285/A516) with uniform grain distribution.",
              "High weldability and ductility for high-speed automated pipe spool fabrication.",
              "Engineered for moderate and high-temperature pressure piping systems.",
              "Supplied in normalized, stress-relieved, or annealed condition."
            ],
            "applications": [
              "Cross-country oil & gas pipelines",
              "Power plant steam header loops",
              "Industrial boiler piping",
              "Chemical plant water injection mains",
              "District heating infrastructure"
            ],
            "specs": {
              "tensileStrength": "415 - 585 MPa (60 - 85 ksi)",
              "yieldStrength": "240 MPa (35 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 197",
              "heatTreatment": "Normalized or hot-formed above 620°C",
              "inspection": "EN 10204 3.1 / 100% Hydrostatic and NDT Testing"
            },
            "standards": [
              "ASME B16.9",
              "ASME B16.28",
              "ASTM A234",
              "MSS-SP-25"
            ],
            "image": "assets/Product Images/Rods and BArs/carbon.png"
          },
          {
            "slug": "a516-gr70",
            "name": "A516 Gr. 70",
            "fullName": "ASTM A516 Grade 70 Pressure Vessel Plate",
            "designation": {
              "astm": "ASTM A516 / A516M Gr. 70",
              "asme": "ASME SA516 Gr. 70",
              "uns": "UNS K02700",
              "en": "1.0473 (P355GH)"
            },
            "description": "The standard boiler and pressure-vessel quality carbon steel plate material for circular blanks, dished heads, and vessel shells operating at ambient and lower temperatures.",
            "characteristics": [
              "Superior notch toughness and weldability with vacuum-degassed, fine-grain steel practice.",
              "High yield strength and resistance to lamellar tearing under transverse welded loads.",
              "Normalized for improved low-temperature impact properties (available with Charpy testing down to -46°C).",
              "Standard material for heavy industrial autoclaves and storage vessels."
            ],
            "applications": [
              "Pressure vessel shells and circular dished ends",
              "Heat exchanger tube sheets and circular blind covers",
              "Storage tank bottom and shell plates",
              "Heavy-wall welded vessel nozzles"
            ],
            "specs": {
              "tensileStrength": "485 - 620 MPa (70 - 90 ksi)",
              "yieldStrength": "260 MPa (38 ksi) minimum",
              "elongation": "21% minimum in 2 inches",
              "hardness": "HBW ≤ 187",
              "heatTreatment": "Normalized above 40 mm plate thickness",
              "inspection": "EN 10204 3.1 / Ultrasonic testing to ASTM A435 / A578"
            },
            "standards": [
              "ASTM A516",
              "ASME SA516",
              "ASME Section VIII Div 1 & 2"
            ],
            "image": "assets/Product Images/Rods and BArs/carbon.png"
          }
        ],
        "image": "assets/Product Images/Rods and BArs/carbon.png",
        "fallback": "assets/our product new images/bars.png"
      },
      {
        "slug": "alloy-steel",
        "name": "Alloy Steel",
        "number": "03",
        "description": "Chromium-molybdenum alloy steels engineered for elevated-temperature creep strength, hydrogen attack resistance, and severe power boiler and hydroprocessing service.",
        "applicableStandards": "ASTM A182, ASTM A234, ASTM A335, ASME B16.5, ASME B16.11",
        "pressureClasses": "Class 300#, 600#, 900#, 1500#, 2500#",
        "sizeRange": "1/2\" NB to 36\" NB",
        "grades": [
          {
            "slug": "f11",
            "name": "F11",
            "fullName": "ASTM A182 F11 (1.25% Cr - 0.5% Mo)",
            "designation": {
              "astm": "ASTM A182 F11 Class 2",
              "asme": "ASME SA182 F11",
              "uns": "UNS K11572",
              "en": "1.7335 (13CrMo4-5)"
            },
            "description": "Nominal 1.25% chromium, 0.5% molybdenum alloy steel engineered for high-temperature steam lines and refinery hydrocrackers operating up to 550°C.",
            "characteristics": [
              "High creep rupture strength and resistance to graphitization at elevated steam temperatures.",
              "Resistance to high-temperature hydrogen attack (HTHA) according to Nelson curve criteria.",
              "Supplied in normalized and tempered condition for structural microstructural stability.",
              "Standard alloy for thermal power plant main steam and hot reheat lines."
            ],
            "applications": [
              "Main steam headers in thermal power plants",
              "Hydrodesulfurization reactor piping",
              "Superheater piping and headers",
              "Refinery furnace transfer lines"
            ],
            "specs": {
              "tensileStrength": "485 MPa (70 ksi) minimum",
              "yieldStrength": "275 MPa (40 ksi) minimum",
              "elongation": "20% minimum in 2 inches",
              "hardness": "HBW 143 - 207",
              "heatTreatment": "Normalized at 900°C - 950°C and Tempered at 650°C minimum",
              "inspection": "EN 10204 3.1 / Hot tensile test verified"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.11",
              "ASTM A182",
              "API 941"
            ],
            "image": "assets/Product Images/Rods and BArs/Alloy steel.png"
          },
          {
            "slug": "f22",
            "name": "F22",
            "fullName": "ASTM A182 F22 (2.25% Cr - 1.0% Mo)",
            "designation": {
              "astm": "ASTM A182 F22 Class 3",
              "asme": "ASME SA182 F22",
              "uns": "UNS K21590",
              "en": "1.7380 (10CrMo9-10)"
            },
            "description": "Nominal 2.25% chromium, 1.0% molybdenum alloy steel offering superior creep endurance, corrosion resistance to sulfur-bearing oil streams, and hydrogen resistance up to 600°C.",
            "characteristics": [
              "Elevated creep resistance and high allowable design stress under ASME Section I and VIII.",
              "Enhanced resistance to high-pressure hydrogen embrittlement in hydroprocessing units.",
              "Quenched and tempered or normalized and tempered for high fracture toughness.",
              "Specified for high-pressure catalytic cracking and supercritical boiler loops."
            ],
            "applications": [
              "Hydrocracker reactor nozzles and loop piping",
              "Supercritical boiler superheater headers",
              "Gasifier syngas transfer lines",
              "Petrochemical high-pressure steam headers"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "310 MPa (45 ksi) minimum",
              "elongation": "20% minimum in 2 inches",
              "hardness": "HBW 156 - 207",
              "heatTreatment": "Normalized at 900°C - 950°C and Tempered at 675°C minimum",
              "inspection": "EN 10204 3.1 / Ultrasonic and Magnetic Particle Inspection"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.9",
              "ASTM A182",
              "ASTM A335 Grade P22"
            ],
            "image": "assets/Product Images/Rods and BArs/Alloy steel.png"
          },
          {
            "slug": "f91",
            "name": "F91",
            "fullName": "ASTM A182 F91 (9% Cr - 1% Mo - V - Nb)",
            "designation": {
              "astm": "ASTM A182 F91 Type 1",
              "asme": "ASME SA182 F91",
              "uns": "UNS K90901",
              "en": "1.4903 (X10CrMoVNb9-1)"
            },
            "description": "Advanced modified 9Cr-1Mo-V-Nb martensitic alloy steel engineered for supercritical and ultra-supercritical (USC) power stations operating up to 620°C with reduced wall thickness.",
            "characteristics": [
              "Twice the creep rupture strength of F22 at 600°C, enabling thinner component wall sections.",
              "Lower thermal stress and reduced cyclic thermal fatigue in high-efficiency power boilers.",
              "Requires tight control of heat treatment: normalizing at 1040°C–1080°C and tempering at 730°C–800°C.",
              "Strict compliance with hardness and microstructural martensite grain requirements."
            ],
            "applications": [
              "Ultra-supercritical power plant main steam lines",
              "Combined cycle gas turbine (CCGT) HRSG headers",
              "High-pressure steam bypass manifolds",
              "Nuclear power steam generator loops"
            ],
            "specs": {
              "tensileStrength": "585 - 760 MPa (85 - 110 ksi)",
              "yieldStrength": "415 MPa (60 ksi) minimum",
              "elongation": "20% minimum in 2 inches",
              "hardness": "HBW 190 - 248",
              "heatTreatment": "Normalized at 1050°C and Tempered at 750°C - 780°C",
              "inspection": "EN 10204 Type 3.1 / 100% Ultrasonic & Hardness verification"
            },
            "standards": [
              "ASME B16.5",
              "ASTM A182",
              "ASTM A335 Grade P91",
              "EPRI Guidelines"
            ],
            "image": "assets/Product Images/Rods and BArs/Alloy steel.png"
          }
        ],
        "image": "assets/Product Images/Rods and BArs/Alloy steel.png",
        "fallback": "assets/our product new images/bars.png"
      },
      {
        "slug": "duplex",
        "name": "Duplex & Super Duplex",
        "number": "04",
        "description": "Dual-phase austenitic-ferritic microstructures delivering yield strength roughly twice that of standard stainless steel combined with superior resistance to chloride stress corrosion cracking.",
        "applicableStandards": "ASTM A182, ASTM A240, ASTM A790, ASTM A815, ASME B16.5",
        "pressureClasses": "Class 150#, 300#, 600#, 900#, 1500#, 2500#",
        "sizeRange": "1/2\" NB to 36\" NB",
        "grades": [
          {
            "slug": "2205",
            "name": "2205",
            "fullName": "2205 Standard Duplex (UNS S31803 / S32205)",
            "designation": {
              "astm": "ASTM A182 F51 / F60",
              "asme": "ASME SA182 F51 / F60",
              "uns": "UNS S31803 / S32205",
              "en": "1.4462 (X2CrNiMoN22-5-3)"
            },
            "description": "The workhorse 22% chromium duplex stainless steel with approximately 50/50 ferrite-austenite phase balance, offering high yield strength and high chloride resistance (PREN 35).",
            "characteristics": [
              "Yield strength roughly twice that of austenitic 316L, allowing substantial weight reduction.",
              "High resistance to chloride stress corrosion cracking in sour environments.",
              "High resistance to erosion-corrosion and pitting in seawater and brackish cooling water.",
              "Temperature limit typically restricted to -50°C to +280°C to prevent 475°C embrittlement."
            ],
            "applications": [
              "Offshore oil & gas topside piping",
              "Chemical tanker cargo holds and piping",
              "Desalination high-pressure reverse osmosis headers",
              "Flue gas cleaning systems",
              "Biofuel processing digesters"
            ],
            "specs": {
              "tensileStrength": "655 MPa (95 ksi) minimum",
              "yieldStrength": "450 MPa (65 ksi) minimum",
              "elongation": "25% minimum in 2 inches",
              "hardness": "HBW ≤ 290 (HRC ≤ 28)",
              "heatTreatment": "Solution Annealed at 1020°C - 1100°C and rapidly water quenched",
              "inspection": "EN 10204 3.1 / Phase balance check (40-60% ferrite) / ASTM G48 Method A test"
            },
            "standards": [
              "ASME B16.5",
              "ASTM A182",
              "NORSK M-630 MDS D44",
              "NACE MR0175 / ISO 15156"
            ],
            "image": "assets/Product Images/Rods and BArs/duplex.png"
          },
          {
            "slug": "2507",
            "name": "2507",
            "fullName": "2507 Super Duplex (UNS S32750)",
            "designation": {
              "astm": "ASTM A182 F53",
              "asme": "ASME SA182 F53",
              "uns": "UNS S32750",
              "en": "1.4410 (X2CrNiMoN25-7-4)"
            },
            "description": "25% chromium super duplex stainless steel with 4% molybdenum and 0.28% nitrogen, providing exceptional pitting and crevice corrosion resistance with PREN ≥ 42.",
            "characteristics": [
              "PREN ≥ 42 guaranteeing immunity to pitting in high-temperature chlorinated seawater.",
              "Exceptionally high mechanical yield strength (≥ 550 MPa) for high-pressure subsea lines.",
              "Immune to chloride stress corrosion cracking in aggressive sour gas reservoirs.",
              "Manufactured strictly to NORSOK M-630 and NACE MR0175 compliance."
            ],
            "applications": [
              "Subsea manifolds, risers, and Christmas tree piping",
              "Seawater fire-water ring mains",
              "Offshore high-pressure sour gas export lines",
              "Geothermal high-chloride brine piping",
              "Chemical plants handling hot chlorinated media"
            ],
            "specs": {
              "tensileStrength": "750 MPa (109 ksi) minimum",
              "yieldStrength": "550 MPa (80 ksi) minimum",
              "elongation": "15% minimum in 2 inches",
              "hardness": "HBW ≤ 310 (HRC ≤ 32)",
              "heatTreatment": "Solution Annealed at 1050°C - 1125°C and water quenched",
              "inspection": "EN 10204 3.1 / Microstructure audit / ASTM G48 Method A test at 50°C"
            },
            "standards": [
              "ASME B16.5",
              "ASTM A182 F53",
              "NORSOK M-630 MDS D54",
              "ISO 15156"
            ],
            "image": "assets/Product Images/Rods and BArs/duplex.png"
          }
        ],
        "image": "assets/Product Images/Rods and BArs/duplex.png",
        "fallback": "assets/our product new images/bars.png"
      },
      {
        "slug": "high-alloy",
        "name": "High Alloy",
        "number": "05",
        "description": "Nickel-chromium-molybdenum superalloys engineered to withstand severe chemical environments, high temperatures, boiling mineral acids, and extreme mechanical stress.",
        "applicableStandards": "ASTM B564, ASTM B366, ASTM B622, ASME B16.5, ASME B16.11",
        "pressureClasses": "Class 150#, 300#, 600#, 900#, 1500#, 2500#",
        "sizeRange": "1/2\" NB to 24\" NB",
        "grades": [
          {
            "slug": "inconel-625",
            "name": "Inconel 625",
            "fullName": "Inconel 625 (UNS N06625)",
            "designation": {
              "astm": "ASTM B564 / B444",
              "asme": "ASME SB564",
              "uns": "UNS N06625",
              "en": "2.4856 (NiCr22Mo9Nb)"
            },
            "description": "Nickel-chromium-molybdenum alloy with niobium addition providing solid solution strengthening without heat treatment, resistant from cryogenic temperatures up to 980°C.",
            "characteristics": [
              "Virtually immune to chloride-induced stress corrosion cracking.",
              "Exceptional fatigue and thermal-fatigue strength in marine and aerospace environments.",
              "High resistance to a wide range of organic and inorganic acids, including wet chlorine.",
              "Certified for NACE sour service and nuclear reactor core piping."
            ],
            "applications": [
              "Marine exhaust scrubbers",
              "Subsea wellhead equipment",
              "Chemical waste disposal incinerator nozzles",
              "Nuclear reactor control rod drive piping",
              "Sour gas production downhole components"
            ],
            "specs": {
              "tensileStrength": "827 MPa (120 ksi) minimum",
              "yieldStrength": "414 MPa (60 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 220",
              "heatTreatment": "Annealed at 980°C - 1050°C",
              "inspection": "EN 10204 Type 3.1 / 100% Ultrasonic inspection"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B564",
              "NACE MR0175",
              "AMS 5666"
            ],
            "image": "assets/Product Images/Rods and BArs/high alloys.png"
          },
          {
            "slug": "hastelloy-c276",
            "name": "Hastelloy C276",
            "fullName": "Hastelloy C276 (UNS N10276)",
            "designation": {
              "astm": "ASTM B564 / B575",
              "asme": "ASME SB564",
              "uns": "UNS N10276",
              "en": "2.4819 (NiMo16Cr15W)"
            },
            "description": "The universal corrosion-resistant nickel-molybdenum-chromium superalloy with tungsten, engineered to withstand aggressive wet chlorine gas, hypochlorite, and boiling mineral acids.",
            "characteristics": [
              "Unmatched resistance to localized pitting, crevice corrosion, and stress corrosion cracking.",
              "One of the few materials to withstand wet chlorine gas, hypochlorite, and chlorine dioxide solutions.",
              "Low carbon content minimizes carbide precipitation during welding, preserving as-welded corrosion resistance.",
              "Proven longevity in harsh chemical synthesis reactors."
            ],
            "applications": [
              "Flue gas desulfurization (FGD) scrubbers",
              "Sulfuric and hydrochloric acid synthesis plants",
              "Chlorination reaction systems",
              "Pharmaceutical active ingredient reactors",
              "Hazardous waste treatment vessels"
            ],
            "specs": {
              "tensileStrength": "690 MPa (100 ksi) minimum",
              "yieldStrength": "283 MPa (41 ksi) minimum",
              "elongation": "40% minimum in 2 inches",
              "hardness": "HBW ≤ 220",
              "heatTreatment": "Solution heat-treated at 1120°C and water quenched",
              "inspection": "EN 10204 Type 3.1 / Microstructure and ASTM G28 corrosion testing"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B564",
              "NACE MR0175 / ISO 15156"
            ],
            "image": "assets/Product Images/Rods and BArs/high alloys.png"
          },
          {
            "slug": "monel-400",
            "name": "Monel 400",
            "fullName": "Monel 400 (UNS N04400)",
            "designation": {
              "astm": "ASTM B564 / B127",
              "asme": "ASME SB564",
              "uns": "UNS N04400",
              "en": "2.4360 (NiCu30Fe)"
            },
            "description": "Ductile nickel-copper alloy (67% Ni, 30% Cu) exhibiting exceptional resistance to rapidly flowing seawater, hydrofluoric acid, sulfuric acid, and high-temperature alkalies.",
            "characteristics": [
              "Standard engineering material for marine salt water immersion and splash zones.",
              "Exceptional resistance to hydrofluoric acid (HF) in all concentrations up to the boiling point.",
              "Resistant to non-oxidizing mineral acids and deaerated salt solutions.",
              "Non-magnetic down to room temperature with high impact toughness."
            ],
            "applications": [
              "Hydrofluoric acid alkylation units in oil refineries",
              "Marine propeller shafts and seawater valve trims",
              "Offshore splash-zone sheathing",
              "Chlorinated solvent recovery systems",
              "Salt plant brine evaporators"
            ],
            "specs": {
              "tensileStrength": "480 MPa (70 ksi) minimum",
              "yieldStrength": "195 MPa (28 ksi) minimum",
              "elongation": "35% minimum in 2 inches",
              "hardness": "HBW 110 - 150",
              "heatTreatment": "Annealed at 760°C - 900°C followed by water quench",
              "inspection": "EN 10204 3.1 / Ultrasonic and Dye Penetrant testing"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B564",
              "NACE MR0175",
              "MSS-SP-25"
            ],
            "image": "assets/Product Images/Rods and BArs/high alloys.png"
          }
        ],
        "image": "assets/Product Images/Rods and BArs/high alloys.png",
        "fallback": "assets/our product new images/bars.png"
      },
      {
        "slug": "nickel",
        "name": "Nickel",
        "number": "06",
        "description": "Commercially pure nickel alloys engineered for caustic soda evaporators, non-oxidizing halogen systems, and high-purity chemical processing.",
        "applicableStandards": "ASTM B564, ASTM B160, ASTM B162, ASME B16.5",
        "pressureClasses": "Class 150#, 300#, 600#",
        "sizeRange": "1/2\" NB to 24\" NB",
        "grades": [
          {
            "slug": "nickel-200",
            "name": "Nickel 200",
            "fullName": "Nickel 200 (UNS N02200)",
            "designation": {
              "astm": "ASTM B564 / B160",
              "asme": "ASME SB564",
              "uns": "UNS N02200",
              "en": "2.4066 (Ni99.2)"
            },
            "description": "Commercially pure (99.6%) wrought nickel providing exceptional thermal conductivity, electrical properties, and uncompromised resistance to hot caustic alkalies.",
            "characteristics": [
              "Immune to stress corrosion cracking in all concentrations of boiling caustic soda (NaOH).",
              "Excellent resistance to dry fluorine, chlorine, and hydrogen chloride gases.",
              "High thermal conductivity and low electrical resistivity for electrochemical electrodes.",
              "Maintains cryogenic mechanical ductility without ductile-to-brittle transition."
            ],
            "applications": [
              "Caustic soda production evaporators",
              "Synthetic fiber manufacturing equipment",
              "Chlorine and hydrogen chloride dry gas transfer",
              "Food and soap processing reaction vessels"
            ],
            "specs": {
              "tensileStrength": "380 MPa (55 ksi) minimum",
              "yieldStrength": "105 MPa (15 ksi) minimum",
              "elongation": "40% minimum in 2 inches",
              "hardness": "HBW ≤ 130",
              "heatTreatment": "Annealed at 700°C - 900°C",
              "inspection": "EN 10204 Type 3.1 MTC"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B564",
              "ASME Section VIII Div 1"
            ],
            "image": "assets/Product Images/Rods and BArs/Nikle.png"
          },
          {
            "slug": "nickel-201",
            "name": "Nickel 201",
            "fullName": "Nickel 201 (UNS N02201)",
            "designation": {
              "astm": "ASTM B564 / B160",
              "asme": "ASME SB564",
              "uns": "UNS N02201",
              "en": "2.4068 (LC-Ni99.2)"
            },
            "description": "Low-carbon version (C ≤ 0.02%) of Nickel 200 engineered to prevent graphitization and intergranular embrittlement during service above 315°C (600°F).",
            "characteristics": [
              "Certified for continuous service at temperatures exceeding 315°C (600°F) up to 650°C.",
              "Low carbon prevents intercrystalline graphite precipitation in caustic environments.",
              "Exceptional resistance to molten hydroxide and fused caustic salts.",
              "High ductility and ease of cold forming and orbital welding."
            ],
            "applications": [
              "High-temperature caustic concentration evaporators",
              "Vinyl chloride monomer (VCM) thermal reactors",
              "Fluorochemical reactors",
              "Molten salt nuclear heat transfer loops"
            ],
            "specs": {
              "tensileStrength": "345 MPa (50 ksi) minimum",
              "yieldStrength": "70 MPa (10 ksi) minimum",
              "elongation": "40% minimum in 2 inches",
              "hardness": "HBW ≤ 120",
              "heatTreatment": "Annealed at 700°C - 900°C",
              "inspection": "EN 10204 Type 3.1 MTC / Carbon verification"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B564",
              "DIN 17750"
            ],
            "image": "assets/Product Images/Rods and BArs/Nikle.png"
          }
        ],
        "image": "assets/Product Images/Rods and BArs/Nikle.png",
        "fallback": "assets/our product new images/bars.png"
      },
      {
        "slug": "titanium",
        "name": "Titanium",
        "number": "07",
        "description": "Lightweight, ultra-corrosion-resistant titanium alloys delivering total immunity to marine seawater, wet chlorine, and organic chlorides with extraordinary strength-to-weight ratios.",
        "applicableStandards": "ASTM B381, ASTM B348, ASTM B861, ASME B16.5",
        "pressureClasses": "Class 150#, 300#, 600#, 900#",
        "sizeRange": "1/2\" NB to 24\" NB",
        "grades": [
          {
            "slug": "grade-2",
            "name": "Grade 2",
            "fullName": "Titanium Grade 2 (UNS R50400)",
            "designation": {
              "astm": "ASTM B381 / B348 Gr. 2",
              "asme": "ASME SB381",
              "uns": "UNS R50400",
              "en": "3.7035 (Ti2)"
            },
            "description": "The workhorse commercially pure titanium grade offering the optimum balance of moderate strength, high ductility, excellent weldability, and total seawater corrosion resistance.",
            "characteristics": [
              "Forms a tenacious, self-healing titanium dioxide (TiO2) passive oxide film instantly upon exposure to oxygen.",
              "Complete immunity to marine microbiologically influenced corrosion (MIC) and crevice attack.",
              "Approximately 45% lighter than steel, significantly reducing topside platform loads.",
              "Certified biocompatible for medical and food-contact installations."
            ],
            "applications": [
              "Seawater desalination reverse osmosis and multi-stage flash units",
              "Offshore oil platform seawater cooling systems",
              "Chlor-alkali electrolytic cell anode connections",
              "Bleaching towers in pulp and paper mills"
            ],
            "specs": {
              "tensileStrength": "345 MPa (50 ksi) minimum",
              "yieldStrength": "275 MPa (40 ksi) minimum",
              "elongation": "20% minimum in 2 inches",
              "hardness": "HBW ≤ 200",
              "heatTreatment": "Stress Relieved at 500°C - 550°C",
              "inspection": "EN 10204 3.1 / Gas analysis (C, O, N, H) verified"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B381",
              "NACE MR0175 / ISO 15156"
            ],
            "image": "assets/Product Images/Rods and BArs/titainium.png"
          },
          {
            "slug": "grade-5",
            "name": "Grade 5",
            "fullName": "Titanium Grade 5 (Ti-6Al-4V / UNS R56400)",
            "designation": {
              "astm": "ASTM B381 / B348 Gr. 5",
              "asme": "ASME SB381",
              "uns": "UNS R56400",
              "en": "3.7165 (Ti6Al4V)"
            },
            "description": "Alpha-beta titanium alloy containing 6% aluminum and 4% vanadium, delivering twice the mechanical tensile strength of commercially pure grades with high fatigue endurance.",
            "characteristics": [
              "Tensile strength exceeding 895 MPa (130 ksi) with low density of 4.43 g/cm³.",
              "Exceptional strength-to-weight ratio for aerospace and subsea structural bolting.",
              "Maintains mechanical properties up to 400°C while resisting high-velocity seawater erosion.",
              "Heat treatable by solution treating and aging (STA)."
            ],
            "applications": [
              "Subsea high-pressure wellhead riser bolts",
              "Aerospace hydraulic fluid connections",
              "High-speed marine hydrofoil fasteners",
              "Deepwater oceanographic exploration casings"
            ],
            "specs": {
              "tensileStrength": "895 MPa (130 ksi) minimum",
              "yieldStrength": "828 MPa (120 ksi) minimum",
              "elongation": "10% minimum in 2 inches",
              "hardness": "HRC 30 - 36",
              "heatTreatment": "Mill Annealed at 700°C - 785°C and air cooled",
              "inspection": "EN 10204 Type 3.1 MTC / Ultrasonic testing"
            },
            "standards": [
              "ASTM B381",
              "ASME B16.5",
              "AMS 4928",
              "NACE MR0175"
            ],
            "image": "assets/Product Images/Rods and BArs/titainium.png"
          }
        ],
        "image": "assets/Product Images/Rods and BArs/titainium.png",
        "fallback": "assets/our product new images/bars.png"
      },
      {
        "slug": "copper",
        "name": "Copper",
        "number": "08",
        "description": "Copper-nickel alloys, brasses, and pure copper engineered for high thermal/electrical conductivity, natural marine biofouling resistance, and naval piping circuits.",
        "applicableStandards": "ASTM B151, ASTM B171, ASTM B466, ASME B16.5, DIN 86019",
        "pressureClasses": "Class 150#, 300#, DIN PN10 - PN16",
        "sizeRange": "1/2\" NB to 24\" NB",
        "grades": [
          {
            "slug": "cu-ni-90-10",
            "name": "Cu-Ni 90/10",
            "fullName": "Copper-Nickel 90/10 (C70600)",
            "designation": {
              "astm": "ASTM B151 / B171 C70600",
              "asme": "ASME SB151 C70600",
              "uns": "UNS C70600",
              "en": "2.0872 (CuNi10Fe1Mn)"
            },
            "description": "90% copper, 10% nickel alloy formulated with controlled iron and manganese additions, delivering natural resistance to marine biofouling and seawater impingement erosion.",
            "characteristics": [
              "Natural antimicrobial and macro-fouling resistance; eliminates marine barnacle growth.",
              "High thermal conductivity for marine condensers and heat exchanger tubing.",
              "Resistant to stress corrosion cracking in high-salinity seawater.",
              "Readily brazeable and weldable by TIG and MIG processes."
            ],
            "applications": [
              "Naval warship seawater cooling mains",
              "Offshore platform firewater ring mains",
              "Commercial shipbuilding ballast piping",
              "Desalination multi-stage flash heat recovery tubes"
            ],
            "specs": {
              "tensileStrength": "310 MPa (45 ksi) minimum",
              "yieldStrength": "125 MPa (18 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW 70 - 100",
              "heatTreatment": "Annealed at 600°C - 750°C",
              "inspection": "EN 10204 Type 3.1 MTC / Eddy current inspection"
            },
            "standards": [
              "ASME B16.5",
              "EEMUA 145 / 234",
              "DIN 86019",
              "MIL-C-15726"
            ],
            "image": "assets/New Product img/Bars/copper-nickel-bars.jpg"
          },
          {
            "slug": "cu-ni-70-30",
            "name": "Cu-Ni 70/30",
            "fullName": "Copper-Nickel 70/30 (C71500)",
            "designation": {
              "astm": "ASTM B151 / B171 C71500",
              "asme": "ASME SB151 C71500",
              "uns": "UNS C71500",
              "en": "2.0882 (CuNi30Mn1Fe)"
            },
            "description": "70% copper, 30% nickel alloy engineered for higher seawater velocity tolerances (up to 4.5 m/s) and severe naval service where high impingement resistance is mandatory.",
            "characteristics": [
              "Permissible seawater flow velocity up to 4.5 m/s without protective film breakdown.",
              "Superior resistance to hydrogen embrittlement and sulfide stress cracking.",
              "Enhanced mechanical strength compared to 90/10 grade.",
              "Standard naval submarine and destroyer condenser specification."
            ],
            "applications": [
              "Submarine seawater intake systems",
              "High-velocity naval auxiliary condenser piping",
              "Offshore oil rig cooling manifolds",
              "Desalination brine heater bundles"
            ],
            "specs": {
              "tensileStrength": "380 MPa (55 ksi) minimum",
              "yieldStrength": "140 MPa (20 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW 80 - 120",
              "heatTreatment": "Annealed at 650°C - 800°C",
              "inspection": "EN 10204 Type 3.1 MTC / Hydrostatic verification"
            },
            "standards": [
              "ASME B16.5",
              "EEMUA 145 / 234",
              "DIN 86019",
              "MIL-C-15726"
            ],
            "image": "assets/New Product img/Bars/copper-nickel-bars.jpg"
          }
        ],
        "image": "assets/New Product img/Bars/copper-nickel-bars.jpg",
        "fallback": "assets/our product new images/bars.png"
      },
      {
        "slug": "aluminium",
        "name": "Aluminium",
        "number": "09",
        "description": "High-strength wrought and extruded aluminium alloys delivering lightweight structural capability, high thermal dissipation, and cryogenic ductility for aerospace and marine service.",
        "applicableStandards": "ASTM B221, ASTM B241, ASTM B209, ASME B16.5",
        "pressureClasses": "Class 150#, PN10, PN16",
        "sizeRange": "1/2\" NB to 24\" NB",
        "grades": [
          {
            "slug": "6061-t6",
            "name": "6061-T6",
            "fullName": "6061-T6 Structural Aluminium",
            "designation": {
              "astm": "ASTM B221 / B241 Gr. 6061",
              "asme": "ASME SB221",
              "uns": "UNS A96061",
              "en": "3.3211 (AlMg1SiCu)"
            },
            "description": "Precipitation-hardened magnesium-silicon alloy delivering high structural yield strength, excellent CNC machinability, and clean surface anodizing characteristics.",
            "characteristics": [
              "High strength-to-weight ratio with density of only 2.70 g/cm³.",
              "Excellent atmospheric corrosion resistance in industrial environments.",
              "Readily machinable to tight geometric tolerances on multi-axis CNC machines.",
              "Excellent TIG/MIG weldability using 4043 or 5356 filler wires."
            ],
            "applications": [
              "Aerospace fuel and hydraulic fluid lines",
              "Cryogenic air separation plant piping",
              "Automotive racing fluid manifolds",
              "Precision robotic automation frames"
            ],
            "specs": {
              "tensileStrength": "290 MPa (42 ksi) minimum",
              "yieldStrength": "240 MPa (35 ksi) minimum",
              "elongation": "8% - 10% in 2 inches",
              "hardness": "HBW ~ 95",
              "heatTreatment": "Solution heat-treated and artificially aged (T6 temper)",
              "inspection": "EN 10204 Type 3.1 MTC / Conductivity check"
            },
            "standards": [
              "ASTM B221",
              "ASTM B241",
              "AMS 4027",
              "ASME B16.5"
            ],
            "image": "assets/New Product img/Bars/bars-showcase.png"
          },
          {
            "slug": "5083-h116",
            "name": "5083-H116",
            "fullName": "5083-H116 Marine Aluminium",
            "designation": {
              "astm": "ASTM B209 / B221 Gr. 5083",
              "asme": "ASME SB209",
              "uns": "UNS A95083",
              "en": "3.3547 (AlMg4.5Mn0.7)"
            },
            "description": "High-magnesium marine alloy engineered specifically for exceptional corrosion resistance in seawater and cryogenic storage tanks down to -269°C without embrittlement.",
            "characteristics": [
              "The premier structural aluminium alloy for saltwater immersion.",
              "Maintains exceptional ductility and toughness at cryogenic temperatures down to liquid helium (-269°C).",
              "High weld joint efficiency without requiring post-weld solution treatment.",
              "Certified by DNV, Lloyd's Register, and ABS for marine construction."
            ],
            "applications": [
              "LNG/LPG cryogenic cargo tank piping",
              "High-speed marine ferry hull piping",
              "Naval radar mast structural flanges",
              "Chemical rail tanker vessels"
            ],
            "specs": {
              "tensileStrength": "305 MPa (44 ksi) minimum",
              "yieldStrength": "215 MPa (31 ksi) minimum",
              "elongation": "10% minimum in 2 inches",
              "hardness": "HBW ~ 85",
              "heatTreatment": "Strain-hardened and stabilized (H116 temper) for intergranular corrosion resistance",
              "inspection": "EN 10204 3.1 / Nitric Acid Mass Loss Test (NAMLT) to ASTM G67"
            },
            "standards": [
              "ASTM B209",
              "ASTM B221",
              "DNV-GL Marine Rules",
              "ASME Section VIII"
            ],
            "image": "assets/New Product img/Bars/bars-showcase.png"
          }
        ],
        "image": "assets/New Product img/Bars/bars-showcase.png",
        "fallback": "assets/our product new images/bars.png"
      }
    ]
  },
  {
    "slug": "dairy-pharma-fittings",
    "name": "Dairy & Pharma Fittings",
    "title": "DAIRY & PHARMA FITTINGS",
    "suffix": "Dairy & Pharma Fittings",
    "eyebrow": "DIN 11851 / SMS / ASME BPE SANITARY PROTOCOLS",
    "heroImage": "assets/Product Section/Manufacturer division/Dairy & Pharma Fittings/stainless steel.jpg",
    "heroTag": "SANITARY & PHARMACEUTICAL HYGIENIC FITTINGS",
    "description": "Ultra-hygienic tri-clamp ferrules, sanitary elbows, CIP spray balls, and electro-polished tubing engineered for zero dead-leg sterility across pharmaceutical, biotech, dairy, and beverage processing lines.",
    "overview": {
      "lead": "Sanitary fittings eliminate crevices, dead-legs, and microscopic pits where bacteria or process residues could accumulate, ensuring complete Clean-In-Place (CIP) and Steam-In-Place (SIP) cleanability.",
      "highlights": [
        {
          "title": "Surface Roughness",
          "desc": "Mechanically polished and electro-polished to Ra ≤ 0.4 µm (15 µin) internally for aseptic service."
        },
        {
          "title": "Hygienic Standards",
          "desc": "Conforming strictly to ASME BPE, 3-A Sanitary Standards, DIN 11851, and SMS specifications."
        },
        {
          "title": "Material Purity",
          "desc": "Low-ferrite 316L stainless steel with controlled sulfur content (0.005%–0.017%) for orbital welding."
        },
        {
          "title": "Aseptic Sealing",
          "desc": "USP Class VI and FDA-compliant PTFE, EPDM, Silicone, and Viton sanitary gasket seals."
        }
      ]
    },
    "hasTypes": false,
    "types": [],
    "materials": [
      {
        "slug": "stainless-steel",
        "name": "Stainless Steel",
        "number": "01",
        "description": "Austenitic and martensitic stainless steels offering superior resistance to chemical attack, pitting, and high-temperature scaling across process industries.",
        "applicableStandards": "ASTM A182, ASTM A240, ASTM A312, ASTM A403, ASME B16.5",
        "pressureClasses": "Class 150#, 300#, 600#, 900#, 1500#, 2500#",
        "sizeRange": "1/2\" NB to 60\" NB (DN15 to DN1500)",
        "grades": [
          {
            "slug": "304",
            "name": "304",
            "fullName": "304 Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S30400",
              "en": "1.4301 (X5CrNi18-10)"
            },
            "description": "The classic 18/8 austenitic stainless steel delivering dependable general corrosion resistance, excellent formability, and cryogenic impact toughness.",
            "characteristics": [
              "Excellent atmospheric and chemical corrosion resistance in organic and mildly oxidizing acids.",
              "Retains high impact toughness from cryogenic temperatures (-196°C) up to 800°C.",
              "Readily weldable by all standard commercial fusion methods without requiring preheat.",
              "Non-magnetic in the solution-annealed condition with moderate work hardening rate."
            ],
            "applications": [
              "Chemical processing manifolds",
              "Food, dairy & beverage piping",
              "Petrochemical low-temperature loops",
              "Cryogenic storage vessel nozzles",
              "Architectural structural piping"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "205 MPa (30 ksi) minimum",
              "elongation": "40% minimum in 2 inches",
              "hardness": "HBW ≤ 201 (HRB ≤ 92)",
              "heatTreatment": "Solution Annealed at 1040°C - 1120°C followed by rapid water quench",
              "inspection": "EN 10204 Type 3.1 MTC with complete chemical and mechanical test results"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.47",
              "ASTM A182",
              "ASME SA182",
              "MSS-SP-43",
              "NACE MR0175 (annealed)"
            ],
            "image": "assets/Product Section/Manufacturer division/Dairy & Pharma Fittings/stainless steel.jpg"
          },
          {
            "slug": "304l",
            "name": "304L",
            "fullName": "304L Low-Carbon Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S30403",
              "en": "1.4307 (X2CrNi18-9)"
            },
            "description": "Extra-low carbon modification (C ≤ 0.030%) that eliminates chromium carbide precipitation during welding, providing immunity to intergranular corrosion in as-welded assemblies.",
            "characteristics": [
              "Immunity to sensitization and intergranular attack in heat-affected zones (HAZ) of welded components.",
              "Eliminates the mandatory requirement for post-weld solution annealing.",
              "Maintains cryogenic mechanical ductility down to liquid nitrogen temperatures (-196°C).",
              "Compatible with dual-certified 304/304L pressure vessel specifications."
            ],
            "applications": [
              "Heavy-wall welded piping systems",
              "Wet chemical processing lines",
              "Refinery flare header lines",
              "Marine deck piping systems",
              "Pulp and paper bleaching equipment"
            ],
            "specs": {
              "tensileStrength": "485 MPa (70 ksi) minimum",
              "yieldStrength": "170 MPa (25 ksi) minimum",
              "elongation": "40% minimum in 2 inches",
              "hardness": "HBW ≤ 201",
              "heatTreatment": "Solution Annealed at 1040°C - 1100°C and water quenched",
              "inspection": "EN 10204 Type 3.1 MTC / NACE MR0175 compliant"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.9",
              "ASTM A182",
              "ASTM A403",
              "ASME Section VIII Div 1"
            ],
            "image": "assets/Product Section/Manufacturer division/Dairy & Pharma Fittings/stainless steel.jpg"
          },
          {
            "slug": "316",
            "name": "316",
            "fullName": "316 Molybdenum-Bearing Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S31600",
              "en": "1.4401 (X5CrNiMo17-12-2)"
            },
            "description": "Formulated with 2.0% to 3.0% molybdenum to significantly improve localized resistance to pitting and crevice corrosion in chloride and halide-bearing environments.",
            "characteristics": [
              "Significantly higher pitting resistance equivalent (PREN ~ 23-25) compared to 304.",
              "Superior resistance to sulfuric, phosphoric, acetic, and tartaric acid solutions.",
              "Elevated creep rupture strength at elevated operating temperatures up to 870°C.",
              "Standard specification for marine atmospheres, offshore platforms, and coastal chemical plants."
            ],
            "applications": [
              "Offshore oil & gas production manifolds",
              "Marine seawater cooling circuits",
              "Pharmaceutical reaction vessels",
              "Petrochemical acid-wash scrubbers",
              "Fertilizer production piping"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "205 MPa (30 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 217",
              "heatTreatment": "Solution Annealed at 1040°C - 1150°C and rapidly quenched",
              "inspection": "EN 10204 3.1 / PMI / Ultrasonic Inspection to ASTM A388"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.47",
              "ASTM A182",
              "ASTM A312",
              "NACE MR0175 / ISO 15156"
            ],
            "image": "assets/Product Section/Manufacturer division/Dairy & Pharma Fittings/stainless steel.jpg"
          },
          {
            "slug": "316l",
            "name": "316L",
            "fullName": "316L Low-Carbon Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S31603",
              "en": "1.4404 (X2CrNiMo17-12-2)"
            },
            "description": "Low-carbon molybdenum alloy combining superior chloride pitting resistance with complete protection against intergranular carbide precipitation in critical welded joints.",
            "characteristics": [
              "Carbon restricted to 0.030% max, preventing grain boundary sensitization during field welding.",
              "Exceptional resistance to localized pitting in marine and brackish water piping systems.",
              "Widely accepted in sour service under NACE MR0175 / ISO 15156 standards.",
              "Clean interior surface finish capability suitable for sanitary and high-purity applications."
            ],
            "applications": [
              "Subsea umbilical and manifold piping",
              "Chemical tanker cargo lines",
              "Pharmaceutical clean-in-place (CIP) loops",
              "Desalination plant brine piping",
              "Sour hydrocarbon gas handling"
            ],
            "specs": {
              "tensileStrength": "485 MPa (70 ksi) minimum",
              "yieldStrength": "170 MPa (25 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 217",
              "heatTreatment": "Solution Annealed at 1040°C - 1120°C and water quenched",
              "inspection": "EN 10204 Type 3.1 MTC / NACE MR0175 / MR0103"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.11",
              "ASTM A182",
              "ASTM A403",
              "ASME BPE"
            ],
            "image": "assets/Product Section/Manufacturer division/Dairy & Pharma Fittings/stainless steel.jpg"
          },
          {
            "slug": "321",
            "name": "321",
            "fullName": "321 Titanium-Stabilized Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S32100",
              "en": "1.4541 (X6CrNiTi18-10)"
            },
            "description": "Stabilized with titanium (Ti ≥ 5x C) to tie up carbon as titanium carbides, preventing sensitization during prolonged service in the critical 427°C to 816°C temperature range.",
            "characteristics": [
              "Complete immunity to intergranular corrosion during continuous high-temperature service.",
              "Superior creep and stress-rupture properties compared to standard 304/304L.",
              "Resists polythionic acid stress corrosion cracking during refinery shutdown cycles.",
              "Standard choice for aircraft exhaust systems and refinery thermal crackers."
            ],
            "applications": [
              "Refinery thermal cracker piping",
              "Catalytic reformer units",
              "High-temperature steam boiler bypass lines",
              "Aircraft engine exhaust manifolds",
              "Chemical furnace tube connections"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "205 MPa (30 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 217",
              "heatTreatment": "Solution Annealed at 1000°C - 1100°C followed by stabilization heat treatment at 850°C - 900°C",
              "inspection": "EN 10204 3.1 / Intergranular Corrosion Test to ASTM A262 Practice E"
            },
            "standards": [
              "ASME B16.5",
              "ASTM A182",
              "ASME SA182",
              "API 530"
            ],
            "image": "assets/Product Section/Manufacturer division/Dairy & Pharma Fittings/stainless steel.jpg"
          },
          {
            "slug": "347",
            "name": "347",
            "fullName": "347 Niobium-Stabilized Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S34700",
              "en": "1.4550 (X6CrNiNb18-10)"
            },
            "description": "Stabilized with niobium/columbium (Nb ≥ 10x C) providing enhanced creep resistance and intergranular corrosion resistance at severe temperatures up to 870°C.",
            "characteristics": [
              "High creep strength and stress rupture resistance in heavy wall forged components.",
              "Resistant to polythionic acid stress cracking in hydrocracking and hydrotreating units.",
              "Superior fatigue strength under extreme thermal shock cycling.",
              "Certified for nuclear and supercritical power generation piping."
            ],
            "applications": [
              "Hydroprocessing and hydrodesulfurization units",
              "Supercritical power boiler piping",
              "Radiant superheater tube headers",
              "High-temperature radioactive waste handling",
              "Gas turbine exhaust nozzles"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "205 MPa (30 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 217",
              "heatTreatment": "Solution Annealed at 1040°C - 1150°C and water quenched",
              "inspection": "EN 10204 Type 3.1 with ASTM A262 Practice E IGC certification"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.9",
              "ASTM A182",
              "ASME Section III Class 1"
            ],
            "image": "assets/Product Section/Manufacturer division/Dairy & Pharma Fittings/stainless steel.jpg"
          },
          {
            "slug": "310s",
            "name": "310S",
            "fullName": "310S High-Temperature Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S31008",
              "en": "1.4845 (X8CrNi25-21)"
            },
            "description": "High-alloy austenitic stainless steel formulated with 25% chromium and 20% nickel for exceptional resistance to high-temperature oxidation and sulfidation up to 1150°C.",
            "characteristics": [
              "Continuous oxidation resistance in air up to 1150°C (2100°F) under cyclic thermal conditions.",
              "Resistant to carburization in moderately carburizing petrochemical atmospheres.",
              "Maintains high ductile toughness and structural stability at elevated temperatures.",
              "Low magnetic permeability and high thermal creep endurance."
            ],
            "applications": [
              "Thermal incinerator burner piping",
              "Fluidized bed coal combustors",
              "Cement rotary kiln exhaust nozzles",
              "Petrochemical pyrolysis furnaces",
              "Heat treatment furnace fixtures"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "205 MPa (30 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 217",
              "heatTreatment": "Solution Annealed at 1040°C - 1150°C followed by rapid air or water cooling",
              "inspection": "EN 10204 3.1 MTC / High-temperature mechanical testing"
            },
            "standards": [
              "ASME B16.5",
              "ASTM A182",
              "ASTM A312",
              "ASME Section VIII Div 1"
            ],
            "image": "assets/Product Section/Manufacturer division/Dairy & Pharma Fittings/stainless steel.jpg"
          },
          {
            "slug": "904l",
            "name": "904L",
            "fullName": "904L Super Austenitic Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS N08904",
              "en": "1.4539 (X1NiCrMoCu25-20-5)"
            },
            "description": "High-alloy super-austenitic stainless steel formulated with 4.5% molybdenum and 1.5% copper, specifically developed to withstand aggressive sulfuric and phosphoric acids.",
            "characteristics": [
              "High PREN (≥ 34), offering extraordinary resistance to warm seawater pitting.",
              "Added copper content provides outstanding resistance to concentrated sulfuric acid across all concentration ranges.",
              "Immune to chloride-induced stress corrosion cracking up to 60°C.",
              "Fully austenitic structure provides high ductility and ease of welding."
            ],
            "applications": [
              "Sulfuric acid manufacturing pipelines",
              "Phosphate fertilizer production units",
              "Flue gas desulfurization (FGD) scrubbers",
              "Seawater reverse osmosis piping",
              "Pulp mill bleaching towers"
            ],
            "specs": {
              "tensileStrength": "490 MPa (71 ksi) minimum",
              "yieldStrength": "220 MPa (32 ksi) minimum",
              "elongation": "35% minimum in 2 inches",
              "hardness": "HBW ≤ 217 (HRB ≤ 95)",
              "heatTreatment": "Solution Annealed at 1090°C - 1150°C followed by rapid water quench",
              "inspection": "EN 10204 Type 3.1 MTC with ASTM G48 pitting test verification"
            },
            "standards": [
              "ASTM A182",
              "ASME B16.5",
              "ASTM B625",
              "NACE MR0175"
            ],
            "image": "assets/Product Section/Manufacturer division/Dairy & Pharma Fittings/stainless steel.jpg"
          }
        ],
        "image": "assets/Product Section/Manufacturer division/Dairy & Pharma Fittings/stainless steel.jpg",
        "fallback": "assets/Product Section/Manufacturer division/Dairy & Pharma Fittings/stainless steel.jpg"
      },
      {
        "slug": "carbon-steel",
        "name": "Carbon Steel",
        "number": "02",
        "description": "Forged and plate-formed carbon steels engineered for structural strength, high pressure containment, and reliable impact ductility in utility and industrial piping.",
        "applicableStandards": "ASTM A105, ASTM A350 LF2, ASTM A106, ASTM A234 WPB, ASME B16.5",
        "pressureClasses": "Class 150#, 300#, 600#, 900#, 1500#, 2500#",
        "sizeRange": "1/2\" NB to 60\" NB",
        "grades": [
          {
            "slug": "a105",
            "name": "A105",
            "fullName": "ASTM A105 Forged Carbon Steel",
            "designation": {
              "astm": "ASTM A105 / A105N",
              "asme": "ASME SA105",
              "uns": "UNS K03504",
              "en": "1.0460 (C22.8 / P250GH)"
            },
            "description": "The premier forged carbon steel specification for ambient and elevated-temperature piping components, flanges, fittings, and valves.",
            "characteristics": [
              "Excellent machinability and weldability with balanced carbon-manganese metallurgy.",
              "Supplied in normalized (A105N) heat-treated condition for fine grain size and optimal Charpy V-notch toughness.",
              "High proof pressure containment for petroleum refineries, power stations, and steam pipelines.",
              "Fully qualified under ASME Section VIII and ASME B31.3 piping codes."
            ],
            "applications": [
              "Refinery steam and hydrocarbon lines",
              "Boiler feed water piping",
              "Natural gas transmission stations",
              "District heating networks",
              "General industrial utility piping"
            ],
            "specs": {
              "tensileStrength": "485 MPa (70 ksi) minimum",
              "yieldStrength": "250 MPa (36 ksi) minimum",
              "elongation": "22% minimum in 2 inches",
              "hardness": "HBW 137 - 187",
              "heatTreatment": "Normalized at 880°C - 920°C and air cooled",
              "inspection": "EN 10204 Type 3.1 MTC / 100% NDT inspection"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.11",
              "ASTM A105",
              "MSS-SP-79",
              "NACE MR0175 (normalized)"
            ],
            "image": "assets/Product Section/Manufacturer division/Dairy & Pharma Fittings/carbon.webp"
          },
          {
            "slug": "a350-lf2",
            "name": "A350 LF2",
            "fullName": "ASTM A350 LF2 Low-Temperature Carbon Steel",
            "designation": {
              "astm": "ASTM A350 LF2 Class 1",
              "asme": "ASME SA350 LF2",
              "uns": "UNS K03011",
              "en": "1.0566 (TStE 355)"
            },
            "description": "Forged carbon and low-alloy steel specifically treated for notched-bar toughness in low-temperature piping systems down to -46°C (-50°F).",
            "characteristics": [
              "Guaranteed Charpy V-notch impact toughness of 20 Joules (15 ft-lbs) minimum at -46°C (-50°F).",
              "Fine-grained, fully killed steel heat treated by normalizing and tempering or quenching and tempering.",
              "Mandatory for Arctic pipelines, cold gas transmission, and LPG/LNG cryogenic utility lines.",
              "Fully compliant with NACE MR0175 hardness limits (≤ 22 HRC)."
            ],
            "applications": [
              "Arctic oil and gas extraction lines",
              "LPG/LNG transport and storage terminals",
              "Refrigeration compressor piping",
              "Subsea cold-water export lines",
              "Cryogenic gas processing facilities"
            ],
            "specs": {
              "tensileStrength": "485 - 655 MPa (70 - 95 ksi)",
              "yieldStrength": "250 MPa (36 ksi) minimum",
              "elongation": "22% minimum in 2 inches",
              "hardness": "HBW ≤ 197 (HRC ≤ 22)",
              "heatTreatment": "Normalized at 900°C and Tempered at 600°C",
              "inspection": "EN 10204 3.1 / Charpy V-Notch Impact Test at -46°C"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.11",
              "ASTM A350",
              "NACE MR0175 / ISO 15156"
            ],
            "image": "assets/Product Section/Manufacturer division/Dairy & Pharma Fittings/carbon.webp"
          },
          {
            "slug": "a234-wpb",
            "name": "A234 WPB",
            "fullName": "ASTM A234 WPB Wrought Carbon Steel",
            "designation": {
              "astm": "ASTM A234 Grade WPB",
              "asme": "ASME SA234 WPB",
              "uns": "UNS K03006",
              "en": "1.0488 (P275NH)"
            },
            "description": "The standard wrought carbon steel material specification for seamless and welded butt weld elbows, tees, reducers, and pipe caps.",
            "characteristics": [
              "Formed from seamless pipe (ASTM A106 Grade B) or plate (ASTM A285/A516) with uniform grain distribution.",
              "High weldability and ductility for high-speed automated pipe spool fabrication.",
              "Engineered for moderate and high-temperature pressure piping systems.",
              "Supplied in normalized, stress-relieved, or annealed condition."
            ],
            "applications": [
              "Cross-country oil & gas pipelines",
              "Power plant steam header loops",
              "Industrial boiler piping",
              "Chemical plant water injection mains",
              "District heating infrastructure"
            ],
            "specs": {
              "tensileStrength": "415 - 585 MPa (60 - 85 ksi)",
              "yieldStrength": "240 MPa (35 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 197",
              "heatTreatment": "Normalized or hot-formed above 620°C",
              "inspection": "EN 10204 3.1 / 100% Hydrostatic and NDT Testing"
            },
            "standards": [
              "ASME B16.9",
              "ASME B16.28",
              "ASTM A234",
              "MSS-SP-25"
            ],
            "image": "assets/Product Section/Manufacturer division/Dairy & Pharma Fittings/carbon.webp"
          },
          {
            "slug": "a516-gr70",
            "name": "A516 Gr. 70",
            "fullName": "ASTM A516 Grade 70 Pressure Vessel Plate",
            "designation": {
              "astm": "ASTM A516 / A516M Gr. 70",
              "asme": "ASME SA516 Gr. 70",
              "uns": "UNS K02700",
              "en": "1.0473 (P355GH)"
            },
            "description": "The standard boiler and pressure-vessel quality carbon steel plate material for circular blanks, dished heads, and vessel shells operating at ambient and lower temperatures.",
            "characteristics": [
              "Superior notch toughness and weldability with vacuum-degassed, fine-grain steel practice.",
              "High yield strength and resistance to lamellar tearing under transverse welded loads.",
              "Normalized for improved low-temperature impact properties (available with Charpy testing down to -46°C).",
              "Standard material for heavy industrial autoclaves and storage vessels."
            ],
            "applications": [
              "Pressure vessel shells and circular dished ends",
              "Heat exchanger tube sheets and circular blind covers",
              "Storage tank bottom and shell plates",
              "Heavy-wall welded vessel nozzles"
            ],
            "specs": {
              "tensileStrength": "485 - 620 MPa (70 - 90 ksi)",
              "yieldStrength": "260 MPa (38 ksi) minimum",
              "elongation": "21% minimum in 2 inches",
              "hardness": "HBW ≤ 187",
              "heatTreatment": "Normalized above 40 mm plate thickness",
              "inspection": "EN 10204 3.1 / Ultrasonic testing to ASTM A435 / A578"
            },
            "standards": [
              "ASTM A516",
              "ASME SA516",
              "ASME Section VIII Div 1 & 2"
            ],
            "image": "assets/Product Section/Manufacturer division/Dairy & Pharma Fittings/carbon.webp"
          }
        ],
        "image": "assets/Product Section/Manufacturer division/Dairy & Pharma Fittings/carbon.webp",
        "fallback": "assets/Product Section/Manufacturer division/Dairy & Pharma Fittings/stainless steel.jpg"
      },
      {
        "slug": "alloy-steel",
        "name": "Alloy Steel",
        "number": "03",
        "description": "Chromium-molybdenum alloy steels engineered for elevated-temperature creep strength, hydrogen attack resistance, and severe power boiler and hydroprocessing service.",
        "applicableStandards": "ASTM A182, ASTM A234, ASTM A335, ASME B16.5, ASME B16.11",
        "pressureClasses": "Class 300#, 600#, 900#, 1500#, 2500#",
        "sizeRange": "1/2\" NB to 36\" NB",
        "grades": [
          {
            "slug": "f11",
            "name": "F11",
            "fullName": "ASTM A182 F11 (1.25% Cr - 0.5% Mo)",
            "designation": {
              "astm": "ASTM A182 F11 Class 2",
              "asme": "ASME SA182 F11",
              "uns": "UNS K11572",
              "en": "1.7335 (13CrMo4-5)"
            },
            "description": "Nominal 1.25% chromium, 0.5% molybdenum alloy steel engineered for high-temperature steam lines and refinery hydrocrackers operating up to 550°C.",
            "characteristics": [
              "High creep rupture strength and resistance to graphitization at elevated steam temperatures.",
              "Resistance to high-temperature hydrogen attack (HTHA) according to Nelson curve criteria.",
              "Supplied in normalized and tempered condition for structural microstructural stability.",
              "Standard alloy for thermal power plant main steam and hot reheat lines."
            ],
            "applications": [
              "Main steam headers in thermal power plants",
              "Hydrodesulfurization reactor piping",
              "Superheater piping and headers",
              "Refinery furnace transfer lines"
            ],
            "specs": {
              "tensileStrength": "485 MPa (70 ksi) minimum",
              "yieldStrength": "275 MPa (40 ksi) minimum",
              "elongation": "20% minimum in 2 inches",
              "hardness": "HBW 143 - 207",
              "heatTreatment": "Normalized at 900°C - 950°C and Tempered at 650°C minimum",
              "inspection": "EN 10204 3.1 / Hot tensile test verified"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.11",
              "ASTM A182",
              "API 941"
            ],
            "image": "assets/Product Section/Manufacturer division/Dairy & Pharma Fittings/alloy steel.jpeg"
          },
          {
            "slug": "f22",
            "name": "F22",
            "fullName": "ASTM A182 F22 (2.25% Cr - 1.0% Mo)",
            "designation": {
              "astm": "ASTM A182 F22 Class 3",
              "asme": "ASME SA182 F22",
              "uns": "UNS K21590",
              "en": "1.7380 (10CrMo9-10)"
            },
            "description": "Nominal 2.25% chromium, 1.0% molybdenum alloy steel offering superior creep endurance, corrosion resistance to sulfur-bearing oil streams, and hydrogen resistance up to 600°C.",
            "characteristics": [
              "Elevated creep resistance and high allowable design stress under ASME Section I and VIII.",
              "Enhanced resistance to high-pressure hydrogen embrittlement in hydroprocessing units.",
              "Quenched and tempered or normalized and tempered for high fracture toughness.",
              "Specified for high-pressure catalytic cracking and supercritical boiler loops."
            ],
            "applications": [
              "Hydrocracker reactor nozzles and loop piping",
              "Supercritical boiler superheater headers",
              "Gasifier syngas transfer lines",
              "Petrochemical high-pressure steam headers"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "310 MPa (45 ksi) minimum",
              "elongation": "20% minimum in 2 inches",
              "hardness": "HBW 156 - 207",
              "heatTreatment": "Normalized at 900°C - 950°C and Tempered at 675°C minimum",
              "inspection": "EN 10204 3.1 / Ultrasonic and Magnetic Particle Inspection"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.9",
              "ASTM A182",
              "ASTM A335 Grade P22"
            ],
            "image": "assets/Product Section/Manufacturer division/Dairy & Pharma Fittings/alloy steel.jpeg"
          },
          {
            "slug": "f91",
            "name": "F91",
            "fullName": "ASTM A182 F91 (9% Cr - 1% Mo - V - Nb)",
            "designation": {
              "astm": "ASTM A182 F91 Type 1",
              "asme": "ASME SA182 F91",
              "uns": "UNS K90901",
              "en": "1.4903 (X10CrMoVNb9-1)"
            },
            "description": "Advanced modified 9Cr-1Mo-V-Nb martensitic alloy steel engineered for supercritical and ultra-supercritical (USC) power stations operating up to 620°C with reduced wall thickness.",
            "characteristics": [
              "Twice the creep rupture strength of F22 at 600°C, enabling thinner component wall sections.",
              "Lower thermal stress and reduced cyclic thermal fatigue in high-efficiency power boilers.",
              "Requires tight control of heat treatment: normalizing at 1040°C–1080°C and tempering at 730°C–800°C.",
              "Strict compliance with hardness and microstructural martensite grain requirements."
            ],
            "applications": [
              "Ultra-supercritical power plant main steam lines",
              "Combined cycle gas turbine (CCGT) HRSG headers",
              "High-pressure steam bypass manifolds",
              "Nuclear power steam generator loops"
            ],
            "specs": {
              "tensileStrength": "585 - 760 MPa (85 - 110 ksi)",
              "yieldStrength": "415 MPa (60 ksi) minimum",
              "elongation": "20% minimum in 2 inches",
              "hardness": "HBW 190 - 248",
              "heatTreatment": "Normalized at 1050°C and Tempered at 750°C - 780°C",
              "inspection": "EN 10204 Type 3.1 / 100% Ultrasonic & Hardness verification"
            },
            "standards": [
              "ASME B16.5",
              "ASTM A182",
              "ASTM A335 Grade P91",
              "EPRI Guidelines"
            ],
            "image": "assets/Product Section/Manufacturer division/Dairy & Pharma Fittings/alloy steel.jpeg"
          }
        ],
        "image": "assets/Product Section/Manufacturer division/Dairy & Pharma Fittings/alloy steel.jpeg",
        "fallback": "assets/Product Section/Manufacturer division/Dairy & Pharma Fittings/stainless steel.jpg"
      },
      {
        "slug": "duplex",
        "name": "Duplex & Super Duplex",
        "number": "04",
        "description": "Dual-phase austenitic-ferritic microstructures delivering yield strength roughly twice that of standard stainless steel combined with superior resistance to chloride stress corrosion cracking.",
        "applicableStandards": "ASTM A182, ASTM A240, ASTM A790, ASTM A815, ASME B16.5",
        "pressureClasses": "Class 150#, 300#, 600#, 900#, 1500#, 2500#",
        "sizeRange": "1/2\" NB to 36\" NB",
        "grades": [
          {
            "slug": "2205",
            "name": "2205",
            "fullName": "2205 Standard Duplex (UNS S31803 / S32205)",
            "designation": {
              "astm": "ASTM A182 F51 / F60",
              "asme": "ASME SA182 F51 / F60",
              "uns": "UNS S31803 / S32205",
              "en": "1.4462 (X2CrNiMoN22-5-3)"
            },
            "description": "The workhorse 22% chromium duplex stainless steel with approximately 50/50 ferrite-austenite phase balance, offering high yield strength and high chloride resistance (PREN 35).",
            "characteristics": [
              "Yield strength roughly twice that of austenitic 316L, allowing substantial weight reduction.",
              "High resistance to chloride stress corrosion cracking in sour environments.",
              "High resistance to erosion-corrosion and pitting in seawater and brackish cooling water.",
              "Temperature limit typically restricted to -50°C to +280°C to prevent 475°C embrittlement."
            ],
            "applications": [
              "Offshore oil & gas topside piping",
              "Chemical tanker cargo holds and piping",
              "Desalination high-pressure reverse osmosis headers",
              "Flue gas cleaning systems",
              "Biofuel processing digesters"
            ],
            "specs": {
              "tensileStrength": "655 MPa (95 ksi) minimum",
              "yieldStrength": "450 MPa (65 ksi) minimum",
              "elongation": "25% minimum in 2 inches",
              "hardness": "HBW ≤ 290 (HRC ≤ 28)",
              "heatTreatment": "Solution Annealed at 1020°C - 1100°C and rapidly water quenched",
              "inspection": "EN 10204 3.1 / Phase balance check (40-60% ferrite) / ASTM G48 Method A test"
            },
            "standards": [
              "ASME B16.5",
              "ASTM A182",
              "NORSK M-630 MDS D44",
              "NACE MR0175 / ISO 15156"
            ],
            "image": "assets/Product Section/Manufacturer division/Dairy & Pharma Fittings/duplex.jpeg"
          },
          {
            "slug": "2507",
            "name": "2507",
            "fullName": "2507 Super Duplex (UNS S32750)",
            "designation": {
              "astm": "ASTM A182 F53",
              "asme": "ASME SA182 F53",
              "uns": "UNS S32750",
              "en": "1.4410 (X2CrNiMoN25-7-4)"
            },
            "description": "25% chromium super duplex stainless steel with 4% molybdenum and 0.28% nitrogen, providing exceptional pitting and crevice corrosion resistance with PREN ≥ 42.",
            "characteristics": [
              "PREN ≥ 42 guaranteeing immunity to pitting in high-temperature chlorinated seawater.",
              "Exceptionally high mechanical yield strength (≥ 550 MPa) for high-pressure subsea lines.",
              "Immune to chloride stress corrosion cracking in aggressive sour gas reservoirs.",
              "Manufactured strictly to NORSOK M-630 and NACE MR0175 compliance."
            ],
            "applications": [
              "Subsea manifolds, risers, and Christmas tree piping",
              "Seawater fire-water ring mains",
              "Offshore high-pressure sour gas export lines",
              "Geothermal high-chloride brine piping",
              "Chemical plants handling hot chlorinated media"
            ],
            "specs": {
              "tensileStrength": "750 MPa (109 ksi) minimum",
              "yieldStrength": "550 MPa (80 ksi) minimum",
              "elongation": "15% minimum in 2 inches",
              "hardness": "HBW ≤ 310 (HRC ≤ 32)",
              "heatTreatment": "Solution Annealed at 1050°C - 1125°C and water quenched",
              "inspection": "EN 10204 3.1 / Microstructure audit / ASTM G48 Method A test at 50°C"
            },
            "standards": [
              "ASME B16.5",
              "ASTM A182 F53",
              "NORSOK M-630 MDS D54",
              "ISO 15156"
            ],
            "image": "assets/Product Section/Manufacturer division/Dairy & Pharma Fittings/duplex.jpeg"
          }
        ],
        "image": "assets/Product Section/Manufacturer division/Dairy & Pharma Fittings/duplex.jpeg",
        "fallback": "assets/Product Section/Manufacturer division/Dairy & Pharma Fittings/stainless steel.jpg"
      },
      {
        "slug": "high-alloy",
        "name": "High Alloy",
        "number": "05",
        "description": "Nickel-chromium-molybdenum superalloys engineered to withstand severe chemical environments, high temperatures, boiling mineral acids, and extreme mechanical stress.",
        "applicableStandards": "ASTM B564, ASTM B366, ASTM B622, ASME B16.5, ASME B16.11",
        "pressureClasses": "Class 150#, 300#, 600#, 900#, 1500#, 2500#",
        "sizeRange": "1/2\" NB to 24\" NB",
        "grades": [
          {
            "slug": "inconel-625",
            "name": "Inconel 625",
            "fullName": "Inconel 625 (UNS N06625)",
            "designation": {
              "astm": "ASTM B564 / B444",
              "asme": "ASME SB564",
              "uns": "UNS N06625",
              "en": "2.4856 (NiCr22Mo9Nb)"
            },
            "description": "Nickel-chromium-molybdenum alloy with niobium addition providing solid solution strengthening without heat treatment, resistant from cryogenic temperatures up to 980°C.",
            "characteristics": [
              "Virtually immune to chloride-induced stress corrosion cracking.",
              "Exceptional fatigue and thermal-fatigue strength in marine and aerospace environments.",
              "High resistance to a wide range of organic and inorganic acids, including wet chlorine.",
              "Certified for NACE sour service and nuclear reactor core piping."
            ],
            "applications": [
              "Marine exhaust scrubbers",
              "Subsea wellhead equipment",
              "Chemical waste disposal incinerator nozzles",
              "Nuclear reactor control rod drive piping",
              "Sour gas production downhole components"
            ],
            "specs": {
              "tensileStrength": "827 MPa (120 ksi) minimum",
              "yieldStrength": "414 MPa (60 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 220",
              "heatTreatment": "Annealed at 980°C - 1050°C",
              "inspection": "EN 10204 Type 3.1 / 100% Ultrasonic inspection"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B564",
              "NACE MR0175",
              "AMS 5666"
            ],
            "image": "assets/Product Section/Manufacturer division/Dairy & Pharma Fittings/high alloy.jpeg"
          },
          {
            "slug": "hastelloy-c276",
            "name": "Hastelloy C276",
            "fullName": "Hastelloy C276 (UNS N10276)",
            "designation": {
              "astm": "ASTM B564 / B575",
              "asme": "ASME SB564",
              "uns": "UNS N10276",
              "en": "2.4819 (NiMo16Cr15W)"
            },
            "description": "The universal corrosion-resistant nickel-molybdenum-chromium superalloy with tungsten, engineered to withstand aggressive wet chlorine gas, hypochlorite, and boiling mineral acids.",
            "characteristics": [
              "Unmatched resistance to localized pitting, crevice corrosion, and stress corrosion cracking.",
              "One of the few materials to withstand wet chlorine gas, hypochlorite, and chlorine dioxide solutions.",
              "Low carbon content minimizes carbide precipitation during welding, preserving as-welded corrosion resistance.",
              "Proven longevity in harsh chemical synthesis reactors."
            ],
            "applications": [
              "Flue gas desulfurization (FGD) scrubbers",
              "Sulfuric and hydrochloric acid synthesis plants",
              "Chlorination reaction systems",
              "Pharmaceutical active ingredient reactors",
              "Hazardous waste treatment vessels"
            ],
            "specs": {
              "tensileStrength": "690 MPa (100 ksi) minimum",
              "yieldStrength": "283 MPa (41 ksi) minimum",
              "elongation": "40% minimum in 2 inches",
              "hardness": "HBW ≤ 220",
              "heatTreatment": "Solution heat-treated at 1120°C and water quenched",
              "inspection": "EN 10204 Type 3.1 / Microstructure and ASTM G28 corrosion testing"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B564",
              "NACE MR0175 / ISO 15156"
            ],
            "image": "assets/Product Section/Manufacturer division/Dairy & Pharma Fittings/high alloy.jpeg"
          },
          {
            "slug": "monel-400",
            "name": "Monel 400",
            "fullName": "Monel 400 (UNS N04400)",
            "designation": {
              "astm": "ASTM B564 / B127",
              "asme": "ASME SB564",
              "uns": "UNS N04400",
              "en": "2.4360 (NiCu30Fe)"
            },
            "description": "Ductile nickel-copper alloy (67% Ni, 30% Cu) exhibiting exceptional resistance to rapidly flowing seawater, hydrofluoric acid, sulfuric acid, and high-temperature alkalies.",
            "characteristics": [
              "Standard engineering material for marine salt water immersion and splash zones.",
              "Exceptional resistance to hydrofluoric acid (HF) in all concentrations up to the boiling point.",
              "Resistant to non-oxidizing mineral acids and deaerated salt solutions.",
              "Non-magnetic down to room temperature with high impact toughness."
            ],
            "applications": [
              "Hydrofluoric acid alkylation units in oil refineries",
              "Marine propeller shafts and seawater valve trims",
              "Offshore splash-zone sheathing",
              "Chlorinated solvent recovery systems",
              "Salt plant brine evaporators"
            ],
            "specs": {
              "tensileStrength": "480 MPa (70 ksi) minimum",
              "yieldStrength": "195 MPa (28 ksi) minimum",
              "elongation": "35% minimum in 2 inches",
              "hardness": "HBW 110 - 150",
              "heatTreatment": "Annealed at 760°C - 900°C followed by water quench",
              "inspection": "EN 10204 3.1 / Ultrasonic and Dye Penetrant testing"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B564",
              "NACE MR0175",
              "MSS-SP-25"
            ],
            "image": "assets/Product Section/Manufacturer division/Dairy & Pharma Fittings/high alloy.jpeg"
          }
        ],
        "image": "assets/Product Section/Manufacturer division/Dairy & Pharma Fittings/high alloy.jpeg",
        "fallback": "assets/Product Section/Manufacturer division/Dairy & Pharma Fittings/stainless steel.jpg"
      },
      {
        "slug": "nickel",
        "name": "Nickel",
        "number": "06",
        "description": "Commercially pure nickel alloys engineered for caustic soda evaporators, non-oxidizing halogen systems, and high-purity chemical processing.",
        "applicableStandards": "ASTM B564, ASTM B160, ASTM B162, ASME B16.5",
        "pressureClasses": "Class 150#, 300#, 600#",
        "sizeRange": "1/2\" NB to 24\" NB",
        "grades": [
          {
            "slug": "nickel-200",
            "name": "Nickel 200",
            "fullName": "Nickel 200 (UNS N02200)",
            "designation": {
              "astm": "ASTM B564 / B160",
              "asme": "ASME SB564",
              "uns": "UNS N02200",
              "en": "2.4066 (Ni99.2)"
            },
            "description": "Commercially pure (99.6%) wrought nickel providing exceptional thermal conductivity, electrical properties, and uncompromised resistance to hot caustic alkalies.",
            "characteristics": [
              "Immune to stress corrosion cracking in all concentrations of boiling caustic soda (NaOH).",
              "Excellent resistance to dry fluorine, chlorine, and hydrogen chloride gases.",
              "High thermal conductivity and low electrical resistivity for electrochemical electrodes.",
              "Maintains cryogenic mechanical ductility without ductile-to-brittle transition."
            ],
            "applications": [
              "Caustic soda production evaporators",
              "Synthetic fiber manufacturing equipment",
              "Chlorine and hydrogen chloride dry gas transfer",
              "Food and soap processing reaction vessels"
            ],
            "specs": {
              "tensileStrength": "380 MPa (55 ksi) minimum",
              "yieldStrength": "105 MPa (15 ksi) minimum",
              "elongation": "40% minimum in 2 inches",
              "hardness": "HBW ≤ 130",
              "heatTreatment": "Annealed at 700°C - 900°C",
              "inspection": "EN 10204 Type 3.1 MTC"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B564",
              "ASME Section VIII Div 1"
            ],
            "image": "assets/Product Section/Manufacturer division/Dairy & Pharma Fittings/nikle.webp"
          },
          {
            "slug": "nickel-201",
            "name": "Nickel 201",
            "fullName": "Nickel 201 (UNS N02201)",
            "designation": {
              "astm": "ASTM B564 / B160",
              "asme": "ASME SB564",
              "uns": "UNS N02201",
              "en": "2.4068 (LC-Ni99.2)"
            },
            "description": "Low-carbon version (C ≤ 0.02%) of Nickel 200 engineered to prevent graphitization and intergranular embrittlement during service above 315°C (600°F).",
            "characteristics": [
              "Certified for continuous service at temperatures exceeding 315°C (600°F) up to 650°C.",
              "Low carbon prevents intercrystalline graphite precipitation in caustic environments.",
              "Exceptional resistance to molten hydroxide and fused caustic salts.",
              "High ductility and ease of cold forming and orbital welding."
            ],
            "applications": [
              "High-temperature caustic concentration evaporators",
              "Vinyl chloride monomer (VCM) thermal reactors",
              "Fluorochemical reactors",
              "Molten salt nuclear heat transfer loops"
            ],
            "specs": {
              "tensileStrength": "345 MPa (50 ksi) minimum",
              "yieldStrength": "70 MPa (10 ksi) minimum",
              "elongation": "40% minimum in 2 inches",
              "hardness": "HBW ≤ 120",
              "heatTreatment": "Annealed at 700°C - 900°C",
              "inspection": "EN 10204 Type 3.1 MTC / Carbon verification"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B564",
              "DIN 17750"
            ],
            "image": "assets/Product Section/Manufacturer division/Dairy & Pharma Fittings/nikle.webp"
          }
        ],
        "image": "assets/Product Section/Manufacturer division/Dairy & Pharma Fittings/nikle.webp",
        "fallback": "assets/Product Section/Manufacturer division/Dairy & Pharma Fittings/stainless steel.jpg"
      },
      {
        "slug": "titanium",
        "name": "Titanium",
        "number": "07",
        "description": "Lightweight, ultra-corrosion-resistant titanium alloys delivering total immunity to marine seawater, wet chlorine, and organic chlorides with extraordinary strength-to-weight ratios.",
        "applicableStandards": "ASTM B381, ASTM B348, ASTM B861, ASME B16.5",
        "pressureClasses": "Class 150#, 300#, 600#, 900#",
        "sizeRange": "1/2\" NB to 24\" NB",
        "grades": [
          {
            "slug": "grade-2",
            "name": "Grade 2",
            "fullName": "Titanium Grade 2 (UNS R50400)",
            "designation": {
              "astm": "ASTM B381 / B348 Gr. 2",
              "asme": "ASME SB381",
              "uns": "UNS R50400",
              "en": "3.7035 (Ti2)"
            },
            "description": "The workhorse commercially pure titanium grade offering the optimum balance of moderate strength, high ductility, excellent weldability, and total seawater corrosion resistance.",
            "characteristics": [
              "Forms a tenacious, self-healing titanium dioxide (TiO2) passive oxide film instantly upon exposure to oxygen.",
              "Complete immunity to marine microbiologically influenced corrosion (MIC) and crevice attack.",
              "Approximately 45% lighter than steel, significantly reducing topside platform loads.",
              "Certified biocompatible for medical and food-contact installations."
            ],
            "applications": [
              "Seawater desalination reverse osmosis and multi-stage flash units",
              "Offshore oil platform seawater cooling systems",
              "Chlor-alkali electrolytic cell anode connections",
              "Bleaching towers in pulp and paper mills"
            ],
            "specs": {
              "tensileStrength": "345 MPa (50 ksi) minimum",
              "yieldStrength": "275 MPa (40 ksi) minimum",
              "elongation": "20% minimum in 2 inches",
              "hardness": "HBW ≤ 200",
              "heatTreatment": "Stress Relieved at 500°C - 550°C",
              "inspection": "EN 10204 3.1 / Gas analysis (C, O, N, H) verified"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B381",
              "NACE MR0175 / ISO 15156"
            ],
            "image": "assets/Product Section/Manufacturer division/Dairy & Pharma Fittings/titainium.jpg"
          },
          {
            "slug": "grade-5",
            "name": "Grade 5",
            "fullName": "Titanium Grade 5 (Ti-6Al-4V / UNS R56400)",
            "designation": {
              "astm": "ASTM B381 / B348 Gr. 5",
              "asme": "ASME SB381",
              "uns": "UNS R56400",
              "en": "3.7165 (Ti6Al4V)"
            },
            "description": "Alpha-beta titanium alloy containing 6% aluminum and 4% vanadium, delivering twice the mechanical tensile strength of commercially pure grades with high fatigue endurance.",
            "characteristics": [
              "Tensile strength exceeding 895 MPa (130 ksi) with low density of 4.43 g/cm³.",
              "Exceptional strength-to-weight ratio for aerospace and subsea structural bolting.",
              "Maintains mechanical properties up to 400°C while resisting high-velocity seawater erosion.",
              "Heat treatable by solution treating and aging (STA)."
            ],
            "applications": [
              "Subsea high-pressure wellhead riser bolts",
              "Aerospace hydraulic fluid connections",
              "High-speed marine hydrofoil fasteners",
              "Deepwater oceanographic exploration casings"
            ],
            "specs": {
              "tensileStrength": "895 MPa (130 ksi) minimum",
              "yieldStrength": "828 MPa (120 ksi) minimum",
              "elongation": "10% minimum in 2 inches",
              "hardness": "HRC 30 - 36",
              "heatTreatment": "Mill Annealed at 700°C - 785°C and air cooled",
              "inspection": "EN 10204 Type 3.1 MTC / Ultrasonic testing"
            },
            "standards": [
              "ASTM B381",
              "ASME B16.5",
              "AMS 4928",
              "NACE MR0175"
            ],
            "image": "assets/Product Section/Manufacturer division/Dairy & Pharma Fittings/titainium.jpg"
          }
        ],
        "image": "assets/Product Section/Manufacturer division/Dairy & Pharma Fittings/titainium.jpg",
        "fallback": "assets/Product Section/Manufacturer division/Dairy & Pharma Fittings/stainless steel.jpg"
      },
      {
        "slug": "copper",
        "name": "Copper",
        "number": "08",
        "description": "Copper-nickel alloys, brasses, and pure copper engineered for high thermal/electrical conductivity, natural marine biofouling resistance, and naval piping circuits.",
        "applicableStandards": "ASTM B151, ASTM B171, ASTM B466, ASME B16.5, DIN 86019",
        "pressureClasses": "Class 150#, 300#, DIN PN10 - PN16",
        "sizeRange": "1/2\" NB to 24\" NB",
        "grades": [
          {
            "slug": "cu-ni-90-10",
            "name": "Cu-Ni 90/10",
            "fullName": "Copper-Nickel 90/10 (C70600)",
            "designation": {
              "astm": "ASTM B151 / B171 C70600",
              "asme": "ASME SB151 C70600",
              "uns": "UNS C70600",
              "en": "2.0872 (CuNi10Fe1Mn)"
            },
            "description": "90% copper, 10% nickel alloy formulated with controlled iron and manganese additions, delivering natural resistance to marine biofouling and seawater impingement erosion.",
            "characteristics": [
              "Natural antimicrobial and macro-fouling resistance; eliminates marine barnacle growth.",
              "High thermal conductivity for marine condensers and heat exchanger tubing.",
              "Resistant to stress corrosion cracking in high-salinity seawater.",
              "Readily brazeable and weldable by TIG and MIG processes."
            ],
            "applications": [
              "Naval warship seawater cooling mains",
              "Offshore platform firewater ring mains",
              "Commercial shipbuilding ballast piping",
              "Desalination multi-stage flash heat recovery tubes"
            ],
            "specs": {
              "tensileStrength": "310 MPa (45 ksi) minimum",
              "yieldStrength": "125 MPa (18 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW 70 - 100",
              "heatTreatment": "Annealed at 600°C - 750°C",
              "inspection": "EN 10204 Type 3.1 MTC / Eddy current inspection"
            },
            "standards": [
              "ASME B16.5",
              "EEMUA 145 / 234",
              "DIN 86019",
              "MIL-C-15726"
            ],
            "image": "assets/New Product img/pipe fittings/copper-nickel-pipe-fittings.jpg"
          },
          {
            "slug": "cu-ni-70-30",
            "name": "Cu-Ni 70/30",
            "fullName": "Copper-Nickel 70/30 (C71500)",
            "designation": {
              "astm": "ASTM B151 / B171 C71500",
              "asme": "ASME SB151 C71500",
              "uns": "UNS C71500",
              "en": "2.0882 (CuNi30Mn1Fe)"
            },
            "description": "70% copper, 30% nickel alloy engineered for higher seawater velocity tolerances (up to 4.5 m/s) and severe naval service where high impingement resistance is mandatory.",
            "characteristics": [
              "Permissible seawater flow velocity up to 4.5 m/s without protective film breakdown.",
              "Superior resistance to hydrogen embrittlement and sulfide stress cracking.",
              "Enhanced mechanical strength compared to 90/10 grade.",
              "Standard naval submarine and destroyer condenser specification."
            ],
            "applications": [
              "Submarine seawater intake systems",
              "High-velocity naval auxiliary condenser piping",
              "Offshore oil rig cooling manifolds",
              "Desalination brine heater bundles"
            ],
            "specs": {
              "tensileStrength": "380 MPa (55 ksi) minimum",
              "yieldStrength": "140 MPa (20 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW 80 - 120",
              "heatTreatment": "Annealed at 650°C - 800°C",
              "inspection": "EN 10204 Type 3.1 MTC / Hydrostatic verification"
            },
            "standards": [
              "ASME B16.5",
              "EEMUA 145 / 234",
              "DIN 86019",
              "MIL-C-15726"
            ],
            "image": "assets/New Product img/pipe fittings/copper-nickel-pipe-fittings.jpg"
          }
        ],
        "image": "assets/New Product img/pipe fittings/copper-nickel-pipe-fittings.jpg",
        "fallback": "assets/Product Section/Manufacturer division/Dairy & Pharma Fittings/stainless steel.jpg"
      },
      {
        "slug": "aluminium",
        "name": "Aluminium",
        "number": "09",
        "description": "High-strength wrought and extruded aluminium alloys delivering lightweight structural capability, high thermal dissipation, and cryogenic ductility for aerospace and marine service.",
        "applicableStandards": "ASTM B221, ASTM B241, ASTM B209, ASME B16.5",
        "pressureClasses": "Class 150#, PN10, PN16",
        "sizeRange": "1/2\" NB to 24\" NB",
        "grades": [
          {
            "slug": "6061-t6",
            "name": "6061-T6",
            "fullName": "6061-T6 Structural Aluminium",
            "designation": {
              "astm": "ASTM B221 / B241 Gr. 6061",
              "asme": "ASME SB221",
              "uns": "UNS A96061",
              "en": "3.3211 (AlMg1SiCu)"
            },
            "description": "Precipitation-hardened magnesium-silicon alloy delivering high structural yield strength, excellent CNC machinability, and clean surface anodizing characteristics.",
            "characteristics": [
              "High strength-to-weight ratio with density of only 2.70 g/cm³.",
              "Excellent atmospheric corrosion resistance in industrial environments.",
              "Readily machinable to tight geometric tolerances on multi-axis CNC machines.",
              "Excellent TIG/MIG weldability using 4043 or 5356 filler wires."
            ],
            "applications": [
              "Aerospace fuel and hydraulic fluid lines",
              "Cryogenic air separation plant piping",
              "Automotive racing fluid manifolds",
              "Precision robotic automation frames"
            ],
            "specs": {
              "tensileStrength": "290 MPa (42 ksi) minimum",
              "yieldStrength": "240 MPa (35 ksi) minimum",
              "elongation": "8% - 10% in 2 inches",
              "hardness": "HBW ~ 95",
              "heatTreatment": "Solution heat-treated and artificially aged (T6 temper)",
              "inspection": "EN 10204 Type 3.1 MTC / Conductivity check"
            },
            "standards": [
              "ASTM B221",
              "ASTM B241",
              "AMS 4027",
              "ASME B16.5"
            ],
            "image": "assets/Product Section/Manufacturer division/Dairy & Pharma Fittings/super duplex.webp"
          },
          {
            "slug": "5083-h116",
            "name": "5083-H116",
            "fullName": "5083-H116 Marine Aluminium",
            "designation": {
              "astm": "ASTM B209 / B221 Gr. 5083",
              "asme": "ASME SB209",
              "uns": "UNS A95083",
              "en": "3.3547 (AlMg4.5Mn0.7)"
            },
            "description": "High-magnesium marine alloy engineered specifically for exceptional corrosion resistance in seawater and cryogenic storage tanks down to -269°C without embrittlement.",
            "characteristics": [
              "The premier structural aluminium alloy for saltwater immersion.",
              "Maintains exceptional ductility and toughness at cryogenic temperatures down to liquid helium (-269°C).",
              "High weld joint efficiency without requiring post-weld solution treatment.",
              "Certified by DNV, Lloyd's Register, and ABS for marine construction."
            ],
            "applications": [
              "LNG/LPG cryogenic cargo tank piping",
              "High-speed marine ferry hull piping",
              "Naval radar mast structural flanges",
              "Chemical rail tanker vessels"
            ],
            "specs": {
              "tensileStrength": "305 MPa (44 ksi) minimum",
              "yieldStrength": "215 MPa (31 ksi) minimum",
              "elongation": "10% minimum in 2 inches",
              "hardness": "HBW ~ 85",
              "heatTreatment": "Strain-hardened and stabilized (H116 temper) for intergranular corrosion resistance",
              "inspection": "EN 10204 3.1 / Nitric Acid Mass Loss Test (NAMLT) to ASTM G67"
            },
            "standards": [
              "ASTM B209",
              "ASTM B221",
              "DNV-GL Marine Rules",
              "ASME Section VIII"
            ],
            "image": "assets/Product Section/Manufacturer division/Dairy & Pharma Fittings/super duplex.webp"
          }
        ],
        "image": "assets/Product Section/Manufacturer division/Dairy & Pharma Fittings/super duplex.webp",
        "fallback": "assets/Product Section/Manufacturer division/Dairy & Pharma Fittings/stainless steel.jpg"
      }
    ]
  },
  {
    "slug": "flat-bars",
    "name": "Flat Bars",
    "title": "FLAT BARS",
    "suffix": "Flat Bars",
    "eyebrow": "ASTM A276 / EN 10058 COLD DRAWN & SLIT",
    "heroImage": "assets/Product Section/Supplier division/flat/Stainless-Steel-Flat-Bar.jpg",
    "heroTag": "PRECISION SLIT & MACHINED FLAT BARS",
    "description": "Precision cold-drawn and hot-rolled flat bars with true 90-degree square edges, consistent thickness, and superior flatness for structural brackets, machine guide ways, and busbars.",
    "overview": {
      "lead": "Solid rectangular metal flat bars are widely used across structural fabrication, architectural grating, electrical busbars, machinery frames, and precision engineering components.",
      "highlights": [
        {
          "title": "Square Edge Integrity",
          "desc": "Produced with sharp, true 90° square edges and zero camber or twist."
        },
        {
          "title": "Tolerance Class",
          "desc": "Manufactured to EN 10058 / DIN 1017 precision thickness and width tolerances."
        },
        {
          "title": "Clean Deburred Finish",
          "desc": "Ends saw-cut and deburred for direct setup in machining centers or welding jigs."
        },
        {
          "title": "Grades Available",
          "desc": "Stainless Steel 304/316L, Carbon Steel, Alloy Steel, Duplex 2205, and High-Conductivity Copper."
        }
      ]
    },
    "hasTypes": false,
    "types": [],
    "materials": [
      {
        "slug": "stainless-steel",
        "name": "Stainless Steel",
        "number": "01",
        "description": "Austenitic and martensitic stainless steels offering superior resistance to chemical attack, pitting, and high-temperature scaling across process industries.",
        "applicableStandards": "ASTM A182, ASTM A240, ASTM A312, ASTM A403, ASME B16.5",
        "pressureClasses": "Class 150#, 300#, 600#, 900#, 1500#, 2500#",
        "sizeRange": "1/2\" NB to 60\" NB (DN15 to DN1500)",
        "grades": [
          {
            "slug": "304",
            "name": "304",
            "fullName": "304 Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S30400",
              "en": "1.4301 (X5CrNi18-10)"
            },
            "description": "The classic 18/8 austenitic stainless steel delivering dependable general corrosion resistance, excellent formability, and cryogenic impact toughness.",
            "characteristics": [
              "Excellent atmospheric and chemical corrosion resistance in organic and mildly oxidizing acids.",
              "Retains high impact toughness from cryogenic temperatures (-196°C) up to 800°C.",
              "Readily weldable by all standard commercial fusion methods without requiring preheat.",
              "Non-magnetic in the solution-annealed condition with moderate work hardening rate."
            ],
            "applications": [
              "Chemical processing manifolds",
              "Food, dairy & beverage piping",
              "Petrochemical low-temperature loops",
              "Cryogenic storage vessel nozzles",
              "Architectural structural piping"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "205 MPa (30 ksi) minimum",
              "elongation": "40% minimum in 2 inches",
              "hardness": "HBW ≤ 201 (HRB ≤ 92)",
              "heatTreatment": "Solution Annealed at 1040°C - 1120°C followed by rapid water quench",
              "inspection": "EN 10204 Type 3.1 MTC with complete chemical and mechanical test results"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.47",
              "ASTM A182",
              "ASME SA182",
              "MSS-SP-43",
              "NACE MR0175 (annealed)"
            ],
            "image": "assets/Product Section/Supplier division/flat/Stainless-Steel-Flat-Bar.jpg"
          },
          {
            "slug": "304l",
            "name": "304L",
            "fullName": "304L Low-Carbon Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S30403",
              "en": "1.4307 (X2CrNi18-9)"
            },
            "description": "Extra-low carbon modification (C ≤ 0.030%) that eliminates chromium carbide precipitation during welding, providing immunity to intergranular corrosion in as-welded assemblies.",
            "characteristics": [
              "Immunity to sensitization and intergranular attack in heat-affected zones (HAZ) of welded components.",
              "Eliminates the mandatory requirement for post-weld solution annealing.",
              "Maintains cryogenic mechanical ductility down to liquid nitrogen temperatures (-196°C).",
              "Compatible with dual-certified 304/304L pressure vessel specifications."
            ],
            "applications": [
              "Heavy-wall welded piping systems",
              "Wet chemical processing lines",
              "Refinery flare header lines",
              "Marine deck piping systems",
              "Pulp and paper bleaching equipment"
            ],
            "specs": {
              "tensileStrength": "485 MPa (70 ksi) minimum",
              "yieldStrength": "170 MPa (25 ksi) minimum",
              "elongation": "40% minimum in 2 inches",
              "hardness": "HBW ≤ 201",
              "heatTreatment": "Solution Annealed at 1040°C - 1100°C and water quenched",
              "inspection": "EN 10204 Type 3.1 MTC / NACE MR0175 compliant"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.9",
              "ASTM A182",
              "ASTM A403",
              "ASME Section VIII Div 1"
            ],
            "image": "assets/Product Section/Supplier division/flat/Stainless-Steel-Flat-Bar.jpg"
          },
          {
            "slug": "316",
            "name": "316",
            "fullName": "316 Molybdenum-Bearing Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S31600",
              "en": "1.4401 (X5CrNiMo17-12-2)"
            },
            "description": "Formulated with 2.0% to 3.0% molybdenum to significantly improve localized resistance to pitting and crevice corrosion in chloride and halide-bearing environments.",
            "characteristics": [
              "Significantly higher pitting resistance equivalent (PREN ~ 23-25) compared to 304.",
              "Superior resistance to sulfuric, phosphoric, acetic, and tartaric acid solutions.",
              "Elevated creep rupture strength at elevated operating temperatures up to 870°C.",
              "Standard specification for marine atmospheres, offshore platforms, and coastal chemical plants."
            ],
            "applications": [
              "Offshore oil & gas production manifolds",
              "Marine seawater cooling circuits",
              "Pharmaceutical reaction vessels",
              "Petrochemical acid-wash scrubbers",
              "Fertilizer production piping"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "205 MPa (30 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 217",
              "heatTreatment": "Solution Annealed at 1040°C - 1150°C and rapidly quenched",
              "inspection": "EN 10204 3.1 / PMI / Ultrasonic Inspection to ASTM A388"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.47",
              "ASTM A182",
              "ASTM A312",
              "NACE MR0175 / ISO 15156"
            ],
            "image": "assets/Product Section/Supplier division/flat/Stainless-Steel-Flat-Bar.jpg"
          },
          {
            "slug": "316l",
            "name": "316L",
            "fullName": "316L Low-Carbon Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S31603",
              "en": "1.4404 (X2CrNiMo17-12-2)"
            },
            "description": "Low-carbon molybdenum alloy combining superior chloride pitting resistance with complete protection against intergranular carbide precipitation in critical welded joints.",
            "characteristics": [
              "Carbon restricted to 0.030% max, preventing grain boundary sensitization during field welding.",
              "Exceptional resistance to localized pitting in marine and brackish water piping systems.",
              "Widely accepted in sour service under NACE MR0175 / ISO 15156 standards.",
              "Clean interior surface finish capability suitable for sanitary and high-purity applications."
            ],
            "applications": [
              "Subsea umbilical and manifold piping",
              "Chemical tanker cargo lines",
              "Pharmaceutical clean-in-place (CIP) loops",
              "Desalination plant brine piping",
              "Sour hydrocarbon gas handling"
            ],
            "specs": {
              "tensileStrength": "485 MPa (70 ksi) minimum",
              "yieldStrength": "170 MPa (25 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 217",
              "heatTreatment": "Solution Annealed at 1040°C - 1120°C and water quenched",
              "inspection": "EN 10204 Type 3.1 MTC / NACE MR0175 / MR0103"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.11",
              "ASTM A182",
              "ASTM A403",
              "ASME BPE"
            ],
            "image": "assets/Product Section/Supplier division/flat/Stainless-Steel-Flat-Bar.jpg"
          },
          {
            "slug": "321",
            "name": "321",
            "fullName": "321 Titanium-Stabilized Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S32100",
              "en": "1.4541 (X6CrNiTi18-10)"
            },
            "description": "Stabilized with titanium (Ti ≥ 5x C) to tie up carbon as titanium carbides, preventing sensitization during prolonged service in the critical 427°C to 816°C temperature range.",
            "characteristics": [
              "Complete immunity to intergranular corrosion during continuous high-temperature service.",
              "Superior creep and stress-rupture properties compared to standard 304/304L.",
              "Resists polythionic acid stress corrosion cracking during refinery shutdown cycles.",
              "Standard choice for aircraft exhaust systems and refinery thermal crackers."
            ],
            "applications": [
              "Refinery thermal cracker piping",
              "Catalytic reformer units",
              "High-temperature steam boiler bypass lines",
              "Aircraft engine exhaust manifolds",
              "Chemical furnace tube connections"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "205 MPa (30 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 217",
              "heatTreatment": "Solution Annealed at 1000°C - 1100°C followed by stabilization heat treatment at 850°C - 900°C",
              "inspection": "EN 10204 3.1 / Intergranular Corrosion Test to ASTM A262 Practice E"
            },
            "standards": [
              "ASME B16.5",
              "ASTM A182",
              "ASME SA182",
              "API 530"
            ],
            "image": "assets/Product Section/Supplier division/flat/Stainless-Steel-Flat-Bar.jpg"
          },
          {
            "slug": "347",
            "name": "347",
            "fullName": "347 Niobium-Stabilized Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S34700",
              "en": "1.4550 (X6CrNiNb18-10)"
            },
            "description": "Stabilized with niobium/columbium (Nb ≥ 10x C) providing enhanced creep resistance and intergranular corrosion resistance at severe temperatures up to 870°C.",
            "characteristics": [
              "High creep strength and stress rupture resistance in heavy wall forged components.",
              "Resistant to polythionic acid stress cracking in hydrocracking and hydrotreating units.",
              "Superior fatigue strength under extreme thermal shock cycling.",
              "Certified for nuclear and supercritical power generation piping."
            ],
            "applications": [
              "Hydroprocessing and hydrodesulfurization units",
              "Supercritical power boiler piping",
              "Radiant superheater tube headers",
              "High-temperature radioactive waste handling",
              "Gas turbine exhaust nozzles"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "205 MPa (30 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 217",
              "heatTreatment": "Solution Annealed at 1040°C - 1150°C and water quenched",
              "inspection": "EN 10204 Type 3.1 with ASTM A262 Practice E IGC certification"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.9",
              "ASTM A182",
              "ASME Section III Class 1"
            ],
            "image": "assets/Product Section/Supplier division/flat/Stainless-Steel-Flat-Bar.jpg"
          },
          {
            "slug": "310s",
            "name": "310S",
            "fullName": "310S High-Temperature Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S31008",
              "en": "1.4845 (X8CrNi25-21)"
            },
            "description": "High-alloy austenitic stainless steel formulated with 25% chromium and 20% nickel for exceptional resistance to high-temperature oxidation and sulfidation up to 1150°C.",
            "characteristics": [
              "Continuous oxidation resistance in air up to 1150°C (2100°F) under cyclic thermal conditions.",
              "Resistant to carburization in moderately carburizing petrochemical atmospheres.",
              "Maintains high ductile toughness and structural stability at elevated temperatures.",
              "Low magnetic permeability and high thermal creep endurance."
            ],
            "applications": [
              "Thermal incinerator burner piping",
              "Fluidized bed coal combustors",
              "Cement rotary kiln exhaust nozzles",
              "Petrochemical pyrolysis furnaces",
              "Heat treatment furnace fixtures"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "205 MPa (30 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 217",
              "heatTreatment": "Solution Annealed at 1040°C - 1150°C followed by rapid air or water cooling",
              "inspection": "EN 10204 3.1 MTC / High-temperature mechanical testing"
            },
            "standards": [
              "ASME B16.5",
              "ASTM A182",
              "ASTM A312",
              "ASME Section VIII Div 1"
            ],
            "image": "assets/Product Section/Supplier division/flat/Stainless-Steel-Flat-Bar.jpg"
          },
          {
            "slug": "904l",
            "name": "904L",
            "fullName": "904L Super Austenitic Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS N08904",
              "en": "1.4539 (X1NiCrMoCu25-20-5)"
            },
            "description": "High-alloy super-austenitic stainless steel formulated with 4.5% molybdenum and 1.5% copper, specifically developed to withstand aggressive sulfuric and phosphoric acids.",
            "characteristics": [
              "High PREN (≥ 34), offering extraordinary resistance to warm seawater pitting.",
              "Added copper content provides outstanding resistance to concentrated sulfuric acid across all concentration ranges.",
              "Immune to chloride-induced stress corrosion cracking up to 60°C.",
              "Fully austenitic structure provides high ductility and ease of welding."
            ],
            "applications": [
              "Sulfuric acid manufacturing pipelines",
              "Phosphate fertilizer production units",
              "Flue gas desulfurization (FGD) scrubbers",
              "Seawater reverse osmosis piping",
              "Pulp mill bleaching towers"
            ],
            "specs": {
              "tensileStrength": "490 MPa (71 ksi) minimum",
              "yieldStrength": "220 MPa (32 ksi) minimum",
              "elongation": "35% minimum in 2 inches",
              "hardness": "HBW ≤ 217 (HRB ≤ 95)",
              "heatTreatment": "Solution Annealed at 1090°C - 1150°C followed by rapid water quench",
              "inspection": "EN 10204 Type 3.1 MTC with ASTM G48 pitting test verification"
            },
            "standards": [
              "ASTM A182",
              "ASME B16.5",
              "ASTM B625",
              "NACE MR0175"
            ],
            "image": "assets/Product Section/Supplier division/flat/Stainless-Steel-Flat-Bar.jpg"
          }
        ],
        "image": "assets/Product Section/Supplier division/flat/Stainless-Steel-Flat-Bar.jpg",
        "fallback": "assets/Product Section/Supplier division/flat/Stainless-Steel-Flat-Bar.jpg"
      },
      {
        "slug": "carbon-steel",
        "name": "Carbon Steel",
        "number": "02",
        "description": "Forged and plate-formed carbon steels engineered for structural strength, high pressure containment, and reliable impact ductility in utility and industrial piping.",
        "applicableStandards": "ASTM A105, ASTM A350 LF2, ASTM A106, ASTM A234 WPB, ASME B16.5",
        "pressureClasses": "Class 150#, 300#, 600#, 900#, 1500#, 2500#",
        "sizeRange": "1/2\" NB to 60\" NB",
        "grades": [
          {
            "slug": "a105",
            "name": "A105",
            "fullName": "ASTM A105 Forged Carbon Steel",
            "designation": {
              "astm": "ASTM A105 / A105N",
              "asme": "ASME SA105",
              "uns": "UNS K03504",
              "en": "1.0460 (C22.8 / P250GH)"
            },
            "description": "The premier forged carbon steel specification for ambient and elevated-temperature piping components, flanges, fittings, and valves.",
            "characteristics": [
              "Excellent machinability and weldability with balanced carbon-manganese metallurgy.",
              "Supplied in normalized (A105N) heat-treated condition for fine grain size and optimal Charpy V-notch toughness.",
              "High proof pressure containment for petroleum refineries, power stations, and steam pipelines.",
              "Fully qualified under ASME Section VIII and ASME B31.3 piping codes."
            ],
            "applications": [
              "Refinery steam and hydrocarbon lines",
              "Boiler feed water piping",
              "Natural gas transmission stations",
              "District heating networks",
              "General industrial utility piping"
            ],
            "specs": {
              "tensileStrength": "485 MPa (70 ksi) minimum",
              "yieldStrength": "250 MPa (36 ksi) minimum",
              "elongation": "22% minimum in 2 inches",
              "hardness": "HBW 137 - 187",
              "heatTreatment": "Normalized at 880°C - 920°C and air cooled",
              "inspection": "EN 10204 Type 3.1 MTC / 100% NDT inspection"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.11",
              "ASTM A105",
              "MSS-SP-79",
              "NACE MR0175 (normalized)"
            ],
            "image": "assets/Product Section/Supplier division/flat/carbon.avif"
          },
          {
            "slug": "a350-lf2",
            "name": "A350 LF2",
            "fullName": "ASTM A350 LF2 Low-Temperature Carbon Steel",
            "designation": {
              "astm": "ASTM A350 LF2 Class 1",
              "asme": "ASME SA350 LF2",
              "uns": "UNS K03011",
              "en": "1.0566 (TStE 355)"
            },
            "description": "Forged carbon and low-alloy steel specifically treated for notched-bar toughness in low-temperature piping systems down to -46°C (-50°F).",
            "characteristics": [
              "Guaranteed Charpy V-notch impact toughness of 20 Joules (15 ft-lbs) minimum at -46°C (-50°F).",
              "Fine-grained, fully killed steel heat treated by normalizing and tempering or quenching and tempering.",
              "Mandatory for Arctic pipelines, cold gas transmission, and LPG/LNG cryogenic utility lines.",
              "Fully compliant with NACE MR0175 hardness limits (≤ 22 HRC)."
            ],
            "applications": [
              "Arctic oil and gas extraction lines",
              "LPG/LNG transport and storage terminals",
              "Refrigeration compressor piping",
              "Subsea cold-water export lines",
              "Cryogenic gas processing facilities"
            ],
            "specs": {
              "tensileStrength": "485 - 655 MPa (70 - 95 ksi)",
              "yieldStrength": "250 MPa (36 ksi) minimum",
              "elongation": "22% minimum in 2 inches",
              "hardness": "HBW ≤ 197 (HRC ≤ 22)",
              "heatTreatment": "Normalized at 900°C and Tempered at 600°C",
              "inspection": "EN 10204 3.1 / Charpy V-Notch Impact Test at -46°C"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.11",
              "ASTM A350",
              "NACE MR0175 / ISO 15156"
            ],
            "image": "assets/Product Section/Supplier division/flat/carbon.avif"
          },
          {
            "slug": "a234-wpb",
            "name": "A234 WPB",
            "fullName": "ASTM A234 WPB Wrought Carbon Steel",
            "designation": {
              "astm": "ASTM A234 Grade WPB",
              "asme": "ASME SA234 WPB",
              "uns": "UNS K03006",
              "en": "1.0488 (P275NH)"
            },
            "description": "The standard wrought carbon steel material specification for seamless and welded butt weld elbows, tees, reducers, and pipe caps.",
            "characteristics": [
              "Formed from seamless pipe (ASTM A106 Grade B) or plate (ASTM A285/A516) with uniform grain distribution.",
              "High weldability and ductility for high-speed automated pipe spool fabrication.",
              "Engineered for moderate and high-temperature pressure piping systems.",
              "Supplied in normalized, stress-relieved, or annealed condition."
            ],
            "applications": [
              "Cross-country oil & gas pipelines",
              "Power plant steam header loops",
              "Industrial boiler piping",
              "Chemical plant water injection mains",
              "District heating infrastructure"
            ],
            "specs": {
              "tensileStrength": "415 - 585 MPa (60 - 85 ksi)",
              "yieldStrength": "240 MPa (35 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 197",
              "heatTreatment": "Normalized or hot-formed above 620°C",
              "inspection": "EN 10204 3.1 / 100% Hydrostatic and NDT Testing"
            },
            "standards": [
              "ASME B16.9",
              "ASME B16.28",
              "ASTM A234",
              "MSS-SP-25"
            ],
            "image": "assets/Product Section/Supplier division/flat/carbon.avif"
          },
          {
            "slug": "a516-gr70",
            "name": "A516 Gr. 70",
            "fullName": "ASTM A516 Grade 70 Pressure Vessel Plate",
            "designation": {
              "astm": "ASTM A516 / A516M Gr. 70",
              "asme": "ASME SA516 Gr. 70",
              "uns": "UNS K02700",
              "en": "1.0473 (P355GH)"
            },
            "description": "The standard boiler and pressure-vessel quality carbon steel plate material for circular blanks, dished heads, and vessel shells operating at ambient and lower temperatures.",
            "characteristics": [
              "Superior notch toughness and weldability with vacuum-degassed, fine-grain steel practice.",
              "High yield strength and resistance to lamellar tearing under transverse welded loads.",
              "Normalized for improved low-temperature impact properties (available with Charpy testing down to -46°C).",
              "Standard material for heavy industrial autoclaves and storage vessels."
            ],
            "applications": [
              "Pressure vessel shells and circular dished ends",
              "Heat exchanger tube sheets and circular blind covers",
              "Storage tank bottom and shell plates",
              "Heavy-wall welded vessel nozzles"
            ],
            "specs": {
              "tensileStrength": "485 - 620 MPa (70 - 90 ksi)",
              "yieldStrength": "260 MPa (38 ksi) minimum",
              "elongation": "21% minimum in 2 inches",
              "hardness": "HBW ≤ 187",
              "heatTreatment": "Normalized above 40 mm plate thickness",
              "inspection": "EN 10204 3.1 / Ultrasonic testing to ASTM A435 / A578"
            },
            "standards": [
              "ASTM A516",
              "ASME SA516",
              "ASME Section VIII Div 1 & 2"
            ],
            "image": "assets/Product Section/Supplier division/flat/carbon.avif"
          }
        ],
        "image": "assets/Product Section/Supplier division/flat/carbon.avif",
        "fallback": "assets/Product Section/Supplier division/flat/Stainless-Steel-Flat-Bar.jpg"
      },
      {
        "slug": "alloy-steel",
        "name": "Alloy Steel",
        "number": "03",
        "description": "Chromium-molybdenum alloy steels engineered for elevated-temperature creep strength, hydrogen attack resistance, and severe power boiler and hydroprocessing service.",
        "applicableStandards": "ASTM A182, ASTM A234, ASTM A335, ASME B16.5, ASME B16.11",
        "pressureClasses": "Class 300#, 600#, 900#, 1500#, 2500#",
        "sizeRange": "1/2\" NB to 36\" NB",
        "grades": [
          {
            "slug": "f11",
            "name": "F11",
            "fullName": "ASTM A182 F11 (1.25% Cr - 0.5% Mo)",
            "designation": {
              "astm": "ASTM A182 F11 Class 2",
              "asme": "ASME SA182 F11",
              "uns": "UNS K11572",
              "en": "1.7335 (13CrMo4-5)"
            },
            "description": "Nominal 1.25% chromium, 0.5% molybdenum alloy steel engineered for high-temperature steam lines and refinery hydrocrackers operating up to 550°C.",
            "characteristics": [
              "High creep rupture strength and resistance to graphitization at elevated steam temperatures.",
              "Resistance to high-temperature hydrogen attack (HTHA) according to Nelson curve criteria.",
              "Supplied in normalized and tempered condition for structural microstructural stability.",
              "Standard alloy for thermal power plant main steam and hot reheat lines."
            ],
            "applications": [
              "Main steam headers in thermal power plants",
              "Hydrodesulfurization reactor piping",
              "Superheater piping and headers",
              "Refinery furnace transfer lines"
            ],
            "specs": {
              "tensileStrength": "485 MPa (70 ksi) minimum",
              "yieldStrength": "275 MPa (40 ksi) minimum",
              "elongation": "20% minimum in 2 inches",
              "hardness": "HBW 143 - 207",
              "heatTreatment": "Normalized at 900°C - 950°C and Tempered at 650°C minimum",
              "inspection": "EN 10204 3.1 / Hot tensile test verified"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.11",
              "ASTM A182",
              "API 941"
            ],
            "image": "assets/Product Section/Supplier division/flat/alloy steel.jpg"
          },
          {
            "slug": "f22",
            "name": "F22",
            "fullName": "ASTM A182 F22 (2.25% Cr - 1.0% Mo)",
            "designation": {
              "astm": "ASTM A182 F22 Class 3",
              "asme": "ASME SA182 F22",
              "uns": "UNS K21590",
              "en": "1.7380 (10CrMo9-10)"
            },
            "description": "Nominal 2.25% chromium, 1.0% molybdenum alloy steel offering superior creep endurance, corrosion resistance to sulfur-bearing oil streams, and hydrogen resistance up to 600°C.",
            "characteristics": [
              "Elevated creep resistance and high allowable design stress under ASME Section I and VIII.",
              "Enhanced resistance to high-pressure hydrogen embrittlement in hydroprocessing units.",
              "Quenched and tempered or normalized and tempered for high fracture toughness.",
              "Specified for high-pressure catalytic cracking and supercritical boiler loops."
            ],
            "applications": [
              "Hydrocracker reactor nozzles and loop piping",
              "Supercritical boiler superheater headers",
              "Gasifier syngas transfer lines",
              "Petrochemical high-pressure steam headers"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "310 MPa (45 ksi) minimum",
              "elongation": "20% minimum in 2 inches",
              "hardness": "HBW 156 - 207",
              "heatTreatment": "Normalized at 900°C - 950°C and Tempered at 675°C minimum",
              "inspection": "EN 10204 3.1 / Ultrasonic and Magnetic Particle Inspection"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.9",
              "ASTM A182",
              "ASTM A335 Grade P22"
            ],
            "image": "assets/Product Section/Supplier division/flat/alloy steel.jpg"
          },
          {
            "slug": "f91",
            "name": "F91",
            "fullName": "ASTM A182 F91 (9% Cr - 1% Mo - V - Nb)",
            "designation": {
              "astm": "ASTM A182 F91 Type 1",
              "asme": "ASME SA182 F91",
              "uns": "UNS K90901",
              "en": "1.4903 (X10CrMoVNb9-1)"
            },
            "description": "Advanced modified 9Cr-1Mo-V-Nb martensitic alloy steel engineered for supercritical and ultra-supercritical (USC) power stations operating up to 620°C with reduced wall thickness.",
            "characteristics": [
              "Twice the creep rupture strength of F22 at 600°C, enabling thinner component wall sections.",
              "Lower thermal stress and reduced cyclic thermal fatigue in high-efficiency power boilers.",
              "Requires tight control of heat treatment: normalizing at 1040°C–1080°C and tempering at 730°C–800°C.",
              "Strict compliance with hardness and microstructural martensite grain requirements."
            ],
            "applications": [
              "Ultra-supercritical power plant main steam lines",
              "Combined cycle gas turbine (CCGT) HRSG headers",
              "High-pressure steam bypass manifolds",
              "Nuclear power steam generator loops"
            ],
            "specs": {
              "tensileStrength": "585 - 760 MPa (85 - 110 ksi)",
              "yieldStrength": "415 MPa (60 ksi) minimum",
              "elongation": "20% minimum in 2 inches",
              "hardness": "HBW 190 - 248",
              "heatTreatment": "Normalized at 1050°C and Tempered at 750°C - 780°C",
              "inspection": "EN 10204 Type 3.1 / 100% Ultrasonic & Hardness verification"
            },
            "standards": [
              "ASME B16.5",
              "ASTM A182",
              "ASTM A335 Grade P91",
              "EPRI Guidelines"
            ],
            "image": "assets/Product Section/Supplier division/flat/alloy steel.jpg"
          }
        ],
        "image": "assets/Product Section/Supplier division/flat/alloy steel.jpg",
        "fallback": "assets/Product Section/Supplier division/flat/Stainless-Steel-Flat-Bar.jpg"
      },
      {
        "slug": "duplex",
        "name": "Duplex & Super Duplex",
        "number": "04",
        "description": "Dual-phase austenitic-ferritic microstructures delivering yield strength roughly twice that of standard stainless steel combined with superior resistance to chloride stress corrosion cracking.",
        "applicableStandards": "ASTM A182, ASTM A240, ASTM A790, ASTM A815, ASME B16.5",
        "pressureClasses": "Class 150#, 300#, 600#, 900#, 1500#, 2500#",
        "sizeRange": "1/2\" NB to 36\" NB",
        "grades": [
          {
            "slug": "2205",
            "name": "2205",
            "fullName": "2205 Standard Duplex (UNS S31803 / S32205)",
            "designation": {
              "astm": "ASTM A182 F51 / F60",
              "asme": "ASME SA182 F51 / F60",
              "uns": "UNS S31803 / S32205",
              "en": "1.4462 (X2CrNiMoN22-5-3)"
            },
            "description": "The workhorse 22% chromium duplex stainless steel with approximately 50/50 ferrite-austenite phase balance, offering high yield strength and high chloride resistance (PREN 35).",
            "characteristics": [
              "Yield strength roughly twice that of austenitic 316L, allowing substantial weight reduction.",
              "High resistance to chloride stress corrosion cracking in sour environments.",
              "High resistance to erosion-corrosion and pitting in seawater and brackish cooling water.",
              "Temperature limit typically restricted to -50°C to +280°C to prevent 475°C embrittlement."
            ],
            "applications": [
              "Offshore oil & gas topside piping",
              "Chemical tanker cargo holds and piping",
              "Desalination high-pressure reverse osmosis headers",
              "Flue gas cleaning systems",
              "Biofuel processing digesters"
            ],
            "specs": {
              "tensileStrength": "655 MPa (95 ksi) minimum",
              "yieldStrength": "450 MPa (65 ksi) minimum",
              "elongation": "25% minimum in 2 inches",
              "hardness": "HBW ≤ 290 (HRC ≤ 28)",
              "heatTreatment": "Solution Annealed at 1020°C - 1100°C and rapidly water quenched",
              "inspection": "EN 10204 3.1 / Phase balance check (40-60% ferrite) / ASTM G48 Method A test"
            },
            "standards": [
              "ASME B16.5",
              "ASTM A182",
              "NORSK M-630 MDS D44",
              "NACE MR0175 / ISO 15156"
            ],
            "image": "assets/Product Section/Supplier division/flat/duplex.jpg"
          },
          {
            "slug": "2507",
            "name": "2507",
            "fullName": "2507 Super Duplex (UNS S32750)",
            "designation": {
              "astm": "ASTM A182 F53",
              "asme": "ASME SA182 F53",
              "uns": "UNS S32750",
              "en": "1.4410 (X2CrNiMoN25-7-4)"
            },
            "description": "25% chromium super duplex stainless steel with 4% molybdenum and 0.28% nitrogen, providing exceptional pitting and crevice corrosion resistance with PREN ≥ 42.",
            "characteristics": [
              "PREN ≥ 42 guaranteeing immunity to pitting in high-temperature chlorinated seawater.",
              "Exceptionally high mechanical yield strength (≥ 550 MPa) for high-pressure subsea lines.",
              "Immune to chloride stress corrosion cracking in aggressive sour gas reservoirs.",
              "Manufactured strictly to NORSOK M-630 and NACE MR0175 compliance."
            ],
            "applications": [
              "Subsea manifolds, risers, and Christmas tree piping",
              "Seawater fire-water ring mains",
              "Offshore high-pressure sour gas export lines",
              "Geothermal high-chloride brine piping",
              "Chemical plants handling hot chlorinated media"
            ],
            "specs": {
              "tensileStrength": "750 MPa (109 ksi) minimum",
              "yieldStrength": "550 MPa (80 ksi) minimum",
              "elongation": "15% minimum in 2 inches",
              "hardness": "HBW ≤ 310 (HRC ≤ 32)",
              "heatTreatment": "Solution Annealed at 1050°C - 1125°C and water quenched",
              "inspection": "EN 10204 3.1 / Microstructure audit / ASTM G48 Method A test at 50°C"
            },
            "standards": [
              "ASME B16.5",
              "ASTM A182 F53",
              "NORSOK M-630 MDS D54",
              "ISO 15156"
            ],
            "image": "assets/Product Section/Supplier division/flat/duplex.jpg"
          }
        ],
        "image": "assets/Product Section/Supplier division/flat/duplex.jpg",
        "fallback": "assets/Product Section/Supplier division/flat/Stainless-Steel-Flat-Bar.jpg"
      },
      {
        "slug": "high-alloy",
        "name": "High Alloy",
        "number": "05",
        "description": "Nickel-chromium-molybdenum superalloys engineered to withstand severe chemical environments, high temperatures, boiling mineral acids, and extreme mechanical stress.",
        "applicableStandards": "ASTM B564, ASTM B366, ASTM B622, ASME B16.5, ASME B16.11",
        "pressureClasses": "Class 150#, 300#, 600#, 900#, 1500#, 2500#",
        "sizeRange": "1/2\" NB to 24\" NB",
        "grades": [
          {
            "slug": "inconel-625",
            "name": "Inconel 625",
            "fullName": "Inconel 625 (UNS N06625)",
            "designation": {
              "astm": "ASTM B564 / B444",
              "asme": "ASME SB564",
              "uns": "UNS N06625",
              "en": "2.4856 (NiCr22Mo9Nb)"
            },
            "description": "Nickel-chromium-molybdenum alloy with niobium addition providing solid solution strengthening without heat treatment, resistant from cryogenic temperatures up to 980°C.",
            "characteristics": [
              "Virtually immune to chloride-induced stress corrosion cracking.",
              "Exceptional fatigue and thermal-fatigue strength in marine and aerospace environments.",
              "High resistance to a wide range of organic and inorganic acids, including wet chlorine.",
              "Certified for NACE sour service and nuclear reactor core piping."
            ],
            "applications": [
              "Marine exhaust scrubbers",
              "Subsea wellhead equipment",
              "Chemical waste disposal incinerator nozzles",
              "Nuclear reactor control rod drive piping",
              "Sour gas production downhole components"
            ],
            "specs": {
              "tensileStrength": "827 MPa (120 ksi) minimum",
              "yieldStrength": "414 MPa (60 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 220",
              "heatTreatment": "Annealed at 980°C - 1050°C",
              "inspection": "EN 10204 Type 3.1 / 100% Ultrasonic inspection"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B564",
              "NACE MR0175",
              "AMS 5666"
            ],
            "image": "assets/Product Section/Supplier division/flat/high alloy.jpg"
          },
          {
            "slug": "hastelloy-c276",
            "name": "Hastelloy C276",
            "fullName": "Hastelloy C276 (UNS N10276)",
            "designation": {
              "astm": "ASTM B564 / B575",
              "asme": "ASME SB564",
              "uns": "UNS N10276",
              "en": "2.4819 (NiMo16Cr15W)"
            },
            "description": "The universal corrosion-resistant nickel-molybdenum-chromium superalloy with tungsten, engineered to withstand aggressive wet chlorine gas, hypochlorite, and boiling mineral acids.",
            "characteristics": [
              "Unmatched resistance to localized pitting, crevice corrosion, and stress corrosion cracking.",
              "One of the few materials to withstand wet chlorine gas, hypochlorite, and chlorine dioxide solutions.",
              "Low carbon content minimizes carbide precipitation during welding, preserving as-welded corrosion resistance.",
              "Proven longevity in harsh chemical synthesis reactors."
            ],
            "applications": [
              "Flue gas desulfurization (FGD) scrubbers",
              "Sulfuric and hydrochloric acid synthesis plants",
              "Chlorination reaction systems",
              "Pharmaceutical active ingredient reactors",
              "Hazardous waste treatment vessels"
            ],
            "specs": {
              "tensileStrength": "690 MPa (100 ksi) minimum",
              "yieldStrength": "283 MPa (41 ksi) minimum",
              "elongation": "40% minimum in 2 inches",
              "hardness": "HBW ≤ 220",
              "heatTreatment": "Solution heat-treated at 1120°C and water quenched",
              "inspection": "EN 10204 Type 3.1 / Microstructure and ASTM G28 corrosion testing"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B564",
              "NACE MR0175 / ISO 15156"
            ],
            "image": "assets/Product Section/Supplier division/flat/high alloy.jpg"
          },
          {
            "slug": "monel-400",
            "name": "Monel 400",
            "fullName": "Monel 400 (UNS N04400)",
            "designation": {
              "astm": "ASTM B564 / B127",
              "asme": "ASME SB564",
              "uns": "UNS N04400",
              "en": "2.4360 (NiCu30Fe)"
            },
            "description": "Ductile nickel-copper alloy (67% Ni, 30% Cu) exhibiting exceptional resistance to rapidly flowing seawater, hydrofluoric acid, sulfuric acid, and high-temperature alkalies.",
            "characteristics": [
              "Standard engineering material for marine salt water immersion and splash zones.",
              "Exceptional resistance to hydrofluoric acid (HF) in all concentrations up to the boiling point.",
              "Resistant to non-oxidizing mineral acids and deaerated salt solutions.",
              "Non-magnetic down to room temperature with high impact toughness."
            ],
            "applications": [
              "Hydrofluoric acid alkylation units in oil refineries",
              "Marine propeller shafts and seawater valve trims",
              "Offshore splash-zone sheathing",
              "Chlorinated solvent recovery systems",
              "Salt plant brine evaporators"
            ],
            "specs": {
              "tensileStrength": "480 MPa (70 ksi) minimum",
              "yieldStrength": "195 MPa (28 ksi) minimum",
              "elongation": "35% minimum in 2 inches",
              "hardness": "HBW 110 - 150",
              "heatTreatment": "Annealed at 760°C - 900°C followed by water quench",
              "inspection": "EN 10204 3.1 / Ultrasonic and Dye Penetrant testing"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B564",
              "NACE MR0175",
              "MSS-SP-25"
            ],
            "image": "assets/Product Section/Supplier division/flat/high alloy.jpg"
          }
        ],
        "image": "assets/Product Section/Supplier division/flat/high alloy.jpg",
        "fallback": "assets/Product Section/Supplier division/flat/Stainless-Steel-Flat-Bar.jpg"
      },
      {
        "slug": "nickel",
        "name": "Nickel",
        "number": "06",
        "description": "Commercially pure nickel alloys engineered for caustic soda evaporators, non-oxidizing halogen systems, and high-purity chemical processing.",
        "applicableStandards": "ASTM B564, ASTM B160, ASTM B162, ASME B16.5",
        "pressureClasses": "Class 150#, 300#, 600#",
        "sizeRange": "1/2\" NB to 24\" NB",
        "grades": [
          {
            "slug": "nickel-200",
            "name": "Nickel 200",
            "fullName": "Nickel 200 (UNS N02200)",
            "designation": {
              "astm": "ASTM B564 / B160",
              "asme": "ASME SB564",
              "uns": "UNS N02200",
              "en": "2.4066 (Ni99.2)"
            },
            "description": "Commercially pure (99.6%) wrought nickel providing exceptional thermal conductivity, electrical properties, and uncompromised resistance to hot caustic alkalies.",
            "characteristics": [
              "Immune to stress corrosion cracking in all concentrations of boiling caustic soda (NaOH).",
              "Excellent resistance to dry fluorine, chlorine, and hydrogen chloride gases.",
              "High thermal conductivity and low electrical resistivity for electrochemical electrodes.",
              "Maintains cryogenic mechanical ductility without ductile-to-brittle transition."
            ],
            "applications": [
              "Caustic soda production evaporators",
              "Synthetic fiber manufacturing equipment",
              "Chlorine and hydrogen chloride dry gas transfer",
              "Food and soap processing reaction vessels"
            ],
            "specs": {
              "tensileStrength": "380 MPa (55 ksi) minimum",
              "yieldStrength": "105 MPa (15 ksi) minimum",
              "elongation": "40% minimum in 2 inches",
              "hardness": "HBW ≤ 130",
              "heatTreatment": "Annealed at 700°C - 900°C",
              "inspection": "EN 10204 Type 3.1 MTC"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B564",
              "ASME Section VIII Div 1"
            ],
            "image": "assets/Product Section/Supplier division/flat/nikle.png"
          },
          {
            "slug": "nickel-201",
            "name": "Nickel 201",
            "fullName": "Nickel 201 (UNS N02201)",
            "designation": {
              "astm": "ASTM B564 / B160",
              "asme": "ASME SB564",
              "uns": "UNS N02201",
              "en": "2.4068 (LC-Ni99.2)"
            },
            "description": "Low-carbon version (C ≤ 0.02%) of Nickel 200 engineered to prevent graphitization and intergranular embrittlement during service above 315°C (600°F).",
            "characteristics": [
              "Certified for continuous service at temperatures exceeding 315°C (600°F) up to 650°C.",
              "Low carbon prevents intercrystalline graphite precipitation in caustic environments.",
              "Exceptional resistance to molten hydroxide and fused caustic salts.",
              "High ductility and ease of cold forming and orbital welding."
            ],
            "applications": [
              "High-temperature caustic concentration evaporators",
              "Vinyl chloride monomer (VCM) thermal reactors",
              "Fluorochemical reactors",
              "Molten salt nuclear heat transfer loops"
            ],
            "specs": {
              "tensileStrength": "345 MPa (50 ksi) minimum",
              "yieldStrength": "70 MPa (10 ksi) minimum",
              "elongation": "40% minimum in 2 inches",
              "hardness": "HBW ≤ 120",
              "heatTreatment": "Annealed at 700°C - 900°C",
              "inspection": "EN 10204 Type 3.1 MTC / Carbon verification"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B564",
              "DIN 17750"
            ],
            "image": "assets/Product Section/Supplier division/flat/nikle.png"
          }
        ],
        "image": "assets/Product Section/Supplier division/flat/nikle.png",
        "fallback": "assets/Product Section/Supplier division/flat/Stainless-Steel-Flat-Bar.jpg"
      },
      {
        "slug": "titanium",
        "name": "Titanium",
        "number": "07",
        "description": "Lightweight, ultra-corrosion-resistant titanium alloys delivering total immunity to marine seawater, wet chlorine, and organic chlorides with extraordinary strength-to-weight ratios.",
        "applicableStandards": "ASTM B381, ASTM B348, ASTM B861, ASME B16.5",
        "pressureClasses": "Class 150#, 300#, 600#, 900#",
        "sizeRange": "1/2\" NB to 24\" NB",
        "grades": [
          {
            "slug": "grade-2",
            "name": "Grade 2",
            "fullName": "Titanium Grade 2 (UNS R50400)",
            "designation": {
              "astm": "ASTM B381 / B348 Gr. 2",
              "asme": "ASME SB381",
              "uns": "UNS R50400",
              "en": "3.7035 (Ti2)"
            },
            "description": "The workhorse commercially pure titanium grade offering the optimum balance of moderate strength, high ductility, excellent weldability, and total seawater corrosion resistance.",
            "characteristics": [
              "Forms a tenacious, self-healing titanium dioxide (TiO2) passive oxide film instantly upon exposure to oxygen.",
              "Complete immunity to marine microbiologically influenced corrosion (MIC) and crevice attack.",
              "Approximately 45% lighter than steel, significantly reducing topside platform loads.",
              "Certified biocompatible for medical and food-contact installations."
            ],
            "applications": [
              "Seawater desalination reverse osmosis and multi-stage flash units",
              "Offshore oil platform seawater cooling systems",
              "Chlor-alkali electrolytic cell anode connections",
              "Bleaching towers in pulp and paper mills"
            ],
            "specs": {
              "tensileStrength": "345 MPa (50 ksi) minimum",
              "yieldStrength": "275 MPa (40 ksi) minimum",
              "elongation": "20% minimum in 2 inches",
              "hardness": "HBW ≤ 200",
              "heatTreatment": "Stress Relieved at 500°C - 550°C",
              "inspection": "EN 10204 3.1 / Gas analysis (C, O, N, H) verified"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B381",
              "NACE MR0175 / ISO 15156"
            ],
            "image": "assets/Product Section/Supplier division/flat/titanium-flat-bar.jpg"
          },
          {
            "slug": "grade-5",
            "name": "Grade 5",
            "fullName": "Titanium Grade 5 (Ti-6Al-4V / UNS R56400)",
            "designation": {
              "astm": "ASTM B381 / B348 Gr. 5",
              "asme": "ASME SB381",
              "uns": "UNS R56400",
              "en": "3.7165 (Ti6Al4V)"
            },
            "description": "Alpha-beta titanium alloy containing 6% aluminum and 4% vanadium, delivering twice the mechanical tensile strength of commercially pure grades with high fatigue endurance.",
            "characteristics": [
              "Tensile strength exceeding 895 MPa (130 ksi) with low density of 4.43 g/cm³.",
              "Exceptional strength-to-weight ratio for aerospace and subsea structural bolting.",
              "Maintains mechanical properties up to 400°C while resisting high-velocity seawater erosion.",
              "Heat treatable by solution treating and aging (STA)."
            ],
            "applications": [
              "Subsea high-pressure wellhead riser bolts",
              "Aerospace hydraulic fluid connections",
              "High-speed marine hydrofoil fasteners",
              "Deepwater oceanographic exploration casings"
            ],
            "specs": {
              "tensileStrength": "895 MPa (130 ksi) minimum",
              "yieldStrength": "828 MPa (120 ksi) minimum",
              "elongation": "10% minimum in 2 inches",
              "hardness": "HRC 30 - 36",
              "heatTreatment": "Mill Annealed at 700°C - 785°C and air cooled",
              "inspection": "EN 10204 Type 3.1 MTC / Ultrasonic testing"
            },
            "standards": [
              "ASTM B381",
              "ASME B16.5",
              "AMS 4928",
              "NACE MR0175"
            ],
            "image": "assets/Product Section/Supplier division/flat/titanium-flat-bar.jpg"
          }
        ],
        "image": "assets/Product Section/Supplier division/flat/titanium-flat-bar.jpg",
        "fallback": "assets/Product Section/Supplier division/flat/Stainless-Steel-Flat-Bar.jpg"
      },
      {
        "slug": "copper",
        "name": "Copper",
        "number": "08",
        "description": "Copper-nickel alloys, brasses, and pure copper engineered for high thermal/electrical conductivity, natural marine biofouling resistance, and naval piping circuits.",
        "applicableStandards": "ASTM B151, ASTM B171, ASTM B466, ASME B16.5, DIN 86019",
        "pressureClasses": "Class 150#, 300#, DIN PN10 - PN16",
        "sizeRange": "1/2\" NB to 24\" NB",
        "grades": [
          {
            "slug": "cu-ni-90-10",
            "name": "Cu-Ni 90/10",
            "fullName": "Copper-Nickel 90/10 (C70600)",
            "designation": {
              "astm": "ASTM B151 / B171 C70600",
              "asme": "ASME SB151 C70600",
              "uns": "UNS C70600",
              "en": "2.0872 (CuNi10Fe1Mn)"
            },
            "description": "90% copper, 10% nickel alloy formulated with controlled iron and manganese additions, delivering natural resistance to marine biofouling and seawater impingement erosion.",
            "characteristics": [
              "Natural antimicrobial and macro-fouling resistance; eliminates marine barnacle growth.",
              "High thermal conductivity for marine condensers and heat exchanger tubing.",
              "Resistant to stress corrosion cracking in high-salinity seawater.",
              "Readily brazeable and weldable by TIG and MIG processes."
            ],
            "applications": [
              "Naval warship seawater cooling mains",
              "Offshore platform firewater ring mains",
              "Commercial shipbuilding ballast piping",
              "Desalination multi-stage flash heat recovery tubes"
            ],
            "specs": {
              "tensileStrength": "310 MPa (45 ksi) minimum",
              "yieldStrength": "125 MPa (18 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW 70 - 100",
              "heatTreatment": "Annealed at 600°C - 750°C",
              "inspection": "EN 10204 Type 3.1 MTC / Eddy current inspection"
            },
            "standards": [
              "ASME B16.5",
              "EEMUA 145 / 234",
              "DIN 86019",
              "MIL-C-15726"
            ],
            "image": "assets/New Product img/Bars/copper-nickel-bars.jpg"
          },
          {
            "slug": "cu-ni-70-30",
            "name": "Cu-Ni 70/30",
            "fullName": "Copper-Nickel 70/30 (C71500)",
            "designation": {
              "astm": "ASTM B151 / B171 C71500",
              "asme": "ASME SB151 C71500",
              "uns": "UNS C71500",
              "en": "2.0882 (CuNi30Mn1Fe)"
            },
            "description": "70% copper, 30% nickel alloy engineered for higher seawater velocity tolerances (up to 4.5 m/s) and severe naval service where high impingement resistance is mandatory.",
            "characteristics": [
              "Permissible seawater flow velocity up to 4.5 m/s without protective film breakdown.",
              "Superior resistance to hydrogen embrittlement and sulfide stress cracking.",
              "Enhanced mechanical strength compared to 90/10 grade.",
              "Standard naval submarine and destroyer condenser specification."
            ],
            "applications": [
              "Submarine seawater intake systems",
              "High-velocity naval auxiliary condenser piping",
              "Offshore oil rig cooling manifolds",
              "Desalination brine heater bundles"
            ],
            "specs": {
              "tensileStrength": "380 MPa (55 ksi) minimum",
              "yieldStrength": "140 MPa (20 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW 80 - 120",
              "heatTreatment": "Annealed at 650°C - 800°C",
              "inspection": "EN 10204 Type 3.1 MTC / Hydrostatic verification"
            },
            "standards": [
              "ASME B16.5",
              "EEMUA 145 / 234",
              "DIN 86019",
              "MIL-C-15726"
            ],
            "image": "assets/New Product img/Bars/copper-nickel-bars.jpg"
          }
        ],
        "image": "assets/New Product img/Bars/copper-nickel-bars.jpg",
        "fallback": "assets/Product Section/Supplier division/flat/Stainless-Steel-Flat-Bar.jpg"
      },
      {
        "slug": "aluminium",
        "name": "Aluminium",
        "number": "09",
        "description": "High-strength wrought and extruded aluminium alloys delivering lightweight structural capability, high thermal dissipation, and cryogenic ductility for aerospace and marine service.",
        "applicableStandards": "ASTM B221, ASTM B241, ASTM B209, ASME B16.5",
        "pressureClasses": "Class 150#, PN10, PN16",
        "sizeRange": "1/2\" NB to 24\" NB",
        "grades": [
          {
            "slug": "6061-t6",
            "name": "6061-T6",
            "fullName": "6061-T6 Structural Aluminium",
            "designation": {
              "astm": "ASTM B221 / B241 Gr. 6061",
              "asme": "ASME SB221",
              "uns": "UNS A96061",
              "en": "3.3211 (AlMg1SiCu)"
            },
            "description": "Precipitation-hardened magnesium-silicon alloy delivering high structural yield strength, excellent CNC machinability, and clean surface anodizing characteristics.",
            "characteristics": [
              "High strength-to-weight ratio with density of only 2.70 g/cm³.",
              "Excellent atmospheric corrosion resistance in industrial environments.",
              "Readily machinable to tight geometric tolerances on multi-axis CNC machines.",
              "Excellent TIG/MIG weldability using 4043 or 5356 filler wires."
            ],
            "applications": [
              "Aerospace fuel and hydraulic fluid lines",
              "Cryogenic air separation plant piping",
              "Automotive racing fluid manifolds",
              "Precision robotic automation frames"
            ],
            "specs": {
              "tensileStrength": "290 MPa (42 ksi) minimum",
              "yieldStrength": "240 MPa (35 ksi) minimum",
              "elongation": "8% - 10% in 2 inches",
              "hardness": "HBW ~ 95",
              "heatTreatment": "Solution heat-treated and artificially aged (T6 temper)",
              "inspection": "EN 10204 Type 3.1 MTC / Conductivity check"
            },
            "standards": [
              "ASTM B221",
              "ASTM B241",
              "AMS 4027",
              "ASME B16.5"
            ],
            "image": "assets/Product Section/Supplier division/flat/super duplex.jpg"
          },
          {
            "slug": "5083-h116",
            "name": "5083-H116",
            "fullName": "5083-H116 Marine Aluminium",
            "designation": {
              "astm": "ASTM B209 / B221 Gr. 5083",
              "asme": "ASME SB209",
              "uns": "UNS A95083",
              "en": "3.3547 (AlMg4.5Mn0.7)"
            },
            "description": "High-magnesium marine alloy engineered specifically for exceptional corrosion resistance in seawater and cryogenic storage tanks down to -269°C without embrittlement.",
            "characteristics": [
              "The premier structural aluminium alloy for saltwater immersion.",
              "Maintains exceptional ductility and toughness at cryogenic temperatures down to liquid helium (-269°C).",
              "High weld joint efficiency without requiring post-weld solution treatment.",
              "Certified by DNV, Lloyd's Register, and ABS for marine construction."
            ],
            "applications": [
              "LNG/LPG cryogenic cargo tank piping",
              "High-speed marine ferry hull piping",
              "Naval radar mast structural flanges",
              "Chemical rail tanker vessels"
            ],
            "specs": {
              "tensileStrength": "305 MPa (44 ksi) minimum",
              "yieldStrength": "215 MPa (31 ksi) minimum",
              "elongation": "10% minimum in 2 inches",
              "hardness": "HBW ~ 85",
              "heatTreatment": "Strain-hardened and stabilized (H116 temper) for intergranular corrosion resistance",
              "inspection": "EN 10204 3.1 / Nitric Acid Mass Loss Test (NAMLT) to ASTM G67"
            },
            "standards": [
              "ASTM B209",
              "ASTM B221",
              "DNV-GL Marine Rules",
              "ASME Section VIII"
            ],
            "image": "assets/Product Section/Supplier division/flat/super duplex.jpg"
          }
        ],
        "image": "assets/Product Section/Supplier division/flat/super duplex.jpg",
        "fallback": "assets/Product Section/Supplier division/flat/Stainless-Steel-Flat-Bar.jpg"
      }
    ]
  },
  {
    "slug": "circle",
    "name": "Circle",
    "title": "CIRCLE",
    "suffix": "Circle",
    "eyebrow": "CNC LASER & WATERJET CUT CIRCULAR BLANKS",
    "heroImage": "assets/hero-products/circle-hero.png",
    "heroTag": "CNC PRECISION LASER-CUT CIRCULAR BLANKS",
    "description": "Precision laser-cut, plasma-cut, and waterjet-machined circular plates, blind blanks, and dished end preforms with clean perpendicular edges and tight diametrical tolerances for vessel head fabrication.",
    "overview": {
      "lead": "Circular plate blanks serve as initial preforms for pressure vessel dished heads, tank manway covers, circular blind flanges, and CNC turned machine gear blanks.",
      "highlights": [
        {
          "title": "Diameter Range",
          "desc": "From 50 mm (2\") up to 3000 mm (120\") diameter in thicknesses from 1 mm to 100 mm."
        },
        {
          "title": "Perpendicular Edges",
          "desc": "Cut using multi-axis CNC fiber laser and waterjet to guarantee zero dross and minimal heat-affected zones."
        },
        {
          "title": "Plate Origin",
          "desc": "Manufactured exclusively from prime, fully certified ASTM A240 / A516 pressure-vessel grade plates."
        },
        {
          "title": "Custom Center Bores",
          "desc": "Available solid blind or with pre-machined central and bolt circle mounting holes."
        }
      ]
    },
    "hasTypes": false,
    "types": [],
    "materials": [
      {
        "slug": "stainless-steel",
        "name": "Stainless Steel",
        "number": "01",
        "description": "Austenitic and martensitic stainless steels offering superior resistance to chemical attack, pitting, and high-temperature scaling across process industries.",
        "applicableStandards": "ASTM A182, ASTM A240, ASTM A312, ASTM A403, ASME B16.5",
        "pressureClasses": "Class 150#, 300#, 600#, 900#, 1500#, 2500#",
        "sizeRange": "1/2\" NB to 60\" NB (DN15 to DN1500)",
        "grades": [
          {
            "slug": "304",
            "name": "304",
            "fullName": "304 Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S30400",
              "en": "1.4301 (X5CrNi18-10)"
            },
            "description": "The classic 18/8 austenitic stainless steel delivering dependable general corrosion resistance, excellent formability, and cryogenic impact toughness.",
            "characteristics": [
              "Excellent atmospheric and chemical corrosion resistance in organic and mildly oxidizing acids.",
              "Retains high impact toughness from cryogenic temperatures (-196°C) up to 800°C.",
              "Readily weldable by all standard commercial fusion methods without requiring preheat.",
              "Non-magnetic in the solution-annealed condition with moderate work hardening rate."
            ],
            "applications": [
              "Chemical processing manifolds",
              "Food, dairy & beverage piping",
              "Petrochemical low-temperature loops",
              "Cryogenic storage vessel nozzles",
              "Architectural structural piping"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "205 MPa (30 ksi) minimum",
              "elongation": "40% minimum in 2 inches",
              "hardness": "HBW ≤ 201 (HRB ≤ 92)",
              "heatTreatment": "Solution Annealed at 1040°C - 1120°C followed by rapid water quench",
              "inspection": "EN 10204 Type 3.1 MTC with complete chemical and mechanical test results"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.47",
              "ASTM A182",
              "ASME SA182",
              "MSS-SP-43",
              "NACE MR0175 (annealed)"
            ],
            "image": "assets/Product Section/Supplier division/Circle/Stainless steel.png"
          },
          {
            "slug": "304l",
            "name": "304L",
            "fullName": "304L Low-Carbon Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S30403",
              "en": "1.4307 (X2CrNi18-9)"
            },
            "description": "Extra-low carbon modification (C ≤ 0.030%) that eliminates chromium carbide precipitation during welding, providing immunity to intergranular corrosion in as-welded assemblies.",
            "characteristics": [
              "Immunity to sensitization and intergranular attack in heat-affected zones (HAZ) of welded components.",
              "Eliminates the mandatory requirement for post-weld solution annealing.",
              "Maintains cryogenic mechanical ductility down to liquid nitrogen temperatures (-196°C).",
              "Compatible with dual-certified 304/304L pressure vessel specifications."
            ],
            "applications": [
              "Heavy-wall welded piping systems",
              "Wet chemical processing lines",
              "Refinery flare header lines",
              "Marine deck piping systems",
              "Pulp and paper bleaching equipment"
            ],
            "specs": {
              "tensileStrength": "485 MPa (70 ksi) minimum",
              "yieldStrength": "170 MPa (25 ksi) minimum",
              "elongation": "40% minimum in 2 inches",
              "hardness": "HBW ≤ 201",
              "heatTreatment": "Solution Annealed at 1040°C - 1100°C and water quenched",
              "inspection": "EN 10204 Type 3.1 MTC / NACE MR0175 compliant"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.9",
              "ASTM A182",
              "ASTM A403",
              "ASME Section VIII Div 1"
            ],
            "image": "assets/Product Section/Supplier division/Circle/Stainless steel.png"
          },
          {
            "slug": "316",
            "name": "316",
            "fullName": "316 Molybdenum-Bearing Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S31600",
              "en": "1.4401 (X5CrNiMo17-12-2)"
            },
            "description": "Formulated with 2.0% to 3.0% molybdenum to significantly improve localized resistance to pitting and crevice corrosion in chloride and halide-bearing environments.",
            "characteristics": [
              "Significantly higher pitting resistance equivalent (PREN ~ 23-25) compared to 304.",
              "Superior resistance to sulfuric, phosphoric, acetic, and tartaric acid solutions.",
              "Elevated creep rupture strength at elevated operating temperatures up to 870°C.",
              "Standard specification for marine atmospheres, offshore platforms, and coastal chemical plants."
            ],
            "applications": [
              "Offshore oil & gas production manifolds",
              "Marine seawater cooling circuits",
              "Pharmaceutical reaction vessels",
              "Petrochemical acid-wash scrubbers",
              "Fertilizer production piping"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "205 MPa (30 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 217",
              "heatTreatment": "Solution Annealed at 1040°C - 1150°C and rapidly quenched",
              "inspection": "EN 10204 3.1 / PMI / Ultrasonic Inspection to ASTM A388"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.47",
              "ASTM A182",
              "ASTM A312",
              "NACE MR0175 / ISO 15156"
            ],
            "image": "assets/Product Section/Supplier division/Circle/Stainless steel.png"
          },
          {
            "slug": "316l",
            "name": "316L",
            "fullName": "316L Low-Carbon Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S31603",
              "en": "1.4404 (X2CrNiMo17-12-2)"
            },
            "description": "Low-carbon molybdenum alloy combining superior chloride pitting resistance with complete protection against intergranular carbide precipitation in critical welded joints.",
            "characteristics": [
              "Carbon restricted to 0.030% max, preventing grain boundary sensitization during field welding.",
              "Exceptional resistance to localized pitting in marine and brackish water piping systems.",
              "Widely accepted in sour service under NACE MR0175 / ISO 15156 standards.",
              "Clean interior surface finish capability suitable for sanitary and high-purity applications."
            ],
            "applications": [
              "Subsea umbilical and manifold piping",
              "Chemical tanker cargo lines",
              "Pharmaceutical clean-in-place (CIP) loops",
              "Desalination plant brine piping",
              "Sour hydrocarbon gas handling"
            ],
            "specs": {
              "tensileStrength": "485 MPa (70 ksi) minimum",
              "yieldStrength": "170 MPa (25 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 217",
              "heatTreatment": "Solution Annealed at 1040°C - 1120°C and water quenched",
              "inspection": "EN 10204 Type 3.1 MTC / NACE MR0175 / MR0103"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.11",
              "ASTM A182",
              "ASTM A403",
              "ASME BPE"
            ],
            "image": "assets/Product Section/Supplier division/Circle/Stainless steel.png"
          },
          {
            "slug": "321",
            "name": "321",
            "fullName": "321 Titanium-Stabilized Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S32100",
              "en": "1.4541 (X6CrNiTi18-10)"
            },
            "description": "Stabilized with titanium (Ti ≥ 5x C) to tie up carbon as titanium carbides, preventing sensitization during prolonged service in the critical 427°C to 816°C temperature range.",
            "characteristics": [
              "Complete immunity to intergranular corrosion during continuous high-temperature service.",
              "Superior creep and stress-rupture properties compared to standard 304/304L.",
              "Resists polythionic acid stress corrosion cracking during refinery shutdown cycles.",
              "Standard choice for aircraft exhaust systems and refinery thermal crackers."
            ],
            "applications": [
              "Refinery thermal cracker piping",
              "Catalytic reformer units",
              "High-temperature steam boiler bypass lines",
              "Aircraft engine exhaust manifolds",
              "Chemical furnace tube connections"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "205 MPa (30 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 217",
              "heatTreatment": "Solution Annealed at 1000°C - 1100°C followed by stabilization heat treatment at 850°C - 900°C",
              "inspection": "EN 10204 3.1 / Intergranular Corrosion Test to ASTM A262 Practice E"
            },
            "standards": [
              "ASME B16.5",
              "ASTM A182",
              "ASME SA182",
              "API 530"
            ],
            "image": "assets/Product Section/Supplier division/Circle/Stainless steel.png"
          },
          {
            "slug": "347",
            "name": "347",
            "fullName": "347 Niobium-Stabilized Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S34700",
              "en": "1.4550 (X6CrNiNb18-10)"
            },
            "description": "Stabilized with niobium/columbium (Nb ≥ 10x C) providing enhanced creep resistance and intergranular corrosion resistance at severe temperatures up to 870°C.",
            "characteristics": [
              "High creep strength and stress rupture resistance in heavy wall forged components.",
              "Resistant to polythionic acid stress cracking in hydrocracking and hydrotreating units.",
              "Superior fatigue strength under extreme thermal shock cycling.",
              "Certified for nuclear and supercritical power generation piping."
            ],
            "applications": [
              "Hydroprocessing and hydrodesulfurization units",
              "Supercritical power boiler piping",
              "Radiant superheater tube headers",
              "High-temperature radioactive waste handling",
              "Gas turbine exhaust nozzles"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "205 MPa (30 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 217",
              "heatTreatment": "Solution Annealed at 1040°C - 1150°C and water quenched",
              "inspection": "EN 10204 Type 3.1 with ASTM A262 Practice E IGC certification"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.9",
              "ASTM A182",
              "ASME Section III Class 1"
            ],
            "image": "assets/Product Section/Supplier division/Circle/Stainless steel.png"
          },
          {
            "slug": "310s",
            "name": "310S",
            "fullName": "310S High-Temperature Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS S31008",
              "en": "1.4845 (X8CrNi25-21)"
            },
            "description": "High-alloy austenitic stainless steel formulated with 25% chromium and 20% nickel for exceptional resistance to high-temperature oxidation and sulfidation up to 1150°C.",
            "characteristics": [
              "Continuous oxidation resistance in air up to 1150°C (2100°F) under cyclic thermal conditions.",
              "Resistant to carburization in moderately carburizing petrochemical atmospheres.",
              "Maintains high ductile toughness and structural stability at elevated temperatures.",
              "Low magnetic permeability and high thermal creep endurance."
            ],
            "applications": [
              "Thermal incinerator burner piping",
              "Fluidized bed coal combustors",
              "Cement rotary kiln exhaust nozzles",
              "Petrochemical pyrolysis furnaces",
              "Heat treatment furnace fixtures"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "205 MPa (30 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 217",
              "heatTreatment": "Solution Annealed at 1040°C - 1150°C followed by rapid air or water cooling",
              "inspection": "EN 10204 3.1 MTC / High-temperature mechanical testing"
            },
            "standards": [
              "ASME B16.5",
              "ASTM A182",
              "ASTM A312",
              "ASME Section VIII Div 1"
            ],
            "image": "assets/Product Section/Supplier division/Circle/Stainless steel.png"
          },
          {
            "slug": "904l",
            "name": "904L",
            "fullName": "904L Super Austenitic Stainless Steel",
            "designation": {
              "astm": "ASTM A182 / A240",
              "asme": "ASME SA182 / SA240",
              "uns": "UNS N08904",
              "en": "1.4539 (X1NiCrMoCu25-20-5)"
            },
            "description": "High-alloy super-austenitic stainless steel formulated with 4.5% molybdenum and 1.5% copper, specifically developed to withstand aggressive sulfuric and phosphoric acids.",
            "characteristics": [
              "High PREN (≥ 34), offering extraordinary resistance to warm seawater pitting.",
              "Added copper content provides outstanding resistance to concentrated sulfuric acid across all concentration ranges.",
              "Immune to chloride-induced stress corrosion cracking up to 60°C.",
              "Fully austenitic structure provides high ductility and ease of welding."
            ],
            "applications": [
              "Sulfuric acid manufacturing pipelines",
              "Phosphate fertilizer production units",
              "Flue gas desulfurization (FGD) scrubbers",
              "Seawater reverse osmosis piping",
              "Pulp mill bleaching towers"
            ],
            "specs": {
              "tensileStrength": "490 MPa (71 ksi) minimum",
              "yieldStrength": "220 MPa (32 ksi) minimum",
              "elongation": "35% minimum in 2 inches",
              "hardness": "HBW ≤ 217 (HRB ≤ 95)",
              "heatTreatment": "Solution Annealed at 1090°C - 1150°C followed by rapid water quench",
              "inspection": "EN 10204 Type 3.1 MTC with ASTM G48 pitting test verification"
            },
            "standards": [
              "ASTM A182",
              "ASME B16.5",
              "ASTM B625",
              "NACE MR0175"
            ],
            "image": "assets/Product Section/Supplier division/Circle/Stainless steel.png"
          }
        ],
        "image": "assets/hero-products/circle-hero.png",
        "fallback": "assets/Product Section/Supplier division/Circle/Stainless steel.png"
      },
      {
        "slug": "carbon-steel",
        "name": "Carbon Steel",
        "number": "02",
        "description": "Forged and plate-formed carbon steels engineered for structural strength, high pressure containment, and reliable impact ductility in utility and industrial piping.",
        "applicableStandards": "ASTM A105, ASTM A350 LF2, ASTM A106, ASTM A234 WPB, ASME B16.5",
        "pressureClasses": "Class 150#, 300#, 600#, 900#, 1500#, 2500#",
        "sizeRange": "1/2\" NB to 60\" NB",
        "grades": [
          {
            "slug": "a105",
            "name": "A105",
            "fullName": "ASTM A105 Forged Carbon Steel",
            "designation": {
              "astm": "ASTM A105 / A105N",
              "asme": "ASME SA105",
              "uns": "UNS K03504",
              "en": "1.0460 (C22.8 / P250GH)"
            },
            "description": "The premier forged carbon steel specification for ambient and elevated-temperature piping components, flanges, fittings, and valves.",
            "characteristics": [
              "Excellent machinability and weldability with balanced carbon-manganese metallurgy.",
              "Supplied in normalized (A105N) heat-treated condition for fine grain size and optimal Charpy V-notch toughness.",
              "High proof pressure containment for petroleum refineries, power stations, and steam pipelines.",
              "Fully qualified under ASME Section VIII and ASME B31.3 piping codes."
            ],
            "applications": [
              "Refinery steam and hydrocarbon lines",
              "Boiler feed water piping",
              "Natural gas transmission stations",
              "District heating networks",
              "General industrial utility piping"
            ],
            "specs": {
              "tensileStrength": "485 MPa (70 ksi) minimum",
              "yieldStrength": "250 MPa (36 ksi) minimum",
              "elongation": "22% minimum in 2 inches",
              "hardness": "HBW 137 - 187",
              "heatTreatment": "Normalized at 880°C - 920°C and air cooled",
              "inspection": "EN 10204 Type 3.1 MTC / 100% NDT inspection"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.11",
              "ASTM A105",
              "MSS-SP-79",
              "NACE MR0175 (normalized)"
            ],
            "image": "assets/Product Section/Supplier division/Circle/carbon.jpg"
          },
          {
            "slug": "a350-lf2",
            "name": "A350 LF2",
            "fullName": "ASTM A350 LF2 Low-Temperature Carbon Steel",
            "designation": {
              "astm": "ASTM A350 LF2 Class 1",
              "asme": "ASME SA350 LF2",
              "uns": "UNS K03011",
              "en": "1.0566 (TStE 355)"
            },
            "description": "Forged carbon and low-alloy steel specifically treated for notched-bar toughness in low-temperature piping systems down to -46°C (-50°F).",
            "characteristics": [
              "Guaranteed Charpy V-notch impact toughness of 20 Joules (15 ft-lbs) minimum at -46°C (-50°F).",
              "Fine-grained, fully killed steel heat treated by normalizing and tempering or quenching and tempering.",
              "Mandatory for Arctic pipelines, cold gas transmission, and LPG/LNG cryogenic utility lines.",
              "Fully compliant with NACE MR0175 hardness limits (≤ 22 HRC)."
            ],
            "applications": [
              "Arctic oil and gas extraction lines",
              "LPG/LNG transport and storage terminals",
              "Refrigeration compressor piping",
              "Subsea cold-water export lines",
              "Cryogenic gas processing facilities"
            ],
            "specs": {
              "tensileStrength": "485 - 655 MPa (70 - 95 ksi)",
              "yieldStrength": "250 MPa (36 ksi) minimum",
              "elongation": "22% minimum in 2 inches",
              "hardness": "HBW ≤ 197 (HRC ≤ 22)",
              "heatTreatment": "Normalized at 900°C and Tempered at 600°C",
              "inspection": "EN 10204 3.1 / Charpy V-Notch Impact Test at -46°C"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.11",
              "ASTM A350",
              "NACE MR0175 / ISO 15156"
            ],
            "image": "assets/Product Section/Supplier division/Circle/carbon.jpg"
          },
          {
            "slug": "a234-wpb",
            "name": "A234 WPB",
            "fullName": "ASTM A234 WPB Wrought Carbon Steel",
            "designation": {
              "astm": "ASTM A234 Grade WPB",
              "asme": "ASME SA234 WPB",
              "uns": "UNS K03006",
              "en": "1.0488 (P275NH)"
            },
            "description": "The standard wrought carbon steel material specification for seamless and welded butt weld elbows, tees, reducers, and pipe caps.",
            "characteristics": [
              "Formed from seamless pipe (ASTM A106 Grade B) or plate (ASTM A285/A516) with uniform grain distribution.",
              "High weldability and ductility for high-speed automated pipe spool fabrication.",
              "Engineered for moderate and high-temperature pressure piping systems.",
              "Supplied in normalized, stress-relieved, or annealed condition."
            ],
            "applications": [
              "Cross-country oil & gas pipelines",
              "Power plant steam header loops",
              "Industrial boiler piping",
              "Chemical plant water injection mains",
              "District heating infrastructure"
            ],
            "specs": {
              "tensileStrength": "415 - 585 MPa (60 - 85 ksi)",
              "yieldStrength": "240 MPa (35 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 197",
              "heatTreatment": "Normalized or hot-formed above 620°C",
              "inspection": "EN 10204 3.1 / 100% Hydrostatic and NDT Testing"
            },
            "standards": [
              "ASME B16.9",
              "ASME B16.28",
              "ASTM A234",
              "MSS-SP-25"
            ],
            "image": "assets/Product Section/Supplier division/Circle/carbon.jpg"
          },
          {
            "slug": "a516-gr70",
            "name": "A516 Gr. 70",
            "fullName": "ASTM A516 Grade 70 Pressure Vessel Plate",
            "designation": {
              "astm": "ASTM A516 / A516M Gr. 70",
              "asme": "ASME SA516 Gr. 70",
              "uns": "UNS K02700",
              "en": "1.0473 (P355GH)"
            },
            "description": "The standard boiler and pressure-vessel quality carbon steel plate material for circular blanks, dished heads, and vessel shells operating at ambient and lower temperatures.",
            "characteristics": [
              "Superior notch toughness and weldability with vacuum-degassed, fine-grain steel practice.",
              "High yield strength and resistance to lamellar tearing under transverse welded loads.",
              "Normalized for improved low-temperature impact properties (available with Charpy testing down to -46°C).",
              "Standard material for heavy industrial autoclaves and storage vessels."
            ],
            "applications": [
              "Pressure vessel shells and circular dished ends",
              "Heat exchanger tube sheets and circular blind covers",
              "Storage tank bottom and shell plates",
              "Heavy-wall welded vessel nozzles"
            ],
            "specs": {
              "tensileStrength": "485 - 620 MPa (70 - 90 ksi)",
              "yieldStrength": "260 MPa (38 ksi) minimum",
              "elongation": "21% minimum in 2 inches",
              "hardness": "HBW ≤ 187",
              "heatTreatment": "Normalized above 40 mm plate thickness",
              "inspection": "EN 10204 3.1 / Ultrasonic testing to ASTM A435 / A578"
            },
            "standards": [
              "ASTM A516",
              "ASME SA516",
              "ASME Section VIII Div 1 & 2"
            ],
            "image": "assets/Product Section/Supplier division/Circle/carbon.jpg"
          }
        ],
        "image": "assets/Product Section/Supplier division/Circle/carbon.jpg",
        "fallback": "assets/Product Section/Supplier division/Circle/Stainless steel.png"
      },
      {
        "slug": "alloy-steel",
        "name": "Alloy Steel",
        "number": "03",
        "description": "Chromium-molybdenum alloy steels engineered for elevated-temperature creep strength, hydrogen attack resistance, and severe power boiler and hydroprocessing service.",
        "applicableStandards": "ASTM A182, ASTM A234, ASTM A335, ASME B16.5, ASME B16.11",
        "pressureClasses": "Class 300#, 600#, 900#, 1500#, 2500#",
        "sizeRange": "1/2\" NB to 36\" NB",
        "grades": [
          {
            "slug": "f11",
            "name": "F11",
            "fullName": "ASTM A182 F11 (1.25% Cr - 0.5% Mo)",
            "designation": {
              "astm": "ASTM A182 F11 Class 2",
              "asme": "ASME SA182 F11",
              "uns": "UNS K11572",
              "en": "1.7335 (13CrMo4-5)"
            },
            "description": "Nominal 1.25% chromium, 0.5% molybdenum alloy steel engineered for high-temperature steam lines and refinery hydrocrackers operating up to 550°C.",
            "characteristics": [
              "High creep rupture strength and resistance to graphitization at elevated steam temperatures.",
              "Resistance to high-temperature hydrogen attack (HTHA) according to Nelson curve criteria.",
              "Supplied in normalized and tempered condition for structural microstructural stability.",
              "Standard alloy for thermal power plant main steam and hot reheat lines."
            ],
            "applications": [
              "Main steam headers in thermal power plants",
              "Hydrodesulfurization reactor piping",
              "Superheater piping and headers",
              "Refinery furnace transfer lines"
            ],
            "specs": {
              "tensileStrength": "485 MPa (70 ksi) minimum",
              "yieldStrength": "275 MPa (40 ksi) minimum",
              "elongation": "20% minimum in 2 inches",
              "hardness": "HBW 143 - 207",
              "heatTreatment": "Normalized at 900°C - 950°C and Tempered at 650°C minimum",
              "inspection": "EN 10204 3.1 / Hot tensile test verified"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.11",
              "ASTM A182",
              "API 941"
            ],
            "image": "assets/Product Section/Supplier division/Circle/alloy steel.jpg"
          },
          {
            "slug": "f22",
            "name": "F22",
            "fullName": "ASTM A182 F22 (2.25% Cr - 1.0% Mo)",
            "designation": {
              "astm": "ASTM A182 F22 Class 3",
              "asme": "ASME SA182 F22",
              "uns": "UNS K21590",
              "en": "1.7380 (10CrMo9-10)"
            },
            "description": "Nominal 2.25% chromium, 1.0% molybdenum alloy steel offering superior creep endurance, corrosion resistance to sulfur-bearing oil streams, and hydrogen resistance up to 600°C.",
            "characteristics": [
              "Elevated creep resistance and high allowable design stress under ASME Section I and VIII.",
              "Enhanced resistance to high-pressure hydrogen embrittlement in hydroprocessing units.",
              "Quenched and tempered or normalized and tempered for high fracture toughness.",
              "Specified for high-pressure catalytic cracking and supercritical boiler loops."
            ],
            "applications": [
              "Hydrocracker reactor nozzles and loop piping",
              "Supercritical boiler superheater headers",
              "Gasifier syngas transfer lines",
              "Petrochemical high-pressure steam headers"
            ],
            "specs": {
              "tensileStrength": "515 MPa (75 ksi) minimum",
              "yieldStrength": "310 MPa (45 ksi) minimum",
              "elongation": "20% minimum in 2 inches",
              "hardness": "HBW 156 - 207",
              "heatTreatment": "Normalized at 900°C - 950°C and Tempered at 675°C minimum",
              "inspection": "EN 10204 3.1 / Ultrasonic and Magnetic Particle Inspection"
            },
            "standards": [
              "ASME B16.5",
              "ASME B16.9",
              "ASTM A182",
              "ASTM A335 Grade P22"
            ],
            "image": "assets/Product Section/Supplier division/Circle/alloy steel.jpg"
          },
          {
            "slug": "f91",
            "name": "F91",
            "fullName": "ASTM A182 F91 (9% Cr - 1% Mo - V - Nb)",
            "designation": {
              "astm": "ASTM A182 F91 Type 1",
              "asme": "ASME SA182 F91",
              "uns": "UNS K90901",
              "en": "1.4903 (X10CrMoVNb9-1)"
            },
            "description": "Advanced modified 9Cr-1Mo-V-Nb martensitic alloy steel engineered for supercritical and ultra-supercritical (USC) power stations operating up to 620°C with reduced wall thickness.",
            "characteristics": [
              "Twice the creep rupture strength of F22 at 600°C, enabling thinner component wall sections.",
              "Lower thermal stress and reduced cyclic thermal fatigue in high-efficiency power boilers.",
              "Requires tight control of heat treatment: normalizing at 1040°C–1080°C and tempering at 730°C–800°C.",
              "Strict compliance with hardness and microstructural martensite grain requirements."
            ],
            "applications": [
              "Ultra-supercritical power plant main steam lines",
              "Combined cycle gas turbine (CCGT) HRSG headers",
              "High-pressure steam bypass manifolds",
              "Nuclear power steam generator loops"
            ],
            "specs": {
              "tensileStrength": "585 - 760 MPa (85 - 110 ksi)",
              "yieldStrength": "415 MPa (60 ksi) minimum",
              "elongation": "20% minimum in 2 inches",
              "hardness": "HBW 190 - 248",
              "heatTreatment": "Normalized at 1050°C and Tempered at 750°C - 780°C",
              "inspection": "EN 10204 Type 3.1 / 100% Ultrasonic & Hardness verification"
            },
            "standards": [
              "ASME B16.5",
              "ASTM A182",
              "ASTM A335 Grade P91",
              "EPRI Guidelines"
            ],
            "image": "assets/Product Section/Supplier division/Circle/alloy steel.jpg"
          }
        ],
        "image": "assets/Product Section/Supplier division/Circle/alloy steel.jpg",
        "fallback": "assets/Product Section/Supplier division/Circle/Stainless steel.png"
      },
      {
        "slug": "duplex",
        "name": "Duplex & Super Duplex",
        "number": "04",
        "description": "Dual-phase austenitic-ferritic microstructures delivering yield strength roughly twice that of standard stainless steel combined with superior resistance to chloride stress corrosion cracking.",
        "applicableStandards": "ASTM A182, ASTM A240, ASTM A790, ASTM A815, ASME B16.5",
        "pressureClasses": "Class 150#, 300#, 600#, 900#, 1500#, 2500#",
        "sizeRange": "1/2\" NB to 36\" NB",
        "grades": [
          {
            "slug": "2205",
            "name": "2205",
            "fullName": "2205 Standard Duplex (UNS S31803 / S32205)",
            "designation": {
              "astm": "ASTM A182 F51 / F60",
              "asme": "ASME SA182 F51 / F60",
              "uns": "UNS S31803 / S32205",
              "en": "1.4462 (X2CrNiMoN22-5-3)"
            },
            "description": "The workhorse 22% chromium duplex stainless steel with approximately 50/50 ferrite-austenite phase balance, offering high yield strength and high chloride resistance (PREN 35).",
            "characteristics": [
              "Yield strength roughly twice that of austenitic 316L, allowing substantial weight reduction.",
              "High resistance to chloride stress corrosion cracking in sour environments.",
              "High resistance to erosion-corrosion and pitting in seawater and brackish cooling water.",
              "Temperature limit typically restricted to -50°C to +280°C to prevent 475°C embrittlement."
            ],
            "applications": [
              "Offshore oil & gas topside piping",
              "Chemical tanker cargo holds and piping",
              "Desalination high-pressure reverse osmosis headers",
              "Flue gas cleaning systems",
              "Biofuel processing digesters"
            ],
            "specs": {
              "tensileStrength": "655 MPa (95 ksi) minimum",
              "yieldStrength": "450 MPa (65 ksi) minimum",
              "elongation": "25% minimum in 2 inches",
              "hardness": "HBW ≤ 290 (HRC ≤ 28)",
              "heatTreatment": "Solution Annealed at 1020°C - 1100°C and rapidly water quenched",
              "inspection": "EN 10204 3.1 / Phase balance check (40-60% ferrite) / ASTM G48 Method A test"
            },
            "standards": [
              "ASME B16.5",
              "ASTM A182",
              "NORSK M-630 MDS D44",
              "NACE MR0175 / ISO 15156"
            ],
            "image": "assets/Product Section/Supplier division/Circle/duplex.jpg"
          },
          {
            "slug": "2507",
            "name": "2507",
            "fullName": "2507 Super Duplex (UNS S32750)",
            "designation": {
              "astm": "ASTM A182 F53",
              "asme": "ASME SA182 F53",
              "uns": "UNS S32750",
              "en": "1.4410 (X2CrNiMoN25-7-4)"
            },
            "description": "25% chromium super duplex stainless steel with 4% molybdenum and 0.28% nitrogen, providing exceptional pitting and crevice corrosion resistance with PREN ≥ 42.",
            "characteristics": [
              "PREN ≥ 42 guaranteeing immunity to pitting in high-temperature chlorinated seawater.",
              "Exceptionally high mechanical yield strength (≥ 550 MPa) for high-pressure subsea lines.",
              "Immune to chloride stress corrosion cracking in aggressive sour gas reservoirs.",
              "Manufactured strictly to NORSOK M-630 and NACE MR0175 compliance."
            ],
            "applications": [
              "Subsea manifolds, risers, and Christmas tree piping",
              "Seawater fire-water ring mains",
              "Offshore high-pressure sour gas export lines",
              "Geothermal high-chloride brine piping",
              "Chemical plants handling hot chlorinated media"
            ],
            "specs": {
              "tensileStrength": "750 MPa (109 ksi) minimum",
              "yieldStrength": "550 MPa (80 ksi) minimum",
              "elongation": "15% minimum in 2 inches",
              "hardness": "HBW ≤ 310 (HRC ≤ 32)",
              "heatTreatment": "Solution Annealed at 1050°C - 1125°C and water quenched",
              "inspection": "EN 10204 3.1 / Microstructure audit / ASTM G48 Method A test at 50°C"
            },
            "standards": [
              "ASME B16.5",
              "ASTM A182 F53",
              "NORSOK M-630 MDS D54",
              "ISO 15156"
            ],
            "image": "assets/Product Section/Supplier division/Circle/duplex.jpg"
          }
        ],
        "image": "assets/Product Section/Supplier division/Circle/duplex.jpg",
        "fallback": "assets/Product Section/Supplier division/Circle/Stainless steel.png"
      },
      {
        "slug": "high-alloy",
        "name": "High Alloy",
        "number": "05",
        "description": "Nickel-chromium-molybdenum superalloys engineered to withstand severe chemical environments, high temperatures, boiling mineral acids, and extreme mechanical stress.",
        "applicableStandards": "ASTM B564, ASTM B366, ASTM B622, ASME B16.5, ASME B16.11",
        "pressureClasses": "Class 150#, 300#, 600#, 900#, 1500#, 2500#",
        "sizeRange": "1/2\" NB to 24\" NB",
        "grades": [
          {
            "slug": "inconel-625",
            "name": "Inconel 625",
            "fullName": "Inconel 625 (UNS N06625)",
            "designation": {
              "astm": "ASTM B564 / B444",
              "asme": "ASME SB564",
              "uns": "UNS N06625",
              "en": "2.4856 (NiCr22Mo9Nb)"
            },
            "description": "Nickel-chromium-molybdenum alloy with niobium addition providing solid solution strengthening without heat treatment, resistant from cryogenic temperatures up to 980°C.",
            "characteristics": [
              "Virtually immune to chloride-induced stress corrosion cracking.",
              "Exceptional fatigue and thermal-fatigue strength in marine and aerospace environments.",
              "High resistance to a wide range of organic and inorganic acids, including wet chlorine.",
              "Certified for NACE sour service and nuclear reactor core piping."
            ],
            "applications": [
              "Marine exhaust scrubbers",
              "Subsea wellhead equipment",
              "Chemical waste disposal incinerator nozzles",
              "Nuclear reactor control rod drive piping",
              "Sour gas production downhole components"
            ],
            "specs": {
              "tensileStrength": "827 MPa (120 ksi) minimum",
              "yieldStrength": "414 MPa (60 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW ≤ 220",
              "heatTreatment": "Annealed at 980°C - 1050°C",
              "inspection": "EN 10204 Type 3.1 / 100% Ultrasonic inspection"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B564",
              "NACE MR0175",
              "AMS 5666"
            ],
            "image": "assets/Product Section/Supplier division/Circle/high alloy.webp"
          },
          {
            "slug": "hastelloy-c276",
            "name": "Hastelloy C276",
            "fullName": "Hastelloy C276 (UNS N10276)",
            "designation": {
              "astm": "ASTM B564 / B575",
              "asme": "ASME SB564",
              "uns": "UNS N10276",
              "en": "2.4819 (NiMo16Cr15W)"
            },
            "description": "The universal corrosion-resistant nickel-molybdenum-chromium superalloy with tungsten, engineered to withstand aggressive wet chlorine gas, hypochlorite, and boiling mineral acids.",
            "characteristics": [
              "Unmatched resistance to localized pitting, crevice corrosion, and stress corrosion cracking.",
              "One of the few materials to withstand wet chlorine gas, hypochlorite, and chlorine dioxide solutions.",
              "Low carbon content minimizes carbide precipitation during welding, preserving as-welded corrosion resistance.",
              "Proven longevity in harsh chemical synthesis reactors."
            ],
            "applications": [
              "Flue gas desulfurization (FGD) scrubbers",
              "Sulfuric and hydrochloric acid synthesis plants",
              "Chlorination reaction systems",
              "Pharmaceutical active ingredient reactors",
              "Hazardous waste treatment vessels"
            ],
            "specs": {
              "tensileStrength": "690 MPa (100 ksi) minimum",
              "yieldStrength": "283 MPa (41 ksi) minimum",
              "elongation": "40% minimum in 2 inches",
              "hardness": "HBW ≤ 220",
              "heatTreatment": "Solution heat-treated at 1120°C and water quenched",
              "inspection": "EN 10204 Type 3.1 / Microstructure and ASTM G28 corrosion testing"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B564",
              "NACE MR0175 / ISO 15156"
            ],
            "image": "assets/Product Section/Supplier division/Circle/high alloy.webp"
          },
          {
            "slug": "monel-400",
            "name": "Monel 400",
            "fullName": "Monel 400 (UNS N04400)",
            "designation": {
              "astm": "ASTM B564 / B127",
              "asme": "ASME SB564",
              "uns": "UNS N04400",
              "en": "2.4360 (NiCu30Fe)"
            },
            "description": "Ductile nickel-copper alloy (67% Ni, 30% Cu) exhibiting exceptional resistance to rapidly flowing seawater, hydrofluoric acid, sulfuric acid, and high-temperature alkalies.",
            "characteristics": [
              "Standard engineering material for marine salt water immersion and splash zones.",
              "Exceptional resistance to hydrofluoric acid (HF) in all concentrations up to the boiling point.",
              "Resistant to non-oxidizing mineral acids and deaerated salt solutions.",
              "Non-magnetic down to room temperature with high impact toughness."
            ],
            "applications": [
              "Hydrofluoric acid alkylation units in oil refineries",
              "Marine propeller shafts and seawater valve trims",
              "Offshore splash-zone sheathing",
              "Chlorinated solvent recovery systems",
              "Salt plant brine evaporators"
            ],
            "specs": {
              "tensileStrength": "480 MPa (70 ksi) minimum",
              "yieldStrength": "195 MPa (28 ksi) minimum",
              "elongation": "35% minimum in 2 inches",
              "hardness": "HBW 110 - 150",
              "heatTreatment": "Annealed at 760°C - 900°C followed by water quench",
              "inspection": "EN 10204 3.1 / Ultrasonic and Dye Penetrant testing"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B564",
              "NACE MR0175",
              "MSS-SP-25"
            ],
            "image": "assets/Product Section/Supplier division/Circle/high alloy.webp"
          }
        ],
        "image": "assets/Product Section/Supplier division/Circle/high alloy.webp",
        "fallback": "assets/Product Section/Supplier division/Circle/Stainless steel.png"
      },
      {
        "slug": "nickel",
        "name": "Nickel",
        "number": "06",
        "description": "Commercially pure nickel alloys engineered for caustic soda evaporators, non-oxidizing halogen systems, and high-purity chemical processing.",
        "applicableStandards": "ASTM B564, ASTM B160, ASTM B162, ASME B16.5",
        "pressureClasses": "Class 150#, 300#, 600#",
        "sizeRange": "1/2\" NB to 24\" NB",
        "grades": [
          {
            "slug": "nickel-200",
            "name": "Nickel 200",
            "fullName": "Nickel 200 (UNS N02200)",
            "designation": {
              "astm": "ASTM B564 / B160",
              "asme": "ASME SB564",
              "uns": "UNS N02200",
              "en": "2.4066 (Ni99.2)"
            },
            "description": "Commercially pure (99.6%) wrought nickel providing exceptional thermal conductivity, electrical properties, and uncompromised resistance to hot caustic alkalies.",
            "characteristics": [
              "Immune to stress corrosion cracking in all concentrations of boiling caustic soda (NaOH).",
              "Excellent resistance to dry fluorine, chlorine, and hydrogen chloride gases.",
              "High thermal conductivity and low electrical resistivity for electrochemical electrodes.",
              "Maintains cryogenic mechanical ductility without ductile-to-brittle transition."
            ],
            "applications": [
              "Caustic soda production evaporators",
              "Synthetic fiber manufacturing equipment",
              "Chlorine and hydrogen chloride dry gas transfer",
              "Food and soap processing reaction vessels"
            ],
            "specs": {
              "tensileStrength": "380 MPa (55 ksi) minimum",
              "yieldStrength": "105 MPa (15 ksi) minimum",
              "elongation": "40% minimum in 2 inches",
              "hardness": "HBW ≤ 130",
              "heatTreatment": "Annealed at 700°C - 900°C",
              "inspection": "EN 10204 Type 3.1 MTC"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B564",
              "ASME Section VIII Div 1"
            ],
            "image": "assets/Product Section/Supplier division/Circle/nikle.webp"
          },
          {
            "slug": "nickel-201",
            "name": "Nickel 201",
            "fullName": "Nickel 201 (UNS N02201)",
            "designation": {
              "astm": "ASTM B564 / B160",
              "asme": "ASME SB564",
              "uns": "UNS N02201",
              "en": "2.4068 (LC-Ni99.2)"
            },
            "description": "Low-carbon version (C ≤ 0.02%) of Nickel 200 engineered to prevent graphitization and intergranular embrittlement during service above 315°C (600°F).",
            "characteristics": [
              "Certified for continuous service at temperatures exceeding 315°C (600°F) up to 650°C.",
              "Low carbon prevents intercrystalline graphite precipitation in caustic environments.",
              "Exceptional resistance to molten hydroxide and fused caustic salts.",
              "High ductility and ease of cold forming and orbital welding."
            ],
            "applications": [
              "High-temperature caustic concentration evaporators",
              "Vinyl chloride monomer (VCM) thermal reactors",
              "Fluorochemical reactors",
              "Molten salt nuclear heat transfer loops"
            ],
            "specs": {
              "tensileStrength": "345 MPa (50 ksi) minimum",
              "yieldStrength": "70 MPa (10 ksi) minimum",
              "elongation": "40% minimum in 2 inches",
              "hardness": "HBW ≤ 120",
              "heatTreatment": "Annealed at 700°C - 900°C",
              "inspection": "EN 10204 Type 3.1 MTC / Carbon verification"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B564",
              "DIN 17750"
            ],
            "image": "assets/Product Section/Supplier division/Circle/nikle.webp"
          }
        ],
        "image": "assets/Product Section/Supplier division/Circle/nikle.webp",
        "fallback": "assets/Product Section/Supplier division/Circle/Stainless steel.png"
      },
      {
        "slug": "titanium",
        "name": "Titanium",
        "number": "07",
        "description": "Lightweight, ultra-corrosion-resistant titanium alloys delivering total immunity to marine seawater, wet chlorine, and organic chlorides with extraordinary strength-to-weight ratios.",
        "applicableStandards": "ASTM B381, ASTM B348, ASTM B861, ASME B16.5",
        "pressureClasses": "Class 150#, 300#, 600#, 900#",
        "sizeRange": "1/2\" NB to 24\" NB",
        "grades": [
          {
            "slug": "grade-2",
            "name": "Grade 2",
            "fullName": "Titanium Grade 2 (UNS R50400)",
            "designation": {
              "astm": "ASTM B381 / B348 Gr. 2",
              "asme": "ASME SB381",
              "uns": "UNS R50400",
              "en": "3.7035 (Ti2)"
            },
            "description": "The workhorse commercially pure titanium grade offering the optimum balance of moderate strength, high ductility, excellent weldability, and total seawater corrosion resistance.",
            "characteristics": [
              "Forms a tenacious, self-healing titanium dioxide (TiO2) passive oxide film instantly upon exposure to oxygen.",
              "Complete immunity to marine microbiologically influenced corrosion (MIC) and crevice attack.",
              "Approximately 45% lighter than steel, significantly reducing topside platform loads.",
              "Certified biocompatible for medical and food-contact installations."
            ],
            "applications": [
              "Seawater desalination reverse osmosis and multi-stage flash units",
              "Offshore oil platform seawater cooling systems",
              "Chlor-alkali electrolytic cell anode connections",
              "Bleaching towers in pulp and paper mills"
            ],
            "specs": {
              "tensileStrength": "345 MPa (50 ksi) minimum",
              "yieldStrength": "275 MPa (40 ksi) minimum",
              "elongation": "20% minimum in 2 inches",
              "hardness": "HBW ≤ 200",
              "heatTreatment": "Stress Relieved at 500°C - 550°C",
              "inspection": "EN 10204 3.1 / Gas analysis (C, O, N, H) verified"
            },
            "standards": [
              "ASME B16.5",
              "ASTM B381",
              "NACE MR0175 / ISO 15156"
            ],
            "image": "assets/Product Section/Supplier division/Circle/Titanium.png"
          },
          {
            "slug": "grade-5",
            "name": "Grade 5",
            "fullName": "Titanium Grade 5 (Ti-6Al-4V / UNS R56400)",
            "designation": {
              "astm": "ASTM B381 / B348 Gr. 5",
              "asme": "ASME SB381",
              "uns": "UNS R56400",
              "en": "3.7165 (Ti6Al4V)"
            },
            "description": "Alpha-beta titanium alloy containing 6% aluminum and 4% vanadium, delivering twice the mechanical tensile strength of commercially pure grades with high fatigue endurance.",
            "characteristics": [
              "Tensile strength exceeding 895 MPa (130 ksi) with low density of 4.43 g/cm³.",
              "Exceptional strength-to-weight ratio for aerospace and subsea structural bolting.",
              "Maintains mechanical properties up to 400°C while resisting high-velocity seawater erosion.",
              "Heat treatable by solution treating and aging (STA)."
            ],
            "applications": [
              "Subsea high-pressure wellhead riser bolts",
              "Aerospace hydraulic fluid connections",
              "High-speed marine hydrofoil fasteners",
              "Deepwater oceanographic exploration casings"
            ],
            "specs": {
              "tensileStrength": "895 MPa (130 ksi) minimum",
              "yieldStrength": "828 MPa (120 ksi) minimum",
              "elongation": "10% minimum in 2 inches",
              "hardness": "HRC 30 - 36",
              "heatTreatment": "Mill Annealed at 700°C - 785°C and air cooled",
              "inspection": "EN 10204 Type 3.1 MTC / Ultrasonic testing"
            },
            "standards": [
              "ASTM B381",
              "ASME B16.5",
              "AMS 4928",
              "NACE MR0175"
            ],
            "image": "assets/Product Section/Supplier division/Circle/Titanium.png"
          }
        ],
        "image": "assets/Product Section/Supplier division/Circle/Titanium.png",
        "fallback": "assets/Product Section/Supplier division/Circle/Stainless steel.png"
      },
      {
        "slug": "copper",
        "name": "Copper",
        "number": "08",
        "description": "Copper-nickel alloys, brasses, and pure copper engineered for high thermal/electrical conductivity, natural marine biofouling resistance, and naval piping circuits.",
        "applicableStandards": "ASTM B151, ASTM B171, ASTM B466, ASME B16.5, DIN 86019",
        "pressureClasses": "Class 150#, 300#, DIN PN10 - PN16",
        "sizeRange": "1/2\" NB to 24\" NB",
        "grades": [
          {
            "slug": "cu-ni-90-10",
            "name": "Cu-Ni 90/10",
            "fullName": "Copper-Nickel 90/10 (C70600)",
            "designation": {
              "astm": "ASTM B151 / B171 C70600",
              "asme": "ASME SB151 C70600",
              "uns": "UNS C70600",
              "en": "2.0872 (CuNi10Fe1Mn)"
            },
            "description": "90% copper, 10% nickel alloy formulated with controlled iron and manganese additions, delivering natural resistance to marine biofouling and seawater impingement erosion.",
            "characteristics": [
              "Natural antimicrobial and macro-fouling resistance; eliminates marine barnacle growth.",
              "High thermal conductivity for marine condensers and heat exchanger tubing.",
              "Resistant to stress corrosion cracking in high-salinity seawater.",
              "Readily brazeable and weldable by TIG and MIG processes."
            ],
            "applications": [
              "Naval warship seawater cooling mains",
              "Offshore platform firewater ring mains",
              "Commercial shipbuilding ballast piping",
              "Desalination multi-stage flash heat recovery tubes"
            ],
            "specs": {
              "tensileStrength": "310 MPa (45 ksi) minimum",
              "yieldStrength": "125 MPa (18 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW 70 - 100",
              "heatTreatment": "Annealed at 600°C - 750°C",
              "inspection": "EN 10204 Type 3.1 MTC / Eddy current inspection"
            },
            "standards": [
              "ASME B16.5",
              "EEMUA 145 / 234",
              "DIN 86019",
              "MIL-C-15726"
            ],
            "image": "assets/Product Section/Supplier division/Circle/exotic.jpg"
          },
          {
            "slug": "cu-ni-70-30",
            "name": "Cu-Ni 70/30",
            "fullName": "Copper-Nickel 70/30 (C71500)",
            "designation": {
              "astm": "ASTM B151 / B171 C71500",
              "asme": "ASME SB151 C71500",
              "uns": "UNS C71500",
              "en": "2.0882 (CuNi30Mn1Fe)"
            },
            "description": "70% copper, 30% nickel alloy engineered for higher seawater velocity tolerances (up to 4.5 m/s) and severe naval service where high impingement resistance is mandatory.",
            "characteristics": [
              "Permissible seawater flow velocity up to 4.5 m/s without protective film breakdown.",
              "Superior resistance to hydrogen embrittlement and sulfide stress cracking.",
              "Enhanced mechanical strength compared to 90/10 grade.",
              "Standard naval submarine and destroyer condenser specification."
            ],
            "applications": [
              "Submarine seawater intake systems",
              "High-velocity naval auxiliary condenser piping",
              "Offshore oil rig cooling manifolds",
              "Desalination brine heater bundles"
            ],
            "specs": {
              "tensileStrength": "380 MPa (55 ksi) minimum",
              "yieldStrength": "140 MPa (20 ksi) minimum",
              "elongation": "30% minimum in 2 inches",
              "hardness": "HBW 80 - 120",
              "heatTreatment": "Annealed at 650°C - 800°C",
              "inspection": "EN 10204 Type 3.1 MTC / Hydrostatic verification"
            },
            "standards": [
              "ASME B16.5",
              "EEMUA 145 / 234",
              "DIN 86019",
              "MIL-C-15726"
            ],
            "image": "assets/Product Section/Supplier division/Circle/exotic.jpg"
          }
        ],
        "image": "assets/Product Section/Supplier division/Circle/exotic.jpg",
        "fallback": "assets/Product Section/Supplier division/Circle/Stainless steel.png"
      },
      {
        "slug": "aluminium",
        "name": "Aluminium",
        "number": "09",
        "description": "High-strength wrought and extruded aluminium alloys delivering lightweight structural capability, high thermal dissipation, and cryogenic ductility for aerospace and marine service.",
        "applicableStandards": "ASTM B221, ASTM B241, ASTM B209, ASME B16.5",
        "pressureClasses": "Class 150#, PN10, PN16",
        "sizeRange": "1/2\" NB to 24\" NB",
        "grades": [
          {
            "slug": "6061-t6",
            "name": "6061-T6",
            "fullName": "6061-T6 Structural Aluminium",
            "designation": {
              "astm": "ASTM B221 / B241 Gr. 6061",
              "asme": "ASME SB221",
              "uns": "UNS A96061",
              "en": "3.3211 (AlMg1SiCu)"
            },
            "description": "Precipitation-hardened magnesium-silicon alloy delivering high structural yield strength, excellent CNC machinability, and clean surface anodizing characteristics.",
            "characteristics": [
              "High strength-to-weight ratio with density of only 2.70 g/cm³.",
              "Excellent atmospheric corrosion resistance in industrial environments.",
              "Readily machinable to tight geometric tolerances on multi-axis CNC machines.",
              "Excellent TIG/MIG weldability using 4043 or 5356 filler wires."
            ],
            "applications": [
              "Aerospace fuel and hydraulic fluid lines",
              "Cryogenic air separation plant piping",
              "Automotive racing fluid manifolds",
              "Precision robotic automation frames"
            ],
            "specs": {
              "tensileStrength": "290 MPa (42 ksi) minimum",
              "yieldStrength": "240 MPa (35 ksi) minimum",
              "elongation": "8% - 10% in 2 inches",
              "hardness": "HBW ~ 95",
              "heatTreatment": "Solution heat-treated and artificially aged (T6 temper)",
              "inspection": "EN 10204 Type 3.1 MTC / Conductivity check"
            },
            "standards": [
              "ASTM B221",
              "ASTM B241",
              "AMS 4027",
              "ASME B16.5"
            ],
            "image": "assets/Product Section/Supplier division/Circle/super duplex.webp"
          },
          {
            "slug": "5083-h116",
            "name": "5083-H116",
            "fullName": "5083-H116 Marine Aluminium",
            "designation": {
              "astm": "ASTM B209 / B221 Gr. 5083",
              "asme": "ASME SB209",
              "uns": "UNS A95083",
              "en": "3.3547 (AlMg4.5Mn0.7)"
            },
            "description": "High-magnesium marine alloy engineered specifically for exceptional corrosion resistance in seawater and cryogenic storage tanks down to -269°C without embrittlement.",
            "characteristics": [
              "The premier structural aluminium alloy for saltwater immersion.",
              "Maintains exceptional ductility and toughness at cryogenic temperatures down to liquid helium (-269°C).",
              "High weld joint efficiency without requiring post-weld solution treatment.",
              "Certified by DNV, Lloyd's Register, and ABS for marine construction."
            ],
            "applications": [
              "LNG/LPG cryogenic cargo tank piping",
              "High-speed marine ferry hull piping",
              "Naval radar mast structural flanges",
              "Chemical rail tanker vessels"
            ],
            "specs": {
              "tensileStrength": "305 MPa (44 ksi) minimum",
              "yieldStrength": "215 MPa (31 ksi) minimum",
              "elongation": "10% minimum in 2 inches",
              "hardness": "HBW ~ 85",
              "heatTreatment": "Strain-hardened and stabilized (H116 temper) for intergranular corrosion resistance",
              "inspection": "EN 10204 3.1 / Nitric Acid Mass Loss Test (NAMLT) to ASTM G67"
            },
            "standards": [
              "ASTM B209",
              "ASTM B221",
              "DNV-GL Marine Rules",
              "ASME Section VIII"
            ],
            "image": "assets/Product Section/Supplier division/Circle/super duplex.webp"
          }
        ],
        "image": "assets/Product Section/Supplier division/Circle/super duplex.webp",
        "fallback": "assets/Product Section/Supplier division/Circle/Stainless steel.png"
      }
    ]
  }
];

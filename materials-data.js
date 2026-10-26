/**
 * APOLLO FORGE & FITTING — COMPREHENSIVE INDUSTRIAL MATERIALS SYSTEM
 * 9 Metallurgical Families:
 * 1. Stainless Steel
 * 2. Carbon Steel
 * 3. Alloy Steel
 * 4. High Alloy Steel
 * 5. Nickel Alloys
 * 6. Copper
 * 7. Titanium
 * 8. Aluminium
 * 9. Duplex & Super Duplex (Combined)
 */

export const MATERIALS_MASTER_DATA = [
  {
    slug: 'stainless-steel',
    catalogSlug: 'stainless-steel',
    number: '01',
    name: 'Stainless Steel',
    eyebrow: 'AUSTENITIC, FERRITIC & MARTENSITIC HIGH-CORROSION ALLOYS',
    heroTag: 'ASTM A182 / A240 / A312 / A403 CERTIFIED STAINLESS',
    tagline: 'Superior corrosion resistance, exceptional surface integrity, and high-temperature oxidation strength for critical chemical, pharmaceutical, and offshore systems.',
    heroImage: '/assets/hero-products/flanges-hero.png',
    cardImage: '/assets/hero-products/flanges-hero.png',
    shortDescription: 'Chromium-nickel austenitic alloys providing superior corrosion resistance, cryogenic ductility, and high structural integrity across chemical and marine processing.',
    description: 'Stainless Steel is an iron alloy with a minimum of 10.5% chromium content, which forms a self-healing passive layer of chromium oxide providing peerless resistance to rust, oxidation, and acid attack. Apollo manufactures and exports complete piping packages across 300-series austenitic (304/304L, 316/316L, 321, 347, 310S) and 904L grades, certified under ASTM A182, A240, A312, and A403.',
    overview: {
      lead: 'Stainless steel components provide exceptional reliability across cryogenic-to-high temperature processing lines. With high ductility, impact toughness, and non-magnetic austenitic microstructures, our stainless products ensure zero contamination in sanitary pipelines and maximum durability in aggressive marine and acidic environments.',
      highlights: [
        {
          title: 'Chromium-Nickel Metallurgy',
          desc: '18/8 to 25/20 Cr-Ni composition ensuring passive oxide film stability and resistance to pitting and crevice corrosion.'
        },
        {
          title: 'Wide Temperature Window',
          desc: 'Maintains notch toughness at -196°C cryogenic temperatures and resists scaling up to 1150°C in high-temp grades (310/310S).'
        },
        {
          title: 'Sanitary & Cleanability',
          desc: 'Non-porous electropolished or pickle-passivated surfaces meeting US 3-A, FDA, and ASME BPE sanitary standards.'
        },
        {
          title: 'ASME / ASTM Certification',
          desc: '100% compliant with ASTM A182, A312, A403, A193, and EN 10204 3.1 inspection certification with complete heat tracking.'
        }
      ]
    },
    keyProperties: [
      'Pitting Resistance (PREN 18-35)',
      'Cryogenic Toughness to -196°C',
      'Tensile Strength: 515 - 750 MPa',
      'Non-Magnetic Austenitic Structure'
    ],
    commonGrades: ['SS 304 / 304L', 'SS 316 / 316L', 'SS 321 / 321H', 'SS 310 / 310S', 'SS 347 / 347H', 'SS 904L']
  },
  {
    slug: 'carbon-steel',
    catalogSlug: 'carbon-steel',
    number: '02',
    name: 'Carbon Steel',
    eyebrow: 'HEAVY-DUTY STRUCTURAL & PRESSURE-CONTAINMENT ALLOYS',
    heroTag: 'ASTM A105 / A234 WPB / A350 LF2 PRESSURE RATED',
    tagline: 'High yield strength, supreme weldability, and proven reliability for heavy-duty pipeline infrastructure, refining, and steam power generation.',
    heroImage: '/assets/flanges/types/carbon-steel-flanges.jpg',
    cardImage: '/assets/flanges/types/carbon-steel-flanges.jpg',
    shortDescription: 'High yield strength and proven toughness for heavy-duty piping, oil & gas transmission, refinery hydrocrackers, and steam boilers.',
    description: 'Carbon steel remains the industrial backbone for high-pressure fluid conveyance, structural containment, and boiler systems. Formulated with controlled carbon-manganese ratios and micro-alloying elements, our carbon steel products offer high yield strengths, excellent impact toughness at ambient and sub-zero temperatures, and straightforward weldability.',
    overview: {
      lead: 'Our carbon steel inventory encompasses forged high-pressure fittings, flanges, seamless pipes, and fasteners manufactured to ASTM A105, A234 WPB, A106 Grade B, and low-temperature A350 LF2 / A333 Grade 6. Each component undergoes rigorous heat treatment including normalizing and quenching to ensure grain refinement.',
      highlights: [
        {
          title: 'Low-Temperature Toughness',
          desc: 'ASTM A350 LF2 / A333 Gr 6 impact tested down to -46°C (-50°F) for Arctic and low-temp hydrocarbon service.'
        },
        {
          title: 'Extreme Pressure Containment',
          desc: 'Engineered for ASME B16.5 Class 150# through 2500# and API 6A 5,000 to 15,000 PSI high-pressure lines.'
        },
        {
          title: 'Optimized Carbon Equivalent',
          desc: 'Controlled CE (max 0.42%) ensuring exceptional weldability without pre-weld crack susceptibility.'
        },
        {
          title: 'NACE MR0175 / ISO 15156',
          desc: 'Sour gas compliant grades with HIC (Hydrogen Induced Cracking) and SSC resistance testing.'
        }
      ]
    },
    keyProperties: [
      'High Tensile Strength (485 - 650 MPa)',
      'Sub-Zero Toughness to -46°C (LF2)',
      'Exceptional Fatigue Resistance',
      'Cost-Effective Pressure Containment'
    ],
    commonGrades: ['ASTM A105', 'ASTM A234 WPB', 'ASTM A350 LF2', 'ASTM A106 Gr B', 'ASTM A333 Gr 6', 'AISI 1018 / 1045']
  },
  {
    slug: 'alloy-steel',
    catalogSlug: 'alloy-steel',
    number: '03',
    name: 'Alloy Steel',
    eyebrow: 'CHROMIUM-MOLYBDENUM ELEVATED TEMPERATURE & HIGH-STRENGTH ALLOYS',
    heroTag: 'ASTM A182 (F11, F22, F91) & ASTM A234 (WP11, WP22, WP91)',
    tagline: 'Engineered with chromium and molybdenum for creep strength, thermal endurance, and hydrogen embrittlement resistance in power and refining boilers.',
    heroImage: '/assets/Product Images/Flanges/alloy steel.jpg',
    cardImage: '/assets/Product Images/Flanges/alloy steel.jpg',
    shortDescription: 'Chromium-molybdenum metallurgy offering high creep-rupture strength and hydrogen attack resistance up to 650°C in power plants and refineries.',
    description: 'Alloy steels are enriched with chromium (Cr), molybdenum (Mo), vanadium (V), and manganese to enhance mechanical strength, hardenability, and creep-rupture resistance at operating temperatures up to 650°C (1200°F). Essential for superheaters, catalytic cracking units, and steam turbines.',
    overview: {
      lead: 'Apollo produces high-performance Cr-Mo alloy steel components in ASTM A182 (F11, F22, F5, F9, F91) and ASTM A234 (WP11, WP22, WP91). Chromium provides elevated-temperature scaling and oxidation resistance, while molybdenum maintains tensile and creep strength under continuous thermodynamic load.',
      highlights: [
        {
          title: 'High Creep Rupture Strength',
          desc: 'Resists thermal elongation and creep deformation under continuous load between 450°C and 650°C.'
        },
        {
          title: 'Hydrogen Attack Resistance',
          desc: 'Compliant with Nelson Curves for high-temperature, high-pressure hydrogen service in hydrocracker units.'
        },
        {
          title: 'Grade 91 (Cr-Mo-V)',
          desc: 'Modified 9Cr-1Mo-V-Nb metallurgy delivering double the allowable stress of standard Grade 22 alloys.'
        },
        {
          title: 'Certified Heat Treatment',
          desc: 'Normalized and tempered (N&T) microstructures with documented Charpy V-notch toughness.'
        }
      ]
    },
    keyProperties: [
      'Elevated Temp Service up to 650°C',
      'High Creep & Rupture Strength',
      'Yield Strength: 415 - 585 MPa',
      'Thermal Shock & Hydrogen Resistance'
    ],
    commonGrades: ['ASTM A182 F11', 'ASTM A182 F22', 'ASTM A182 F91', 'ASTM A234 WP11', 'ASTM A234 WP22', 'ASTM A234 WP91', 'AISI 4130 / 4140']
  },
  {
    slug: 'high-alloy-steel',
    catalogSlug: 'high-alloy',
    number: '04',
    name: 'High Alloy Steel',
    eyebrow: 'SEVERE CHEMICAL, CHLORIDE & OXIDATION RESISTANT SUPERALLOYS',
    heroTag: 'HASTELLOY C276 / C22 / ALLOY 20 SEVERE SERVICE',
    tagline: 'Extreme-service metallurgy combining molybdenum, tungsten, and chromium for aggressive wet chlorine, sulfuric acid, and flue gas desulfurization systems.',
    heroImage: '/assets/Product Images/Flanges/hastelloy.png',
    cardImage: '/assets/Product Images/Flanges/hastelloy.png',
    shortDescription: 'Specialty nickel-molybdenum-chromium alloys (Hastelloy, Alloy 20) providing extreme defense against mineral acids and localized pitting.',
    description: 'High Alloy Steels and specialty nickel-chromium-molybdenum superalloys are tailored for extreme industrial environments where standard stainless and alloy steels fail prematurely. Apollo supplies precision-forged components in Hastelloy C276, Hastelloy C22, Alloy 20, and Nitronic alloys designed for flue-gas scrubbers, chemical reactors, and acid leaching plants.',
    overview: {
      lead: 'Our high-alloy portfolio provides unmatched defense against localized corrosion, including pitting, crevice attack, and stress corrosion cracking in reducing and oxidizing media. The high molybdenum (up to 16%) and tungsten content in Hastelloy C276 prevents ferric and cupric chloride pitting.',
      highlights: [
        {
          title: 'Unmatched Pitting Resistance',
          desc: 'PREN exceeding 65, providing total immunity to pitting in high-chloride marine and bleaching media.'
        },
        {
          title: 'Broad Acid Compatibility',
          desc: 'Exceptional resistance to boiling sulfuric, hydrochloric, formic, and phosphoric acids.'
        },
        {
          title: 'Weld HAZ Stability',
          desc: 'Low carbon prevents grain boundary carbide precipitation during welding, maintaining corrosion resistance.'
        },
        {
          title: 'Strict Ultrasonic & NDT',
          desc: '100% volumetric and surface NDT testing for zero porosity in critical chemical reactor boundaries.'
        }
      ]
    },
    keyProperties: [
      'PREN > 65 (Extreme Pitting Immunity)',
      'Resistance to Boiling Mineral Acids',
      'Yield Strength: 355 - 620 MPa',
      'Grain-Boundary Carbide Stability'
    ],
    commonGrades: ['Hastelloy C-276 (UNS N10276)', 'Hastelloy C-22 (UNS N06022)', 'Alloy 20 (UNS N08020)', 'Hastelloy B-2', 'Nitronic 50 / 60']
  },
  {
    slug: 'nickel-alloys',
    catalogSlug: 'nickel',
    number: '05',
    name: 'Nickel Alloys',
    eyebrow: 'HIGH-TEMPERATURE CORROSION & REFRACTORY SUPERALLOYS',
    heroTag: 'INCONEL 625 / 718, MONEL 400 / K500, INCOLOY 800 / 825',
    tagline: 'Premier Inconel, Monel, Incoloy, and pure Nickel solutions for subsea extraction, aerospace gas turbines, and caustic alkali processing.',
    heroImage: '/assets/Product Images/Flanges/iconel.jpeg',
    cardImage: '/assets/Product Images/Flanges/iconel.jpeg',
    shortDescription: 'Inconel, Monel, Incoloy, and pure Nickel grades delivering immunity to chloride stress cracking, sour gas, and temperatures up to 1050°C.',
    description: 'Nickel-base superalloys represent the apex of material science for high-stress, high-temperature, and corrosive service. Featuring Inconel 625/718, Monel 400/K500, Incoloy 800/825, and pure Nickel 200/201, these alloys maintain mechanical integrity at temperatures exceeding 1000°C while resisting sour gas (H2S), sea water, and caustic alkalis.',
    overview: {
      lead: 'Apollo provides certified nickel alloy flanges, forged fittings, precision fasteners, and pipe spools for deepwater oilfields, nuclear reactors, and marine engineering. Monel 400 offers unmatched resistance to rapidly flowing sea water and hydrofluoric acid, while Inconel 625 delivers superior fatigue strength.',
      highlights: [
        {
          title: 'Deepwater Subsea Reliability',
          desc: 'Precipitation-hardened alloys (Inconel 718, Monel K500) with yield strengths exceeding 1000 MPa.'
        },
        {
          title: 'Stress Corrosion Cracking Immunity',
          desc: 'High nickel content (>50%) ensures complete immunity to chloride-induced stress corrosion cracking (CSCC).'
        },
        {
          title: 'Refractory Temperature Service',
          desc: 'Incoloy 800H/800HT engineered for thermal expansion control and carburization resistance to 1050°C.'
        },
        {
          title: 'Sour Service NACE Certified',
          desc: 'Fully qualified under NACE MR0175 / ISO 15156 for extreme sour gas (H2S + CO2 + chloride) wells.'
        }
      ]
    },
    keyProperties: [
      'Tensile Strength: 690 - 1350 MPa',
      'Immunity to Chloride SCC',
      'Refractory Service up to 1050°C',
      'Immunity to Rapid Flowing Seawater'
    ],
    commonGrades: ['Inconel 625 (UNS N06625)', 'Inconel 718 (UNS N07718)', 'Monel 400 (UNS N04400)', 'Monel K-500 (UNS N05500)', 'Incoloy 825 (UNS N08825)', 'Nickel 200 / 201']
  },
  {
    slug: 'copper',
    catalogSlug: 'copper',
    number: '06',
    name: 'Copper',
    eyebrow: 'COPPER-NICKEL & MARINE BIOFOULING-RESISTANT ALLOYS',
    heroTag: 'CU-NI 90/10 (C70600) & CU-NI 70/30 (C71500) NAVAL GRADE',
    tagline: 'Outstanding thermal conductivity, electrical performance, and natural anti-biofouling resistance for naval vessels, desalination plants, and heat exchangers.',
    heroImage: '/assets/Product Images/Flanges/copper-nickel.jpg',
    cardImage: '/assets/Product Images/Flanges/copper-nickel.jpg',
    shortDescription: 'Copper-nickel alloys (90/10 and 70/30) featuring natural anti-biofouling, high thermal conductivity, and seawater impingement resistance.',
    description: 'Copper and Copper-Nickel alloys (Cu-Ni 90/10 and Cu-Ni 70/30) offer a unique combination of high thermal and electrical conductivity, excellent corrosion resistance in seawater, and inherent macro-fouling resistance that prevents barnacle and algae attachment without toxic chemical coatings.',
    overview: {
      lead: 'Apollo manufactures copper-nickel flanges, butt weld fittings, condensers, and piping components primarily utilized across naval shipbuilding, coastal power plants, and reverse osmosis desalination. Cu-Ni 70/30 contains higher nickel and manganese, delivering increased impingement resistance against high-velocity seawater.',
      highlights: [
        {
          title: 'Natural Anti-Biofouling',
          desc: 'Continuous micro-release of copper ions prevents marine growth on pipe interiors, preserving pumping efficiency.'
        },
        {
          title: 'High Impingement Resistance',
          desc: 'Withstands water flow velocities up to 3.5 m/s (Cu-Ni 90/10) and 4.5 m/s (Cu-Ni 70/30) without erosion.'
        },
        {
          title: 'Stress Corrosion Immunity',
          desc: 'Completely immune to chloride-induced stress corrosion cracking in warm coastal and offshore environments.'
        },
        {
          title: 'Naval & Marine Standards',
          desc: 'Compliant with MIL-T-16420K, EEMUA 144/145/146, DIN 86019, and ASME SB466/SB151 standards.'
        }
      ]
    },
    keyProperties: [
      'Inherent Biofouling Protection',
      'High Thermal Conductivity',
      'Immunity to Chloride CSCC',
      'Velocities to 4.5 m/s in Seawater'
    ],
    commonGrades: ['Copper Nickel 90/10 (UNS C70600)', 'Copper Nickel 70/30 (UNS C71500)', 'Pure Electrolytic Copper (C10100 / C10200)', 'Naval Brass (C46400)']
  },
  {
    slug: 'titanium',
    catalogSlug: 'titanium',
    number: '07',
    name: 'Titanium',
    eyebrow: 'ULTRA-LIGHTWEIGHT, HIGH-STRENGTH & SEAWATER-IMMUNE METALLURGY',
    heroTag: 'ASTM B381 / B348 / B861 (GRADE 1, GRADE 2, GRADE 5)',
    tagline: 'High strength-to-weight ratio and absolute immunity to marine and wet chlorine corrosion for aerospace, subsea, and offshore exploration.',
    heroImage: '/assets/Product Images/Flanges/titanium.jpg',
    cardImage: '/assets/Product Images/Flanges/titanium.jpg',
    shortDescription: '45% lighter than steel with absolute immunity to seawater and chlorine pitting, serving aerospace, subsea systems, and chemical processing.',
    description: 'Titanium offers an extraordinary strength-to-weight ratio (45% lighter than steel at comparable strength) and an impenetrable, chemically inert titanium dioxide (TiO2) surface film. This passive barrier provides complete immunity to seawater, brine, chlorinated hydrocarbons, and oxidizing acids.',
    overview: {
      lead: 'Apollo supplies commercially pure Titanium (Grade 1, Grade 2) and alpha-beta structural alloys like Titanium Grade 5 (Ti-6Al-4V) across flanges, forgings, fasteners, and seamless piping. Grade 2 is the industrial workhorse for chemical processing, while Grade 5 delivers high tensile strength (up to 950 MPa).',
      highlights: [
        {
          title: '45% Weight Reduction',
          desc: 'Density of 4.51 g/cm³ compared to 7.9 g/cm³ for steel, drastically reducing offshore top-side platform loads.'
        },
        {
          title: 'Absolute Seawater Immunity',
          desc: 'Zero measurable corrosion rate in ambient seawater, brackish water, and high-chlorinated brine.'
        },
        {
          title: 'High-Strength Ti-6Al-4V (Grade 5)',
          desc: 'Yield strength exceeding 880 MPa with excellent fatigue life for downhole subsea tools and aerospace mounts.'
        },
        {
          title: 'ASTM B381 / B348 / B861',
          desc: 'Fully certified under aerospace and industrial ASTM/ASME specifications with helium leak testing.'
        }
      ]
    },
    keyProperties: [
      '45% Lighter than Steel (4.51 g/cm³)',
      'Tensile Strength: 345 - 950 MPa',
      'Total Seawater & Wet Chlorine Immunity',
      'Biocompatible & Non-Magnetic'
    ],
    commonGrades: ['Titanium Grade 1 (UNS R50250)', 'Titanium Grade 2 (UNS R50400)', 'Titanium Grade 5 Ti-6Al-4V (UNS R56400)', 'Titanium Grade 7 (with Palladium)']
  },
  {
    slug: 'aluminium',
    catalogSlug: 'aluminium',
    number: '08',
    name: 'Aluminium',
    eyebrow: 'LIGHTWEIGHT, DUCTILE & CRYOGENIC HIGH-CONDUCTIVITY ALLOYS',
    heroTag: 'ASTM B241 / B221 (6061-T6, 6082-T6, 5083-H111 MARINE)',
    tagline: 'Low-density structural solutions offering excellent thermal dissipation, atmospheric resistance, and low-temperature ductility for transport and cryogenic storage.',
    heroImage: '/assets/flanges/types/steel-flanges-types.jpg',
    cardImage: '/assets/flanges/types/steel-flanges-types.jpg',
    shortDescription: 'One-third the density of steel with exceptional cryogenic toughness and marine atmospheric corrosion resistance for transport and LNG systems.',
    description: 'Aluminium alloys combine lightweight density (one-third that of copper or steel), high electrical and thermal conductivity, excellent atmospheric corrosion resistance, and cryogenic ductility. Unlike carbon steel, aluminium becomes stronger and tougher as temperatures drop, making it ideal for LNG storage.',
    overview: {
      lead: 'Apollo produces precision aluminium pipes, tubes, structural flat bars, circles, and fasteners in 5000-series marine grades (5083, 5086) and 6000-series structural grades (6061-T6, 6082-T6). Al-Mg alloys provide superior resistance to marine atmospheres and salt spray.',
      highlights: [
        {
          title: 'Cryogenic LNG Excellence',
          desc: 'Exhibits no ductile-to-brittle transition; impact strength and ductility increase at cryogenic temperatures (-196°C).'
        },
        {
          title: 'Marine Grade 5083 / 5086',
          desc: 'Al-Mg alloy with exceptional resistance to saltwater corrosion and high post-weld joint efficiency.'
        },
        {
          title: 'Structural 6061-T6 / 6082-T6',
          desc: 'Precipitation-hardened alloys offering high strength-to-weight ratio for transport racks and structural frames.'
        },
        {
          title: 'ASTM B241 / B221 Certified',
          desc: 'Manufactured with tight dimensional tolerances and EN 10204 3.1 inspection documentation.'
        }
      ]
    },
    keyProperties: [
      'One-Third Density of Steel (2.7 g/cm³)',
      'Cryogenic Toughness (No Brittle Point)',
      'Excellent Thermal Conductivity',
      'Marine Atmospheric Salt-Spray Defense'
    ],
    commonGrades: ['Aluminium 6061-T6', 'Aluminium 6082-T6', 'Aluminium 5083-H111 (Marine)', 'Aluminium 5086', 'Aluminium 7075-T6', 'Aluminium 2024-T4']
  },
  {
    slug: 'duplex-super-duplex',
    catalogSlug: 'duplex',
    number: '09',
    name: 'Duplex & Super Duplex',
    eyebrow: 'BIPHASIC AUSTENITIC-FERRITIC HIGH-STRENGTH CORROSION RESISTANT ALLOYS',
    heroTag: 'DUPLEX 2205 (S31803 / S32205) & SUPER DUPLEX 2507 (S32750 / S32760)',
    tagline: 'Twice the mechanical yield strength of standard austenitic stainless steel with supreme resistance to chloride stress corrosion cracking in offshore oil & gas.',
    heroImage: '/assets/Product Images/Flanges/super duplex.jpg',
    cardImage: '/assets/Product Images/Flanges/super duplex.jpg',
    shortDescription: 'Dual-phase austenitic-ferritic structure offering double the yield strength of 316 stainless and PREN ≥ 42 immunity to chloride cracking in offshore pipelines.',
    description: 'Duplex and Super Duplex stainless steels possess a balanced 50/50 two-phase metallurgical microstructure of austenite and ferrite. This hybrid microstructural geometry provides double the yield strength of standard 300-series stainless steels, coupled with high resistance to chloride stress corrosion cracking, crevice corrosion, and pitting in extreme marine environments.',
    overview: {
      lead: 'Apollo specializes in high-integrity Duplex 2205 (UNS S31803 / S32205) and Super Duplex 2507 (UNS S32750 / S32760 / Zeron 100). With Pitting Resistance Equivalent Numbers (PREN) ranging from 35 to over 43, these alloys deliver vital containment for subsea flowlines, offshore riser systems, and reverse osmosis plants.',
      highlights: [
        {
          title: 'Double the Mechanical Strength',
          desc: 'Minimum yield strength of 450 - 550 MPa, allowing design engineers to down-gauge wall thicknesses.'
        },
        {
          title: 'High Pitting Resistance (PREN ≥ 42)',
          desc: 'Super Duplex grades (2507, Zeron 100) achieve PREN ≥ 42 for immunity to warm chlorinated seawater pitting.'
        },
        {
          title: 'Chloride SCC Immunity',
          desc: 'The ferritic phase provides exceptional resistance to chloride stress corrosion cracking at temperatures up to 250°C.'
        },
        {
          title: 'NORSOK M-650 & M-630',
          desc: 'Manufactured under stringent phase balance inspection (35-55% ferrite) and ASTM A923 intermetallic detection.'
        }
      ]
    },
    keyProperties: [
      'Double Yield Strength of Austenitic SS (≥450-550 MPa)',
      'PREN ≥ 35 (Duplex) & PREN ≥ 42 (Super Duplex)',
      'Chloride SCC Immunity in Sour Hydrocarbons',
      'Phase Balance Certified (40-60% Ferrite/Austenite)'
    ],
    commonGrades: ['Duplex 2205 (UNS S31803 / S32205)', 'Super Duplex 2507 (UNS S32750)', 'Super Duplex UNS S32760 (Zeron 100)', 'Lean Duplex 2101 / 2304']
  }
];

/**
 * Normalized slug aliases for flexible routing
 */
export const MATERIAL_SLUG_ALIASES = {
  'duplex': 'duplex-super-duplex',
  'super-duplex': 'duplex-super-duplex',
  'duplex-steel': 'duplex-super-duplex',
  'high-alloy': 'high-alloy-steel',
  'high-alloys': 'high-alloy-steel',
  'nickel': 'nickel-alloys',
  'nickel-alloy': 'nickel-alloys',
  'copper-nickel': 'copper',
  'cu-ni': 'copper',
  'aluminum': 'aluminium'
};

/**
 * Resolve material master item by slug
 */
export function getMaterialMaster(slug) {
  if (!slug) return null;
  const raw = slug.toLowerCase().trim();
  const normalized = MATERIAL_SLUG_ALIASES[raw] || raw;
  return MATERIALS_MASTER_DATA.find(m => m.slug === normalized || m.catalogSlug === raw) || null;
}

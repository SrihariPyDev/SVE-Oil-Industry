// ============================================================
// PRODUCTS DATA — All 25 products for Sri Venkateswara Enterprises
// Replace imageUrl placeholders with real product photos.
// Recommended image size: 600×400px
// ============================================================

export interface Product {
  id: string;
  name: string;
  shortDesc: string;
  description: string;
  applications: string[];
  benefits: string[];
  characteristics: string[];
  // Replace with real product images
  imageUrl: string;
  icon: string; // emoji fallback icon
  category: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "hydraulic-oil",
    name: "Hydraulic Oil",
    shortDesc:
      "High-performance hydraulic fluids for industrial machinery and mobile equipment.",
    description:
      "Hydraulic oils are specially formulated mineral-based or synthetic fluids designed to transmit power efficiently within hydraulic systems. Our hydraulic oils offer excellent oxidation stability, anti-wear properties, and foam suppression to ensure long system life and reliable performance under high pressure and varying temperature conditions.",
    applications: [
      "Industrial hydraulic systems",
      "CNC machines and machining centres",
      "Presses and forming machines",
      "Mobile hydraulic equipment",
      "Construction and earthmoving machinery",
      "Injection moulding machines",
    ],
    benefits: [
      "Excellent anti-wear protection for pumps and valves",
      "High thermal and oxidation stability",
      "Effective foam control and air release",
      "Protects against rust and corrosion",
      "Compatible with most seals and gaskets",
    ],
    characteristics: [
      "Clear to amber coloured fluid",
      "Available in various ISO viscosity grades",
      "Low pour point for cold-start performance",
      "Good filterability for clean system operation",
    ],
    imageUrl: "/images/products/hydraulic_oil.png",
    icon: "⚙️",
    category: "Industrial Oils",
  },
  {
    id: "cutting-oil",
    name: "Cutting Oil",
    shortDesc:
      "Precision metalworking fluids for superior surface finish and tool life.",
    description:
      "Cutting oils are engineered metalworking fluids used during machining operations to reduce heat and friction at the cutting interface. Our cutting oils provide excellent lubrication and cooling, helping to extend tool life, improve surface finish quality, and maintain dimensional accuracy of machined components.",
    applications: [
      "Turning and milling operations",
      "Drilling and boring",
      "Grinding and honing",
      "Thread cutting and tapping",
      "Broaching operations",
      "High-speed machining centres",
    ],
    benefits: [
      "Significantly extends tool life",
      "Improves surface finish quality",
      "Effective heat dissipation during machining",
      "Reduces cutting forces and power consumption",
      "Prevents built-up edge on cutting tools",
    ],
    characteristics: [
      "Excellent lubricity and cooling properties",
      "Suitable for ferrous and non-ferrous metals",
      "Low mist formation",
      "Good corrosion protection for workpieces",
    ],
    imageUrl: "/images/products/cutting_oil.png",
    icon: "🔧",
    category: "Metalworking Fluids",
  },
  {
    id: "gear-oil",
    name: "Gear Oil",
    shortDesc:
      "Heavy-duty gear lubricants for gearboxes, differentials, and industrial drives.",
    description:
      "Gear oils are high-viscosity lubricants specially formulated with extreme pressure (EP) additives to protect heavily loaded gear contacts. Our gear oils provide outstanding protection against wear, scuffing, and micropitting in industrial gearboxes, helping to maintain smooth power transmission and extend equipment service life.",
    applications: [
      "Enclosed industrial gearboxes",
      "Worm gear drives",
      "Open gears and bull gears",
      "Steel mill drives",
      "Cement mill drives",
      "Conveyor gearboxes",
    ],
    benefits: [
      "Superior extreme pressure protection",
      "Prevents micropitting and gear wear",
      "Extended oil drain intervals",
      "Excellent thermal stability",
      "Compatible with most seal materials",
    ],
    characteristics: [
      "High viscosity index",
      "Strong EP additive package",
      "Good oxidation resistance",
      "Excellent low-temperature fluidity",
    ],
    imageUrl: "/images/products/gear_oil.png",
    icon: "⚡",
    category: "Industrial Oils",
  },
  {
    id: "rust-preventive-oil",
    name: "Rust Preventive Oil",
    shortDesc:
      "Protective coatings to guard metal surfaces against corrosion and rust.",
    description:
      "Rust preventive oils form a thin, durable protective film on metal surfaces to prevent corrosion during storage, transit, and inter-process periods. Our rust preventive products are available in various film strengths — from soft film for short-term indoor protection to hard film for long-term outdoor storage.",
    applications: [
      "Finished machined components",
      "Sheet metal and stamped parts",
      "Long-term storage of ferrous components",
      "Inter-process protection in manufacturing",
      "Export packaging protection",
      "Tooling and die protection",
    ],
    benefits: [
      "Effective protection against humidity and moisture",
      "Easy to apply by dipping, spraying, or brushing",
      "Thin film does not affect dimensional accuracy",
      "Water displacing formulations available",
      "Easy removal before further processing",
    ],
    characteristics: [
      "Available in solvent-based and oil-based versions",
      "Short, medium, and long-term protection grades",
      "Transparent to amber film colour",
      "Excellent adhesion to metal surfaces",
    ],
    imageUrl: "/images/products/rust_preventive_oil.png",
    icon: "🛡️",
    category: "Protective Oils",
  },
  {
    id: "neat-cutting-oil",
    name: "Neat Cutting Oil",
    shortDesc:
      "Undiluted cutting fluids for demanding machining of difficult materials.",
    description:
      "Neat cutting oils are undiluted, mineral-based cutting fluids providing maximum lubrication during heavy-duty or precision machining operations. Unlike water-soluble coolants, neat cutting oils are used directly without dilution, making them ideal for difficult-to-machine materials and operations requiring superior surface finish.",
    applications: [
      "Gear hobbing and shaping",
      "Thread grinding and rolling",
      "Broaching of difficult alloys",
      "Swiss-type automatic turning",
      "Honing of bores and cylinders",
      "Deep hole drilling",
    ],
    benefits: [
      "Maximum lubrication at the cutting zone",
      "Excellent surface finish on precision components",
      "Suitable for difficult-to-machine materials",
      "Long tool life in demanding operations",
      "Good rust protection for machined components",
    ],
    characteristics: [
      "Used without dilution",
      "High lubricity additive package",
      "Low sulphur grades available for non-ferrous metals",
      "Excellent stability and long service life",
    ],
    imageUrl: "/images/products/neat_cutting_oil.png",
    icon: "💧",
    category: "Metalworking Fluids",
  },
  {
    id: "engine-oil",
    name: "Engine Oil",
    shortDesc:
      "Premium engine lubricants for industrial engines, generators, and vehicles.",
    description:
      "Engine oils are the lifeblood of internal combustion engines, providing lubrication, cooling, cleaning, and protection to engine components. Our engine oils cover a range of industrial and automotive applications, formulated to meet modern engine requirements for reduced wear, extended drain intervals, and fuel efficiency.",
    applications: [
      "Industrial diesel engines",
      "Generator sets and power plants",
      "Commercial vehicles and fleets",
      "Stationary engines",
      "Agricultural machinery",
      "Marine auxiliary engines",
    ],
    benefits: [
      "Effective protection against engine wear",
      "Excellent detergency to keep engines clean",
      "Controls sludge and varnish deposits",
      "Suitable for extended oil drain intervals",
      "Compatible with modern emission control systems",
    ],
    characteristics: [
      "Available in various SAE viscosity grades",
      "Mono and multigrade formulations",
      "Mineral, semi-synthetic, and full synthetic options",
      "Meets major OEM and API specifications",
    ],
    imageUrl: "/images/products/engine_oil.png",
    icon: "🏭",
    category: "Engine Lubricants",
  },
  {
    id: "specialty-oils",
    name: "Specialty Oils",
    shortDesc:
      "Purpose-formulated specialty lubricants for unique industrial requirements.",
    description:
      "Specialty oils are purpose-formulated lubricants designed for specific industrial processes or equipment types that require properties beyond standard lubricants. These include food-grade oils, white mineral oils, process oils, chain oils, and other tailored solutions for specialised industrial applications.",
    applications: [
      "Food and beverage processing equipment",
      "Textile machinery",
      "Chain lubrication systems",
      "Specialty manufacturing processes",
      "Precision instruments",
      "Electronics manufacturing",
    ],
    benefits: [
      "Formulated for specific application requirements",
      "Meets special industry or regulatory standards",
      "Optimised for unique operating conditions",
      "Long service life in target applications",
      "Compatible with sensitive materials and substrates",
    ],
    characteristics: [
      "Customised viscosity and additive profiles",
      "Application-specific formulations",
      "Wide viscosity range available",
      "Available in various pack sizes",
    ],
    imageUrl: "/images/products/specialty_oil.png",
    icon: "✨",
    category: "Specialty Products",
  },
  {
    id: "transformer-oil",
    name: "Transformer Oil",
    shortDesc:
      "Insulating and cooling oils for power transformers and electrical equipment.",
    description:
      "Transformer oils are highly refined mineral oils serving as both electrical insulators and cooling media in power transformers, switchgear, and other high-voltage electrical equipment. Our transformer oils maintain excellent dielectric strength, thermal stability, and low pour point properties to ensure reliable electrical infrastructure performance.",
    applications: [
      "Power distribution transformers",
      "High-voltage switchgear",
      "Oil circuit breakers",
      "Capacitors and reactors",
      "Instrument transformers",
      "Power grid infrastructure",
    ],
    benefits: [
      "High dielectric breakdown strength",
      "Excellent thermal conductivity for effective cooling",
      "Very low pour point for cold climate operation",
      "Good oxidation stability for long service life",
      "Meets national and international standards",
    ],
    characteristics: [
      "Highly refined naphthenic or paraffinic base",
      "Very low water content",
      "High flash point for safety",
      "Meets IEC 60296 and IS 335 standards",
    ],
    imageUrl: "/images/products/transformer_oil.png",
    icon: "🔌",
    category: "Electrical Oils",
  },
  {
    id: "spindle-oil",
    name: "Spindle Oil",
    shortDesc:
      "Ultra-low viscosity oils for high-speed precision machine tool spindles.",
    description:
      "Spindle oils are very low viscosity lubricants designed for the lubrication of high-speed grinding spindles, precision machine tool spindles, and other precision bearings requiring minimal friction and heat generation. Their excellent film strength and low viscosity ensure dependable performance at extreme operating speeds.",
    applications: [
      "Precision grinding machine spindles",
      "CNC machining centre spindles",
      "High-speed internal grinders",
      "Precision instrument bearings",
      "Textile machinery spindles",
      "Thread rolling and forming machines",
    ],
    benefits: [
      "Minimal friction at high operating speeds",
      "Excellent film strength despite low viscosity",
      "Good heat dissipation from bearing zones",
      "Extended bearing service life",
      "Good corrosion protection for precision components",
    ],
    characteristics: [
      "Very low viscosity (ISO VG 2–22 typical)",
      "Excellent oxidation stability",
      "High viscosity index",
      "Good demulsibility properties",
    ],
    imageUrl: "/images/products/spindle_oil.png",
    icon: "🔩",
    category: "Precision Lubricants",
  },
  {
    id: "heat-transfer-oil",
    name: "Heat Transfer Oil",
    shortDesc:
      "Thermal fluids for indirect heating systems and high-temperature processes.",
    description:
      "Heat transfer oils (thermal fluids) are specially formulated mineral or synthetic oils used as heat carriers in closed-loop heating systems. They operate efficiently over a wide temperature range, providing stable and uniform heat distribution to industrial processes without the safety risks associated with high-pressure steam systems.",
    applications: [
      "Textile dyeing and processing",
      "Chemical and pharmaceutical processing",
      "Food processing and drying",
      "Plastics and rubber processing",
      "Wood and particleboard presses",
      "Industrial heating systems",
    ],
    benefits: [
      "Wide operating temperature range",
      "Excellent thermal stability at high temperatures",
      "Low vapour pressure reduces system pressure risk",
      "Good pumpability at cold start-up",
      "Long fluid service life with proper maintenance",
    ],
    characteristics: [
      "Mineral or synthetic base options",
      "Operating range up to 300°C+ (grade dependent)",
      "Low residue formation tendency",
      "Good compatibility with system materials",
    ],
    imageUrl: "/images/products/heat_transfer_oil.png",
    icon: "🌡️",
    category: "Process Fluids",
  },
  {
    id: "turbine-oil",
    name: "Turbine Oil",
    shortDesc:
      "High-purity turbine lubricants for steam, gas, and hydraulic turbines.",
    description:
      "Turbine oils are highly refined, premium lubricants designed for the demanding requirements of steam turbines, gas turbines, and turbochargers. They provide outstanding oxidation stability, water separation characteristics, and long service life to ensure continuous and reliable operation of power generation and industrial turbine installations.",
    applications: [
      "Steam turbines in power plants",
      "Gas turbines and combined cycle plants",
      "Industrial turbochargers",
      "Large electric motor bearings",
      "Hydraulic governors and control systems",
      "Paper mill drives",
    ],
    benefits: [
      "Outstanding resistance to oxidation and thermal degradation",
      "Excellent water separation (demulsibility)",
      "Long oil service life reduces maintenance costs",
      "Effective rust and corrosion protection",
      "Low foam tendency for reliable lubrication",
    ],
    characteristics: [
      "Highly refined paraffinic base oils",
      "Inhibited with premium antioxidant package",
      "Excellent filterability",
      "Meets major turbine OEM specifications",
    ],
    imageUrl: "/images/products/turbine_oil.png",
    icon: "🌀",
    category: "Industrial Oils",
  },
  {
    id: "quenching-oil",
    name: "Quenching Oil",
    shortDesc:
      "Controlled heat treatment oils for hardening of steel and metal components.",
    description:
      "Quenching oils are thermal treatment fluids used in heat treatment processes for hardening of steel and metal components. They provide controlled cooling rates during the quenching phase of heat treatment, ensuring proper metallurgical transformation, minimising distortion, and reducing the risk of cracking in heat-treated components.",
    applications: [
      "Hardening of tool steels",
      "Carburising and carbonitriding",
      "Case hardening of gears and shafts",
      "Spring and fastener heat treatment",
      "Bearing ring hardening",
      "Heat treatment of alloy steel components",
    ],
    benefits: [
      "Controlled cooling rates for predictable hardness",
      "Minimises distortion and warping of components",
      "Reduces risk of cracking during quench",
      "Good thermal stability for consistent performance",
      "Long bath life with proper maintenance",
    ],
    characteristics: [
      "Mineral oil based with performance additives",
      "Cold and hot quench grades available",
      "Good resistance to sludge formation",
      "Low smoke and vapour tendency",
    ],
    imageUrl: "/images/products/quenching_oil.png",
    icon: "🔥",
    category: "Process Fluids",
  },
  {
    id: "compressor-oil",
    name: "Compressor Oil",
    shortDesc:
      "Specialised lubricants for rotary screw, reciprocating, and centrifugal compressors.",
    description:
      "Compressor oils are purpose-formulated lubricants designed to meet the specific demands of industrial air and gas compressors. They must resist oxidation at elevated temperatures, prevent carbon and deposit formation, maintain viscosity under pressure, and protect compressor components against wear and corrosion.",
    applications: [
      "Rotary screw air compressors",
      "Reciprocating air compressors",
      "Centrifugal compressors",
      "Gas and refrigeration compressors",
      "Vacuum pumps",
      "Industrial air supply systems",
    ],
    benefits: [
      "Excellent oxidation stability at high temperatures",
      "Prevents carbon and lacquer deposit formation",
      "Effective anti-wear protection for compressor components",
      "Long service life reduces maintenance frequency",
      "Good rust and corrosion protection",
    ],
    characteristics: [
      "Mineral, synthetic PAO, or ester-based options",
      "High flash point for compressor safety",
      "Good air release and foam suppression",
      "Meets major compressor manufacturer specifications",
    ],
    imageUrl: "/images/products/compressor_oil.png",
    icon: "💨",
    category: "Industrial Oils",
  },
  {
    id: "grease",
    name: "Grease",
    shortDesc:
      "Multi-purpose and industrial greases for bearings, joints, and chassis points.",
    description:
      "Industrial greases are semi-solid lubricants consisting of a base oil, thickener, and performance additives. They are used where continuous oil lubrication is impractical, providing durable lubrication for rolling element bearings, plain bearings, joints, pins, and various other industrial applications requiring long-lasting protection.",
    applications: [
      "Rolling element bearings",
      "Plain bearings and bushings",
      "Electric motor bearings",
      "Automotive chassis and joints",
      "Conveyor and transport equipment",
      "General industrial lubrication points",
    ],
    benefits: [
      "Stays in place without running or dripping",
      "Provides long-term protection between relubrication intervals",
      "Effective sealing against water and contaminants",
      "Wide operating temperature range",
      "Available in NLGI grades 0 to 3",
    ],
    characteristics: [
      "Lithium, calcium, or polyurea thickener systems",
      "Good mechanical stability",
      "Resistant to water washout",
      "Compatible with most seal materials",
    ],
    imageUrl: "/images/products/grease_oil.png",
    icon: "🔧",
    category: "Greases",
  },
  {
    id: "specialty-greases",
    name: "Specialty Greases",
    shortDesc:
      "High-performance specialty greases for extreme conditions and unique applications.",
    description:
      "Specialty greases are advanced lubrication products formulated for operating conditions that exceed the capabilities of conventional greases. These include high-temperature greases, EP greases for heavily loaded applications, food-grade greases, electrical contact greases, and other specialised formulations for demanding industrial environments.",
    applications: [
      "High-temperature furnace and kiln applications",
      "Open gears and wire rope lubrication",
      "Extreme pressure conveyor applications",
      "Food processing and beverage equipment",
      "Electrical connections and switchgear",
      "Marine and offshore equipment",
    ],
    benefits: [
      "Effective lubrication in extreme temperature ranges",
      "Superior load carrying in high-stress applications",
      "Meets specific industry standards and regulations",
      "Extended relubrication intervals in demanding conditions",
      "Tailored for specific equipment and environments",
    ],
    characteristics: [
      "Various thickener systems for specific needs",
      "Synthetic or mineral base oils",
      "Special EP and anti-wear additive packages",
      "Application-specific formulations",
    ],
    imageUrl: "/images/products/specialty_greases_oil.png",
    icon: "⭐",
    category: "Greases",
  },
];

export const PRODUCT_CATEGORIES = [
  "All",
  "Industrial Oils",
  "Metalworking Fluids",
  "Protective Oils",
  "Engine Lubricants",
  "Specialty Products",
  "Electrical Oils",
  "Precision Lubricants",
  "Process Fluids",
  "Greases",
];

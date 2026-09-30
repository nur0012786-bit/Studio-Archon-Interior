import { studioImages } from './assets';

export interface Project {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Hospitality';
  location: string;
  year: string;
  area: string;
  summary: string;
  image: string;
  gallery: string[];
  challenge: string;
  approach: string;
  materials: string[];
  scope: string[];
}

export interface Service {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  iconName: string;
  timeline: string;
}

export interface JournalPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  content: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  projectType: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'west-village-residence',
    title: 'West Village Residence',
    category: 'Residential',
    location: 'New York, NY',
    year: '2025',
    area: '2,800 sq ft',
    summary: 'A refined historic brownstone reimagined with understated lime plaster, custom white oak joinery, and sculptural seating.',
    image: studioImages.featured,
    gallery: [studioImages.featured, studioImages.hero, studioImages.journalMaterials],
    challenge: 'Preserving the original 19th-century architectural moldings while establishing a serene, open flow filled with natural light for an art collector couple.',
    approach: 'We stripped back layered historical renovations to reveal raw masonry and floor joists, contrasting them against silky lime plaster surfaces, honed Roman travertine, and tactile bouclé textiles.',
    materials: ['Honed Travertine', 'Fumed White Oak', 'Textured Lime Plaster', 'Cast Bronze Hardware'],
    scope: ['Complete Architectural Remodel', 'Custom Kitchen & Joinery', 'Curated Art & Vintage Furnishings', 'Lighting Design'],
  },
  {
    id: 'oak-and-stone-residence',
    title: 'Oak & Stone Residence',
    category: 'Residential',
    location: 'Austin, TX',
    year: '2025',
    area: '4,200 sq ft',
    summary: 'Warm minimalism meets Texas limestone in a sun-drenched sanctuary centered on seamless indoor-outdoor living.',
    image: studioImages.oakStone,
    gallery: [studioImages.oakStone, studioImages.consultation, studioImages.about],
    challenge: 'Taming intense afternoon heat while celebrating sprawling Hill Country views and creating intimate, grounded spaces for family life.',
    approach: 'Constructed monolithic dry-stack limestone walls that cut through the floor plan, paired with deep overhangs, raw linen drapery, and custom white oak island millwork.',
    materials: ['Texas Cream Limestone', 'Wire-Brushed Oak', 'Unlacquered Brass', 'Belgian Linen'],
    scope: ['Interior Architecture & Planning', 'Kitchen & Bath Millwork', 'FF&E Selection', 'Turnkey Installation'],
  },
  {
    id: 'the-modern-retreat',
    title: 'The Modern Retreat',
    category: 'Hospitality',
    location: 'Big Sur, CA',
    year: '2024',
    area: '6,500 sq ft',
    summary: 'An architectural lodge embedded into coastal cliffs, designed with weathered cedar and panoramic ocean vistas.',
    image: studioImages.modernRetreat,
    gallery: [studioImages.modernRetreat, studioImages.panoramic, studioImages.hero],
    challenge: 'Designing a boutique 8-suite retreat that withstands marine fog while providing supreme acoustic quiet and tactile warmth.',
    approach: 'We wrapped guest suites in western red cedar and acoustically dampened wool wall-hangings, pairing low platform beds with custom cast-iron fireplaces.',
    materials: ['Aged Red Cedar', 'Basalt Stone Slab', 'Raw Sheep Wool', 'Blackened Steel'],
    scope: ['Hospitality Concept Design', 'Guest Suite Architecture', 'Bespoke Furniture Manufacturing', 'Acoustic Strategy'],
  },
  {
    id: 'forma-workspace',
    title: 'Forma Workspace',
    category: 'Commercial',
    location: 'Chicago, IL',
    year: '2025',
    area: '5,100 sq ft',
    summary: 'A calm, residential-inspired studio for an investment advisory group prioritizing wellness, focus, and quiet elegance.',
    image: studioImages.formaWorkspace,
    gallery: [studioImages.formaWorkspace, studioImages.about, studioImages.consultation],
    challenge: 'Moving away from cold glass office sterility to create an environment as welcoming, tactile, and quiet as a private residence.',
    approach: 'Introduced acoustic fluted walnut paneling, diffused cove lighting that mimics daylight cycles, caramel saddle leather seating, and sound-absorbing limestone rugs.',
    materials: ['Fluted American Walnut', 'Honed Quartzite', 'Saddle Leather', 'Textured Acoustic Plaster'],
    scope: ['Commercial Space Planning', 'Executive Boardroom Architecture', 'Custom Millwork', 'Curated Lighting'],
  },
];

export const SERVICE_STRIP = [
  {
    title: 'Residential Design',
    description: 'Homes designed around the people who live in them.',
    id: 'residential-design',
  },
  {
    title: 'Commercial Design',
    description: 'Distinctive spaces built for modern businesses.',
    id: 'commercial-design',
  },
  {
    title: 'Space Planning',
    description: 'Better flow, proportion, and functionality.',
    id: 'space-planning',
  },
  {
    title: '3D Visualization',
    description: 'See the design before construction begins.',
    id: '3d-visualization',
  },
  {
    title: 'Turnkey Interiors',
    description: 'From concept to final installation.',
    id: 'turnkey-interiors',
  },
];

export const SERVICES: Service[] = [
  {
    id: 'interior-design',
    number: '01',
    title: 'Interior Design',
    shortDesc: 'Comprehensive concept, spatial mood, color narratives, and curated selections for timeless spaces.',
    fullDesc: 'We guide you through a holistic design journey that defines the essence of your home or workspace. From material palettes and custom millwork to furniture procurement and art curation, every decision honors comfort and beauty.',
    deliverables: [
      'Comprehensive mood and material boards',
      'Custom furniture & lighting plans',
      'Textile, finish, and hardware specifications',
      'Art curation & styling accessories',
    ],
    iconName: 'Compass',
    timeline: '6–14 Weeks',
  },
  {
    id: 'interior-architecture',
    number: '02',
    title: 'Interior Architecture',
    shortDesc: 'Structural reconfiguration, custom millwork, ceiling architecture, and high-precision spatial envelopes.',
    fullDesc: 'Interiors begin with bone structure. We redesign interior layouts, resolve complex spatial transitions, engineer bespoke cabinetry, and sculpt ceiling and lighting plans that heighten every volume.',
    deliverables: [
      'Demolition & construction drawings',
      'Full architectural millwork packages',
      'Reflected ceiling & electrical layout plans',
      'Kitchen & bath detailed technical drawings',
    ],
    iconName: 'Layers',
    timeline: '8–16 Weeks',
  },
  {
    id: 'space-planning',
    number: '03',
    title: 'Space Planning',
    shortDesc: 'Mastering circulation, visual sightlines, furniture scale, and everyday spatial ergonomics.',
    fullDesc: 'We analyze circulation pathways, natural daylight patterns, and lifestyle rituals to ensure your floor plan maximizes every square foot while creating an unhurried, intuitive rhythm.',
    deliverables: [
      'Multiple 2D layout variations',
      'Circulation and ergonomic flow analysis',
      'Scale and proportion furniture footprint studies',
      'Zoning for living, resting, and working',
    ],
    iconName: 'LayoutGrid',
    timeline: '3–6 Weeks',
  },
  {
    id: '3d-visualization',
    number: '04',
    title: '3D Visualization',
    shortDesc: 'Photorealistic architectural renderings that bring materials, lighting, and finishes to life before build.',
    fullDesc: 'Experience your space with total clarity before construction commences. Our studio creates photorealistic CGI renderings, accurate lighting simulations, and panoramic walk-throughs to de-risk design choices.',
    deliverables: [
      'High-resolution photorealistic renderings',
      'Daylight and nighttime lighting studies',
      'Material swatch accuracy checks',
      'Interactive 360-degree panorama perspectives',
    ],
    iconName: 'Box',
    timeline: '2–4 Weeks',
  },
  {
    id: 'custom-furniture',
    number: '05',
    title: 'Custom Furniture & Styling',
    shortDesc: 'Bespoke joinery, tailored upholstery, and artisan sourcing crafted specifically for your rooms.',
    fullDesc: 'When standard dimensions and retail pieces compromise your vision, our studio crafts bespoke sofas, dining tables, consoles, and architectural lighting in partnership with master craftspeople across Europe and North America.',
    deliverables: [
      'Shop drawing design specifications',
      'Artisan and maker coordination',
      'Direct wood, stone, and upholstery sourcing',
      'White-glove delivery and spatial styling',
    ],
    iconName: 'PenTool',
    timeline: '8–12 Weeks',
  },
  {
    id: 'turnkey-execution',
    number: '06',
    title: 'Turnkey Execution',
    shortDesc: 'Full project oversight from initial demolition through white-glove installation and scenting.',
    fullDesc: 'A seamless, stress-free design experience. Atelier Forma coordinates contractors, oversees trades, manages procurement, tracks timelines, and completes installation down to the last art hanging and linen fold.',
    deliverables: [
      'Comprehensive contractor bid administration',
      'Weekly on-site construction walkthroughs',
      'Procurement, storage, and freight logistics',
      'Final white-glove installation and handover',
    ],
    iconName: 'Sparkles',
    timeline: 'Full Project Duration',
  },
];

export const PHILOSOPHY_PRINCIPLES = [
  {
    number: '01',
    title: 'Timeless Materiality',
    description: 'Natural stone, solid hardwoods, lime plaster, and honest metals chosen for the way they mature and acquire character over decades of quiet living.',
  },
  {
    number: '02',
    title: 'Purposeful Planning',
    description: 'Every element serves a purpose. Circulation, proportion, acoustics, and natural light are calculated to make daily rituals feel effortless and peaceful.',
  },
  {
    number: '03',
    title: 'Personal Character',
    description: 'Rather than stamping a rigid studio formula, we craft spaces that embody the distinct history, passions, and sensibilities of those who inhabit them.',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discover',
    tagline: 'Understanding your world',
    description: 'We begin with an in-depth conversation exploring your lifestyle, daily routines, architectural aspirations, and practical investment parameters.',
    duration: 'Week 1–2',
  },
  {
    step: '02',
    title: 'Concept',
    tagline: 'Establishing the design vision',
    description: 'Developing spatial layout options, tactile material samples, lighting atmospheres, and 3D conceptual perspectives that anchor the project.',
    duration: 'Week 3–5',
  },
  {
    step: '03',
    title: 'Develop',
    tagline: 'Refining every drawing and detail',
    description: 'Translating concepts into construction blueprints, millwork joinery packets, procurement schedules, and exact specifications for trades.',
    duration: 'Week 6–10',
  },
  {
    step: '04',
    title: 'Deliver',
    tagline: 'Translating vision into reality',
    description: 'Managing trade coordination, tracking procurement, conducting site walkthroughs, and orchestrating white-glove installation and styling.',
    duration: 'Week 11+',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: 'The team transformed an ordinary apartment into a home that feels completely ours. Every detail was considered without ever feeling over-designed.',
    author: 'Emma R.',
    role: 'Residential Client',
    location: 'West Village, New York',
    projectType: 'Townhouse Remodel',
  },
  {
    id: '2',
    quote: 'They understood the balance between functionality and atmosphere from the beginning. The result feels sophisticated but still incredibly comfortable for our team.',
    author: 'Michael T.',
    role: 'Commercial Client',
    location: 'Fulton Market, Chicago',
    projectType: 'Headquarters Design',
  },
  {
    id: '3',
    quote: 'The entire process was organized, transparent, and thoughtful. We always knew what was happening next, and the final reveal exceeded our highest expectations.',
    author: 'Sarah L.',
    role: 'Residential Client',
    location: 'Austin, Texas',
    projectType: 'New Construction Interior',
  },
];

export const STUDIO_METRICS = [
  {
    metric: '40+',
    label: 'Completed Concepts',
    detail: 'Across North America and Europe',
  },
  {
    metric: '12',
    label: 'Design Disciplines',
    detail: 'Architecture, millwork, lighting & FF&E',
  },
  {
    metric: '8',
    label: 'Years of Combined Experience',
    detail: 'Crafting thoughtful spaces',
  },
  {
    metric: '25',
    label: 'Featured Spaces',
    detail: 'Editorial case studies & publications',
  },
];

export const JOURNAL_POSTS: JournalPost[] = [
  {
    id: 'calmer-living-room',
    title: 'How to Create a Calmer Living Room',
    category: 'Spatial Design',
    date: 'February 2026',
    readTime: '3 min read',
    excerpt: 'Exploring the delicate balance between low-profile seating, tactile textures, and intentional negative space to foster peace at home.',
    image: studioImages.hero,
    content: [
      'A calm room is not an empty room. Rather, it is a space where sensory noise has been deliberately quieted through proportion, architectural restraint, and tactile harmony. In an age of perpetual visual stimulation, the living room must evolve from a showroom of novelty into a restorative sanctum that supports quiet decompression.',
      'Begin by deliberately lowering the center of gravity in your primary seating. Low-slung sofas, monolithic coffee tables, and tailored lounge chairs invite a grounded physical posture. When furniture remains below eye level, it allows uninterrupted sightlines toward natural daylight, architectural window framing, and garden vistas.',
      'Exercise discipline in your material palette. We consistently advise clients to restrict any given room to three primary honest materials: one dominant stone (such as honed Travertine or French limestone), one warm timber (such as quarter-sawn white oak or smoked walnut), and neutral woven textiles like Belgian linen, washed wool, and raw silk.',
      'Finally, respect the silent power of intentional negative space. When every corner is pressured to hold a decorative object, a room feels anxious. Leaving walls unadorned and allowing air to circulate around sculptural seating creates the subconscious spaciousness necessary for true mental calm.',
    ],
  },
  {
    id: 'case-for-natural-materials',
    title: 'The Case for Natural Materials',
    category: 'Materiality',
    date: 'January 2026',
    readTime: '4 min read',
    excerpt: 'Why unlacquered brass, honed limestone, and oiled oak age with grace—creating homes that grow richer with time and use.',
    image: studioImages.journalMaterials,
    content: [
      'In a modern landscape dominated by synthetic polymers, printed faux veneers, and disposable decor, natural materials possess an irreplaceable gravitas. They do not merely endure the passage of time; they actively collaborate with it, absorbing history and touch into an evolving visual poetry.',
      'Consider living finishes such as unlacquered brass and raw bronze. Where daily hands touch a cabinet pull or doorway latch, the metal polishes to a bright golden luster, while the recessed angles deepen into dark smoky umber. This organic variance cannot be replicated in a factory; it is a genuine record of human presence.',
      'Similarly, honed natural stones like limestone, Calacatta marble, and soapstone soften with age. Minor spills and soft etching over decades of shared dinners become part of the home’s archival character, reminiscent of centuries-old European farmhouses where kitchen counters tell generational stories.',
      'Solid hardwoods finished with breathable natural oils rather than synthetic polyurethane seals allow timber to breathe, scent the atmosphere, and accept the gentle patina of everyday living without delaminating.',
      'Designing with honest materials requires surrendering the sterile impulse for factory perfection. In return, your home gains depth, timeless dignity, and a tactile richness that fast-furniture culture can never provide.',
    ],
  },
  {
    id: 'designing-small-spaces',
    title: 'Designing Small Spaces Without Compromise',
    category: 'Space Planning',
    date: 'December 2025',
    readTime: '3 min read',
    excerpt: 'Smart spatial strategies and custom architectural joinery that turn compact urban footprints into generous sanctuaries.',
    image: studioImages.consultation,
    content: [
      'The greatest mistake in designing compact urban apartments is the instinct toward "miniaturization"—filling a modest footprint with undersized tables, tiny chairs, and numerous small tchotchkes. This approach invariably fragments the space into chaotic visual noise, making rooms feel significantly smaller than their actual dimensions.',
      'Instead, the most generous spatial strategy is to commit to fewer, boldly proportioned elements. A singular full-scale sectional sofa paired with an expansive bespoke rug immediately unifies a room and establishes a calm, luxurious scale that defies square footage limitations.',
      'Bespoke architectural millwork is the true cornerstone of compact living. By designing floor-to-ceiling cabinetry that aligns seamlessly with door lintels and window headers, we eliminate awkward alcoves and conceal daily clutter behind monolithic fluted panels and integrated push-latches.',
      'Strategic lighting placement completes the transformation. Rather than relying on a harsh central ceiling fixture, layer warm concealed perimeter cove lighting, low-intensity reading sconces, and directional floor uplights that wash textural surfaces and push boundaries outward.',
    ],
  },
];

export const FAQS = [
  {
    q: 'How does Atelier Forma begin a new project?',
    a: 'We start with an initial 30-minute discovery consultation to understand your spatial needs, timeline, and aesthetic goals. If there is a mutual fit, we provide a customized proposal with detailed phases, scope, and fee structure.',
  },
  {
    q: 'Do you take on projects outside New York?',
    a: 'Yes. While our primary design studio is based in New York, we routinely work on residential and commercial projects across North America and select international locations through our hybrid coordination model.',
  },
  {
    q: 'What is the typical timeline for a complete residential project?',
    a: 'Timelines vary by scope. Full architectural design, documentation, and permit preparation typically take 10 to 18 weeks. Construction and procurement durations depend on contractor schedules, with our team actively managing execution through to final handover.',
  },
  {
    q: 'Can Atelier Forma work with our existing architect or builder?',
    a: 'Absolutely. We frequently collaborate with external architectural firms, general contractors, landscape architects, and lighting consultants, integrating seamlessly as your dedicated interior architecture team.',
  },
  {
    q: 'What budget ranges do you typically work with?',
    a: 'Our comprehensive services are tailored for high-end residential renovations, custom homes, and boutique commercial environments with design budgets typically beginning at $75,000+ for furnishings and $200,000+ for architectural renovations.',
  },
];

export interface InstagramPost {
  id: string;
  image: string;
  aspectRatio: 'vertical' | 'square' | 'horizontal';
  likes: number;
  comments: number;
  caption: string;
  location: string;
  tags: string[];
  date: string;
}

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'insta-1',
    image: studioImages.staircase,
    aspectRatio: 'vertical',
    likes: 482,
    comments: 24,
    caption: 'Soft diffused morning light cascading down our continuous lime plaster helical staircase. Solid white oak treads with recessed bronze edge details.',
    location: 'TriBeCa, New York',
    tags: ['#AtelierForma', '#ArchitecturalStaircase', '#LimePlaster', '#Minimalism'],
    date: '2 days ago',
  },
  {
    id: 'insta-2',
    image: studioImages.hero,
    aspectRatio: 'horizontal',
    likes: 614,
    comments: 38,
    caption: 'Saturday quiet in the West Village Residence. Low curved bouclé seating, raw travertine cocktail slab, and natural morning shadows.',
    location: 'West Village, New York',
    tags: ['#InteriorArchitecture', '#LivingRoomDesign', '#Travertine', '#WarmMinimalism'],
    date: '4 days ago',
  },
  {
    id: 'insta-3',
    image: studioImages.bedroom,
    aspectRatio: 'vertical',
    likes: 538,
    comments: 29,
    caption: 'Grounded proportions: custom low-profile white oak bedframe paired with a monolithic honed travertine bedside cube and washed flax linen.',
    location: 'Austin, Texas',
    tags: ['#BedroomSanctuary', '#QuietLuxury', '#BespokeJoinery', '#NaturalLinen'],
    date: '1 week ago',
  },
  {
    id: 'insta-4',
    image: studioImages.about,
    aspectRatio: 'square',
    likes: 412,
    comments: 18,
    caption: 'Material study in the studio: raw travertine slabs, wire-brushed oak blocks, heavy Belgian linen, and architectural joinery packets.',
    location: 'Atelier Forma Studio',
    tags: ['#MaterialPalette', '#TactileArchitecture', '#StudioProcess'],
    date: '1 week ago',
  },
  {
    id: 'insta-5',
    image: studioImages.formaWorkspace,
    aspectRatio: 'horizontal',
    likes: 385,
    comments: 16,
    caption: 'Quiet commercial design: acoustic fluted American walnut paneling with indirect warm LED cove illumination and cognac saddle leather.',
    location: 'Fulton Market, Chicago',
    tags: ['#CommercialInteriors', '#WorkspaceDesign', '#FlutedWood', '#ExecutiveOffice'],
    date: '2 weeks ago',
  },
  {
    id: 'insta-6',
    image: studioImages.journalMaterials,
    aspectRatio: 'square',
    likes: 567,
    comments: 31,
    caption: 'Tactile close-up: unlacquered living brass trim meeting honed French limestone. Honest materials that grow richer with time and touch.',
    location: 'Material Archive',
    tags: ['#MaterialDetail', '#HonedStone', '#LivingBrass', '#ArchitectureDetails'],
    date: '2 weeks ago',
  },
  {
    id: 'insta-7',
    image: studioImages.oakStone,
    aspectRatio: 'square',
    likes: 491,
    comments: 22,
    caption: 'Monolithic dry-stack limestone intersecting open oak kitchen joinery in our Austin Hill Country residence.',
    location: 'Austin, Texas',
    tags: ['#AustinArchitecture', '#HillCountryModern', '#LimestoneWall', '#KitchenDesign'],
    date: '3 weeks ago',
  },
  {
    id: 'insta-8',
    image: studioImages.panoramic,
    aspectRatio: 'horizontal',
    likes: 720,
    comments: 45,
    caption: '“Negative space is not empty space; it is room for the mind to breathe.” Monolithic plaster vaulting and natural skylight gallery.',
    location: 'Big Sur, California',
    tags: ['#ArchitecturalSanctuary', '#PlasterVaults', '#ZenArchitecture'],
    date: '3 weeks ago',
  },
];

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  credentials: string;
  specialty: string;
  bio: string;
  image: string;
  quote: string;
  email: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'elena-vance',
    name: 'Elena Vance',
    role: 'Founder & Principal Architect',
    credentials: 'AIA, NCARB, M.Arch Harvard GSD',
    specialty: 'Spatial Hierarchy & Modernist Volume',
    bio: 'With over sixteen years directing high-end residential and cultural commissions across North America and Europe, Elena founded Studio Archon with a commitment to sensory restraint, natural illumination, and enduring architectural proportion.',
    image: studioImages.teamElena,
    quote: 'Architecture is not merely the enclosure of space; it is the deliberate choreographing of daily human peace.',
    email: 'e.vance@studioarchon.example',
  },
  {
    id: 'marcus-thorne',
    name: 'Marcus Thorne',
    role: 'Partner & Interior Design Director',
    credentials: 'ASID, IIDA, B.Arch Pratt Institute',
    specialty: 'Tactile Finishes & Custom Furnishings',
    bio: 'Marcus oversees all interior architecture, custom furniture curation, and bespoke textile integration. He specializes in balancing low-slung sculptural seating with warm architectural lighting to create deeply grounded living environments.',
    image: studioImages.teamMarcus,
    quote: 'When furniture dialogues seamlessly with the building envelope, a room ceases to feel decorated and begins to feel inevitable.',
    email: 'm.thorne@studioarchon.example',
  },
  {
    id: 'chloe-chen',
    name: 'Chloe Chen',
    role: 'Head of Materiality & Sustainability',
    credentials: 'LEED AP BD+C, B.Des RISD',
    specialty: 'Honest Stones, Patinas & Sustainable Sourcing',
    bio: 'Leading the studio’s material library, Chloe curates our direct quarries and artisan textile mills. Her research centers on living materials—unlacquered brass, lime plasters, and French limestone—that gather character across generations.',
    image: studioImages.teamChloe,
    quote: 'We select materials that age with grace rather than wear out—substances that welcome the gentle marks of living.',
    email: 'c.chen@studioarchon.example',
  },
  {
    id: 'julian-ross',
    name: 'Julian Ross',
    role: 'Technical Director & Master Joinery Lead',
    credentials: 'CSDA, Master Artisan Guild',
    specialty: 'Architectural Millwork & Concealed Details',
    bio: 'Trained in traditional Japanese timber framing and contemporary European CNC fabrication, Julian directs technical detailing, flush acoustic architectural doors, and monolithic floor-to-ceiling cabinetry systems.',
    image: studioImages.teamJulian,
    quote: 'True luxury lives in the uncelebrated 3mm shadow reveal—the precision you do not consciously see, but immediately feel.',
    email: 'j.ross@studioarchon.example',
  },
];



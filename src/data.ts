import { LandscapeProject, ProcessStep, LandscapeService, ClientReview } from './types';

export const HERO_PROJECT_IMAGE = '/images/hero-architectural-sanctuary.webp';

export const PROJECTS: LandscapeProject[] = [
  {
    id: 'proj-1',
    title: 'A Quiet Expression of Modern Living',
    subtitle: 'Kyoto-Inspired Minimalist Courtyard & Granite Basin',
    category: 'Zen Sanctuary',
    location: 'Pacific Palisades, CA',
    year: '2025',
    image: '/images/sanctuary-3.webp',
    detailImage: '/images/service-1.webp',
    description:
      'Seamlessly blurring the threshold between indoor minimalism and serene botanical nature. Features hand-split black granite water reflection channels, cloud-pruned Japanese black pines, and microclimate moss beds.',
    features: ['Hand-Chiseled Basalt Pavers', 'Aged Japanese Pines', 'Acoustic Water Channels', 'Concealed Ground Illumination'],
  },
  {
    id: 'proj-2',
    title: 'Contemporary Elegance, Naturally Refined',
    subtitle: 'Tiered Hillside Terraces & Centenarian Olive Grove',
    category: 'Estate Grounds',
    location: 'Bel-Air Crest, CA',
    year: '2024',
    image: '/images/sanctuary-5.webp',
    detailImage: '/images/sanctuary-2.webp',
    description:
      'A multi-level limestone terraced sanctuary balancing dry-stacked Roman travertine with drought-resilient Mediterranean olive trees and fragrant lavender ribbons.',
    features: ['300-Year-Old Specimen Olives', 'Floating Travertine Steps', 'Recessed Sunken Fire Lounge', 'Automated Eco-Irrigation'],
  },
  {
    id: 'proj-3',
    title: 'Coastal Dune & Mediterranean Flora',
    subtitle: 'Salt-Tolerant Native Oceanfront Residence',
    category: 'Coastal Living',
    location: 'Carmel-by-the-Sea, CA',
    year: '2025',
    image: '/images/sanctuary-4.webp',
    detailImage: '/images/service-4.webp',
    description:
      'Engineered for oceanfront wind and salt exposure. Sculptural Monterey cypresses frame raw teak decking, dune grasses, and sea lavender that sway harmoniously with the coastal breeze.',
    features: ['Sculpted Dune Formations', 'Sustainably Harvested Teak Decking', 'Wind-Deflecting Living Edges', 'Biological Salt Filters'],
  },
  {
    id: 'proj-4',
    title: 'Subterranean Courtyard & Light Wells',
    subtitle: 'Sunken Living Oasis & Living Vertical Walls',
    category: 'Modern Courtyard',
    location: 'Tribeca Penthouse Rooftop, NY',
    year: '2024',
    image: '/images/service-2.webp',
    detailImage: '/images/service-3.webp',
    description:
      'Urban sanctuary featuring an automated climate-controlled living moss and fern vertical wall paired with charred Shou Sugi Ban exterior paneling and heated bluestone pavers.',
    features: ['Hydroponic Fern Bio-Walls', 'Charred Cedar Cladding', 'Radiant Heated Bluestone', 'Architectural Water Sheer'],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'step-1',
    num: '01',
    title: 'Understand',
    summary: 'We assess your land topography, sun trajectory, soil microbiome, and architectural aspirations.',
    details:
      'Every landscape begins with ecological forensics: soil tests, natural water drainage pathways, prevailing wind patterns, and intimate dialogue regarding your lifestyle, privacy desires, and sensory preferences.',
    image: '/images/service-1.webp',
  },
  {
    id: 'step-2',
    num: '02',
    title: 'Refine',
    summary: 'We curate bespoke botanical palettes, 3D stone elevations, and atmospheric light choreography.',
    details:
      'Iterating through architectural renders, material sample trays (hand-quarried limestone, raw basalt, weathered steel), and tagging mature specimen trees directly at our proprietary cultivation nursery.',
    image: '/images/sanctuary-1.webp',
  },
  {
    id: 'step-3',
    num: '03',
    title: 'Develop',
    summary: 'Master stone masons and horticulturalists execute the structural hardscape and mature plantings.',
    details:
      'Our dedicated in-house artisans lay precision stonework, install concealed hydraulic water basins, and crane mature trees into place with millimeter accuracy and root-preservation care.',
    image: '/images/hero-architectural-sanctuary.webp',
  },
  {
    id: 'step-4',
    num: '04',
    title: 'Evolve',
    summary: 'Four-season nurture programs safeguard the continuous maturity and bloom vitality of your estate.',
    details:
      'A great garden is a living organism that evolves over decades. Our horticultural curators provide quarterly pruning, soil rejuvenation, and seasonal floral transitions to preserve your investment.',
    image: '/images/sanctuary-2.webp',
  },
];

export const SERVICES: LandscapeService[] = [
  {
    id: 'srv-1',
    title: 'Architectural Hardscaping',
    subtitle: 'Monolithic Stone, Terraces & Floating Paths',
    description:
      'Dry-stacked fieldstone walls, custom-flamed granite pavers, and precision concrete coping designed to feel as though they were unearthed from the site itself.',
    image: '/images/service-2.webp',
    highlights: ['Natural Stone Sourcing', 'Sunken Fire Terraces', 'Retaining Micro-Architecture', 'Seamless Indoor-Outdoor Thresholds'],
  },
  {
    id: 'srv-2',
    title: 'Bespoke Botanical Curation',
    subtitle: 'Mature Specimen Trees & Native Flora',
    description:
      'We hand-select aged olive trees, sculptural Japanese maples, coastal grasses, and climate-positive groundcovers grown in our private production nurseries.',
    image: '/images/service-1.webp',
    highlights: ['Centenarian Specimen Trees', 'Pollinator & Native Ecosystems', 'Sensory Fragrance Mapping', 'Low-Water Resilient Xeriscaping'],
  },
  {
    id: 'srv-3',
    title: 'Biophilic Water & Fire Elements',
    subtitle: 'Acoustic Basins, Infinity Reflections & Fire Tables',
    description:
      'Calming visual centerpieces combining natural stone, blackened stainless steel, and gentle rippling acoustics that soothe the senses and shield ambient noise.',
    image: '/images/sanctuary-3.webp',
    highlights: ['Natural Biological Filtration', 'Custom Cast Basalt Fountains', 'Concealed Gas Fire Lounges', 'Mirror Reflection Ponds'],
  },
  {
    id: 'srv-4',
    title: 'Estate Horticultural Stewardship',
    subtitle: 'Continuous Seasonal Care & Maturation',
    description:
      'Dedicated care teams that treat your landscape as fine art, practicing seasonal pruning, soil microbiome balancing, and canopy shaping.',
    image: '/images/service-4.webp',
    highlights: ['Organic Soil Remediation', 'Artisan Tree Cloud-Pruning', 'Smart Water Optimization', 'VIP Estate Emergency Support'],
  },
];

export const GALLERY_STRIP = [
  {
    id: 'gal-1',
    src: '/images/hero-architectural-sanctuary.webp',
    caption: 'Modern Travertine Pavilion',
  },
  {
    id: 'gal-2',
    src: '/images/sanctuary-5.webp',
    caption: 'Bel-Air Terraced Sanctuary',
  },
  {
    id: 'gal-3',
    src: '/images/sanctuary-2.webp',
    caption: 'Reflective Water Basin & Lounge',
  },
  {
    id: 'gal-4',
    src: '/images/sanctuary-3.webp',
    caption: 'Zen Courtyard & Cloud Pines',
  },
  {
    id: 'gal-5',
    src: '/images/sanctuary-4.webp',
    caption: 'Coastal Cypress & Teak Deck',
  },
];

export const REVIEWS: ClientReview[] = [
  {
    id: 'rev-1',
    author: 'Eleanor Vance',
    residence: 'Bel-Air Hills Estate',
    rating: 5,
    date: 'Completed Autumn 2025',
    comment:
      'LAGO transformed our 2-acre hillside into a breathtaking sanctuary. The 200-year-old olive tree they sourced and positioned on our terrace looks as if it has grown there forever. Their own nursery specimens and stone masons are unmatched.',
    verified: true,
  },
  {
    id: 'rev-2',
    author: 'Marcus Brody',
    residence: 'Pacific Palisades Villa',
    rating: 5,
    date: 'Completed Summer 2025',
    comment:
      'The acoustics of the custom basalt reflection fountain create total serenity even in the center of the city. Their attention to subtle ground illumination and soil health proves their master craftsmanship.',
    verified: true,
  },
  {
    id: 'rev-3',
    author: 'Sophia Chen',
    residence: 'Carmel Oceanfront Residence',
    rating: 5,
    date: 'Completed Spring 2025',
    comment:
      'From the first topographical assessment to the final planting of native grasses, the process was pure art. Transformed our wind-battered dune into our family’s favorite living space on Earth.',
    verified: true,
  },
];

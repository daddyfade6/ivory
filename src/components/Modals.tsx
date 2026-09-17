import { useState } from 'react';
import {
  X,
  Search,
  MapPin,
  Phone,
  Clock,
  Check,
  Award,
  ShieldCheck,
  ArrowRight,
  Star,
  Trees,
  Sparkles,
  Calendar,
} from 'lucide-react';
import { PROJECTS, SERVICES, REVIEWS } from '../data';
import { LandscapeProject, LandscapeService } from '../types';

interface ModalsProps {
  activeModal: string | null;
  selectedProject?: LandscapeProject | null;
  selectedService?: LandscapeService | null;
  onClose: () => void;
  onOpenConsultation?: () => void;
}

export default function Modals({
  activeModal,
  selectedProject,
  selectedService,
  onClose,
  onOpenConsultation,
}: ModalsProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [selectedNurseryCategory, setSelectedNurseryCategory] = useState('All');
  const [inquiryCart, setInquiryCart] = useState<string[]>([]);
  const [cartSuccessMessage, setCartSuccessMessage] = useState<string | null>(null);

  if (!activeModal) return null;

  const nurseryItems = [
    {
      id: 'spec-1',
      name: '200-Year-Old European Olive Tree (Olea europaea)',
      category: 'Specimen Trees',
      origin: 'Proprietary Acclimatization Grounds, Santa Ynez',
      height: '18-22 ft spread',
      price: '$18,500 curated',
      image: '/images/sanctuary-1.webp',
    },
    {
      id: 'spec-2',
      name: 'Cloud-Pruned Japanese Black Pine (Pinus thunbergii)',
      category: 'Specimen Trees',
      origin: 'Hand-Sculpted 35 Years in Nursery',
      height: '12 ft sculptural canopy',
      price: '$14,200 curated',
      image: '/images/sanctuary-3.webp',
    },
    {
      id: 'spec-3',
      name: 'Hand-Split Roman Travertine Paving Slabs',
      category: 'Hardscape & Stone',
      origin: 'Tivoli Quarry, Cut to Precision Spec',
      height: '24" x 36" x 2" monolithic',
      price: '$45 / sq ft installed',
      image: '/images/hero-architectural-sanctuary.webp',
    },
    {
      id: 'spec-4',
      name: 'Acoustic Basalt Monolith Water Basin',
      category: 'Water & Fire',
      origin: 'Core-Drilled Volcanic Basalt, Oregon',
      height: '48" diameter mirror finish',
      price: '$9,800 commissioned',
      image: '/images/service-1.webp',
    },
  ];

  const handleAddToInquiry = (itemName: string) => {
    setInquiryCart((prev) => [...prev, itemName]);
    setCartSuccessMessage(`Added "${itemName}" to your project wishlist.`);
    setTimeout(() => setCartSuccessMessage(null), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard?.writeText('+1 (310) 849-2100');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const filteredNursery = nurseryItems.filter((item) => {
    const matchesCat = selectedNurseryCategory === 'All' || item.category === selectedNurseryCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.origin.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div
      id="modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="modal-content"
        className="relative w-full max-w-2xl border border-white/20 rounded-2xl shadow-[0_24px_64px_rgba(0,0,0,0.8)] p-6 text-white overflow-hidden max-h-[90vh] flex flex-col ring-1 ring-white/10"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, #111a14 0%, #0a110d 60%, #060a08 100%)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle Ambient Color Blend inside Modal */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_15%,rgba(168,85,247,0.08)_0%,transparent_50%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_85%,rgba(16,185,129,0.1)_0%,transparent_55%)]" />

        {/* Close Button */}
        <button
          id="modal-close-btn"
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer focus:outline-none z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal: Landscape Market & Plant Library */}
        {activeModal === 'market' && (
          <div className="flex flex-col h-full overflow-hidden">
            <div className="border-b border-white/10 pb-4 mb-4 pr-8">
              <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <Trees className="w-3.5 h-3.5" />
                <span>Nursery & Living Architecture Library</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold mt-1 font-serif">Curated Specimen Reserve</h2>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1 font-light">
                Mature trees, hand-split stone, and acoustic water elements available exclusively for our commissioned estates.
              </p>

              {/* Filter Pills */}
              <div className="flex items-center gap-1.5 mt-3 overflow-x-auto pb-1 scrollbar-none">
                {['All', 'Specimen Trees', 'Hardscape & Stone', 'Water & Fire'].map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedNurseryCategory(cat)}
                    className={`text-xs px-3 py-1 rounded-full cursor-pointer transition-colors ${
                      selectedNurseryCategory === cat
                        ? 'bg-white text-black font-semibold'
                        : 'bg-white/5 text-neutral-400 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {cartSuccessMessage && (
              <div className="mb-3 px-3 py-2 bg-emerald-950/80 border border-emerald-500/40 rounded-lg text-emerald-300 text-xs flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>{cartSuccessMessage}</span>
              </div>
            )}

            <div className="overflow-y-auto space-y-3 pr-1 scrollbar-thin">
              {filteredNursery.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3.5 rounded-xl bg-black/40 border border-white/10 hover:border-white/25 transition-all gap-4"
                >
                  <div className="flex items-center gap-3.5">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      decoding="async"
                      className="w-16 h-16 rounded-lg object-cover border border-white/10 shrink-0"
                    />
                    <div>
                      <h4 className="font-semibold text-sm text-white">{item.name}</h4>
                      <p className="text-xs text-emerald-400/90 font-mono mt-0.5">{item.origin}</p>
                      <p className="text-[11px] text-neutral-400">{item.height} • {item.price}</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleAddToInquiry(item.name)}
                    className="w-full sm:w-auto px-4 py-2 bg-white/10 hover:bg-white text-white hover:text-black rounded-full text-xs font-medium cursor-pointer transition-all duration-300 shrink-0 border border-white/20"
                  >
                    Add to Spec Sheet
                  </button>
                </div>
              ))}
            </div>

            {inquiryCart.length > 0 && (
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-neutral-300">
                  {inquiryCart.length} item(s) selected for consultation
                </span>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenConsultation?.();
                  }}
                  className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-semibold text-xs rounded-full cursor-pointer transition-all"
                >
                  Proceed with Wishlist
                </button>
              </div>
            )}
          </div>
        )}

        {/* Modal: Global Search */}
        {activeModal === 'search' && (
          <div className="flex flex-col h-full">
            <div className="border-b border-white/10 pb-4 mb-4 pr-8">
              <h2 className="text-xl font-bold font-serif">Search Sanctuaries & Botany</h2>
              <p className="text-xs text-neutral-400 mt-1">
                Find architectural projects, specimen plants, materials, or studio services.
              </p>
              <div className="relative mt-3">
                <Search className="absolute left-3.5 top-3 w-4 h-4 text-neutral-400" />
                <input
                  type="text"
                  autoFocus
                  placeholder="Search 'Olive tree', 'Montecito', 'Travertine', 'Zen Pool'..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-black/60 border border-white/20 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-emerald-400 transition-colors"
                />
              </div>
            </div>

            <div className="overflow-y-auto space-y-3 pr-1">
              <div className="text-[11px] font-mono text-neutral-400 uppercase">
                Featured Projects
              </div>
              {PROJECTS.filter(
                (p) =>
                  p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  p.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  p.location.toLowerCase().includes(searchQuery.toLowerCase())
              ).map((p) => (
                <div
                  key={p.id}
                  onClick={() => {
                    onClose();
                    const el = document.getElementById('creations');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="p-3 rounded-xl bg-black/40 border border-white/10 hover:border-emerald-400/40 flex items-center justify-between cursor-pointer transition-all"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      decoding="async"
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <div className="text-xs font-semibold text-white">{p.title}</div>
                      <div className="text-[11px] text-neutral-400">{p.location} • {p.category}</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-neutral-400" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modal: Project Details */}
        {activeModal === 'project' && selectedProject && (
          <div className="flex flex-col h-full overflow-y-auto pr-1">
            <div className="relative h-64 rounded-xl overflow-hidden mb-4 border border-white/15 shrink-0">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-emerald-500/80 text-black font-semibold">
                  {selectedProject.category}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white mt-1 font-serif">
                  {selectedProject.title}
                </h2>
                <div className="text-xs text-neutral-300 flex items-center gap-3 mt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    {selectedProject.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                    Completed {selectedProject.year}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
              {selectedProject.description}
            </p>

            <div className="mt-4 pt-4 border-t border-white/10">
              <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">
                Bespoke Architectural Specifications
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedProject.features.map((f) => (
                  <div
                    key={f}
                    className="flex items-center gap-2 text-xs text-neutral-300 bg-white/5 p-2 rounded-lg border border-white/10"
                  >
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-neutral-400">Want a similar execution for your property?</span>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenConsultation?.();
                }}
                className="px-5 py-2 bg-white hover:bg-neutral-200 text-black rounded-full text-xs font-semibold cursor-pointer transition-all"
              >
                Inquire About Project
              </button>
            </div>
          </div>
        )}

        {/* Modal: Service Details */}
        {activeModal === 'service' && selectedService && (
          <div className="flex flex-col h-full overflow-y-auto pr-1">
            <div className="relative h-56 rounded-xl overflow-hidden mb-4 border border-white/15 shrink-0">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400">
                  {selectedService.subtitle}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white mt-1 font-serif">
                  {selectedService.title}
                </h2>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
              {selectedService.description}
            </p>

            <div className="mt-4 pt-4 border-t border-white/10">
              <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">
                Craft Standards & Methodologies
              </h4>
              <div className="space-y-2">
                {selectedService.highlights.map((h) => (
                  <div
                    key={h}
                    className="flex items-center gap-2.5 text-xs text-neutral-300 bg-white/5 p-2.5 rounded-lg border border-white/10"
                  >
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-neutral-400">Customized to your property topography</span>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenConsultation?.();
                }}
                className="px-5 py-2 bg-white hover:bg-neutral-200 text-black rounded-full text-xs font-semibold cursor-pointer transition-all"
              >
                Book Consultation
              </button>
            </div>
          </div>
        )}

        {/* Modal: Client Reviews */}
        {activeModal === 'reviews' && (
          <div className="flex flex-col h-full overflow-hidden">
            <div className="border-b border-white/10 pb-4 mb-4 pr-8">
              <div className="flex items-center gap-2 text-amber-400">
                <Star className="w-4 h-4 fill-amber-400" />
                <span className="text-xs font-semibold uppercase tracking-wider">
                  4.9 Rating Out of 5.0
                </span>
              </div>
              <h2 className="text-xl font-bold mt-1 font-serif">Verified Estate Owner Testimonials</h2>
              <p className="text-xs text-neutral-400 mt-1">
                Direct feedback from private estate owners, architectural directors, and historic property patrons.
              </p>
            </div>

            <div className="overflow-y-auto space-y-4 pr-1">
              {REVIEWS.map((rev) => (
                <div
                  key={rev.id}
                  className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-sm text-white">{rev.author}</div>
                      <div className="text-xs text-neutral-400">{rev.residence}</div>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-neutral-300 italic leading-relaxed">
                    "{rev.comment}"
                  </p>
                  <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[11px] text-neutral-400">
                    <span className="text-emerald-400 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Verified Estate Commission
                    </span>
                    <span>{rev.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modal: Own Production & Cultivation */}
        {activeModal === 'production' && (
          <div className="flex flex-col h-full overflow-y-auto pr-1 space-y-4">
            <div className="border-b border-white/10 pb-3 pr-8">
              <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <Award className="w-4 h-4" />
                <span>100% In-House Nursery & Stonemasonry</span>
              </div>
              <h2 className="text-xl font-bold mt-1 font-serif">Our Production Ecosystem</h2>
              <p className="text-xs text-neutral-400 mt-1">
                No third-party brokers. Complete vertical integration from seed to boulder.
              </p>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <div className="font-semibold text-white">40-Acre Specimen Acclimatization Grounds</div>
                <p className="text-xs text-neutral-400">
                  Located in the Santa Ynez foothills, our grounds cultivate rare, mature trees under climate-resilient organic regimens to guarantee zero transplant shock.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <div className="font-semibold text-white">Guild-Certified Master Stonemasons</div>
                <p className="text-xs text-neutral-400">
                  Our dedicated stone team hand-splits, chisel-finishes, and dry-stacks limestone and basalt with ancient European interlocking joinery.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <div className="font-semibold text-white">Biological Soil Microbiome Lab</div>
                <p className="text-xs text-neutral-400">
                  Every planting bed is infused with custom mycorrhizal fungi and compost teas tailored specifically to the native mineral composition of your property.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onClose}
                className="w-full py-2.5 bg-white hover:bg-neutral-200 text-black font-semibold text-xs rounded-full cursor-pointer transition-all"
              >
                Close & Return
              </button>
            </div>
          </div>
        )}

        {/* Modal: Verified Quality */}
        {activeModal === 'quality' && (
          <div className="flex flex-col h-full overflow-y-auto pr-1 space-y-4">
            <div className="border-b border-white/10 pb-3 pr-8">
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>Excellence Certified</span>
              </div>
              <h2 className="text-xl font-bold mt-1 font-serif">The LAGO Standard of Craft</h2>
              <p className="text-xs text-neutral-400 mt-1">
                Guaranteed botanical vitality and structural engineering integrity.
              </p>
            </div>

            <div className="space-y-2.5 text-xs text-neutral-300">
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-white">5-Year Botanical Survivorship Guarantee</div>
                  <div className="text-[11px] text-neutral-400">Full replacement warranty on all mature specimens under our care program.</div>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-white">Structural Geotechnical Endorsement</div>
                  <div className="text-[11px] text-neutral-400">Retaining walls and hillside terraces calculated and stamped by licensed structural engineers.</div>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-white">Precision Hydrology & Zero-Runoff Systems</div>
                  <div className="text-[11px] text-neutral-400">Automated moisture sensors cut water consumption by up to 60% compared to standard irrigation.</div>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-full py-2.5 bg-white text-black font-semibold text-xs rounded-full cursor-pointer hover:bg-neutral-200 transition-all mt-4"
            >
              Close
            </button>
          </div>
        )}

        {/* Modal: Location & Studio */}
        {activeModal === 'location' && (
          <div className="flex flex-col h-full overflow-y-auto pr-1 space-y-4">
            <div className="border-b border-white/10 pb-3 pr-8">
              <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                <span>Architectural Studios & Grounds</span>
              </div>
              <h2 className="text-xl font-bold mt-1 font-serif">Visit <span className="glass-lago-subtle font-black">LAGO</span> Landscapes</h2>
              <p className="text-xs text-neutral-400 mt-1">
                Consultation galleries and specimen viewing grounds open by appointment.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                <div className="font-semibold text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  Montecito Studio
                </div>
                <div className="text-neutral-400">1187 Coast Village Rd, Suite 400</div>
                <div className="text-neutral-400">Santa Barbara, CA 93108</div>
                <div className="text-[11px] text-emerald-400/90 font-mono pt-1">
                  Hours: Mon – Fri, 9:00 AM – 6:00 PM
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                <div className="font-semibold text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  Malibu Coastal Atelier
                </div>
                <div className="text-neutral-400">23410 Civic Center Way</div>
                <div className="text-neutral-400">Malibu, CA 90265</div>
                <div className="text-[11px] text-emerald-400/90 font-mono pt-1">
                  Hours: By Private Appointment Only
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/20 text-xs">
              <div className="font-semibold text-emerald-300">40-Acre Specimen Acclimatization Grounds</div>
              <div className="text-neutral-300 mt-0.5">Foxen Canyon Rd, Los Olivos, CA 93441</div>
              <p className="text-[11px] text-neutral-400 mt-1">
                Private golf cart tours of mature olive groves and stone quarries available for clients under active design commission.
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-full py-2.5 bg-white text-black font-semibold text-xs rounded-full cursor-pointer hover:bg-neutral-200 transition-all"
            >
              Close
            </button>
          </div>
        )}

        {/* Modal: Phone Hotline */}
        {activeModal === 'phone' && (
          <div className="flex flex-col h-full space-y-4">
            <div className="border-b border-white/10 pb-3 pr-8">
              <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <Phone className="w-4 h-4" />
                <span>Direct Architectural Line</span>
              </div>
              <h2 className="text-xl font-bold mt-1 font-serif">Speak with a Principal Architect</h2>
              <p className="text-xs text-neutral-400 mt-1">
                Connect directly with our studio to discuss prospective property commissions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-black/60 border border-white/15 text-center space-y-3">
              <div className="text-2xl sm:text-3xl font-mono font-bold text-white tracking-wider">
                +1 (310) 849-2100
              </div>
              <p className="text-xs text-neutral-400">
                Direct concierge line • Monday through Saturday • 8:00 AM – 7:00 PM PST
              </p>

              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full text-xs font-medium cursor-pointer transition-all"
                >
                  {copiedPhone ? 'Copied to Clipboard!' : 'Copy Number'}
                </button>

                <a
                  href="tel:+13108492100"
                  className="px-5 py-2 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 rounded-full text-xs font-semibold cursor-pointer transition-all shadow-md"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Modal: Client Portal Login */}
        {activeModal === 'login' && (
          <div className="flex flex-col h-full space-y-4">
            <div className="border-b border-white/10 pb-3 pr-8">
              <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                <span className="glass-lago-subtle font-black tracking-wider">LAGO</span> Estate Registry
              </div>
              <h2 className="text-xl font-bold mt-1 font-serif">Client Portal Sign In</h2>
              <p className="text-xs text-neutral-400 mt-1">
                Access your CAD blueprints, soil telemetry, plant inventory, and scheduled pruning dates.
              </p>
            </div>

            {loginSuccess ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-white font-serif">Welcome Back</h3>
                <p className="text-xs text-neutral-400 max-w-sm mx-auto">
                  Authentication token sent to <span className="text-white">{loginEmail}</span>. Connecting to your private estate dossier...
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setLoginSuccess(true);
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                    Estate Email / Patron ID
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="patron@estate.com"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    className="w-full bg-black/60 border border-white/20 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-emerald-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                    Security Passcode
                  </label>
                  <input
                    type="password"
                    required
                    placeholder="••••••••••••"
                    className="w-full bg-black/60 border border-white/20 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-emerald-400 transition-colors"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <a href="#forgot" className="text-[11px] text-neutral-400 hover:text-white underline">
                    Forgot credentials?
                  </a>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-white hover:bg-neutral-200 text-black text-xs font-semibold rounded-full cursor-pointer transition-all shadow-md"
                  >
                    Enter Portal
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Card from '../components/UI/Card'
import Button from '../components/UI/Button'

gsap.registerPlugin(ScrollTrigger)

const categories = ['All', 'Residential', 'Commercial', 'Specialised']

const featuredIds = ['end-of-lease', 'regular-home', 'eco-sterilization']

const servicesList = [
  {
    id: 'end-of-lease',
    title: 'End of Lease Cleaning',
    category: 'Specialised',
    description: 'Rigorously structured bond-back guarantee cleaning to satisfy landlord and estate agent check inspections.',
    scope: [
      'Full wall dusting & spot mark removal',
      'Thorough oven, grill, and range hood degreasing',
      'Sanitization of all cabinets (inside and out)',
      'Window sills, tracks, and glass wipe down',
      'Full bathroom and laundry deep descaling'
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    )
  },
  {
    id: 'deep-carpet',
    title: 'Deep Carpet Extraction',
    category: 'Residential',
    description: 'Hot water steam extraction removing soil, bacteria, and allergens embedded deep within carpet fibers.',
    scope: [
      'Industrial grade vacuum pre-treatment',
      'Targeted stain pre-spray for heavy soils',
      'Hot water extraction extraction rinsing',
      'pH balancing treatment for fabric longevity',
      'Deodorizing sanitize treatment'
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
    )
  },
  {
    id: 'high-rise-windows',
    title: 'High-Rise Window Cleaning',
    category: 'Commercial',
    description: 'Certified boom lift, abseil, and carbon fiber water-fed pole cleaning of exterior glass surfaces.',
    scope: [
      'Pure de-ionized water reach system wash',
      'Exterior & interior squeegee finish',
      'Window frame, track, and flyscreen washing',
      'Stubborn mineral deposit acid descaling',
      'Strict safety standard rigging compliance'
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm4 0v14m8-14v14M4 12h16" /></svg>
    )
  },
  {
    id: 'regular-home',
    title: 'Regular Home Cleaning',
    category: 'Residential',
    description: 'Weekly or fortnightly scheduled maintenance to preserve hygiene, cleanliness, and order.',
    scope: [
      'Kitchen benchtop & splashback sanitization',
      'Hard floor dust mopping & wet scrubbing',
      'Shower glass & bathroom vanity scale removal',
      'Full upholstery vacuum & dusting surface sweep',
      'Waste bin emptying & fresh liner replacement'
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    )
  },
  {
    id: 'commercial-office',
    title: 'Commercial Office Cleaning',
    category: 'Commercial',
    description: 'Comprehensive office space sanitization configured for after-hours or day shifts to minimize noise.',
    scope: [
      'Desk keyboard & screen micro-fiber dusting',
      'Shared kitchen & breakroom detailed sanitization',
      'High-traffic entryway carpet vacuuming',
      'Restroom deep cleaning & towel replenishment',
      'Custom scheduling to fit your business hours'
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
    )
  },
  {
    id: 'eco-sterilization',
    title: 'Eco-Sterilization & Disinfection',
    category: 'Specialised',
    description: 'All-natural eco fogging and sanitizing treatments targeting airborne and surface pathogenetic agents.',
    scope: [
      'Botanical disinfectants safe for food surfaces',
      'ULV cold fogging treatment for overall reach',
      'High touchpoint handles & switch wipes',
      'Air filtration flow enhancement advice',
      'Certificate of hygiene compliance provided'
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-11.314l.707.707m11.314 11.314l.707-.707M4 12a8 8 0 1116 0 8 8 0 01-16 0z" /></svg>
    )
  }
]

export default function Projects() {
  const [activeTab, setActiveTab] = useState('All')
  const navigate = useNavigate()
  const listRef = useRef(null)

  const filteredServices = servicesList.filter(
    (s) => activeTab === 'All' || s.category === activeTab
  )

  useEffect(() => {
    // GSAP fade list layout trigger on active tab changes
    gsap.fromTo(
      '.service-card-item',
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' }
    )
  }, [activeTab])

  const handleRequestQuote = (serviceTitle) => {
    navigate('/contact', { state: { selectedService: serviceTitle } })
  }

  return (
    <main className="pt-24 min-h-screen bg-slate-50">
      {/* Hero Banner */}
      <section className="relative bg-hero py-24 border-b border-white/5 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1440 300" preserveAspectRatio="none">
            <path d="M0,160 C360,260 1080,60 1440,160 L1440,300 L0,300 Z" fill="url(#srv-grad)" />
            <defs>
              <linearGradient id="srv-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4192D0" />
                <stop offset="100%" stopColor="#4CAF50" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 text-mykleen-green-light text-sm font-semibold tracking-wide border border-white/20 mb-6">
            🧹 Our Full Service Catalog
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-4">
            Cleaning Services &amp; Projects
          </h1>
          <p className="text-slate-300 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Select a specialized category below to view our comprehensive inclusion scopes and secure custom quotes.
          </p>
        </div>
      </section>

      {/* Categories Filter Tabs */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                  activeTab === cat
                    ? 'bg-mykleen-blue text-white shadow-lg shadow-mykleen-blue/20'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Catalog Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={listRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="service-card-item">
                <Card className="h-full flex flex-col justify-between border border-slate-100 hover:border-mykleen-blue-light/30 relative overflow-hidden">
                  {featuredIds.includes(service.id) && (
                    <div className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full bg-mykleen-blue text-white text-[10px] font-extrabold uppercase tracking-widest shadow">Popular</div>
                  )}
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-mykleen-blue flex items-center justify-center">
                        {service.icon}
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        service.category === 'Residential' ? 'bg-blue-50 text-mykleen-blue' :
                        service.category === 'Commercial' ? 'bg-indigo-50 text-indigo-600' :
                        'bg-green-50 text-mykleen-green-light'
                      }`}>
                        {service.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-mykleen-slate mb-3">{service.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">{service.description}</p>

                    {/* Scope List */}
                    <div className="mb-8">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">What is Included:</h4>
                      <ul className="space-y-2.5">
                        {service.scope.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-slate-600 text-xs">
                            <svg className="w-4 h-4 text-mykleen-green-light flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Context Quote Button */}
                  <Button
                    variant="primary"
                    onClick={() => handleRequestQuote(service.title)}
                    className="w-full text-sm font-bold shadow-md hover:shadow-lg mt-auto"
                  >
                    Request Quote
                  </Button>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

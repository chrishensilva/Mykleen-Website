import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Card from '../components/UI/Card'
import Button from '../components/UI/Button'

const serviceOptions = [
  'Regular Home Cleaning',
  'Deep Carpet Extraction',
  'High-Rise Window Cleaning',
  'End of Lease Cleaning',
  'Commercial Office Cleaning',
  'Eco-Sterilization & Disinfection',
  'Other Custom Request'
]

export default function Contact() {
  const location = useLocation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Populate selected service if routed from Projects page
  useEffect(() => {
    if (location.state?.selectedService) {
      setFormData((prev) => ({
        ...prev,
        serviceType: location.state.selectedService
      }))
    }
  }, [location])

  const validate = () => {
    const tempErrors = {}
    if (!formData.name.trim()) {
      tempErrors.name = 'Full name is required'
    }

    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email address'
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required'
    } else if (!/^\+?[0-9\s\-()]{8,15}$/.test(formData.phone)) {
      tempErrors.phone = 'Please provide a valid phone number'
    }

    if (!formData.serviceType) {
      tempErrors.serviceType = 'Please select a service type'
    }

    if (!formData.message.trim()) {
      tempErrors.message = 'Please specify your requirement details'
    }

    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear validation error on type
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      // Show elegant success state feedback
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        message: ''
      })
      setErrors({})
    }
  }

  return (
    <main className="pt-24 min-h-screen bg-slate-50">
      {/* Hero Banner */}
      <section className="relative bg-hero py-24 border-b border-white/5 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1440 300" preserveAspectRatio="none">
            <path d="M0,200 C480,100 960,280 1440,120 L1440,300 L0,300 Z" fill="url(#contact-grad)" />
            <defs>
              <linearGradient id="contact-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4CAF50" />
                <stop offset="100%" stopColor="#4192D0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 text-mykleen-green-light text-sm font-semibold tracking-wide border border-white/20 mb-6">
            📞 Book a Cleaning Today
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-4">
            Contact &amp; Quote Inquiry
          </h1>
          <p className="text-slate-300 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Need customized service? Drop us details and our client support team will return a detailed estimate within 2 hours.
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Details & Map (Col-5) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-mykleen-slate">Direct Touchpoints</h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Call or visit our customer desk. We serve the entire metropolitan coverage zone and outer suburbs.
                </p>
              </div>

              {/* Details List */}
              <div className="space-y-4">
                <Card className="flex items-start gap-4 p-5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-mykleen-blue flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-mykleen-slate">Phone Inquiries</h3>
                    <p className="text-slate-500 text-xs mt-1">+61 400 000 000</p>
                    <p className="text-slate-400 text-[10px] mt-0.5">Toll-free across Australia metro regions</p>
                  </div>
                </Card>

                <Card className="flex items-start gap-4 p-5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-mykleen-blue flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-mykleen-slate">Support Email</h3>
                    <p className="text-slate-500 text-xs mt-1">hello@mykleen.com.au</p>
                    <p className="text-slate-400 text-[10px] mt-0.5">Direct ticket response within 2 hours</p>
                  </div>
                </Card>

                <Card className="flex items-start gap-4 p-5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-mykleen-blue flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-mykleen-slate">Operating Hours</h3>
                    <p className="text-slate-500 text-xs mt-1">Monday – Saturday: 7:00 AM – 7:00 PM</p>
                    <p className="text-slate-400 text-[10px] mt-0.5">Closed Sunday and Public Holidays</p>
                  </div>
                </Card>
              </div>

              {/* What Happens Next */}
              <div>
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-5">What Happens Next</h3>
                <div className="relative space-y-0">
                  {[
                    { step: '01', title: 'Submit your request', desc: 'Fill out the form with your details and service type.', color: 'bg-mykleen-blue' },
                    { step: '02', title: 'We call you back', desc: 'A specialist contacts you within 2 hours to confirm details.', color: 'bg-purple-500' },
                    { step: '03', title: 'Receive your quote', desc: 'Get a transparent, fixed-price quote with no hidden fees.', color: 'bg-mykleen-green' },
                    { step: '04', title: 'Cleaning day!', desc: 'Our vetted team arrives on time and delivers a spotless result.', color: 'bg-yellow-400' },
                  ].map(({ step, title, desc, color }, i, arr) => (
                    <div key={step} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`w-8 h-8 rounded-full ${color} text-white text-xs font-bold flex items-center justify-center flex-shrink-0 shadow-md`}>
                          {step}
                        </div>
                        {i < arr.length - 1 && <div className="w-px flex-1 bg-slate-200 my-1" />}
                      </div>
                      <div className="pb-6">
                        <h4 className="font-bold text-mykleen-slate text-sm">{title}</h4>
                        <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Coverage Zone */}
              <div>
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Active Service Coverage Zone</h3>
                <div className="rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
                  <div className="bg-gradient-to-br from-slate-900 via-[#0f1e3a] to-slate-900 p-8 relative flex flex-col items-center justify-center min-h-[200px] overflow-hidden">
                    {/* Concentric rings */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      {[80, 60, 40, 20].map((size, i) => (
                        <div key={i} className={`absolute rounded-full border border-mykleen-blue/20`} style={{ width: `${size}%`, height: `${size}%` }} />
                      ))}
                    </div>
                    <div className="relative z-10 text-center space-y-3">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-mykleen-blue/30 rounded-full border border-mykleen-blue/50">
                        <span className="w-2 h-2 rounded-full bg-mykleen-green animate-pulse" />
                        <span className="text-xs font-bold text-mykleen-blue-light">Melbourne Metro & Suburbs</span>
                      </div>
                      <p className="text-xs text-slate-400">Covering 45km radius from CBD</p>
                      <div className="flex flex-wrap justify-center gap-1.5 mt-2">
                        {['CBD', 'St Kilda', 'Richmond', 'Hawthorn', 'Brunswick', 'Doncaster'].map(s => (
                          <span key={s} className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/70 border border-white/10">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Quote Form Container (Col-7) */}
            <div className="lg:col-span-7">
              <Card className="border border-slate-100 shadow-xl shadow-slate-100/40 p-8 md:p-10">
                {isSubmitted ? (
                  <div className="text-center py-12 space-y-6">
                    <div className="w-16 h-16 rounded-full bg-green-50 text-mykleen-green flex items-center justify-center mx-auto shadow-lg border border-green-100">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold text-mykleen-slate">Estimate Request Received!</h2>
                      <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed">
                        Thank you for contacting us. One of our property hygiene specialists will review your requirements and call you back shortly.
                      </p>
                    </div>
                    <Button variant="secondary" onClick={() => setIsSubmitted(false)} className="text-sm">
                      Submit Another Query
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <h2 className="text-xl font-bold text-mykleen-slate">Request a Customized Quote</h2>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        Please fill in the required fields below. We will use these details to assess layout type and scheduling duration.
                      </p>
                    </div>

                    {/* Inputs */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. John Doe"
                          className={`w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-mykleen-blue transition-all ${
                            errors.name ? 'border-red-400 focus:ring-red-400' : 'border-slate-200'
                          }`}
                        />
                        {errors.name && <p className="text-red-500 text-xs font-semibold">{errors.name}</p>}
                      </div>

                      {/* Phone */}
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Phone Number</label>
                        <input
                          type="text"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. 0400 000 000"
                          className={`w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-mykleen-blue transition-all ${
                            errors.phone ? 'border-red-400 focus:ring-red-400' : 'border-slate-200'
                          }`}
                        />
                        {errors.phone && <p className="text-red-500 text-xs font-semibold">{errors.phone}</p>}
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. johndoe@gmail.com"
                        className={`w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-mykleen-blue transition-all ${
                          errors.email ? 'border-red-400 focus:ring-red-400' : 'border-slate-200'
                        }`}
                      />
                      {errors.email && <p className="text-red-500 text-xs font-semibold">{errors.email}</p>}
                    </div>

                    {/* Service Dropdown */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Service Type Required</label>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-mykleen-blue transition-all ${
                          errors.serviceType ? 'border-red-400 focus:ring-red-400' : 'border-slate-200'
                        }`}
                      >
                        <option value="">-- Choose a cleaning service --</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.serviceType && <p className="text-red-500 text-xs font-semibold">{errors.serviceType}</p>}
                    </div>

                    {/* Message Box */}
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Message & Custom Requirements</label>
                      <textarea
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please specify home size (e.g. 3 bed, 2 bath) or any specific requirements..."
                        className={`w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-mykleen-blue transition-all ${
                          errors.message ? 'border-red-400 focus:ring-red-400' : 'border-slate-200'
                        }`}
                      />
                      {errors.message && <p className="text-red-500 text-xs font-semibold">{errors.message}</p>}
                    </div>

                    <Button type="submit" variant="primary" className="w-full shadow-lg shadow-mykleen-blue/20">
                      Submit Estimate Request
                    </Button>
                  </form>
                )}
              </Card>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}

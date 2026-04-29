'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react'

const appointmentTypes = [
  'New Patient Consultation',
  'Follow-Up Visit',
  'EEG Testing',
  'Botox for Migraine',
  'Nerve Block Injection',
  'Telehealth Visit',
  'Second Opinion',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <main>
      <Navbar />

      <section className="bg-gradient-to-br from-primary to-[#0a8fa8] py-24 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Contact</div>
          <h1 className="font-display text-5xl md:text-6xl font-light">Book an Appointment</h1>
          <p className="text-white/70 mt-4 text-lg">Same-week appointments available. We'll confirm within 24 hours.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
          {/* Info */}
          <AnimatedSection direction="left" className="space-y-6">
            <h2 className="font-display text-3xl text-dark font-semibold">Contact Information</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Reach out by phone, email, or use the form. Our patient coordinator will follow up to confirm your appointment.
            </p>

            {[
              { icon: MapPin, label: 'Address', value: '28 Nizami Street, 3rd Floor\nBaku AZ1000, Azerbaijan' },
              { icon: Phone, label: 'Phone', value: '+994 50 123-45-67' },
              { icon: Mail, label: 'Email', value: 'dr.hasanli@elvinmd.az' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex gap-4">
                <div className="w-11 h-11 bg-light rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-accent" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">{label}</div>
                  <div className="text-dark font-medium text-sm whitespace-pre-line">{value}</div>
                </div>
              </div>
            ))}

            <div className="pt-4 border-t border-gray-100">
              <div className="flex gap-3 items-center mb-3">
                <Clock size={16} className="text-accent" />
                <span className="font-semibold text-dark text-sm">Office Hours</span>
              </div>
              <div className="space-y-1.5 text-sm text-gray-500 pl-7">
                <div className="flex justify-between"><span>Monday – Friday</span><span className="text-dark font-medium">9:00 – 18:00</span></div>
                <div className="flex justify-between"><span>Saturday</span><span className="text-dark font-medium">10:00 – 14:00</span></div>
                <div className="flex justify-between"><span>Sunday</span><span className="text-gray-400">Closed</span></div>
              </div>
            </div>

            {/* Map embed placeholder */}
            <div className="rounded-2xl overflow-hidden h-[220px] bg-light">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.3!2d49.8671!3d40.3793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDIyJzQ2LjAiTiA0OcKwNTInMDYuMCJF!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Office Location"
              />
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection direction="right" className="lg:col-span-2">
            <div className="bg-[#f7fbfc] rounded-3xl p-8 md:p-10">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={32} className="text-accent" />
                  </div>
                  <h3 className="font-display text-3xl text-dark font-semibold mb-3">Request Received!</h3>
                  <p className="text-gray-500">Thank you, {form.name}. Our team will contact you within 24 hours to confirm your appointment.</p>
                </div>
              ) : (
                <>
                  <h2 className="font-display text-3xl text-dark font-semibold mb-6">Appointment Request</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1.5">Full Name *</label>
                        <input
                          required
                          type="text"
                          value={form.name}
                          onChange={e => setForm({ ...form, name: e.target.value })}
                          placeholder="Your full name"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-dark text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1.5">Email Address *</label>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={e => setForm({ ...form, email: e.target.value })}
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-dark text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1.5">Phone Number</label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={e => setForm({ ...form, phone: e.target.value })}
                          placeholder="+994 XX XXX XX XX"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-dark text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1.5">Appointment Type *</label>
                        <select
                          required
                          value={form.type}
                          onChange={e => setForm({ ...form, type: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-dark text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                        >
                          <option value="">Select type…</option>
                          {appointmentTypes.map(t => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1.5">Describe Your Symptoms / Reason for Visit</label>
                      <textarea
                        rows={5}
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        placeholder="Please briefly describe your main concern or symptoms…"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-dark text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-primary text-white font-semibold py-4 rounded-xl hover:bg-accent transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? 'Sending Request…' : 'Request Appointment'}
                    </button>
                    <p className="text-xs text-gray-400 text-center">Your information is confidential and protected under our privacy policy.</p>
                  </form>
                </>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  )
}

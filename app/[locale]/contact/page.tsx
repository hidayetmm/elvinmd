'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/navigation'

const appointmentTypes = [
  'new_patient_consultation',
  'follow_up_visit',
  'eeg_testing',
  'botox_for_migraine',
  'nerve_block_injection',
  'telehealth_visit',
  'second_opinion',
]

export default function Contact() {
  const { t } = useTranslation('common')
  const router = useRouter()
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
          <div className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">{t('contact_page_title')}</div>
          <h1 className="font-display text-5xl md:text-6xl font-light">{t('book_an_appointment_heading')}</h1>
          <p className="text-white/70 mt-4 text-lg">{t('appointment_confirmation_message')}</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
          {/* Info */}
          <AnimatedSection direction="left" className="space-y-6">
            <h2 className="font-display text-3xl text-dark font-semibold">{t('contact_information_heading')}</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              {t('contact_information_description')}
            </p>

            {[
              { icon: MapPin, label: t('address_label'), value: t('address_full') },
              { icon: Phone, label: t('phone_label'), value: t('phone_number') },
              { icon: Mail, label: t('email_label'), value: t('email') },
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
                <span className="font-semibold text-dark text-sm">{t('office_hours_heading')}</span>
              </div>
              <div className="space-y-1.5 text-sm text-gray-500 pl-7">
                <div className="flex justify-between"><span>{t('monday_friday')}</span><span className="text-dark font-medium">{t('monday_friday_hours')}</span></div>
                <div className="flex justify-between"><span>{t('saturday')}</span><span className="text-dark font-medium">{t('saturday_hours')}</span></div>
                <div className="flex justify-between"><span>{t('sunday')}</span><span className="text-gray-400">{t('sunday_hours')}</span></div>
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
                  <h3 className="font-display text-3xl text-dark font-semibold mb-3">{t('request_received_heading')}</h3>
                  <p className="text-gray-500">{t('request_received_message', { name: form.name })}</p>
                </div>
              ) : (
                <>
                  <h2 className="font-display text-3xl text-dark font-semibold mb-6">{t('appointment_request_heading')}</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1.5">{t('full_name_label')} *</label>
                        <input
                          required
                          type="text"
                          value={form.name}
                          onChange={e => setForm({ ...form, name: e.target.value })}
                          placeholder={t('full_name_placeholder')}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-dark text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1.5">{t('email_address_label')} *</label>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={e => setForm({ ...form, email: e.target.value })}
                          placeholder={t('email_address_placeholder')}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-dark text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1.5">{t('phone_number_label')}</label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={e => setForm({ ...form, phone: e.target.value })}
                          placeholder={t('phone_number_placeholder')}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-dark text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1.5">{t('appointment_type_label')} *</label>
                        <select
                          required
                          value={form.type}
                          onChange={e => setForm({ ...form, type: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-dark text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                        >
                          <option value="">{t('select_type_placeholder')}</option>
                          {appointmentTypes.map(t_key => <option key={t_key} value={t(t_key)}>{t(t_key)}</option>)}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1.5">{t('symptoms_reason_label')}</label>
                      <textarea
                        rows={5}
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        placeholder={t('symptoms_reason_placeholder')}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-dark text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-primary text-white font-semibold py-4 rounded-xl hover:bg-accent transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? t('sending_request_button') : t('request_appointment_button')}
                    </button>
                    <p className="text-xs text-gray-400 text-center">{t('privacy_policy_message')}</p>
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

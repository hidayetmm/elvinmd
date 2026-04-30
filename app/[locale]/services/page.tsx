'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/navigation'

const services = [
  { title: 'eeg_testing_title', desc: 'eeg_testing_desc', duration: '45–90 min' },
  { title: 'emg_ncs_title', desc: 'emg_ncs_desc', duration: '60–90 min' },
  { title: 'botox_for_migraines_title', desc: 'botox_for_migraines_desc', duration: '30 min' },
  { title: 'lumbar_puncture_title', desc: 'lumbar_puncture_desc', duration: '30–45 min' },
  { title: 'nerve_block_injections_title', desc: 'nerve_block_injections_desc', duration: '15–20 min' },
  { title: 'cognitive_assessment_title', desc: 'cognitive_assessment_desc', duration: '45–60 min' },
  { title: 'neurological_consultation_title', desc: 'neurological_consultation_desc', duration: '60 min' },
  { title: 'telehealth_consultation_title', desc: 'telehealth_consultation_desc', duration: '30–45 min' },
]

export default function Services() {
  const { t, i18n } = useTranslation('common')
  const router = useRouter()
  const locale = i18n.language

  return (
    <main>
      <Navbar />
      <section className="bg-gradient-to-br from-primary to-[#0a8fa8] py-24 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">{t('what_we_offer')}</div>
          <h1 className="font-display text-5xl md:text-6xl font-light leading-tight">{t('diagnostic_treatment_services_heading')}</h1>
          <p className="text-white/70 mt-4 text-lg">{t('diagnostic_treatment_services_description')}</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.07} className="group bg-[#f7fbfc] rounded-2xl p-7 hover:bg-primary transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-white/10">
                  <span className="text-accent group-hover:text-white font-bold text-sm">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="font-semibold text-dark group-hover:text-white mb-2 transition-colors">{t(s.title)}</h3>
                <p className="text-gray-500 group-hover:text-white/70 text-sm leading-relaxed mb-4 transition-colors">{t(s.desc)}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400 group-hover:text-white/50 transition-colors">⏱ {s.duration}</span>
                  <ArrowRight size={16} className="text-accent group-hover:text-white opacity-0 group-hover:opacity-100 transition-all" />
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-20 bg-gradient-to-br from-primary to-accent rounded-3xl p-12 text-white text-center">
            <h2 className="font-display text-3xl md:text-4xl font-light mb-4">{t('not_sure_service_needed_heading')}</h2>
            <p className="text-white/70 mb-8 max-w-lg mx-auto">{t('not_sure_service_needed_description')}</p>
            <Link href={`/${locale}/contact`} className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-7 py-4 rounded-full hover:bg-gray-50 transition-colors">
              {t('schedule_consultation_button')} <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
      <Footer />
    </main>
  )
}

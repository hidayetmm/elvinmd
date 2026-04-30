'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import Link from 'next/link'
import { Brain, Zap, Activity, Heart, Eye, Stethoscope, ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/navigation'

const specialties = [
  {
    icon: Brain,
    title: 'headache_migraine_title',
    desc: 'headache_migraine_desc_full',
    treatments: ['botox_for_chronic_migraine', 'cgrp_inhibitor_therapy', 'trigger_management', 'acute_rescue_medications'],
    img: 'https://images.unsplash.com/photo-1502139214982-d0ad755818d8?w=700&q=80',
  },
  {
    icon: Zap,
    title: 'epilepsy_seizures_title',
    desc: 'epilepsy_seizures_desc_full',
    treatments: ['ambulatory_video_eeg', 'anti_seizure_medications', 'ketogenic_diet_support', 'surgical_referral_pathway'],
    img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=700&q=80',
  },
  {
    icon: Activity,
    title: 'multiple_sclerosis_title',
    desc: 'multiple_sclerosis_desc_full',
    treatments: ['disease_modifying_therapy', 'mri_monitoring', 'relapse_management', 'fatigue_spasticity_care'],
    img: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=700&q=80',
  },
  {
    icon: Heart,
    title: 'parkinsons_disease_title',
    desc: 'parkinsons_disease_desc_full',
    treatments: ['dopaminergic_therapy', 'dbs_candidacy_evaluation', 'gait_balance_training', 'tremor_management'],
    img: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=700&q=80',
  },
  {
    icon: Eye,
    title: 'stroke_neurology_title',
    desc: 'stroke_neurology_desc_full',
    treatments: ['secondary_prevention', 'anticoagulation_management', 'post_stroke_rehab_guidance', 'carotid_artery_evaluation'],
    img: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=700&q=80',
  },
  {
    icon: Stethoscope,
    title: 'memory_disorders_title',
    desc: 'memory_disorders_desc_full',
    treatments: ['cognitive_screening', 'neuropsychological_testing', 'cholinesterase_inhibitors', 'caregiver_support'],
    img: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=700&q=80',
  },
]

export default function Specialties() {
  const { t, i18n } = useTranslation('common')
  const locale = i18n.language

  return (
    <main>
      <Navbar />
      <section className="bg-gradient-to-br from-primary to-[#0a8fa8] py-24 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">{t('expertise')}</div>
          <h1 className="font-display text-5xl md:text-6xl font-light leading-tight">{t('neurology_specialties_title')}</h1>
          <p className="text-white/70 mt-4 text-lg max-w-xl mx-auto">{t('neurology_specialties_page_description')}</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {specialties.map(({ icon: Icon, title, desc, treatments, img }, i) => (
            <AnimatedSection key={title} className={`grid lg:grid-cols-2 gap-14 items-center ${i % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={i % 2 !== 0 ? 'lg:col-start-2' : ''}>
                <img src={img} alt={t(title)} className="rounded-3xl w-full h-[380px] object-cover" />
              </div>
              <div className={i % 2 !== 0 ? 'lg:col-start-1' : ''}>
                <div className="w-12 h-12 bg-light rounded-xl flex items-center justify-center mb-5">
                  <Icon size={22} className="text-primary" />
                </div>
                <h2 className="font-display text-3xl text-dark font-semibold mb-4">{t(title)}</h2>
                <p className="text-gray-500 leading-relaxed mb-6">{t(desc)}</p>
                <ul className="space-y-2.5 mb-8">
                  {treatments.map(t_key => (
                    <li key={t_key} className="flex items-center gap-2.5 text-sm text-gray-600">
                      <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <ArrowRight size={11} className="text-accent" />
                      </div>
                      {t(t_key)}
                    </li>
                  ))}
                </ul>
                <Link href={`/${locale}/contact`} className="inline-flex items-center gap-2 bg-primary text-white font-medium px-6 py-3.5 rounded-full hover:bg-accent transition-colors duration-300 text-sm">
                  {t('book_a_consultation')} <ArrowRight size={14} />
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}

'use client'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import Counter from '@/components/Counter'
import { ChevronRight, Star, CheckCircle2, Phone, ArrowRight, Brain, Zap, Eye, Activity, Heart, Stethoscope } from 'lucide-react'
import Image from "next/image";
import ElvinHasanliImg from '/public/images/elvin-md.jpeg'
import { useTranslation } from 'react-i18next'

const specialties = [
  { icon: Brain, title: 'headache_migraine_title', desc: 'headache_migraine_desc' },
  { icon: Zap, title: 'epilepsy_seizures_title', desc: 'epilepsy_seizures_desc' },
  { icon: Activity, title: 'multiple_sclerosis_title', desc: 'multiple_sclerosis_desc' },
  { icon: Heart, title: 'parkinsons_disease_title', desc: 'parkinsons_disease_desc' },
  { icon: Eye, title: 'stroke_neurology_title', desc: 'stroke_neurology_desc' },
  { icon: Stethoscope, title: 'memory_disorders_title', desc: 'memory_disorders_desc' },
]

const checkupPlans = [
  {
    id: 'neurological',
    title: 'neurological_baseline_title',
    desc: 'neurological_baseline_desc',
    items: ['neurological_baseline_item1', 'neurological_baseline_item2', 'neurological_baseline_item3'],
    img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80',
  },
  {
    id: 'migraine',
    title: 'migraine_management_title',
    desc: 'migraine_management_desc',
    items: ['migraine_management_item1', 'migraine_management_item2', 'migraine_management_item3'],
    img: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=600&q=80',
  },
  {
    id: 'memory',
    title: 'memory_health_checkup_title',
    desc: 'memory_health_checkup_desc',
    items: ['memory_health_checkup_item1', 'memory_health_checkup_item2', 'memory_health_checkup_item3'],
    img: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&q=80',
  },
]

const testimonials = [
  { name: 'Lena Mammadova', role: 'migraine_patient', text: 'testimonial_lena', rating: 5 },
  { name: 'Farid Aliyev', role: 'epilepsy_patient', text: 'testimonial_farid', rating: 5 },
  { name: 'Nigar Huseynova', role: 'ms_patient', text: 'testimonial_nigar', rating: 5 },
]

const whyUs = [
  'why_us_item1',
  'why_us_item2',
  'why_us_item3',
  'why_us_item4',
  'why_us_item5',
  'why_us_item6',
]

export default function Home() {
  const { t } = useTranslation('common')
  const [activeTab, setActiveTab] = useState('neurological')
  const active = checkupPlans.find(p => p.id === activeTab)!

  return (
    <main>
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="relative min-h-[92vh] bg-gradient-to-br from-primary via-[#0d6e80] to-[#0a8fa8] overflow-hidden flex items-center">
        {/* Decorative circles */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[15%] w-[400px] h-[400px] rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute top-1/2 left-[-5%] w-[300px] h-[300px] rounded-full bg-white/5 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center py-20 lg:py-0">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-xs font-medium px-4 py-2 rounded-full mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              {t('hero_welcome')}
            </div>

            <h1 className="font-display text-5xl md:text-6xl xl:text-7xl text-white font-light leading-[1.1] mb-6"
              style={{ animation: 'fadeUp 0.8s ease forwards', opacity: 0 }}>
              {t('hero_title_part1')}<br />
              <em className="not-italic font-medium">{t('hero_title_part2')}</em>
            </h1>

            <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-lg"
              style={{ animation: 'fadeUp 0.8s ease 0.2s forwards', opacity: 0 }}>
              {t('hero_description')}
            </p>

            <div className="flex flex-wrap gap-4" style={{ animation: 'fadeUp 0.8s ease 0.4s forwards', opacity: 0 }}>
              <Link href="/contact" className="bg-white text-primary font-semibold px-7 py-4 rounded-full hover:bg-accent hover:text-white transition-all duration-300 flex items-center gap-2">
                {t('book_appointment')} <ChevronRight size={18} />
              </Link>
              <Link href="/about" className="border border-white/30 text-white font-medium px-7 py-4 rounded-full hover:bg-white/10 transition-all duration-300">
                {t('learn_more')}
              </Link>
            </div>

            {/* Trust badge */}
            <div className="mt-10 flex items-center gap-4"
              style={{ animation: 'fadeUp 0.8s ease 0.6s forwards', opacity: 0 }}>
              <div className="flex -space-x-2">
                {['2', '3', '4', '5', '6'].map(n => (
                  <div key={n} className="w-9 h-9 rounded-full border-2 border-white/30 bg-white/20 flex items-center justify-center text-white text-xs font-bold overflow-hidden">
                    {n}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="#FFD700" stroke="none" />)}
                </div>
                <div className="text-white/70 text-sm">{t('patients_treated_count')}</div>
              </div>
            </div>
          </div>

          {/* Doctor image card */}
          <div className="relative hidden lg:block"
            style={{ animation: 'fadeUp 0.8s ease 0.3s forwards', opacity: 0 }}>
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl max-w-md mx-auto">
              <Image
                src={ElvinHasanliImg}
                alt="Dr. Elvin Hasanli"
                className="w-full h-[520px] object-cover object-center"
              />
              {/* Floating cards */}
              <div className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Brain size={20} className="text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-dark text-sm">{t('years_experience_short')}</div>
                  <div className="text-gray-400 text-xs">{t('neurology_experience')}</div>
                </div>
              </div>
              <div className="absolute top-6 right-6 bg-white rounded-2xl shadow-xl p-4">
                <div className="text-center">
                  <div className="font-display text-3xl font-semibold text-primary">MD</div>
                  <div className="text-gray-400 text-xs">{t('board_certified')}</div>
                </div>
              </div>
            </div>

            {/* Behind decoration */}
            <div className="absolute top-8 right-0 w-[calc(100%-40px)] h-full bg-white/10 rounded-3xl -z-0" />
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </section>

      {/* ─── STATS ─── */}
      <section className="bg-accent py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
            {[
              { n: 15, suf: '+', label: t('years_experience') },
              { n: 2400, suf: '+', label: t('patients_treated') },
              { n: 6, suf: '', label: t('neurology_specialties_count') },
              { n: 98, suf: '%', label: t('patient_satisfaction') },
            ].map(({ n, suf, label }) => (
              <div key={label}>
                <div className="font-display text-5xl font-semibold mb-1">
                  <Counter end={n} suffix={suf} />
                </div>
                <div className="text-white/80 text-sm uppercase tracking-wider">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT TEASER ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left" className="relative">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&q=80"
                alt="Consultation"
                className="rounded-3xl w-full h-[480px] object-cover"
              />
              <div className="absolute -bottom-8 -right-8 bg-light rounded-3xl p-6 shadow-lg max-w-[220px]">
                <div className="font-display text-4xl text-primary font-semibold">2,400+</div>
                <div className="text-gray-500 text-sm mt-1">{t('patients_treated_description')}</div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">{t('about_dr_hasanov')}</div>
            <h2 className="font-display text-4xl md:text-5xl text-dark font-light leading-tight mb-6">
              {t('about_title_part1')} <em>{t('about_title_part2')}</em> {t('about_title_part3')}
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              {t('about_description_part1')}
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              {t('about_description_part2')}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {whyUs.map(item => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-gray-600">
                  <CheckCircle2 size={16} className="text-accent flex-shrink-0" />
                  {t(item)}
                </li>
              ))}
            </ul>
            <Link href="/about" className="inline-flex items-center gap-2 bg-primary text-white font-medium px-7 py-4 rounded-full hover:bg-accent transition-colors duration-300">
              {t('read_full_profile')} <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── SPECIALTIES ─── */}
      <section className="py-24 bg-[#f7fbfc]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <div className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">{t('what_i_treat')}</div>
            <h2 className="font-display text-4xl md:text-5xl text-dark font-light">{t('neurology_specialties_title')}</h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map(({ icon: Icon, title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 0.1} className="group bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gray-100">
                <div className="w-12 h-12 bg-light rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent transition-colors duration-300">
                  <Icon size={22} className="text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-dark mb-2">{t(title)}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{t(desc)}</p>
                <div className="mt-4 flex items-center gap-1 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {t('learn_more')} <ChevronRight size={14} />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CHECKUP PLANS ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <div className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">{t('diagnostic_programs')}</div>
            <h2 className="font-display text-4xl md:text-5xl text-dark font-light">{t('neurological_checkup_plans_title')}</h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto">{t('neurological_checkup_plans_description')}</p>
          </AnimatedSection>

          {/* Tabs */}
          <div className="flex justify-center gap-2 mb-10 flex-wrap">
            {checkupPlans.map(p => (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === p.id ? 'bg-primary text-white shadow-md' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
              >
                {t(p.title)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatedSection key={activeTab} className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-3xl overflow-hidden h-[380px]">
              <img src={active.img} alt={t(active.title)} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <div>
              <h3 className="font-display text-3xl text-dark font-semibold mb-4">{t(active.title)}</h3>
              <p className="text-gray-500 leading-relaxed mb-7">{t(active.desc)}</p>
              <ul className="space-y-4 mb-8">
                {active.items.map(item => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={14} className="text-accent" />
                    </div>
                    {t(item)}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white font-medium px-7 py-4 rounded-full hover:bg-accent transition-colors duration-300">
                {t('book_this_plan')} <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── WHY CHOOSE ─── */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <div className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">{t('why_choose_dr_hasanov')}</div>
            <h2 className="font-display text-4xl md:text-5xl font-light leading-tight mb-8">
              {t('why_choose_title_part1')} <em>{t('why_choose_title_part2')}</em> {t('why_choose_title_part3')}
            </h2>
            <ul className="space-y-4 mb-10">
              {whyUs.map(item => (
                <li key={item} className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 size={16} className="text-accent flex-shrink-0" />
                  {t(item)}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-7 py-4 rounded-full hover:bg-accent hover:text-white transition-all duration-300">
              {t('book_appointment')} <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <img
              src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=700&q=80"
              alt="Doctor at work"
              className="rounded-3xl w-full h-[480px] object-cover"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-24 bg-[#f7fbfc]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <div className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">{t('patient_stories')}</div>
            <h2 className="font-display text-4xl md:text-5xl text-dark font-light">{t('what_patients_say')}</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t_item, i) => (
              <AnimatedSection key={t_item.name} delay={i * 0.15} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t_item.rating)].map((_, j) => <Star key={j} size={15} fill="#00B4C8" stroke="none" />)}
                </div>
                <svg className="text-light mb-4" width="32" height="24" fill="currentColor" viewBox="0 0 32 24">
                  <path d="M0 24V14.4C0 6.4 5.333 1.6 16 0l1.6 2.4C12.267 3.6 9.067 6 8 10H14V24H0zm18 0V14.4C18 6.4 23.333 1.6 34 0l1.6 2.4C30.267 3.6 27.067 6 26 10H32V24H18z"/>
                </svg>
                <p className="text-gray-600 leading-relaxed text-sm mb-6 italic">"{t(t_item.text)}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center font-bold text-accent text-sm">
                    {t_item.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-dark text-sm">{t_item.name}</div>
                    <div className="text-gray-400 text-xs">{t(t_item.role)}</div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── APPOINTMENT CTA ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection className="bg-gradient-to-br from-primary to-accent rounded-3xl p-12 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <circle cx="10" cy="10" r="40" fill="white"/>
                <circle cx="90" cy="90" r="30" fill="white"/>
              </svg>
            </div>
            <div className="relative z-10">
              <div className="text-sm font-semibold uppercase tracking-widest text-white/70 mb-3">{t('appointment')}</div>
              <h2 className="font-display text-4xl md:text-5xl font-light mb-4">
                {t('appointment_cta_title_part1')}<br/>{t('appointment_cta_title_part2')}
              </h2>
              <p className="text-white/70 mb-8 max-w-md mx-auto">{t('appointment_cta_description')}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href={`tel:${t('phone_number')}`} className="flex items-center gap-2 bg-white/20 text-white border border-white/30 px-6 py-3.5 rounded-full hover:bg-white/30 transition-colors">
                  <Phone size={16} />
                  {t('phone_number')}
                </a>
                <Link href="/contact" className="bg-white text-primary font-semibold px-7 py-3.5 rounded-full hover:bg-gray-50 transition-colors flex items-center gap-2">
                  {t('book_online')} <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  )
}

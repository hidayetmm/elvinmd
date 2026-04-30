'use client'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import Link from 'next/link'
import { CheckCircle2, Award, GraduationCap, Briefcase, ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/navigation'

const timeline = [
  { year: '2024', title: 'timeline_senior_neurologist_title', place: 'timeline_senior_neurologist_place', desc: 'timeline_senior_neurologist_desc' },
  { year: '2018', title: 'timeline_fellowship_title', place: 'timeline_fellowship_place', desc: 'timeline_fellowship_desc' },
  { year: '2012', title: 'timeline_residency_title', place: 'timeline_residency_place', desc: 'timeline_residency_desc' },
  { year: '2008', title: 'timeline_md_degree_title', place: 'timeline_md_degree_place', desc: 'timeline_md_degree_desc' },
]

const awards = [
  'award_best_neurologist',
  'award_ean_member',
  'award_botox_certified',
  'award_published_researcher',
]

export default function About() {
  const { t, i18n } = useTranslation('common')
  const router = useRouter()
  const locale = i18n.language

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-[#0a8fa8] py-24 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">{t('about')}</div>
          <h1 className="font-display text-5xl md:text-6xl font-light leading-tight mb-4">{t('dr_elvin_hasanli_md')}</h1>
          <p className="text-white/70 text-lg">{t('board_certified_neurologist_baku')}</p>
        </div>
      </section>

      {/* Bio */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=700&q=80"
                alt={t('dr_hasanli_alt')}
                className="rounded-3xl w-full h-[520px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-white rounded-2xl p-6 text-center">
                <div className="font-display text-4xl font-semibold">10+</div>
                <div className="text-sm opacity-90">{t('years_of_experience')}</div>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <div className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">{t('biography')}</div>
            <h2 className="font-display text-4xl text-dark font-light leading-tight mb-6">
              {t('bio_heading')}
            </h2>
            <p className="text-gray-500 leading-relaxed mb-5">
              {t('bio_paragraph1')}
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              {t('bio_paragraph2')}
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {awards.slice(0, 2).map(a => (
                <div key={a} className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 size={15} className="text-accent mt-0.5 flex-shrink-0" />
                  {t(a)}
                </div>
              ))}
            </div>
            <Link href={`/${locale}/contact`} className="inline-flex items-center gap-2 bg-primary text-white font-medium px-7 py-4 rounded-full hover:bg-accent transition-colors duration-300">
              {t('book_a_consultation')} <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[#f7fbfc]">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <div className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">{t('career_path')}</div>
            <h2 className="font-display text-4xl text-dark font-light">{t('education_experience')}</h2>
          </AnimatedSection>
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 md:-translate-x-1/2" />
            {timeline.map((item, i) => (
              <AnimatedSection key={item.year} delay={i * 0.15} className={`relative flex flex-col md:flex-row gap-6 mb-12 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2" />
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-5 h-5 bg-accent rounded-full border-4 border-white shadow top-1.5" />
                <div className={`md:w-1/2 pl-14 md:pl-0 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="text-accent text-sm font-bold mb-1">{item.year}</div>
                    <h3 className="font-semibold text-dark mb-0.5">{t(item.title)}</h3>
                    <div className="text-primary text-sm mb-2 flex items-center gap-1">
                      <Briefcase size={12} /> {t(item.place)}
                    </div>
                    <p className="text-gray-500 text-sm">{t(item.desc)}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <div className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">{t('recognitions')}</div>
            <h2 className="font-display text-4xl text-dark font-light">{t('awards_certifications')}</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((a, i) => (
              <AnimatedSection key={a} delay={i * 0.1} className="bg-light rounded-2xl p-7 text-center">
                <Award size={32} className="text-accent mx-auto mb-4" />
                <p className="text-dark font-medium text-sm">{t(a)}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

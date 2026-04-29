import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const services = [
  { title: 'EEG Testing', desc: 'Electroencephalography to diagnose epilepsy, encephalopathy, and sleep disorders. Both routine and ambulatory (48h/72h) EEG available.', duration: '45–90 min' },
  { title: 'EMG / Nerve Conduction Study', desc: 'Electromyography and nerve conduction studies for diagnosing carpal tunnel, neuropathy, radiculopathy, and neuromuscular diseases.', duration: '60–90 min' },
  { title: 'Botox for Migraines', desc: 'OnabotulinumtoxinA injections every 12 weeks for adults with chronic migraine (15+ headache days/month). Covered by most insurers.', duration: '30 min' },
  { title: 'Lumbar Puncture (Spinal Tap)', desc: 'Diagnostic cerebrospinal fluid analysis for infections, MS, autoimmune conditions, and subarachnoid hemorrhage.', duration: '30–45 min' },
  { title: 'Nerve Block Injections', desc: 'Greater occipital nerve blocks, supraorbital nerve blocks, and sphenopalatine ganglion blocks for acute headache relief.', duration: '15–20 min' },
  { title: 'Cognitive Assessment', desc: 'Standardized cognitive screening tests (MoCA, MMSE, ACE-III) for early detection of dementia and mild cognitive impairment.', duration: '45–60 min' },
  { title: 'Neurological Consultation', desc: 'Comprehensive initial consultation with history, neurological examination, and diagnostic plan. New and follow-up patients welcome.', duration: '60 min' },
  { title: 'Telehealth Consultation', desc: 'Secure video consultations for follow-ups, medication reviews, second opinions, and patients outside Baku.', duration: '30–45 min' },
]

export default function Services() {
  return (
    <main>
      <Navbar />
      <section className="bg-gradient-to-br from-primary to-[#0a8fa8] py-24 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">What We Offer</div>
          <h1 className="font-display text-5xl md:text-6xl font-light leading-tight">Diagnostic &amp; Treatment Services</h1>
          <p className="text-white/70 mt-4 text-lg">Equipped with the latest neurology diagnostics — in one place.</p>
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
                <h3 className="font-semibold text-dark group-hover:text-white mb-2 transition-colors">{s.title}</h3>
                <p className="text-gray-500 group-hover:text-white/70 text-sm leading-relaxed mb-4 transition-colors">{s.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400 group-hover:text-white/50 transition-colors">⏱ {s.duration}</span>
                  <ArrowRight size={16} className="text-accent group-hover:text-white opacity-0 group-hover:opacity-100 transition-all" />
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-20 bg-gradient-to-br from-primary to-accent rounded-3xl p-12 text-white text-center">
            <h2 className="font-display text-3xl md:text-4xl font-light mb-4">Not sure which service you need?</h2>
            <p className="text-white/70 mb-8 max-w-lg mx-auto">Book a general consultation and Dr. Hasanov will guide you to the right diagnostic path.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-7 py-4 rounded-full hover:bg-gray-50 transition-colors">
              Schedule Consultation <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
      <Footer />
    </main>
  )
}

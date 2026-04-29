import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnimatedSection from '@/components/AnimatedSection'
import Link from 'next/link'
import { Brain, Zap, Activity, Heart, Eye, Stethoscope, ArrowRight } from 'lucide-react'

const specialties = [
  {
    icon: Brain,
    title: 'Headache & Migraine',
    desc: 'Chronic and episodic migraine, cluster headaches, tension-type, and medication overuse headaches. We offer Botox injections, CGRP monoclonal antibodies, and comprehensive preventive programs.',
    treatments: ['Botox for Chronic Migraine', 'CGRP Inhibitor Therapy', 'Trigger Management', 'Acute Rescue Medications'],
    img: 'https://images.unsplash.com/photo-1502139214982-d0ad755818d8?w=700&q=80',
  },
  {
    icon: Zap,
    title: 'Epilepsy & Seizures',
    desc: 'From first seizure workup to refractory epilepsy management. We provide ambulatory EEG, video EEG, and collaborate with neurosurgeons for surgical candidacy evaluation.',
    treatments: ['Ambulatory & Video EEG', 'Anti-Seizure Medications', 'Ketogenic Diet Support', 'Surgical Referral Pathway'],
    img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=700&q=80',
  },
  {
    icon: Activity,
    title: 'Multiple Sclerosis',
    desc: 'Diagnosis, disease-modifying therapy initiation and monitoring, relapse management, and long-term disability prevention strategies for RRMS, SPMS, and PPMS.',
    treatments: ['Disease-Modifying Therapy', 'MRI Monitoring', 'Relapse Management', 'Fatigue & Spasticity Care'],
    img: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=700&q=80',
  },
  {
    icon: Heart,
    title: "Parkinson's Disease",
    desc: 'Comprehensive Parkinson\'s and movement disorder care, including medication optimization, deep brain stimulation counseling, and coordination with physical and occupational therapy.',
    treatments: ['Dopaminergic Therapy', 'DBS Candidacy Evaluation', 'Gait & Balance Training', 'Tremor Management'],
    img: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=700&q=80',
  },
  {
    icon: Eye,
    title: 'Stroke Neurology',
    desc: 'Post-stroke evaluation, secondary prevention, rehabilitation guidance, and management of TIA. We work closely with cardiologists and vascular surgeons for comprehensive stroke care.',
    treatments: ['Secondary Prevention', 'Anticoagulation Management', 'Post-Stroke Rehab Guidance', 'Carotid Artery Evaluation'],
    img: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=700&q=80',
  },
  {
    icon: Stethoscope,
    title: 'Memory & Dementia',
    desc: 'Early detection of mild cognitive impairment and Alzheimer\'s disease. We provide cognitive assessments, lifestyle recommendations, and medication management to slow progression.',
    treatments: ['Cognitive Screening', 'Neuropsychological Testing', 'Cholinesterase Inhibitors', 'Caregiver Support'],
    img: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=700&q=80',
  },
]

export default function Specialties() {
  return (
    <main>
      <Navbar />
      <section className="bg-gradient-to-br from-primary to-[#0a8fa8] py-24 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Expertise</div>
          <h1 className="font-display text-5xl md:text-6xl font-light leading-tight">Neurology Specialties</h1>
          <p className="text-white/70 mt-4 text-lg max-w-xl mx-auto">Focused, expert care for the most complex conditions of the brain and nervous system.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {specialties.map(({ icon: Icon, title, desc, treatments, img }, i) => (
            <AnimatedSection key={title} className={`grid lg:grid-cols-2 gap-14 items-center ${i % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={i % 2 !== 0 ? 'lg:col-start-2' : ''}>
                <img src={img} alt={title} className="rounded-3xl w-full h-[380px] object-cover" />
              </div>
              <div className={i % 2 !== 0 ? 'lg:col-start-1' : ''}>
                <div className="w-12 h-12 bg-light rounded-xl flex items-center justify-center mb-5">
                  <Icon size={22} className="text-primary" />
                </div>
                <h2 className="font-display text-3xl text-dark font-semibold mb-4">{title}</h2>
                <p className="text-gray-500 leading-relaxed mb-6">{desc}</p>
                <ul className="space-y-2.5 mb-8">
                  {treatments.map(t => (
                    <li key={t} className="flex items-center gap-2.5 text-sm text-gray-600">
                      <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <ArrowRight size={11} className="text-accent" />
                      </div>
                      {t}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white font-medium px-6 py-3.5 rounded-full hover:bg-accent transition-colors duration-300 text-sm">
                  Book a Consultation <ArrowRight size={14} />
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

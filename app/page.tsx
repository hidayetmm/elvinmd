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

const specialties = [
  { icon: Brain, title: 'Headache & Migraine', desc: 'Advanced diagnosis and treatment of chronic migraine, cluster headaches, and tension-type headaches.' },
  { icon: Zap, title: 'Epilepsy & Seizures', desc: 'Comprehensive epilepsy care including EEG monitoring, medication management, and surgical evaluation.' },
  { icon: Activity, title: 'Multiple Sclerosis', desc: 'Disease-modifying therapy, symptom management and long-term care for MS patients.' },
  { icon: Heart, title: 'Parkinson\'s Disease', desc: 'Personalized care plans for movement disorders, tremor, and neurodegenerative conditions.' },
  { icon: Eye, title: 'Stroke Neurology', desc: 'Rapid evaluation, treatment, and rehabilitation support for stroke and TIA patients.' },
  { icon: Stethoscope, title: 'Memory Disorders', desc: 'Cognitive assessment and management of Alzheimer\'s disease and dementia syndromes.' },
]

const checkupPlans = [
  {
    id: 'neurological',
    title: 'Neurological Baseline',
    desc: 'A full diagnostic baseline for patients with first-time neurological symptoms.',
    items: ['Complete Neurological Exam', 'MRI Brain & Spine Review', 'EEG Recording & Interpretation'],
    img: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80',
  },
  {
    id: 'migraine',
    title: 'Migraine Management',
    desc: 'Targeted evaluation and personalized treatment plan for headache disorders.',
    items: ['Headache Diary Analysis', 'Trigger Identification', 'Preventive & Acute Therapy Plan'],
    img: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=600&q=80',
  },
  {
    id: 'memory',
    title: 'Memory Health Checkup',
    desc: 'Early detection of cognitive decline and dementia risk assessment.',
    items: ['Cognitive Screening Battery', 'Neuropsychological Testing', 'MCI & Dementia Risk Report'],
    img: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&q=80',
  },
]

const testimonials = [
  { name: 'Lena Mammadova', role: 'Migraine Patient', text: 'Dr. Hasanov changed my life. After years of debilitating migraines, I finally have a treatment plan that works. His patience and expertise are unmatched.', rating: 5 },
  { name: 'Farid Aliyev', role: 'Epilepsy Patient', text: 'I was terrified after my first seizure. Dr. Hasanov explained everything clearly, adjusted my medications perfectly, and I\'ve been seizure-free for two years.', rating: 5 },
  { name: 'Nigar Huseynova', role: 'MS Patient', text: 'Managing MS is a lifelong journey, and I\'m grateful to have Dr. Hasanov as my neurologist. He stays current with the latest therapies and truly cares.', rating: 5 },
]

const whyUs = [
  'Evidence-Based, Patient-First Care',
  'Board-Certified Neurologist',
  'Same-Week Appointments Available',
  'Latest Diagnostic Technology',
  'Transparent, Clear Communication',
  'Multilingual (Azerbaijani, Russian, English)',
]

export default function Home() {
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
              Welcome to Dr. Hasanov's Neurology Practice
            </div>

            <h1 className="font-display text-5xl md:text-6xl xl:text-7xl text-white font-light leading-[1.1] mb-6"
              style={{ animation: 'fadeUp 0.8s ease forwards', opacity: 0 }}>
              The neurologist<br />
              <em className="not-italic font-medium">who listens first</em>
            </h1>

            <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-lg"
              style={{ animation: 'fadeUp 0.8s ease 0.2s forwards', opacity: 0 }}>
              Board-certified neurologist with 10+ years helping patients in Baku navigate complex conditions — from migraine and epilepsy to Parkinson's and stroke.
            </p>

            <div className="flex flex-wrap gap-4" style={{ animation: 'fadeUp 0.8s ease 0.4s forwards', opacity: 0 }}>
              <Link href="/contact" className="bg-white text-primary font-semibold px-7 py-4 rounded-full hover:bg-accent hover:text-white transition-all duration-300 flex items-center gap-2">
                Book Appointment <ChevronRight size={18} />
              </Link>
              <Link href="/about" className="border border-white/30 text-white font-medium px-7 py-4 rounded-full hover:bg-white/10 transition-all duration-300">
                Learn More
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
                <div className="text-white/70 text-sm">2,400+ treated patients</div>
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
                  <div className="font-semibold text-dark text-sm">10+ Years</div>
                  <div className="text-gray-400 text-xs">Neurology Experience</div>
                </div>
              </div>
              <div className="absolute top-6 right-6 bg-white rounded-2xl shadow-xl p-4">
                <div className="text-center">
                  <div className="font-display text-3xl font-semibold text-primary">MD</div>
                  <div className="text-gray-400 text-xs">Board Certified</div>
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
              { n: 15, suf: '+', label: 'Years Experience' },
              { n: 2400, suf: '+', label: 'Patients Treated' },
              { n: 6, suf: '', label: 'Neurology Specialties' },
              { n: 98, suf: '%', label: 'Patient Satisfaction' },
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
                <div className="text-gray-500 text-sm mt-1">Patients successfully treated and discharged</div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">About Dr. Hasanov</div>
            <h2 className="font-display text-4xl md:text-5xl text-dark font-light leading-tight mb-6">
              Dedicated to <em>precise</em> &amp; compassionate neurology
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Dr. Elvin Hasanli is a board-certified neurologist trained at the prestigious Sechenov University in Moscow, with fellowship training at the Cleveland Clinic. He brings world-class neurological expertise to Baku, combining cutting-edge diagnostics with a deeply humanistic approach to patient care.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Fluent in Azerbaijani, Russian, and English, Dr. Hasanov ensures every patient feels heard and understood — because great neurology starts with listening.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {whyUs.map(item => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-gray-600">
                  <CheckCircle2 size={16} className="text-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/about" className="inline-flex items-center gap-2 bg-primary text-white font-medium px-7 py-4 rounded-full hover:bg-accent transition-colors duration-300">
              Read Full Profile <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── SPECIALTIES ─── */}
      <section className="py-24 bg-[#f7fbfc]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <div className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">What I Treat</div>
            <h2 className="font-display text-4xl md:text-5xl text-dark font-light">Neurology Specialties</h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map(({ icon: Icon, title, desc }, i) => (
              <AnimatedSection key={title} delay={i * 0.1} className="group bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gray-100">
                <div className="w-12 h-12 bg-light rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent transition-colors duration-300">
                  <Icon size={22} className="text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-dark mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                <div className="mt-4 flex items-center gap-1 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more <ChevronRight size={14} />
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
            <div className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Diagnostic Programs</div>
            <h2 className="font-display text-4xl md:text-5xl text-dark font-light">Neurological Checkup Plans</h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto">Tailored evaluation packages designed to diagnose, monitor, and prevent neurological conditions.</p>
          </AnimatedSection>

          {/* Tabs */}
          <div className="flex justify-center gap-2 mb-10 flex-wrap">
            {checkupPlans.map(p => (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === p.id ? 'bg-primary text-white shadow-md' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
              >
                {p.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatedSection key={activeTab} className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-3xl overflow-hidden h-[380px]">
              <img src={active.img} alt={active.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <div>
              <h3 className="font-display text-3xl text-dark font-semibold mb-4">{active.title}</h3>
              <p className="text-gray-500 leading-relaxed mb-7">{active.desc}</p>
              <ul className="space-y-4 mb-8">
                {active.items.map(item => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={14} className="text-accent" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white font-medium px-7 py-4 rounded-full hover:bg-accent transition-colors duration-300">
                Book This Plan <ArrowRight size={16} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── WHY CHOOSE ─── */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <div className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Why Choose Dr. Hasanov</div>
            <h2 className="font-display text-4xl md:text-5xl font-light leading-tight mb-8">
              Dedicated to providing the <em>best</em> neurological treatment
            </h2>
            <ul className="space-y-4 mb-10">
              {whyUs.map(item => (
                <li key={item} className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 size={16} className="text-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-7 py-4 rounded-full hover:bg-accent hover:text-white transition-all duration-300">
              Book Appointment <ArrowRight size={16} />
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
            <div className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Patient Stories</div>
            <h2 className="font-display text-4xl md:text-5xl text-dark font-light">What patients say</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.15} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} size={15} fill="#00B4C8" stroke="none" />)}
                </div>
                <svg className="text-light mb-4" width="32" height="24" fill="currentColor" viewBox="0 0 32 24">
                  <path d="M0 24V14.4C0 6.4 5.333 1.6 16 0l1.6 2.4C12.267 3.6 9.067 6 8 10H14V24H0zm18 0V14.4C18 6.4 23.333 1.6 34 0l1.6 2.4C30.267 3.6 27.067 6 26 10H32V24H18z"/>
                </svg>
                <p className="text-gray-600 leading-relaxed text-sm mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center font-bold text-accent text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-dark text-sm">{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.role}</div>
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
              <div className="text-sm font-semibold uppercase tracking-widest text-white/70 mb-3">Appointment</div>
              <h2 className="font-display text-4xl md:text-5xl font-light mb-4">
                Get in touch to book<br/>your first appointment
              </h2>
              <p className="text-white/70 mb-8 max-w-md mx-auto">Same-week appointments available. Both in-clinic and telehealth options to suit your schedule.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="tel:+994501234567" className="flex items-center gap-2 bg-white/20 text-white border border-white/30 px-6 py-3.5 rounded-full hover:bg-white/30 transition-colors">
                  <Phone size={16} />
                  +994 50 123-45-67
                </a>
                <Link href="/contact" className="bg-white text-primary font-semibold px-7 py-3.5 rounded-full hover:bg-gray-50 transition-colors flex items-center gap-2">
                  Book Online <ArrowRight size={16} />
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

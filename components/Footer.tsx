import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
                  <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>
                </svg>
              </div>
              <div>
                <div className="font-display text-xl font-semibold leading-tight">Dr. Elvin Hasanli</div>
                <div className="text-xs text-gray-400 tracking-widest uppercase">Neurologist</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Providing compassionate, evidence-based neurological care with over 10 years of experience in Baku and beyond.
            </p>
            <div className="flex gap-3">
              {['facebook', 'instagram', 'linkedin'].map(s => (
                <a key={s} href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors text-gray-400">
                  <span className="sr-only">{s}</span>
                  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                    {s === 'facebook' && <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>}
                    {s === 'instagram' && <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>}
                    {s === 'linkedin' && <><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></>}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Specialties */}
          <div>
            <h4 className="font-semibold text-sm tracking-widest uppercase text-accent mb-5">Specialties</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {['Headache & Migraine', 'Epilepsy & Seizures', 'Multiple Sclerosis', 'Parkinson\'s Disease', 'Stroke Care', 'Memory Disorders'].map(s => (
                <li key={s}><Link href="/specialties" className="hover:text-white transition-colors">{s}</Link></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm tracking-widest uppercase text-accent mb-5">Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {['EEG Testing', 'EMG / NCS', 'Brain MRI Guidance', 'Botox for Migraines', 'Nerve Block Injections', 'Telehealth Consults'].map(s => (
                <li key={s}><Link href="/services" className="hover:text-white transition-colors">{s}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm tracking-widest uppercase text-accent mb-5">Contact</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-accent mt-0.5 flex-shrink-0" />
                <span>28 Nizami Street, 3rd Floor<br/>Baku AZ1000, Azerbaijan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-accent flex-shrink-0" />
                <a href="tel:+994501234567" className="hover:text-white transition-colors">+994 50 123-45-67</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-accent flex-shrink-0" />
                <a href="mailto:dr.hasanli@elvinmd.az" className="hover:text-white transition-colors">dr.hasanli@elvinmd.az</a>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="text-xs text-gray-500 mb-1">Office Hours</div>
              <div className="text-sm text-gray-300">Mon – Fri: 9:00 AM – 6:00 PM</div>
              <div className="text-sm text-gray-300">Saturday: 10:00 AM – 2:00 PM</div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© 2024 Dr. Elvin Hasanli, MD. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

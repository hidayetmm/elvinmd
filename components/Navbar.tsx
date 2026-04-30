'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useRouter, usePathname } from 'next/navigation'

export default function Navbar() {
  const { t, i18n } = useTranslation('common')
  const router = useRouter()
  const pathname = usePathname()
  const locale = i18n.language

  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navLinks = [
    { label: t('home'), href: `/${locale}` },
    { label: t('about'), href: `/${locale}/about` },
    { label: t('specialties'), href: `/${locale}/specialties` },
    { label: t('services'), href: `/${locale}/services` },
    { label: t('contact'), href: `/${locale}/contact` },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`)
    router.push(newPathname)
  }

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-white text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex gap-6 items-center opacity-80">
            <a href="#" className="flex items-center gap-1.5 hover:opacity-100 transition-opacity">
              <MapPin size={14} />
              <span>{t('address')}</span>
            </a>
            <a href={`mailto:${t('email')}`} className="flex items-center gap-1.5 hover:opacity-100 transition-opacity">
              <Mail size={14} />
              <span>{t('email')}</span>
            </a>
          </div>
          <a href="https://wa.me/994501234567" className="flex items-center gap-1.5 hover:opacity-100 transition-opacity">
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/></svg>
            {t('connect_whatsapp')}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white shadow-lg py-3' : 'bg-white py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
                <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>
              </svg>
            </div>
            <div>
              <div className="font-display text-xl font-semibold text-primary leading-tight">{t('doctor_name')}</div>
              <div className="text-xs text-gray-400 tracking-widest uppercase">{t('doctor_specialty')}</div>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(l => (
              <Link key={l.href} href={l.href} className="text-sm font-medium text-gray-600 hover:text-primary transition-colors relative group">
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA and Language Selector */}
          <div className="hidden lg:flex items-center gap-4">
            <select
              value={locale}
              onChange={handleLanguageChange}
              className="bg-gray-100 text-gray-700 text-sm font-medium px-3 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
            >
              <option value="en">EN</option>
              <option value="az">AZ</option>
              <option value="ru">RU</option>
            </select>
            <a href={`tel:${t('phone_number')}`} className="flex items-center gap-2 text-sm text-primary font-medium">
              <Phone size={15} />
              {t('phone_number')}
            </a>
            <Link href={`/${locale}/contact`} className="bg-primary text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-accent transition-colors duration-300">
              {t('book_appointment')}
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button className="lg:hidden p-2 text-primary" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-96' : 'max-h-0'}`}>
          <div className="bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
            {navLinks.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-gray-700 font-medium py-1 border-b border-gray-50">{l.label}</Link>
            ))}
            <select
              value={locale}
              onChange={handleLanguageChange}
              className="bg-gray-100 text-gray-700 text-sm font-medium px-3 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary mt-2"
            >
              <option value="en">EN</option>
              <option value="az">AZ</option>
              <option value="ru">RU</option>
            </select>
            <Link href={`/${locale}/contact`} onClick={() => setOpen(false)} className="bg-primary text-white text-sm font-medium px-5 py-3 rounded-full text-center mt-2">
              {t('book_appointment')}
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

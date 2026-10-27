import type { Metadata } from 'next'
import '../globals.css'
import { ReactNode } from 'react'
import I18nProvider from '@/components/I18nProvider'

export const metadata: Metadata = {
  title: 'Uzm. Dr. Elvin Hasanli — Neurologist',
  description: 'Uzm. Dr. Elvin Hasanli is a neurologist in Baku, trained at Ege University Hospital in Izmir and certified by the Turkish Neurology Board. Headache, epilepsy, MS, stroke, movement disorders, EEG and EMG.',
}

async function getMessages(locale: string) {
  try {
    return (await import(`../../public/locales/${locale}/common.json`)).default
  } catch (error) {
    return (await import(`../../public/locales/en/common.json`)).default
  }
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: ReactNode
  params: { locale: string }
}) {
  const messages = await getMessages(locale)

  return (
    <html lang={locale}>
      <body>
        <I18nProvider locale={locale} messages={messages}>
          {children}
        </I18nProvider>
      </body>
    </html>
  )
}

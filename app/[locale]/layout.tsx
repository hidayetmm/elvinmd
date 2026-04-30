import type { Metadata } from 'next'
import '../globals.css'
import { ReactNode } from 'react'
import I18nProvider from '@/components/I18nProvider'

export const metadata: Metadata = {
  title: 'Dr. Elvin Hasanli — Neurologist',
  description: 'Board-certified neurologist specializing in headache disorders, epilepsy, and neurodegenerative diseases. Compassionate, evidence-based neurological care.',
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

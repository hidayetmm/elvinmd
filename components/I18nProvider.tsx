'use client'

import { I18nextProvider } from 'react-i18next'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { ReactNode } from 'react'

export default function I18nProvider({
  children,
  locale,
  messages,
}: {
  children: ReactNode
  locale: string
  messages: any
}) {
  if (!i18n.isInitialized) {
    i18n
      .use(initReactI18next)
      .init({
        lng: locale,
        resources: {
          [locale]: {
            common: messages,
          },
        },
        fallbackLng: 'en',
        interpolation: {
          escapeValue: false,
        },
      })
  } else if (i18n.language !== locale) {
    i18n.changeLanguage(locale)
    i18n.addResourceBundle(locale, 'common', messages, true, true)
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}

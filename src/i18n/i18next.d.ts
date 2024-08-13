import 'i18next'

import en from './locales/en.json'
import vi from './locales/vi.json'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'en'

    resources: {
      en: typeof en
      vi: typeof vi
    }
  }
}

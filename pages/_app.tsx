import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { IntlProvider } from 'react-intl'

import locales from '@locales'
import '../styles/global.css'

const App = ({ Component, pageProps }: AppProps) => {
  const { locale = 'zh-CN', defaultLocale } = useRouter()
  const messages = locales[locale]

  return (
    <>
      <IntlProvider
        locale={locale || 'zh-CN'}
        defaultLocale={defaultLocale}
        messages={messages}
      >
        <Component {...pageProps} />
      </IntlProvider>
    </>
  )
}

export default App

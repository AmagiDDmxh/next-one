import { AppProps } from 'next/app'
import { IntlProvider } from 'react-intl'

import locales from '@locales'
import { useTypeSafeRouter } from '@libs/hooks/useTypeSafeRouter'
import '../styles/global.css'

const App = ({ Component, pageProps }: AppProps) => {
  const { locale = 'zh-CN', defaultLocale } = useTypeSafeRouter()
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

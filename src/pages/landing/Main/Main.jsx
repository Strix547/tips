import Head from 'next/head'
import { useTranslation } from 'next-i18next'
import Script from 'next/script'

import {
  Header,
  PaymentMethods,
  Info,
  ForBusiness,
  Consultation,
  QaBlock,
  Footer
} from 'landing/new/components'

export const MainPage = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>{t('main-page')}</title>
      </Head>

      <Header />

      <main style={{ overflowX: 'hidden' }}>
        <PaymentMethods />
        <Info />
        <ForBusiness />
        <Consultation />
        {/* <QaBlock /> */}
      </main>

      <Footer />

      <Script src="https://livechatv2.chat2desk.com/packs/ie-11-support.js" />

      <Script>
        {`window.chat24_token = "786679e44f5ea835818f59daf6bd4b93";
            window.chat24_url = "https://livechatv2.chat2desk.com";
            window.chat24_socket_url ="wss://livechatv2.chat2desk.com/widget_ws_new";
            window.chat24_show_new_wysiwyg = "true";
            window.chat24_static_files_domain = "https://storage.chat2desk.com/";
            window.lang = "ru";
            window.fetch("".concat(window.chat24_url, "/packs/manifest.json?nocache=").concat(new Date().getTime())).then(function (res) {
              return res.json();
            }).then(function (data) {
              var chat24 = document.createElement("script");
              chat24.type = "text/javascript";
              chat24.async = true;
              chat24.src = "".concat(window.chat24_url).concat(data["application.js"]);
              document.body.appendChild(chat24);
            });`}
      </Script>
    </>
  )
}

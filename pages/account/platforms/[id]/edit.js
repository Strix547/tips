import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { PlatformEditPage } from 'pages'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}

export default PlatformEditPage

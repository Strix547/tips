import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { TermsOfUsePage } from 'pages'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}

export default TermsOfUsePage

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { IdentifyAccountPage } from 'pages'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      protected: true,
      roles: ['UNVERIFIED']
    }
  }
}

export default IdentifyAccountPage

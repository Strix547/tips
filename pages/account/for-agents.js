import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ForAgentsPage } from 'pages'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      protected: true,
      roles: ['REGULAR', 'BUSINESS', 'ADMIN']
    }
  }
}

export default ForAgentsPage

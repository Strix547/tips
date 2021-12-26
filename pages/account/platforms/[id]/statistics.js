import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { PlatformStatisticsPage } from 'pages'

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      protected: true,
      roles: ['BUSINESS', 'ADMIN']
    }
  }
}

export default PlatformStatisticsPage

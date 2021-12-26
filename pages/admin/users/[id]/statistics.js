import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { UserStatisticsPage } from 'pages'

export const getServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      protected: true,
      roles: ['ADMIN']
    }
  }
}

export default UserStatisticsPage

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { QrIndividualEditPage } from 'pages'

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      protected: true,
      roles: ['REGULAR', 'BUSINESS', 'ADMIN']
    }
  }
}

export default QrIndividualEditPage

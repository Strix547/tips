import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { EmployeeCreatePage } from 'pages'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      protected: true,
      roles: ['BUSINESS', 'ADMIN']
    }
  }
}

export default EmployeeCreatePage

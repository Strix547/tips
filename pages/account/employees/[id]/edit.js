import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { EmployeeEditPage } from 'pages'

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}

export default EmployeeEditPage

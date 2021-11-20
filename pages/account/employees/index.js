import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { MyEmployeesPage } from 'pages'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}

export default MyEmployeesPage

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { AgentsPage } from 'pages'

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}

export default AgentsPage

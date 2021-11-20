import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { UserMainPage } from 'pages'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}

export default UserMainPage

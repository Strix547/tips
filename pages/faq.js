import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { FaqPage } from 'pages'

export async function getServerSideProps({ locale }) {
  if (locale !== 'ru') {
    return {
      redirect: {
        destination: '/',
        permament: false
      }
    }
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}

export default FaqPage

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { RecipientsPage } from 'pages'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['header']))
    }
  }
}

export default RecipientsPage

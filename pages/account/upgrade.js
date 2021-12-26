import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { UpgradeToBusinessPage } from 'pages'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      protected: true,
      roles: ['REGULAR', 'ADMIN']
    }
  }
}

export default UpgradeToBusinessPage

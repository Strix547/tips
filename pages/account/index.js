import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { UserMainPage } from 'pages'

export async function getServerSideProps(context) {
  return {
    props: {
      ...(await serverSideTranslations(context.locale, ['common'])),
      protected: true
    }
  }
}

export default UserMainPage

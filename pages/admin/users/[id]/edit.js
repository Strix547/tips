import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { UserEditPage } from 'pages'

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      protected: true,
      roles: ['ADMIN']
    }
  }
}

export default UserEditPage

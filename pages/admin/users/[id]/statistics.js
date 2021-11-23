import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { UserStatisticsPage } from 'pages'

export const getServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}

// export const getStaticPaths = ({ locales }) => {
//   return {
//     paths: [
//       { params: { id: 'id' }, locale: 'en' },
//       { params: { id: 'id' }, locale: 'ru' },
//       { params: { id: 'id' }, locale: 'fr' }
//     ],
//     fallback: true
//   }
// }

export default UserStatisticsPage

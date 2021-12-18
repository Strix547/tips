import { observer } from 'mobx-react-lite'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import { AccountLayout } from 'layout'
import { Button } from 'ui'

import { userStore } from 'store'
import { ROUTE_NAMES } from 'core/routes'

import * as S from './UpgradeToBusiness.styled'

export const UpgradeToBusinessPage = observer(() => {
  const { t } = useTranslation('common')
  const router = useRouter()

  const userId = userStore.id

  const toMainPage = () => {
    router.push(ROUTE_NAMES.ACCOUNT_PERSONAL_DATA)
  }

  const onUpgradeSubmit = () => {
    userStore.upgradeAccountToBusiness(userId)
  }

  return (
    <>
      <Head>
        <title>{t('upgrade-to-business')}</title>
      </Head>

      <AccountLayout title={t('upgrade')}>
        <S.Content>
          <S.Text>{t('do-you-want-upgrade-to-business')}</S.Text>

          <S.ActionsRow>
            <Button onClick={toMainPage} variant="bordered">
              {t('no-dont-want')}
            </Button>

            <Button onClick={onUpgradeSubmit}>{t('yes-upgrade')}</Button>
          </S.ActionsRow>
        </S.Content>
      </AccountLayout>
    </>
  )
})

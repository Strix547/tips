import { useTranslation } from 'next-i18next'

import { Button } from 'ui'

import * as S from './ConfirmModal.styled'

export const ConfirmModal = ({ open, onConfirm, onClose }) => {
  const { t } = useTranslation('common')

  return (
    <S.ConfirmModal open={open} onClose={onClose}>
      <S.Wrapper>
        <S.Heading level={6}>{t('confirm-action')}</S.Heading>

        <S.Actions>
          <Button variant="bordered" onClick={onClose}>
            {t('no-it-mistake')}
          </Button>

          <Button onClick={onConfirm}>{t('yes-i-sure')}</Button>
        </S.Actions>
      </S.Wrapper>
    </S.ConfirmModal>
  )
}

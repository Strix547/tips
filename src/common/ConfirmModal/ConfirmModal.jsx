import { Button } from 'ui'

import * as S from './ConfirmModal.styled'

export const ConfirmModal = ({ open, onConfirm, onClose }) => {
  return (
    <S.ConfirmModal open={open} onClose={onClose}>
      <S.Wrapper>
        <S.Heading level={6}>Подтвердите действие</S.Heading>

        <S.Actions>
          <Button variant="bordered" onClick={onClose}>
            Нет, это ошибка
          </Button>

          <Button onClick={onConfirm}>Да, уверен</Button>
        </S.Actions>
      </S.Wrapper>
    </S.ConfirmModal>
  )
}

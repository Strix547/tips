import React from 'react'

import { Button } from 'ui'

import * as S from './DeleteConfirmModal.styled'

export const DeleteConfirmModal = ({ open, onConfirm, onClose }) => {
  return (
    <S.DeleteConfirmModal open={open} onClose={onClose}>
      <S.Wrapper>
        <Button onClick={onClose}>Нет, это ошибка</Button>
        <Button onClick={onConfirm}>Да, уверен</Button>
      </S.Wrapper>
    </S.DeleteConfirmModal>
  )
}

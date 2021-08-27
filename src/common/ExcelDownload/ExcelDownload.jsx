import React from 'react'

import * as S from './ExcelDownload.styled'

import PaperDownloadIcon from '@public/icons/paper-download.svg'

export const ExcelDownload = ({ onClick }) => {
  return (
    <S.ExcelDownload onClick={onClick}>
      <PaperDownloadIcon />
      Скачать в Excel
    </S.ExcelDownload>
  )
}

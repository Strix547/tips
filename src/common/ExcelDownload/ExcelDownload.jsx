import { useTranslation } from 'next-i18next'

import * as S from './ExcelDownload.styled'

import PaperDownloadIcon from '@public/icons/paper-download.svg'

export const ExcelDownload = ({ onClick }) => {
  const { t } = useTranslation('common')

  return (
    <S.ExcelDownload onClick={onClick}>
      <PaperDownloadIcon />
      {t('Download in Excel')}
    </S.ExcelDownload>
  )
}

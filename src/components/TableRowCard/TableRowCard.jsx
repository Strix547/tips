import { isValidElement } from 'react'

import * as S from './TableRowCard.styled'

export const TableRowCard = ({ top, rows }) => {
  const renderElementOrText = (value) => (isValidElement(value) ? value : <S.Text>{value}</S.Text>)

  const renderRows = (rows) => {
    return rows.map(({ label, value }) => (
      <S.TipCardRow key={label}>
        <S.Text>{label}</S.Text>
        {renderElementOrText(value)}
      </S.TipCardRow>
    ))
  }

  return (
    <S.TableRowCard>
      <S.TipCardTop>
        {renderElementOrText(top.left)}
        {renderElementOrText(top.right)}
      </S.TipCardTop>

      <S.TipCardMain>{renderRows(rows)}</S.TipCardMain>
    </S.TableRowCard>
  )
}

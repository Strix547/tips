import Skeleton from 'react-loading-skeleton'

import { NoResultFound } from 'common'

import * as S from './Table.styled'

export const Table = ({ columns, rows, cards, cardHeight = 184, isLoading, noText }) => {
  const isntEmpty = rows.length !== 0

  return (
    <S.TableContainer>
      {!isLoading ? (
        isntEmpty ? (
          <S.Table columns={columns} rows={rows} />
        ) : (
          <NoResultFound>{noText}</NoResultFound>
        )
      ) : (
        <S.TableSkeleton>
          <Skeleton count={5} height={60} />
        </S.TableSkeleton>
      )}

      {!isLoading ? (
        <S.TipCardList>{isntEmpty ? cards : <NoResultFound>{noText}</NoResultFound>}</S.TipCardList>
      ) : (
        <S.TableRowCardSkeleton>
          <Skeleton count={5} height={cardHeight} />
        </S.TableRowCardSkeleton>
      )}
    </S.TableContainer>
  )
}

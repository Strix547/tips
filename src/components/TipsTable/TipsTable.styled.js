import styled from 'styled-components'

import { WhiteBox, Text } from 'styled'
import { StatisticRow } from 'components/StatisticRow/StatisticRow.styled'
import { TimePeriodFilter } from 'components/TimePeriodFilter/TimePeriodFilter.styled'
import { ExcelDownload } from 'common/ExcelDownload/ExcelDownload.styled'
import { Table } from 'ui/Table/Table.styled'
import { Select } from 'ui/Select/Select.styled'

import { media } from 'styles/media'

const media750 = media.createMedia(750)

export { Text }

export const TipsTable = styled(WhiteBox)`
  margin-top: 20px;

  ${media750} {
    background: transparent;
    box-shadow: none;
    border-radius: 0;
  }
`

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px 0 30px;

  ${TimePeriodFilter} {
    width: auto;
  }

  ${media.createMedia(920)} {
    flex-direction: row;
  }

  ${media.tablet} {
    padding: 20px 14px;
  }

  ${media.createMedia(750)} {
    padding: 20px 0;
  }

  ${media.createMedia(670)} {
    flex-wrap: wrap;
    padding: 20px 0;

    & > *:not(:last-child) {
      margin-bottom: 20px;
    }

    ${TimePeriodFilter}, ${TimePeriodFilter} ${Select}, ${ExcelDownload} {
      width: 100%;
    }

    ${ExcelDownload} {
      justify-content: center;
      background: #fff;
    }
  }
`

export const TopLeft = styled.div`
  ${media.createMedia(670)} {
    width: 100%;
  }
`

export const TableContainer = styled.div`
  position: relative;
  width: calc(100% - 60px);
  padding: 60px 0;
  margin: 0 30px;

  ${StatisticRow} {
    position: absolute;
    top: 60px;
    left: -30px;
    width: calc(100% + 60px);
    border-top: 1px solid #e0e3e1;
    border-bottom: 1px solid #e0e3e1;
    z-index: 10;

    &:last-child {
      top: auto;
      bottom: 0;
      border-top: 2px solid #e0e3e1;
      border-bottom: none;
    }
  }

  & ${Table} {
    .MuiDataGrid {
      &-columnsContainer {
        position: absolute;
        top: -56px;
      }

      /* &-cell {
        &:nth-child(1),
        &:nth-child(3),
        &:nth-child(4) {
          font-weight: 500;
        }

        &:nth-child(4) {
          font-size: 24px;
          line-height: 60px;
        }
      } */
    }
  }

  ${media.createMedia(880)} {
    ${Table} {
      .MuiDataGrid {
        &-cell,
        &-columnHeader {
          padding-right: 10px;
        }

        &-row,
        &-columnHeaderWrapper {
          grid-template-columns: 85px 100px 140px 1fr 1fr 125px !important;
        }
      }
    }
  }

  ${media.tablet} {
    width: calc(100% - 40px);
    margin: 0 20px;

    ${StatisticRow} {
      left: -20px;
      width: calc(100% + 40px);
      padding: 0 20px;
    }

    ${Table} {
      .MuiDataGrid {
        &-dataContainer {
          min-width: calc(100% - 40px) !important;
        }
      }
    }
  }

  ${media750} {
    width: 100%;
    padding: 0;
    margin: 0;

    ${Table} {
      display: none;
    }

    ${StatisticRow} {
      position: static;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      height: auto;
      padding: calc(20px - 5px);
      background: #ffffff;
      border-radius: 10px;
      border: none;

      & > *:not(:last-child) {
        margin-bottom: 10px;
      }

      &:last-child {
        margin-top: calc(10px - 5px);
        border-top: none;
      }
    }
  }
`

export const TipCardList = styled.ul`
  display: none;
  margin-top: 10px;

  ${media750} {
    display: block;
  }
`

export const TipCard = styled(WhiteBox).attrs({ as: 'li' })`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`

export const TipCardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 54px;
  padding: 0 20px;
  border-bottom: 1px solid var(--color-gray-200);
  box-sizing: border-box;

  ${Text} {
    font-size: var(--font-size-sm);
    font-weight: 500;
  }
`

export const TipCardMain = styled.div`
  padding: 20px;
`

export const TipCardRow = styled.div`
  display: flex;

  &:not(:last-child) {
    margin-bottom: 15px;
  }

  ${Text} {
    font-size: var(--font-size-sm);
    font-weight: 500;
    line-height: 20px;

    /* label */
    &:first-child {
      width: 115px;
      color: var(--color-gray-300);
    }
  }
`

export const TableSkeleton = styled.div`
  margin-top: 60px;

  span {
    display: flex;
    flex-direction: column;
    padding: 5px 0;

    & > *:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  ${media750} {
    display: none;
  }
`

export const TipCardSkeleton = styled.div`
  display: none;
  margin-top: 10px;

  span {
    display: flex;
    flex-direction: column;

    & > *:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  ${media750} {
    display: block;
  }
`

export const NoTipsText = styled(Text)`
  text-align: center;
  font-weight: 500;
`

export const RatingCell = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 5px;
  }
`

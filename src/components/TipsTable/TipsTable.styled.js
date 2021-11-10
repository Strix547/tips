import styled from 'styled-components'

import { WhiteBox, Text } from 'styled'

import { StatisticRow } from 'components/StatisticRow/StatisticRow.styled'
import { TimePeriodFilter } from 'components/TimePeriodFilter/TimePeriodFilter.styled'
import { ExcelDownload } from 'common/ExcelDownload/ExcelDownload.styled'
import { Table, TableSkeleton } from 'ui/Table/Table.styled'
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
    padding: 20px 14px 10px 14px;
  }

  ${media750} {
    padding: 20px 0;

    ${ExcelDownload} {
      transition: 0.3s;

      &:hover {
        background: #fff;
        transition: 0.3s;
      }
    }
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

      &-columnHeader,
      &-cell {
        padding-right: 10px;

        &:first-child {
          padding-left: 0;
        }

        &:last-child {
          padding-right: 0;
        }
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

  ${TableSkeleton} {
    margin-top: 80px;

    & > span {
      padding: 0;

      span:first-child {
        position: absolute;
        top: 4px;
        left: 0;
        height: 56px !important;
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
  }

  ${media750} {
    width: 100%;
    padding: 0;
    margin: 0;

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

      &:first-child {
        margin-bottom: 10px;
      }

      &:last-child {
        margin-top: 10px;
        border-top: none;
      }
    }
  }
`

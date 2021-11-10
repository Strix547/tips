import styled from 'styled-components'

import { WhiteBox } from 'styled'
import { media } from 'styles/media'

import { FormField } from 'ui/FormField/FormField.styled'
import { ExcelDownload } from 'common/ExcelDownload/ExcelDownload.styled'
import { TableContainer } from 'ui/Table/Table.styled'

const media750 = media.createMedia(750)

export const UsersTable = styled(WhiteBox)`
  ${TableContainer} {
    margin-top: 20px;
  }

  ${media750} {
    background: transparent;
    box-shadow: none;
    border-radius: 0;
  }
`

export const Top = styled.div`
  display: flex;
  padding: 20px 30px 10px;

  ${FormField} {
    .form-field-input-root {
      border-radius: 36px;
    }
  }

  ${ExcelDownload} {
    margin-left: 20px;
  }

  ${media750} {
    padding: 0;
    flex-direction: column;

    ${FormField} .form-field-input-root {
      background: #fff;
    }

    ${ExcelDownload} {
      justify-content: center;
      margin-left: 0;
      margin-top: 10px;
      transition: 0.3s;

      &:hover {
        background: #fff;
        transition: 0.3s;
      }
    }
  }
`

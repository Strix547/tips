import styled from 'styled-components'

import { WhiteBox, Label } from 'styled'
import { media } from 'styles/media'

import { Select } from 'ui/Select/Select.styled'
import { RadioGroup } from 'ui/RadioGroup/RadioGroup.styled'
import { Autocomplete } from 'ui/Autocomplete/Autocomplete.styled'
import { TimePeriodFilter } from 'components/TimePeriodFilter/TimePeriodFilter.styled'

export { Label }

export const ReviewsFilter = styled(WhiteBox)`
  padding: 30px;

  ${TimePeriodFilter} {
    width: auto;
  }
`

export const Row = styled.div`
  display: flex;

  &:first-child {
    margin-bottom: 30px;
  }

  ${media.createMedia(940)} {
    &:last-child {
      flex-direction: column;
    }
  }
`

export const Field = styled.div`
  display: flex;
  align-items: center;

  ${Label} {
    margin-bottom: 0;
    margin-right: 10px;
  }
`

export const PeriodField = styled(Field)`
  flex-wrap: wrap;

  ${Select} {
    display: none;
  }

  ${RadioGroup} {
    display: block !important;
  }

  ${media.createMedia(1323)} {
    ${Label} {
      margin-bottom: 20px;
    }
  }

  ${media.createMedia(1280)} {
    ${Label} {
      margin-bottom: 0;
    }
  }

  ${media.createMedia(1023)} {
    ${Label} {
      margin-bottom: 20px;
    }
  }

  ${media.createMedia(864)} {
    ${Select} {
      display: block;
    }

    ${RadioGroup} {
      display: none !important;
    }

    ${Label} {
      margin-bottom: 0;
    }
  }
`

export const PlatformField = styled(Field)`
  ${Autocomplete} {
    width: 350px;

    .form-field-input-root {
      border-radius: 46px;
    }

    .MuiAutocomplete-popper {
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      border-top: 1px solid var(--color-gray-400);
      margin-top: 10px;
    }

    .MuiAutocomplete-paper {
      border-radius: 8px;
    }
  }
`

export const RatingField = styled(Field)`
  margin-left: 40px;

  ${Select} {
    width: 260px;

    .select-root {
      border-radius: 46px;
    }

    .menu-paper {
      border-radius: 8px;
      border-top: 1px solid var(--color-gray-400);
      margin-top: 10px;
    }
  }

  ${media.createMedia(940)} {
    margin-left: 0;
    margin-top: 20px;
  }
`

export const StarList = styled.div`
  display: flex;
  align-items: center;

  & > svg:not(:last-child) {
    margin-right: 5px;
  }
`

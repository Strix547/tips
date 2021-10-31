import styled from 'styled-components'

import { WhiteBox, Label } from 'styled'
import { media } from 'styles/media'

import { Select } from 'ui/Select/Select.styled'
import { RadioGroup } from 'ui/RadioGroup/RadioGroup.styled'
import { Autocomplete } from 'ui/Autocomplete/Autocomplete.styled'
import { TimePeriodFilter } from 'components/TimePeriodFilter/TimePeriodFilter.styled'

const media600 = media.createMedia(600)

export { Label }

export const ReviewsFilter = styled(WhiteBox)`
  padding: 30px;

  ${TimePeriodFilter} {
    width: auto;
  }

  ${media600} {
    padding: 20px;

    ${TimePeriodFilter} {
      width: 100%;
    }
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

  ${media600} {
    &:first-child {
      margin-bottom: 20px;
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

  ${media600} {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;

    ${Label} {
      margin-right: 0;
      margin-bottom: 10px;
    }

    ${Select} {
      width: 100%;
    }
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

  ${media600} {
    ${Label} {
      margin-bottom: 10px;
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

  ${media600} {
    ${Autocomplete} {
      width: 100%;
    }
  }
`

export const RatingField = styled(Field)`
  margin-left: 40px;

  ${Select} {
    width: 260px;
  }

  ${media.createMedia(940)} {
    margin-left: 0;
    margin-top: 20px;
  }

  ${media600} {
    ${Select} {
      width: 100%;
    }
  }
`

export const StarList = styled.div`
  display: flex;
  align-items: center;

  & > svg:not(:last-child) {
    margin-right: 5px;
  }
`

import styled from 'styled-components'
import { Rating as MuiRating } from '@material-ui/lab'

import StarIcon from '@public/icons/star.svg'

export const Rating = styled((props) => (
  <MuiRating
    {...props}
    emptyIcon={<StarIcon fill="#C8C9CF" />}
    icon={<StarIcon fill="#FEA929" />}
    classes={{
      label: 'rating-label',
      iconHover: 'rating-icon-hover',
      iconFocus: 'rating-icon-focus',
      iconActive: 'rating-icon-active'
    }}
  />
))`
  .rating-label {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;

    &:nth-of-type(-n + 5) {
      padding-right: 10px;
    }
  }

  .rating-icon-hover,
  .rating-icon-focus,
  .rating-icon-active {
    transform: none;
  }
`

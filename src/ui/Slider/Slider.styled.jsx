import styled from 'styled-components'
import MuiSlider from '@material-ui/core/Slider'

export const Slider = styled((props) => (
  <MuiSlider
    {...props}
    classes={{
      root: 'slider-root',
      rail: 'slider-rail',
      track: 'slider-track',
      thumb: 'slider-thumb',
      mark: 'slider-mark'
    }}
  />
))`
  .slider {
    &-rail {
      height: 3px;
      border-radius: 40px;
      background: var(--color-gray-400);
      opacity: 1;
    }

    &-track {
      height: 3px;
      border-radius: 40px;
      background: var(--color-primary-200);
    }

    &-thumb {
      width: 20px;
      height: 20px;
      margin-top: -9px;
      border: 3px solid #fff;
      background: var(--color-primary-200);
      box-shadow: 0px 5px 10px rgba(157, 157, 159, 0.3);

      &:hover,
      &:active,
      &:focus {
        box-shadow: 0px 5px 10px rgba(157, 157, 159, 0.3);
      }
    }

    &-mark {
      margin-top: 4px;
      width: 2px;
      height: 5px;
      border-radius: 0px 0px 1px 1px;
      background: #d5dadd;
    }
  }
`

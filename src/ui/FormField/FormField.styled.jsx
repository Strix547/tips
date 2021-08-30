import styled from 'styled-components'
import MuiTextField from '@material-ui/core/TextField'

export const FormField = styled((props) => (
  <MuiTextField
    {...props}
    InputLabelProps={{
      classes: { root: 'form-field-label', focused: 'form-field-focused' },
      shrink: true
    }}
    InputProps={{
      ...props.InputProps,
      classes: {
        root: 'form-field-input-root',
        error: 'form-field-input-error'
      }
    }}
    FormHelperTextProps={{ classes: { root: 'form-field-helper-text' } }}
  />
))`
  width: 100%;

  .form-field-label {
    position: static;
    margin-bottom: 10px;
    font-family: Formular;
    font-size: var(--font-size-reg);
    font-weight: 500;
    color: var(--color-black-200);
    line-height: 22px;
    transform: none;

    &.form-field-focused {
      color: var(--color-black-200);
    }
  }

  .form-field-input-root {
    height: 56px;
    margin-top: 0;
    padding-left: 20px;
    font-size: var(--font-size-md);
    border: 1px solid var(--color-gray-400);
    border-radius: 8px;
    cursor: text;
    box-sizing: border-box;

    &::before,
    &::after {
      display: none;
    }

    input {
      height: 100%;
      padding: 0;
      font-family: Formular;
      font-size: var(--font-size-md);
      color: var(--color-black-100);

      &::placeholder {
        opacity: 1;
        color: var(--color-gray-300);
      }
    }

    & > svg {
      flex-shrink: 0;

      &:first-child {
        margin-left: 10px;
      }

      &:last-child {
        margin-left: 10px;
      }
    }
  }

  .form-field-helper-text {
  }

  .form-field-input-error {
  }

  .MuiInputBase-inputAdornedEnd {
    margin-right: 20px;
  }

  .MuiInputBase-adornedEnd {
    padding-right: 20px;
  }
`

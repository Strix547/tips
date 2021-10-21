import { FormField } from 'ui'

export const EmailField = (props) => {
  return (
    <FormField
      rules={{
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          message: 'Enter a valid e-mail address'
        }
      }}
      type="email"
      name="email"
      label="E-mail"
      placeholder="Введите e-mail"
      required
      {...props}
    />
  )
}

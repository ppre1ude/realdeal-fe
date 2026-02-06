import { Field, Label, TextInput } from './AuthForm.styles'

type FormFieldProps = {
  id: string
  label: string
  type?: 'text' | 'email' | 'password'
  placeholder?: string
  autoComplete?: string
}

const FormField = ({
  id,
  label,
  type = 'text',
  placeholder,
  autoComplete,
}: FormFieldProps) => (
  <Field>
    <Label htmlFor={id}>{label}</Label>
    <TextInput id={id} type={type} placeholder={placeholder} autoComplete={autoComplete} />
  </Field>
)

export default FormField

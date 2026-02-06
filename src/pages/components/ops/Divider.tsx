import { DividerLine, DividerRow, DividerText } from './AuthForm.styles'

type DividerProps = {
  text: string
}

const Divider = ({ text }: DividerProps) => (
  <DividerRow>
    <DividerLine />
    <DividerText>{text}</DividerText>
    <DividerLine />
  </DividerRow>
)

export default Divider

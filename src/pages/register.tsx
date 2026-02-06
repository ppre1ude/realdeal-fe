import {
  BottomText,
  Card,
  CardHeader,
  CardSubtitle,
  CardTitle,
  CheckboxContainer,
  CheckboxInput,
  CheckboxLabel,
  Field,
  Form,
  Frame,
  HelperLink,
  InlineLink,
  Label,
  Main,
  Page,
  PrimaryButton,
  TextInput,
} from './auth.styles'

const RegisterPage = () => (
  <Page>
    <Frame>
      <Main>
        <Card>
          <CardHeader>
            <CardTitle>회원가입</CardTitle>
            <CardSubtitle>새로운 계정을 만들어 보세요.</CardSubtitle>
          </CardHeader>
          <Form>
            <Field>
              <Label htmlFor="signup-name">이름</Label>
              <TextInput id="signup-name" type="text" placeholder="홍길동" autoComplete="name" />
            </Field>
            <Field>
              <Label htmlFor="signup-email">이메일</Label>
              <TextInput
                id="signup-email"
                type="email"
                placeholder="your@email.com"
                autoComplete="email"
              />
            </Field>
            <Field>
              <Label htmlFor="signup-password">비밀번호</Label>
              <TextInput
                id="signup-password"
                type="password"
                placeholder="••••••••"
                autoComplete="new-password"
              />
            </Field>
            <Field>
              <Label htmlFor="signup-password-confirm">비밀번호 확인</Label>
              <TextInput
                id="signup-password-confirm"
                type="password"
                placeholder="••••••••"
                autoComplete="new-password"
              />
            </Field>
            <CheckboxContainer $alignStart>
              <CheckboxInput id="terms" type="checkbox" $alignStart />
              <CheckboxLabel htmlFor="terms">
                이용약관 및 개인정보 처리방침에 동의합니다.
                <HelperLink href="#"> (자세히 보기)</HelperLink>
              </CheckboxLabel>
            </CheckboxContainer>
            <PrimaryButton type="submit">회원가입 완료</PrimaryButton>
          </Form>
          <BottomText>
            이미 계정이 있으신가요? <InlineLink to="/login">로그인</InlineLink>
          </BottomText>
        </Card>
      </Main>
    </Frame>
  </Page>
)

export default RegisterPage

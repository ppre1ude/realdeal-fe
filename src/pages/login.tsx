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
  RowBetween,
  TextInput,
} from './auth.styles'

const LoginPage = () => (
  <Page>
    <Frame>
      <Main>
        <Card>
          <CardHeader>
            <CardTitle>로그인</CardTitle>
            <CardSubtitle>계정에 로그인하여 서비스를 이용해보세요.</CardSubtitle>
          </CardHeader>
          <Form>
            <Field>
              <Label htmlFor="login-email">이메일</Label>
              <TextInput
                id="login-email"
                type="email"
                placeholder="your@email.com"
                autoComplete="email"
              />
            </Field>
            <Field>
              <Label htmlFor="login-password">비밀번호</Label>
              <TextInput
                id="login-password"
                type="password"
                placeholder="••••••••"
                autoComplete="current-password"
              />
            </Field>
            <RowBetween>
              <CheckboxContainer>
                <CheckboxInput id="remember" type="checkbox" />
                <CheckboxLabel htmlFor="remember">로그인 상태 유지</CheckboxLabel>
              </CheckboxContainer>
              <HelperLink href="#">비밀번호 찾기</HelperLink>
            </RowBetween>
            <PrimaryButton type="submit">로그인</PrimaryButton>
          </Form>
          <BottomText>
            계정이 없으신가요? <InlineLink to="/register">회원가입</InlineLink>
          </BottomText>
        </Card>
      </Main>
    </Frame>
  </Page>
)

export default LoginPage

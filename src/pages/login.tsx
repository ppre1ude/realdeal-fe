import AuthCard from './components/ops/AuthCard'
import AuthLayout from './components/ops/AuthLayout'
import Divider from './components/ops/Divider'
import FormField from './components/ops/FormField'
import SocialButton from './components/ops/SocialButton'
import { PageContent } from './components/ops/AuthPage.styles'
import {
  BottomText,
  CheckboxContainer,
  CheckboxInput,
  CheckboxLabel,
  Form,
  HelperLink,
  InlineLink,
  PrimaryButton,
  RowBetween,
} from './components/ops/AuthForm.styles'

const LoginPage = () => (
  <AuthLayout>
    <PageContent>
      <AuthCard title="로그인" subtitle="계정에 로그인하여 서비스를 이용해보세요.">
        <Form>
          <FormField
            id="login-email"
            label="이메일"
            type="email"
            placeholder="your@email.com"
            autoComplete="email"
          />
          <FormField
            id="login-password"
            label="비밀번호"
            type="password"
            placeholder="••••••••"
            autoComplete="current-password"
          />
          <RowBetween>
            <CheckboxContainer>
              <CheckboxInput id="remember" type="checkbox" />
              <CheckboxLabel htmlFor="remember">로그인 상태 유지</CheckboxLabel>
            </CheckboxContainer>
            <HelperLink href="#">비밀번호 찾기</HelperLink>
          </RowBetween>
          <PrimaryButton type="submit">로그인</PrimaryButton>
        </Form>
        <Divider text="또는" />
        <SocialButton text="카카오톡으로 로그인" />
        <BottomText>
          계정이 없으신가요? <InlineLink to="/register">회원가입</InlineLink>
        </BottomText>
      </AuthCard>
    </PageContent>
  </AuthLayout>
)

export default LoginPage

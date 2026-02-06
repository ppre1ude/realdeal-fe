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
} from './components/ops/AuthForm.styles'

const RegisterPage = () => (
  <AuthLayout>
    <PageContent>
      <AuthCard title="회원가입" subtitle="새로운 계정을 만들어 보세요." offsetTop={64}>
        <Form>
          <FormField
            id="signup-name"
            label="이름"
            type="text"
            placeholder="홍길동"
            autoComplete="name"
          />
          <FormField
            id="signup-email"
            label="이메일"
            type="email"
            placeholder="your@email.com"
            autoComplete="email"
          />
          <FormField
            id="signup-password"
            label="비밀번호"
            type="password"
            placeholder="••••••••"
            autoComplete="new-password"
          />
          <FormField
            id="signup-password-confirm"
            label="비밀번호 확인"
            type="password"
            placeholder="••••••••"
            autoComplete="new-password"
          />
          <CheckboxContainer $alignStart>
            <CheckboxInput id="terms" type="checkbox" $alignStart />
            <CheckboxLabel htmlFor="terms">
              이용약관 및 개인정보 처리방침에 동의합니다.
              <HelperLink href="#"> (자세히 보기)</HelperLink>
            </CheckboxLabel>
          </CheckboxContainer>
          <PrimaryButton type="submit">회원가입 완료</PrimaryButton>
        </Form>
        <Divider text="간편 가입" />
        <SocialButton text="카카오톡으로 회원가입" withBottomMargin />
        <BottomText>
          이미 계정이 있으신가요? <InlineLink to="/login">로그인</InlineLink>
        </BottomText>
      </AuthCard>
    </PageContent>
  </AuthLayout>
)

export default RegisterPage

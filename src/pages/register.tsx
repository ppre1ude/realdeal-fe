import { useState } from 'react'
import type { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { signup } from '../services/auth'
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

const RegisterPage = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [agreeToTerms, setAgreeToTerms] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)

    // 비밀번호 확인 검증
    if (password !== passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다.')
      return
    }

    // 이용약관 동의 확인
    if (!agreeToTerms) {
      setError('이용약관 및 개인정보 처리방침에 동의해주세요.')
      return
    }

    setIsLoading(true)

    try {
      const response = await signup({ email, password })

      // accessToken은 항상 localStorage에 저장
      localStorage.setItem('accessToken', response.accessToken)

      // 회원가입 시에도 refreshToken을 localStorage에 저장 (자동 로그인)
      localStorage.setItem('refreshToken', response.refreshToken)

      // 커스텀 이벤트 발생 (Layout 컴포넌트에서 상태 업데이트)
      window.dispatchEvent(new Event('authStateChanged'))
      
      // 홈으로 리다이렉트
      navigate('/')
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : '회원가입에 실패했습니다. 이메일과 비밀번호를 확인해주세요.'
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Page>
      <Frame>
        <Main>
          <Card>
            <CardHeader>
              <CardTitle>회원가입</CardTitle>
              <CardSubtitle>새로운 계정을 만들어 보세요.</CardSubtitle>
            </CardHeader>
            <Form onSubmit={handleSubmit}>
              {error && (
                <div style={{ color: '#ef4444', fontSize: '14px', marginBottom: '16px' }}>
                  {error}
                </div>
              )}
              <Field>
                <Label htmlFor="signup-email">이메일</Label>
                <TextInput
                  id="signup-email"
                  type="email"
                  placeholder="your@email.com"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </Field>
              <Field>
                <Label htmlFor="signup-password">비밀번호</Label>
                <TextInput
                  id="signup-password"
                  type="password"
                  placeholder="••••••••"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </Field>
              <Field>
                <Label htmlFor="signup-password-confirm">비밀번호 확인</Label>
                <TextInput
                  id="signup-password-confirm"
                  type="password"
                  placeholder="••••••••"
                  autoComplete="new-password"
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </Field>
              <CheckboxContainer $alignStart>
                <CheckboxInput
                  id="terms"
                  type="checkbox"
                  $alignStart
                  checked={agreeToTerms}
                  onChange={(e) => setAgreeToTerms(e.target.checked)}
                  disabled={isLoading}
                />
                <CheckboxLabel htmlFor="terms">
                  이용약관 및 개인정보 처리방침에 동의합니다.
                  <HelperLink href="#"> (자세히 보기)</HelperLink>
                </CheckboxLabel>
              </CheckboxContainer>
              <PrimaryButton type="submit" disabled={isLoading}>
                {isLoading ? '회원가입 중...' : '회원가입 완료'}
              </PrimaryButton>
            </Form>
            <BottomText>
              이미 계정이 있으신가요? <InlineLink to="/login">로그인</InlineLink>
            </BottomText>
          </Card>
        </Main>
      </Frame>
    </Page>
  )
}

export default RegisterPage

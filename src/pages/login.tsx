import { useState } from 'react'
import type { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../services/auth'
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

const LoginPage = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)

    try {
      const response = await login({ email, password })

      // accessToken은 항상 localStorage에 저장
      localStorage.setItem('accessToken', response.accessToken)

      // '로그인 상태 유지' 체크 시 refreshToken도 localStorage에 저장
      // 체크 안되면 sessionStorage에만 저장 (브라우저 종료 시 삭제)
      if (rememberMe) {
        localStorage.setItem('refreshToken', response.refreshToken)
      } else {
        sessionStorage.setItem('refreshToken', response.refreshToken)
      }

      // 홈으로 리다이렉트
      navigate('/')
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : '로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.'
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
              <CardTitle>로그인</CardTitle>
              <CardSubtitle>계정에 로그인하여 서비스를 이용해보세요.</CardSubtitle>
            </CardHeader>
            <Form onSubmit={handleSubmit}>
              {error && (
                <div style={{ color: '#ef4444', fontSize: '14px', marginBottom: '16px' }}>
                  {error}
                </div>
              )}
              <Field>
                <Label htmlFor="login-email">이메일</Label>
                <TextInput
                  id="login-email"
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
                <Label htmlFor="login-password">비밀번호</Label>
                <TextInput
                  id="login-password"
                  type="password"
                  placeholder="••••••••"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </Field>
              <RowBetween>
                <CheckboxContainer>
                  <CheckboxInput
                    id="remember"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    disabled={isLoading}
                  />
                  <CheckboxLabel htmlFor="remember">로그인 상태 유지</CheckboxLabel>
                </CheckboxContainer>
                <HelperLink href="#">비밀번호 찾기</HelperLink>
              </RowBetween>
              <PrimaryButton type="submit" disabled={isLoading}>
                {isLoading ? '로그인 중...' : '로그인'}
              </PrimaryButton>
            </Form>
            <BottomText>
              계정이 없으신가요? <InlineLink to="/register">회원가입</InlineLink>
            </BottomText>
          </Card>
        </Main>
      </Frame>
    </Page>
  )
}

export default LoginPage

import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCurrentUser, isAuthenticated, logout } from '../services/auth'
import type { UserInfo } from '../services/auth'
import {
  Header,
  HeaderActions,
  HeaderLeft,
  LayoutContainer,
  Logo,
  LogoIcon,
  LogoText,
  Nav,
  NavLink,
  PrimaryPillButton,
  PrimaryPillButtonAsButton,
  TextLinkButton,
  TextLinkButtonAsButton,
} from './Layout.styles'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const navigate = useNavigate()
  const [user, setUser] = useState<UserInfo | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      if (isAuthenticated()) {
        try {
          const response = await getCurrentUser()
          setUser(response.user)
        } catch (error) {
          // 토큰이 유효하지 않으면 제거
          logout()
          setUser(null)
        }
      } else {
        setUser(null)
      }
      setIsLoading(false)
    }

    checkAuth()

    // storage 이벤트 리스너로 다른 탭에서 로그인/로그아웃 감지
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'accessToken') {
        checkAuth()
      }
    }

    // 커스텀 이벤트 리스너로 같은 탭에서 로그인/로그아웃 감지
    const handleAuthStateChanged = () => {
      checkAuth()
    }

    window.addEventListener('storage', handleStorageChange)
    window.addEventListener('authStateChanged', handleAuthStateChanged)
    
    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('authStateChanged', handleAuthStateChanged)
    }
  }, [])

  const handleLogout = () => {
    logout()
    setUser(null)
    // 커스텀 이벤트 발생 (다른 컴포넌트에서 상태 업데이트)
    window.dispatchEvent(new Event('authStateChanged'))
    navigate('/')
  }

  return (
    <LayoutContainer>
      <Header>
        <HeaderLeft>
          <Logo to="/">
            <LogoIcon>
              <i className="fa-solid fa-envelope" aria-hidden="true" />
            </LogoIcon>
            <LogoText>알짜배기</LogoText>
          </Logo>
          <Nav>
            <NavLink to="/resume-upload" $active>
              이력서 제출
            </NavLink>
            <NavLink to="/company-recommendation">기업 추천</NavLink>
            <NavLink to="/dashboard">대시보드</NavLink>
          </Nav>
        </HeaderLeft>
        <HeaderActions>
          {isLoading ? (
            // 로딩 중에는 아무것도 표시하지 않음
            <></>
          ) : user ? (
            // 로그인된 경우: 내 프로필, 로그아웃 버튼
            <>
              <TextLinkButtonAsButton onClick={() => navigate('/profile')}>
                내 프로필
              </TextLinkButtonAsButton>
              <PrimaryPillButtonAsButton onClick={handleLogout}>
                로그아웃
              </PrimaryPillButtonAsButton>
            </>
          ) : (
            // 로그인 안된 경우: 로그인, 회원가입 버튼
            <>
              <TextLinkButton to="/login">로그인</TextLinkButton>
              <PrimaryPillButton to="/register">회원가입</PrimaryPillButton>
            </>
          )}
        </HeaderActions>
      </Header>
      {children}
    </LayoutContainer>
  )
}

export default Layout

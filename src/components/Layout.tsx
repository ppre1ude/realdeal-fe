import type { ReactNode } from 'react'
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
  TextLinkButton,
} from './Layout.styles'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
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
            <NavLink to="/resume-report">이력서 내역</NavLink>
            <NavLink to="/company-recommendation">기업 추천</NavLink>
          </Nav>
        </HeaderLeft>
        <HeaderActions>
          <TextLinkButton to="/login">로그인</TextLinkButton>
          <PrimaryPillButton to="/register">회원가입</PrimaryPillButton>
        </HeaderActions>
      </Header>
      {children}
    </LayoutContainer>
  )
}

export default Layout

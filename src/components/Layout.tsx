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
  NavAnchor,
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
            <LogoText>LINKED-INSA</LogoText>
          </Logo>
          <Nav>
            <NavLink to="/resume-edit" $active>
              AI 이력서 첨삭
            </NavLink>
            <NavAnchor href="/company-recommendation">기업 추천</NavAnchor>
            <NavAnchor href="/matching-status">매칭 현황</NavAnchor>
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

import type { ReactNode } from 'react'
import {
  AppFrame,
  Brand,
  BrandIcon,
  BrandName,
  ContactButton,
  Footer,
  FooterCopy,
  FooterLink,
  FooterLinks,
  FooterRow,
  GlobalStyle,
  Header,
  Main,
  Nav,
  NavLink,
  Page,
} from './AuthLayout.styles'

type AuthLayoutProps = {
  children: ReactNode
}

const LeafIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M20.8 3.2c-7.1.1-12 2.8-14.5 7-1.9 3.2-2.2 6.7-2.2 9.8 3.1 0 6.6-.3 9.8-2.2 4.2-2.5 6.9-7.4 7-14.6z"
      fill="currentColor"
    />
    <path
      d="M7 17c2.9-1.1 6.4-3.8 10-7.6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
)

const AuthLayout = ({ children }: AuthLayoutProps) => (
  <>
    <GlobalStyle />
    <Page>
      <AppFrame>
        <Header>
          <Brand>
            <BrandIcon aria-hidden="true">
              <LeafIcon />
            </BrandIcon>
            <BrandName>모던그린</BrandName>
          </Brand>
          <Nav>
            <NavLink to="/login">로그인</NavLink>
            <NavLink to="/register">회원가입</NavLink>
            <ContactButton type="button">문의하기</ContactButton>
          </Nav>
        </Header>
        <Main>{children}</Main>
        <Footer>
          <FooterRow>
            <FooterCopy>© 2025 모던그린. All rights reserved.</FooterCopy>
            <FooterLinks>
              <FooterLink href="#">이용약관</FooterLink>
              <FooterLink href="#">개인정보처리방침</FooterLink>
              <FooterLink href="#">고객센터</FooterLink>
            </FooterLinks>
          </FooterRow>
        </Footer>
      </AppFrame>
    </Page>
  </>
)

export default AuthLayout

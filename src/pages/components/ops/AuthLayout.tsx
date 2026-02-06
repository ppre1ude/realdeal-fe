import type { ReactNode } from 'react'
import {
  AppFrame,
  Footer,
  FooterCopy,
  FooterLink,
  FooterLinks,
  FooterRow,
  GlobalStyle,
  Main,
  Page,
} from './AuthLayout.styles'

type AuthLayoutProps = {
  children: ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => (
  <>
    <GlobalStyle />
    <Page>
      <AppFrame>
        <Header>
          <Brand>
            <BrandIcon aria-hidden="true">
              <i className="fa-solid fa-leaf" />
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

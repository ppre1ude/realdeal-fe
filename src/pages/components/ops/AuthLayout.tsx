import type { ReactNode } from 'react'
import {
  AppFrame,
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
        <Main>{children}</Main>
      </AppFrame>
    </Page>
  </>
)

export default AuthLayout

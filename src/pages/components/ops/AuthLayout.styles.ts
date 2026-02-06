import styled, { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom'

export const GlobalStyle = createGlobalStyle`
`

export const Page = styled.div`
  min-height: 100vh;
  background: #ffffff;
  display: flex;
  justify-content: center;
`

export const AppFrame = styled.div`
  width: 1440px;
  min-height: 1024px;
  background: #ffffff;
  position: relative;
  display: flex;
  flex-direction: column;
`

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  background: #ffffff;
  border-bottom: 1px solid #f3f4f6;
`

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const BrandIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #add94e;
  font-size: 24px;
`

export const BrandName = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: #1f2937;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 24px;
`

export const NavLink = styled(Link)`
  font-size: 14px;
  font-weight: 500;
  color: #4b5563;
  transition: color 0.2s ease;

  &:hover {
    color: #111827;
  }
`

export const ContactButton = styled.button`
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  background: #f3f4f6;
  color: #374151;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #e5e7eb;
  }
`

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 64px 32px;
`

export const Footer = styled.footer`
  border-top: 1px solid #f3f4f6;
  padding: 24px 32px;
`

export const FooterRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const FooterCopy = styled.div`
  font-size: 14px;
  color: #6b7280;
`

export const FooterLinks = styled.div`
  display: flex;
  gap: 24px;
`

export const FooterLink = styled.a`
  font-size: 14px;
  color: #6b7280;
  transition: color 0.2s ease;

  &:hover {
    color: #374151;
  }
`

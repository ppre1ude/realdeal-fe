import styled, { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom'

export const GlobalStyle = createGlobalStyle`
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css');

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Pretendard', sans-serif;
    background: #f6f7f8;
    color: #111827;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: inherit;
  }
`

export const Page = styled.div`
  min-height: 100vh;
  background: #f6f7f8;
  display: flex;
  justify-content: center;
`

export const AppFrame = styled.div`
  width: min(1440px, 100%);
  min-height: 100vh;
  background: #ffffff;
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

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
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

  @media (max-width: 900px) {
    flex-wrap: wrap;
    gap: 12px;
  }
`

export const NavLink = styled(Link)`
  font-size: 14px;
  font-weight: 500;
  color: #6b7280;
  transition: color 0.2s ease;

  &:hover {
    color: #111827;
  }
`

export const ContactButton = styled.button`
  border: none;
  padding: 8px 16px;
  border-radius: 10px;
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
  gap: 24px;
  padding: 64px 32px;

  @media (max-width: 900px) {
    padding: 48px 20px;
  }
`

export const Footer = styled.footer`
  border-top: 1px solid #f3f4f6;
  padding: 24px 32px;
`

export const FooterRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const FooterCopy = styled.div`
  font-size: 14px;
  color: #6b7280;
`

export const FooterLinks = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: 900px) {
    flex-wrap: wrap;
    gap: 12px;
  }
`

export const FooterLink = styled.a`
  font-size: 14px;
  color: #6b7280;
  transition: color 0.2s ease;

  &:hover {
    color: #374151;
  }
`

import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
`

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid #f3f4f6;

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    padding: 16px 32px;
  }

  @media (max-width: 700px) {
    padding: 16px 20px;
  }
`

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 24px;
  font-weight: 900;
  color: #add94e;
  text-decoration: none;
  letter-spacing: -0.02em;
`

export const LogoIcon = styled.div`
  width: 40px;
  height: 40px;
  background: #add94e;
  color: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 15px -3px rgba(173, 217, 78, 0.2);
  font-size: 20px;
`

export const LogoText = styled.span`
  letter-spacing: -0.02em;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;
  color: #6b7280;
  font-weight: 500;

  @media (max-width: 1100px) {
    flex-wrap: wrap;
    gap: 16px;
  }
`

export const NavLink = styled(Link)<{ $active?: boolean }>`
  color: ${({ $active }) => ($active ? '#111827' : '#6b7280')};
  font-weight: ${({ $active }) => ($active ? 700 : 500)};
  transition: color 0.2s ease;
  text-decoration: none;

  &:hover {
    color: #add94e;
  }
`

export const NavAnchor = styled.a`
  color: #6b7280;
  transition: color 0.2s ease;
  text-decoration: none;

  &:hover {
    color: #add94e;
  }
`

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 1100px) {
    width: 100%;
    justify-content: flex-start;
  }
`

export const TextLinkButton = styled(Link)`
  padding: 10px 24px;
  color: #6b7280;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #111827;
  }
`

export const PrimaryPillButton = styled(Link)`
  padding: 10px 24px;
  background: #add94e;
  color: #000;
  font-weight: 700;
  border-radius: 9999px;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
`

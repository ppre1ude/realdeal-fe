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
  background: #17171b;

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
  width: 36px;
  height: 36px;
  background: #add94e;
  color: white;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`

export const LogoText = styled.span`
  letter-spacing: -0.02em;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;
  color: #ffffff;
  font-weight: 600;

  @media (max-width: 1100px) {
    flex-wrap: wrap;
    gap: 16px;
  }
`

export const NavLink = styled(Link)<{ $active?: boolean }>`
  color: #ffffff;
  font-weight: ${({ $active }) => ($active ? 700 : 600)};
  transition: color 0.2s ease;
  text-decoration: none;

  &:hover {
    color: #add94e;
  }
`

export const NavAnchor = styled.a`
  color: #ffffff;
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
  color: #ffffff;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s ease;
  border: none;
  background: none;
  cursor: pointer;
  font-size: inherit;
  font-family: inherit;

  &:hover {
    color: #add94e;
  }
`

export const TextLinkButtonAsButton = styled.button`
  padding: 10px 24px;
  color: #ffffff;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s ease;
  border: none;
  background: none;
  cursor: pointer;
  font-size: inherit;
  font-family: inherit;

  &:hover {
    color: #add94e;
  }
`

export const PrimaryPillButton = styled(Link)`
  padding: 10px 24px;
  background: #add94e;
  color: #0b0b0e;
  font-weight: 700;
  border-radius: 9999px;
  text-decoration: none;
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;
  font-size: inherit;
  font-family: inherit;

  &:hover {
    background: #b8e45a;
    box-shadow: 0 10px 18px -8px rgba(0, 0, 0, 0.45);
  }
`

export const PrimaryPillButtonAsButton = styled.button`
  padding: 10px 24px;
  background: #add94e;
  color: #0b0b0e;
  font-weight: 700;
  border-radius: 9999px;
  text-decoration: none;
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;
  font-size: inherit;
  font-family: inherit;

  &:hover {
    background: #b8e45a;
    box-shadow: 0 10px 18px -8px rgba(0, 0, 0, 0.45);
  }
`

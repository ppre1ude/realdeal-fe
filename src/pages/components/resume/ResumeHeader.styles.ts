import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  height: 80px;
  background: white;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 48px;
`

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const HeaderLogo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: inherit;
`

export const HeaderLogoIcon = styled.div`
  width: 40px;
  height: 40px;
  background: #add94e;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
`

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 40px;
`

export const HeaderNavLink = styled(Link)<{ $isActive?: boolean }>`
  color: ${(props) => (props.$isActive ? '#add94e' : '#6c757d')};
  font-weight: ${(props) => (props.$isActive ? '600' : '400')};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #1a1c1e;
  }
`

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const HeaderUserInfo = styled.div`
  text-align: right;
`

export const HeaderUserName = styled.p`
  font-size: 14px;
  font-weight: 700;
`

export const HeaderUserPlan = styled.p`
  font-size: 12px;
  color: #6c757d;
`

export const HeaderUserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #e9ecef;
`

import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FooterContainer = styled.footer`
  margin-top: auto;
  padding: 32px 48px;
  border-top: 1px solid #e9ecef;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }
`

export const FooterText = styled.p`
  color: #6c757d;
  font-size: 14px;
`

export const FooterLinks = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`

export const FooterLink = styled(Link)`
  font-size: 14px;
  color: #6c757d;
  text-decoration: none;
  transition: text-decoration 0.2s ease;

  &:hover {
    text-decoration: underline;
  }
`

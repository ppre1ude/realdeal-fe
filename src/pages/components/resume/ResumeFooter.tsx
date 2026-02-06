import { Link } from 'react-router-dom'
import {
  FooterContainer,
  FooterText,
  FooterLinks,
  FooterLink,
} from './ResumeFooter.styles'

const ResumeFooter = () => {
  return (
    <FooterContainer>
      <FooterText>© 2025 Vinsign AI. All evaluation data is encrypted and secure.</FooterText>
      <FooterLinks>
        <FooterLink to="/privacy">개인정보 처리방침</FooterLink>
        <FooterLink to="/terms">이용약관</FooterLink>
        <FooterLink to="/contact">문의하기</FooterLink>
      </FooterLinks>
    </FooterContainer>
  )
}

export default ResumeFooter

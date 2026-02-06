import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const PageContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: white;
  font-family: 'Pretendard', sans-serif;
`

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  height: 80px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;

  @media (max-width: 1024px) {
    padding: 0 40px;
  }
`

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;
`

export const Logo = styled(Link)`
  font-size: 24px;
  font-weight: 900;
  color: #add94e;
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;
  color: #6b7280;
  font-weight: 500;
`

export const NavLink = styled(Link)`
  color: #6b7280;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #add94e;
  }

  &.active {
    color: #000;
    font-weight: 700;
  }
`

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const LoginButton = styled(Link)`
  padding: 10px 24px;
  color: #6b7280;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #000;
  }
`

export const StartButton = styled(Link)`
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

export const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 640px;
  background: #f9fbf4;
  display: flex;
  align-items: center;
  padding: 0 80px;
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 0 40px;
    height: auto;
    min-height: 640px;
  }
`

export const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  width: 50%;

  @media (max-width: 1024px) {
    width: 100%;
  }
`

export const Badge = styled.span`
  display: inline-block;
  padding: 6px 16px;
  background: rgba(173, 217, 78, 0.2);
  color: #8bb535;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 24px;
`

export const HeroTitle = styled.h1`
  font-size: 60px;
  font-weight: 900;
  line-height: 1.2;
  margin-bottom: 32px;
  color: #111827;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`

export const HeroTitleHighlight = styled.span`
  color: #add94e;
`

export const HeroDescription = styled.p`
  font-size: 20px;
  color: #6b7280;
  margin-bottom: 40px;
  line-height: 1.6;
`

export const HeroButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`

export const PrimaryButton = styled(Link)`
  padding: 20px 40px;
  background: #000;
  color: white;
  font-size: 18px;
  font-weight: 700;
  border-radius: 16px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.2s ease;

  &:hover {
    background: #374151;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`

export const SecondaryButton = styled(Link)`
  padding: 20px 32px;
  background: white;
  border: 2px solid #e5e7eb;
  color: #374151;
  font-size: 18px;
  font-weight: 700;
  border-radius: 16px;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    border-color: #add94e;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`

export const HeroImage = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 700px;

  @media (max-width: 1024px) {
    display: none;
  }
`

export const HeroImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  border-radius: 0 40px 40px 0;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  overflow: hidden;
`

export const HeroImageContent = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const WalkthroughSection = styled.section`
  padding: 96px 80px;
  background: white;

  @media (max-width: 1024px) {
    padding: 64px 40px;
  }
`

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 80px;
`

export const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 900;
  margin-bottom: 16px;
`

export const SectionDescription = styled.p`
  color: #6b7280;
  font-size: 18px;
`

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const FeatureCard = styled.div`
  padding: 40px;
  border-radius: 32px;
  background: #f9fafb;
  border: 1px solid #f3f4f6;
  transition: all 0.2s ease;

  &:hover {
    border-color: #add94e;
  }
`

export const FeatureIcon = styled.div`
  width: 64px;
  height: 64px;
  background: white;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #add94e;
  margin-bottom: 32px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;

  ${FeatureCard}:hover & {
    background: #add94e;
    color: white;
  }
`

export const FeatureTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
`

export const FeatureDescription = styled.p`
  color: #6b7280;
  line-height: 1.6;
`

export const ResumeSection = styled.section`
  padding: 96px 80px;
  background: #f9fafb;

  @media (max-width: 1024px) {
    padding: 64px 40px;
  }
`

export const ResumeContent = styled.div`
  display: flex;
  gap: 64px;
  align-items: flex-start;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

export const ResumeLeft = styled.div`
  width: 33.333%;

  @media (max-width: 1024px) {
    width: 100%;
  }
`

export const ResumeRight = styled.div`
  flex: 1;
  background: white;
  border-radius: 40px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  border: 1px solid #f3f4f6;
  overflow: hidden;
`

export const ResumeTitle = styled.h2`
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 24px;
  line-height: 1.2;
`

export const ResumeDescription = styled.p`
  color: #6b7280;
  margin-bottom: 32px;
  line-height: 1.6;
`

export const UploadArea = styled.div`
  width: 100%;
  aspect-ratio: 1;
  background: white;
  border: 4px dashed #e5e7eb;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #add94e;
    background: #f9fbf4;
  }
`

export const UploadIcon = styled.div`
  width: 80px;
  height: 80px;
  background: #f9fbf4;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #add94e;
  font-size: 32px;
  margin-bottom: 24px;
  transition: transform 0.2s ease;

  ${UploadArea}:hover & {
    transform: scale(1.1);
  }
`

export const UploadText = styled.span`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
`

export const UploadSubtext = styled.span`
  color: #9ca3af;
  font-size: 14px;
`

export const PreviewWindow = styled.div`
  background: white;
  border-radius: 40px;
  overflow: hidden;
`

export const PreviewHeader = styled.div`
  height: 56px;
  background: #111827;
  display: flex;
  align-items: center;
  padding: 0 24px;
  justify-content: space-between;
`

export const PreviewDots = styled.div`
  display: flex;
  gap: 8px;
`

export const PreviewDot = styled.div<{ $color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(props) => props.$color};
`

export const PreviewTitle = styled.span`
  color: #9ca3af;
  font-size: 12px;
  font-family: monospace;
`

export const PreviewContent = styled.div`
  padding: 40px;
`

export const PreviewHeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #f3f4f6;
`

export const PreviewHeaderLeft = styled.div``

export const PreviewHeaderTitle = styled.h4`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 4px;
`

export const PreviewHeaderSubtitle = styled.p`
  font-size: 14px;
  color: #6b7280;
`

export const PreviewStatus = styled.div`
  padding: 8px 16px;
  background: rgba(173, 217, 78, 0.1);
  color: #8bb535;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
`

export const PreviewContentSection = styled.div`
  margin-bottom: 32px;
`

export const PreviewContentHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
`

export const PreviewContentDot = styled.span<{ $color: string }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${(props) => props.$color};
`

export const PreviewContentLabel = styled.span`
  font-weight: 700;
  color: #1f2937;
`

export const PreviewContentText = styled.div`
  padding: 16px;
  background: #f9fafb;
  border-radius: 12px;
  color: #6b7280;
  text-decoration: line-through;
  font-size: 14px;
`

export const PreviewContentSuggested = styled.div`
  padding: 24px;
  background: #f9fbf4;
  border: 1px solid rgba(173, 217, 78, 0.3);
  border-radius: 12px;
  color: #1f2937;
  font-size: 14px;
  line-height: 1.6;
  position: relative;
  overflow: hidden;
`

export const PreviewContentBadge = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 8px;
  background: #add94e;
  color: white;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`

export const PreviewContentNote = styled.p`
  margin-top: 8px;
  font-size: 12px;
  color: #2563eb;
  font-weight: 500;
  font-style: italic;
`

export const MatchingSection = styled.section`
  padding: 96px 80px;

  @media (max-width: 1024px) {
    padding: 64px 40px;
  }
`

export const MatchingHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`

export const MatchingHeaderLeft = styled.div``

export const MatchingHeaderRight = styled(Link)`
  color: #111827;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateX(4px);
  }
`

export const CompanyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const CompanyCard = styled(Link)`
  background: white;
  border-radius: 24px;
  border: 1px solid #f3f4f6;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: inherit;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }
`

export const CompanyLogo = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: #f9fafb;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  overflow: hidden;
`

export const CompanyLogoImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
`

export const CompanyTags = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`

export const CompanyTag = styled.span<{ $bgColor: string; $textColor: string }>`
  padding: 4px 8px;
  background: ${(props) => props.$bgColor};
  color: ${(props) => props.$textColor};
  font-size: 10px;
  font-weight: 700;
  border-radius: 4px;
`

export const CompanyName = styled.h4`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 4px;
`

export const CompanyPosition = styled.p`
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 24px;
`

export const CompanyMatch = styled.div`
  padding: 16px;
  background: #f9fbf4;
  border-radius: 16px;
  margin-bottom: 24px;
`

export const CompanyMatchHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`

export const CompanyMatchLabel = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #374151;
`

export const CompanyMatchValue = styled.span`
  font-size: 18px;
  font-weight: 900;
  color: #8bb535;
`

export const CompanyMatchBar = styled.div`
  width: 100%;
  height: 8px;
  background: #e5e7eb;
  border-radius: 9999px;
  overflow: hidden;
`

export const CompanyMatchBarFill = styled.div<{ $width: number }>`
  height: 100%;
  background: #add94e;
  width: ${(props) => props.$width}%;
`

export const CompanyButton = styled.div`
  width: 100%;
  padding: 16px;
  background: #f9fafb;
  color: #374151;
  font-weight: 700;
  border-radius: 12px;
  text-align: center;
  transition: all 0.2s ease;

  ${CompanyCard}:hover & {
    background: #add94e;
    color: #000;
  }
`

export const Footer = styled.footer`
  background: #111827;
  color: white;
  padding: 80px 80px 40px;

  @media (max-width: 1024px) {
    padding: 64px 40px 32px;
  }
`

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 64px;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 48px;
  }
`

export const FooterLeft = styled.div``

export const FooterLogo = styled.div`
  font-size: 24px;
  font-weight: 900;
  color: #add94e;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
`

export const FooterDescription = styled.p`
  color: #9ca3af;
  max-width: 320px;
  line-height: 1.6;
`

export const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 80px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 48px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`

export const FooterLinkGroup = styled.div``

export const FooterLinkTitle = styled.h5`
  font-weight: 700;
  margin-bottom: 24px;
`

export const FooterLinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const FooterLinkItem = styled.li``

export const FooterLink = styled(Link)`
  color: #9ca3af;
  font-size: 14px;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: white;
  }
`

export const FooterBottom = styled.div`
  padding-top: 40px;
  border-top: 1px solid #1f2937;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #6b7280;
  font-size: 14px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
    align-items: flex-start;
  }
`

export const FooterSocial = styled.div`
  display: flex;
  gap: 24px;
`

export const FooterSocialLink = styled.a`
  color: #6b7280;
  font-size: 20px;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: white;
  }
`

export const FloatingButton = styled.div`
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 50;
`

export const FAB = styled.button`
  width: 64px;
  height: 64px;
  background: #add94e;
  color: #000;
  border-radius: 50%;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`

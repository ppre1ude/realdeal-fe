import styled, { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom'

export const HomeGlobalStyle = createGlobalStyle`
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css');

  * {
    box-sizing: border-box;
    font-family: 'Pretendard', sans-serif;
  }

  body {
    margin: 0;
    background: #ffffff;
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
  display: flex;
  justify-content: center;
  background: #ffffff;
`

export const AppShell = styled.div`
  width: 1440px;
  min-height: 1024px;
  background: #ffffff;
  position: relative;
`

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid #f3f4f6;
`

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 24px;
  font-weight: 900;
  color: #add94e;
`

export const LogoText = styled.span`
  letter-spacing: 0.02em;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;
  color: #4b5563;
  font-weight: 500;
`

export const NavLink = styled(Link)<{ $active?: boolean }>`
  color: ${({ $active }) => ($active ? '#000000' : '#4b5563')};
  font-weight: ${({ $active }) => ($active ? 700 : 500)};
  transition: color 0.2s ease;

  &:hover {
    color: #add94e;
  }
`

export const NavAnchor = styled.a`
  color: #4b5563;
  transition: color 0.2s ease;

  &:hover {
    color: #add94e;
  }
`

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const TextLinkButton = styled(Link)`
  padding: 10px 24px;
  font-weight: 600;
  color: #6b7280;
  transition: color 0.2s ease;

  &:hover {
    color: #000000;
  }
`

export const PrimaryPillButton = styled(Link)`
  padding: 10px 24px;
  background: #add94e;
  color: #000000;
  font-weight: 700;
  border-radius: 999px;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  }
`

export const HeroSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 640px;
  padding: 0 80px;
  background: #f9fbf4;
  overflow: hidden;
`

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  width: 50%;
`

export const HeroBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 6px 16px;
  border-radius: 999px;
  background: rgba(173, 217, 78, 0.2);
  color: #8bb535;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 24px;
`

export const HeroTitle = styled.h1`
  margin: 0 0 32px;
  font-size: 60px;
  line-height: 1.2;
  font-weight: 900;
  color: #111827;
`

export const HeroHighlight = styled.span`
  color: #add94e;
`

export const HeroDescription = styled.p`
  margin: 0 0 40px;
  font-size: 20px;
  color: #4b5563;
  line-height: 1.625;
`

export const HeroActions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const DarkActionButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 20px 40px;
  border: none;
  border-radius: 16px;
  background: #000000;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #1f2937;
  }
`

export const LightActionButton = styled.button`
  padding: 20px 32px;
  border-radius: 16px;
  border: 2px solid #e5e7eb;
  background: #ffffff;
  color: #374151;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #add94e;
  }
`

export const HeroVisual = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 700px;
  height: 500px;
  border-radius: 40px 0 0 40px;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
`

export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Section = styled.section<{ $tone?: 'light' | 'muted' }>`
  padding: 96px 80px;
  background: ${({ $tone }) => ($tone === 'muted' ? '#f9fafb' : '#ffffff')};
`

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 80px;
`

export const SectionTitle = styled.h2`
  margin: 0 0 16px;
  font-size: 36px;
  font-weight: 900;
`

export const SectionSubtitle = styled.p`
  margin: 0;
  font-size: 18px;
  color: #6b7280;
`

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 48px;
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
  border-radius: 16px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: #add94e;
  margin-bottom: 32px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;

  ${FeatureCard}:hover & {
    background: #add94e;
    color: #ffffff;
  }
`

export const FeatureTitle = styled.h3`
  margin: 0 0 16px;
  font-size: 24px;
  font-weight: 700;
`

export const FeatureDescription = styled.p`
  margin: 0;
  color: #4b5563;
  line-height: 1.625;
`

export const ResumeLayout = styled.div`
  display: flex;
  gap: 64px;
  align-items: flex-start;
`

export const ResumeIntro = styled.div`
  width: 33.3333%;
`

export const ResumeTitle = styled.h2`
  margin: 0 0 24px;
  font-size: 30px;
  font-weight: 900;
  line-height: 1.25;
`

export const ResumeText = styled.p`
  margin: 0 0 32px;
  color: #4b5563;
  line-height: 1.625;
`

export const UploadDropzone = styled.div`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 40px;
  border: 4px dashed #e5e7eb;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  text-align: center;
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
  border-radius: 999px;
  background: #f9fbf4;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  color: #add94e;
  margin-bottom: 24px;
  transition: transform 0.2s ease;

  ${UploadDropzone}:hover & {
    transform: scale(1.1);
  }
`

export const UploadTitle = styled.span`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
`

export const UploadSubtitle = styled.span`
  font-size: 14px;
  color: #9ca3af;
`

export const AnalyzerPanel = styled.div`
  flex: 1;
  background: #ffffff;
  border-radius: 40px;
  border: 1px solid #f3f4f6;
  overflow: hidden;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
`

export const PanelHeader = styled.div`
  height: 56px;
  background: #111827;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
`

export const PanelDots = styled.div`
  display: flex;
  gap: 8px;
`

export const PanelDot = styled.span<{ $color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 999px;
  background: ${({ $color }) => $color};
`

export const PanelCode = styled.span`
  font-size: 12px;
  color: #9ca3af;
  font-family: 'SFMono-Regular', ui-monospace, SFMono-Regular, Menlo, monospace;
`

export const PanelSpacer = styled.div`
  width: 32px;
`

export const PanelBody = styled.div`
  padding: 40px;
`

export const PanelHeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0;
  padding-bottom: 24px;
  border-bottom: 1px solid #f3f4f6;
  margin-bottom: 32px;
`

export const PanelHeaderTitle = styled.h4`
  margin: 0 0 6px;
  font-size: 18px;
  font-weight: 700;
`

export const PanelHeaderMeta = styled.p`
  margin: 0;
  font-size: 14px;
  color: #6b7280;
`

export const StatusBadge = styled.span`
  padding: 8px 16px;
  border-radius: 8px;
  background: rgba(173, 217, 78, 0.1);
  color: #8bb535;
  font-weight: 700;
  font-size: 14px;
`

export const PanelStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`

export const PanelBlock = styled.div``

export const PanelBlockTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  font-weight: 700;
  color: #1f2937;
`

export const Dot = styled.span<{ $color: string }>`
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: ${({ $color }) => $color};
`

export const OriginalText = styled.div`
  padding: 16px;
  background: #f9fafb;
  border-radius: 12px;
  color: #6b7280;
  font-size: 14px;
  text-decoration: line-through;
`

export const SuggestionBox = styled.div`
  position: relative;
  padding: 24px;
  background: #f9fbf4;
  border: 1px solid rgba(173, 217, 78, 0.3);
  border-radius: 12px;
  font-size: 14px;
  line-height: 1.625;
  color: #1f2937;
`

export const SuggestionBadge = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  padding: 8px;
  background: #add94e;
  color: #ffffff;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`

export const KeywordHint = styled.p`
  margin: 8px 0 0;
  font-size: 12px;
  color: #2563eb;
  font-style: italic;
  font-weight: 500;
`

export const MatchingHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 0;
  margin-bottom: 48px;
`

export const MatchingTitle = styled.h2`
  margin: 0 0 16px;
  font-size: 36px;
  font-weight: 900;
`

export const MatchingSubtitle = styled.p`
  margin: 0;
  color: #6b7280;
  font-size: 18px;
`

export const ViewAllButton = styled.button`
  border: none;
  background: transparent;
  color: #111827;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateX(4px);
  }
`

export const CompanyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;
`

export const CompanyCard = styled.div`
  background: #ffffff;
  border-radius: 24px;
  border: 1px solid #f3f4f6;
  padding: 24px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
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

export const TagRow = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
`

export const Tag = styled.span<{ $tone?: 'default' | 'blue' }>`
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 700;
  background: ${({ $tone }) => ($tone === 'blue' ? '#eff6ff' : '#f3f4f6')};
  color: ${({ $tone }) => ($tone === 'blue' ? '#3b82f6' : '#6b7280')};
`

export const CompanyName = styled.h4`
  margin: 0 0 4px;
  font-size: 20px;
  font-weight: 700;
`

export const CompanyRole = styled.p`
  margin: 0 0 24px;
  font-size: 14px;
  color: #6b7280;
`

export const MatchBox = styled.div`
  padding: 16px;
  border-radius: 16px;
  background: #f9fbf4;
  margin-bottom: 24px;
`

export const MatchHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 700;
  color: #374151;
`

export const MatchValue = styled.span`
  font-size: 18px;
  font-weight: 900;
  color: #8bb535;
`

export const MatchBar = styled.div`
  width: 100%;
  height: 8px;
  background: #e5e7eb;
  border-radius: 999px;
  overflow: hidden;
`

export const MatchFill = styled.div<{ $percent: number }>`
  height: 100%;
  width: ${({ $percent }) => `${$percent}%`};
  background: #add94e;
  border-radius: 999px;
`

export const CardButton = styled.button`
  width: 100%;
  padding: 16px 0;
  border-radius: 12px;
  border: none;
  background: #f9fafb;
  color: #374151;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;

  ${CompanyCard}:hover & {
    background: #add94e;
    color: #000000;
  }
`

export const Footer = styled.footer`
  background: #111827;
  color: #ffffff;
  padding: 80px;
`

export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 64px;
`

export const FooterBrand = styled.div`
  max-width: 320px;
`

export const FooterBrandTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 24px;
  font-weight: 900;
  color: #add94e;
  margin-bottom: 24px;
`

export const FooterText = styled.p`
  margin: 0;
  color: #9ca3af;
  line-height: 1.625;
`

export const FooterColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 80px;
`

export const FooterColumn = styled.div``

export const FooterHeading = styled.h5`
  margin: 0 0 24px;
  font-size: 14px;
  font-weight: 700;
`

export const FooterList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 14px;
  color: #9ca3af;
`

export const FooterLink = styled.a`
  color: inherit;
  transition: color 0.2s ease;

  &:hover {
    color: #ffffff;
  }
`

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
  border-top: 1px solid #1f2937;
  color: #6b7280;
  font-size: 14px;
`

export const SocialLinks = styled.div`
  display: flex;
  gap: 24px;
  font-size: 20px;
`

export const SocialLink = styled.a`
  color: #9ca3af;
  transition: color 0.2s ease;

  &:hover {
    color: #ffffff;
  }
`

export const Fab = styled.div`
  position: absolute;
  right: 40px;
  bottom: 40px;
  z-index: 50;
`

export const FabButton = styled.button`
  width: 64px;
  height: 64px;
  border-radius: 999px;
  border: none;
  background: #add94e;
  color: #000000;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`

import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Page = styled.div`
  width: 100%;
  background: #f8f9fb;
  color: #111827;
  display: flex;
  justify-content: center;
`

export const Shell = styled.div`
  width: 100%;
  max-width: 1440px;
  min-height: 100vh;
  display: block;
`

export const Sidebar = styled.aside`
  width: 280px;
  background: #ffffff;
  border-right: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`

export const SidebarHeader = styled.div`
  padding: 32px;
`

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 800;
  font-size: 20px;
  color: #111827;
`

export const BrandIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: #add94e;
  color: #111827;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`

export const SidebarNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 0 24px;
`

export const NavItem = styled.button<{ $active?: boolean }>`
  border: none;
  background: ${({ $active }) => ($active ? 'rgba(173, 217, 78, 0.16)' : 'transparent')};
  color: ${({ $active }) => ($active ? '#6b8a2f' : '#6b7280')};
  font-weight: ${({ $active }) => ($active ? 700 : 600)};
  border-radius: 14px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    background: rgba(173, 217, 78, 0.12);
    color: #6b8a2f;
  }
`

export const SidebarFooter = styled.div`
  margin-top: auto;
  padding: 24px;
`

export const PremiumCard = styled.div`
  background: #111827;
  border-radius: 20px;
  padding: 20px;
  color: #ffffff;
`

export const PremiumLabel = styled.p`
  margin: 0 0 4px;
  font-size: 12px;
  color: #9ca3af;
`

export const PremiumTitle = styled.p`
  margin: 0 0 16px;
  font-weight: 700;
`

export const PremiumButton = styled.button`
  width: 100%;
  border: none;
  background: #add94e;
  color: #111827;
  font-weight: 700;
  padding: 8px 12px;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #9cc445;
  }
`

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const TopBar = styled.header`
  height: 80px;
  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  gap: 24px;
`

export const TopBarTitle = styled.h1`
  margin: 0;
  font-size: 20px;
  font-weight: 800;
`

export const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #6b7280;

  span {
    color: #111827;
    font-weight: 600;
  }
`

export const TopBarLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const TopBarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const Notification = styled.div`
  position: relative;
  color: #9ca3af;
  font-size: 18px;
`

export const NotificationDot = styled.span`
  position: absolute;
  top: -2px;
  right: -2px;
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: #ef4444;
  border: 2px solid #ffffff;
`

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const UserMeta = styled.div`
  text-align: right;
`

export const UserName = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 700;
`

export const UserRole = styled.p`
  margin: 0;
  font-size: 12px;
  color: #6b7280;
`

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 999px;
  border: 1px solid #e5e7eb;
`

export const Content = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: 1024px) {
    padding: 24px;
  }
`

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const StatCard = styled.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 20px;
  border: 1px solid #f1f5f9;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.04);
`

export const StatLabel = styled.p`
  margin: 0 0 10px;
  color: #6b7280;
  font-size: 13px;
`

export const StatValueRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 6px;
`

export const StatValue = styled.span<{ $tone?: 'primary' | 'success' }>`
  font-size: 28px;
  font-weight: 800;
  color: ${({ $tone }) => ($tone === 'success' ? '#10b981' : '#add94e')};
`

export const StatSuffix = styled.span`
  color: #9ca3af;
  font-size: 13px;
`

export const StatHint = styled.p`
  margin: 12px 0 0;
  font-size: 12px;
  color: #9ca3af;
`

export const ProgressBar = styled.div`
  margin-top: 12px;
  width: 100%;
  height: 8px;
  border-radius: 999px;
  background: #f1f5f9;
  overflow: hidden;
`

export const ProgressFill = styled.div<{ $value: number }>`
  width: ${({ $value }) => `${$value}%`};
  height: 100%;
  background: #add94e;
  border-radius: 999px;
`

export const CompletionRow = styled.div`
  margin-top: 12px;
  display: flex;
  gap: 4px;
`

export const CompletionBar = styled.span<{ $active?: boolean }>`
  flex: 1;
  height: 4px;
  border-radius: 999px;
  background: ${({ $active }) => ($active ? '#10b981' : '#e5e7eb')};
`

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`

export const LeftColumn = styled.section`
  grid-column: span 4;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 1200px) {
    grid-column: span 12;
  }
`

export const RightColumn = styled.section`
  grid-column: span 8;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 1200px) {
    grid-column: span 12;
  }
`

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const SectionTitle = styled.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 800;
`

export const SectionLink = styled.button`
  border: none;
  background: transparent;
  color: #6b8a2f;
  font-weight: 600;
  cursor: pointer;
`

export const SectionLinkRoute = styled(Link)`
  color: #6b8a2f;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const ResumeCard = styled.div<{ $active?: boolean }>`
  background: #ffffff;
  border-radius: 20px;
  border: ${({ $active }) => ($active ? '2px solid #add94e' : '1px solid #f1f5f9')};
  padding: 16px;
  box-shadow: ${({ $active }) =>
    $active ? '0 10px 18px rgba(173, 217, 78, 0.16)' : '0 4px 12px rgba(15, 23, 42, 0.04)'};
  position: relative;
`

export const ResumeBadge = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  padding: 4px 10px;
  background: #add94e;
  color: #111827;
  font-size: 10px;
  font-weight: 800;
  border-radius: 0 20px 0 12px;
`

export const ResumeRow = styled.div`
  display: flex;
  gap: 12px;
`

export const ResumeIcon = styled.div<{ $active?: boolean }>`
  width: 44px;
  height: 44px;
  border-radius: 14px;
  background: ${({ $active }) => ($active ? 'rgba(173, 217, 78, 0.15)' : '#f3f4f6')};
  color: ${({ $active }) => ($active ? '#6b8a2f' : '#9ca3af')};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ResumeTitle = styled.p`
  margin: 0 0 4px;
  font-weight: 700;
  color: #111827;
`

export const ResumeMeta = styled.p`
  margin: 0;
  font-size: 12px;
  color: #9ca3af;
`

export const ResumeTags = styled.div`
  display: flex;
  gap: 6px;
  margin-top: 10px;
`

export const ResumeTag = styled.span<{ $tone?: 'success' | 'muted' }>`
  padding: 2px 6px;
  border-radius: 6px;
  font-size: 10px;
  font-weight: 700;
  background: ${({ $tone }) => ($tone === 'success' ? 'rgba(173, 217, 78, 0.2)' : '#f3f4f6')};
  color: ${({ $tone }) => ($tone === 'success' ? '#6b8a2f' : '#6b7280')};
`

export const AddResume = styled(Link)`
  border: 2px dashed #e5e7eb;
  background: transparent;
  border-radius: 20px;
  padding: 14px;
  color: #9ca3af;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  transition: border-color 0.2s ease, color 0.2s ease;
  text-decoration: none;

  &:hover {
    border-color: #add94e;
    color: #6b8a2f;
  }
`

export const AnalysisCard = styled.div`
  background: #ffffff;
  border-radius: 24px;
  border: 1px solid #f1f5f9;
  box-shadow: 0 6px 16px rgba(15, 23, 42, 0.05);
  overflow: hidden;
`

export const AnalysisHeader = styled.div`
  padding: 24px;
  border-bottom: 1px solid #f1f5f9;
`

export const AnalysisTitle = styled.h3`
  margin: 0 0 16px;
  font-size: 18px;
  font-weight: 800;
`

export const AnalysisGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

export const AnalysisColumnTitle = styled.p`
  margin: 0 0 12px;
  font-size: 13px;
  font-weight: 700;
  color: #374151;
  display: flex;
  align-items: center;
  gap: 6px;
`

export const AnalysisList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const AnalysisItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 13px;
  color: #6b7280;
  line-height: 1.6;
`

export const AnalysisIcon = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  background: rgba(173, 217, 78, 0.2);
  color: #6b8a2f;
  margin-top: 2px;
`

export const KeywordSection = styled.div`
  padding: 24px;
  background: rgba(248, 250, 252, 0.7);
`

export const KeywordTitle = styled.h4`
  margin: 0 0 16px;
  font-size: 16px;
  font-weight: 800;
`

export const KeywordRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

export const Keyword = styled.span<{ $muted?: boolean }>`
  padding: 8px 12px;
  border-radius: 999px;
  border: 1px solid ${({ $muted }) => ($muted ? '#e5e7eb' : 'rgba(173, 217, 78, 0.3)')};
  background: #ffffff;
  color: ${({ $muted }) => ($muted ? '#9ca3af' : '#6b8a2f')};
  font-size: 12px;
  font-weight: ${({ $muted }) => ($muted ? 600 : 700)};
`

export const RoadmapBanner = styled.div`
  background: #1a230b;
  border-radius: 24px;
  padding: 24px;
  color: #ffffff;
  position: relative;
  overflow: hidden;
`

export const RoadmapBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px solid rgba(173, 217, 78, 0.4);
  background: rgba(173, 217, 78, 0.12);
  color: #add94e;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`

export const RoadmapTitle = styled.h3`
  margin: 12px 0 12px;
  font-size: 20px;
  font-weight: 800;
`

export const RoadmapText = styled.p`
  margin: 0 0 20px;
  color: #d1d5db;
  line-height: 1.6;
`

export const RoadmapActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`

export const RoadmapButton = styled.button<{ $primary?: boolean }>`
  border: 1px solid rgba(173, 217, 78, 0.4);
  background: ${({ $primary }) => ($primary ? '#add94e' : 'transparent')};
  color: ${({ $primary }) => ($primary ? '#111827' : '#ffffff')};
  font-weight: 700;
  padding: 10px 16px;
  border-radius: 12px;
  cursor: pointer;
`

export const RoadmapSection = styled.section`
  background: #1a230b;
  border-radius: 28px;
  padding: 32px;
  color: #ffffff;
  position: relative;
  overflow: hidden;
`

export const RoadmapHeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 28px;
  flex-wrap: wrap;
`

export const RoadmapHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const RoadmapTitleText = styled.h3`
  margin: 0;
  font-size: 20px;
  font-weight: 800;
`

export const RoadmapControls = styled.div`
  display: flex;
  gap: 8px;
`

export const RoadmapControlButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 10px;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`

export const RoadmapTimeline = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

export const RoadmapLine = styled.div`
  position: absolute;
  top: 46px;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, #add94e 0%, rgba(173, 217, 78, 0.4) 50%, rgba(173, 217, 78, 0) 100%);
  z-index: 0;

  @media (max-width: 640px) {
    display: none;
  }
`

export const RoadmapStep = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
`

export const RoadmapStepIcon = styled.div<{ $active?: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  background: ${({ $active }) => ($active ? '#add94e' : 'rgba(255, 255, 255, 0.08)')};
  color: ${({ $active }) => ($active ? '#111827' : '#ffffff')};
  border: ${({ $active }) => ($active ? 'none' : '1px solid rgba(255, 255, 255, 0.2)')};
  box-shadow: ${({ $active }) => ($active ? '0 0 20px rgba(173, 217, 78, 0.4)' : 'none')};
`

export const RoadmapStepCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 18px;
  padding: 16px;
  backdrop-filter: blur(8px);
`

export const RoadmapStepDate = styled.p<{ $active?: boolean }>`
  margin: 0 0 6px;
  font-size: 12px;
  font-weight: 700;
  color: ${({ $active }) => ($active ? '#add94e' : '#9ca3af')};
`

export const RoadmapStepTitle = styled.p`
  margin: 0 0 8px;
  font-size: 14px;
  font-weight: 700;
`

export const RoadmapStepDesc = styled.p`
  margin: 0;
  font-size: 12px;
  color: #9ca3af;
  line-height: 1.5;
`

export const RoadmapGlow = styled.div`
  position: absolute;
  right: -80px;
  bottom: -80px;
  width: 320px;
  height: 320px;
  background: rgba(173, 217, 78, 0.08);
  border-radius: 999px;
  filter: blur(40px);
`

export const RoadmapIcon = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
  opacity: 0.08;
  font-size: 140px;
  color: #add94e;
`

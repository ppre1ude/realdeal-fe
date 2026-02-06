import styled from 'styled-components'

export const Page = styled.div`
  width: 100%;
  background: #f8fafc;
  color: #1e293b;
  display: flex;
  justify-content: center;
`

export const Shell = styled.div`
  width: 100%;
  max-width: 1440px;
  min-height: 100vh;
`

export const Main = styled.main`
  padding: 40px 120px 80px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: 1200px) {
    padding: 32px 64px 72px;
  }

  @media (max-width: 768px) {
    padding: 24px 24px 64px;
  }
`

export const HeroGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`

export const HeroCard = styled.div`
  grid-column: span 8;
  background: #ffffff;
  border-radius: 32px;
  padding: 40px;
  border: 1px solid #f1f5f9;
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 32px;

  @media (max-width: 1024px) {
    grid-column: span 12;
  }

  @media (max-width: 768px) {
    padding: 28px;
  }
`

export const HeroBadge = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 6px 16px;
  border-radius: 999px;
  background: #f5f9e8;
  color: #4a5d18;
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 20px;
`

export const HeroTitle = styled.h1`
  margin: 0 0 16px;
  font-size: 36px;
  font-weight: 800;
  line-height: 1.35;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`

export const HeroHighlight = styled.span`
  color: #8cb336;
`

export const HeroDescription = styled.p`
  margin: 0;
  font-size: 18px;
  color: #6b7280;
  line-height: 1.7;
  max-width: 620px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

export const HeroFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-top: 24px;
  border-top: 1px solid #f1f5f9;
`

export const AvatarGroup = styled.div`
  display: flex;
  align-items: center;
`

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 999px;
  border: 2px solid #ffffff;

  &:not(:first-child) {
    margin-left: -12px;
  }
`

export const HeroMeta = styled.p`
  margin: 0;
  font-size: 14px;
  color: #94a3b8;

  span {
    color: #0f172a;
    font-weight: 700;
  }
`

export const ScoreCard = styled.div`
  grid-column: span 4;
  background: #add94e;
  border-radius: 32px;
  padding: 40px;
  color: #1e293b;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0 16px 32px rgba(173, 217, 78, 0.22);
  gap: 16px;

  @media (max-width: 1024px) {
    grid-column: span 12;
  }
`

export const ScoreRing = styled.div`
  position: relative;
  width: 160px;
  height: 160px;
`

export const ScoreValue = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-weight: 800;
`

export const ScoreNumber = styled.span`
  font-size: 44px;
`

export const ScoreLabel = styled.span`
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  opacity: 0.75;
`

export const ScoreTitle = styled.h3`
  margin: 0;
  font-size: 20px;
  font-weight: 800;
`

export const ScoreText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #4a5d18;
  line-height: 1.6;
`

export const AnalysisGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`

export const AnalysisCard = styled.div`
  background: #ffffff;
  border-radius: 32px;
  padding: 32px;
  border: 1px solid #f1f5f9;
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.05);
`

export const AnalysisHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
`

export const AnalysisIcon = styled.div<{ $tone: 'success' | 'danger' }>`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ $tone }) => ($tone === 'success' ? '#f5f9e8' : '#fff1f2')};
  color: ${({ $tone }) => ($tone === 'success' ? '#8cb336' : '#f43f5e')};
  font-size: 18px;
`

export const AnalysisTitle = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 800;
`

export const AnalysisList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const AnalysisItem = styled.div<{ $tone: 'success' | 'danger' }>`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  border-radius: 20px;
  border: 1px solid ${({ $tone }) => ($tone === 'success' ? '#dff2e1' : '#fee2e2')};
  background: ${({ $tone }) => ($tone === 'success' ? 'rgba(16,185,129,0.06)' : 'rgba(244,63,94,0.08)')};
`

export const AnalysisItemIcon = styled.span<{ $tone: 'success' | 'danger' }>`
  margin-top: 2px;
  color: ${({ $tone }) => ($tone === 'success' ? '#10b981' : '#f43f5e')};
`

export const AnalysisItemTitle = styled.p`
  margin: 0 0 6px;
  font-weight: 700;
  color: #1f2937;
`

export const AnalysisItemText = styled.p`
  margin: 0;
  font-size: 13px;
  color: #6b7280;
  line-height: 1.6;
`

export const ActionSection = styled.section`
  background: #0f172a;
  border-radius: 32px;
  padding: 40px;
  color: #ffffff;
`

export const ActionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 28px;
  flex-wrap: wrap;
`

export const ActionTitle = styled.h2`
  margin: 0 0 6px;
  font-size: 24px;
  font-weight: 800;
`

export const ActionSubtitle = styled.p`
  margin: 0;
  color: #94a3b8;
`

export const ActionButton = styled.button`
  padding: 12px 22px;
  border-radius: 16px;
  border: none;
  background: #add94e;
  color: #1e293b;
  font-weight: 800;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #9bc93d;
  }
`

export const ActionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`

export const ActionCard = styled.div`
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 24px;
  border-radius: 20px;
  transition: background 0.2s ease;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.16);
  }
`

export const ActionCardIcon = styled.div<{ $tone: 'green' | 'amber' | 'emerald' }>`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  color: #0f172a;
  background: ${({ $tone }) =>
    $tone === 'amber' ? '#f59e0b' : $tone === 'emerald' ? '#10b981' : '#add94e'};
`

export const ActionCardTitle = styled.p`
  margin: 0 0 6px;
  font-size: 18px;
  font-weight: 700;
`

export const ActionCardText = styled.p`
  margin: 0;
  font-size: 13px;
  color: #cbd5f5;
  line-height: 1.6;
`

export const RoadmapCard = styled.section`
  background: #ffffff;
  border-radius: 32px;
  padding: 40px;
  border: 1px solid #f1f5f9;
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.05);
`

export const RoadmapTitle = styled.h2`
  margin: 0 0 32px;
  font-size: 24px;
  font-weight: 800;
`

export const RoadmapTimeline = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 48px;
`

export const RoadmapLine = styled.div`
  position: absolute;
  left: 38px;
  top: 0;
  bottom: 0;
  width: 4px;
  background: #f1f5f9;
`

export const RoadmapItem = styled.div`
  position: relative;
  display: flex;
  gap: 32px;
`

export const YearBadge = styled.div<{ $active?: boolean }>`
  width: 72px;
  height: 72px;
  border-radius: 999px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  background: ${({ $active }) => ($active ? '#add94e' : '#ffffff')};
  color: ${({ $active }) => ($active ? '#1e293b' : '#94a3b8')};
  border: ${({ $active }) => ($active ? 'none' : '4px solid #f1f5f9')};
  box-shadow: ${({ $active }) => ($active ? '0 12px 20px rgba(173, 217, 78, 0.2)' : 'none')};
  z-index: 1;
`

export const YearLabel = styled.span`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`

export const YearNumber = styled.span`
  font-size: 22px;
  font-weight: 900;
`

export const RoadmapContent = styled.div`
  flex: 1;
  padding-top: 6px;
`

export const RoadmapHeadingRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  flex-wrap: wrap;
`

export const RoadmapHeading = styled.h3`
  margin: 0;
  font-size: 20px;
  font-weight: 800;
`

export const RoadmapTag = styled.span`
  padding: 4px 12px;
  border-radius: 12px;
  background: #f5f9e8;
  color: #4a5d18;
  font-size: 12px;
  font-weight: 700;
`

export const RoadmapGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`

export const RoadmapBox = styled.div<{ $tone?: 'muted' }>`
  background: ${({ $tone }) => ($tone === 'muted' ? '#ffffff' : '#f8fafc')};
  border: 1px solid ${({ $tone }) => ($tone === 'muted' ? '#e2e8f0' : '#f1f5f9')};
  border-style: ${({ $tone }) => ($tone === 'muted' ? 'dashed' : 'solid')};
  padding: 18px;
  border-radius: 18px;
`

export const RoadmapBoxLabel = styled.p`
  margin: 0 0 6px;
  font-size: 11px;
  font-weight: 700;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`

export const RoadmapBoxText = styled.p`
  margin: 0;
  font-weight: 700;
  color: #1e293b;
`

export const FloatingActions = styled.div`
  position: fixed;
  right: 32px;
  bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const FloatingButton = styled.button<{ $tone?: 'light' | 'primary' }>`
  width: 56px;
  height: 56px;
  border-radius: 999px;
  border: 1px solid ${({ $tone }) => ($tone === 'light' ? '#f1f5e8' : 'transparent')};
  background: ${({ $tone }) => ($tone === 'light' ? '#ffffff' : '#add94e')};
  color: ${({ $tone }) => ($tone === 'light' ? '#4a5d18' : '#1e293b')};
  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.16);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`

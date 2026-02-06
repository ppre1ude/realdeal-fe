import styled from 'styled-components'

export const Page = styled.div`
  width: 100%;
  background: #f8fafb;
  color: #222222;
  display: flex;
  justify-content: center;
`

export const Shell = styled.div`
  width: 100%;
  max-width: 1440px;
  min-height: 100vh;
`

export const Hero = styled.section`
  background: #ffffff;
  padding: 48px 120px;

  @media (max-width: 1200px) {
    padding: 40px 64px;
  }

  @media (max-width: 768px) {
    padding: 32px 24px;
  }
`

export const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
`

export const HeroText = styled.div`
  max-width: 560px;
`

export const HeroTitle = styled.h1`
  margin: 0;
  font-size: 42px;
  font-weight: 800;
  color: #222222;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`

export const HeroHighlight = styled.span`
  color: #add94e;
`

export const HeroSubtitle = styled.p`
  margin: 16px 0 0;
  font-size: 18px;
  color: #6b7280;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

export const HeroImageWrap = styled.div`
  width: 480px;
  height: 240px;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 16px 30px rgba(15, 23, 42, 0.12);

  @media (max-width: 1024px) {
    width: 100%;
    height: 220px;
  }
`

export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Main = styled.main`
  padding: 40px 120px 80px;

  @media (max-width: 1200px) {
    padding: 32px 64px 72px;
  }

  @media (max-width: 768px) {
    padding: 24px 24px 64px;
  }
`

export const FilterSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 32px;
`

export const FilterGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`

export const FilterButton = styled.button<{ $active?: boolean }>`
  padding: 10px 18px;
  border-radius: 999px;
  border: 1px solid ${({ $active }) => ($active ? '#222222' : '#e5e7eb')};
  background: ${({ $active }) => ($active ? '#222222' : '#ffffff')};
  color: ${({ $active }) => ($active ? '#ffffff' : '#6b7280')};
  font-size: 14px;
  font-weight: ${({ $active }) => ($active ? 700 : 500)};
  cursor: pointer;
  transition: border-color 0.2s ease, color 0.2s ease;

  &:hover {
    border-color: #add94e;
    color: ${({ $active }) => ($active ? '#ffffff' : '#222222')};
  }
`

export const SortControl = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: none;
  background: transparent;
  color: #6b7280;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  span {
    color: #222222;
    font-weight: 600;
  }
`

export const CompanyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const CompanyCard = styled.article`
  background: #ffffff;
  border-radius: 24px;
  border: 1px solid #f3f4f6;
  box-shadow: 0 6px 18px rgba(15, 23, 42, 0.06);
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 34px rgba(15, 23, 42, 0.14);
  }
`

export const CompanyImageWrap = styled.div`
  position: relative;
  height: 180px;
  overflow: hidden;
`

export const CompanyImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const BookmarkButton = styled.button<{ $active?: boolean }>`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 40px;
  height: 40px;
  border-radius: 999px;
  border: none;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $active }) => ($active ? '#f43f5e' : '#9ca3af')};
  cursor: pointer;
  transition: color 0.2s ease, transform 0.2s ease;

  &:hover {
    color: #f43f5e;
    transform: scale(1.05);
  }
`

export const CompanyBody = styled.div`
  padding: 24px;
`

export const CompanyHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 16px;
`

export const CompanyInfo = styled.div`
  flex: 1;
`

export const CompanyName = styled.h3`
  margin: 0 0 4px;
  font-size: 20px;
  font-weight: 700;
  color: #222222;
`

export const CompanyDesc = styled.p`
  margin: 0;
  font-size: 14px;
  color: #6b7280;
`

export const CompanyLogo = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  border: 1px solid #f3f4f6;
  padding: 6px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CompanyLogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

export const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
`

export const Tag = styled.span`
  padding: 4px 10px;
  border-radius: 8px;
  background: rgba(173, 217, 78, 0.12);
  color: #7da12e;
  font-size: 12px;
  font-weight: 700;
`

export const MetaList = styled.div`
  border-top: 1px solid #f3f4f6;
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const MetaRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  color: #6b7280;

  span {
    color: #222222;
    font-weight: 600;
  }
`

export const Deadline = styled.span<{ $accent?: boolean }>`
  color: ${({ $accent }) => ($accent ? '#f43f5e' : '#222222')} !important;
  font-weight: 700 !important;
`

export const DetailButton = styled.button`
  width: 100%;
  margin-top: 20px;
  height: 50px;
  border-radius: 14px;
  border: none;
  background: #f3f4f6;
  color: #222222;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;

  ${CompanyCard}:hover & {
    background: #add94e;
    color: #ffffff;
  }
`

export const MoreButtonWrap = styled.div`
  margin-top: 48px;
  display: flex;
  justify-content: center;
`

export const MoreButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  border-radius: 999px;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  font-size: 16px;
  font-weight: 700;
  color: #222222;
  cursor: pointer;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: #add94e;
  }
`

import styled from 'styled-components'

export const PageContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: #f8f9fa;
  color: #1a1c1e;
  display: flex;
  flex-direction: column;
`

export const MainContent = styled.main`
  padding: 48px;
  flex: 1;
`

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`

export const LeftColumn = styled.div`
  grid-column: span 8;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: 1024px) {
    grid-column: span 12;
  }
`

export const RightColumn = styled.div`
  grid-column: span 4;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: 1024px) {
    grid-column: span 12;
  }
`

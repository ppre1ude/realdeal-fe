import styled from 'styled-components'

export const ResumeSummaryContainer = styled.section`
  background: white;
  padding: 32px;
  border-radius: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
`

export const ResumeSummaryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
`

export const ResumeSummaryIcon = styled.div`
  color: #add94e;
`

export const ResumeSummaryTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
`

export const HighlightGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const HighlightCard = styled.div`
  padding: 20px;
  background: #f8f9fa;
  border-radius: 16px;
  border-left: 4px solid #add94e;
`

export const HighlightLabel = styled.p`
  font-size: 14px;
  color: #6c757d;
  margin-bottom: 4px;
`

export const HighlightText = styled.p`
  font-weight: 500;
  color: #1a1c1e;
`

export const SummaryText = styled.p`
  margin-top: 24px;
  color: #495057;
  line-height: 1.6;
`

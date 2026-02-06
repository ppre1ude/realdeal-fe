import styled from 'styled-components'

export const EvaluationTagsContainer = styled.section`
  background: white;
  padding: 32px;
  border-radius: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
`

export const EvaluationTagsHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
`

export const EvaluationTagsIcon = styled.div`
  color: #add94e;
`

export const EvaluationTagsTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
`

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`

export const Tag = styled.span<{ $isPositive: boolean }>`
  padding: 8px 16px;
  background: ${(props) => (props.$isPositive ? 'white' : '#f8f9fa')};
  border: 2px solid ${(props) => (props.$isPositive ? '#add94e' : '#e9ecef')};
  color: ${(props) => (props.$isPositive ? '#6b8e23' : '#adb5bd')};
  font-weight: 700;
  border-radius: 9999px;
`

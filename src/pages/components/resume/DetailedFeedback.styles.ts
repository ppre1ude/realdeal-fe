import styled from 'styled-components'

export const DetailedFeedbackContainer = styled.section`
  background: white;
  padding: 32px;
  border-radius: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
`

export const DetailedFeedbackTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 24px;
`

export const FeedbackList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const FeedbackItem = styled.li`
  display: flex;
  gap: 12px;
`

export const FeedbackIcon = styled.div<{ $color: string }>`
  color: ${(props) => props.$color};
  margin-top: 4px;
  flex-shrink: 0;
`

export const FeedbackText = styled.p`
  font-size: 14px;
  color: #495057;
`

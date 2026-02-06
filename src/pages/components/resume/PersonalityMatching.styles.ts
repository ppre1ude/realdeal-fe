import styled from 'styled-components'

export const PersonalityMatchingContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`

export const PersonalityCard = styled.div`
  background: white;
  padding: 32px;
  border-radius: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
`

export const PersonalityCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`

export const PersonalityCardTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
`

export const PersonalityCardBadge = styled.span<{ $variant: 'analysis' | 'standard' }>`
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => (props.$variant === 'analysis' ? '#add94e' : '#6c757d')};
  background: ${(props) => (props.$variant === 'analysis' ? 'rgba(173, 217, 78, 0.1)' : '#f8f9fa')};
  padding: 4px 8px;
  border-radius: 4px;
`

export const PersonalityCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0;
`

export const PersonalityImage = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  margin-bottom: 16px;
  object-fit: cover;
`

export const PersonalityName = styled.h4`
  font-size: 24px;
  font-weight: 700;
  color: #1a1c1e;
  margin-bottom: 8px;
`

export const PersonalityDescription = styled.p`
  color: #6c757d;
  text-align: center;
  margin-top: 8px;
`

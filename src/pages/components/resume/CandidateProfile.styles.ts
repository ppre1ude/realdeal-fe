import styled from 'styled-components'

export const CandidateProfileContainer = styled.section`
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }
`

export const CandidateProfileLeft = styled.div``

export const StatusBadge = styled.span`
  padding: 4px 12px;
  background: rgba(173, 217, 78, 0.2);
  color: #6b8e23;
  font-size: 12px;
  font-weight: 700;
  border-radius: 9999px;
`

export const StatusDate = styled.span`
  color: #6c757d;
  font-size: 14px;
`

export const CandidateName = styled.h1`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 8px;
`

export const CandidateTitle = styled.span`
  font-size: 20px;
  font-weight: 400;
  color: #6c757d;
  margin-left: 8px;
`

export const CandidateInfo = styled.p`
  color: #6c757d;
`

export const CandidateProfileRight = styled.div`
  display: flex;
  gap: 12px;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`

export const ActionButton = styled.button<{ $variant: 'primary' | 'secondary' }>`
  padding: 12px 24px;
  border: ${(props) => (props.$variant === 'primary' ? 'none' : '1px solid #e9ecef')};
  background: ${(props) => (props.$variant === 'primary' ? '#add94e' : 'white')};
  color: ${(props) => (props.$variant === 'primary' ? 'white' : '#1a1c1e')};
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  ${(props) =>
    props.$variant === 'primary'
      ? `
    box-shadow: 0 10px 15px -3px rgba(173, 217, 78, 0.3);
    &:hover {
      filter: brightness(1.05);
    }
  `
      : `
    &:hover {
      background: #f8f9fa;
    }
  `}

  @media (max-width: 768px) {
    width: 100%;
  }
`

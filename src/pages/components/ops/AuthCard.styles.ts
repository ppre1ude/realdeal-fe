import styled from 'styled-components'

export const Card = styled.section<{ $offsetTop?: number }>`
  width: 100%;
  max-width: 448px;
  padding: 32px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  margin-top: ${({ $offsetTop }) => ($offsetTop ? `${$offsetTop}px` : '0')};
`

export const CardHeader = styled.div`
  margin: 0;
`

export const CardTitle = styled.h2`
  margin: 0 0 8px;
  font-size: 24px;
  font-weight: 700;
  color: #111827;
`

export const CardSubtitle = styled.p`
  margin: 0 0 32px;
  font-size: 14px;
  color: #6b7280;
`

export const CardBody = styled.div`
  display: block;
`

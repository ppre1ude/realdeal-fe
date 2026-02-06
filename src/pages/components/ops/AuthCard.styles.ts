import styled from 'styled-components'

export const Card = styled.section`
  width: 100%;
  max-width: 420px;
  padding: 32px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);
`

export const CardHeader = styled.div`
  margin-bottom: 24px;
`

export const CardTitle = styled.h2`
  margin: 0 0 8px;
  font-size: 24px;
  font-weight: 700;
  color: #111827;
`

export const CardSubtitle = styled.p`
  margin: 0;
  font-size: 14px;
  color: #6b7280;
`

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Page = styled.div`
  min-height: 100vh;
  width: 100%;
  background: #ffffff;
`

export const Frame = styled.div`
  width: 100%;
  max-width: 1440px;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`

export const Main = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 64px 24px;

  @media (min-width: 768px) {
    padding: 64px 32px;
  }

  @media (min-width: 1024px) {
    padding: 64px 48px;
  }
`

export const Card = styled.section`
  width: calc(100% - 40px);
  max-width: 480px;
  padding: 24px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;

  @media (min-width: 768px) {
    width: calc(100% - 64px);
    padding: 32px;
  }

  @media (min-width: 1024px) {
    width: calc(100% - 80px);
  }
`

export const CardHeader = styled.div`
  margin-bottom: 32px;
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #374151;
`

export const TextInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  background: #ffffff;
  font-size: 16px;
  color: #111827;
  outline: none;

  &::placeholder {
    color: #9ca3af;
    opacity: 1;
  }

  &:focus {
    outline: none;
    border-color: transparent;
    box-shadow: 0 0 0 2px #add94e;
  }
`

export const RowBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CheckboxContainer = styled.div<{ $alignStart?: boolean }>`
  display: flex;
  align-items: ${({ $alignStart }) => ($alignStart ? 'flex-start' : 'center')};
  color: #4b5563;
`

export const CheckboxInput = styled.input<{ $alignStart?: boolean }>`
  width: 16px;
  height: 16px;
  margin-top: ${({ $alignStart }) => ($alignStart ? '4px' : '0')};
  accent-color: #add94e;
  border-radius: 4px;
  border: 1px solid #d1d5db;
`

export const CheckboxLabel = styled.label`
  font-size: 14px;
  line-height: 1.4;
  margin-left: 8px;
`

export const HelperLink = styled.a`
  font-size: 14px;
  font-weight: 500;
  color: #add94e;

  &:hover {
    text-decoration: underline;
  }
`

export const PrimaryButton = styled.button`
  width: 100%;
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  background: #add94e;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #9bc846;
  }
`

export const BottomText = styled.p`
  margin: 32px 0 0;
  font-size: 14px;
  color: #6b7280;
  text-align: center;
`

export const InlineLink = styled(Link)`
  font-weight: 600;
  color: #add94e;

  &:hover {
    text-decoration: underline;
  }
`

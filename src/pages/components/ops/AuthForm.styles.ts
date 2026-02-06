import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
  gap: 0;
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

export const DividerRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
  margin: 24px 0;
`

export const DividerLine = styled.div`
  flex: 1;
  height: 1px;
  background: #e5e7eb;
`

export const DividerText = styled.span`
  font-size: 14px;
  color: #9ca3af;
  padding: 0 16px;
`

export const SocialButtonBase = styled.button<{ $withBottomMargin?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #fde68a;
  background: #fefce8;
  color: #374151;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease;
  margin-bottom: ${({ $withBottomMargin }) => ($withBottomMargin ? '12px' : '0')};

  &:hover {
    background: #fef3c7;
  }
`

export const SocialIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
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

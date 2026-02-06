import styled, { keyframes } from 'styled-components'

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const pulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(173, 217, 78, 0.4);
  }
  50% {
    box-shadow: 0 0 0 12px rgba(173, 217, 78, 0);
  }
`

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
`

export const Page = styled.div`
  min-height: 100vh;
  width: 100%;
  background: #f9fbfa;
  color: #1a1c1e;
  font-family: 'Pretendard', sans-serif;
  display: flex;
  justify-content: center;
`

export const Shell = styled.div`
  width: 100%;
  max-width: 1440px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const Main = styled.main`
  flex: 1;
  padding: 64px 24px 96px;

  @media (min-width: 768px) {
    padding: 72px 40px 96px;
  }

  @media (min-width: 1200px) {
    padding: 80px 56px 120px;
  }
`

export const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`

export const PageHeader = styled.header`
  text-align: center;
  margin-bottom: 56px;
  animation: ${fadeUp} 0.6s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`

export const Title = styled.h1`
  margin: 0 0 12px;
  font-size: 34px;
  font-weight: 800;
  letter-spacing: -0.02em;

  @media (max-width: 700px) {
    font-size: 28px;
  }
`

export const Subtitle = styled.p`
  margin: 0;
  font-size: 18px;
  color: #6b7280;
  line-height: 1.6;

  @media (max-width: 700px) {
    font-size: 15px;
  }
`

export const StepperSection = styled.section`
  margin-bottom: 56px;
  animation: ${fadeUp} 0.7s ease both;
  animation-delay: 120ms;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`

export const StepTrack = styled.div`
  position: relative;
  width: 100%;
  height: 8px;
  background: #f1f5f9;
  border-radius: 999px;
  overflow: hidden;
  margin-bottom: 24px;
`

export const StepFill = styled.div<{ $percent: number }>`
  position: absolute;
  inset: 0;
  width: ${({ $percent }) => `${$percent}%`};
  background: #add94e;
  transition: width 0.4s ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

export const StepGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  text-align: center;
  gap: 16px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`

export const StepItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`

export const StepCircle = styled.div<{ $status: 'inactive' | 'current' | 'done' }>`
  width: 40px;
  height: 40px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  background: ${({ $status }) => ($status === 'done' ? '#add94e' : '#ffffff')};
  color: ${({ $status }) =>
    $status === 'done' ? '#ffffff' : $status === 'current' ? '#4a6314' : '#9ca3af'};
  border: ${({ $status }) =>
    $status === 'done' ? 'none' : $status === 'current' ? '2px solid #add94e' : '2px solid #e5e7eb'};
  box-shadow: ${({ $status }) =>
    $status === 'done'
      ? '0 12px 20px rgba(173, 217, 78, 0.25)'
      : $status === 'current'
        ? '0 0 0 6px rgba(173, 217, 78, 0.12)'
        : 'none'};
  animation: ${({ $status }) => ($status === 'current' ? pulse : 'none')} 2s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`

export const StepLabel = styled.span<{ $status: 'inactive' | 'current' | 'done' }>`
  font-weight: ${({ $status }) => ($status === 'inactive' ? 500 : 700)};
  color: ${({ $status }) =>
    $status === 'done' ? '#6b7d2b' : $status === 'current' ? '#1f2937' : '#9ca3af'};
`

export const SectionGrid = styled.div`
  display: grid;
  gap: 32px;
`

export const SectionCard = styled.section<{ $delay?: number }>`
  background: #ffffff;
  border-radius: 24px;
  padding: 40px;
  border: 1px solid #f1f5f9;
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.04);
  animation: ${fadeUp} 0.6s ease both;
  animation-delay: ${({ $delay }) => ($delay ? `${$delay}ms` : '0ms')};
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 30px rgba(15, 23, 42, 0.08);
  }

  @media (max-width: 700px) {
    padding: 28px 20px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transition: none;
  }
`

export const SectionHeading = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 32px;
`

export const SectionBar = styled.span`
  width: 6px;
  height: 32px;
  border-radius: 999px;
  background: #add94e;
`

export const SectionTitle = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: 800;
`

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px 32px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const FieldLabel = styled.label`
  font-size: 14px;
  font-weight: 700;
  color: #6b7280;
  margin-left: 4px;
`

export const TextInput = styled.input`
  width: 100%;
  padding: 16px 20px;
  border-radius: 16px;
  border: 1px solid #eef2f7;
  background: #f8fafc;
  font-size: 15px;
  color: #1f2937;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;

  &::placeholder {
    color: #a1a1aa;
  }

  &:focus {
    outline: none;
    border-color: rgba(173, 217, 78, 0.8);
    box-shadow: 0 0 0 3px rgba(173, 217, 78, 0.2);
    background: #ffffff;
  }
`

export const ExperienceRow = styled.div`
  grid-column: span 2;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 900px) {
    grid-column: span 1;
  }
`

export const ExperienceButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`

export const ExperienceButton = styled.button<{ $active?: boolean }>`
  padding: 10px 18px;
  border-radius: 14px;
  border: ${({ $active }) => ($active ? '2px solid #add94e' : '1px solid #e5e7eb')};
  background: ${({ $active }) => ($active ? 'rgba(173, 217, 78, 0.12)' : '#ffffff')};
  color: ${({ $active }) => ($active ? '#4a6314' : '#6b7280')};
  font-weight: ${({ $active }) => ($active ? 700 : 600)};
  cursor: pointer;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: #add94e;
    transform: translateY(-1px);
    box-shadow: 0 8px 16px rgba(15, 23, 42, 0.08);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

export const UploadZone = styled.div`
  width: 100%;
  border: 2px solid #add94e;
  background: rgba(173, 217, 78, 0.08);
  border-radius: 28px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 20px 40px rgba(15, 23, 42, 0.1);
  }

  @media (max-width: 700px) {
    padding: 28px 20px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

export const FileInput = styled.input`
  display: none;
`

export const FileCard = styled.div`
  width: 100%;
  max-width: 720px;
  background: #ffffff;
  border-radius: 20px;
  border: 1px solid rgba(173, 217, 78, 0.2);
  box-shadow: 0 8px 16px rgba(15, 23, 42, 0.05);
  padding: 20px 24px;
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const FileIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: #fef2f2;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ef4444;
  font-size: 28px;
`

export const FileInfo = styled.div`
  flex: 1;
`

export const FileName = styled.h4`
  margin: 0 0 6px;
  font-size: 18px;
  font-weight: 700;
  color: #1f2937;
`

export const FileMeta = styled.p`
  margin: 0;
  font-size: 14px;
  color: #9ca3af;
`

export const FileActionButton = styled.button`
  padding: 10px 16px;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  color: #6b7280;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background: #f8fafc;
    box-shadow: 0 8px 16px rgba(15, 23, 42, 0.08);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

export const UploadActions = styled.div`
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`

export const AnalyzeButton = styled.button`
  width: 100%;
  height: 64px;
  border: none;
  border-radius: 20px;
  background: #add94e;
  color: #ffffff;
  font-size: 20px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  cursor: pointer;
  box-shadow: 0 18px 30px rgba(173, 217, 78, 0.35);
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;

  &:hover {
    background: #9bc846;
    transform: translateY(-2px);
    box-shadow: 0 22px 36px rgba(173, 217, 78, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 700px) {
    font-size: 18px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

export const UploadHint = styled.p`
  margin: 0;
  font-size: 13px;
  color: #9ca3af;
  text-align: center;
`

export const UploadEmpty = styled.div`
  width: 100%;
  border: 2px dashed #e5e7eb;
  border-radius: 28px;
  padding: 56px 32px;
  background: #f8fafc;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
  cursor: pointer;

  &:hover {
    background: #f1f5f9;
    border-color: #add94e;
    transform: translateY(-2px);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

export const UploadEmptyIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 999px;
  background: #ffffff;
  box-shadow: 0 8px 16px rgba(15, 23, 42, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: #add94e;
  animation: ${float} 2.6s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`

export const UploadEmptyTitle = styled.h3`
  margin: 12px 0 0;
  font-size: 20px;
  font-weight: 700;
`

export const UploadEmptyText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #9ca3af;
`

export const UploadEmptyButton = styled.button`
  margin-top: 16px;
  padding: 12px 24px;
  border-radius: 14px;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  font-weight: 700;
  color: #374151;
  cursor: pointer;
  transition: box-shadow 0.2s ease, transform 0.2s ease;

  &:hover {
    box-shadow: 0 10px 18px rgba(15, 23, 42, 0.1);
    transform: translateY(-1px);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`

export const Footer = styled.footer`
  width: 100%;
  padding: 48px 24px;
  background: #ffffff;
  border-top: 1px solid #f1f5f9;

  @media (min-width: 768px) {
    padding: 48px 40px;
  }
`

export const FooterInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 32px;
`

export const FooterBrand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const FooterBrandRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  filter: grayscale(1);
  opacity: 0.6;
`

export const FooterBrandIcon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 6px;
  background: #9ca3af;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 12px;
`

export const FooterBrandText = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #6b7280;
`

export const FooterCopy = styled.p`
  margin: 0;
  font-size: 13px;
  color: #9ca3af;
`

export const FooterLinks = styled.div`
  display: flex;
  gap: 48px;
  flex-wrap: wrap;
`

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const FooterHeading = styled.span`
  font-weight: 700;
  color: #6b7280;
`

export const FooterLink = styled.a`
  font-size: 14px;
  color: #9ca3af;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #add94e;
  }
`

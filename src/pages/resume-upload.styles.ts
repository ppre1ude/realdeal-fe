import styled from 'styled-components'

export const Page = styled.div`
  min-height: 100vh;
  background: #f8fafc;
  display: flex;
  justify-content: center;
  font-family: 'Pretendard', sans-serif;
  color: #1a1a1a;
`

export const Shell = styled.div`
  width: 100%;
  max-width: 1440px;
  min-height: 1024px;
  display: flex;
  flex-direction: column;
  background: #f8fafc;
`

export const Main = styled.main`
  flex: 1;
  padding: 48px 120px 64px;

  @media (max-width: 1100px) {
    padding: 40px 64px 56px;
  }

  @media (max-width: 700px) {
    padding: 32px 20px 48px;
  }
`

export const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
`

export const PageHeader = styled.div`
  margin-bottom: 40px;
`

export const Title = styled.h1`
  margin: 0 0 12px;
  font-size: 32px;
  font-weight: 800;
  color: #1a1a1a;
`

export const Subtitle = styled.p`
  margin: 0;
  font-size: 18px;
  color: #64748b;
  line-height: 1.6;
`

export const Stepper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 48px;
  flex-wrap: wrap;
`

export const Step = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const StepCircle = styled.div<{ $active?: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  background: ${({ $active }) => ($active ? '#add94e' : '#e2e8f0')};
  color: ${({ $active }) => ($active ? '#ffffff' : '#94a3b8')};
`

export const StepLabel = styled.span<{ $active?: boolean }>`
  font-weight: ${({ $active }) => ($active ? 700 : 500)};
  color: ${({ $active }) => ($active ? '#1a1a1a' : '#94a3b8')};
`

export const StepDivider = styled.div`
  width: 48px;
  height: 2px;
  background: #e2e8f0;
`

export const SectionCard = styled.section`
  background: #ffffff;
  border-radius: 24px;
  padding: 40px;
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.04);
  border: 1px solid #f1f5f9;
  margin-bottom: 32px;

  @media (max-width: 700px) {
    padding: 28px 20px;
  }
`

export const SectionTitle = styled.h2`
  margin: 0 0 32px;
  font-size: 20px;
  font-weight: 800;
  color: #1a1a1a;
  display: flex;
  align-items: center;
  gap: 10px;
`

export const SectionTitleIcon = styled.span`
  color: #add94e;
  font-size: 18px;
`

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 32px;

  @media (max-width: 820px) {
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
  font-weight: 600;
  color: #475569;
  margin-left: 4px;
`

const InputBase = styled.input`
  width: 100%;
  height: 56px;
  padding: 0 20px;
  border-radius: 16px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  font-size: 15px;
  color: #1f2937;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    outline: none;
    border-color: #add94e;
    box-shadow: 0 0 0 3px rgba(173, 217, 78, 0.2);
  }
`

export const TextInput = styled(InputBase)`
  &::placeholder {
    color: #94a3b8;
  }
`

export const SelectInput = styled.select`
  width: 100%;
  height: 56px;
  padding: 0 20px;
  border-radius: 16px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  font-size: 15px;
  color: #1f2937;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  appearance: none;

  &:focus {
    outline: none;
    border-color: #add94e;
    box-shadow: 0 0 0 3px rgba(173, 217, 78, 0.2);
  }
`

export const UploadDrop = styled.div`
  position: relative;
  width: 100%;
  height: 240px;
  border: 2px dashed #e2e8f0;
  border-radius: 24px;
  background: #f8fafc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #add94e;
    background: rgba(173, 217, 78, 0.05);
  }
`

export const UploadIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 999px;
  background: #ffffff;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: #add94e;
  margin-bottom: 16px;
  transition: transform 0.2s ease;

  ${UploadDrop}:hover & {
    transform: scale(1.05);
  }
`

export const UploadTitle = styled.p`
  margin: 0 0 6px;
  font-size: 18px;
  font-weight: 700;
  color: #1a1a1a;
`

export const UploadSubtitle = styled.p`
  margin: 0;
  font-size: 14px;
  color: #94a3b8;
`

export const FileInput = styled.input`
  position: absolute;
  inset: 0;
  opacity: 0;
  cursor: pointer;
`

export const FilePreview = styled.div`
  margin-top: 32px;
  padding: 24px;
  background: #f1f8e3;
  border-radius: 24px;
  border: 1px solid rgba(173, 217, 78, 0.3);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const FilePreviewLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const FilePreviewThumb = styled.div`
  width: 100px;
  height: 130px;
  border-radius: 12px;
  background: #ffffff;
  border: 1px solid #f1f5f9;
  box-shadow: 0 8px 16px rgba(15, 23, 42, 0.08);
  position: relative;
  overflow: hidden;
`

export const FilePreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
`

export const FilePreviewOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15, 23, 42, 0.05);
  font-size: 28px;
  color: #ef4444;
`

export const FilePreviewInfo = styled.div``

export const FileNameRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 8px;
`

export const FileName = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #1a1a1a;
`

export const FileStatusIcon = styled.span`
  color: #add94e;
`

export const FileMeta = styled.p`
  margin: 0 0 12px;
  font-size: 13px;
  color: #64748b;
`

export const FileActions = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`

export const GhostButton = styled.button`
  padding: 8px 16px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 700;
  color: #475569;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #f8fafc;
  }
`

export const FilePreviewRight = styled.div`
  text-align: right;

  @media (max-width: 900px) {
    width: 100%;
    text-align: left;
  }
`

export const FileQuestion = styled.p`
  margin: 0 0 12px;
  font-size: 14px;
  color: #475569;
`

export const PrimaryButton = styled.button`
  height: 56px;
  padding: 0 32px;
  border-radius: 16px;
  border: none;
  background: #add94e;
  color: #1a1a1a;
  font-weight: 800;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 12px 20px rgba(173, 217, 78, 0.2);
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: #9cc53d;
    transform: translateY(-1px);
  }
`

export const FooterNote = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #94a3b8;
  font-size: 14px;
  text-align: center;
`

export const FooterNoteIcon = styled.span`
  font-size: 16px;
`

export const FooterNoteText = styled.p`
  margin: 0;
`

export const Footer = styled.footer`
  margin-top: auto;
  padding: 48px 120px;
  background: #ffffff;
  border-top: 1px solid #f1f5f9;

  @media (max-width: 1100px) {
    padding: 40px 64px;
  }

  @media (max-width: 700px) {
    padding: 32px 20px;
  }
`

export const FooterInner = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 48px;
  flex-wrap: wrap;
`

export const FooterBrand = styled.div`
  max-width: 420px;
`

export const FooterBrandTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 20px;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 16px;
`

export const FooterBrandIcon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 6px;
  background: #add94e;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 12px;
`

export const FooterDescription = styled.p`
  margin: 0;
  font-size: 14px;
  color: #94a3b8;
  line-height: 1.6;
`

export const FooterLinks = styled.div`
  display: flex;
  gap: 80px;
  flex-wrap: wrap;
`

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const FooterHeading = styled.h4`
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  color: #1a1a1a;
`

export const FooterList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  color: #64748b;
`

export const FooterListItem = styled.li``

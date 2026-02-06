import { CandidateProfileContainer, CandidateProfileLeft, CandidateProfileRight, StatusBadge, StatusDate, CandidateName, CandidateTitle, CandidateInfo, ActionButton } from './CandidateProfile.styles'

const CandidateProfile = () => {
  return (
    <CandidateProfileContainer>
      <CandidateProfileLeft>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
          <StatusBadge>분석 완료</StatusBadge>
          <StatusDate>분석 일시: 2025.05.14</StatusDate>
        </div>
        <CandidateName>
          지원자 홍길동 <CandidateTitle>Senior Frontend Developer</CandidateTitle>
        </CandidateName>
        <CandidateInfo>총 경력 6년 4개월 | 주요 스택: React, TypeScript, Next.js</CandidateInfo>
      </CandidateProfileLeft>
      <CandidateProfileRight>
        <ActionButton $variant="secondary">PDF 다운로드</ActionButton>
        <ActionButton $variant="primary">채용 확정/공유</ActionButton>
      </CandidateProfileRight>
    </CandidateProfileContainer>
  )
}

export default CandidateProfile

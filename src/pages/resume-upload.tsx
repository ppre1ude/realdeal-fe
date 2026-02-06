import { useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createResume, uploadResume, analyzeResume } from '../services/resume'
import {
  AnalyzeButton,
  Content,
  ExperienceButton,
  ExperienceButtons,
  ExperienceRow,
  FieldGroup,
  FieldGroupWide,
  FieldHint,
  FieldLabel,
  FileActionButton,
  FileCard,
  FileIcon,
  FileInfo,
  FileInput,
  FileMeta,
  FileName,
  FormGrid,
  Main,
  Page,
  PageHeader,
  SectionBar,
  SectionCard,
  SectionGrid,
  SectionHeading,
  SectionTitle,
  Shell,
  StepCircle,
  StepFill,
  StepGrid,
  StepItem,
  StepLabel,
  StepTrack,
  StepperSection,
  Subtitle,
  TextArea,
  TextInput,
  Title,
  UploadActions,
  UploadEmpty,
  UploadEmptyButton,
  UploadEmptyIcon,
  UploadEmptyText,
  UploadEmptyTitle,
  UploadHint,
  UploadZone,
} from './resume-upload.styles'

const EXPERIENCE_OPTIONS = ['신입', '1-3년', '3-5년', '5-10년', '10년 이상'] as const

const formatFileSize = (bytes: number) => {
  if (bytes < 1024) return `${bytes} B`
  const kb = bytes / 1024
  if (kb < 1024) return `${kb.toFixed(1)} KB`
  return `${(kb / 1024).toFixed(1)} MB`
}

const isPdfFile = (file: File) => {
  if (file.type === 'application/pdf') return true
  return file.name.toLowerCase().endsWith('.pdf')
}

const ResumeUploadPage = () => {
  const navigate = useNavigate()
  const [fullName, setFullName] = useState('')
  const [desiredRole, setDesiredRole] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [goal, setGoal] = useState('')
  const [experience, setExperience] = useState<string>('')
  const [file, setFile] = useState<File | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0]
    if (!selectedFile) return
    if (!isPdfFile(selectedFile)) {
      event.target.value = ''
      return
    }
    setFile(selectedFile)
  }

  const openFilePicker = () => {
    fileInputRef.current?.click()
  }

  const handleAnalyze = async () => {
    console.log('🔵 handleAnalyze 함수 호출됨')
    console.log('📋 입력 데이터:', {
      fullName,
      desiredRole,
      email,
      phone,
      goal,
      experience,
    })
    console.log('📄 파일:', file ? { name: file.name, size: file.size } : null)

    if (!isBasicComplete || !file) {
      setError('모든 필수 항목을 입력하고 이력서를 업로드해주세요.')
      return
    }

    setError(null)
    setIsLoading(true)

    try {
      // 1. 인적사항 정보를 이력서로 생성
      const personalInfoContent = JSON.stringify({
        fullName,
        desiredRole,
        email,
        phone,
        goal,
        experience,
      })

      console.log('📤 1. 인적사항 전송 시작:', {
        title: desiredRole || '이력서',
        content: personalInfoContent,
      })

      await createResume({
        title: desiredRole || '이력서',
        content: personalInfoContent,
      })

      console.log('✅ 1. 인적사항 전송 완료')

      // 2. 파일 업로드
      console.log('📤 2. 파일 업로드 시작:', file.name, formatFileSize(file.size))
      const uploadResponse = await uploadResume(file)
      console.log('✅ 2. 파일 업로드 완료:', uploadResponse)

      // 3. 이력서 분석 시작 (업로드된 이력서 ID 사용)
      console.log('📤 3. 분석 시작:', uploadResponse.id)
      const analyzeResponse = await analyzeResume(uploadResponse.id)
      console.log('✅ 3. 분석 완료:', analyzeResponse)

      // 4. 분석 결과 페이지로 이동
      console.log('🔄 페이지 이동:', `/resume-report?id=${analyzeResponse.id}`)
      navigate(`/resume-report?id=${analyzeResponse.id}`)
    } catch (err) {
      console.error('❌ 에러 발생:', err)
      setError(
        err instanceof Error
          ? err.message
          : '이력서 업로드에 실패했습니다. 다시 시도해주세요.'
      )
    } finally {
      setIsLoading(false)
    }
  }

  const isBasicComplete =
    fullName.trim() &&
    desiredRole.trim() &&
    email.trim() &&
    phone.trim() &&
    experience.trim()

  const progressPercent = useMemo(() => {
    if (!isBasicComplete) return 0
    if (file) return 66
    return 33
  }, [isBasicComplete, file])

  const step1Status: 'inactive' | 'current' | 'done' = isBasicComplete ? 'done' : 'current'
  const step2Status: 'inactive' | 'current' | 'done' =
    !isBasicComplete ? 'inactive' : file ? 'done' : 'current'
  const step3Status: 'inactive' | 'current' | 'done' = file ? 'current' : 'inactive'

  return (
    <Page>
      <Shell>
        <Main>
          <Content>
            <PageHeader>
              <Title>커리어 분석을 위한 프로필 등록</Title>
              <Subtitle>
                AI가 당신의 이력서를 정밀 분석하여 최적의 커리어 경로를 제안합니다.
              </Subtitle>
            </PageHeader>

            <StepperSection>
              <StepTrack>
                <StepFill $percent={progressPercent} />
              </StepTrack>
              <StepGrid>
                <StepItem>
                  <StepCircle $status={step1Status}>1</StepCircle>
                  <StepLabel $status={step1Status}>기본 정보 입력</StepLabel>
                </StepItem>
                <StepItem>
                  <StepCircle $status={step2Status}>2</StepCircle>
                  <StepLabel $status={step2Status}>이력서 업로드</StepLabel>
                </StepItem>
                <StepItem>
                  <StepCircle $status={step3Status}>3</StepCircle>
                  <StepLabel $status={step3Status}>AI 정밀 분석</StepLabel>
                </StepItem>
              </StepGrid>
            </StepperSection>

            <SectionGrid>
              <SectionCard $delay={120}>
                <SectionHeading>
                  <SectionBar />
                  <SectionTitle>기본 인적사항</SectionTitle>
                </SectionHeading>

                <FormGrid>
                  <FieldGroup>
                    <FieldLabel htmlFor="full-name">성함</FieldLabel>
                    <TextInput
                      id="full-name"
                      type="text"
                      value={fullName}
                      placeholder="성함을 입력해주세요"
                      onChange={(event) => setFullName(event.target.value)}
                    />
                  </FieldGroup>
                  <FieldGroup>
                    <FieldLabel htmlFor="desired-role">희망 직무</FieldLabel>
                    <TextInput
                      id="desired-role"
                      type="text"
                      value={desiredRole}
                      placeholder="예) 프로덕트 디자이너"
                      onChange={(event) => setDesiredRole(event.target.value)}
                    />
                  </FieldGroup>
                  <FieldGroup>
                    <FieldLabel htmlFor="email">이메일 주소</FieldLabel>
                    <TextInput
                      id="email"
                      type="email"
                      value={email}
                      placeholder="example@email.com"
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </FieldGroup>
                  <FieldGroup>
                    <FieldLabel htmlFor="phone">연락처</FieldLabel>
                    <TextInput
                      id="phone"
                      type="tel"
                      value={phone}
                      placeholder="010-0000-0000"
                      onChange={(event) => setPhone(event.target.value)}
                    />
                  </FieldGroup>
                  <FieldGroupWide>
                    <FieldLabel htmlFor="goal">3년 안 목표</FieldLabel>
                    <FieldHint>당신의 3년 안 목표를 작성해주세요</FieldHint>
                    <TextArea
                      id="goal"
                      value={goal}
                      placeholder="예) 3년 안에 데이터 분석 역량을 강화해 프로덕트 데이터 팀에 합류하고 싶습니다."
                      onChange={(event) => setGoal(event.target.value)}
                    />
                  </FieldGroupWide>
                  <ExperienceRow>
                    <FieldLabel>경력 사항</FieldLabel>
                    <ExperienceButtons>
                      {EXPERIENCE_OPTIONS.map((option) => (
                        <ExperienceButton
                          key={option}
                          type="button"
                          $active={experience === option}
                          onClick={() => setExperience(option)}
                        >
                          {option}
                        </ExperienceButton>
                      ))}
                    </ExperienceButtons>
                  </ExperienceRow>
                </FormGrid>
              </SectionCard>

              <SectionCard $delay={220}>
                <SectionHeading>
                  <SectionBar />
                  <SectionTitle>이력서 업로드</SectionTitle>
                </SectionHeading>

                <FileInput
                  ref={fileInputRef}
                  type="file"
                  accept="application/pdf"
                  onChange={handleFileChange}
                />

                {file ? (
                  <UploadZone>
                    <FileCard>
                      <FileIcon>
                        <i className="fa-solid fa-file-pdf" aria-hidden="true" />
                      </FileIcon>
                      <FileInfo>
                        <FileName>{file.name}</FileName>
                        <FileMeta>{formatFileSize(file.size)} · 업로드 완료</FileMeta>
                      </FileInfo>
                      <FileActionButton type="button" onClick={openFilePicker}>
                        파일 변경
                      </FileActionButton>
                    </FileCard>
                    <UploadActions>
                      <AnalyzeButton
                        type="button"
                        onClick={handleAnalyze}
                        disabled={isLoading || !isBasicComplete || !file}
                      >
                        <i className="fa-solid fa-wand-magic-sparkles" aria-hidden="true" />
                        {isLoading ? '전송 중...' : 'AI 분석 시작하기'}
                      </AnalyzeButton>
                      <UploadHint>분석은 약 30초~1분 정도 소요됩니다.</UploadHint>
                      {error && (
                        <div style={{ color: '#ef4444', fontSize: '14px', marginTop: '8px' }}>
                          {error}
                        </div>
                      )}
                    </UploadActions>
                  </UploadZone>
                ) : (
                  <UploadEmpty onClick={openFilePicker}>
                    <UploadEmptyIcon>
                      <i className="fa-solid fa-cloud-arrow-up" aria-hidden="true" />
                    </UploadEmptyIcon>
                    <UploadEmptyTitle>이력서를 끌어다 놓으세요</UploadEmptyTitle>
                    <UploadEmptyText>
                      PDF 파일 형식만 지원하며 최대 10MB까지 가능합니다.
                    </UploadEmptyText>
                    <UploadEmptyButton type="button">PC에서 파일 찾기</UploadEmptyButton>
                  </UploadEmpty>
                )}
              </SectionCard>
            </SectionGrid>
          </Content>
        </Main>

      </Shell>
    </Page>
  )
}

export default ResumeUploadPage

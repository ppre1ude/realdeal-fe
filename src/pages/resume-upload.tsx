import {
  Content,
  FileActions,
  FileInput,
  FileMeta,
  FileName,
  FileNameRow,
  FilePreview,
  FilePreviewImage,
  FilePreviewInfo,
  FilePreviewLeft,
  FilePreviewOverlay,
  FilePreviewRight,
  FilePreviewThumb,
  FileQuestion,
  FileStatusIcon,
  Footer,
  FooterBrand,
  FooterBrandIcon,
  FooterBrandTitle,
  FooterColumn,
  FooterDescription,
  FooterHeading,
  FooterInner,
  FooterLinks,
  FooterList,
  FooterListItem,
  FooterNote,
  FooterNoteIcon,
  FooterNoteText,
  FormGrid,
  GhostButton,
  Main,
  Page,
  PageHeader,
  PrimaryButton,
  SectionCard,
  SectionTitle,
  SectionTitleIcon,
  SelectInput,
  Shell,
  Step,
  StepCircle,
  StepDivider,
  StepLabel,
  Stepper,
  Subtitle,
  TextInput,
  Title,
  UploadDrop,
  UploadIcon,
  UploadSubtitle,
  UploadTitle,
  FieldGroup,
  FieldLabel,
} from './resume-upload.styles'

const ResumeUploadPage = () => {
  return (
    <Page>
      <Shell>
        <Main>
          <Content>
            <PageHeader>
              <Title>프로필 등록 및 이력서 업로드</Title>
              <Subtitle>
                AI가 당신의 이력서를 정밀 분석하여 최적의 커리어 경로를 제안합니다.
              </Subtitle>
            </PageHeader>

            <Stepper>
              <Step>
                <StepCircle $active>1</StepCircle>
                <StepLabel $active>기본 정보</StepLabel>
              </Step>
              <StepDivider />
              <Step>
                <StepCircle $active>2</StepCircle>
                <StepLabel $active>파일 업로드</StepLabel>
              </Step>
              <StepDivider />
              <Step>
                <StepCircle>3</StepCircle>
                <StepLabel>AI 분석</StepLabel>
              </Step>
            </Stepper>

            <SectionCard>
              <SectionTitle>
                <SectionTitleIcon>
                  <i className="fa-solid fa-user-pen" aria-hidden="true" />
                </SectionTitleIcon>
                기본 인적사항
              </SectionTitle>
              <FormGrid>
                <FieldGroup>
                  <FieldLabel htmlFor="full-name">성함</FieldLabel>
                  <TextInput id="full-name" type="text" placeholder="성함을 입력해주세요." />
                </FieldGroup>
                <FieldGroup>
                  <FieldLabel htmlFor="desired-role">희망 직무</FieldLabel>
                  <SelectInput id="desired-role" defaultValue="">
                    <option value="" disabled>
                      희망 직무 선택
                    </option>
                    <option value="uiux">UI/UX 디자이너</option>
                    <option value="frontend">프론트엔드 개발자</option>
                    <option value="pm">프로덕트 매니저</option>
                    <option value="data">데이터 분석가</option>
                  </SelectInput>
                </FieldGroup>
                <FieldGroup>
                  <FieldLabel htmlFor="email">이메일 주소</FieldLabel>
                  <TextInput id="email" type="email" placeholder="example@email.com" />
                </FieldGroup>
                <FieldGroup>
                  <FieldLabel htmlFor="phone">연락처</FieldLabel>
                  <TextInput id="phone" type="tel" placeholder="010-0000-0000" />
                </FieldGroup>
              </FormGrid>
            </SectionCard>

            <SectionCard>
              <SectionTitle>
                <SectionTitleIcon>
                  <i className="fa-solid fa-file-arrow-up" aria-hidden="true" />
                </SectionTitleIcon>
                이력서 업로드
              </SectionTitle>

              <UploadDrop>
                <UploadIcon>
                  <i className="fa-solid fa-cloud-arrow-up" aria-hidden="true" />
                </UploadIcon>
                <UploadTitle>PDF 파일을 끌어다 놓으세요</UploadTitle>
                <UploadSubtitle>또는 클릭해서 파일 선택 (최대 10MB)</UploadSubtitle>
                <FileInput type="file" aria-label="이력서 파일 업로드" />
              </UploadDrop>

              <FilePreview>
                <FilePreviewLeft>
                  <FilePreviewThumb>
                    <FilePreviewImage
                      src="https://gmcnqdpighpxhzpesqwf.supabase.co/storage/v1/object/public/generated-images/image-717bb488-0b64-43c9-8802-2380c489a7ed.jpg"
                      alt="PDF 이력서 미리보기 썸네일"
                    />
                    <FilePreviewOverlay>
                      <i className="fa-solid fa-file-pdf" aria-hidden="true" />
                    </FilePreviewOverlay>
                  </FilePreviewThumb>
                  <FilePreviewInfo>
                    <FileNameRow>
                      <FileName>2025_이력서_UIUX_디자이너_김민준.pdf</FileName>
                      <FileStatusIcon>
                        <i className="fa-solid fa-circle-check" aria-hidden="true" />
                      </FileStatusIcon>
                    </FileNameRow>
                    <FileMeta>업로드 완료 · 2.4 MB · 2025.05</FileMeta>
                    <FileActions>
                      <GhostButton type="button">파일 변경</GhostButton>
                      <GhostButton type="button">미리보기</GhostButton>
                    </FileActions>
                  </FilePreviewInfo>
                </FilePreviewLeft>
                <FilePreviewRight>
                  <FileQuestion>정보가 모두 일치하나요?</FileQuestion>
                  <PrimaryButton type="button">
                    분석 시작하기
                    <i className="fa-solid fa-wand-magic-sparkles" aria-hidden="true" />
                  </PrimaryButton>
                </FilePreviewRight>
              </FilePreview>
            </SectionCard>

            <FooterNote>
              <FooterNoteIcon>
                <i className="fa-solid fa-shield-halved" aria-hidden="true" />
              </FooterNoteIcon>
              <FooterNoteText>
                업로드된 모든 정보는 안전하게 보호되며, 분석 목적으로만 사용됩니다.
              </FooterNoteText>
            </FooterNote>
          </Content>
        </Main>

        <Footer>
          <FooterInner>
            <FooterBrand>
              <FooterBrandTitle>
                <FooterBrandIcon>
                  <i className="fa-solid fa-bolt" aria-hidden="true" />
                </FooterBrandIcon>
                Vinsign Talent
              </FooterBrandTitle>
              <FooterDescription>
                우리의 AI 기술을 통해 구직자와 기업이 정확하게 연결됩니다.
                <br />
                당신의 다음 커리어 여정을 더 빠르게 시작하세요.
              </FooterDescription>
            </FooterBrand>
            <FooterLinks>
              <FooterColumn>
                <FooterHeading>서비스</FooterHeading>
                <FooterList>
                  <FooterListItem>이력서 분석</FooterListItem>
                  <FooterListItem>AI 면접 대비</FooterListItem>
                  <FooterListItem>기업 매칭</FooterListItem>
                </FooterList>
              </FooterColumn>
              <FooterColumn>
                <FooterHeading>고객지원</FooterHeading>
                <FooterList>
                  <FooterListItem>공지사항</FooterListItem>
                  <FooterListItem>자주 묻는 질문</FooterListItem>
                  <FooterListItem>문의하기</FooterListItem>
                </FooterList>
              </FooterColumn>
            </FooterLinks>
          </FooterInner>
        </Footer>
      </Shell>
    </Page>
  )
}

export default ResumeUploadPage

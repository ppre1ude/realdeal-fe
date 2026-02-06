import {
<<<<<<< HEAD
=======
  AnalyzerPanel,
>>>>>>> origin/feature/ju
  AppShell,
  CardButton,
  CompanyCard,
  CompanyGrid,
  CompanyLogo,
  CompanyLogoImage,
  CompanyName,
  CompanyRole,
  DarkActionButton,
<<<<<<< HEAD
  Fab,
  FabButton,
=======
  Dot,
  Fab,
  FabButton,
  FeatureCard,
  FeatureDescription,
  FeatureGrid,
  FeatureIcon,
  FeatureTitle,
>>>>>>> origin/feature/ju
  HeroActions,
  HeroBadge,
  HeroContent,
  HeroDescription,
  HeroHighlight,
  HeroImage,
  HeroSection,
  HeroTitle,
  HeroVisual,
  HomeGlobalStyle,
<<<<<<< HEAD
=======
  LightActionButton,
>>>>>>> origin/feature/ju
  MatchBar,
  MatchBox,
  MatchFill,
  MatchHeader,
  MatchValue,
  MatchingHeader,
  MatchingSubtitle,
  MatchingTitle,
<<<<<<< HEAD
  Page,
  ProcessSection,
=======
  OriginalText,
  Page,
  PanelBlock,
  PanelBlockTitle,
  PanelBody,
  PanelCode,
  PanelDot,
  PanelDots,
  PanelHeader,
  PanelHeaderMeta,
  PanelHeaderRow,
  PanelHeaderTitle,
  PanelStack,
  PanelSpacer,
  ResumeIntro,
  ResumeLayout,
  ResumeText,
  ResumeTitle,
>>>>>>> origin/feature/ju
  Section,
  SectionHeader,
  SectionSubtitle,
  SectionTitle,
<<<<<<< HEAD
  StepBlock,
  StepContent,
  StepDescription,
  StepFeatureCard,
  StepFeatureCardDescription,
  StepFeatureCardIcon,
  StepFeatureCardTitle,
  StepFeatureGrid,
  StepFeatureIcon,
  StepFeatureItem,
  StepFeatureList,
  StepFeatureVerticalContent,
  StepFeatureVerticalDescription,
  StepFeatureVerticalIcon,
  StepFeatureVerticalItem,
  StepFeatureVerticalList,
  StepFeatureVerticalTitle,
  StepIcon,
  StepImage,
  StepImageContent,
  StepImageWrapper,
  StepNumber,
  StepTitle,
  Tag,
  TagRow,
  ViewAllButton,
} from './home.styles'

=======
  StatusBadge,
  SuggestionBadge,
  SuggestionBox,
  Tag,
  TagRow,
  UploadDropzone,
  UploadIcon,
  UploadSubtitle,
  UploadTitle,
  ViewAllButton,
  KeywordHint,
} from './home.styles'

type FeatureItem = {
  title: string
  description: string
  iconClass: string
}

>>>>>>> origin/feature/ju
type CompanyItem = {
  name: string
  role: string
  category: string
  status: string
  match: number
  imageUrl: string
}

<<<<<<< HEAD
=======
const features: FeatureItem[] = [
  {
    title: '01. 이력서 업로드',
    description:
      '작성해둔 워드나 PDF 이력서를 그대로 업로드하세요. AI가 즉시 텍스트를 추출하고 분석합니다.',
    iconClass: 'fa-solid fa-cloud-arrow-up',
  },
  {
    title: '02. 인재상 맞춤 첨삭',
    description:
      '지원하려는 기업의 최근 인재상과 핵심 키워드를 반영하여 이력서의 문항별 내용을 최적화합니다.',
    iconClass: 'fa-solid fa-wand-magic-sparkles',
  },
  {
    title: '03. 최적 기업 매칭',
    description:
      '첨삭된 이력서를 바탕으로 당신의 강점이 가장 잘 발휘될 수 있는 기업들을 정교하게 추천해드립니다.',
    iconClass: 'fa-solid fa-handshake-angle',
  },
]

>>>>>>> origin/feature/ju
const companies: CompanyItem[] = [
  {
    name: '카카오뱅크',
    role: '금융 서비스 기획자',
    category: 'IT/플랫폼',
    status: '채용중',
    match: 98,
    imageUrl:
      'https://gmcnqdpighpxhzpesqwf.supabase.co/storage/v1/object/public/generated-images/image-5078afb4-a284-4be8-84bf-bb71769e586c.jpg',
  },
  {
    name: '무신사',
    role: '브랜드 마케팅',
    category: '커머스',
    status: '채용중',
    match: 92,
    imageUrl:
      'https://gmcnqdpighpxhzpesqwf.supabase.co/storage/v1/object/public/generated-images/image-80c4501c-da8d-4358-81ff-12490386913f.jpg',
  },
  {
    name: '토스',
    role: '데이터 분석가',
    category: '핀테크',
    status: '채용중',
    match: 89,
    imageUrl:
      'https://gmcnqdpighpxhzpesqwf.supabase.co/storage/v1/object/public/generated-images/image-343acdd6-16a2-433d-8a47-c269da421b81.jpg',
  },
  {
    name: '야놀자',
    role: 'UX 디자이너',
    category: '여행/레저',
    status: '채용중',
    match: 85,
    imageUrl:
      'https://gmcnqdpighpxhzpesqwf.supabase.co/storage/v1/object/public/generated-images/image-5741696f-73cd-4913-9637-4d922c887965.jpg',
  },
]

const HomePage = () => (
  <>
    <HomeGlobalStyle />
    <Page>
      <AppShell>
        <HeroSection>
          <HeroContent>
            <HeroBadge>신입 취준생 필수 플랫폼</HeroBadge>
            <HeroTitle>
<<<<<<< HEAD
              당신의 이력서로
              <br />
              <HeroHighlight>합격 보장 로드맵</HeroHighlight>을
              <br />
              만들어 보세요.
            </HeroTitle>
            <HeroDescription>
              AI가 현재 능력과 목표에 맞게
              <br />
              당신의 미래를 컨설팅해드릴게요.
=======
              당신의 이력서,
              <br />
              <HeroHighlight>기업의 인재상</HeroHighlight>에
              <br />
              맞게 재탄생합니다.
            </HeroTitle>
            <HeroDescription>
              단순한 오타 교정이 아닙니다. AI가 기업의 핵심 가치를 분석하여
              <br />
              당신의 경험을 가장 매력적인 스토리로 바꿔드립니다.
>>>>>>> origin/feature/ju
            </HeroDescription>
            <HeroActions>
              <DarkActionButton type="button">
                <i className="fa-solid fa-file-arrow-up" aria-hidden="true" />
<<<<<<< HEAD
                이력서 업로드하러 가기
              </DarkActionButton>
=======
                이력서 업로드하고 시작하기
              </DarkActionButton>
              <LightActionButton type="button">서비스 둘러보기</LightActionButton>
>>>>>>> origin/feature/ju
            </HeroActions>
          </HeroContent>
          <HeroVisual>
            <HeroImage
              src="https://gmcnqdpighpxhzpesqwf.supabase.co/storage/v1/object/public/generated-images/image-f3ca5f6c-6b3b-4791-bb92-a16c1ebf9d8a.jpg"
              alt="AI가 이력서를 분석하는 모습을 표현한 3D 일러스트"
            />
          </HeroVisual>
        </HeroSection>

<<<<<<< HEAD
        <ProcessSection>
=======
        <Section>
>>>>>>> origin/feature/ju
          <SectionHeader>
            <SectionTitle>합격까지 이어지는 3단계 프로세스</SectionTitle>
            <SectionSubtitle>복잡한 취업 준비, 이제 AI와 함께 효율적으로 해결하세요.</SectionSubtitle>
          </SectionHeader>
<<<<<<< HEAD

          <StepBlock $bgColor="#f9fafb">
            <StepContent>
              <StepIcon>
                <i className="fa-solid fa-cloud-arrow-up" aria-hidden="true" />
              </StepIcon>
              <StepNumber>Step 01</StepNumber>
              <StepTitle>
                업로드한 이력서,
                <br />
                한 화면에 요약
              </StepTitle>
              <StepDescription>
                작성해둔 이력서(.PDF)를 Drag & Drop하세요. AI가 핵심 데이터를 추출하여
                이력서를 구조화된 데이터로 변환해 출력해요.
              </StepDescription>
              <StepFeatureList>
                <StepFeatureItem>
                  <StepFeatureIcon className="fa-solid fa-check" />
                  사용자의 경력 및 프로젝트 내역을 자동으로 카테고리화해요.
                </StepFeatureItem>
                <StepFeatureItem>
                  <StepFeatureIcon className="fa-solid fa-check" />
                  PDF에서 텍스트를 추출하여 이력서 속 핵심 내용을 이해 및 분석해요.
                </StepFeatureItem>
                <StepFeatureItem>
                  <StepFeatureIcon className="fa-solid fa-check" />
                  유저가 업로드한 PDF는 분석용으로만 사용하고 절대 따로 저장하지 않아요.
                </StepFeatureItem>
              </StepFeatureList>
            </StepContent>
            <StepImage>
              <StepImageWrapper>
                <StepImageContent
                  src="https://gmcnqdpighpxhzpesqwf.supabase.co/storage/v1/object/public/generated-images/image-b7300d00-8485-488c-908f-d151e1163f76.jpg"
                  alt="A sleek interface showing a file upload progress bar with high-tech data scanning animations and green glowing accents."
                />
              </StepImageWrapper>
            </StepImage>
          </StepBlock>

          <StepBlock $reverse $bgColor="#ffffff">
            <StepContent>
              <StepIcon>
                <i className="fa-solid fa-wand-magic-sparkles" aria-hidden="true" />
              </StepIcon>
              <StepNumber>Step 02</StepNumber>
              <StepTitle>
                제출한 이력서에 기반한
                <br />
                로드맵 캘린더 제작
              </StepTitle>
              <StepDescription>
              목표하는 기업에 닿기 위해 어떤 노력을 해야 할까요?
              내가 하고 있는 공부가 정말 옳은 방향일까요? AI가 알려드려요.
              </StepDescription>
              <StepFeatureGrid>
                <StepFeatureCard>
                  <StepFeatureCardIcon>
                    <i className="fa-solid fa-bullseye" />
                  </StepFeatureCardIcon>
                  <StepFeatureCardTitle>구간/일정별 Task 생성</StepFeatureCardTitle>
                  <StepFeatureCardDescription>역량 상승을 위한 맞춤형 로드맵 제시</StepFeatureCardDescription>
                </StepFeatureCard>
                <StepFeatureCard>
                  <StepFeatureCardIcon>
                    <i className="fa-solid fa-pen-nib" />
                  </StepFeatureCardIcon>
                  <StepFeatureCardTitle>1234</StepFeatureCardTitle>
                  <StepFeatureCardDescription>5678</StepFeatureCardDescription>
                </StepFeatureCard>
              </StepFeatureGrid>
            </StepContent>
            <StepImage>
              <StepImageWrapper>
                <StepImageContent
                  src="https://gmcnqdpighpxhzpesqwf.supabase.co/storage/v1/object/public/generated-images/image-8289f933-d4fd-4249-bd51-bf474b7a5152.jpg"
                  alt="Close up of a digital document where text is being rewritten by AI, showing before and after comparisons with green highlights."
                />
              </StepImageWrapper>
            </StepImage>
          </StepBlock>

          <StepBlock $bgColor="#f9fbf4">
            <StepContent>
              <StepIcon>
                <i className="fa-solid fa-handshake-angle" aria-hidden="true" />
              </StepIcon>
              <StepNumber>Step 03</StepNumber>
              <StepTitle>
                데이터 기반의
                <br />
                최적 기업 매칭
              </StepTitle>
              <StepDescription>
                첨삭된 이력서와 기업의 요구 역량을 대조하여 '합격 가능성'이 가장 높은 기업 리스트를
                제안합니다. 당신의 강점이 가장 빛날 수 있는 곳에서 커리어를 시작하세요.
              </StepDescription>
              <StepFeatureVerticalList>
                <StepFeatureVerticalItem>
                  <StepFeatureVerticalIcon>
                    <i className="fa-solid fa-chart-line" />
                  </StepFeatureVerticalIcon>
                  <StepFeatureVerticalContent>
                    <StepFeatureVerticalTitle>정교한 일치도 분석</StepFeatureVerticalTitle>
                    <StepFeatureVerticalDescription>
                      보유 스킬과 기업 필요 역량의 95% 이상 매칭
                    </StepFeatureVerticalDescription>
                  </StepFeatureVerticalContent>
                </StepFeatureVerticalItem>
                <StepFeatureVerticalItem>
                  <StepFeatureVerticalIcon>
                    <i className="fa-solid fa-paper-plane" />
                  </StepFeatureVerticalIcon>
                  <StepFeatureVerticalContent>
                    <StepFeatureVerticalTitle>원클릭 지원 시스템</StepFeatureVerticalTitle>
                    <StepFeatureVerticalDescription>
                      추천 기업에 최적화된 이력서로 즉시 지원 가능
                    </StepFeatureVerticalDescription>
                  </StepFeatureVerticalContent>
                </StepFeatureVerticalItem>
              </StepFeatureVerticalList>
            </StepContent>
            <StepImage>
              <StepImageWrapper>
                <StepImageContent
                  src="https://gmcnqdpighpxhzpesqwf.supabase.co/storage/v1/object/public/generated-images/image-6d37a3f0-38ef-43f4-a0aa-cae3ecc6b559.jpg"
                />
              </StepImageWrapper>
            </StepImage>
          </StepBlock>
        </ProcessSection>
=======
          <FeatureGrid>
            {features.map((feature) => (
              <FeatureCard key={feature.title}>
                <FeatureIcon>
                  <i className={feature.iconClass} aria-hidden="true" />
                </FeatureIcon>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureCard>
            ))}
          </FeatureGrid>
        </Section>

        <Section $tone="muted">
          <ResumeLayout>
            <ResumeIntro>
              <ResumeTitle>
                지금 바로
                <br />
                무료로 시작해보세요
              </ResumeTitle>
              <ResumeText>
                파일을 드래그하거나 클릭하여 업로드하면 AI가 실시간으로 분석을 시작합니다.
              </ResumeText>
              <UploadDropzone>
                <UploadIcon>
                  <i className="fa-solid fa-file-circle-plus" aria-hidden="true" />
                </UploadIcon>
                <UploadTitle>이력서 파일 선택</UploadTitle>
                <UploadSubtitle>PDF, DOCX (최대 10MB)</UploadSubtitle>
              </UploadDropzone>
            </ResumeIntro>
            <AnalyzerPanel>
              <PanelHeader>
              <PanelDots>
                <PanelDot $color="#ef4444" />
                <PanelDot $color="#facc15" />
                <PanelDot $color="#22c55e" />
              </PanelDots>
              <PanelCode>AI_RESUME_ANALYZER_V2.0</PanelCode>
              <PanelSpacer />
            </PanelHeader>
              <PanelBody>
                <PanelHeaderRow>
                  <div>
                    <PanelHeaderTitle>네이버 클라우드 - 서비스 기획 직무</PanelHeaderTitle>
                    <PanelHeaderMeta>기업 핵심가치: [도전], [사용자 중심], [팀워크]</PanelHeaderMeta>
                  </div>
                  <StatusBadge>분석 완료</StatusBadge>
                </PanelHeaderRow>
                <PanelStack>
                  <PanelBlock>
                    <PanelBlockTitle>
                      <Dot $color="#add94e" />
                      기존 내용
                    </PanelBlockTitle>
                    <OriginalText>
                      대학교 시절 팀 프로젝트에서 리더를 맡아 프로젝트를 성공적으로 마무리했습니다.
                      팀원들 간의 소통을 중요하게 생각했습니다.
                    </OriginalText>
                  </PanelBlock>
                  <PanelBlock>
                    <PanelBlockTitle>
                      <Dot $color="#3b82f6" />
                      AI 첨삭 제안
                    </PanelBlockTitle>
                    <SuggestionBox>
                      <SuggestionBadge>Recommended</SuggestionBadge>
                      '사용자 중심'의 사고방식을 바탕으로 팀 프로젝트의 목표를 재설정하여, 전년 대비
                      사용자 체류 시간을 20% 향상시킨 경험이 있습니다. 리더로서 팀원 간의 의견 충돌을
                      데이터 기반의 의사결정으로 중재하며 협업 시너지를 극대화했습니다.
                    </SuggestionBox>
                    <KeywordHint>#데이터기반 #사용자중심 #협업시너지 키워드가 강화되었습니다.</KeywordHint>
                  </PanelBlock>
                </PanelStack>
              </PanelBody>
            </AnalyzerPanel>
          </ResumeLayout>
        </Section>
>>>>>>> origin/feature/ju

        <Section>
          <MatchingHeader>
            <div>
              <MatchingTitle>나와 가장 잘 맞는 기업</MatchingTitle>
              <MatchingSubtitle>AI가 분석한 인재상 일치도를 기반으로 추천합니다.</MatchingSubtitle>
            </div>
            <ViewAllButton type="button">
              전체보기 <i className="fa-solid fa-chevron-right" aria-hidden="true" />
            </ViewAllButton>
          </MatchingHeader>
          <CompanyGrid>
            {companies.map((company) => (
              <CompanyCard key={company.name}>
                <CompanyLogo>
                  <CompanyLogoImage src={company.imageUrl} alt={`${company.name} 로고`} />
                </CompanyLogo>
                <TagRow>
                  <Tag>{company.category}</Tag>
                  <Tag $tone="blue">{company.status}</Tag>
                </TagRow>
                <CompanyName>{company.name}</CompanyName>
                <CompanyRole>{company.role}</CompanyRole>
                <MatchBox>
                  <MatchHeader>
                    인재상 일치도 <MatchValue>{company.match}%</MatchValue>
                  </MatchHeader>
                  <MatchBar>
                    <MatchFill $percent={company.match} />
                  </MatchBar>
                </MatchBox>
                <CardButton type="button">공고 확인하기</CardButton>
              </CompanyCard>
            ))}
          </CompanyGrid>
        </Section>

        <Fab>
          <FabButton type="button" aria-label="문의하기">
            <i className="fa-solid fa-comment-dots" aria-hidden="true" />
          </FabButton>
        </Fab>
      </AppShell>
    </Page>
  </>
)

export default HomePage

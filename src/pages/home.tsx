import {
  AppShell,
  CardButton,
  CompanyCard,
  CompanyGrid,
  CompanyLogo,
  CompanyLogoImage,
  CompanyName,
  CompanyRole,
  DarkActionButton,
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
  MatchBar,
  MatchBox,
  MatchFill,
  MatchHeader,
  MatchValue,
  MatchingHeader,
  MatchingSubtitle,
  MatchingTitle,
  Page,
  ProcessSection,
  Section,
  SectionHeader,
  SectionSubtitle,
  SectionTitle,
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

type CompanyItem = {
  name: string
  role: string
  category: string
  status: string
  match: number
  imageUrl: string
}

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
            </HeroDescription>
            <HeroActions>
              <DarkActionButton to="/resume-upload">
                <i className="fa-solid fa-file-arrow-up" aria-hidden="true" />
                이력서 업로드하러 가기
              </DarkActionButton>
            </HeroActions>
          </HeroContent>
          <HeroVisual>
            <HeroImage
              src="/copy-dynamic-color.svg"
              alt="AI가 이력서를 분석하는 모습을 표현한 3D 일러스트"
            />
          </HeroVisual>
        </HeroSection>

        <ProcessSection>
          <SectionHeader>
            <SectionTitle>합격까지 이어지는 3단계 프로세스</SectionTitle>
            <SectionSubtitle>복잡한 취업 준비, 이제 AI와 함께 효율적으로 해결하세요.</SectionSubtitle>
          </SectionHeader>

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
                  src="/fav-folder-iso-color.svg"
                  alt="파일 업로드 인터페이스"
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
                  src="/calender-iso-color.svg"
                  alt="AI가 생성한 로드맵 캘린더 일러스트"
                  $tone="match"
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
                  src="/link-iso-color.png"
                  alt="맞춤 기업 매칭을 표현한 링크 일러스트"
                  $tone="match"
                  $shadowTone="neutral"
                />
              </StepImageWrapper>
            </StepImage>
          </StepBlock>
        </ProcessSection>

        <Section>
          <MatchingHeader>
            <div>
              <MatchingTitle>나와 가장 잘 맞는 기업</MatchingTitle>
              <MatchingSubtitle>AI가 분석한 인재상 일치도를 기반으로 추천합니다.</MatchingSubtitle>
            </div>
            <ViewAllButton to="/company-recommendation">
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

      </AppShell>
    </Page>
  </>
)

export default HomePage

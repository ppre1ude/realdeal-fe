import {
  AnalyzerPanel,
  AppShell,
  CardButton,
  CompanyCard,
  CompanyGrid,
  CompanyLogo,
  CompanyLogoImage,
  CompanyName,
  CompanyRole,
  DarkActionButton,
  Dot,
  Fab,
  FabButton,
  FeatureCard,
  FeatureDescription,
  FeatureGrid,
  FeatureIcon,
  FeatureTitle,
  Footer,
  FooterBottom,
  FooterBrand,
  FooterBrandTitle,
  FooterColumn,
  FooterColumns,
  FooterHeading,
  FooterLink,
  FooterList,
  FooterText,
  FooterTop,
  Header,
  HeaderActions,
  HeaderLeft,
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
  LightActionButton,
  Logo,
  LogoText,
  MatchBar,
  MatchBox,
  MatchFill,
  MatchHeader,
  MatchValue,
  MatchingHeader,
  MatchingSubtitle,
  MatchingTitle,
  Nav,
  NavAnchor,
  NavLink,
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
  PrimaryPillButton,
  ResumeIntro,
  ResumeLayout,
  ResumeText,
  ResumeTitle,
  Section,
  SectionHeader,
  SectionSubtitle,
  SectionTitle,
  SocialLink,
  SocialLinks,
  StatusBadge,
  SuggestionBadge,
  SuggestionBox,
  Tag,
  TagRow,
  TextLinkButton,
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

type CompanyItem = {
  name: string
  role: string
  category: string
  status: string
  match: number
  imageUrl: string
}

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
        <Header>
          <HeaderLeft>
            <Logo>
              <i className="fa-solid fa-bolt-lightning" aria-hidden="true" />
              <LogoText>LINKED-INSA</LogoText>
            </Logo>
            <Nav>
              <NavLink to="/home" $active>
                홈
              </NavLink>
              <NavAnchor href="#">AI 이력서 첨삭</NavAnchor>
              <NavAnchor href="#">기업 추천</NavAnchor>
              <NavAnchor href="#">매칭 현황</NavAnchor>
            </Nav>
          </HeaderLeft>
          <HeaderActions>
            <TextLinkButton to="/login">로그인</TextLinkButton>
            <PrimaryPillButton to="/register">무료 시작하기</PrimaryPillButton>
          </HeaderActions>
        </Header>

        <HeroSection>
          <HeroContent>
            <HeroBadge>신입 취준생 필수 플랫폼</HeroBadge>
            <HeroTitle>
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
            </HeroDescription>
            <HeroActions>
              <DarkActionButton type="button">
                <i className="fa-solid fa-file-arrow-up" aria-hidden="true" />
                이력서 업로드하고 시작하기
              </DarkActionButton>
              <LightActionButton type="button">서비스 둘러보기</LightActionButton>
            </HeroActions>
          </HeroContent>
          <HeroVisual>
            <HeroImage
              src="https://gmcnqdpighpxhzpesqwf.supabase.co/storage/v1/object/public/generated-images/image-f3ca5f6c-6b3b-4791-bb92-a16c1ebf9d8a.jpg"
              alt="AI가 이력서를 분석하는 모습을 표현한 3D 일러스트"
            />
          </HeroVisual>
        </HeroSection>

        <Section>
          <SectionHeader>
            <SectionTitle>합격까지 이어지는 3단계 프로세스</SectionTitle>
            <SectionSubtitle>복잡한 취업 준비, 이제 AI와 함께 효율적으로 해결하세요.</SectionSubtitle>
          </SectionHeader>
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

        <Footer>
          <FooterTop>
            <FooterBrand>
              <FooterBrandTitle>
                <i className="fa-solid fa-bolt-lightning" aria-hidden="true" />
                LINKED-INSA
              </FooterBrandTitle>
              <FooterText>
                취업 준비생들을 위한 AI 기반 이력서 최적화 및 기업 매칭 서비스. 당신의 꿈을 향한 가장
                빠른 길을 제시합니다.
              </FooterText>
            </FooterBrand>
            <FooterColumns>
              <FooterColumn>
                <FooterHeading>서비스</FooterHeading>
                <FooterList>
                  <li>
                    <FooterLink href="#">AI 이력서 첨삭</FooterLink>
                  </li>
                  <li>
                    <FooterLink href="#">기업 추천</FooterLink>
                  </li>
                  <li>
                    <FooterLink href="#">매칭 프로세스</FooterLink>
                  </li>
                  <li>
                    <FooterLink href="#">합격 수기</FooterLink>
                  </li>
                </FooterList>
              </FooterColumn>
              <FooterColumn>
                <FooterHeading>고객지원</FooterHeading>
                <FooterList>
                  <li>
                    <FooterLink href="#">자주 묻는 질문</FooterLink>
                  </li>
                  <li>
                    <FooterLink href="#">공지사항</FooterLink>
                  </li>
                  <li>
                    <FooterLink href="#">문의하기</FooterLink>
                  </li>
                </FooterList>
              </FooterColumn>
              <FooterColumn>
                <FooterHeading>법적 고지</FooterHeading>
                <FooterList>
                  <li>
                    <FooterLink href="#">이용약관</FooterLink>
                  </li>
                  <li>
                    <FooterLink href="#">개인정보처리방침</FooterLink>
                  </li>
                  <li>
                    <FooterLink href="#">운영정책</FooterLink>
                  </li>
                </FooterList>
              </FooterColumn>
            </FooterColumns>
          </FooterTop>
          <FooterBottom>
            <span>© 2025 LINKED-INSA. All rights reserved.</span>
            <SocialLinks>
              <SocialLink href="#" aria-label="인스타그램">
                <i className="fa-brands fa-instagram" aria-hidden="true" />
              </SocialLink>
              <SocialLink href="#" aria-label="유튜브">
                <i className="fa-brands fa-youtube" aria-hidden="true" />
              </SocialLink>
              <SocialLink href="#" aria-label="링크드인">
                <i className="fa-brands fa-linkedin" aria-hidden="true" />
              </SocialLink>
            </SocialLinks>
          </FooterBottom>
        </Footer>

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

import { Link } from 'react-router-dom'
import {
  Badge,
  CompanyButton,
  CompanyCard,
  CompanyGrid,
  CompanyLogo,
  CompanyLogoImage,
  CompanyMatch,
  CompanyMatchBar,
  CompanyMatchBarFill,
  CompanyMatchHeader,
  CompanyMatchLabel,
  CompanyMatchValue,
  CompanyName,
  CompanyPosition,
  CompanyTag,
  CompanyTags,
  FeatureCard,
  FeatureDescription,
  FeatureGrid,
  FeatureIcon,
  FeatureTitle,
  FloatingButton,
  FAB,
  Footer,
  FooterBottom,
  FooterContent,
  FooterDescription,
  FooterLeft,
  FooterLink,
  FooterLinkGroup,
  FooterLinkItem,
  FooterLinkList,
  FooterLinks,
  FooterLinkTitle,
  FooterLogo,
  FooterSocial,
  FooterSocialLink,
  Header,
  HeaderLeft,
  HeaderRight,
  HeroButtons,
  HeroContent,
  HeroDescription,
  HeroImage,
  HeroImageContent,
  HeroImageWrapper,
  HeroSection,
  HeroTitle,
  HeroTitleHighlight,
  LoginButton,
  Logo,
  MatchingHeader,
  MatchingHeaderLeft,
  MatchingHeaderRight,
  MatchingSection,
  Nav,
  NavLink,
  PageContainer,
  PreviewContent,
  PreviewContentBadge,
  PreviewContentHeader,
  PreviewContentLabel,
  PreviewContentNote,
  PreviewContentSection,
  PreviewContentSuggested,
  PreviewContentText,
  PreviewDot,
  PreviewDots,
  PreviewHeader,
  PreviewHeaderContent,
  PreviewHeaderLeft,
  PreviewHeaderSubtitle,
  PreviewHeaderTitle,
  PreviewStatus,
  PreviewTitle,
  PreviewWindow,
  PrimaryButton,
  ResumeContent,
  ResumeDescription,
  ResumeLeft,
  ResumeRight,
  ResumeSection,
  ResumeTitle,
  SecondaryButton,
  SectionDescription,
  SectionHeader,
  SectionTitle,
  StartButton,
  UploadArea,
  UploadIcon,
  UploadSubtext,
  UploadText,
  WalkthroughSection,
} from './Home.styles'

const HomePage = () => {
  return (
    <PageContainer>
      <Header>
        <HeaderLeft>
          <Logo to="/">
            <i className="fa-solid fa-bolt-lightning"></i>
            <span>LINKED-INSA</span>
          </Logo>
          <Nav>
            <NavLink to="/" className="active">
              홈
            </NavLink>
            <NavLink to="/resume-edit">AI 이력서 첨삭</NavLink>
            <NavLink to="/company-recommendation">기업 추천</NavLink>
            <NavLink to="/matching-status">매칭 현황</NavLink>
          </Nav>
        </HeaderLeft>
        <HeaderRight>
          <LoginButton to="/login">로그인</LoginButton>
          <StartButton to="/register">무료 시작하기</StartButton>
        </HeaderRight>
      </Header>

      <HeroSection>
        <HeroContent>
          <Badge>신입 취준생 필수 플랫폼</Badge>
          <HeroTitle>
            당신의 이력서,<br />
            <HeroTitleHighlight>기업의 인재상</HeroTitleHighlight>에<br />
            맞게 재탄생합니다.
          </HeroTitle>
          <HeroDescription>
            단순한 오타 교정이 아닙니다. AI가 기업의 핵심 가치를 분석하여<br />
            당신의 경험을 가장 매력적인 스토리로 바꿔드립니다.
          </HeroDescription>
          <HeroButtons>
            <PrimaryButton to="/resume-upload">
              <i className="fa-solid fa-file-arrow-up"></i>
              이력서 업로드하고 시작하기
            </PrimaryButton>
            <SecondaryButton to="/resume-edit">서비스 둘러보기</SecondaryButton>
          </HeroButtons>
        </HeroContent>
        <HeroImage>
          <HeroImageWrapper>
            <HeroImageContent
              src="https://gmcnqdpighpxhzpesqwf.supabase.co/storage/v1/object/public/generated-images/image-f3ca5f6c-6b3b-4791-bb92-a16c1ebf9d8a.jpg"
              alt="A modern 3D illustration of a professional resume being scanned by AI with glowing green highlights and digital data points, clean aesthetic."
            />
          </HeroImageWrapper>
        </HeroImage>
      </HeroSection>

      <WalkthroughSection>
        <SectionHeader>
          <SectionTitle>합격까지 이어지는 3단계 프로세스</SectionTitle>
          <SectionDescription>
            복잡한 취업 준비, 이제 AI와 함께 효율적으로 해결하세요.
          </SectionDescription>
        </SectionHeader>
        <FeatureGrid>
          <FeatureCard>
            <FeatureIcon>
              <i className="fa-solid fa-cloud-arrow-up"></i>
            </FeatureIcon>
            <FeatureTitle>01. 이력서 업로드</FeatureTitle>
            <FeatureDescription>
              작성해둔 워드나 PDF 이력서를 그대로 업로드하세요. AI가 즉시 텍스트를 추출하고 분석합니다.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>
              <i className="fa-solid fa-wand-magic-sparkles"></i>
            </FeatureIcon>
            <FeatureTitle>02. 인재상 맞춤 첨삭</FeatureTitle>
            <FeatureDescription>
              지원하려는 기업의 최근 인재상과 핵심 키워드를 반영하여 이력서의 문항별 내용을 최적화합니다.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>
              <i className="fa-solid fa-handshake-angle"></i>
            </FeatureIcon>
            <FeatureTitle>03. 최적 기업 매칭</FeatureTitle>
            <FeatureDescription>
              첨삭된 이력서를 바탕으로 당신의 강점이 가장 잘 발휘될 수 있는 기업들을 정교하게 추천해드립니다.
            </FeatureDescription>
          </FeatureCard>
        </FeatureGrid>
      </WalkthroughSection>

      <ResumeSection>
        <ResumeContent>
          <ResumeLeft>
            <ResumeTitle>
              지금 바로<br />
              무료로 시작해보세요
            </ResumeTitle>
            <ResumeDescription>
              파일을 드래그하거나 클릭하여 업로드하면 AI가 실시간으로 분석을 시작합니다.
            </ResumeDescription>
            <UploadArea as={Link} to="/resume-upload">
              <UploadIcon>
                <i className="fa-solid fa-file-circle-plus"></i>
              </UploadIcon>
              <UploadText>이력서 파일 선택</UploadText>
              <UploadSubtext>PDF, DOCX (최대 10MB)</UploadSubtext>
            </UploadArea>
          </ResumeLeft>
          <ResumeRight>
            <PreviewWindow>
              <PreviewHeader>
                <PreviewDots>
                  <PreviewDot $color="#ef4444" />
                  <PreviewDot $color="#eab308" />
                  <PreviewDot $color="#22c55e" />
                </PreviewDots>
                <PreviewTitle>AI_RESUME_ANALYZER_V2.0</PreviewTitle>
                <div style={{ width: '32px' }}></div>
              </PreviewHeader>
              <PreviewContent>
                <PreviewHeaderContent>
                  <PreviewHeaderLeft>
                    <PreviewHeaderTitle>네이버 클라우드 - 서비스 기획 직무</PreviewHeaderTitle>
                    <PreviewHeaderSubtitle>
                      기업 핵심가치: [도전], [사용자 중심], [팀워크]
                    </PreviewHeaderSubtitle>
                  </PreviewHeaderLeft>
                  <PreviewStatus>분석 완료</PreviewStatus>
                </PreviewHeaderContent>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                  <PreviewContentSection>
                    <PreviewContentHeader>
                      <span
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: '#add94e',
                        }}
                      ></span>
                      <PreviewContentLabel>기존 내용</PreviewContentLabel>
                    </PreviewContentHeader>
                    <PreviewContentText>
                      대학교 시절 팀 프로젝트에서 리더를 맡아 프로젝트를 성공적으로 마무리했습니다.
                      팀원들 간의 소통을 중요하게 생각했습니다.
                    </PreviewContentText>
                  </PreviewContentSection>
                  <div style={{ position: 'relative' }}>
                    <PreviewContentHeader>
                      <span
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: '#3b82f6',
                          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                        }}
                      ></span>
                      <PreviewContentLabel>AI 첨삭 제안</PreviewContentLabel>
                    </PreviewContentHeader>
                    <PreviewContentSuggested>
                      <PreviewContentBadge>Recommended</PreviewContentBadge>
                      '사용자 중심'의 사고방식을 바탕으로 팀 프로젝트의 목표를 재설정하여, 전년 대비
                      사용자 체류 시간을 20% 향상시킨 경험이 있습니다. 리더로서 팀원 간의 의견 충돌을
                      데이터 기반의 의사결정으로 중재하며 협업 시너지를 극대화했습니다.
                    </PreviewContentSuggested>
                    <PreviewContentNote>
                      #데이터기반 #사용자중심 #협업시너지 키워드가 강화되었습니다.
                    </PreviewContentNote>
                  </div>
                </div>
              </PreviewContent>
            </PreviewWindow>
          </ResumeRight>
        </ResumeContent>
      </ResumeSection>

      <MatchingSection>
        <MatchingHeader>
          <MatchingHeaderLeft>
            <SectionTitle>나와 가장 잘 맞는 기업</SectionTitle>
            <SectionDescription>AI가 분석한 인재상 일치도를 기반으로 추천합니다.</SectionDescription>
          </MatchingHeaderLeft>
          <MatchingHeaderRight to="/company-recommendation">
            전체보기 <i className="fa-solid fa-chevron-right" style={{ fontSize: '14px' }}></i>
          </MatchingHeaderRight>
        </MatchingHeader>
        <CompanyGrid>
          <CompanyCard to="/company-recommendation">
            <CompanyLogo>
              <CompanyLogoImage
                src="https://gmcnqdpighpxhzpesqwf.supabase.co/storage/v1/object/public/generated-images/image-5078afb4-a284-4be8-84bf-bb71769e586c.jpg"
                alt="Minimalist tech company logo icon"
              />
            </CompanyLogo>
            <CompanyTags>
              <CompanyTag $bgColor="#f3f4f6" $textColor="#6b7280">
                IT/플랫폼
              </CompanyTag>
              <CompanyTag $bgColor="#dbeafe" $textColor="#3b82f6">
                채용중
              </CompanyTag>
            </CompanyTags>
            <CompanyName>카카오뱅크</CompanyName>
            <CompanyPosition>금융 서비스 기획자</CompanyPosition>
            <CompanyMatch>
              <CompanyMatchHeader>
                <CompanyMatchLabel>인재상 일치도</CompanyMatchLabel>
                <CompanyMatchValue>98%</CompanyMatchValue>
              </CompanyMatchHeader>
              <CompanyMatchBar>
                <CompanyMatchBarFill $width={98} />
              </CompanyMatchBar>
            </CompanyMatch>
            <CompanyButton>공고 확인하기</CompanyButton>
          </CompanyCard>
          <CompanyCard to="/company-recommendation">
            <CompanyLogo>
              <CompanyLogoImage
                src="https://gmcnqdpighpxhzpesqwf.supabase.co/storage/v1/object/public/generated-images/image-80c4501c-da8d-4358-81ff-12490386913f.jpg"
                alt="Minimalist ecommerce company logo icon"
              />
            </CompanyLogo>
            <CompanyTags>
              <CompanyTag $bgColor="#f3f4f6" $textColor="#6b7280">
                커머스
              </CompanyTag>
              <CompanyTag $bgColor="#dbeafe" $textColor="#3b82f6">
                채용중
              </CompanyTag>
            </CompanyTags>
            <CompanyName>무신사</CompanyName>
            <CompanyPosition>브랜드 마케팅</CompanyPosition>
            <CompanyMatch>
              <CompanyMatchHeader>
                <CompanyMatchLabel>인재상 일치도</CompanyMatchLabel>
                <CompanyMatchValue>92%</CompanyMatchValue>
              </CompanyMatchHeader>
              <CompanyMatchBar>
                <CompanyMatchBarFill $width={92} />
              </CompanyMatchBar>
            </CompanyMatch>
            <CompanyButton>공고 확인하기</CompanyButton>
          </CompanyCard>
          <CompanyCard to="/company-recommendation">
            <CompanyLogo>
              <CompanyLogoImage
                src="https://gmcnqdpighpxhzpesqwf.supabase.co/storage/v1/object/public/generated-images/image-343acdd6-16a2-433d-8a47-c269da421b81.jpg"
                alt="Minimalist startup company logo icon"
              />
            </CompanyLogo>
            <CompanyTags>
              <CompanyTag $bgColor="#f3f4f6" $textColor="#6b7280">
                핀테크
              </CompanyTag>
              <CompanyTag $bgColor="#dbeafe" $textColor="#3b82f6">
                채용중
              </CompanyTag>
            </CompanyTags>
            <CompanyName>토스</CompanyName>
            <CompanyPosition>데이터 분석가</CompanyPosition>
            <CompanyMatch>
              <CompanyMatchHeader>
                <CompanyMatchLabel>인재상 일치도</CompanyMatchLabel>
                <CompanyMatchValue>89%</CompanyMatchValue>
              </CompanyMatchHeader>
              <CompanyMatchBar>
                <CompanyMatchBarFill $width={89} />
              </CompanyMatchBar>
            </CompanyMatch>
            <CompanyButton>공고 확인하기</CompanyButton>
          </CompanyCard>
          <CompanyCard to="/company-recommendation">
            <CompanyLogo>
              <CompanyLogoImage
                src="https://gmcnqdpighpxhzpesqwf.supabase.co/storage/v1/object/public/generated-images/image-5741696f-73cd-4913-9637-4d922c887965.jpg"
                alt="Minimalist travel company logo icon"
              />
            </CompanyLogo>
            <CompanyTags>
              <CompanyTag $bgColor="#f3f4f6" $textColor="#6b7280">
                여행/레저
              </CompanyTag>
              <CompanyTag $bgColor="#dbeafe" $textColor="#3b82f6">
                채용중
              </CompanyTag>
            </CompanyTags>
            <CompanyName>야놀자</CompanyName>
            <CompanyPosition>UX 디자이너</CompanyPosition>
            <CompanyMatch>
              <CompanyMatchHeader>
                <CompanyMatchLabel>인재상 일치도</CompanyMatchLabel>
                <CompanyMatchValue>85%</CompanyMatchValue>
              </CompanyMatchHeader>
              <CompanyMatchBar>
                <CompanyMatchBarFill $width={85} />
              </CompanyMatchBar>
            </CompanyMatch>
            <CompanyButton>공고 확인하기</CompanyButton>
          </CompanyCard>
        </CompanyGrid>
      </MatchingSection>

      <Footer>
        <FooterContent>
          <FooterLeft>
            <FooterLogo>
              <i className="fa-solid fa-bolt-lightning"></i>
              <span>LINKED-INSA</span>
            </FooterLogo>
            <FooterDescription>
              취업 준비생들을 위한 AI 기반 이력서 최적화 및 기업 매칭 서비스. 당신의 꿈을 향한 가장
              빠른 길을 제시합니다.
            </FooterDescription>
          </FooterLeft>
          <FooterLinks>
            <FooterLinkGroup>
              <FooterLinkTitle>서비스</FooterLinkTitle>
              <FooterLinkList>
                <FooterLinkItem>
                  <FooterLink to="/resume-edit">AI 이력서 첨삭</FooterLink>
                </FooterLinkItem>
                <FooterLinkItem>
                  <FooterLink to="/company-recommendation">기업 추천</FooterLink>
                </FooterLinkItem>
                <FooterLinkItem>
                  <FooterLink to="/matching-status">매칭 프로세스</FooterLink>
                </FooterLinkItem>
                <FooterLinkItem>
                  <FooterLink to="/success-stories">합격 수기</FooterLink>
                </FooterLinkItem>
              </FooterLinkList>
            </FooterLinkGroup>
            <FooterLinkGroup>
              <FooterLinkTitle>고객지원</FooterLinkTitle>
              <FooterLinkList>
                <FooterLinkItem>
                  <FooterLink to="/faq">자주 묻는 질문</FooterLink>
                </FooterLinkItem>
                <FooterLinkItem>
                  <FooterLink to="/notice">공지사항</FooterLink>
                </FooterLinkItem>
                <FooterLinkItem>
                  <FooterLink to="/contact">문의하기</FooterLink>
                </FooterLinkItem>
              </FooterLinkList>
            </FooterLinkGroup>
            <FooterLinkGroup>
              <FooterLinkTitle>법적 고지</FooterLinkTitle>
              <FooterLinkList>
                <FooterLinkItem>
                  <FooterLink to="/terms">이용약관</FooterLink>
                </FooterLinkItem>
                <FooterLinkItem>
                  <FooterLink to="/privacy">개인정보처리방침</FooterLink>
                </FooterLinkItem>
                <FooterLinkItem>
                  <FooterLink to="/policy">운영정책</FooterLink>
                </FooterLinkItem>
              </FooterLinkList>
            </FooterLinkGroup>
          </FooterLinks>
        </FooterContent>
        <FooterBottom>
          <span>© 2025 LINKED-INSA. All rights reserved.</span>
          <FooterSocial>
            <FooterSocialLink href="#" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </FooterSocialLink>
            <FooterSocialLink href="#" aria-label="YouTube">
              <i className="fa-brands fa-youtube"></i>
            </FooterSocialLink>
            <FooterSocialLink href="#" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin"></i>
            </FooterSocialLink>
          </FooterSocial>
        </FooterBottom>
      </Footer>

      <FloatingButton>
        <FAB aria-label="문의하기">
          <i className="fa-solid fa-comment-dots"></i>
        </FAB>
      </FloatingButton>
    </PageContainer>
  )
}

export default HomePage

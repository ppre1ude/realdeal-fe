import { useEffect, useState } from 'react'
import {
  ActionButton,
  ActionCard,
  ActionCardIcon,
  ActionCardText,
  ActionCardTitle,
  ActionGrid,
  ActionHeader,
  ActionSection,
  ActionSubtitle,
  ActionTitle,
  AnalysisCard,
  AnalysisGrid,
  AnalysisHeader,
  AnalysisIcon,
  AnalysisItem,
  AnalysisItemIcon,
  AnalysisItemText,
  AnalysisItemTitle,
  AnalysisList,
  AnalysisTitle,
  Avatar,
  AvatarGroup,
  FloatingActions,
  FloatingButton,
  HeroBadge,
  HeroCard,
  HeroDescription,
  HeroFooter,
  HeroGrid,
  HeroHighlight,
  HeroMeta,
  HeroTitle,
  Main,
  Page,
  RoadmapBox,
  RoadmapBoxLabel,
  RoadmapBoxText,
  RoadmapCard,
  RoadmapContent,
  RoadmapGrid,
  RoadmapHeading,
  RoadmapHeadingRow,
  RoadmapItem,
  RoadmapLine,
  RoadmapTag,
  RoadmapTimeline,
  RoadmapTitle,
  ScoreCard,
  ScoreLabel,
  ScoreNumber,
  ScoreRing,
  ScoreText,
  ScoreTitle,
  ScoreValue,
  Shell,
  YearBadge,
  YearLabel,
  YearNumber,
} from './portfolio-diagnosis.styles'

const LOADING_DELAY_MS = 1500 // 1.5초 지연

const PortfolioDiagnosisPage = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // 실제 서버 통신처럼 약간의 지연 시간 추가
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, LOADING_DELAY_MS)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <Page>
        <Shell>
          <Main>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '60vh',
                gap: '24px',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  border: '4px solid rgba(173, 217, 78, 0.2)',
                  borderTopColor: '#add94e',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite',
                }}
              />
              <div style={{ color: '#ffffff', fontSize: '18px', fontWeight: 600 }}>
                포트폴리오 진단 데이터를 불러오는 중...
              </div>
              <style>
                {`
                  @keyframes spin {
                    to { transform: rotate(360deg); }
                  }
                `}
              </style>
            </div>
          </Main>
        </Shell>
      </Page>
    )
  }

  return (
    <Page>
      <Shell>
        <Main>
          <HeroGrid>
            <HeroCard>
              <div>
                <HeroBadge>커리어 목표</HeroBadge>
                <HeroTitle>
                  &quot;3년 안에 <HeroHighlight>프론트엔드 리드</HeroHighlight>로 성장&quot;
                </HeroTitle>
                <HeroDescription>
                  React/Next.js 기반 프로젝트 3개와 팀 프로젝트 경험이 있으나, 대규모
                  트래픽/성능 최적화 경험은 부족함.
                </HeroDescription>
              </div>
              <HeroFooter>
                <AvatarGroup>
                  <Avatar src="https://vinsign.app/resources/avatars/avatar-1.png" alt="멘토 1" />
                  <Avatar src="https://vinsign.app/resources/avatars/avatar-3.png" alt="멘토 2" />
                  <Avatar src="https://vinsign.app/resources/avatars/avatar-5.png" alt="멘토 3" />
                </AvatarGroup>
                <HeroMeta>
                  <span>12명의 시니어 리드</span>가 이 로드맵을 검토했습니다.
                </HeroMeta>
              </HeroFooter>
            </HeroCard>

            <ScoreCard>
              <ScoreRing>
                <svg className="w-full h-full" viewBox="0 0 160 160">
                  <circle cx="80" cy="80" r="70" stroke="rgba(30,41,59,0.1)" strokeWidth="12" fill="transparent" />
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="#1e293b"
                    strokeWidth="12"
                    fill="transparent"
                    strokeDasharray="440"
                    strokeDashoffset="123"
                    strokeLinecap="round"
                    transform="rotate(-90 80 80)"
                  />
                </svg>
                <ScoreValue>
                  <ScoreNumber>72</ScoreNumber>
                  <ScoreLabel>Fit Score</ScoreLabel>
                </ScoreValue>
              </ScoreRing>
              <ScoreTitle>목표 달성 가능성: 높음</ScoreTitle>
              <ScoreText>
                기술적 기본기는 탄탄하나,
                <br />
                리딩 경험 보완이 핵심입니다.
              </ScoreText>
            </ScoreCard>
          </HeroGrid>

          <AnalysisGrid>
            <AnalysisCard>
              <AnalysisHeader>
                <AnalysisIcon $tone="success">
                  <i className="fa-solid fa-circle-check" aria-hidden="true" />
                </AnalysisIcon>
                <AnalysisTitle>강점 (Strengths)</AnalysisTitle>
              </AnalysisHeader>
              <AnalysisList>
                <AnalysisItem $tone="success">
                  <AnalysisItemIcon $tone="success">
                    <i className="fa-solid fa-check" aria-hidden="true" />
                  </AnalysisItemIcon>
                  <div>
                    <AnalysisItemTitle>실서비스 배포 경험</AnalysisItemTitle>
                    <AnalysisItemText>
                      실제 사용자 피드백을 반영한 라이브 서비스 운영 경험
                    </AnalysisItemText>
                  </div>
                </AnalysisItem>
                <AnalysisItem $tone="success">
                  <AnalysisItemIcon $tone="success">
                    <i className="fa-solid fa-check" aria-hidden="true" />
                  </AnalysisItemIcon>
                  <div>
                    <AnalysisItemTitle>UI/UX 개선 사례 보유</AnalysisItemTitle>
                    <AnalysisItemText>
                      사용성 지표를 분석하고 디자인을 기술적으로 풀어낸 경험
                    </AnalysisItemText>
                  </div>
                </AnalysisItem>
                <AnalysisItem $tone="success">
                  <AnalysisItemIcon $tone="success">
                    <i className="fa-solid fa-check" aria-hidden="true" />
                  </AnalysisItemIcon>
                  <div>
                    <AnalysisItemTitle>협업 경험과 문서화 역량</AnalysisItemTitle>
                    <AnalysisItemText>
                      원활한 커뮤니케이션을 위한 개발 문서 작성 능력
                    </AnalysisItemText>
                  </div>
                </AnalysisItem>
              </AnalysisList>
            </AnalysisCard>

            <AnalysisCard>
              <AnalysisHeader>
                <AnalysisIcon $tone="danger">
                  <i className="fa-solid fa-triangle-exclamation" aria-hidden="true" />
                </AnalysisIcon>
                <AnalysisTitle>보완점 (Gaps)</AnalysisTitle>
              </AnalysisHeader>
              <AnalysisList>
                <AnalysisItem $tone="danger">
                  <AnalysisItemIcon $tone="danger">
                    <i className="fa-solid fa-arrow-up" aria-hidden="true" />
                  </AnalysisItemIcon>
                  <div>
                    <AnalysisItemTitle>대규모 트래픽 대응 경험 부족</AnalysisItemTitle>
                    <AnalysisItemText>
                      수만 명 이상의 동시 접속 환경에서의 최적화 경험 필요
                    </AnalysisItemText>
                  </div>
                </AnalysisItem>
                <AnalysisItem $tone="danger">
                  <AnalysisItemIcon $tone="danger">
                    <i className="fa-solid fa-arrow-up" aria-hidden="true" />
                  </AnalysisItemIcon>
                  <div>
                    <AnalysisItemTitle>프론트엔드 아키텍처 설계 경험 부족</AnalysisItemTitle>
                    <AnalysisItemText>
                      확장성 있는 프로젝트 구조 설계 및 라이브러리 선정 안목
                    </AnalysisItemText>
                  </div>
                </AnalysisItem>
                <AnalysisItem $tone="danger">
                  <AnalysisItemIcon $tone="danger">
                    <i className="fa-solid fa-arrow-up" aria-hidden="true" />
                  </AnalysisItemIcon>
                  <div>
                    <AnalysisItemTitle>리더십/멘토링 사례 부족</AnalysisItemTitle>
                    <AnalysisItemText>
                      팀의 성장을 이끌고 기술적 의사결정을 주도한 경험
                    </AnalysisItemText>
                  </div>
                </AnalysisItem>
              </AnalysisList>
            </AnalysisCard>
          </AnalysisGrid>

          <ActionSection>
            <ActionHeader>
              <div>
                <ActionTitle>지금 바로 실행하세요</ActionTitle>
                <ActionSubtitle>목표 달성을 위한 우선순위 액션 아이템</ActionSubtitle>
              </div>
              <ActionButton type="button">모든 태스크 보기</ActionButton>
            </ActionHeader>
            <ActionGrid>
              <ActionCard>
                <ActionCardIcon $tone="green">
                  <i className="fa-solid fa-rocket" aria-hidden="true" />
                </ActionCardIcon>
                <ActionCardTitle>성능 개선 프로젝트</ActionCardTitle>
                <ActionCardText>1만 DAU 이상 서비스의 성능 개선 경험 확보</ActionCardText>
              </ActionCard>
              <ActionCard>
                <ActionCardIcon $tone="amber">
                  <i className="fa-solid fa-pen-nib" aria-hidden="true" />
                </ActionCardIcon>
                <ActionCardTitle>아키텍처 문서화</ActionCardTitle>
                <ActionCardText>모듈화/아키텍처 설계 의사결정 과정 기록</ActionCardText>
              </ActionCard>
              <ActionCard>
                <ActionCardIcon $tone="emerald">
                  <i className="fa-solid fa-users" aria-hidden="true" />
                </ActionCardIcon>
                <ActionCardTitle>코드리뷰 주도</ActionCardTitle>
                <ActionCardText>후배 멘토링 및 팀 표준 가이드 수립</ActionCardText>
              </ActionCard>
            </ActionGrid>
          </ActionSection>

          <RoadmapCard>
            <RoadmapTitle>3개년 커리어 로드맵</RoadmapTitle>
            <RoadmapTimeline>
              <RoadmapLine />

              <RoadmapItem>
                <YearBadge $active>
                  <YearLabel>Year</YearLabel>
                  <YearNumber>01</YearNumber>
                </YearBadge>
                <RoadmapContent>
                  <RoadmapHeadingRow>
                    <RoadmapHeading>성능/품질 개선 역량 강화</RoadmapHeading>
                    <RoadmapTag>현재 단계</RoadmapTag>
                  </RoadmapHeadingRow>
                  <RoadmapGrid>
                    <RoadmapBox>
                      <RoadmapBoxLabel>KPI 01</RoadmapBoxLabel>
                      <RoadmapBoxText>LCP 2.5s 이하 달성</RoadmapBoxText>
                    </RoadmapBox>
                    <RoadmapBox>
                      <RoadmapBoxLabel>KPI 02</RoadmapBoxLabel>
                      <RoadmapBoxText>테스트 커버리지 40%</RoadmapBoxText>
                    </RoadmapBox>
                    <RoadmapBox>
                      <RoadmapBoxLabel>KPI 03</RoadmapBoxLabel>
                      <RoadmapBoxText>아키텍처 개선안 적용</RoadmapBoxText>
                    </RoadmapBox>
                  </RoadmapGrid>
                </RoadmapContent>
              </RoadmapItem>

              <RoadmapItem>
                <YearBadge>
                  <YearLabel>Year</YearLabel>
                  <YearNumber>02</YearNumber>
                </YearBadge>
                <RoadmapContent>
                  <RoadmapHeadingRow>
                    <RoadmapHeading>리드 역량(설계/리뷰/조율) 강화</RoadmapHeading>
                  </RoadmapHeadingRow>
                  <RoadmapGrid>
                    <RoadmapBox $tone="muted">
                      <RoadmapBoxLabel>Target</RoadmapBoxLabel>
                      <RoadmapBoxText>중형 프로젝트 리딩</RoadmapBoxText>
                    </RoadmapBox>
                    <RoadmapBox $tone="muted">
                      <RoadmapBoxLabel>Target</RoadmapBoxLabel>
                      <RoadmapBoxText>프론트 표준 가이드 작성</RoadmapBoxText>
                    </RoadmapBox>
                    <RoadmapBox $tone="muted">
                      <RoadmapBoxLabel>Target</RoadmapBoxLabel>
                      <RoadmapBoxText>주요 기능 릴리즈 책임</RoadmapBoxText>
                    </RoadmapBox>
                  </RoadmapGrid>
                </RoadmapContent>
              </RoadmapItem>

              <RoadmapItem>
                <YearBadge>
                  <YearLabel>Year</YearLabel>
                  <YearNumber>03</YearNumber>
                </YearBadge>
                <RoadmapContent>
                  <RoadmapHeadingRow>
                    <RoadmapHeading>조직/비즈니스 임팩트 확대</RoadmapHeading>
                  </RoadmapHeadingRow>
                  <RoadmapGrid>
                    <RoadmapBox $tone="muted">
                      <RoadmapBoxLabel>Goal</RoadmapBoxLabel>
                      <RoadmapBoxText>신규 제품 전반 리딩</RoadmapBoxText>
                    </RoadmapBox>
                    <RoadmapBox $tone="muted">
                      <RoadmapBoxLabel>Goal</RoadmapBoxLabel>
                      <RoadmapBoxText>팀 생산성 지표 달성</RoadmapBoxText>
                    </RoadmapBox>
                    <RoadmapBox $tone="muted">
                      <RoadmapBoxLabel>Goal</RoadmapBoxLabel>
                      <RoadmapBoxText>리더 후보자 평가 확보</RoadmapBoxText>
                    </RoadmapBox>
                  </RoadmapGrid>
                </RoadmapContent>
              </RoadmapItem>
            </RoadmapTimeline>
          </RoadmapCard>
        </Main>

        <FloatingActions>
          <FloatingButton type="button" $tone="light" aria-label="공유하기">
            <i className="fa-solid fa-share-nodes" aria-hidden="true" />
          </FloatingButton>
          <FloatingButton type="button" $tone="primary" aria-label="다운로드">
            <i className="fa-solid fa-download" aria-hidden="true" />
          </FloatingButton>
        </FloatingActions>
      </Shell>
    </Page>
  )
}

export default PortfolioDiagnosisPage

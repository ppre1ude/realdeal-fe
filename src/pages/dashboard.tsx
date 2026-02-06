import {
  AddResume,
  AnalysisCard,
  AnalysisColumnTitle,
  AnalysisGrid,
  AnalysisHeader,
  AnalysisIcon,
  AnalysisItem,
  AnalysisList,
  AnalysisTitle,
  CompletionBar,
  CompletionRow,
  Content,
  ContentGrid,
  Keyword,
  KeywordRow,
  KeywordSection,
  KeywordTitle,
  LeftColumn,
  Main,
  Page,
  ProgressBar,
  ProgressFill,
  ResumeBadge,
  ResumeCard,
  ResumeIcon,
  ResumeMeta,
  ResumeRow,
  ResumeTag,
  ResumeTags,
  ResumeTitle,
  RightColumn,
  RoadmapBadge,
  RoadmapControlButton,
  RoadmapControls,
  RoadmapGlow,
  RoadmapHeaderLeft,
  RoadmapHeaderRow,
  RoadmapIcon,
  RoadmapLine,
  RoadmapSection,
  RoadmapStep,
  RoadmapStepCard,
  RoadmapStepDate,
  RoadmapStepDesc,
  RoadmapStepIcon,
  RoadmapStepTitle,
  RoadmapTimeline,
  RoadmapTitleText,
  SectionHeader,
  SectionLink,
  SectionLinkRoute,
  SectionTitle,
  Shell,
  StatCard,
  StatHint,
  StatLabel,
  StatSuffix,
  StatsGrid,
  StatValue,
  StatValueRow,
} from './dashboard.styles'

const DashboardPage = () => {
  return (
    <Page>
      <Shell>
        <Main>
          <Content>
            <StatsGrid>
              <StatCard>
                <StatLabel>종합 점수</StatLabel>
                <StatValueRow>
                  <StatValue>88</StatValue>
                  <StatSuffix>/ 100</StatSuffix>
                </StatValueRow>
                <ProgressBar>
                  <ProgressFill $value={88} />
                </ProgressBar>
              </StatCard>
              <StatCard>
                <StatLabel>직무 적합도</StatLabel>
                <StatValueRow>
                  <StatValue $tone="success">매우 높음</StatValue>
                </StatValueRow>
                <StatHint>상위 5% 이내의 핵심 역량 보유</StatHint>
              </StatCard>
              <StatCard>
                <StatLabel>이력서 완성도</StatLabel>
                <StatValueRow>
                  <StatValue>92%</StatValue>
                </StatValueRow>
                <CompletionRow>
                  <CompletionBar $active />
                  <CompletionBar $active />
                  <CompletionBar $active />
                  <CompletionBar />
                </CompletionRow>
              </StatCard>
              <StatCard>
                <StatLabel>키워드 매칭</StatLabel>
                <StatValueRow>
                  <StatValue>24개</StatValue>
                </StatValueRow>
                <StatHint>주요 기술 스택 및 경험 일치</StatHint>
              </StatCard>
            </StatsGrid>

            <ContentGrid>
              <LeftColumn>
                <SectionHeader>
                  <SectionTitle>분석 이력 목록</SectionTitle>
                  <SectionLink type="button">전체보기</SectionLink>
                </SectionHeader>

                <ResumeCard $active>
                  <ResumeBadge>CURRENT</ResumeBadge>
                  <ResumeRow>
                    <ResumeIcon $active>
                      <i className="fa-solid fa-file-pdf" aria-hidden="true" />
                    </ResumeIcon>
                    <div>
                      <ResumeTitle>시니어 프로덕트 디자이너_v2</ResumeTitle>
                      <ResumeMeta>2025.05.20 분석 완료</ResumeMeta>
                      <ResumeTags>
                        <ResumeTag $tone="success">점수 88</ResumeTag>
                        <ResumeTag $tone="success">적합도 최상</ResumeTag>
                      </ResumeTags>
                    </div>
                  </ResumeRow>
                </ResumeCard>

                <ResumeCard>
                  <ResumeRow>
                    <ResumeIcon>
                      <i className="fa-solid fa-file-pdf" aria-hidden="true" />
                    </ResumeIcon>
                    <div>
                      <ResumeTitle>프로덕트 디자이너_영문_v1</ResumeTitle>
                      <ResumeMeta>2025.05.15 분석 완료</ResumeMeta>
                      <ResumeTags>
                        <ResumeTag>점수 72</ResumeTag>
                        <ResumeTag>적합도 보통</ResumeTag>
                      </ResumeTags>
                    </div>
                  </ResumeRow>
                </ResumeCard>

                <ResumeCard>
                  <ResumeRow>
                    <ResumeIcon>
                      <i className="fa-solid fa-file-pdf" aria-hidden="true" />
                    </ResumeIcon>
                    <div>
                      <ResumeTitle>UIUX 디자이너_경력기술서</ResumeTitle>
                      <ResumeMeta>2025.04.28 분석 완료</ResumeMeta>
                      <ResumeTags>
                        <ResumeTag>점수 65</ResumeTag>
                      </ResumeTags>
                    </div>
                  </ResumeRow>
                </ResumeCard>

                <AddResume to="/resume-upload">
                  <i className="fa-solid fa-plus" aria-hidden="true" />
                  새로운 이력서 분석하기
                </AddResume>
              </LeftColumn>

              <RightColumn>
                <SectionHeader>
                  <SectionTitle>포트폴리오 진단</SectionTitle>
                  <SectionLinkRoute to="/portfolio-diagnosis">자세히보기</SectionLinkRoute>
                </SectionHeader>
                <AnalysisCard>
                  <AnalysisHeader>
                    <AnalysisTitle>AI 핵심 역량 진단</AnalysisTitle>
                    <AnalysisGrid>
                      <div>
                        <AnalysisColumnTitle>
                          <i className="fa-solid fa-star" aria-hidden="true" /> 강점 분석
                        </AnalysisColumnTitle>
                        <AnalysisList>
                          <AnalysisItem>
                            <AnalysisIcon>
                              <i className="fa-solid fa-check" aria-hidden="true" />
                            </AnalysisIcon>
                            데이터 기반의 의사결정 프로세스가 매우 구체적으로 기술되어 있습니다.
                          </AnalysisItem>
                          <AnalysisItem>
                            <AnalysisIcon>
                              <i className="fa-solid fa-check" aria-hidden="true" />
                            </AnalysisIcon>
                            디자인 시스템 구축 및 운영 경험이 대규모 서비스에 적합합니다.
                          </AnalysisItem>
                          <AnalysisItem>
                            <AnalysisIcon>
                              <i className="fa-solid fa-check" aria-hidden="true" />
                            </AnalysisIcon>
                            복잡한 B2B 솔루션의 UX 개선을 통한 성과 지표가 명확합니다.
                          </AnalysisItem>
                        </AnalysisList>
                      </div>
                      <div>
                        <AnalysisColumnTitle>
                          <i className="fa-solid fa-circle-exclamation" aria-hidden="true" /> 보완 제안
                        </AnalysisColumnTitle>
                        <AnalysisList>
                          <AnalysisItem>
                            <AnalysisIcon>
                              <i className="fa-solid fa-lightbulb" aria-hidden="true" />
                            </AnalysisIcon>
                            협업 툴(Figma, Jira 등) 활용 능력을 더 강조하면 팀워크 역량이 돋보일 수 있습니다.
                          </AnalysisItem>
                          <AnalysisItem>
                            <AnalysisIcon>
                              <i className="fa-solid fa-lightbulb" aria-hidden="true" />
                            </AnalysisIcon>
                            최근 트렌드인 AI 기반 디자인 툴 활용 사례를 추가해보세요.
                          </AnalysisItem>
                        </AnalysisList>
                      </div>
                    </AnalysisGrid>
                  </AnalysisHeader>
                  <KeywordSection>
                    <KeywordTitle>주요 키워드 일치도</KeywordTitle>
                    <KeywordRow>
                      <Keyword>#데이터_드리븐</Keyword>
                      <Keyword>#디자인_시스템</Keyword>
                      <Keyword>#UX_전략</Keyword>
                      <Keyword>#프로토타이핑</Keyword>
                      <Keyword>#사용자_리서치</Keyword>
                      <Keyword $muted>#React_기초</Keyword>
                      <Keyword $muted>#영어_비즈니스</Keyword>
                    </KeywordRow>
                  </KeywordSection>
                </AnalysisCard>

                <RoadmapSection>
                  <RoadmapHeaderRow>
                    <RoadmapHeaderLeft>
                      <RoadmapBadge>AI ROADMAP</RoadmapBadge>
                      <RoadmapTitleText>2025 커리어 성장 로드맵</RoadmapTitleText>
                    </RoadmapHeaderLeft>
                    <RoadmapControls>
                      <RoadmapControlButton type="button" aria-label="이전">
                        <i className="fa-solid fa-chevron-left" aria-hidden="true" />
                      </RoadmapControlButton>
                      <RoadmapControlButton type="button" aria-label="다음">
                        <i className="fa-solid fa-chevron-right" aria-hidden="true" />
                      </RoadmapControlButton>
                    </RoadmapControls>
                  </RoadmapHeaderRow>
                  <RoadmapTimeline>
                    <RoadmapLine />
                    <RoadmapStep>
                      <RoadmapStepIcon $active>
                        <i className="fa-solid fa-flag-checkered" aria-hidden="true" />
                      </RoadmapStepIcon>
                      <RoadmapStepCard>
                        <RoadmapStepDate $active>2025.05 (현재)</RoadmapStepDate>
                        <RoadmapStepTitle>역량 진단 및 전략 수립</RoadmapStepTitle>
                        <RoadmapStepDesc>
                          디자인 시스템 및 데이터 분석 강점 구체화
                        </RoadmapStepDesc>
                      </RoadmapStepCard>
                    </RoadmapStep>
                    <RoadmapStep>
                      <RoadmapStepIcon>
                        <i className="fa-solid fa-microchip" aria-hidden="true" />
                      </RoadmapStepIcon>
                      <RoadmapStepCard>
                        <RoadmapStepDate>2025.07</RoadmapStepDate>
                        <RoadmapStepTitle>DesignOps 마스터링</RoadmapStepTitle>
                        <RoadmapStepDesc>
                          AI 기반 디자인 자동화 툴 활용 사례 구축
                        </RoadmapStepDesc>
                      </RoadmapStepCard>
                    </RoadmapStep>
                    <RoadmapStep>
                      <RoadmapStepIcon>
                        <i className="fa-solid fa-briefcase" aria-hidden="true" />
                      </RoadmapStepIcon>
                      <RoadmapStepCard>
                        <RoadmapStepDate>2025.09</RoadmapStepDate>
                        <RoadmapStepTitle>포트폴리오 고도화</RoadmapStepTitle>
                        <RoadmapStepDesc>
                          대규모 트래픽 개선 성과 지표 시각화
                        </RoadmapStepDesc>
                      </RoadmapStepCard>
                    </RoadmapStep>
                    <RoadmapStep>
                      <RoadmapStepIcon>
                        <i className="fa-solid fa-rocket" aria-hidden="true" />
                      </RoadmapStepIcon>
                      <RoadmapStepCard>
                        <RoadmapStepDate>2025.11</RoadmapStepDate>
                        <RoadmapStepTitle>Top-tier 이직 도전</RoadmapStepTitle>
                        <RoadmapStepDesc>
                          리드 프로덕트 디자이너 포지션 지원
                        </RoadmapStepDesc>
                      </RoadmapStepCard>
                    </RoadmapStep>
                  </RoadmapTimeline>
                  <RoadmapGlow />
                  <RoadmapIcon>
                    <i className="fa-solid fa-calendar-days" aria-hidden="true" />
                  </RoadmapIcon>
                </RoadmapSection>
              </RightColumn>
            </ContentGrid>
          </Content>
        </Main>
      </Shell>
    </Page>
  )
}

export default DashboardPage

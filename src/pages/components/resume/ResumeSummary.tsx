import { ResumeSummaryContainer, ResumeSummaryHeader, ResumeSummaryIcon, ResumeSummaryTitle, HighlightGrid, HighlightCard, HighlightLabel, HighlightText, SummaryText } from './ResumeSummary.styles'

const ResumeSummary = () => {
  return (
    <ResumeSummaryContainer>
      <ResumeSummaryHeader>
        <ResumeSummaryIcon>
          <i className="fa-solid fa-sparkles"></i>
        </ResumeSummaryIcon>
        <ResumeSummaryTitle>이력서 하이라이트 (Summary)</ResumeSummaryTitle>
      </ResumeSummaryHeader>
      <HighlightGrid>
        <HighlightCard>
          <HighlightLabel>핵심 역량</HighlightLabel>
          <HighlightText>
            대규모 트래픽 최적화 경험 및 마이크로 프론트엔드 아키텍처 설계 역량 보유
          </HighlightText>
        </HighlightCard>
        <HighlightCard>
          <HighlightLabel>성과 지표</HighlightLabel>
          <HighlightText>
            이커머스 결제 페이지 전환율 15% 개선 및 웹 성능 라이트하우스 점수 90점대 유지
          </HighlightText>
        </HighlightCard>
      </HighlightGrid>
      <SummaryText>
        지원자 홍길동님은 기술적 깊이와 비즈니스 마인드를 동시에 갖춘 개발자입니다. 특히 복잡한 상태
        관리 라이브러리 활용 능력이 뛰어나며, 코드 리뷰를 통한 팀 전체의 기술 상향 평준화를 주도한
        경험이 돋보입니다.
      </SummaryText>
    </ResumeSummaryContainer>
  )
}

export default ResumeSummary

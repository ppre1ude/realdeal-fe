import {
  OverallEvaluationContainer,
  OverallEvaluationTitle,
  OverallEvaluationContent,
  ScoreCircle,
  ScoreValue,
  ScoreLabel,
  ScoreDescription,
  ScoreDetails,
  ScoreDetailItem,
  ScoreDetailLabel,
  ScoreDetailValue,
  ScoreBar,
  ScoreBarFill,
} from './OverallEvaluation.styles'

const OverallEvaluation = () => {
  return (
    <OverallEvaluationContainer>
      <OverallEvaluationTitle>종합 평가 점수</OverallEvaluationTitle>
      <OverallEvaluationContent>
        <ScoreCircle>
          <ScoreValue>92</ScoreValue>
        </ScoreCircle>
        <ScoreLabel>매우 추천 (High Match)</ScoreLabel>
        <ScoreDescription>
          우리 회사의 기술적 요구사항을 100% 충족하며,
          <br />
          조직 문화 적합도 또한 매우 높게 분석되었습니다.
        </ScoreDescription>
      </OverallEvaluationContent>
      <ScoreDetails>
        <ScoreDetailItem>
          <ScoreDetailLabel>기술 스택 일치도</ScoreDetailLabel>
          <ScoreDetailValue>98%</ScoreDetailValue>
        </ScoreDetailItem>
        <ScoreBar>
          <ScoreBarFill $width={98} />
        </ScoreBar>
        <ScoreDetailItem>
          <ScoreDetailLabel>조직 문화 적합도</ScoreDetailLabel>
          <ScoreDetailValue>85%</ScoreDetailValue>
        </ScoreDetailItem>
        <ScoreBar>
          <ScoreBarFill $width={85} />
        </ScoreBar>
      </ScoreDetails>
    </OverallEvaluationContainer>
  )
}

export default OverallEvaluation

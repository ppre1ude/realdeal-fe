import styled from 'styled-components'

export const OverallEvaluationContainer = styled.section`
  background: #1a1c1e;
  padding: 32px;
  border-radius: 24px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  color: white;
`

export const OverallEvaluationTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 32px;
`

export const OverallEvaluationContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
`

export const ScoreCircle = styled.div`
  width: 192px;
  height: 192px;
  border-radius: 50%;
  border: 12px solid #add94e;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`

export const ScoreValue = styled.span`
  font-size: 60px;
  font-weight: 900;
`

export const ScoreLabel = styled.p`
  color: #add94e;
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 8px;
`

export const ScoreDescription = styled.p`
  color: #adb5bd;
  text-align: center;
  font-size: 14px;
  line-height: 1.6;
`

export const ScoreDetails = styled.div`
  margin-top: 32px;
  padding-top: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const ScoreDetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ScoreDetailLabel = styled.span`
  font-size: 14px;
  color: #adb5bd;
`

export const ScoreDetailValue = styled.span`
  font-weight: 700;
`

export const ScoreBar = styled.div`
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 9999px;
  overflow: hidden;
`

export const ScoreBarFill = styled.div<{ $width: number }>`
  width: ${(props) => props.$width}%;
  height: 100%;
  background: #add94e;
`

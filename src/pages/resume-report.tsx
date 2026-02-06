import CandidateProfile from './components/resume/CandidateProfile'
import DetailedFeedback from './components/resume/DetailedFeedback'
import EvaluationTags from './components/resume/EvaluationTags'
import InterviewQuestions from './components/resume/InterviewQuestions'
import OverallEvaluation from './components/resume/OverallEvaluation'
import PersonalityMatching from './components/resume/PersonalityMatching'
import ResumeFooter from './components/resume/ResumeFooter'
import ResumeHeader from './components/resume/ResumeHeader'
import ResumeSummary from './components/resume/ResumeSummary'
import { ContentGrid, LeftColumn, MainContent, PageContainer, RightColumn } from './resume-report.styles'

const ResumeReportPage = () => {
  return (
    <PageContainer>
      <ResumeHeader />
      <MainContent>
        <CandidateProfile />
        <ContentGrid>
          <LeftColumn>
            <ResumeSummary />
            <EvaluationTags />
            <PersonalityMatching />
          </LeftColumn>
          <RightColumn>
            <OverallEvaluation />
            <DetailedFeedback />
            <InterviewQuestions />
          </RightColumn>
        </ContentGrid>
      </MainContent>
      <ResumeFooter />
    </PageContainer>
  )
}

export default ResumeReportPage

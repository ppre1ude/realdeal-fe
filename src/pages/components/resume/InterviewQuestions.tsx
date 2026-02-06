import {
  InterviewQuestionsContainer,
  InterviewQuestionsTitle,
  QuestionsList,
  QuestionCard,
} from './InterviewQuestions.styles'

const InterviewQuestions = () => {
  const questions = [
    '이전 프로젝트에서 가장 해결하기 어려웠던 기술적 난관은 무엇이었나요?',
    '팀 내 의견 충돌이 발생했을 때 본인만의 조율 방식이 있나요?',
  ]

  return (
    <InterviewQuestionsContainer>
      <InterviewQuestionsTitle>추천 면접 질문</InterviewQuestionsTitle>
      <QuestionsList>
        {questions.map((question, index) => (
          <QuestionCard key={index}>{question}</QuestionCard>
        ))}
      </QuestionsList>
    </InterviewQuestionsContainer>
  )
}

export default InterviewQuestions

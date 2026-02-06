import {
  DetailedFeedbackContainer,
  DetailedFeedbackTitle,
  FeedbackList,
  FeedbackItem,
  FeedbackIcon,
  FeedbackText,
} from './DetailedFeedback.styles'

const DetailedFeedback = () => {
  const feedbacks = [
    {
      icon: 'fa-circle-check',
      color: '#add94e',
      text: '복잡한 비즈니스 로직을 효율적인 코드로 변환하는 능력이 탁월함.',
    },
    {
      icon: 'fa-circle-check',
      color: '#add94e',
      text: '주니어 개발자 멘토링 경험이 풍부하여 팀 성장에 기여할 가능성 높음.',
    },
    {
      icon: 'fa-circle-exclamation',
      color: '#ffc107',
      text: '최근 1년간의 백엔드 협업 경험에 대한 추가 질문 권장.',
    },
  ]

  return (
    <DetailedFeedbackContainer>
      <DetailedFeedbackTitle>AI 상세 피드백</DetailedFeedbackTitle>
      <FeedbackList>
        {feedbacks.map((feedback, index) => (
          <FeedbackItem key={index}>
            <FeedbackIcon $color={feedback.color}>
              <i className={`fa-solid ${feedback.icon}`}></i>
            </FeedbackIcon>
            <FeedbackText>{feedback.text}</FeedbackText>
          </FeedbackItem>
        ))}
      </FeedbackList>
    </DetailedFeedbackContainer>
  )
}

export default DetailedFeedback

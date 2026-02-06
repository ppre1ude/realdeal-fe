import { EvaluationTagsContainer, EvaluationTagsHeader, EvaluationTagsIcon, EvaluationTagsTitle, TagsContainer, Tag } from './EvaluationTags.styles'

const EvaluationTags = () => {
  const tags = [
    { text: '문제해결력_상', isPositive: true },
    { text: '기술적_리더십', isPositive: true },
    { text: '도메인_이해력_우수', isPositive: true },
    { text: '애자일_최적화', isPositive: true },
    { text: '커뮤니케이션_원활', isPositive: true },
    { text: '신규사업_경험부족', isPositive: false },
  ]

  return (
    <EvaluationTagsContainer>
      <EvaluationTagsHeader>
        <EvaluationTagsIcon>
          <i className="fa-solid fa-tags"></i>
        </EvaluationTagsIcon>
        <EvaluationTagsTitle>정형화 분석 태그</EvaluationTagsTitle>
      </EvaluationTagsHeader>
      <TagsContainer>
        {tags.map((tag, index) => (
          <Tag key={index} $isPositive={tag.isPositive}>
            #{tag.text}
          </Tag>
        ))}
      </TagsContainer>
    </EvaluationTagsContainer>
  )
}

export default EvaluationTags

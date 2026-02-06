import {
  PersonalityMatchingContainer,
  PersonalityCard,
  PersonalityCardHeader,
  PersonalityCardTitle,
  PersonalityCardBadge,
  PersonalityCardContent,
  PersonalityImage,
  PersonalityName,
  PersonalityDescription,
} from './PersonalityMatching.styles'

const PersonalityMatching = () => {
  return (
    <PersonalityMatchingContainer>
      <PersonalityCard>
        <PersonalityCardHeader>
          <PersonalityCardTitle>지원자 성격 유형</PersonalityCardTitle>
          <PersonalityCardBadge $variant="analysis">분석 기반</PersonalityCardBadge>
        </PersonalityCardHeader>
        <PersonalityCardContent>
          <PersonalityImage
            src="https://gmcnqdpighpxhzpesqwf.supabase.co/storage/v1/object/public/generated-images/image-f1a1952a-282d-4f7e-b911-448bfe84a57a.jpg"
            alt="Abstract geometric shape representing an innovative personality type in green and white colors"
          />
          <PersonalityName>철저한 혁신가형</PersonalityName>
          <PersonalityDescription>
            데이터를 기반으로 논리적인 결론을 도출하며, 효율적인 프로세스 구축에 열정을 보입니다.
          </PersonalityDescription>
        </PersonalityCardContent>
      </PersonalityCard>
      <PersonalityCard>
        <PersonalityCardHeader>
          <PersonalityCardTitle>우리 회사 인재상</PersonalityCardTitle>
          <PersonalityCardBadge $variant="standard">설정된 기준</PersonalityCardBadge>
        </PersonalityCardHeader>
        <PersonalityCardContent>
          <PersonalityImage
            src="https://gmcnqdpighpxhzpesqwf.supabase.co/storage/v1/object/public/generated-images/image-ca34e087-ab7f-4d1c-ad67-5e79541ded95.jpg"
            alt="Abstract geometric shape representing a growth-oriented company culture in green and grey colors"
          />
          <PersonalityName>도전적 성장형</PersonalityName>
          <PersonalityDescription>
            빠른 실행력을 바탕으로 실패를 두려워하지 않고 지속적인 성장을 추구하는 인재를 선호합니다.
          </PersonalityDescription>
        </PersonalityCardContent>
      </PersonalityCard>
    </PersonalityMatchingContainer>
  )
}

export default PersonalityMatching

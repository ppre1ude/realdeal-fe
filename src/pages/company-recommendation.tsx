import {
  BookmarkButton,
  CompanyBody,
  CompanyCard,
  CompanyDesc,
  CompanyGrid,
  CompanyHeader,
  CompanyImage,
  CompanyImageWrap,
  CompanyInfo,
  CompanyLogo,
  CompanyLogoImage,
  CompanyName,
  Deadline,
  DetailButton,
  FilterButton,
  FilterGroup,
  FilterSection,
  Hero,
  HeroContent,
  HeroHighlight,
  HeroImage,
  HeroImageWrap,
  HeroSubtitle,
  HeroText,
  HeroTitle,
  Main,
  MetaList,
  MetaRow,
  MoreButton,
  MoreButtonWrap,
  Page,
  Shell,
  SortControl,
  Tag,
  TagRow,
} from './company-recommendation.styles'

type CompanyItem = {
  name: string
  description: string
  tags: string[]
  hiring: string
  salary: string
  deadline: string
  deadlineAccent?: boolean
  imageUrl: string
  logoUrl: string
  bookmarked?: boolean
}

const FILTERS = ['전체', 'IT/기술', '금융', '제조/엔지니어링', '서비스/유통'] as const

const COMPANIES: CompanyItem[] = [
  {
    name: '넥스트 테크놀로지',
    description: '인공지능 솔루션 및 클라우드',
    tags: ['#복지좋음', '#신입환영', '#자유로운연차'],
    hiring: '00명 채용 중',
    salary: '4,200 ~ 6,500',
    deadline: '2025.06.15',
    deadlineAccent: true,
    imageUrl:
      'https://gmcnqdpighpxhzpesqwf.supabase.co/storage/v1/object/public/generated-images/image-90bd8418-af9e-4463-b3c1-37c6b78acca1.jpg',
    logoUrl:
      'https://gmcnqdpighpxhzpesqwf.supabase.co/storage/v1/object/public/generated-images/image-bd40bff5-bf41-419a-aa2b-5cd9ba33c602.jpg',
  },
  {
    name: '루시드 소프트',
    description: '핀테크 기반 자산관리 서비스',
    tags: ['#돈많이줌', '#경력필수', '#점심제공'],
    hiring: '05명 채용 중',
    salary: '5,500 ~ 9,000',
    deadline: '2025.07.20',
    imageUrl:
      'https://gmcnqdpighpxhzpesqwf.supabase.co/storage/v1/object/public/generated-images/image-1b2e14e9-d380-42ea-b0e4-c6f6dc53512e.jpg',
    logoUrl:
      'https://gmcnqdpighpxhzpesqwf.supabase.co/storage/v1/object/public/generated-images/image-fcc29775-2b3b-4a4b-9533-a85bbc6f5cc8.jpg',
    bookmarked: true,
  },
  {
    name: '그린 마인드',
    description: '에너지 효율 컨설팅 전문',
    tags: ['#사람좋음', '#워라밸최고', '#수평적문화'],
    hiring: '02명 채용 중',
    salary: '3,800 ~ 5,200',
    deadline: '상시 채용',
    imageUrl:
      'https://gmcnqdpighpxhzpesqwf.supabase.co/storage/v1/object/public/generated-images/image-dde506e8-004e-4d9b-b630-77388edc1f26.jpg',
    logoUrl:
      'https://gmcnqdpighpxhzpesqwf.supabase.co/storage/v1/object/public/generated-images/image-33a7a584-b89b-4f79-beb0-ada34b742db4.jpg',
  },
  {
    name: '에이아이 랩',
    description: '차세대 로보틱스 연구소',
    tags: ['#돈많이줌', '#성장가능성', '#석박사우대'],
    hiring: '12명 채용 중',
    salary: '6,000 ~ 12,000',
    deadline: '2025.06.30',
    deadlineAccent: true,
    imageUrl:
      'https://gmcnqdpighpxhzpesqwf.supabase.co/storage/v1/object/public/generated-images/image-683e981a-c9ca-4478-a24c-87da555078f2.jpg',
    logoUrl:
      'https://gmcnqdpighpxhzpesqwf.supabase.co/storage/v1/object/public/generated-images/image-db8c4060-9a07-496f-b8e1-627d2349ce29.jpg',
  },
  {
    name: '블루 커머스',
    description: '글로벌 이커머스 플랫폼',
    tags: ['#복지좋음', '#재택근무', '#영어사용'],
    hiring: '08명 채용 중',
    salary: '4,500 ~ 7,500',
    deadline: '2025.08.10',
    imageUrl:
      'https://gmcnqdpighpxhzpesqwf.supabase.co/storage/v1/object/public/generated-images/image-68833cfc-9ffc-4604-ad28-d5250fd5f4e2.jpg',
    logoUrl:
      'https://gmcnqdpighpxhzpesqwf.supabase.co/storage/v1/object/public/generated-images/image-17983982-843a-4926-82c2-9c30ca5df4cf.jpg',
  },
  {
    name: '스마트 로직스',
    description: '지능형 물류 시스템 구축',
    tags: ['#신입환영', '#장기근속우대', '#기숙사제공'],
    hiring: '20명 채용 중',
    salary: '3,500 ~ 5,000',
    deadline: 'D-3',
    deadlineAccent: true,
    imageUrl:
      'https://gmcnqdpighpxhzpesqwf.supabase.co/storage/v1/object/public/generated-images/image-e0027d1c-be7b-4543-a823-e3a384eac3e3.jpg',
    logoUrl:
      'https://gmcnqdpighpxhzpesqwf.supabase.co/storage/v1/object/public/generated-images/image-aa79d5f4-5aff-4266-a0a0-f9f8819ae8f7.jpg',
  },
]

const CompanyRecommendationPage = () => {
  return (
    <Page>
      <Shell>
        <Hero>
          <HeroContent>
            <HeroText>
              <HeroTitle>
                나의 커리어를 성장시킬
                <br />
                <HeroHighlight>최적의 기업</HeroHighlight>을 찾아보세요
              </HeroTitle>
              <HeroSubtitle>2025.05 기준 12,482개의 기업 정보가 업데이트 되었습니다.</HeroSubtitle>
            </HeroText>
            <HeroImageWrap>
              <HeroImage
                src="https://gmcnqdpighpxhzpesqwf.supabase.co/storage/v1/object/public/generated-images/image-8f8ff61a-9f51-4a29-8efc-4be5edc24e83.jpg"
                alt="자연광이 들어오는 현대적인 오피스"
              />
            </HeroImageWrap>
          </HeroContent>
        </Hero>

        <Main>
          <FilterSection>
            <FilterGroup>
              {FILTERS.map((filter, index) => (
                <FilterButton key={filter} $active={index === 0}>
                  {filter}
                </FilterButton>
              ))}
            </FilterGroup>
            <SortControl type="button">
              <span>추천순</span>
              <i className="fa-solid fa-chevron-down" aria-hidden="true" />
            </SortControl>
          </FilterSection>

          <CompanyGrid>
            {COMPANIES.map((company) => (
              <CompanyCard key={company.name}>
                <CompanyImageWrap>
                  <CompanyImage src={company.imageUrl} alt={`${company.name} 오피스`} />
                  <BookmarkButton type="button" $active={company.bookmarked}>
                    <i
                      className={company.bookmarked ? 'fa-solid fa-bookmark' : 'fa-regular fa-bookmark'}
                      aria-hidden="true"
                    />
                  </BookmarkButton>
                </CompanyImageWrap>
                <CompanyBody>
                  <CompanyHeader>
                    <CompanyInfo>
                      <CompanyName>{company.name}</CompanyName>
                      <CompanyDesc>{company.description}</CompanyDesc>
                    </CompanyInfo>
                    <CompanyLogo>
                      <CompanyLogoImage src={company.logoUrl} alt={`${company.name} 로고`} />
                    </CompanyLogo>
                  </CompanyHeader>
                  <TagRow>
                    {company.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </TagRow>
                  <MetaList>
                    <MetaRow>
                      채용 인원 <span>{company.hiring}</span>
                    </MetaRow>
                    <MetaRow>
                      예상 연봉 <span>{company.salary}</span>
                    </MetaRow>
                    <MetaRow>
                      마감 기한 <Deadline $accent={company.deadlineAccent}>{company.deadline}</Deadline>
                    </MetaRow>
                  </MetaList>
                  <DetailButton type="button">공고 상세보기</DetailButton>
                </CompanyBody>
              </CompanyCard>
            ))}
          </CompanyGrid>

          <MoreButtonWrap>
            <MoreButton type="button">
              기업 더보기 <i className="fa-solid fa-chevron-down" aria-hidden="true" />
            </MoreButton>
          </MoreButtonWrap>
        </Main>
      </Shell>
    </Page>
  )
}

export default CompanyRecommendationPage

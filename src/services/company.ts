import { axiosInstance } from './axiosInstance'

// 기업 관련 타입 정의

/**
 * 기업 검색 요청
 * GET /companies/search?query={query}
 */
export interface SearchCompaniesRequest {
  query: string
}

/**
 * 기업 응답 (서버에서 받는 데이터)
 * 실제 응답 구조는 API 테스트 후 업데이트 필요
 */
export interface CompanyResponse {
  id: string
  name?: string
  description?: string
  industry?: string
  location?: string
  hashtags?: string[]
  [key: string]: unknown // 추가 필드 대응
}

/**
 * 기업 목록 응답
 */
export type CompanyListResponse = CompanyResponse[]

/**
 * 기업 해시태그 추가 요청
 * POST /companies/{id}/hashtags
 */
export interface AddHashtagsRequest {
  hashtags: string[] // 예: ["#기술", "#스타트업"]
}

/**
 * 기업 해시태그 추가 응답
 * POST /companies/{id}/hashtags
 */
export interface AddHashtagsResponse {
  hashtags: string[]
}

/**
 * 기업 검색
 * GET /companies/search?query={query}
 * Query Parameter: query (required)
 * Response: 200
 */
export const searchCompanies = async (
  query: string
): Promise<CompanyListResponse> => {
  const response = await axiosInstance.get<CompanyListResponse>(
    '/companies/search',
    {
      params: { query },
    }
  )
  return response.data
}

/**
 * 기업 추천 목록 조회
 * GET /companies/recommendations
 * Response: 200
 */
export const getCompanyRecommendations =
  async (): Promise<CompanyListResponse> => {
    const response = await axiosInstance.get<CompanyListResponse>(
      '/companies/recommendations'
    )
    return response.data
  }

/**
 * 기업 해시태그 추가
 * POST /companies/{id}/hashtags
 * Path Parameter: id (required)
 * Body: { hashtags: string[] }
 * Response: 201
 */
export const addCompanyHashtags = async (
  id: string,
  data: AddHashtagsRequest
): Promise<AddHashtagsResponse> => {
  const response = await axiosInstance.post<AddHashtagsResponse>(
    `/companies/${id}/hashtags`,
    data
  )
  return response.data
}

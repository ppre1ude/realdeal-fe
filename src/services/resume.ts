import { axiosInstance } from './axiosInstance'

// 이력서 관련 타입 정의

/**
 * 이력서 생성 요청
 * POST /resumes
 */
export interface CreateResumeRequest {
  title: string
  content: string
}

/**
 * 이력서 업로드 요청
 * POST /resumes/upload
 * FormData로 파일 업로드
 */
export interface UploadResumeRequest {
  file: File
}

/**
 * 이력서 응답 (서버에서 받는 데이터)
 * 실제 응답 구조는 API 테스트 후 업데이트 필요
 */
export interface ResumeResponse {
  id: string
  title?: string
  content?: string
  userId?: string
  createdAt?: string
  updatedAt?: string
  [key: string]: unknown // 추가 필드 대응
}

/**
 * 이력서 목록 응답
 */
export type ResumeListResponse = ResumeResponse[]

/**
 * 이력서 목록 조회
 * GET /resumes
 * Response: 200
 */
export const getResumes = async (): Promise<ResumeListResponse> => {
  const response = await axiosInstance.get<ResumeListResponse>('/resumes')
  return response.data
}

/**
 * 이력서 생성
 * POST /resumes
 * Body: { title: string, content: string }
 * Response: 201
 */
export const createResume = async (
  data: CreateResumeRequest
): Promise<ResumeResponse> => {
  const response = await axiosInstance.post<ResumeResponse>('/resumes', data)
  return response.data
}

/**
 * 특정 이력서 조회
 * GET /resumes/{id}
 * Response: 200
 */
export const getResumeById = async (id: string): Promise<ResumeResponse> => {
  const response = await axiosInstance.get<ResumeResponse>(`/resumes/${id}`)
  return response.data
}

/**
 * 이력서 파일 업로드
 * POST /resumes/upload
 * FormData로 파일 전송
 * Response: 201
 */
export const uploadResume = async (
  file: File
): Promise<ResumeResponse> => {
  const formData = new FormData()
  formData.append('file', file)

  const response = await axiosInstance.post<ResumeResponse>(
    '/resumes/upload',
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  )
  return response.data
}

/**
 * 이력서 분석
 * POST /resumes/{id}/analyze
 * Response: 201
 */
export const analyzeResume = async (id: string): Promise<ResumeResponse> => {
  const response = await axiosInstance.post<ResumeResponse>(
    `/resumes/${id}/analyze`
  )
  return response.data
}

/**
 * 이력서 정규화
 * POST /resumes/{id}/normalize
 * Response: 201
 */
export const normalizeResume = async (id: string): Promise<ResumeResponse> => {
  const response = await axiosInstance.post<ResumeResponse>(
    `/resumes/${id}/normalize`
  )
  return response.data
}

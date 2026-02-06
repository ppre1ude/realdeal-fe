import { axiosInstance } from './axiosInstance'

// 프로필 관련 타입 정의
export interface ProfilePayload {
  name: string
  role: string
  skills: string[]
  experienceYears: number
}

export interface UpdateProfileRequest {
  payload: ProfilePayload
}

export interface ProfileResponse {
  id: string
  userId: string
  payload: ProfilePayload
  createdAt: string
  updatedAt: string
}

/**
 * 현재 사용자 프로필 조회
 * GET /profiles/me
 * Response: 200
 */
export const getProfile = async (): Promise<ProfileResponse> => {
  const response = await axiosInstance.get<ProfileResponse>('/profiles/me')
  return response.data
}

/**
 * 현재 사용자 프로필 업데이트
 * PUT /profiles/me
 * Body: { payload: { name, role, skills, experienceYears } }
 * Response: 200
 */
export const updateProfile = async (
  data: UpdateProfileRequest
): Promise<ProfileResponse> => {
  const response = await axiosInstance.put<ProfileResponse>(
    '/profiles/me',
    data
  )
  return response.data
}

/**
 * 프로필 업데이트 (편의 함수)
 * payload 객체만 전달하면 자동으로 래핑
 */
export const updateProfilePayload = async (
  payload: ProfilePayload
): Promise<ProfileResponse> => {
  return updateProfile({ payload })
}

import { axiosInstance } from './axiosInstance'

// 인증 관련 타입 정의
export interface SignupRequest {
  email: string
  password: string
}

export interface LoginRequest {
  email: string
  password: string
}

/**
 * 사용자 정보
 */
export interface UserInfo {
  id: string
  email: string
}

/**
 * 인증 응답 (signup/login)
 */
export interface AuthResponse {
  accessToken: string
  refreshToken: string
  user: UserInfo
}

/**
 * 현재 사용자 정보 응답 (/auth/me)
 */
export interface CurrentUserResponse {
  user: UserInfo
}

/**
 * 회원가입
 * POST /auth/signup
 * Body: { email: string, password: string }
 * Response: 201
 */
export const signup = async (data: SignupRequest): Promise<AuthResponse> => {
  const response = await axiosInstance.post<AuthResponse>('/auth/signup', data)
  return response.data
}

/**
 * 로그인
 * POST /auth/login
 * Body: { email: string, password: string }
 * Response: 201
 */
export const login = async (data: LoginRequest): Promise<AuthResponse> => {
  const response = await axiosInstance.post<AuthResponse>('/auth/login', data)
  return response.data
}

/**
 * 현재 인증된 사용자 정보 조회
 * GET /auth/me
 * Response: 200
 */
export const getCurrentUser = async (): Promise<CurrentUserResponse> => {
  const response = await axiosInstance.get<CurrentUserResponse>('/auth/me')
  return response.data
}

/**
 * 로그아웃 (토큰 제거)
 */
export const logout = (): void => {
  localStorage.removeItem('accessToken')
}

/**
 * 토큰 존재 여부 확인
 */
export const isAuthenticated = (): boolean => {
  return !!localStorage.getItem('accessToken')
}

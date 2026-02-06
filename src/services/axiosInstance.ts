import axios from 'axios'

// .env 파일에서 API Base URL 가져오기
const BASE_URL = import.meta.env.VITE_API_BASE_URL

if (!BASE_URL) {
  console.warn('VITE_API_BASE_URL이 설정되지 않았습니다. `.env` 파일을 확인하세요.')
}

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // 쿠키 기반 인증을 위한 설정
})

// 요청 인터셉터 - 토큰 자동 추가
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 응답 인터셉터 - 에러 처리
axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    // 401 Unauthorized - 토큰 만료 시 처리
    if (error.response?.status === 401) {
      localStorage.removeItem('accessToken')
      // 필요시 로그인 페이지로 리다이렉트
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

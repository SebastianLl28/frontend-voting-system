import { baseUrl } from '@/api/api'
import { InternalAxiosRequestConfig } from 'axios'

export const AxiosBearerInterceptor = () => {
  baseUrl.interceptors.request.use((request: InternalAxiosRequestConfig) => {
    request.headers.Authorization = `Bearer ${localStorage.getItem('token') || ''}`
    return request
  })
}

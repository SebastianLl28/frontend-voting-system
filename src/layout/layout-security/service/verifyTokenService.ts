import { baseUrl } from '@api/api'

interface IResponse {
  message: string
}
export const getVerifyToken = async () => {
  return await baseUrl.get<IResponse>('/auth/verify')
}

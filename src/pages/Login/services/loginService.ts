import { baseUrl } from '@/api/api'

interface ILogin {
  email: string
  password: string
}

interface IResponse {
  token: string
  message: string
}

export const postLoginService = async (credentials: ILogin) => {
  const { data } = await baseUrl.post<IResponse>('/auth/login', credentials)
  return data
}

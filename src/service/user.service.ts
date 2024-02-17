import { AxiosError, AxiosResponse } from 'axios'
import { baseUrl } from '../api/api'
import { RegisterSchema } from '../pages/Register/schema/registerSchema'

interface ICreate {
  message: string
}

export const postCreateUser = async (user: RegisterSchema) => {
  try {
    return await baseUrl.post<ICreate>('/user', { ...user })
  } catch (error) {
    const errorAxios = error as AxiosError
    return errorAxios.response as AxiosResponse<ICreate>
  }
}

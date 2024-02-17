import { useMutation } from '@tanstack/react-query'
import { RegisterSchema } from '../pages/Register/schema/registerSchema'
import { postCreateUser } from '../service/user.service'

export const useRegisterUser = () =>
  useMutation({
    mutationKey: ['createUser'],
    mutationFn: (data: RegisterSchema) => postCreateUser(data)
  })

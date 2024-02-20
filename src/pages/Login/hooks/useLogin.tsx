import { useMutation } from '@tanstack/react-query'
import { postLoginService } from '../services/loginService'
import { toast } from 'react-toastify'
import { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
import { APP } from '@/router'

interface IError {
  message: string
}

export const useLogin = () => {
  const navigate = useNavigate()

  const mutation = useMutation({
    mutationFn: postLoginService,
    onSuccess: data => {
      localStorage.setItem('token', data.token)
      toast.success(data.message)
      navigate(APP.DASHBOARD, { replace: true })
    },
    onError: error => {
      const err = error as AxiosError<IError>
      toast.error(err.response?.data.message)
    }
  })

  return mutation
}

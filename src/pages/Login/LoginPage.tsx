import { useVerifyToken } from '@/layout/layout-security/hook/useVerifyToken'
import FormLogin from './components/FormLogin'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const { isSuccess, isLoading } = useVerifyToken()

  const navigate = useNavigate()

  useEffect(() => {
    if (isSuccess) {
      navigate('/app/dashboard')
    }
  }, [navigate, isSuccess])

  return (
    <main className='flex-center h-[calc(100dvh-81px)] w-full'>
      {isLoading && <div>Loading...</div>}
      {!isLoading && !isSuccess && <FormLogin />}
    </main>
  )
}

export default LoginPage

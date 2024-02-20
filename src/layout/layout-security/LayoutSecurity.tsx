// import { AUTH } from '@/router'
import { Navigate, Outlet } from 'react-router-dom'
import { useVerifyToken } from './hook/useVerifyToken'
import { AxiosBearerInterceptor } from '@/interceptors/axiosBearerInterceptor'
import { AUTH } from '@/router'

AxiosBearerInterceptor()

const LayoutSecurity = () => {
  const { isLoading, isError, isSuccess } = useVerifyToken()

  if (!localStorage.getItem('token')) {
    return <Navigate to={AUTH.LOGIN} />
  }

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error</div>}
      {isSuccess && <Outlet />}
    </>
  )
}

export default LayoutSecurity

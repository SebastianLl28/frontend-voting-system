import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Loader from './shared/loader/Loader'

const LoginPage = lazy(() => import('./pages/Login/LoginPage'))
const RegisterPage = lazy(() => import('./pages/Register/RegisterPage'))
const HomePage = lazy(() => import('./pages/home/HomePage'))
const NotFoundPage = lazy(() => import('./pages/404/NotFoundPage'))

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App

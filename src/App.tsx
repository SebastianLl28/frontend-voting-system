import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Loader from './shared/loader/Loader'
import { ToastContainer, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const LoginPage = lazy(() => import('./pages/Login/LoginPage'))
const RegisterPage = lazy(() => import('./pages/Register/RegisterPage'))
const HomePage = lazy(() => import('./pages/home/HomePage'))
const NotFoundPage = lazy(() => import('./pages/404/NotFoundPage'))
const DashboardPage = lazy(() => import('./pages/dashboard/DashboardPage'))
import Header from '@shared/header/Header'
import { APP } from './router'
import LayoutSecurity from './layout/layout-security/LayoutSecurity'
import LayoutApp from './layout/layout-app/LayoutApp'

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/*' element={<NotFoundPage />} />

          <Route element={<LayoutSecurity />}>
            <Route element={<LayoutApp />}>
              <Route path={APP.DASHBOARD} element={<DashboardPage />} />
            </Route>
          </Route>
        </Routes>
        <ToastContainer
          position='bottom-center'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          theme='light'
          transition={Bounce}
          draggable
        />
      </Suspense>
    </BrowserRouter>
  )
}

export default App

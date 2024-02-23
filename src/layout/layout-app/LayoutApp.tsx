import Asidebar from '@/shared/asidebar/Asidebar'
import { Outlet } from 'react-router-dom'

const LayoutApp = () => {
  return (
    <main className='grid min-h-[calc(100dvh-81px)] grid-cols-[auto,1fr] '>
      <Asidebar />
      <Outlet />
    </main>
  )
}

export default LayoutApp

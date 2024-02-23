import { SlLogout } from 'react-icons/sl'
import { PiUserCircleLight } from 'react-icons/pi'

export const footerElement = [
  {
    title: 'Perfil',
    link: '/app/dashboard',
    icon: <PiUserCircleLight />
  },
  {
    title: 'Cerrar Sesión',
    link: '/app/dashboard',
    icon: <SlLogout />
  }
]

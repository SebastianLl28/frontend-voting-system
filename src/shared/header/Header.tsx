import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import { useRef, useState } from 'react'
import Cta from '@/components/ui/Cta'
import Logo from '@assets/logo.webp'

const Header = () => {
  const [active, setActive] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-white'>
      <div className='container mx-auto grid grid-cols-2 items-center md:grid-cols-3'>
        <div className='justify-self-start'>
          <Link to='/'>
            <img src={Logo} alt='logo' className='w-20' />
          </Link>
        </div>
        <div>
          <div className='h-full w-full'>
            <div
              className={`relative mx-auto flex items-center transition-all duration-500 ${active ? 'w-full' : 'w-11/12'}`}
            >
              <input
                type='text'
                className='w-full rounded border px-2 py-2'
                ref={inputRef}
                onFocus={() => setActive(true)}
                onBlur={() => setActive(false)}
              />
              <FaSearch className='absolute right-3' />
            </div>
          </div>
        </div>
        <div className='hidden justify-self-end md:inline-block'>
          <ul className='flex gap-3'>
            <li>
              <Cta to='/login'>Login</Cta>
            </li>
            <li>
              <Cta to='/register'>Registrarse</Cta>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header

import { cn } from '@/helpers/cn'
import { Link } from 'react-router-dom'

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  to: string
}

const Cta = ({ children, to, className }: Props) => {
  return (
    <Link
      className={cn(
        'bg-primary-800 hover:bg-primary-700 inline-block rounded-md px-4 py-2 text-white duration-100',
        className
      )}
      to={to}
    >
      {children}
    </Link>
  )
}

export default Cta

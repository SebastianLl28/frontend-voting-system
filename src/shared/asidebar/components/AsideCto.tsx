import { Link } from 'react-router-dom'

interface IAsideCtoProps {
  title: string
  link: string
  icon: JSX.Element
}
const AsideCto = ({ title, icon, link }: IAsideCtoProps) => {
  return (
    <Link to={link} className='flex items-center gap-4 px-4 text-xl'>
      {icon}
      <span>{title}</span>
    </Link>
  )
}

export default AsideCto

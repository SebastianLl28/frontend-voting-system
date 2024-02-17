interface IProps {
  title: string
  description: string
}

const Difference = ({ title, description }: IProps) => {
  return (
    <div className='flex max-w-md flex-col items-center space-y-2'>
      <div className='bg-primary-800 size-24 rounded-full'></div>
      <h3 className='text-center font-title text-3xl'>{title}</h3>
      <p className='text-center text-gray-500'>{description}</p>
    </div>
  )
}

export default Difference

import { IoIosArrowDown } from 'react-icons/io'
import HeroSvg from '@assets/hero.svg'
import Cta from '@/components/ui/Cta'

const Hero = () => {
  return (
    <section className='xl:py-22 relative flex justify-center border-b py-14'>
      <div className='container grid gap-4 px-2 xl:grid-cols-2 xl:gap-20'>
        <div>
          <img src={HeroSvg} alt='Voting icon' />
        </div>
        <div className='flex flex-col items-center gap-2 xl:max-w-prose xl:items-start xl:justify-center'>
          <h2 className='text-ellipsis text-balance text-center font-title text-4xl font-bold xl:text-start xl:text-6xl'>
            Eres libre de votar por lo que sientes
          </h2>
          <p className='pb-3 pt-2 text-center text-xl text-gray-500 xl:text-start'>
            Lorem ipsum dolor sit, amet sectetur adipisicing elit. Saepe
            consectetur nobis ut voluptatum fuga?
          </p>
          <Cta to='/register'>Registrate</Cta>
        </div>
      </div>
      <div className='absolute -bottom-6 mx-auto flex size-12 items-center justify-center rounded-full bg-[#200e09]'>
        <IoIosArrowDown className='mt-1 text-3xl text-white' />
      </div>
    </section>
  )
}

export default Hero

import AsideCto from './components/AsideCto'
import { footerElement } from './data/footer'

const Asidebar = () => {
  return (
    <div className='h-full duration-300'>
      <div className='grid h-full grid-rows-[auto,min-content]'>
        <div className=''>
          <p>asdas</p>
        </div>
        <div className=''>
          <ul className='space-y-2 pb-3 pt-3'>
            {footerElement.map(element => (
              <AsideCto key={element.title} {...element} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Asidebar

import Difference from './Difference'

const diferences = [
  {
    id: 1,
    title: 'Easy to use',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
  },
  {
    id: 2,
    title: 'Fast delivery',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
  },
  {
    id: 3,
    title: 'Secure payments',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
  }
]

const Differences = () => {
  return (
    <section className='py-20'>
      <div className='container mx-auto space-y-12'>
        <h2 className='text-center text-4xl'>What makes us different?</h2>
        <div className='grid grid-cols-1  justify-items-center gap-12 md:grid-cols-2 lg:grid-cols-3'>
          {diferences.map(element => (
            <Difference
              key={element.id}
              title={element.title}
              description={element.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Differences

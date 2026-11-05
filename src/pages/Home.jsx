import { Link } from 'react-router-dom'
import CarCard from '../components/CarCard'
import cars from '../data/cars'


const reasons = [
  {
    title: 'Easy Booking',
    text: 'Pick a car, choose your dates, and see the total price right away.',
  },
  {
    title: 'Delivery to You',
    text: 'Have your car delivered to your home, hotel, or the airport.',
  },
  {
    title: 'Insurance Options',
    text: 'Choose the coverage that gives you peace of mind on the road.',
  },
]

function Home() {
  return (
    <>
      
      <section className="relative bg-primary text-accent">
        <img
          src="/images/hero.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />

        
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-36">
          <h1 className="max-w-2xl text-4xl font-bold md:text-6xl">
            Find the right car for your next trip
          </h1>
          <p className="mt-4 max-w-xl text-lg text-slate-200">
            Simple daily rentals, clear prices, and delivery to your door.
          </p>
          <Link to="#cars" onClick={() => document.getElementById('cars').scrollIntoView({ behavior: 'smooth' })}
  className="mt-8 inline-block rounded-lg bg-secondary px-6 py-3 font-bold text-primary transition hover:bg-amber-300">
    Browse Cars
          </Link>
        </div>
      </section>

      
      <section id="cars" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-16">
        <h2 className="text-3xl font-bold text-primary">Featured Cars</h2>

        
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </section>
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-primary">Why Choose Us</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {reasons.map((reason) => (
              <article key={reason.title} className="rounded-xl bg-slate-50 p-6">
                <h3 className="text-xl font-bold text-primary">{reason.title}</h3>
                <p className="mt-2 text-slate-600">{reason.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
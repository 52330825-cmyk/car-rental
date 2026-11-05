import { Link } from 'react-router-dom'
import CarCard from '../components/CarCard'
import cars from '../data/cars'


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
    </>
  )
}

export default Home
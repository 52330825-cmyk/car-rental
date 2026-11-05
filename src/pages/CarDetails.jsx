import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import cars from '../data/cars'

function CarDetails() {
  
  const { id } = useParams()

  
  const car = cars.find((item) => item.id === Number(id))

  
  const [showForm, setShowForm] = useState(false)
  const [name, setName] = useState('')
  const [pickupDate, setPickupDate] = useState('')
  const [returnDate, setReturnDate] = useState('')
  const [error, setError] = useState('')
  const [isBooked, setIsBooked] = useState(false)

  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  
  if (!car) {
    return (
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h1 className="text-3xl font-bold text-primary">Car not found</h1>
        <Link to="/" className="mt-4 inline-block font-semibold text-primary underline">
          Back to Home
        </Link>
      </section>
    )
  }


  const today = new Date().toLocaleDateString('en-CA')

  
  const millisecondsPerDay = 1000 * 60 * 60 * 24
  const days =
    pickupDate && returnDate
      ? Math.round((new Date(returnDate) - new Date(pickupDate)) / millisecondsPerDay)
      : 0
  const total = days > 0 ? days * car.pricePerDay : 0

  const handleSubmit = (event) => {
    
    event.preventDefault()

    if (name.trim() === '') {
      setError('Please enter your name.')
      return
    }

    if (days < 1) {
      setError('The return date must be after the pickup date.')
      return
    }

    setError('')
    setIsBooked(true)
  }

  const inputStyle = 'mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-primary'

  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-2">
      <img
        src={car.image}
        alt={car.name}
        className="h-80 w-full rounded-xl bg-slate-200 object-cover md:h-full"
      />

      <div>
        <Link to="/" className="text-sm text-slate-500 hover:text-primary">
          ← Back to Home
        </Link>

        <p className="mt-4 text-sm text-slate-500">{car.category}</p>
        <h1 className="mt-1 text-4xl font-bold text-primary">{car.name}</h1>
        <p className="mt-4 text-slate-600">{car.description}</p>

        <p className="mt-6 text-slate-600">
          <span className="text-4xl font-bold text-primary">${car.pricePerDay}</span> / day
        </p>

        {/* Specifications */}
        <dl className="mt-6 grid grid-cols-3 gap-4 rounded-xl bg-white p-5 shadow">
          <div>
            <dt className="text-sm text-slate-500">Seats</dt>
            <dd className="font-bold text-primary">{car.seats}</dd>
          </div>
          <div>
            <dt className="text-sm text-slate-500">Gearbox</dt>
            <dd className="font-bold text-primary">{car.transmission}</dd>
          </div>
          <div>
            <dt className="text-sm text-slate-500">Fuel</dt>
            <dd className="font-bold text-primary">{car.fuel}</dd>
          </div>
        </dl>

        
        {!showForm && (
          <button
            type="button"
            onClick={() => setShowForm(true)}
            className="mt-6 w-full rounded-lg bg-secondary px-6 py-3 font-bold text-primary transition hover:bg-amber-300"
          >
            Book Now
          </button>
        )}

        {/* The form appears after Book Now, then the confirmation replaces it */}
        {showForm && !isBooked && (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4 rounded-xl bg-white p-5 shadow">
            <label className="block text-sm font-medium text-slate-600">
              Full name
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className={inputStyle}
                required
              />
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-medium text-slate-600">
                Pickup date
                <input
                  type="date"
                  min={today}
                  value={pickupDate}
                  onChange={(event) => setPickupDate(event.target.value)}
                  className={inputStyle}
                  required
                />
              </label>

              <label className="block text-sm font-medium text-slate-600">
                Return date
                <input
                  type="date"
                  min={pickupDate || today}
                  value={returnDate}
                  onChange={(event) => setReturnDate(event.target.value)}
                  className={inputStyle}
                  required
                />
              </label>
            </div>

            {total > 0 && (
              <p className="text-slate-600">
                {days} {days === 1 ? 'day' : 'days'} × ${car.pricePerDay} ={' '}
                <span className="text-xl font-bold text-primary">${total}</span>
              </p>
            )}

            {error && <p className="text-sm font-medium text-red-600">{error}</p>}

            <button
              type="submit"
              className="w-full rounded-lg bg-primary px-6 py-3 font-bold text-accent transition hover:bg-slate-800"
            >
              Confirm Booking
            </button>
          </form>
        )}

        {isBooked && (
          <div className="mt-6 rounded-xl bg-green-100 p-5 text-green-900">
            <p className="font-bold">Thanks, {name.trim()}! Your booking request is confirmed.</p>
            <p className="mt-1">
              {car.name}, from {pickupDate} to {returnDate}. Total: ${total}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default CarDetails
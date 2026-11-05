import { Link } from 'react-router-dom'
function CarCard({ car }) {
  return (
    <Link
      to={`/cars/${car.id}`}
      className="block overflow-hidden rounded-xl bg-white shadow transition hover:-translate-y-1 hover:shadow-lg"
    >
      <img
        src={car.image}
        alt={car.name}
        className="h-48 w-full bg-slate-200 object-cover"
      />

      <div className="p-5">
        <p className="text-sm text-slate-500">{car.category}</p>
        <h3 className="mt-1 text-xl font-bold text-primary">{car.name}</h3>
        <p className="mt-3 text-slate-600">
          <span className="text-2xl font-bold text-primary">${car.pricePerDay}</span> / day
        </p>
      </div>
    </Link>
  )
}

export default CarCard

import { Link } from 'react-router-dom'
const services = [
  {
    title: 'Car Rental',
    text: 'Choose from economy cars, sedans, SUVs, and luxury cars for a day or longer.',
    points: ['Daily rental prices', 'Options for different budgets', 'Simple online booking'],
  },
  {
    title: 'Car Delivery',
    text: 'Skip the trip to our office and have your car brought to the place you choose.',
    points: ['Home or hotel delivery', 'Airport pickup and return', 'Delivery time set in advance'],
  },
  {
    title: 'Car Insurance',
    text: 'Add insurance to your rental and drive with more peace of mind.',
    points: ['Basic and full coverage', 'Clear coverage details', 'Support if something goes wrong'],
  },
]
function Services() {
  return(
    <>
    <section className="bg-primary px-6 py-16 text-center text-accent">
        <h1 className="text-4xl font-bold md:text-5xl">Our Services</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200">
          Everything you need for an easy rental, from choosing a car to getting on the road.
        </p>
      </section>
      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="rounded-xl bg-white p-6 shadow">
            <h2 className="text-2xl font-bold text-primary">{service.title}</h2>
            <p className="mt-3 text-slate-600">{service.text}</p>
            <ul className="mt-4 space-y-2">
              {service.points.map((point) => (
                <li key={point} className="text-slate-700">
                  <span className="font-bold text-amber-500">✓</span> {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-xl bg-primary px-6 py-10 text-center text-accent">
          <h2 className="text-3xl font-bold">Ready to choose your car?</h2>
          <Link
            to="/"
            className="mt-6 inline-block rounded-lg bg-secondary px-6 py-3 font-bold text-primary transition hover:bg-amber-300"
          >
            View Cars
          </Link>
        </div>
      </section>
    </>
  )
}

export default Services
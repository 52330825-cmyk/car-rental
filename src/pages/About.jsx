const values = [
  {
    title: 'Clear Prices',
    text: 'The daily price is shown upfront, so customers know what to expect before booking.',
  },
  {
    title: 'Well-Kept Cars',
    text: 'Our cars are cleaned and checked before every rental.',
  },
  {
    title: 'Friendly Support',
    text: 'Our team is ready to help customers choose the right car and answer their questions.',
  },
]
const stats = [
  { number: '6+', label: 'Cars Available' },
  { number: '500+', label: 'Happy Customers' },
  { number: '3', label: 'Rental Services' },
  { number: '24/7', label: 'Customer Support' },
]
const steps = [
  {
    title: 'Choose a Car',
    text: 'Browse our cars and compare their prices and specifications.',
  },
  {
    title: 'Pick Your Dates',
    text: 'Open the car page, choose your pickup and return dates, and see the total price.',
  },
  {
    title: 'Hit the Road',
    text: 'Confirm your booking, then pick up the car or have it delivered to you.',
  },
]
function About() {
  return(
<>
<section className="bg-primary px-6 py-16 text-center text-accent">
        <h1 className="text-4xl font-bold md:text-5xl">About Cedar Drive</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200">
          Making car rental simple, clear, and comfortable.
        </p>
      </section>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2">
        <img
          src="/images/car-4.jpg"
          alt="A Hyundai Tucson parked near a wooden house"
          className="h-80 w-full rounded-xl bg-slate-200 object-cover"
        />
 <div>
          <h2 className="text-3xl font-bold text-primary">Who We Are</h2>
          <p className="mt-4 text-slate-600">
            Cedar Drive is a car rental company for everyday trips, family travel, and special
            occasions. Customers can compare our cars, check the daily price, and book the one
            that suits them.
          </p>
          <p className="mt-4 text-slate-600">
            Our goal is to remove the stress from renting a car by keeping every step simple,
            from choosing a car to picking it up.
          </p>
          
        </div>
      </section>
      <section className="bg-primary px-6 py-12 text-accent">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 text-center md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-bold text-secondary">{stat.number}</p>
              <p className="mt-2 text-slate-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold text-primary">What We Value</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <article key={value.title} className="rounded-xl bg-white p-6 shadow">
              <h3 className="text-xl font-bold text-primary">{value.title}</h3>
              <p className="mt-2 text-slate-600">{value.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-primary">How It Works</h2>

          <div className="mt-8 grid gap-8 md:grid-cols-3">
           {steps.map((step, index) => (
              <article key={step.title}>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-xl font-bold text-primary">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-xl font-bold text-primary">{step.title}</h3>
                <p className="mt-2 text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

</>

  )
}

export default About
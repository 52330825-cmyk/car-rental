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
      <section className="mx-auto max-w-6xl px-6 pb-16">
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

</>

  )
}

export default About
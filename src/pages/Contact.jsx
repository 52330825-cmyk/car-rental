import { useState } from 'react'
function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [isSent, setIsSent] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
     setErrors({ ...errors, [name]: '' })
    setIsSent(false)
  }
  const validate = () => {
    const newErrors = {}
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (form.name.trim() === '') {
      newErrors.name = 'Please enter your name.'
    }

    if (!emailPattern.test(form.email.trim())) {
      newErrors.email = 'Please enter a valid email address.'
    }

    if (form.message.trim().length < 10) {
      newErrors.message = 'Your message must be at least 10 characters.'
    }

    return newErrors
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    const newErrors = validate()
    setErrors(newErrors)
 if (Object.keys(newErrors).length === 0) {
      setIsSent(true)
      setForm({ name: '', email: '', message: '' })
    }
  }

  const inputStyle = 'mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-primary'

  return (
    <>
    <section className="bg-primary px-6 py-16 text-center text-accent">
        <h1 className="text-4xl font-bold md:text-5xl">Contact Us</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200">
          Have a question about a car or a booking? Send us a message.
        </p>
      </section>
       <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2"></section>
         <div>
          <h2 className="text-3xl font-bold text-primary">Get in Touch</h2>
          <p className="mt-4 text-slate-600">
            Our team can help you choose a car or answer questions about delivery and insurance.
          </p>
          <dl className="mt-6 space-y-4">
            <div>
              <dt className="font-bold text-primary">Email</dt>
              <dd className="text-slate-600">info@example.com</dd>
            </div>
            <div>
              <dt className="font-bold text-primary">Location</dt>
              <dd className="text-slate-600">Beirut, Lebanon</dd>
            </div>
            <div>
              <dt className="font-bold text-primary">Working Hours</dt>
              <dd className="text-slate-600">Monday to Saturday, 9:00 AM to 6:00 PM</dd>
            </div>
          </dl>
        </div>
      <form onSubmit={handleSubmit} noValidate className="space-y-4 rounded-xl bg-white p-6 shadow">
          <label className="block text-sm font-medium text-slate-600">
            Full name
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={inputStyle}
            />
            {errors.name && <span className="mt-1 block text-red-600">{errors.name}</span>}
          </label>

          <label className="block text-sm font-medium text-slate-600">
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={inputStyle}
            />
            {errors.email && <span className="mt-1 block text-red-600">{errors.email}</span>}
          </label>

          <label className="block text-sm font-medium text-slate-600">
            Message
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              className={inputStyle}
            />
            {errors.message && <span className="mt-1 block text-red-600">{errors.message}</span>}
          </label>

          <button
            type="submit"
            className="w-full rounded-lg bg-secondary px-6 py-3 font-bold text-primary transition hover:bg-amber-300"
          >
            Send Message
          </button>

          {isSent && (
            <p className="rounded-lg bg-green-100 p-3 font-medium text-green-900">
              Thank you! Your message has been received.
            </p>
          )}
        </form>
       
    </>
  )
}

export default Contact
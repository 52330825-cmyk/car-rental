import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
      const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed z-50 w-full bg-primary/95 px-6 py-4 text-accent backdrop-blur-sm md:px-12">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-wide">
          Cedar <span className="text-secondary">Drive</span>
        </Link>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          className="text-2xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          &#9776;
        </button>
         <ul className={`${isOpen ? 'flex' : 'hidden'} absolute left-0 top-full w-full flex-col gap-4 bg-primary px-6 py-4 md:static md:flex md:w-auto md:flex-row md:gap-8 md:p-0`}>
          <li><Link to="/" className="transition hover:text-secondary" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" className="transition hover:text-secondary" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/services" className="transition hover:text-secondary" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link to="/contact" className="transition hover:text-secondary" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
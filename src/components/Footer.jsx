import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
        <p className="font-bold text-white">
          Cedar <span className="text-amber-400">Drive</span>
        </p>

        <div className="flex gap-6 text-sm">
          <Link to="/about" className="hover:text-white">About</Link>
          <Link to="/services" className="hover:text-white">Services</Link>
          <Link to="/contact" className="hover:text-white">Contact</Link>
        </div>

        {/* getFullYear keeps the copyright year up to date automatically */}
        <p className="text-sm">© {new Date().getFullYear()} Cedar Drive</p>
      </div>
    </footer>
  )
}

export default Footer
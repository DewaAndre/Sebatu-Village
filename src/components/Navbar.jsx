import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const isHome = location.pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navbarBg =
    isHome && !scrolled ? "bg-transparent" : "bg-white shadow-md"

  const textColor =
    isHome && !scrolled ? "text-white" : "text-black"

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Media", path: "/media" },
    { name: "Wisata", path: "/wisata" },
    { name: "Hubungi Kami", path: "/hubungi" },
  ]

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navbarBg}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <img
          src="/img/logo1.png"
          alt="Logo"
          className="w-28 cursor-pointer"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8">
          {menuItems.map((item, i) => (
            <li key={i}>
              <Link
                to={item.path}
                className={`${textColor} font-medium hover:text-amber-500 transition`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden focus:outline-none ${textColor}`}
        >
          {menuOpen ? (
            // Close Icon
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger Icon
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-white shadow-md`}
      >
        <ul className="flex flex-col items-center py-6 space-y-4">
          {menuItems.map((item, i) => (
            <li key={i}>
              <Link
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="text-black text-lg font-medium hover:text-amber-500 transition"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

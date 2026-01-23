import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaShoppingCart, FaUser, FaBars, FaTimes, FaUtensils } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Contact', path: '/contact' }
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <FaUtensils className="text-orange-500 text-2xl" />
            <span className="text-2xl font-bold text-gray-800">Delicious Food</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-orange-600 bg-orange-50'
                    : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/cart" className="relative p-2 text-gray-700 hover:text-orange-600 transition-colors duration-200">
              <FaShoppingCart className="text-xl" />
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
            </Link>
            <Link to="/profile" className="p-2 text-gray-700 hover:text-orange-600 transition-colors duration-200">
              <FaUser className="text-xl" />
            </Link>
            <Link
              to="/login"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
            >
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-colors duration-200"
            >
              {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50 rounded-lg mt-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-orange-600 bg-orange-100'
                      : 'text-gray-700 hover:text-orange-600 hover:bg-orange-100'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-gray-200 pt-2 mt-2">
                <Link
                  to="/cart"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-100 rounded-md transition-colors duration-200"
                >
                  <FaShoppingCart className="mr-3" />
                  Cart (3)
                </Link>
                <Link
                  to="/profile"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-100 rounded-md transition-colors duration-200"
                >
                  <FaUser className="mr-3" />
                  Profile
                </Link>
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 mt-2 bg-orange-500 hover:bg-orange-600 text-white text-base font-medium rounded-md text-center transition-colors duration-200"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
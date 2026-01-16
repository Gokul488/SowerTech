import { motion } from 'framer-motion';
import { NavLink, Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const navItems = [
  { name: 'Home', to: '/' },
  { name: 'Services', to: '/services' },
  { name: 'Portfolio', to: '/portfolio' },
  { name: 'About', to: '/about' },
  { name: 'Contact', to: '/contact' },
];

export default function Navbar({ isMenuOpen, setIsMenuOpen }) {
  return (
    <nav className="bg-[#0a192f] text-white top-0 z-50 shadow-xl backdrop-blur-sm bg-opacity-95 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/"
              className="text-2xl md:text-3xl font-extrabold tracking-tight"
              onClick={() => setIsMenuOpen(false)}
            >
              Sower<span className="text-[#2ecc71]">Tech</span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10 lg:space-x-12">
            {navItems.map((item) => (
              <NavLink key={item.name} to={item.to}>
                {({ isActive }) => (
                  <span
                    className={`relative text-lg font-medium transition-all duration-300 ${
                      isActive
                        ? 'text-[#2ecc71]'
                        : 'text-gray-300 hover:text-white'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                    <span
                      className={`absolute -bottom-1.5 left-0 h-0.5 bg-[#2ecc71] transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0'
                      }`}
                    />
                  </span>
                )}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none text-[#2ecc71] hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon
              icon={isMenuOpen ? faXmark : faBars}
              size="2x"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden absolute left-0 right-0 top-full bg-[#0a192f] border-t border-gray-800/50 shadow-2xl"
          >
            <div className="flex flex-col space-y-5 px-6 py-6 text-left text-lg">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={({ isActive }) =>
                    `py-2 font-medium transition-colors ${
                      isActive
                        ? 'text-[#2ecc71]'
                        : 'text-gray-300 hover:text-[#2ecc71]'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </nav>
  );
}

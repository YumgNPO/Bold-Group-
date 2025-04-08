import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navClasses = scrolled 
    ? "bg-[var(--bold-black)] shadow-md transition-all duration-300" 
    : "bg-[var(--bold-black)] transition-all duration-300";

  return (
    <nav className={`${navClasses} sticky top-0 z-50`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-white font-montserrat font-bold text-2xl">
                <span className="text-white">BOLD</span> 
                <span className="text-[var(--bold-gold)]">GROUP</span>
              </span>
            </Link>
            <span className="ml-2 text-white text-xs tracking-wide opacity-60">BEYOND IMAGINATION</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" 
              className={`${location === '/' ? 'text-[var(--bold-gold)]' : 'text-white'} hover:text-[var(--bold-gold)] transition-colors`}
              onClick={closeMenu}>
              Home
            </Link>
            <a href="/#services" 
              className="text-white hover:text-[var(--bold-gold)] transition-colors"
              onClick={closeMenu}>
              Services
            </a>
            <a href="/#why-us" 
              className="text-white hover:text-[var(--bold-gold)] transition-colors"
              onClick={closeMenu}>
              Why Choose Us
            </a>
            <Link href="/team" 
              className="text-white hover:text-[var(--bold-gold)] transition-colors"
              onClick={closeMenu}>
              Our Team
            </Link>
            <a href="/#contact" 
              className="text-white hover:text-[var(--bold-gold)] transition-colors"
              onClick={closeMenu}>
              Contact
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button type="button" className="text-white" onClick={toggleMenu} aria-label="Toggle menu">
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-[var(--bold-black)]`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" 
            className="block px-3 py-2 text-white hover:text-[var(--bold-gold)]"
            onClick={closeMenu}>
            Home
          </Link>
          <a href="/#services" 
            className="block px-3 py-2 text-white hover:text-[var(--bold-gold)]"
            onClick={closeMenu}>
            Services
          </a>
          <a href="/#why-us" 
            className="block px-3 py-2 text-white hover:text-[var(--bold-gold)]"
            onClick={closeMenu}>
            Why Choose Us
          </a>
          <Link href="/team" 
            className="block px-3 py-2 text-white hover:text-[var(--bold-gold)]"
            onClick={closeMenu}>
            Our Team
          </Link>
          <a href="/#contact" 
            className="block px-3 py-2 text-white hover:text-[var(--bold-gold)]"
            onClick={closeMenu}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

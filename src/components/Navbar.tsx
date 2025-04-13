
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/lovable-uploads/2bf9704c-6e30-49b2-bc24-1cec594c754c.png" alt="Moso Capital Logo" className="h-10 w-auto" />
              <span className="ml-2 text-xl font-semibold text-moso-dark">Moso Capital</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" label="Home" />
            <NavLink to="/about" label="About" />
            <NavLink to="/process" label="Our Process" />
            <NavLink to="/team" label="Our Team" />
            <NavLink to="/portfolio" label="Portfolio" />
            <NavLink to="/faqs" label="FAQs" />
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-moso-dark focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <MobileNavLink to="/" label="Home" onClick={() => setIsOpen(false)} />
            <MobileNavLink to="/about" label="About" onClick={() => setIsOpen(false)} />
            <MobileNavLink to="/process" label="Our Process" onClick={() => setIsOpen(false)} />
            <MobileNavLink to="/team" label="Our Team" onClick={() => setIsOpen(false)} />
            <MobileNavLink to="/portfolio" label="Portfolio" onClick={() => setIsOpen(false)} />
            <MobileNavLink to="/faqs" label="FAQs" onClick={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, label }: { to: string; label: string }) => (
  <Link
    to={to}
    className="text-moso-dark hover:text-moso-green font-medium transition-colors duration-200"
  >
    {label}
  </Link>
);

const MobileNavLink = ({ to, label, onClick }: { to: string; label: string; onClick: () => void }) => (
  <Link
    to={to}
    className="block px-3 py-2 text-base font-medium text-moso-dark hover:text-moso-green hover:bg-gray-50 rounded-md"
    onClick={onClick}
  >
    {label}
  </Link>
);

export default Navbar;

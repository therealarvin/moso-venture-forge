
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-moso-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src="/lovable-uploads/2bf9704c-6e30-49b2-bc24-1cec594c754c.png" alt="Moso Capital Logo" className="h-10 w-auto brightness-200" />
              <span className="ml-2 text-xl font-semibold">Moso Capital</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              The Next Generation of Bold Investors
            </p>
            <p className="text-gray-300 text-sm">
              University of Pennsylvania
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link to="/process" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Our Process
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-gray-300 hover:text-white transition-colors duration-200">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">About Moso Capital</h3>
            <p className="text-gray-300 text-sm mb-4">
              Moso Capital is the University of Pennsylvania's premier experiential venture and growth equity program.
            </p>
            <p className="text-gray-300 text-sm">
              &copy; {currentYear} Moso Capital. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

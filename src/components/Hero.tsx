
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative pt-20 pb-16 md:pb-24 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-moso-green/10 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20 z-10">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-moso-dark animate-fade-in">
            <span className="block">The Next Generation of</span>
            <span className="block text-moso-green">Bold Investors</span>
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
            Moso Capital is the University of Pennsylvania's premier experiential venture and growth equity program. By mirroring a real investment fund, we empower top undergraduates to gain hands-on investing experience while supporting our venture partners in sourcing the most exciting early-stage startups.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <Link 
              to="/about" 
              className="px-6 py-3 bg-moso-green text-white font-medium rounded-md hover:bg-moso-green/90 transition-colors duration-200 flex items-center justify-center"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link 
              to="/process" 
              className="px-6 py-3 border border-moso-green text-moso-green font-medium rounded-md hover:bg-moso-green/10 transition-colors duration-200"
            >
              Our Process
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

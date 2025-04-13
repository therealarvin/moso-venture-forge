
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PortfolioSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-moso-dark">Our Portfolio</h2>
          <div className="w-20 h-1 bg-moso-green mx-auto mt-4"></div>
        </div>
        
        <div className="bg-gray-50 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-moso-dark mb-3">Elythea – FemTech ML Platform</h3>
              <p className="text-lg text-gray-600 mb-6">
                Machine-learning-based FemTech startup that uses EHR data to predict and prevent pregnancy complications.
              </p>
              
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-moso-green mb-2">The Problem</h4>
                <p className="text-gray-600 mb-4">
                  Over 40% of pregnancies in 2021 involved complications, with 80% of associated deaths deemed preventable by the CDC. Despite this, hospitals still use outdated manual tools and late-stage blood tests to assess risk.
                </p>
                
                <h4 className="text-lg font-semibold text-moso-green mb-2">Elythea's Solution</h4>
                <p className="text-gray-600 mb-4">
                  Elythea developed a proprietary machine learning platform that uses patient data already found in EHRs to predict complications early—well before traditional lab tests can. The technology has been tested on data from 14M+ patients.
                </p>
                
                <h4 className="text-lg font-semibold text-moso-green mb-2">Moso's Role</h4>
                <ul className="text-gray-600 list-disc pl-5 space-y-1">
                  <li>Sourced Elythea via in-depth research across Y Combinator, MIT Solve, and Pitchbook</li>
                  <li>Led diligence through follow-up calls, expert interviews, and technical vetting</li>
                  <li>Facilitated a $25K investment at a $1.5M raise ($18M cap)</li>
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-moso-green/10 text-moso-green px-3 py-1 rounded-full text-sm">J&J Impact Fund</span>
                <span className="bg-moso-green/10 text-moso-green px-3 py-1 rounded-full text-sm">Kleiner Perkins</span>
                <span className="bg-moso-green/10 text-moso-green px-3 py-1 rounded-full text-sm">Y Combinator</span>
              </div>
              
              <Link 
                to="/portfolio" 
                className="inline-flex items-center text-moso-green hover:text-moso-green/80 font-medium"
              >
                View Full Case Study
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-moso-green/10 p-8 md:p-12 flex items-center justify-center">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 rounded-full bg-moso-green/20 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-moso-green/40 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-moso-green text-white flex items-center justify-center font-bold">EL</div>
                    </div>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-moso-dark mb-2">Elythea</h4>
                <p className="text-moso-green font-medium">Investment Year: 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

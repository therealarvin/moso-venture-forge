
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <div className="subtle-bg py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-moso-dark mb-6">Our Portfolio</h1>
            <p className="text-xl text-gray-600">
              Successful investments sourced and supported by Moso Capital.
            </p>
          </div>
        </div>
      </div>
      
      {/* Elythea Case Study */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-subtitle">Case Study</h2>
            <h3 className="section-title">Elythea – FemTech ML Platform</h3>
            <p className="paragraph max-w-3xl mx-auto">
              In Fall 2023, Moso sourced and helped facilitate an investment into Elythea, a machine-learning-based FemTech startup that uses EHR data to predict and prevent pregnancy complications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-moso-green/10 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-moso-dark mb-4">The Problem</h4>
              <p className="text-gray-600 mb-4">
                Over 40% of pregnancies in 2021 involved complications, with 80% of associated deaths deemed preventable by the CDC. Despite this, hospitals still use outdated manual tools and late-stage blood tests to assess risk.
              </p>
              <div className="mt-6">
                <h5 className="font-semibold text-moso-dark mb-2">Key Statistics:</h5>
                <ul className="space-y-2">
                  <StatisticItem value="40%" text="of pregnancies involve complications" />
                  <StatisticItem value="80%" text="of associated deaths are preventable" />
                  <StatisticItem value="$20B+" text="annual cost to the healthcare system" />
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-moso-dark mb-4">Elythea's Solution</h4>
              <p className="text-gray-600 mb-4">
                Elythea developed a proprietary machine learning platform that uses patient data already found in EHRs to predict complications early—well before traditional lab tests can.
              </p>
              <div className="mt-6">
                <h5 className="font-semibold text-moso-dark mb-2">Key Advantages:</h5>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-moso-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2 text-gray-600">Early prediction using existing EHR data</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-moso-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2 text-gray-600">Tested on 14M+ patient records</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-moso-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2 text-gray-600">High predictive accuracy across regions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-moso-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2 text-gray-600">Seamless integration with existing hospital systems</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm mb-12">
            <div className="p-6">
              <h4 className="text-xl font-semibold text-moso-dark mb-4">Moso's Role</h4>
              <div className="space-y-6">
                <ProcessStep 
                  number="01"
                  title="Sourcing"
                  description="Sourced Elythea via in-depth research across Y Combinator, MIT Solve, and Pitchbook"
                />
                
                <ProcessStep 
                  number="02"
                  title="Outreach"
                  description="Reached out to the founder multiple times before successfully initiating a call"
                />
                
                <ProcessStep 
                  number="03"
                  title="Diligence"
                  description="Led diligence through follow-up calls, expert interviews, and technical vetting"
                />
                
                <ProcessStep 
                  number="04"
                  title="Investment"
                  description="Facilitated a $25K investment by an angel investor at a $1.5M raise ($18M cap)"
                />
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-moso-dark mb-4">Current Backers</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <BackerCard name="J&J Impact Fund" />
              <BackerCard name="Kleiner Perkins Fairchild Fund" />
              <BackerCard name="Y Combinator" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

interface StatisticItemProps {
  value: string;
  text: string;
}

const StatisticItem = ({ value, text }: StatisticItemProps) => (
  <li className="flex items-baseline">
    <span className="text-xl font-bold text-moso-green mr-2">{value}</span>
    <span className="text-gray-600">{text}</span>
  </li>
);

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

const ProcessStep = ({ number, title, description }: ProcessStepProps) => (
  <div className="flex">
    <div className="flex-shrink-0 mr-4">
      <div className="w-10 h-10 rounded-full bg-moso-green/20 flex items-center justify-center">
        <span className="font-bold text-moso-green">{number}</span>
      </div>
    </div>
    <div>
      <h5 className="font-semibold text-moso-dark mb-1">{title}</h5>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

interface BackerCardProps {
  name: string;
}

const BackerCard = ({ name }: BackerCardProps) => (
  <div className="bg-white p-4 rounded border border-gray-200 flex items-center justify-between">
    <span className="font-medium text-moso-dark">{name}</span>
    <ExternalLink className="h-4 w-4 text-moso-green/70" />
  </div>
);

export default Portfolio;

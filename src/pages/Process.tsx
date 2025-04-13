
import { Clock, Users, FileSearch, Search, PieChart, BookOpen } from 'lucide-react';

const Process = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <div className="subtle-bg py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-moso-dark mb-6">Our Process</h1>
            <p className="text-xl text-gray-600">
              How we source, evaluate, and close deals for our venture partners.
            </p>
          </div>
        </div>
      </div>
      
      {/* Timeline Section */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-subtitle text-center">Program Timeline</h2>
          <h3 className="section-title text-center mb-12">A Structured 10-Week Engagement</h3>
          
          <div className="space-y-12">
            <TimelineItem 
              week="Week 1"
              title="Kick-off Meeting with Partner"
              description="We begin by aligning on investment thesis, goals, and communication cadence. This foundational meeting sets expectations and ensures we're targeting the right opportunities."
              icon={<Clock className="h-8 w-8 text-white" />}
              last={false}
            />
            
            <TimelineItem 
              week="Weeks 2-10"
              title="Weekly Check-ins, Sourcing, Due Diligence"
              description="Throughout the engagement, we maintain regular communication while actively sourcing potential investments. Our team conducts preliminary outreach, screens opportunities, and performs in-depth diligence on promising startups."
              icon={<Search className="h-8 w-8 text-white" />}
              last={false}
            />
            
            <TimelineItem 
              week="Week 11+"
              title="Investment & Post-Investment Support"
              description="Once a decision is made, we support the investment execution process. For portfolio companies, our optional accelerator support is available to help maximize growth potential."
              icon={<PieChart className="h-8 w-8 text-white" />}
              last={true}
            />
          </div>
        </div>
      </section>
      
      {/* How We Work Section */}
      <section className="subtle-bg py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-subtitle">How We Work</h2>
            <h3 className="section-title">Our Deal Sourcing & Diligence Approach</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-moso-dark mb-4">Deal Sourcing</h4>
              <ul className="space-y-4">
                <Feature text="Learn partner's thesis and investment criteria" />
                <Feature text="Source deals through Penn and Moso alumni networks" />
                <Feature text="Scout university startup pitch competitions" />
                <Feature text="Research accelerators and incubators" />
                <Feature text="Leverage proprietary market research" />
                <Feature text="Utilize investor referrals and scouting channels" />
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold text-moso-dark mb-4">Diligence Process</h4>
              <ul className="space-y-4">
                <Feature text="Initial founder outreach and screening calls" />
                <Feature text="Market sizing and competitive landscape analysis" />
                <Feature text="Financial modeling and growth projections" />
                <Feature text="Expert interviews and technical validation" />
                <Feature text="Customer and user interviews" />
                <Feature text="Investment memo preparation and presentation" />
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Post-Investment Section */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-subtitle">Post-Investment</h2>
            <h3 className="section-title">Continued Value Creation</h3>
            <p className="paragraph">
              After a deal closes, Moso remains involved. Our Accelerator Team, composed of top undergraduates with experience in consulting and operations, is available to portfolio companies for additional support.
            </p>
            <p className="paragraph">
              Whether it's go-to-market research, fundraising materials, or competitive analysis, we aim to create long-term value for both our venture partners and their portfolio companies.
            </p>
          </div>
          <div className="bg-moso-green/10 p-8 rounded-lg">
            <div className="flex justify-center mb-6">
              <BookOpen className="h-20 w-20 text-moso-green" />
            </div>
            <ul className="space-y-4">
              <Feature text="Go-to-market strategy development" />
              <Feature text="Fundraising materials preparation" />
              <Feature text="Competitive analysis and market research" />
              <Feature text="Growth strategy consulting" />
              <Feature text="Customer acquisition support" />
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

const Feature = ({ text }: { text: string }) => (
  <li className="flex items-start">
    <div className="flex-shrink-0">
      <svg className="h-6 w-6 text-moso-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <p className="ml-3 text-gray-600">{text}</p>
  </li>
);

interface TimelineItemProps {
  week: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  last: boolean;
}

const TimelineItem = ({ week, title, description, icon, last }: TimelineItemProps) => (
  <div className="relative flex items-start">
    <div className="flex flex-col items-center mr-4">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-moso-green">
        {icon}
      </div>
      {!last && (
        <div className="w-px h-full bg-moso-green/30 mt-4"></div>
      )}
    </div>
    <div className="pt-1 pb-8">
      <span className="text-sm font-semibold text-moso-green">{week}</span>
      <h4 className="text-xl font-semibold text-moso-dark mt-1 mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default Process;


import { Clock, Users, FileSearch } from 'lucide-react';

const ProcessSection = () => {
  return (
    <section className="py-16 md:py-24 subtle-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-moso-dark">Our Process</h2>
          <div className="w-20 h-1 bg-moso-green mx-auto mt-4"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Each engagement is tailored to the venture partner's workflow, following our structured approach to deliver maximum value.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProcessCard 
            icon={<Clock className="h-10 w-10 text-moso-green" />}
            title="Timeline & Structure"
            description="From kickoff meetings to weekly check-ins, we manage a seamless 10-week engagement process that aligns with our venture partners' goals."
            stepNumber="01"
          />
          
          <ProcessCard 
            icon={<Users className="h-10 w-10 text-moso-green" />}
            title="How We Work"
            description="We leverage the Penn and Moso network, pitch competitions, accelerators and proprietary research to source high-potential deals that match our partners' investment thesis."
            stepNumber="02"
          />
          
          <ProcessCard 
            icon={<FileSearch className="h-10 w-10 text-moso-green" />}
            title="Post-Investment Support"
            description="Our Accelerator Team provides ongoing support to portfolio companies with market research, fundraising materials, and competitive analysis."
            stepNumber="03"
          />
        </div>
      </div>
    </section>
  );
};

interface ProcessCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stepNumber: string;
}

const ProcessCard = ({ icon, title, description, stepNumber }: ProcessCardProps) => (
  <div className="bg-white p-8 rounded-lg hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
    <div className="absolute top-0 right-0 bg-moso-green/10 text-moso-green font-bold text-4xl p-2 w-16 h-16 flex items-center justify-center rounded-bl-lg">
      {stepNumber}
    </div>
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-moso-dark mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

export default ProcessSection;


import { Landmark, TrendingUp, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-moso-dark">About Moso Capital</h2>
          <div className="w-20 h-1 bg-moso-green mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Landmark className="h-10 w-10 text-moso-green" />}
            title="Our Mission"
            description="At Moso Capital, we believe the best learning happens by doing. We empower students through hands-on VC experience while helping venture partners discover promising startups."
          />
          
          <FeatureCard 
            icon={<TrendingUp className="h-10 w-10 text-moso-green" />}
            title="Why Now"
            description="With over 5 million startups launched last year, we are living through a generational boom in entrepreneurship. Our unique hands-on learning model prepares students for this evolving landscape."
          />
          
          <FeatureCard 
            icon={<Users className="h-10 w-10 text-moso-green" />}
            title="Our Traction"
            description="Over 40 active members across Penn, partnerships with top funds like Menlo Ventures and Radian Capital, and our first deal closed within a month of launching operations."
          />
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="bg-gray-50 p-8 rounded-lg hover:shadow-md transition-shadow duration-300">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-moso-dark mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

export default AboutSection;

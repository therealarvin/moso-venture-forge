
import { Landmark, TrendingUp, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <div className="subtle-bg py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-moso-dark mb-6">About Moso Capital</h1>
            <p className="text-xl text-gray-600">
              Empowering the next generation of investors through hands-on experience.
            </p>
          </div>
        </div>
      </div>
      
      {/* Mission Section */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-subtitle">Our Mission</h2>
            <h3 className="section-title">Hands-on Learning in Venture Capital</h3>
            <p className="paragraph">
              At Moso Capital, we believe the best learning happens by doing. Founded in 2023, we built a program that not only teaches students how to think like venture capitalists—but also delivers real value to our venture partners. Every semester, Moso Capital deploys high-performing deal teams made up of Penn's top students, mentored by Wharton MBA advisors.
            </p>
            <p className="paragraph">
              We are committed to training the next generation of bold, thoughtful investors—and finding the next big idea in the process.
            </p>
          </div>
          <div className="bg-moso-green/10 p-8 rounded-lg">
            <div className="flex justify-center mb-6">
              <Landmark className="h-20 w-20 text-moso-green" />
            </div>
            <ul className="space-y-4">
              <Feature text="Empower students through hands-on VC experience" />
              <Feature text="Help venture partners discover promising startups" />
              <Feature text="Bridge the gap between classroom theory and real-world investing" />
              <Feature text="Build a community of future investment leaders" />
            </ul>
          </div>
        </div>
      </section>
      
      {/* Why Now Section */}
      <section className="subtle-bg py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-white p-8 rounded-lg shadow-sm">
              <div className="flex justify-center mb-6">
                <TrendingUp className="h-20 w-20 text-moso-green" />
              </div>
              <ul className="space-y-4">
                <Feature text="5M+ startups launched last year in the U.S. alone" />
                <Feature text="Emerging sectors driven by AI, fintech, health tech, and sustainability" />
                <Feature text="Unique opportunity for early-stage investors" />
                <Feature text="Growing demand for venture capital talent" />
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="section-subtitle">Why Now</h2>
              <h3 className="section-title">A Generational Boom in Entrepreneurship</h3>
              <p className="paragraph">
                We are living through a generational boom in entrepreneurship. In 2023 alone, over 5 million businesses were created in the U.S., many of which are part of emerging sectors driven by AI, fintech, health tech, and sustainability. This new wave of innovation presents a unique opportunity for early-stage investors.
              </p>
              <p className="paragraph">
                Moso was born from the belief that students can—and should—be part of that ecosystem. Our structure empowers students to lead real diligence processes and make meaningful contributions to the startup community, all while generating value for our venture partners.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Traction Section */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-subtitle">Our Traction</h2>
          <h3 className="section-title">Making an Impact</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard 
            icon={<Users className="h-12 w-12 text-moso-green" />}
            stat="40+" 
            label="Active Members" 
            description="Students across undergraduate programs at Penn" 
          />
          
          <StatCard 
            icon={<Landmark className="h-12 w-12 text-moso-green" />}
            stat="5+" 
            label="Fund Partnerships" 
            description="Including Menlo Ventures, Radian Capital, and Red & Blue Ventures" 
          />
          
          <StatCard 
            icon={<TrendingUp className="h-12 w-12 text-moso-green" />}
            stat="1 Month" 
            label="First Deal Closed" 
            description="Rapidly operational from launch to first investment" 
          />
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

interface StatCardProps {
  icon: React.ReactNode;
  stat: string;
  label: string;
  description: string;
}

const StatCard = ({ icon, stat, label, description }: StatCardProps) => (
  <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-md transition-shadow duration-300">
    <div className="flex justify-center mb-4">{icon}</div>
    <div className="text-4xl font-bold text-moso-green mb-2">{stat}</div>
    <div className="text-lg font-semibold text-moso-dark mb-2">{label}</div>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default About;


import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import TeamMember from './TeamMember';

const TeamSection = () => {
  // Display a subset of team members on the homepage
  const featuredTeamMembers = [
    {
      name: "Evelyn Nguyen",
      image: "/lovable-uploads/d158528e-c8b3-42f8-916d-63a13582207d.png",
      position: "Managing Partner"
    },
    {
      name: "Daniel Gao",
      image: "/lovable-uploads/d316a3b2-2c26-4eb7-a74c-caaf28e1223d.png",
      position: "Principal"
    },
    {
      name: "Aarushi Agrawal",
      image: "/lovable-uploads/2868f2d6-2c4f-484f-a23e-4e5dba4564f2.png",
      position: "Managing Director"
    },
    {
      name: "Evelyn Ho",
      image: "/lovable-uploads/5261ec0a-e2c8-40ac-8079-a34fdb4b4315.png",
      position: "Analyst"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-moso-dark">Our Team</h2>
          <div className="w-20 h-1 bg-moso-green mx-auto mt-4"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Moso Capital is led by a select group of student investors with real-world experience across top VC, growth equity, and investment banking firms.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8">
          {featuredTeamMembers.map((member, index) => (
            <TeamMember 
              key={index}
              name={member.name}
              image={member.image}
              position={member.position}
            />
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link 
            to="/team" 
            className="inline-flex items-center text-moso-green hover:text-moso-green/80 font-medium"
          >
            View Full Team
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

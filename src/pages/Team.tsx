
import TeamMember from '../components/TeamMember';

const Team = () => {
  const teamMembers = [
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
    },
    {
      name: "Jenny Chen",
      image: "/lovable-uploads/4e6510ee-5db9-4861-8693-fda1d690eda3.png",
      position: "Analyst"
    },
    {
      name: "Ty Gelman",
      image: "/lovable-uploads/51d46e83-ae17-4758-b602-1798cd777969.png",
      position: "Principal"
    },
    {
      name: "Arjun Krishnan",
      image: "/lovable-uploads/a59feeca-62a8-47d4-9c89-395606fb5da5.png",
      position: "Managing Director"
    },
    {
      name: "Rishi Patel",
      image: "/lovable-uploads/bd0c71bf-94ba-4252-994a-bac858f0e621.png",
      position: "Analyst"
    },
    {
      name: "Jacob Meltzer",
      image: "/lovable-uploads/3c67a80f-1ba3-4a3c-aa04-ca06f3d24df7.png",
      position: "Principal"
    },
    {
      name: "Varsha Muralidhar",
      image: "/lovable-uploads/f6bf1ea9-54f7-4026-a2fa-dafffe95f33e.png",
      position: "Analyst"
    }
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="subtle-bg py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-moso-dark mb-6">Our Team</h1>
            <p className="text-xl text-gray-600">
              Meet the future leaders of venture capital.
            </p>
          </div>
        </div>
      </div>
      
      {/* Leadership Section */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-subtitle">Leadership</h2>
          <h3 className="section-title">Driving Our Mission Forward</h3>
          <p className="paragraph max-w-3xl mx-auto">
            Moso Capital is led by a select group of student investors with real-world experience across top VC, growth equity, and investment banking firms.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember 
              key={index}
              name={member.name}
              image={member.image}
              position={member.position}
            />
          ))}
        </div>
      </section>
      
      {/* Alumni Opportunities Section */}
      <section className="subtle-bg py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-subtitle">Alumni Opportunities</h2>
            <h3 className="section-title">Where Our Alumni Go</h3>
            <p className="paragraph max-w-3xl mx-auto">
              Our team members have secured internships at leading firms across venture capital, growth equity, and investment banking.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {['Bain Capital Ventures', 'NEA', 'Lazard', 'Vista Equity Partners', 'Battery Ventures', 'HOF Capital', 'Two Sigma Ventures', 'Golden Gate Capital', 'J.P. Morgan', 'Goldman Sachs'].map((company, index) => (
              <div key={index} className="bg-white p-4 rounded-lg text-center shadow-sm">
                <p className="font-medium text-moso-dark">{company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Deal Team Composition Section */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="section-subtitle">Deal Team Composition</h2>
            <h3 className="section-title">How We Structure Our Teams</h3>
            <p className="paragraph">
              Each Moso Capital deal team is carefully structured to ensure effective execution and strong communication with our venture partners. Teams are assembled based on industry expertise, prior experience, and complementary skill sets.
            </p>
            <p className="paragraph">
              Our team members bring diverse perspectives from their academic backgrounds spanning finance, computer science, bioengineering, and other disciplines, allowing us to approach investment opportunities with a multidisciplinary lens.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <h4 className="text-xl font-semibold text-moso-dark mb-6">Each Deal Team Includes:</h4>
            
            <div className="space-y-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="text-lg font-semibold text-moso-green mb-2">Managing Director</h5>
                <p className="text-gray-600">Senior leadership responsible for partner communication and strategic oversight</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="text-lg font-semibold text-moso-green mb-2">Principal</h5>
                <p className="text-gray-600">Experienced member focusing on diligence execution and sourcing oversight</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="text-lg font-semibold text-moso-green mb-2">Analysts</h5>
                <p className="text-gray-600">Talented students conducting research, founder outreach, and financial analysis</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;

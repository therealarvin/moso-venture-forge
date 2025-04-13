
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqCategories = [
  {
    category: "General Questions",
    items: [
      {
        question: "How often do we meet?",
        answer: "We typically meet weekly or biweekly, depending on the venture partner's preference and the stage of the engagement. Our flexible structure allows us to adapt to each partner's working style and schedule constraints."
      },
      {
        question: "Who sends emails?",
        answer: "This is flexible and determined by the partner. Some prefer our team to handle all founder communications, while others prefer to be the point of contact. We can adapt to either approach based on your preference."
      },
      {
        question: "Is Moso free?",
        answer: "Yes. We ask for mentorship and career support in return for our services, creating a mutually beneficial relationship. Our student members gain valuable insights from experienced investors, while partners benefit from our sourcing and diligence capabilities."
      }
    ]
  },
  {
    category: "Team Structure",
    items: [
      {
        question: "Who's on the deal team?",
        answer: "Each deal team consists of hand-selected, experienced students, including a Managing Director, Principal, and Analysts with relevant expertise. Teams are assembled based on industry expertise, prior experience, and complementary skill sets to ensure effective execution."
      },
      {
        question: "How are students selected?",
        answer: "Students go through a rigorous application and interview process. We look for a combination of relevant experience, analytical ability, curiosity, and strong communication skills. Many of our members have previously interned at top venture capital firms, investment banks, or consulting firms."
      },
      {
        question: "What is the time commitment for students?",
        answer: "Students commit approximately 5-10 hours per week to Moso Capital. This includes sourcing, diligence, team meetings, and partner communications. Our members are highly dedicated and prioritize delivering quality work for our venture partners."
      }
    ]
  },
  {
    category: "Services & Capabilities",
    items: [
      {
        question: "What else do you do?",
        answer: "Beyond deal sourcing and diligence, we create industry primers, market maps, and can take on ad hoc projects based on our venture partners' needs. Our team has experience in market sizing, competitive landscape analysis, growth strategy development, and more."
      },
      {
        question: "How do you source deals?",
        answer: "We utilize multiple channels, including the Penn and Moso network, university startup pitch competitions, accelerators, proprietary market research, and investor referrals. Our diverse sourcing approach helps us identify promising companies that might not be on everyone's radar."
      },
      {
        question: "What industries do you cover?",
        answer: "We have broad coverage capabilities but particularly strong expertise in enterprise SaaS, fintech, healthtech, consumer tech, and AI/ML applications. That said, we're adaptable and can focus on specific sectors based on our venture partners' investment thesis."
      }
    ]
  }
];

const Faqs = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <div className="subtle-bg py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-moso-dark mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600">
              Everything you need to know about working with Moso Capital.
            </p>
          </div>
        </div>
      </div>
      
      {/* FAQs Section */}
      <section className="section-container">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            {faqCategories.map((category, index) => (
              <div key={index}>
                <h2 className="text-2xl font-bold text-moso-dark mb-6">{category.category}</h2>
                <div className="space-y-4">
                  {category.items.map((faq, faqIndex) => (
                    <FaqItem key={faqIndex} faq={faq} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const FaqItem = ({ faq }: { faq: FaqItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
      <button
        className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-moso-dark">{faq.question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-moso-green" />
        ) : (
          <ChevronDown className="h-5 w-5 text-moso-green" />
        )}
      </button>
      
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-gray-600">{faq.answer}</p>
        </div>
      )}
    </div>
  );
};

export default Faqs;

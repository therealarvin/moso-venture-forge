
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "How often do we meet?",
    answer: "We typically meet weekly or biweekly, depending on the venture partner's preference and the stage of the engagement."
  },
  {
    question: "Who sends emails?",
    answer: "This is flexible and determined by the partner. Some prefer our team to handle all founder communications, while others prefer to be the point of contact."
  },
  {
    question: "Is Moso free?",
    answer: "Yes. We ask for mentorship and career support in return for our services, creating a mutually beneficial relationship."
  },
  {
    question: "Who's on the deal team?",
    answer: "Each deal team consists of hand-selected, experienced students, including a Managing Director, Principal, and Analysts with relevant expertise."
  },
  {
    question: "What else do you do?",
    answer: "Beyond deal sourcing and diligence, we create industry primers, market maps, and can take on ad hoc projects based on our venture partners' needs."
  }
];

const FaqsSection = () => {
  return (
    <section className="py-16 md:py-24 subtle-bg">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-moso-dark">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-moso-green mx-auto mt-4"></div>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FaqItem key={index} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FaqItem = ({ faq }: { faq: FaqItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm">
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

export default FaqsSection;

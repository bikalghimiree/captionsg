import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How do I use CaptionsG?",
    answer: "Create an account or log in, then visit our editor page. Upload your video by dragging and dropping or selecting a file, and wait for the automatic captioning process. Once complete, you can edit the captions in our intuitive editor."
  },
  {
    question: "What are the video limitations?",
    answer: "CaptionsG supports videos up to 10 minutes in length and common formats including MP4, WebM, and MOV. The maximum file size is 700MB to ensure optimal processing."
  },
  {
    question: "Do I need to create an account?",
    answer: "Yes, an account is required to use CaptionsG. This allows us to safely store your video data for up to 14 days and provide you with a better experience."
  },
  {
    question: "Can I edit the auto-generated captions?",
    answer: "Yes! Our caption editor allows you to modify the text of any caption. Simply click on any caption to edit its content. The changes are saved automatically."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="dark-glass rounded-lg hover:bg-dark-surface/50 transition-all duration-200"
        >
          <button
            className="w-full px-4 py-3 flex justify-between items-center text-left"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="font-medium text-dark-text-primary text-sm">{faq.question}</span>
            {openIndex === index ? (
              <ChevronUp className="h-4 w-4 text-dark-text-secondary flex-shrink-0" />
            ) : (
              <ChevronDown className="h-4 w-4 text-dark-text-secondary flex-shrink-0" />
            )}
          </button>
          {openIndex === index && (
            <div className="px-4 pb-3 text-sm text-dark-text-secondary">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
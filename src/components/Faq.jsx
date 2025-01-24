import { useState } from "react";

const faqData = [
  {
    question: "What is your return policy for subscrption-based services?",
    answer:
      "As a startup focused on customer satisfaction, we offer a 30-day money-back guarantee for all subscription-based services. If you are not satisfied with our services, you can request a refund within 30 days of your purchase.",
  },
  {
    question: "How long does it take to see results from our services?",
    answer: "we are the best at what we do, and result will be seen in no time",
  },

  {
    question: "what kind of customer support do you offer?",
    answer: "We offer 24/7 customer support via email, phone, and chat.",
  },

  {
    question: "what is the biggest challenge most invader face?",
    answer:
      "The biggest challenge most invader face is the lack of information",
  },
];

function Faq() {
  const [openFaq, setOpenFaq] = useState();

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  return (
    <div className="w-4/5 m-auto my-20 p-4">
      <h1 className="text-2xl font-semibold text-gray-600 mb-6">
        Frequently Asked Questions
      </h1>
      {faqData.map((faq, index) => (
        <div className="mb-4">
          <div
            onClick={() => toggleFaq(index)}
            className="flex justify-between items-center bg-white/50 px-4 py-3 rounded-lg cursor-pointer"
          >
            <h2 className="text-lg font-medium text-gray-700">
              {faq.question}
            </h2>
            <span className="text-xl text-gray-500">
              {openFaq === index ? "-" : "+"}
            </span>
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openFaq === index ? "max-h-40" : "max-h-0"
            }`}
          >
            <p className="p-4 text-gray-400">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Faq;

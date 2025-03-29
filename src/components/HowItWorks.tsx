
import React from "react";
import { Check } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Sign Up",
      description: "Create your free account with basic information and identity verification."
    },
    {
      number: "02",
      title: "Connect Data Sources",
      description: "Link your digital footprint - mobile payments, bills, and other financial activities."
    },
    {
      number: "03",
      title: "Get Your Score",
      description: "Our algorithm generates your initial credit score based on available data."
    },
    {
      number: "04",
      title: "Build Credit",
      description: "Improve your score over time by maintaining good financial behavior."
    },
    {
      number: "05",
      title: "Access Financial Services",
      description: "Use your score to access loans, credit, and other financial services."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Get Started</h2>
          <p className="text-lg text-gray-600">
            Follow these simple steps to establish your blockchain-based credit score.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex flex-col md:flex-row gap-6 mb-8 p-6 rounded-xl bg-white shadow-sm border border-gray-100"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold text-xl">
                  {step.number}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-gradient-to-r from-brand-blue to-brand-teal p-8 rounded-xl text-white">
          <h3 className="text-2xl font-bold mb-4 text-center">Ready to Build Your Credit Score?</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-start gap-2">
              <Check size={20} className="flex-shrink-0 mt-1" />
              <p>No traditional banking history required</p>
            </div>
            <div className="flex items-start gap-2">
              <Check size={20} className="flex-shrink-0 mt-1" />
              <p>Full control of your financial data</p>
            </div>
            <div className="flex items-start gap-2">
              <Check size={20} className="flex-shrink-0 mt-1" />
              <p>Transparent scoring algorithm</p>
            </div>
            <div className="flex items-start gap-2">
              <Check size={20} className="flex-shrink-0 mt-1" />
              <p>Access to fair financial services</p>
            </div>
          </div>
          <div className="text-center">
            <button className="bg-white text-brand-blue font-medium py-3 px-8 rounded-full hover:bg-white/90 transition-colors">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

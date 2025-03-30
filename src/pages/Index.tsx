
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import CreditScoringApp from "@/components/CreditScoringApp";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <section className="py-16 bg-gradient-to-r from-[#FFFDD0] to-[#FAE7C9]
">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Try Our Blockchain Credit Scoring</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Experience how our decentralized credit scoring system can help you build a financial
                identity and access fair credit, even without traditional banking history.
              </p>
            </div>
            <CreditScoringApp />
          </div>
        </section>
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

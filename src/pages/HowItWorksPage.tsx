
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import { Button } from "@/components/ui/button";

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-28">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl font-bold mb-6">How TrustFi Works</h1>
              <p className="text-lg text-gray-600">
                Learn how our blockchain-based credit scoring system provides financial access for everyone.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto mb-16">
              <div className="aspect-w-16 aspect-h-9">
                <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Explainer Video Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <HowItWorks />
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">How is my data secured?</h3>
                  <p className="text-gray-600">
                    Your data is encrypted and stored on a blockchain, ensuring it cannot be altered or 
                    accessed without your permission. You maintain ownership and control over your data at all times.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">What data sources do you use?</h3>
                  <p className="text-gray-600">
                    We analyze alternative data sources such as mobile money transactions, earning stability, utility bill payments, 
                    rental history, and digital footprints to establish creditworthiness.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">How quickly can I get a trust score?</h3>
                  <p className="text-gray-600">
                    Most users receive an initial trust score within 48 hours of connecting their data sources. 
                    Your score will continue to improve as more data becomes available.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">Who can see my trust score?</h3>
                  <p className="text-gray-600">
                    Only you and the financial institutions you explicitly authorize can view your trust score. 
                    You maintain full control over who can access your information.
                  </p>
                </div>
              </div>
              
              <div className="text-center mt-12">
                <Button className="bg-brand-blue hover:bg-brand-blue/90">
                  Get Started Now
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;

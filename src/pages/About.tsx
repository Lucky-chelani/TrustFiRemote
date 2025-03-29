
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-28">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold mb-6">About FairCredit</h1>
              <p className="text-lg text-gray-600 mb-8">
                FairCredit was founded with a mission to create financial inclusion for the 1.7 billion 
                adults worldwide who lack access to traditional banking services. By leveraging blockchain 
                technology and alternative data sources, we're building a more equitable financial system.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-8">
                Our mission is to provide fair credit access to everyone, regardless of their banking history. 
                We believe that financial inclusion is a fundamental right, and that everyone deserves the 
                opportunity to build a better future.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4">Our Technology</h2>
              <p className="text-gray-600 mb-8">
                FairCredit uses blockchain technology to create a secure, transparent, and immutable record 
                of financial behavior. Our proprietary algorithms analyze alternative data sources to create 
                a holistic view of creditworthiness that goes beyond traditional banking metrics.
              </p>
              
              <div className="bg-gradient-to-r from-brand-blue/10 to-brand-teal/10 p-8 rounded-xl mb-8">
                <h2 className="text-2xl font-semibold mb-4">Our Impact</h2>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-bold text-brand-blue mb-2">100K+</div>
                    <p className="text-gray-600">Users Worldwide</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-brand-teal mb-2">30+</div>
                    <p className="text-gray-600">Countries Served</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-brand-orange mb-2">$50M+</div>
                    <p className="text-gray-600">In Loans Facilitated</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;

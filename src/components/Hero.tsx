
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Database, Shield, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:py-32 relative overflow-hidden bg-[#FAF3E0]">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 via-brand-teal/5 to-brand-blue/10 -z-10"></div>
      
      {/* Blockchain-inspired background elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-brand-blue/10 animate-pulse-slow"></div>
      <div className="absolute bottom-40 right-10 w-32 h-32 rounded-full bg-brand-teal/10 animate-pulse-slow"></div>
      <div className="absolute top-60 right-1/4 w-16 h-16 rounded-full bg-brand-orange/10 animate-pulse-slow"></div>
      
      <div className="container mx-auto px-2">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Decentralised Credit Scoring </span> for a Trust Based Economy
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            A blockchain-based credit scoring system designed for the unbanked, using
            alternative data sources to provide fair access to financial services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-brand-blue hover:bg-brand-blue/90 h-12 px-6 text-lg">
              Check Your TrustScore <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button className="bg-brand-blue hover:bg-brand-blue/90 h-12 px-6 text-lg">
              Become a Lender <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-xl shadow-md card-hover">
            <div className="w-12 h-12 rounded-lg bg-brand-blue/10 flex items-center justify-center mb-4">
              <Database className="text-brand-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Decentralized Data</h3>
            <p className="text-gray-600">
              Your data is stored securely on blockchain, giving you full ownership and control.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md card-hover">
            <div className="w-12 h-12 rounded-lg bg-brand-teal/10 flex items-center justify-center mb-4">
              <Shield className="text-brand-teal" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fair Assessment</h3>
            <p className="text-gray-600">
              Alternative data sources ensure everyone gets a fair chance, regardless of banking history.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md card-hover">
            <div className="w-12 h-12 rounded-lg bg-brand-orange/10 flex items-center justify-center mb-4">
              <Users className="text-brand-orange" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Global Access</h3>
            <p className="text-gray-600">
              Designed for the unbanked, our system works worldwide with minimal requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

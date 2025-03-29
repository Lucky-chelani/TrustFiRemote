
import React from "react";
import { 
  BarChart, 
  ShieldCheck, 
  FileText, 
  DollarSign, 
  Smartphone, 
  Globe 
} from "lucide-react";

const Features = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Our Blockchain Credit Scoring Works
          </h2>
          <p className="text-lg text-gray-600">
            FairCredit uses innovative technology to provide credit scoring for those excluded by traditional systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 card-hover">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <Smartphone className="text-brand-blue" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Alternative Data</h3>
            <p className="text-gray-600">
              We analyze mobile payment history, utility bills, and digital footprints to establish creditworthiness.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 card-hover">
            <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
              <ShieldCheck className="text-brand-teal" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure Blockchain</h3>
            <p className="text-gray-600">
              Your data is encrypted and stored on blockchain, ensuring privacy and immutability.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 card-hover">
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
              <BarChart className="text-brand-orange" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Smart Scoring</h3>
            <p className="text-gray-600">
              AI algorithms assess your creditworthiness based on a holistic view of your financial behavior.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 card-hover">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <FileText className="text-brand-blue" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Digital Identity</h3>
            <p className="text-gray-600">
              Create a verifiable financial identity that you control and can share with lenders.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 card-hover">
            <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
              <DollarSign className="text-brand-teal" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Access to Loans</h3>
            <p className="text-gray-600">
              Get matched with lenders willing to provide fair rates based on your actual risk profile.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 card-hover">
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
              <Globe className="text-brand-orange" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Global Accessibility</h3>
            <p className="text-gray-600">
              Available worldwide, helping those without banking history access financial services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;


import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl overflow-hidden shadow-lg">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4">Start Building Your Credit Score Today</h2>
              <p className="text-gray-600 mb-6">
                Join thousands of people gaining access to fair financial services through our blockchain-based credit scoring.
              </p>
              <Button className="bg-brand-blue hover:bg-brand-blue/90">
                Get Started <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
            <div className="bg-gradient-to-br from-brand-blue to-brand-teal hidden md:block">
              <div className="h-full w-full p-12 flex items-center justify-center">
                <div className="text-white">
                  <div className="text-6xl font-bold mb-2">750+</div>
                  <div className="text-lg">Average score increase for users in 6 months</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

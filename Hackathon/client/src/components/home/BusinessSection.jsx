import React from "react";
import { Link } from "react-router-dom";
const BusinessSection = () => {
  return (
    <div className="business-section  text-white py-24 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Empower Your Business with AI
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Leverage artificial intelligence to streamline operations, enhance productivity, 
            and unlock actionable insights for smarter decision-making.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white/10 rounded-xl p-8 flex flex-col items-start hover:bg-white/20 hover:shadow-lg transition-all">
            <div className="text-5xl mb-4">📈</div>
            <h3 className="text-2xl font-semibold mb-2">Smart Analytics</h3>
            <p className="text-white/90">
              Get real-time insights from your business data and make informed decisions with confidence.
            </p>
          </div>
          <div className="bg-white/10 rounded-xl p-8 flex flex-col items-start hover:bg-white/20 hover:shadow-lg transition-all">
            <div className="text-5xl mb-4">⚙️</div>
            <h3 className="text-2xl font-semibold mb-2">Workflow Automation</h3>
            <p className="text-white/90">
              Automate repetitive tasks and focus on high-impact activities that drive growth.
            </p>
          </div>
          <div className="bg-white/10 rounded-xl p-8 flex flex-col items-start hover:bg-white/20 hover:shadow-lg transition-all">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold mb-2">Predictive Intelligence</h3>
            <p className="text-white/90">
              Anticipate market trends and uncover opportunities before they happen using AI-powered predictions.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-16">
          <Link to="/signup" className="bg-white text-red-500 font-bold py-3 px-8 rounded-full shadow-md hover:bg-gray-100 transition">Start Now</Link>
          <Link to="/about"  className="border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-red-500 transition"> Discover More</Link>
        </div>
      </div>
    </div>
  );
};

export default BusinessSection;

import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CoinContext } from "../../context/CoinContext"; // Import CoinContext

const Pricing = () => {
  const { currency } = useContext(CoinContext); // Access currency from context
  const [isYearly, setIsYearly] = useState(false);

  const pricingPlans = [
    {
      name: "Basic",
      monthlyPrice: 0,
      yearlyPrice: 0,
      description: "Perfect for beginners exploring crypto.",
      features: [
        "Real-Time Price Tracking",
        "Basic Analytics",
        "1 Price Alert",
        "Email Support",
      ],
    },
    {
      name: "Pro",
      monthlyPrice: 9.99,
      yearlyPrice: 99.99,
      description: "Advanced tools for serious investors.",
      features: [
        "All Basic Features",
        "Advanced Analytics",
        "10 Price Alerts",
        "Portfolio Management",
        "Priority Support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      monthlyPrice: 29.99,
      yearlyPrice: 299.99,
      description: "For professionals and businesses.",
      features: [
        "All Pro Features",
        "Unlimited Price Alerts",
        "Custom Integrations",
        "Dedicated Account Manager",
        "24/7 Support",
      ],
    },
  ];

  return (
    <div className="min-h-screen text-white px-4 sm:px-6 py-8">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Choose Your Plan
        </h1>
        <p className="text-sm sm:text-base text-gray-300 font-medium max-w-2xl mx-auto">
          Select the perfect plan to unlock the full potential of Crypto Price
          Tracker.
        </p>
      </section>

      {/* Pricing Toggle */}
      <div className="flex justify-center mb-8">
        <div className="flex items-center gap-3 bg-[#1a1333] rounded-full p-1">
          <button
            onClick={() => setIsYearly(false)}
            className={`px-4 py-2 rounded-full text-sm sm:text-base ${
              !isYearly ? "bg-purple-600 text-white" : "text-gray-300"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsYearly(true)}
            className={`px-4 py-2 rounded-full text-sm sm:text-base ${
              isYearly ? "bg-purple-600 text-white" : "text-gray-300"
            }`}
          >
            Yearly (Save 20%)
          </button>
        </div>
      </div>

      {/* Pricing Plans */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`relative bg-gradient-to-br from-purple-800/20 to-purple-900/10 rounded-xl p-6 border border-gray-700 transition-all duration-300 ${
              plan.popular
                ? "border-purple-500 shadow-lg shadow-purple-500/20"
                : "hover:shadow-lg hover:shadow-purple-500/20"
            }`}
          >
            {/* Popular Badge */}
            {plan.popular && (
              <span className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                Popular
              </span>
            )}
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              {plan.name}
            </h2>
            <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
            <div className="text-3xl sm:text-4xl font-bold mb-4">
              {currency?.symbol || "$"}
              {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
              <span className="text-sm font-normal text-gray-400">
                /{isYearly ? "year" : "month"}
              </span>
            </div>
            <ul className="space-y-2 mb-6">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-sm text-gray-300"
                >
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              to="/signup"
              className={`block text-center px-4 py-2 rounded-full text-sm sm:text-base font-medium transition ${
                plan.popular
                  ? "bg-purple-600 hover:bg-purple-700 text-white"
                  : "bg-gray-600 hover:bg-gray-500 text-white"
              }`}
            >
              Get Started
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Pricing;

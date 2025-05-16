import React from "react";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div className="min-h-screen text-white px-4 sm:px-6 py-8">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Discover Our Features
        </h1>
        <p className="text-sm sm:text-base text-gray-300 font-medium max-w-2xl mx-auto">
          Explore the powerful tools and features that make Crypto Price Tracker
          the best platform for managing your cryptocurrency investments.
        </p>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Feature Card 1 */}
        <div className="bg-gradient-to-br from-purple-800/20 to-purple-900/10 rounded-xl p-6 border border-gray-700 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
          <div className="flex items-center gap-4 mb-4">
            <svg
              className="w-8 h-8 text-purple-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
            <h2 className="text-xl font-semibold">Real-Time Tracking</h2>
          </div>
          <p className="text-gray-400 text-sm">
            Monitor cryptocurrency prices in real-time with up-to-date data from
            trusted sources.
          </p>
        </div>

        {/* Feature Card 2 */}
        <div className="bg-gradient-to-br from-purple-800/20 to-purple-900/10 rounded-xl p-6 border border-gray-700 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
          <div className="flex items-center gap-4 mb-4">
            <svg
              className="w-8 h-8 text-purple-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2zm0 8c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"
              />
            </svg>
            <h2 className="text-xl font-semibold">Multi-Currency Support</h2>
          </div>
          <p className="text-gray-400 text-sm">
            View prices in your preferred currency, including USD, EUR, TRY, and
            INR.
          </p>
        </div>

        {/* Feature Card 3 */}
        <div className="bg-gradient-to-br from-purple-800/20 to-purple-900/10 rounded-xl p-6 border border-gray-700 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
          <div className="flex items-center gap-4 mb-4">
            <svg
              className="w-8 h-8 text-purple-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <h2 className="text-xl font-semibold">Price Alerts</h2>
          </div>
          <p className="text-gray-400 text-sm">
            Set custom price alerts to stay informed about market movements.
          </p>
        </div>

        {/* Feature Card 4 */}
        <div className="bg-gradient-to-br from-purple-800/20 to-purple-900/10 rounded-xl p-6 border border-gray-700 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
          <div className="flex items-center gap-4 mb-4">
            <svg
              className="w-8 h-8 text-purple-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 11c0-1.104-.896-2-2-2s-2 .896-2 2c0 .738.402 1.376 1 1.723V15a1 1 0 002 0v-2.277c.598-.347 1-.985 1-1.723zm-8-2c-1.104 0-2 .896-2 2 0 .738.402 1.376 1 1.723V15a1 1 0 002 0v-2.277c.598-.347 1-.985 1-1.723zm16 0c-1.104 0-2 .896-2 2 0 .738.402 1.376 1 1.723V15a1 1 0 002 0v-2.277c.598-.347 1-.985 1-1.723z"
              />
            </svg>
            <h2 className="text-xl font-semibold">Portfolio Management</h2>
          </div>
          <p className="text-gray-400 text-sm">
            Track your crypto investments and manage your portfolio with ease.
          </p>
        </div>

        {/* Feature Card 5 */}
        <div className="bg-gradient-to-br from-purple-800/20 to-purple-900/10 rounded-xl p-6 border border-gray-700 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
          <div className="flex items-center gap-4 mb-4">
            <svg
              className="w-8 h-8 text-purple-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2V9a2 2 0 00-2-2h-2a2 2 0 00-2 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2"
              />
            </svg>
            <h2 className="text-xl font-semibold">Advanced Analytics</h2>
          </div>
          <p className="text-gray-400 text-sm">
            Access detailed charts and analytics to make informed decisions.
          </p>
        </div>

        {/* Feature Card 6 */}
        <div className="bg-gradient-to-br from-purple-800/20 to-purple-900/10 rounded-xl p-6 border border-gray-700 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
          <div className="flex items-center gap-4 mb-4">
            <svg
              className="w-8 h-8 text-purple-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 2c-1.104 0-2 .896-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2c0-1.104-.896-2-2-2h-2z"
              />
            </svg>
            <h2 className="text-xl font-semibold">User-Friendly Interface</h2>
          </div>
          <p className="text-gray-400 text-sm">
            Enjoy a seamless and intuitive experience designed for all users.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center mt-12">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
          Ready to Get Started?
        </h2>
        <Link
          to="/signup"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition text-sm sm:text-base"
        >
          Sign Up Now
        </Link>
      </section>
    </div>
  );
};

export default Features;

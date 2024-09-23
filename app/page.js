"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const chatMessages = [
    { type: 'ai', content: "Hello! How can I assist you today?" },
    { type: 'user', content: "I'm having an issue with my recent order." },
    { type: 'ai', content: "I'm sorry to hear that, Aditya. Could you please provide me with your order number? I'll be happy to look into this for you and help resolve any issues you're experiencing." },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMessageIndex((prevIndex) =>
        prevIndex < chatMessages.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Submitted email:', email);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-md shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-600">SupportAI</div>
          <div className="hidden md:flex space-x-4">
            {/* <a href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors">Features</a> */}
            {/* <a href="#pricing" className="text-gray-600 hover:text-indigo-600 transition-colors">Pricing</a> */}
            <a href="#cta" className="px-4 py-2 text-indigo-600 border border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors">
              Get Started
            </a>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6 text-indigo-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-b-lg">
            <div className="flex flex-col p-4 space-y-2">
              <a href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-indigo-600 transition-colors">Pricing</a>
              <a href="#cta" className="px-4 py-2 text-center text-indigo-600 border border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors">
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20 text-center">
        <div className="animate-fade-in-down">
          <span className="inline-block mb-4 px-3 py-1 text-sm font-semibold text-indigo-600 bg-indigo-100 rounded-full">Powered by Llama 3.1</span>
          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
            Customer Support that Feels <span className="text-indigo-600">Magical</span>
          </h1>
          <p className="mb-8 text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the future of customer interactions with our advanced AI, leveraging the power of Llama 3.1 for human-like conversations.
          </p>
          <form onSubmit={handleSubmit} className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-64 px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
            />
            <button type="submit" className="px-6 py-2 rounded-r-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
              Get Started
            </button>
          </form>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">Why Choose Our AI Assistant?</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: "💬", title: "Natural Conversations", description: "Our AI engages in fluid, context-aware dialogues that feel truly human." },
              { icon: "⚡", title: "Lightning Fast", description: "Instant responses and 24/7 availability ensure your customers are never left waiting." },
              { icon: "🧠", title: "Continuously Learning", description: "Powered by Llama 3.1, our AI evolves and improves with each interaction." },
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-blue-100">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">See It In Action</h2>
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="p-6">
              <div key={currentMessageIndex} className="animate-fade-in">
                <div className="mb-4 flex items-center">
                  {chatMessages[currentMessageIndex].type === 'ai' ? (
                    <div className="mr-3 p-2 bg-indigo-100 rounded-full">
                      <svg className="w-6 h-6 text-indigo-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                  ) : (
                    <div className="mr-3 p-2 bg-green-100 rounded-full">
                      <svg className="w-6 h-6 text-green-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    </div>
                  )}
                  <span className="font-semibold">
                    {chatMessages[currentMessageIndex].type === 'ai' ? 'AI Assistant:' : 'Aditya:'}
                  </span>
                </div>
                <p className="text-gray-700 pl-12">{chatMessages[currentMessageIndex].content}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">What Our Clients Say</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Arjun Reddy", role: "E-commerce Business Owner", feedback: "This AI has transformed the way we handle customer support. The speed and accuracy are unparalleled!" },
              { name: "Aditya Roy", role: "SaaS Founder", feedback: "I was amazed by how human the interactions felt. Our customers love the 24/7 availability." },
              { name: "Prathrana Sharma", role: "Freelance Designer", feedback: "It’s like having an extra team member who's always available and never tired. The AI learns so quickly!" },
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <p className="mb-4 text-gray-700">"{testimonial.feedback}"</p>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 bg-gradient-to-r from-indigo-500 to-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-4xl font-bold">Ready to Transform Your Customer Support?</h2>
          <p className="mb-8 text-lg">Sign up today and experience the power of AI-driven interactions.</p>
          <a href="#pricing" className="px-8 py-3 bg-white text-indigo-600 rounded shadow hover:bg-gray-100 transition-colors">
            Get Started Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-gray-400">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 SupportAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

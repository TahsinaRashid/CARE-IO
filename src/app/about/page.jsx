'use client';
import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="bg-base-100 min-h-screen">
      {/* Hero Section */}
      <div className="hero bg-base-200 py-20">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-primary">About CARE-IO</h1>
            <p className="py-6 text-lg">
              Providing top-notch professional services with a touch of care and excellence since 2026.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            At CARE-IO, we believe that everyone deserves high-quality service at an affordable price. 
            Whether it's baby care, old care or sick people care, our experts are trained 
            to deliver the best results.
          </p>
          <ul className="list-disc list-inside space-y-2 text-primary font-semibold">
            <li>Expert Professionals</li>
            <li>15% Flat Discount on all services</li>
            <li>24/7 Customer Support</li>
          </ul>
        </div>
        <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
           <Image 
            src="https://i.postimg.cc/YC6mVPTh/hands-holding.avif" 
            alt="Our Team" 
            fill 
            className="object-cover"
           />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
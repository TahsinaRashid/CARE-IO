"use client";
import React from 'react';

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully! We'll get back to you soon.");
  };

  return (
    <div className="min-w-auto mx-auto px-6 py-16 ">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-neutral">Get In Touch</h1>
        <p className="text-gray-700 mt-2">Have questions? We are here to help!</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="card bg-primary text-primary-content p-6 hover:scale-105 transition-transform">
            <h3 className="font-bold text-lg">Call Us</h3>
            <p>+880 1234 567890</p>
          </div>
          <div className="card bg-secondary text-secondary-content p-6 hover:scale-105 transition-transform">
            <h3 className="font-bold text-lg">Email Us</h3>
            <p>support@care.com</p>
          </div>
          <div className="card bg-primary text-primary-content p-6 hover:scale-105 transition-transform">
            <h3 className="font-bold text-lg">Visit Us</h3>
            <p>123 Care Street, Dhaka, Bangladesh</p>
            <p className='text-md'>Fri-Sun= 9:00 AM - 6:00 PM</p>
          </div>
          
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2 card bg-base-200 shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-control">
              <label className="label text-gray-800"><span className="label-text ">Your Name</span></label>
              <input type="text" placeholder="Tahsina Rashid" className="input input-bordered w-full hover:scale-105" required />
            </div>
            <div className="form-control">
              <label className="label text-gray-800"><span className="label-text">Email Address</span></label>
              <input type="email" placeholder="email@example.com" className="input input-bordered w-full hover:scale-105" required />
            </div>
            <div className="form-control">
              <label className="label text-gray-800 mr-2"><span className="label-text">Message</span></label>
              <textarea className="textarea textarea-bordered h-full w-full hover:scale-105" placeholder="Tell us how we can help..." required></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-outline w-full">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
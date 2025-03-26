import Layout from '../components/Layout';
import React from 'react';

const Contact = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-l from-[#fdbb2d] to-[#22c1c3] text-white py-16 px-6">
        {/* Contact Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold" data-aos="zoom-in">📞 Contact Us</h1>
          <p className="text-white mt-4 max-w-3xl mx-auto" data-aos="fade-up">
            Have questions? Reach out to us, and we'll get back to you as soon as possible. We're here to help!
          </p>
        </div>

        {/* Contact Details Section */}
        <div className="max-w-4xl mx-auto bg-white text-black p-8 rounded-lg shadow-lg">
          <div className="space-y-6">
            <div className="flex items-center">
              <span className="text-3xl text-blue-600 mr-4">📍</span>
              <div>
                <h2 className="text-2xl font-semibold">Our Office</h2>
                <p>123 Main Street, City, Country</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <span className="text-3xl text-blue-600 mr-4">📞</span>
              <div>
                <h2 className="text-2xl font-semibold">Call Us</h2>
                <p>+1 (234) 567-890</p>
              </div>
            </div>

            <div className="flex items-center">
              <span className="text-3xl text-blue-600 mr-4">✉️</span>
              <div>
                <h2 className="text-2xl font-semibold">Email Us</h2>
                <p>contact@domain.com</p>
              </div>
            </div>

            <div className="flex items-center">
              <span className="text-3xl text-blue-600 mr-4">🌐</span>
              <div>
                <h2 className="text-2xl font-semibold">Visit Our Website</h2>
                <p>www.domain.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-semibold mb-6">Follow Us</h2>
          <div className="flex justify-center space-x-6">
            <a href="https://www.facebook.com" className="text-white text-2xl" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" className="text-white text-2xl" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com" className="text-white text-2xl" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com" className="text-white text-2xl" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;

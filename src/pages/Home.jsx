import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import AOS from 'aos';
import 'aos/dist/aos.css';
import cover1 from '../pictures/cover1.jpg';
import mentors from '../components/Mentors'; 
import { FaChalkboardTeacher, FaGraduationCap, FaUsers, FaRocket } from 'react-icons/fa';

const features = [
  { id: 1, title: "Expert Mentors", description: "Learn from the best mentors with years of experience.", icon: <FaChalkboardTeacher className="text-blue-500 text-4xl" /> },
  { id: 2, title: "Personalized Guidance", description: "Tailored mentorship to match your academic goals.", icon: <FaGraduationCap className="text-green-500 text-4xl" /> },
  { id: 3, title: "Community Support", description: "Join a network of learners and professionals.", icon: <FaUsers className="text-yellow-500 text-4xl" /> },
  { id: 4, title: "Success Guaranteed", description: "Proven track record of student success.", icon: <FaRocket className="text-red-500 text-4xl" /> },
];

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <div 
        className="min-h-screen text-white flex flex-col md:flex-row items-center justify-center px-6 md:px-20 bg-cover bg-center relative" 
        style={{ 
          backgroundImage: `url(${cover1})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay */}
        <div className="absolute "></div>
        
        {/* Content Container */}
        <div className="flex flex-col md:flex-row items-center w-full relative z-10" data-aos="fade-up">
          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left" data-aos="fade-right">
            <h1 className="text-white font-extrabold text-5xl md:text-6xl">
              STARs ✨
            </h1>
            <p className="text-lg md:text-xl mt-4 text-amber-300">
              Academic & Admission Mentorship
            </p>
            <a href="/tutorials">
              <button className="mt-6 px-8 py-3 text-lg font-semibold rounded-full shadow-lg bg-gradient-to-r from-pink-500 to-red-600 text-white hover:from-red-600 hover:to-pink-500 hover:scale-110 transform transition-all duration-300">
                🚀 Enroll Now
              </button>
            </a>
          </div>
          
          {/* Image Section */}
          <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center" data-aos="fade-left">
            <div className='bg-white p-6 rounded-lg shadow-lg max-w-lg text-black'>
              <h1 className='text-blue-700 font-bold text-2xl text-center'>Why Enroll?</h1>
              <p className="mt-4 text-gray-700 text-center">
                Unlock your potential with expert mentorship. Get personalized guidance for academic excellence and admissions success. Join us and take the first step towards your dreams!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-100 py-16 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-8" data-aos="fade-down">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center" data-aos="fade-up">
              {feature.icon}
              <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mentors Section */}
      <div className="bg-white text-black py-16 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-8" data-aos="fade-down">Meet Our Mentors</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mentors.map((mentor) => (
            <div key={mentor.id} className="relative bg-gray-100 p-6 rounded-xl shadow-lg transform transition duration-500 hover:scale-105" data-aos="zoom-in">
              <img src={mentor.image} alt={mentor.name} className="w-24 h-24 rounded-full mx-auto" />
              <h3 className="text-xl font-semibold text-center mt-4">{mentor.name}</h3>
              <p className="text-center text-gray-600">{mentor.expertise}</p>
              <span className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 text-sm rounded-full">Mentor</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p className="text-lg">🌟 STARs Mentorship | Achieve Your Dreams 🚀</p>
        <p className="text-sm mt-2">© {new Date().getFullYear()} STARs. All rights reserved.</p>
      </footer>
    </Layout>
  );
};

export default Home;

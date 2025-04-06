import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import AOS from 'aos';
import 'aos/dist/aos.css';
import cover1 from '../pictures/cover3.jpg';
import mentors from '../components/Mentors';
import faculty from '../components/Faculty';
import techSupport from '../components/TechSupport';
import { FaChalkboardTeacher, FaGraduationCap, FaUsers, FaRocket } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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

  const [selectedMentor, setSelectedMentor] = useState(null);

  return (
    <Layout>
      {/* Hero Section */}
      <div
        className="min-h-screen w-full text-white flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-20 py-10 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${cover1})` }}
      >
        <div className="relative z-10 w-full md:w-1/2 mt-10 md:mb-0" data-aos="fade-right">
          <h1 className="text-black font-extrabold text-4xl sm:text-5xl md:text-6xl">STARs ✨</h1>
          <p className="text-base sm:text-lg md:text-xl mt-4 text-red-800">Academic & Admission Mentorship</p>
          <div className="flex flex-col sm:flex-row sm:items-center mt-6">
            <Link to="/tutorials">
              <button className="w-full sm:w-auto px-8 py-3 text-lg font-semibold rounded-full shadow-lg bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-red-600 hover:to-green-500 hover:scale-110 transform transition-all duration-300">
                🚀 Enroll Now
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full md:w-auto bg-white p-3 rounded-lg shadow-lg text-black mt-10 md:mt-0" data-aos="fade-left">
          <h1 className="text-blue-700 font-bold text-xl text-center">Why Enroll?</h1>
          <p className="mt-2 text-gray-700 text-center text-sm sm:text-base">
            Unlock your potential with expert mentorship. Get personalized guidance for academic excellence and admissions success.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-100 py-16 px-4 sm:px-6 md:px-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-700 mb-8" data-aos="fade-down">What We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center" data-aos="fade-up">
              {feature.icon}
              <h3 className="text-lg md:text-xl font-semibold mt-4">{feature.title}</h3>
              <p className="text-gray-600 mt-2 text-sm md:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mentors, Faculty & Tech Support Sections */}
      {[{ title: "Meet Our Faculty", data: faculty }, { title: "Our Mentors", data: mentors }, { title: "Tech Support", data: techSupport }].map((section, index) => (
        <div key={index} className="bg-white text-black py-16 px-4 sm:px-6 md:px-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-700 mb-8" data-aos="fade-down">{section.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {section.data.map((person) => (
              <div
                key={person.id}
                className="relative bg-gray-100 p-6 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 cursor-pointer"
                data-aos="zoom-in"
                onClick={() => setSelectedMentor(person)}
              >
                <img src={person.image} alt={person.name} className="w-32 h-32 object-cover rounded-full mx-auto" />
                <h3 className="text-lg md:text-xl font-semibold text-center mt-4">{person.name}</h3>
                <p className="text-center text-gray-600 text-sm md:text-base">{person.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Quote Modal */}
      {selectedMentor && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-opacity-30 bg-gray-900 z-50 px-4" onClick={() => setSelectedMentor(null)}>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
            <h2 className="text-xl font-semibold text-blue-700">{selectedMentor.name}'s Quote</h2>
            <p className="mt-4 text-gray-700">"{selectedMentor.quote || 'Inspiration is the key to success!'}"</p>
            <button className="mt-4 px-6 py-2 bg-red-500 text-white rounded-full" onClick={() => setSelectedMentor(null)}>Close</button>
          </div>
        </div>
      )}

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-6 text-center px-4">
        <p className="text-lg">🌟 STARs Mentorship | Achieve Your Dreams 🚀</p>
      </footer>
    </Layout>
  );
};

export default Home;

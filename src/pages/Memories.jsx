import React from 'react';
import Layout from '../components/Layout';

const Memories = () => {
  return (
    <Layout>
      <div
        className="min-h-screen bg-gradient-to-r from-[#34b7f1] to-[#11a6b7] text-white flex items-center justify-center py-16 px-6"
      >
        <div className="bg-black bg-opacity-40 w-full h-full absolute inset-0"></div> {/* Overlay for text contrast */}
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold text-white" data-aos="zoom-in">🕰️ Memories</h1>
          <p className="text-white mt-4 max-w-3xl mx-auto" data-aos="fade-up">
            Stay tuned for updates as we bring you unforgettable memories from our journey. More content coming soon!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Memories;

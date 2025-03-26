import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col justify-between">
        <div className="flex-grow">{children}</div>
        <Footer />
      </main>
    </>
  );
};

export default Layout;

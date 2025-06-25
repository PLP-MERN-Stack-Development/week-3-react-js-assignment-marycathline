import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main
        className="min-h-screen p-6"
        style={{ backgroundColor: 'hwb(54 31% 3%)' }}
      >
        <Outlet /> {/* ✅ Always renders routed child */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;

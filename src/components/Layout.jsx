import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />   {/* Yahi par Home/Docs content render hoga */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;

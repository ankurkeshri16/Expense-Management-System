import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({children}) => {
  return (
    <>
    <Header/>
    <div className='content container mt-4'>
        {children}
    </div>
    <Footer/>
    </>
  );
};

export default Layout;
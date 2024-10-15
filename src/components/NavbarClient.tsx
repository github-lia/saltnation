'use client';

import React, { useState, useEffect } from 'react';

const NavbarClient = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsTabletOrMobile(window.innerWidth < 1024); // Tablet breakpoint
    };

    handleResize(); // Check on initial load
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Desktop Navigation */}
      {!isTabletOrMobile && (
        <>
          <ul className="flex-grow flex justify-center space-x-6 text-primary">
            <li><a href="#home" className="hover:text-brandLightOrange whitespace-nowrap">Home</a></li>
            <li><a href="#projects" className="hover:text-brandLightOrange whitespace-nowrap">Projects</a></li>
            <li><a href="#about" className="hover:text-brandLightOrange whitespace-nowrap">About Us</a></li>
            <li><a href="#salt-app" className="hover:text-brandLightOrange whitespace-nowrap">Salt App</a></li>
            <li><a href="#icommits" className="hover:text-brandLightOrange whitespace-nowrap">Icommits</a></li>
            <li><a href="#contact" className="hover:text-brandLightOrange whitespace-nowrap">Contact</a></li>
          </ul>
          <div className="flex-shrink-0">
            <button className="bg-brandOrange hover:bg-brandLightOrange text-primary font-bold py-2 px-4 rounded whitespace-nowrap">
              Get Started
            </button>
          </div>
        </>
      )}

      {/* Tablet/Mobile Hamburger Menu */}
      {isTabletOrMobile && (
        <button onClick={toggleMenu} className="text-primary focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      )}

      {/* Tablet/Mobile Menu */}
      {isTabletOrMobile && isMenuOpen && (
        <div className="fixed inset-0 bg-primary z-50 flex items-center justify-center">
          <div className="absolute top-4 right-8">
            <button onClick={toggleMenu} className="text-primary focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul className="text-primary text-center">
            <li className="my-4"><a href="#home" className="text-2xl hover:text-brandLightOrange" onClick={toggleMenu}>Home</a></li>
            <li className="my-4"><a href="#projects" className="text-2xl hover:text-brandLightOrange" onClick={toggleMenu}>Projects</a></li>
            <li className="my-4"><a href="#about" className="text-2xl hover:text-brandLightOrange" onClick={toggleMenu}>About Us</a></li>
            <li className="my-4"><a href="#salt-app" className="text-2xl hover:text-brandLightOrange" onClick={toggleMenu}>Salt App</a></li>
            <li className="my-4"><a href="#icommits" className="text-2xl hover:text-brandLightOrange" onClick={toggleMenu}>Icommits</a></li>
            <li className="my-4"><a href="#contact" className="text-2xl hover:text-brandLightOrange" onClick={toggleMenu}>Contact</a></li>
            <li className="mt-8">
              <button className="bg-brandOrange hover:bg-brandLightOrange text-primary font-bold py-2 px-4 rounded text-xl" onClick={toggleMenu}>
                Get Started
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavbarClient;

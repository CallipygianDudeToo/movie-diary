"use client";

import React from 'react';

const Navbar = () => {
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const opacity = Math.min(scrollY / 400, 0.6);

  return (
    <div
      style={{
        backgroundColor: `rgba(17, 24, 39, ${opacity})`, // Tailwind gray-900
        transition: 'background-color 0.2s',
      }}
      className={`flex z-50 items-center justify-evenly w-full fixed top-0 left-0 py-3 mask-light-fade-bottom`}
    >
      <h1 className='text-4xl font-bold'>the movie diary.</h1>
    </div>
  );
};

export default Navbar;
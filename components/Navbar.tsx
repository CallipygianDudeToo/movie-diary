"use client";

import React from 'react';

const Navbar = () => {
  // const [scrollY, setScrollY] = React.useState(0);

  // React.useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollY(window.scrollY);
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);
  // const blurAmount = Math.min(scrollY / 10, 10);

  return (
    <div
      // style={{
      //   backdropFilter: `blur(${blurAmount}px)`,
      //   WebkitBackdropFilter: `blur(${blurAmount}px)`,
      //   transition: 'backdrop-filter 0.3s',
      // }}
      className={`flex z-50 items-center justify-evenly w-full fixed top-0 left-0 py-3 bg-transparent mask-light-fade-bottom`}
    >
      <h1 className='text-4xl font-bold'>the movie diary.</h1>
    </div>
  );
};

export default Navbar;
"use client";

import React from 'react';
import SearchBar from './SearchBar';

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
			<div className='w-1/3' />
			<h1 className='text-4xl font-bold w-1/3 text-center'>the movie diary.</h1>
			<SearchBar />
		</div>
	);
};

export default Navbar;
"use client"

import { useRouter } from 'next/navigation';
import React from 'react';

const SearchBar = () => {
    const [showInput, setShowInput] = React.useState(false);
    const [value, setValue] = React.useState('');
    const inputRef = React.useRef<HTMLInputElement>(null);
    const router = useRouter();

    React.useEffect(() => {
        if (showInput && inputRef.current) {
            inputRef.current.focus();
        }
    }, [showInput]);

    const clickHandler = () => {
        if (!showInput) {
            setShowInput(true);
            inputRef.current?.focus();
        } else if (value.trim()) {
            router.push(`/search/${value}`);
            setShowInput(false);
            setValue('');
        }
    }

    return (
        <div className="relative flex items-center w-1/3">
            <input
                ref={inputRef}
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder="Search..."
                className={`z-0 transition-all duration-300 bg-gray-900 text-white rounded px-3 py-1 ml-2 outline-none border border-gray-600 ${showInput ? 'w-48 opacity-100' : 'w-0 opacity-0 pointer-events-none'}`}
                style={{ minWidth: 0 }}
                onKeyDown={e => {
                    if (e.key === 'Enter') {
                        clickHandler();
                    }
                }}
            />
            <button
                className="p-2 text-gray-300 hover:text-white focus:outline-none -ml-10 z-10"
                onClick={clickHandler}
                aria-label="Search"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
                </svg>
            </button>
        </div>
    );
};

export default SearchBar;
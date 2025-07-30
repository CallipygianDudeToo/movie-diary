'use client'

import React from 'react';
import { useRouter } from 'next/navigation';

interface NameCardProps {
    name: string;
    character?: string;
    id?: number;
    job?: string;
    onClickHandler?: () => void;
};

const NameCard = ({ name, character, id, job, onClickHandler }: NameCardProps) => {
    const router = useRouter();

    const defaultOnClick = () => {
        if (!id || !job) return;

        router.push(`/personality/${id}`)
        window.sessionStorage.setItem(`personality`, JSON.stringify({ id, job }));
    }

    const handleClick = onClickHandler || defaultOnClick;

    return (
        <button
            className={`relative group font-arial text-xs font-weight-400 m-1 px-2 py-1 w-fit text-gray-300 rounded-sm ${ (id || onClickHandler) && 'clickable'}`}
            style={{
                backgroundColor: 'rgb(40,48,56)',
            }}
            onClick={handleClick} 
        >
            {name}

            {character && <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 w-max max-w-xs px-2 py-1 rounded bg-zinc-900 text-zinc-100 text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none z-10">
                {character}
            </div>}
        </button>
    )
};

export default NameCard;
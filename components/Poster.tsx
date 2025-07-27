import React from 'react';

interface PosterProps {
    poster_path?: string | null;
    title?: string;
    addClassName?: string;
    onClick?: () => void;
}

const Poster = ({ poster_path, title, addClassName, onClick }: PosterProps) => {
    if (!poster_path) {
        return (
            <div
                className={`rounded-lg shadow-2xl h-60 w-40 bg-gray-800 flex items-center justify-center` + (addClassName ? ` ${addClassName}` : '')}
                onClick={onClick}
            >
                <span className="text-gray-400">{title}</span>
            </div>
        )
    }

    return (
        <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
            className={`rounded-lg shadow-2xl h-60 w-40` + (addClassName ? ` ${addClassName}` : '')}
            onClick={onClick}
        />
    )
}

export default Poster;
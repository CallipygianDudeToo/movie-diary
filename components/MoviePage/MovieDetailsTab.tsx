"use client"

import React from 'react';
import { MovieProps } from './MovieProps';
import { useState } from 'react';
import Cast from './Cast';
import Crew from './Crew';
import DetailsGenres from './DetailsGenres';

const tabs = ['CAST', 'CREW', 'DETAILS & GENRES'];

const MovieDetailsTab = ({ movie }: MovieProps) => {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <div className="w-full justify-center px-[20rem] mt-4" >
            <div className="flex border-b border-gray-700">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`px-4 py-2 text-sm  ${activeTab === tab
                                ? 'border-b-2 border-green-400 text-green-400 font-weight-400'
                                : 'text-gray-400 hover:text-green-400'
                            }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="mt-4 text-white">
                {activeTab === tabs[0] && <Cast movie={movie} />}
                {activeTab === tabs[1] && <Crew movie={movie} />}
                {activeTab === tabs[2] && <DetailsGenres movie={movie} />}
            </div>
        </div>
    )
};

export default MovieDetailsTab;
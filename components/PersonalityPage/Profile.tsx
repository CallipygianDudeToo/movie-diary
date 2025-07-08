import React from 'react';
import { PersonalityProps } from './PersonalityProps';
import { getKnownForJobs } from './helper';

const Profile = ({ personality }: PersonalityProps) => {
    const jobs = getKnownForJobs(personality) ?? [];
    return (
        <div className="relative h-[32rem] w-full flex flex-row  justify-center overflow-hidden rounded-lg">
            <div className='w-1/3 mt-16'>
                <p className="text-base text-gray-300 pl-15" style={{ fontFamily: 'Georgia, serif' }}>
                    {personality.biography ? personality.biography : `The first rule of ${personality.name} is: you do not talk about ${personality.name}.`}
                </p>
            </div>
            
            <div className='w-1/3 flex flex-col items-center justify-center mask-fade-top'>
                <div className='mask-light-fade-left'>
                    <div className='mask-light-fade-right'>
                        <img
                            src={(personality.profile_path) ? `https://image.tmdb.org/t/p/w1280${personality.profile_path}` : '/tylerdurden.jpg'}
                            alt={personality.name}
                            className="h-[30rem] w-auto self-center object-contain z-0 mask-fade-bottom"
                        /> 
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <h1 className="text-2xl font-bold -mt-8">{personality.name}</h1>
                    <h1 className="text-xl">{personality.known_for_department}</h1>
                </div>
            </div>

            <div className='w-1/3 flex flex-col items-center mt-16' style={{ fontFamily: 'Georgia, serif' }}>
                <h1 className='font-bold text-xl mb-3'>Known For</h1>
                {jobs.map(job => {
                    return (
                        <button key={job} className="text-base hover:text-blue-400">
                            {job}
                        </button>
                    );
                })}
            </div>
        </div>
    )
};

export default Profile;
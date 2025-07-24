import React from 'react';
import { PersonalityProps, PersonalityWithFilterJobsProps, PersonalityWithFilterProps } from './PersonalityProps';

const Profile = ({ personality, filterOnJob, setFilterOnJob, jobs }: PersonalityWithFilterJobsProps) => {
    return (
        <div className="relative h-auto w-full flex flex-row justify-center rounded-lg">
            <ProfileBiography personality={personality} />
            <ProfileImage personality={personality} filterOnJob={filterOnJob} setFilterOnJob={setFilterOnJob}/>
            <ProfileKnownFor personality={personality} filterOnJob={filterOnJob} setFilterOnJob={setFilterOnJob} jobs={jobs}/>
        </div>
    )
};

const ProfileBiography = ({ personality }: PersonalityProps) => {
    return (
        <div className='w-1/3 mt-16 overflow-y-auto max-h-[24rem] profile-bio-scrollbar pr-2'>
            <p className="text-base text-gray-300 pl-15 font-georgia">
                {personality.biography ? personality.biography : `The first rule of ${personality.name} is: you do not talk about ${personality.name}.`}
            </p>
        </div>
    );
};

const ProfileImage = ({ personality, filterOnJob }: PersonalityWithFilterProps) => {
    return (
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
                <h1 className="text-xl">{filterOnJob}</h1>
            </div>
        </div>
    );
};

const ProfileKnownFor = ({ setFilterOnJob, jobs }: PersonalityWithFilterJobsProps) => {
    return (
        <div className='w-1/3 flex flex-col items-center mt-16'>
            <h1 className='font-bold text-xl mb-3 font-georgia'>Filter On:</h1>
            {jobs.map(job => {
                return (
                    <button key={job} className="text-base hover:text-blue-400" onClick={() => setFilterOnJob(job)}>
                        {job}
                    </button>
                );
            })}
        </div>
    );
};

export default Profile;
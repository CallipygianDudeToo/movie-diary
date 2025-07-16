"use client"

import React from 'react';
import { PersonalityProps } from './PersonalityProps';
import Profile from './Profile';
import MovieCards from './MovieCards';
import { getKnownForJobs } from './helper';

const PersonalityPage = ({ personality } : PersonalityProps) => { 
    const jobs = getKnownForJobs(personality) ?? [];
    const [filterOnJob, setFilterOnJob] = React.useState(jobs[0]);

    return (
        <>
            <Profile personality={personality} filterOnJob={filterOnJob} setFilterOnJob={setFilterOnJob} jobs={jobs}/>
            <MovieCards personality={personality} filterOnJob={filterOnJob} setFilterOnJob={setFilterOnJob} />
        </>
    )
};

export default PersonalityPage;
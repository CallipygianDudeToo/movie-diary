import React from 'react';
import { PersonalityProps } from './PersonalityProps';
import Profile from './Profile';
import MovieCards from './MovieCards';

const PersonalityPage = ({ personality } : PersonalityProps) => { 
    return (
        <>
            <Profile personality={personality} />
            <MovieCards personality={personality} />
        </>
    )
};

export default PersonalityPage;
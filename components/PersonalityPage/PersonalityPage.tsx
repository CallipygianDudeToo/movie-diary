import React from 'react';
import { PersonalityProps } from './PersonalityProps';

const PersonalityPage = ({ personality } : PersonalityProps) => {
    return (
        <div>
            <h1 className="text-2xl font-bold">{personality.name}</h1>
        </div>
    )
};

export default PersonalityPage;
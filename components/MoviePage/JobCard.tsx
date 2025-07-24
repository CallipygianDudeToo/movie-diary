import React from 'react';
import NameCard from './NameCard';

interface JobCardProps {
    job: string;
    people: Array<{
        id: number;
        name: string;
        department: string;
        job: string;
        profile_path: string | null;
    }>
};

const JobCard = ({ job, people }: JobCardProps) => {
    return (
        <div className='flex flex-wrap w-full items-center'>
            <span className="text-base mr-1 text-gray-300 font-georgia">
                {`${job}:`}
            </span>
            {people.map(person =>
                <NameCard key={person.id} name={person.name} id={person.id} job={person.job} />
            )}
        </div>
    )
};

export default JobCard;
import React from 'react';
import { MovieProps } from './MovieProps';
import { crewJobsList } from '../commonHelper';
import { getCrewMap } from './helper';
import JobCard from './JobCard';

const Crew = ({ movie }: MovieProps) => {
  const crewMap = getCrewMap(movie);

  return (
    <>
      {
        crewJobsList.map(job => (
          crewMap.has(job) && 
            <JobCard key={job} job={job} people={crewMap.get(job) ?? []}/>
        ))
      }
    </>
  );
};

export default Crew;
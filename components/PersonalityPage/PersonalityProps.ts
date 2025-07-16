import { Personality } from "@/types";

export interface PersonalityProps {
    personality: Personality;
};

export interface PersonalityWithFilterProps extends PersonalityProps {
    filterOnJob: string;
    setFilterOnJob: (job: string) => void;
}

export interface PersonalityWithFilterJobsProps extends PersonalityWithFilterProps {
    jobs: string[];
};
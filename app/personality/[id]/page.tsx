import { ErrorPage, PersonalityPage } from '@/components';
import { fetchPersonalityById } from '@/tmdb';
import { Personality } from '@/types';
import { Metadata } from 'next';
import React from 'react';

interface PersonalityPageProps {
    params: Promise<{ id: string }>;
};

export async function generateMetadata(props: PersonalityPageProps): Promise<Metadata> {
    try {
        const params = await props.params;
        const personality: Personality = await fetchPersonalityById(params.id);
        return {
            title: `${personality.name}`,
        };
    } catch (e) {
        return {
            title: `nope`,
        };
    };
};

export default async function Page(props: PersonalityPageProps) {
  try {
        const params = await props.params;
        const personality: Personality = await fetchPersonalityById(params.id);
        
        return (
            <PersonalityPage personality={personality} />
        );
    } catch (e) {
        console.error(e);
        return (
            <ErrorPage/>
        );
    };
};

import { ErrorPage } from '@/components';
import { Metadata } from 'next';
import React from 'react';

interface SearchPageProps {
    params: Promise<{ input: string }>;
};

export async function generateMetadata(props: SearchPageProps): Promise<Metadata> {
    try {
        const params = await props.params;
        // const personality: Personality = await fetchPersonalityById(params.id);
        return {
            title: 'Search'//`${personality.name}`,
        };
    } catch (e) {
        return {
            title: `nope`,
        };
    };
};

export default async function Page(props: SearchPageProps) {
  try {
        const params = await props.params;
        // const personality: Personality = await fetchPersonalityById(params.id);
        
        return (
            // <PersonalityPage personality={personality} />
            <div>{`SearchPage ${params.input}`}</div>
        );
    } catch (e) {
        console.error(e);
        return (
            <ErrorPage/>
        );
    };
};

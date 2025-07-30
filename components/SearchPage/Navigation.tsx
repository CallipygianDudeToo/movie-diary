'use client';

import React from 'react';
import NameCard from '../NameCard';
import { useRouter } from 'next/navigation';

interface NavigationProps {
    page: number;
    totalPages: number;
    input: string;
}

const Navigation = ({ page, totalPages, input }: NavigationProps) => {
    const router = useRouter();
    // TODO: Possibly use something larger than a namecard
    return (
        <div className='w-full flex justify-between px-3'>
            { page > 1 ? <NameCard name='Previous' onClickHandler={() => { router.push(`/search/${input}/${page-1}`) }} /> : <span />}
            { page < totalPages ? <NameCard name='Next' onClickHandler={() => { router.push(`/search/${input}/${page+1}`) }} /> : <span />}
        </div>
    )
};

export default Navigation;
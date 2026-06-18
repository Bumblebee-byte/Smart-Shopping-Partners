import React from 'react';
import { client } from '@/sanity/lib/client';
import LeadershipCard from './LeadershipCard'; // Now properly pointing to the file in the same folder

export default async function LeadershipGrid() {
    const query = `*[_type == "leader"]`;
    const leaders = await client.fetch(query);

    return (
        <section className="w-full py-24 px-8 max-w-7xl mx-auto border-t border-gray-800">
            <h2 className="text-3xl font-serif mb-16">Executive Leadership</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
                {leaders.map((leader: any, index: number) => (
                    <LeadershipCard key={index} leader={leader} />
                ))}
            </div>
        </section>
    );
}
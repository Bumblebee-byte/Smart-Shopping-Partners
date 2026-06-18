import React from 'react';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

// We make this an 'async' function so it can fetch data directly from the server
export default async function LeadershipGrid() {
    // 1. Fetch all documents of type 'leader' from Sanity
    const query = `*[_type == "leader"]`;
    const leaders = await client.fetch(query);

    return (
        <section className="w-full py-24 px-8 max-w-7xl mx-auto">
            <h2 className="text-3xl font-serif mb-16">Executive Leadership</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
                {/* 2. Map over the real data from Sanity instead of the hardcoded array */}
                {leaders.map((leader: any, index: number) => (
                    <div key={index} className="group cursor-pointer">

                        <div className="aspect-[3/4] bg-gray-800 mb-6 overflow-hidden relative">
                            {/* 3. Check if an image exists, then render it using urlFor */}
                            {leader.headshot ? (
                                <img
                                    src={urlFor(leader.headshot).url()}
                                    alt={leader.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            ) : (
                                <div className="w-full h-full bg-gray-700 flex items-center justify-center text-xs text-gray-500">
                                    No Image
                                </div>
                            )}
                        </div>

                        <h3 className="text-lg font-serif mb-1">{leader.name}</h3>
                        {/* If you named your role field differently in the schema, update 'leader.role' below */}
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest">
                            {leader.role || 'Executive'}
                        </p>

                    </div>
                ))}
            </div>
        </section>
    );
}
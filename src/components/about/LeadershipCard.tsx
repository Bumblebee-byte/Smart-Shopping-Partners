"use client";

import React, { useState } from 'react';
import { urlFor } from '@/sanity/lib/image';

export default function LeadershipCard({ leader }: { leader: any }) {
    const [isFlipped, setIsFlipped] = useState(false);

    // Bulletproof check: If leader is undefined somehow, don't crash the whole page
    if (!leader) return null;

    return (
        <div
            className="group cursor-pointer [perspective:1000px]"
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div
                className={`relative w-full aspect-[3/4] mb-6 transition-transform duration-700 [transform-style:preserve-3d] ${
                    isFlipped ? '[transform:rotateY(180deg)]' : ''
                }`}
            >

                {/* --- FRONT OF CARD --- */}
                <div className="absolute inset-0 [backface-visibility:hidden] bg-gray-800 overflow-hidden">
                    {/* Notice the safe chaining: leader?.image */}
                    {leader?.image ? (
                        <img
                            src={urlFor(leader.image).url()}
                            alt={leader?.name || "Leader"}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    ) : (
                        <div className="w-full h-full bg-gray-700 flex items-center justify-center text-xs text-gray-500">
                            No Image
                        </div>
                    )}
                </div>

                {/* --- BACK OF CARD --- */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#0b1120] border border-gray-700 p-6 flex flex-col justify-center items-center text-center">
                    <div className="w-8 h-[1px] bg-gray-500 mb-4"></div>

                    <p className="text-sm text-gray-300 leading-relaxed mb-6 line-clamp-6">
                        {leader?.bio || "Biography details are currently being updated."}
                    </p>

                    {leader?.linkedin && (
                        <a
                            href={leader.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[10px] uppercase tracking-widest border border-white px-4 py-3 hover:bg-white hover:text-black transition-colors mt-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            Connect on LinkedIn
                        </a>
                    )}
                </div>

            </div>

            <h3 className="text-lg font-serif mb-1">{leader?.name}</h3>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest">
                {leader?.role}
            </p>
        </div>
    );
}
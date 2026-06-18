"use client";

import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { urlFor } from '@/sanity/lib/image';

export default function HeroSlideshow({ images }: { images: any[] }) {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);

    return (
        <div className="embla overflow-hidden relative h-[85vh]" ref={emblaRef}>
            <div className="embla__container flex h-full">
                {images.map((img, index) => (
                    <div key={index} className="embla__slide relative flex-[0_0_100%]">
                        <img
                            src={urlFor(img).url()}
                            alt="Slide"
                            className="w-full h-full object-cover"
                        />
                        {/* The gradient overlay remains on top of every image */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1120] via-[#0b1120]/60 to-transparent"></div>
                    </div>
                ))}
            </div>
        </div>
    );
}
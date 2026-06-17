export default function CareersHero() {
    return (
        <section className="w-full pt-24 pb-16 px-8 max-w-7xl mx-auto border-b border-gray-800">
            <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-6 border-l pl-4 border-gray-500">
                Join Elante
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                {/* Left Content */}
                <div>
                    <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8">
                        Build India's <br />
                        Most <br />
                        Exciting <br />
                        <span className="italic text-gray-300">Retail Careers.</span>
                    </h1>

                    <p className="text-sm text-gray-400 mb-12 max-w-sm leading-relaxed">
                        4,500+ professionals shaping how 18 million Indians shop every year. Join us at the intersection of global brands and India's growth story.
                    </p>

                    <div className="flex gap-8 md:gap-12">
                        <div>
                            <p className="text-3xl font-serif mb-2">4,500+</p>
                            <p className="text-[10px] text-gray-500 uppercase tracking-wider">Team Members</p>
                        </div>
                        <div>
                            <p className="text-3xl font-serif mb-2">42</p>
                            <p className="text-[10px] text-gray-500 uppercase tracking-wider">Locations</p>
                        </div>
                        <div>
                            <p className="text-3xl font-serif mb-2">28</p>
                            <p className="text-[10px] text-gray-500 uppercase tracking-wider">Brand Partners</p>
                        </div>
                    </div>
                </div>

                {/* Right Image Collage */}
                <div className="grid grid-cols-2 gap-4 h-[400px] md:h-[500px]">
                    <div className="bg-[#161f30] h-full relative overflow-hidden group">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
                        {/* Replace with your image: <img src="..." className="object-cover w-full h-full" /> */}
                    </div>
                    <div className="grid grid-rows-2 gap-4 h-full">
                        <div className="bg-gray-800 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
                        </div>
                        <div className="bg-[#0f1522] relative overflow-hidden group">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
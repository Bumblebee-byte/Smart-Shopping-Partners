export default function HeroSection() {
    return (
        <section className="w-full bg-[#111827] text-white pt-24 pb-16 px-8 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-6 border-l pl-4 border-gray-500">
                    India's Premier Retail Growth Partner
                </p>

                <h1 className="text-5xl md:text-8xl font-serif leading-tight mb-10">
                    Think Beyond.<br />
                    Metros.<br />
                    <span className="italic text-gray-300">.</span>
                </h1>

                <button className="bg-white text-black px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
                    View Portfolio &rarr;
                </button>

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-32 border-t border-gray-800 pt-12">
                    <div>
                        <h3 className="text-4xl font-serif mb-2">350+</h3>
                        <p className="text-[10px] text-gray-400 uppercase tracking-wider">Stores</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-serif mb-2">28</h3>
                        <p className="text-[10px] text-gray-400 uppercase tracking-wider">Brand Partners</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-serif mb-2">42</h3>
                        <p className="text-[10px] text-gray-400 uppercase tracking-wider">Cities</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-serif mb-2">18M+</h3>
                        <p className="text-[10px] text-gray-400 uppercase tracking-wider">Annual Footfalls</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
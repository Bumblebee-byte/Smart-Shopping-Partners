export default function CuratedUniverse() {
    return (
        <section className="w-full bg-[#111827] text-white py-24 px-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif mb-4">
                        A Curated Universe <br />
                        <span className="italic text-gray-400">of Global Prestige</span>
                    </h2>
                </div>

                {/* Brand Grid Placeholder */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {/* We will use generic colored boxes for now until you add your images */}
                    <div className="aspect-[4/5] bg-red-900 relative group overflow-hidden">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
                        <p className="absolute bottom-4 left-4 text-xs font-bold tracking-widest uppercase">Sportswear</p>
                    </div>
                    <div className="aspect-[4/5] bg-gray-800 relative group overflow-hidden">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
                        <p className="absolute bottom-4 left-4 text-xs font-bold tracking-widest uppercase">Beauty</p>
                    </div>
                    <div className="aspect-[4/5] bg-slate-700 relative group overflow-hidden">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
                        <p className="absolute bottom-4 left-4 text-xs font-bold tracking-widest uppercase">Lifestyle</p>
                    </div>
                    <div className="aspect-[4/5] bg-zinc-800 relative group overflow-hidden">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
                        <p className="absolute bottom-4 left-4 text-xs font-bold tracking-widest uppercase">Fashion</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
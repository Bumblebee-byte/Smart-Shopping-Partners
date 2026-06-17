export default function ExpansionRoadmap() {
    const futureLocations = [
        { city: "Kochi", stores: "3 stores - Lulu Mall", timeline: "Q1 2025" },
        { city: "Indore", stores: "2 stores - Treasure Island", timeline: "Q2 2025" },
        { city: "Coimbatore", stores: "4 stores - Prozone Mall", timeline: "Q2 2025" },
        { city: "Bhopal", stores: "2 stores - DB City Mall", timeline: "Q3 2025" },
        { city: "Nashik", stores: "3 stores - City Centre", timeline: "Q4 2025" },
        { city: "Vadodara", stores: "4 stores - Vadodara Central", timeline: "Q4 2025" },
    ];

    return (
        <section className="w-full pt-32 pb-24 border-t border-gray-800 mt-24">
            <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-4">
                Expansion Roadmap 2025
            </p>
            <h2 className="text-4xl md:text-5xl font-serif mb-12">
                Where We're Opening Next
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {futureLocations.map((loc, idx) => (
                    <div key={idx} className="group cursor-pointer">
                        {/* Image Placeholder */}
                        <div className="aspect-[21/9] bg-[#161f30] relative overflow-hidden mb-4">
                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500 z-10"></div>
                            {/* Base Background Effect */}
                            <div className="w-full h-full bg-gray-800 group-hover:scale-105 transition-transform duration-700"></div>
                        </div>

                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-lg font-serif mb-1">{loc.city}</h3>
                                <p className="text-[10px] text-gray-500 uppercase tracking-widest">{loc.stores}</p>
                            </div>
                            <span className="text-[9px] font-mono border border-gray-600 px-2 py-1 text-gray-400 group-hover:text-white group-hover:border-white transition-colors">
                {loc.timeline}
              </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
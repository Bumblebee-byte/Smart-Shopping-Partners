export default function TeamSection() {
    const team = [
        { name: "Rajesh Khanna", role: "Chief Executive Officer", desc: "Driving the strategic vision and expansion of Elante's footprint across the subcontinent." },
        { name: "Priya Das", role: "VP of Brand Partnerships", desc: "Fostering enduring relationships with the world's most coveted international brands." },
        { name: "Vikram Singh", role: "Head of Operations", desc: "Ensuring flawless execution and brand compliance across 350+ retail touchpoints." },
        { name: "Neha Sharma", role: "Chief Financial Officer", desc: "Managing capital allocation and sustaining profitable growth trajectories." }
    ];

    return (
        <section className="w-full bg-[#111827] text-white py-24 px-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-serif mb-16">
                    The Team Behind <br />
                    <span className="italic text-gray-400">India's Retail Story</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {team.map((member, index) => (
                        <div key={index} className="group cursor-pointer">
                            {/* Headshot Placeholder */}
                            <div className="aspect-[3/4] bg-gray-800 mb-6 overflow-hidden">
                                <div className="w-full h-full bg-gray-700 group-hover:scale-105 transition-transform duration-500"></div>
                            </div>
                            <h3 className="text-lg font-serif mb-1">{member.name}</h3>
                            <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-3">{member.role}</p>
                            <p className="text-xs text-gray-500 leading-relaxed">{member.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
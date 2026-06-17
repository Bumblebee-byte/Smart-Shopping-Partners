export default function FourPillars() {
    const pillars = [
        { num: "01", title: "Prime Locations", desc: "Securing the most coveted retail real estate across India's premium malls and high streets." },
        { num: "02", title: "Flawless Execution", desc: "Delivering international brand standards with precise localization and operational excellence." },
        { num: "03", title: "Market Intelligence", desc: "Data-driven expansion strategies backed by deep consumer insights and regional expertise." },
        { num: "04", title: "Agile Operations", desc: "Robust supply chain and logistics networks ensuring seamless inventory management." },
    ];

    return (
        <section className="w-full bg-[#111827] text-white py-24 px-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-serif mb-16">
                    Four Pillars of <br />
                    <span className="italic text-gray-400">Retail Excellence</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {pillars.map((pillar) => (
                        <div key={pillar.num} className="border-t border-gray-700 pt-6">
                            <span className="text-xs text-gray-500 font-mono mb-4 block">{pillar.num}</span>
                            <h3 className="text-lg font-serif mb-4">{pillar.title}</h3>
                            <p className="text-xs text-gray-400 leading-relaxed">{pillar.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
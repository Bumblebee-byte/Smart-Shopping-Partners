export default function Timeline() {
    const years = ["2004", "2008", "2012", "2018", "2022", "2026"];

    return (
        <section className="w-full py-24 px-8 max-w-7xl mx-auto border-b border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                {/* Left Side - Years list */}
                <div className="md:col-span-3">
                    <ul className="space-y-6 text-sm font-mono text-gray-500">
                        {years.map((year, index) => (
                            <li key={index} className="flex items-center gap-4 cursor-pointer hover:text-white transition-colors">
                                <div className={`h-[1px] w-4 ${index === 0 ? 'bg-white' : 'bg-gray-700'}`}></div>
                                <span className={index === 0 ? 'text-white' : ''}>{year}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Side - Big Statement */}
                <div className="md:col-span-9 md:pl-12 border-l border-gray-800">
                    <p className="text-xs tracking-widest text-gray-400 uppercase mb-6">2026</p>
                    <h3 className="text-3xl md:text-4xl font-serif leading-relaxed text-gray-300 max-w-3xl">
                        350+ stores, 28 global premium brands, across 42 cities. India’s most trusted international retail partner.
                    </h3>
                </div>
            </div>
        </section>
    );
}
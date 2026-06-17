export default function NewsHeader() {
    const filters = ["All", "Expansion", "Partnership", "ESG", "Finance", "Awards", "Leadership"];

    return (
        <section className="w-full pt-24 pb-12 px-8 max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-gray-800">
            <div>
                <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-6 border-l pl-4 border-gray-500">
                    Press & Media
                </p>
                <h1 className="text-5xl md:text-7xl font-serif leading-tight">
                    News & <br /> Media
                </h1>
            </div>

            <div className="flex flex-wrap gap-3 max-w-2xl justify-start lg:justify-end">
                {filters.map((filter, index) => (
                    <button
                        key={index}
                        className={`px-4 py-2 text-[10px] uppercase tracking-widest border transition-colors ${
                            index === 0
                                ? "bg-white text-black border-white font-bold"
                                : "border-gray-700 text-gray-400 hover:text-white hover:border-gray-400"
                        }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>
        </section>
    );
}
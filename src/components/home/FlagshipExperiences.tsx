export default function FlagshipExperiences() {
    return (
        <section className="w-full bg-[#111827] text-white py-24 px-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-serif mb-16">
                    Flagship Experiences <br />
                    <span className="italic text-gray-400">Across India</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    {/* Main Large Image */}
                    <div className="md:col-span-8 aspect-video bg-gray-800 relative overflow-hidden group">
                        {/* Replace with actual image later: <img src="/path.jpg" className="object-cover w-full h-full" alt="Store" /> */}
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
                        <div className="absolute bottom-6 left-6">
                            <p className="text-xs tracking-widest uppercase font-bold">Mumbai South</p>
                            <p className="text-[10px] text-gray-300 tracking-wider">Premium Apparel</p>
                        </div>
                    </div>

                    {/* Right Side Stacked Images */}
                    <div className="md:col-span-4 flex flex-col gap-4">
                        <div className="flex-1 bg-gray-700 relative overflow-hidden group min-h-[200px]">
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
                        </div>
                        <div className="flex-1 bg-gray-600 relative overflow-hidden group min-h-[200px]">
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
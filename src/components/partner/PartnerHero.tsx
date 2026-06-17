export default function PartnerHero() {
    const categories = ["Fashion & Apparel", "Footwear", "Beauty & Care", "Accessories", "Lifestyle"];

    return (
        <section className="w-full pt-24 pb-16 px-8 max-w-7xl mx-auto border-b border-gray-800">
            <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-6 border-l pl-4 border-gray-500">
                Partner With Us
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-end">
                <div className="lg:col-span-8">
                    <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-12">
                        Your Brand Deserves <br />
                        <span className="italic text-gray-300">India's Best</span> <br />
                        Partner.
                    </h1>

                    <div className="flex flex-wrap gap-3">
                        {categories.map((cat, idx) => (
                            <span key={idx} className="border border-gray-700 px-4 py-2 text-[10px] text-gray-400 uppercase tracking-widest">
                {cat}
              </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative Background Image Overlay representing a meeting/partnership */}
            <div className="mt-16 aspect-[21/9] bg-gray-800 relative overflow-hidden group">
                <div className="absolute inset-0 bg-black/40"></div>
                {/* Placeholder for actual image: */}
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700"></div>
            </div>
        </section>
    );
}
export default function MediaKit() {
    return (
        <section className="w-full py-16 px-8 max-w-7xl mx-auto mb-16">
            <div className="border border-gray-800 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 bg-[#161f30]">
                <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-2">For Press</p>
                    <h2 className="text-2xl font-serif mb-2">Media Kit & Press Resources</h2>
                    <p className="text-xs text-gray-400">
                        Brand assets, photography, leadership bios and financials available for accredited media.
                    </p>
                </div>

                <button className="border border-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors whitespace-nowrap">
                    Download Media Kit
                </button>
            </div>
        </section>
    );
}
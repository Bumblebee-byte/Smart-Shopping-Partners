import Link from 'next/link';

export default function CallToAction() {
    return (
        <section className="w-full bg-[#111827] text-white py-32 px-8 border-t border-gray-800 relative overflow-hidden">
            {/* Optional dark gradient/texture background could go here */}
            <div className="max-w-4xl mx-auto relative z-10">
                <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-6 border-l pl-4 border-gray-500">
                    Partner With Us
                </p>

                <h2 className="text-5xl md:text-7xl font-serif leading-tight mb-8">
                    Bring Your Brand to <br />
                    <span className="italic">India's 1.4 Billion</span> <br />
                    Consumers.
                </h2>

                <p className="text-sm text-gray-400 mb-10 max-w-xl leading-relaxed">
                    Talk to our team of retail experts about introducing your brand to one of the world's fastest-growing consumer markets.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/partner" className="bg-white text-black px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors text-center">
                        Open A Conversation &rarr;
                    </Link>
                    <Link href="/brands" className="border border-gray-500 px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors text-center">
                        View Portfolio
                    </Link>
                </div>
            </div>
        </section>
    );
}
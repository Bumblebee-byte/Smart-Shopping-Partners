import Link from 'next/link';

export default function BrandCTA() {
    return (
        <section className="w-full bg-white text-black py-12 px-8 border-t border-gray-200">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <h2 className="text-2xl font-serif mb-2">Is your brand a fit for India?</h2>
                    <p className="text-xs text-gray-600">
                        Talk to our brand partnerships team about joining the Elante portfolio.
                    </p>
                </div>

                <Link
                    href="/partner"
                    className="border border-black px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors whitespace-nowrap"
                >
                    Get In Touch &rarr;
                </Link>
            </div>
        </section>
    );
}
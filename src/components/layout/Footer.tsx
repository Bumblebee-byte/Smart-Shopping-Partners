import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full bg-[#0d131f] text-white pt-20 pb-8 px-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                <div>
                    <h2 className="text-2xl font-serif font-bold tracking-widest uppercase mb-4">Elante</h2>
                    <p className="text-xs text-gray-400 leading-relaxed pr-8">
                        India's premier retail growth partner. Bringing the world's most aspirational brands to life across 42 cities.
                    </p>
                </div>

                <div>
                    <h4 className="text-xs font-bold tracking-widest uppercase mb-6">Company</h4>
                    <ul className="space-y-4 text-xs text-gray-400">
                        <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                        <li><Link href="/leadership" className="hover:text-white transition-colors">Leadership</Link></li>
                        <li><Link href="/sustainability" className="hover:text-white transition-colors">ESG Report</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-xs font-bold tracking-widest uppercase mb-6">Solutions</h4>
                    <ul className="space-y-4 text-xs text-gray-400">
                        <li><Link href="/brands" className="hover:text-white transition-colors">Brand Portfolio</Link></li>
                        <li><Link href="/verticals" className="hover:text-white transition-colors">Business Verticals</Link></li>
                        <li><Link href="/stores" className="hover:text-white transition-colors">Store Network</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-xs font-bold tracking-widest uppercase mb-6">Headquarters</h4>
                    <address className="text-xs text-gray-400 not-italic leading-relaxed">
                        One BKC, Bandra Kurla Complex<br />
                        Mumbai, Maharashtra 400051<br /><br />
                        +91 22 6619 8000<br />
                        info@elante.in
                    </address>
                </div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-8 text-[10px] text-gray-500 uppercase tracking-widest">
                <p>© 2026 Elante Retail Group. All rights reserved.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
                </div>
            </div>
        </footer>
    );
}
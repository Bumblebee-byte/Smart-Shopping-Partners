import Link from 'next/link';

export default function Header() {
    return (
        <header className="w-full bg-[#111827] text-white py-6 px-8 border-b border-gray-800 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-2xl font-serif font-bold tracking-widest uppercase">
                    Smart Shopping
                    <span className="block text-[8px] font-sans tracking-[0.3em] text-gray-400 mt-1">
            Retail • Franchise • Lifestyle
          </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex space-x-6 text-xs tracking-widest uppercase font-medium text-gray-300">
                    <Link href="/about" className="hover:text-white transition-colors">About</Link>
                    <Link href="/brands" className="hover:text-white transition-colors">Brands</Link>
                    <Link href="/verticals" className="hover:text-white transition-colors">Verticals</Link>
                    <Link href="/stores" className="hover:text-white transition-colors">Stores</Link>
                    <Link href="/partner" className="hover:text-white transition-colors">Partner</Link>
                    <Link href="/careers" className="hover:text-white transition-colors">Careers</Link>
                    <Link href="/news" className="hover:text-white transition-colors">News</Link>
                    <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
                </nav>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Link
                        href="/partner"
                        className="border border-gray-500 px-6 py-2 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                    >
                        Partner With Us
                    </Link>
                </div>
            </div>
        </header>
    );
}
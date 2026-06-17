import { client } from '@/sanity/lib/client';
import Link from 'next/link';

// Define the shape of our stats data
interface CompanyStats {
    stores: string;
    brands: string;
    cities: string;
    footfalls: string;
}

export default async function HeroSection() {
    // Fetch the first (and only) companyStats document
    const query = `*[_type == "companyStats"][0]`;
    const stats: CompanyStats | null = await client.fetch(query);

    // Fallback values just in case the document hasn't been created in the Studio yet
    const displayStats = {
        stores: stats?.stores || "350+",
        brands: stats?.brands || "28",
        cities: stats?.cities || "42",
        footfalls: stats?.footfalls || "18M+"
    };

    return (
        <section className="w-full">
            {/* ... Your existing top Hero text ("Think Beyond. Metros.") goes here ... */}

            {/* Dynamic Statistics Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-b border-gray-800">
                <div>
                    <h3 className="text-3xl md:text-4xl font-serif text-white mb-2">{displayStats.stores}</h3>
                    <p className="text-[9px] text-gray-500 uppercase tracking-widest">Stores</p>
                </div>
                <div>
                    <h3 className="text-3xl md:text-4xl font-serif text-white mb-2">{displayStats.brands}</h3>
                    <p className="text-[9px] text-gray-500 uppercase tracking-widest">Brand Partners</p>
                </div>
                <div>
                    <h3 className="text-3xl md:text-4xl font-serif text-white mb-2">{displayStats.cities}</h3>
                    <p className="text-[9px] text-gray-500 uppercase tracking-widest">Cities</p>
                </div>
                <div>
                    <h3 className="text-3xl md:text-4xl font-serif text-white mb-2">{displayStats.footfalls}</h3>
                    <p className="text-[9px] text-gray-500 uppercase tracking-widest">Annual Footfalls</p>
                </div>
            </div>
        </section>
    );
}
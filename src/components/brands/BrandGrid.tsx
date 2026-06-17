import { client } from '@/sanity/lib/client';

// Define the shape of our Sanity data
interface Brand {
    _id: string;
    name: string;
    category: string;
    region: string;
    stores: string;
    badge?: string;
    bg: string;
}

export default async function BrandGrid() {
    const filters = ["All", "Fashion", "Footwear", "Beauty", "Lifestyle"];

    // Fetch all published brands from Sanity
    const query = `*[_type == "brand"] | order(name asc)`;
    const brands: Brand[] = await client.fetch(query);

    return (
        <div className="w-full">
            {/* Filters */}
            <div className="flex flex-wrap gap-4 mb-12">
                {filters.map((filter, index) => (
                    <button
                        key={index}
                        className={`px-6 py-2 text-[10px] uppercase tracking-widest border transition-colors ${
                            index === 0
                                ? "bg-white text-black border-white font-bold"
                                : "border-gray-600 text-gray-400 hover:text-white hover:border-gray-400"
                        }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {brands.length === 0 ? (
                    <p className="text-gray-400 text-sm">No brands added yet. Please add them in the Studio.</p>
                ) : (
                    brands.map((brand) => (
                        <div key={brand._id} className="group cursor-pointer">
                            {/* Image Box */}
                            <div className={`aspect-square ${brand.bg || 'bg-gray-800'} relative mb-4 overflow-hidden`}>
                                {brand.badge && (
                                    <span className="absolute top-4 left-4 bg-white text-black text-[8px] font-bold uppercase tracking-widest px-2 py-1 z-10">
                    {brand.badge}
                  </span>
                                )}
                                {/* Image hover effect overlay */}
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-300"></div>
                            </div>

                            {/* Card Text */}
                            <p className="text-[9px] text-gray-400 uppercase tracking-widest mb-1">
                                {brand.category} • {brand.region}
                            </p>
                            <h3 className="text-lg font-serif mb-1 group-hover:text-gray-300 transition-colors">
                                {brand.name}
                            </h3>
                            <p className="text-[10px] text-gray-500">{brand.stores}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
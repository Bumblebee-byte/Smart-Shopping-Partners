import { client } from '@/sanity/lib/client';

// Define the shape of our Sanity data
interface Store {
    _id: string;
    name: string;
    city: string;
    address?: string;
    phone?: string;
    hours?: string;
}

export default async function StoreList() {
    // Fetch all stores and order them alphabetically by city
    const query = `*[_type == "store"] | order(city asc)`;
    const stores: Store[] = await client.fetch(query);

    return (
        <section className="w-full py-24 px-8 max-w-7xl mx-auto border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-4 border-l pl-4 border-gray-600">Our Network</p>
                    <h2 className="text-4xl md:text-5xl font-serif">Store Locations</h2>
                </div>
            </div>

            {stores.length === 0 ? (
                <p className="text-gray-400">Loading retail network data...</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {stores.map((store) => (
                        <div key={store._id} className="border border-gray-800 p-8 hover:bg-[#161f30] transition-colors group">
              <span className="text-[9px] text-gray-400 uppercase tracking-widest mb-4 block">
                📍 {store.city}
              </span>
                            <h3 className="text-xl font-serif text-gray-200 mb-4 group-hover:text-white transition-colors">
                                {store.name}
                            </h3>

                            <div className="space-y-3 text-xs text-gray-500">
                                {store.address && (
                                    <p className="leading-relaxed w-3/4">{store.address}</p>
                                )}
                                {store.hours && (
                                    <p className="flex items-center gap-2">
                                        <span className="w-4">⏱</span> {store.hours}
                                    </p>
                                )}
                                {store.phone && (
                                    <p className="flex items-center gap-2">
                                        <span className="w-4">📞</span> {store.phone}
                                    </p>
                                )}
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-800">
                                <button className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">
                                    Get Directions &rarr;
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
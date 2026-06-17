import StoreMap from "@/components/stores/StoreMap";
import ExpansionRoadmap from "@/components/stores/ExpansionRoadmap";

export default function StoresPage() {
    return (
        <div className="w-full bg-[#111827] text-white min-h-screen">
            <div className="max-w-7xl mx-auto px-8">

                {/* Page Header */}
                <section className="pt-24 flex flex-col md:flex-row justify-between md:items-end gap-12">
                    <div>
                        <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-6 border-l pl-4 border-gray-500">
                            Pan-India Presence
                        </p>
                        <h1 className="text-5xl md:text-7xl font-serif leading-tight">
                            Store <br /> Network
                        </h1>
                    </div>

                    {/* Top Stats Row */}
                    <div className="flex gap-12">
                        <div>
                            <p className="text-3xl md:text-4xl font-serif mb-2">350+</p>
                            <p className="text-[10px] text-gray-500 uppercase tracking-wider">Stores</p>
                        </div>
                        <div>
                            <p className="text-3xl md:text-4xl font-serif mb-2">42</p>
                            <p className="text-[10px] text-gray-500 uppercase tracking-wider">Cities</p>
                        </div>
                        <div>
                            <p className="text-3xl md:text-4xl font-serif mb-2">7</p>
                            <p className="text-[10px] text-gray-500 uppercase tracking-wider">Metros</p>
                        </div>
                    </div>
                </section>

                {/* Map and City Data Component */}
                <StoreMap />

                {/* Future Locations Grid Component */}
                <ExpansionRoadmap />

            </div>
        </div>
    );
}
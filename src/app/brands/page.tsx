import BrandGrid from "@/components/brands/BrandGrid";
import BrandCTA from "@/components/brands/BrandCTA";

export default function BrandsPage() {
    return (
        <div className="w-full bg-[#111827] text-white min-h-screen">

            {/* Page Header Area */}
            <section className="pt-24 pb-12 px-8 max-w-7xl mx-auto border-b border-gray-800 flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-6 border-l pl-4 border-gray-500">
                        Global Brands • India Scale
                    </p>
                    <h1 className="text-5xl md:text-7xl font-serif leading-tight">
                        Brand <br /> Portfolio
                    </h1>
                </div>

                <div className="max-w-xs">
                    <p className="text-xs text-gray-400 leading-relaxed mb-6">
                        28 international brands across Fashion, Footwear, Beauty and Lifestyle verticals.
                    </p>
                </div>
            </section>

            {/* Main Grid Section */}
            <section className="px-8 max-w-7xl mx-auto mb-24">
                <BrandGrid />
            </section>

            {/* Bottom CTA Strip */}
            <BrandCTA />
        </div>
    );
}
import VerticalsTabs from "@/components/verticals/VerticalsTabs";
import VerticalsSummary from "@/components/verticals/VerticalsSummary";

export default function VerticalsPage() {
    return (
        <div className="w-full bg-[#111827] text-white min-h-screen">
            {/* Section 1: Intro Hero Banner */}
            <section className="pt-24 pb-16 px-8 max-w-7xl mx-auto">
                <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-6 border-l pl-4 border-gray-500">
                    Business Verticals
                </p>
                <h1 className="text-5xl md:text-7xl font-serif leading-tight">
                    How We <br /> Create Value
                </h1>
            </section>

            {/* Section 2: Interactive Operations Hub */}
            <section className="px-8 max-w-7xl mx-auto mb-32">
                <VerticalsTabs />
            </section>

            {/* Section 3: Static Lower Dashboard Grid */}
            <section className="px-8 max-w-7xl mx-auto pb-24 border-t border-gray-800 pt-16">
                <VerticalsSummary />
            </section>
        </div>
    );
}
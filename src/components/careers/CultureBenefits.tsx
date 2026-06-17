import { Star, TrendingUp, Heart, BookOpen } from 'lucide-react';

export default function CultureBenefits() {
    const benefits = [
        { icon: Star, title: "Brand Immersion", desc: "Work directly with 28 international brand teams. Global travel, HQ visits, and brand-certified training built in." },
        { icon: TrendingUp, title: "Career Growth", desc: "40% of our senior leaders started on the shop floor. We build careers from within, relentlessly." },
        { icon: Heart, title: "Wellbeing First", desc: "Comprehensive health cover, mental wellness support, flexible leave, and family care policies." },
        { icon: BookOpen, title: "L&D Budget", desc: "₹50,000 annual learning allowance, IIM certifications, and brand-led training programs." }
    ];

    return (
        <section className="w-full py-24 px-8 max-w-7xl mx-auto border-b border-gray-800">
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-4 border-l pl-4 border-gray-600">Life at Elante</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-16">
                Culture & Benefits
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {benefits.map((benefit, idx) => {
                    const IconComponent = benefit.icon;
                    return (
                        <div key={idx} className="border border-gray-800 p-8 hover:bg-[#161f30] transition-colors group cursor-default">
                            <IconComponent className="w-5 h-5 text-gray-500 mb-6 group-hover:text-white transition-colors" strokeWidth={1.5} />
                            <h3 className="text-lg font-serif mb-3 text-gray-200">{benefit.title}</h3>
                            <p className="text-xs text-gray-500 leading-relaxed max-w-sm">{benefit.desc}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
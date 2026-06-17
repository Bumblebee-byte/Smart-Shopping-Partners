import { BarChart, Building2, Users, ShieldCheck, Rocket, Map } from 'lucide-react';

export default function PartnerBenefits() {
    const benefits = [
        { icon: BarChart, title: "Market Intelligence", desc: "Proprietary consumer data across 42 cities. We know where your customer is, long before you open your first store." },
        { icon: Building2, title: "Prime Real Estate", desc: "Preferred partner status with India's top 15 mall developers. Fast-lane A-locations before they reach the market." },
        { icon: Users, title: "Retail Talent Pool", desc: "4,500+ pre-trained retail professionals ready from day one, trained to global standards." },
        { icon: ShieldCheck, title: "Local IP Protection", desc: "Complete brand protection framework compliant with India's strict FDI regulations and trademark laws." },
        { icon: Rocket, title: "90-Day Launch", desc: "Average 90 days from signed agreement to first store open. Our supply chain eliminates guesswork entirely." },
        { icon: Map, title: "Multi-City Scale", desc: "Simultaneous multi-city launches are our strength. Scale from 1 to 50 stores without operational drag." },
    ];

    return (
        <section className="w-full py-24 px-8 max-w-7xl mx-auto border-b border-gray-800">
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-4 border-l pl-4 border-gray-600">The Elante Advantage</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-16">
                Why 28 Global Brands <br />
                <span className="italic text-gray-400">Trust Us</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, idx) => {
                    const IconComponent = benefit.icon;
                    return (
                        <div key={idx} className="border border-gray-800 p-8 hover:bg-[#161f30] transition-colors group">
                            <IconComponent className="w-5 h-5 text-gray-500 mb-6 group-hover:text-white transition-colors" strokeWidth={1.5} />
                            <h3 className="text-lg font-serif mb-3 text-gray-200">{benefit.title}</h3>
                            <p className="text-xs text-gray-500 leading-relaxed">{benefit.desc}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
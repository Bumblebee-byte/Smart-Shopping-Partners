import { ShoppingBag, Award, Truck, LineChart } from 'lucide-react';

export default function VerticalsSummary() {
    const cards = [
        { title: "Retail Operations", sub: "350+ Stores", icon: ShoppingBag },
        { title: "Franchise Management", sub: "28 Brands", icon: Award },
        { title: "Distribution & Logistics", sub: "42 Cities", icon: Truck },
        { title: "Market Entry Consulting", sub: "15+ Launches", icon: LineChart },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {cards.map((card, idx) => {
                const IconComponent = card.icon;
                return (
                    <div key={idx} className="bg-[#1c2434]/40 border border-gray-800 p-8 hover:border-gray-600 transition-colors group cursor-pointer">
                        <IconComponent className="w-5 h-5 text-gray-400 mb-6 group-hover:text-white transition-colors" strokeWidth={1.5} />
                        <h4 className="text-base font-serif mb-1">{card.title}</h4>
                        <p className="text-[10px] text-gray-500 uppercase tracking-wider">{card.sub}</p>
                    </div>
                );
            })}
        </div>
    );
}
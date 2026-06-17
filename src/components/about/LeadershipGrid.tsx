export default function LeadershipGrid() {
    const leaders = [
        { name: "Rajesh Khanna", role: "Chief Executive Officer" },
        { name: "Priya Das", role: "VP of Brand Partnerships" },
        { name: "Vikram Singh", role: "Head of Operations" },
        { name: "Neha Sharma", role: "Chief Financial Officer" },
        { name: "Arjun Patel", role: "VP of Real Estate" },
        { name: "Samantha Lee", role: "Creative Director" },
        { name: "David Kim", role: "Chief Technology Officer" },
        { name: "Aisha Khan", role: "Head of Human Resources" }
    ];

    return (
        <section className="w-full py-24 px-8 max-w-7xl mx-auto">
            <h2 className="text-3xl font-serif mb-16">Executive Leadership</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
                {leaders.map((leader, index) => (
                    <div key={index} className="group cursor-pointer">
                        <div className="aspect-[3/4] bg-gray-800 mb-6 overflow-hidden">
                            <div className="w-full h-full bg-gray-700 group-hover:scale-105 transition-transform duration-500"></div>
                        </div>
                        <h3 className="text-lg font-serif mb-1">{leader.name}</h3>
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest">{leader.role}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
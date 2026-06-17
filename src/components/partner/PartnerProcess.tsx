export default function PartnerProcess() {
    const steps = [
        { num: "01", title: "Brand Discovery", desc: "We evaluate brand resonance, consumer demand signals, and white space in India's competitive retail landscape." },
        { num: "02", title: "Strategy Design", desc: "Customized entry strategy, location selection, store format, pricing architecture, and go-to-market plan." },
        { num: "03", title: "Legal & Agreements", desc: "Franchise or distribution agreement structuring, IP protection, and local entity regulatory compliance." },
        { num: "04", title: "Store Launch", desc: "End-to-end store design, fit-out, staff hiring, brand training, and grand opening coordination." },
        { num: "05", title: "Scale & Optimize", desc: "Ongoing performance management, multi-city expansion planning, and brand compliance for long-term growth." }
    ];

    return (
        <section className="w-full py-24 px-8 max-w-4xl mx-auto border-b border-gray-800">
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-4 border-l pl-4 border-gray-600">Our Process</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-16">
                From Introduction <br />
                <span className="italic text-gray-400">to Grand Opening</span>
            </h2>

            <div className="space-y-8">
                {steps.map((step, idx) => (
                    <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-12 pb-8 border-b border-gray-800 group">
            <span className="text-sm font-mono text-gray-600 group-hover:text-white transition-colors pt-1">
              {step.num}
            </span>
                        <div>
                            <h3 className="text-xl font-serif mb-3 text-gray-300 group-hover:text-white transition-colors">{step.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed max-w-2xl">{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
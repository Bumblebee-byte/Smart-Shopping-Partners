export default function PartnerForm() {
    return (
        <section className="w-full py-24 px-8 max-w-3xl mx-auto">
            <div className="mb-12">
                <h2 className="text-3xl font-serif mb-4">Start the Conversation</h2>
                <p className="text-sm text-gray-400">Submit your brand details below and our partnership team will be in touch within 48 hours.</p>
            </div>

            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500">Brand Name</label>
                        <input type="text" placeholder="Your brand name" className="w-full bg-[#161f30] border border-gray-700 text-white p-4 text-sm focus:outline-none focus:border-gray-400 transition-colors" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500">Country of Origin</label>
                        <input type="text" placeholder="Origin country" className="w-full bg-[#161f30] border border-gray-700 text-white p-4 text-sm focus:outline-none focus:border-gray-400 transition-colors" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500">Contact Name</label>
                        <input type="text" placeholder="Your full name" className="w-full bg-[#161f30] border border-gray-700 text-white p-4 text-sm focus:outline-none focus:border-gray-400 transition-colors" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500">Email</label>
                        <input type="email" placeholder="you@brand.com" className="w-full bg-[#161f30] border border-gray-700 text-white p-4 text-sm focus:outline-none focus:border-gray-400 transition-colors" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500">Phone</label>
                        <input type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-[#161f30] border border-gray-700 text-white p-4 text-sm focus:outline-none focus:border-gray-400 transition-colors" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500">Annual Revenue (USD)</label>
                        <select className="w-full bg-[#161f30] border border-gray-700 text-gray-400 p-4 text-sm focus:outline-none focus:border-gray-400 transition-colors appearance-none">
                            <option>Approximate range</option>
                            <option>$10M - $50M</option>
                            <option>$50M - $200M</option>
                            <option>$200M+</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gray-500">Category</label>
                    <input type="text" className="w-full bg-[#161f30] border border-gray-700 text-white p-4 text-sm focus:outline-none focus:border-gray-400 transition-colors" />
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gray-500">Message</label>
                    <textarea rows={4} placeholder="Tell us about your brand, your India goals, and how you see us partnering..." className="w-full bg-[#161f30] border border-gray-700 text-white p-4 text-sm focus:outline-none focus:border-gray-400 transition-colors resize-none"></textarea>
                </div>

                <button type="button" className="bg-white text-black px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors mt-4">
                    Submit Enquiry &rarr;
                </button>
            </form>
        </section>
    );
}
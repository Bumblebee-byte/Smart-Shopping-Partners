import { Send } from 'lucide-react';

export default function ContactForm() {
    return (
        <div className="w-full pr-0 lg:pr-12">
            <h2 className="text-2xl font-serif mb-8">Send a Message</h2>

            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500">Full Name</label>
                        <input type="text" placeholder="Your name" className="w-full bg-[#161f30] border border-gray-700 text-white p-4 text-sm focus:outline-none focus:border-gray-400 transition-colors" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500">Email Address</label>
                        <input type="email" placeholder="you@company.com" className="w-full bg-[#161f30] border border-gray-700 text-white p-4 text-sm focus:outline-none focus:border-gray-400 transition-colors" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gray-500">Enquiry Type</label>
                    <input type="text" className="w-full bg-[#161f30] border border-gray-700 text-white p-4 text-sm focus:outline-none focus:border-gray-400 transition-colors" />
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gray-500">Message</label>
                    <textarea rows={6} placeholder="How can we help?" className="w-full bg-[#161f30] border border-gray-700 text-white p-4 text-sm focus:outline-none focus:border-gray-400 transition-colors resize-none"></textarea>
                </div>

                <button type="button" className="bg-white text-black px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors mt-4 flex items-center gap-3">
                    Send Message
                    <Send className="w-4 h-4" />
                </button>
            </form>
        </div>
    );
}
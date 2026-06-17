import Link from 'next/link';

// Custom SVG Icons to replace the removed Lucide brand icons
const LinkedinIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect width="4" height="12" x="2" y="9"/>
        <circle cx="4" cy="4" r="2"/>
    </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
    </svg>
);

export default function OfficeLocations() {
    const offices = [
        {
            city: "Mumbai HQ",
            address: "One BKC, Bandra Kurla Complex Mumbai, Maharashtra 400051",
            phone: "+91 22 6619 8000",
            email: "info@elante.in"
        },
        {
            city: "Delhi",
            address: "DLF Cyber City, Tower B Gurugram, Haryana 122002",
            phone: "+91 11 4044 7000",
            email: "delhi@elante.in"
        },
        {
            city: "Bangalore",
            address: "RMZ Infinity, Old Madras Road Bangalore, Karnataka 560016",
            phone: "+91 80 4912 3000",
            email: "blr@elante.in"
        }
    ];

    return (
        <div className="w-full">
            <h2 className="text-2xl font-serif mb-8">Our Offices</h2>

            <div className="space-y-6">
                {offices.map((office, idx) => (
                    <div key={idx} className="border border-gray-800 p-6 hover:bg-[#161f30] transition-colors">
                        <h3 className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-4">{office.city}</h3>
                        <p className="text-sm text-gray-300 leading-relaxed mb-4">{office.address}</p>
                        <div className="space-y-2 text-xs text-gray-500 font-mono">
                            <p className="flex items-center gap-3"><span className="w-4">📞</span> {office.phone}</p>
                            <p className="flex items-center gap-3"><span className="w-4">✉️</span> {office.email}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Social Media Links using custom SVGs */}
            <div className="mt-12 border-t border-gray-800 pt-8">
                <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-4">Follow Elante</p>
                <div className="flex gap-4">
                    <Link href="#" className="border border-gray-800 p-3 hover:text-white hover:border-gray-500 transition-colors text-gray-400 flex items-center gap-2 text-xs">
                        <LinkedinIcon className="w-4 h-4" /> LinkedIn
                    </Link>
                    <Link href="#" className="border border-gray-800 p-3 hover:text-white hover:border-gray-500 transition-colors text-gray-400 flex items-center gap-2 text-xs">
                        <InstagramIcon className="w-4 h-4" /> Instagram
                    </Link>
                    <Link href="#" className="border border-gray-800 p-3 hover:text-white hover:border-gray-500 transition-colors text-gray-400 flex items-center gap-2 text-xs">
                        <TwitterIcon className="w-4 h-4" /> X / Twitter
                    </Link>
                </div>
            </div>
        </div>
    );
}
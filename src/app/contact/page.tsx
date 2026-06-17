import ContactHeader from "@/components/contact/ContactHeader";
import ContactForm from "@/components/contact/ContactForm";
import OfficeLocations from "@/components/contact/OfficeLocations";

export default function ContactPage() {
    return (
        <div className="w-full bg-[#111827] text-white min-h-screen">
            <div className="max-w-7xl mx-auto px-8 pb-24">

                <ContactHeader />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">
                    {/* Left Column - Form */}
                    <ContactForm />

                    {/* Right Column - Directory */}
                    <OfficeLocations />
                </div>

            </div>
        </div>
    );
}
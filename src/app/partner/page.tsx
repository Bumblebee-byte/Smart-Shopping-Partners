import PartnerHero from "@/components/partner/PartnerHero";
import PartnerBenefits from "@/components/partner/PartnerBenefits";
import PartnerProcess from "@/components/partner/PartnerProcess";
import PartnerForm from "@/components/partner/PartnerForm";

export default function PartnerPage() {
    return (
        <div className="w-full bg-[#111827] text-white min-h-screen flex flex-col items-center">
            <div className="w-full">
                <PartnerHero />
                <PartnerBenefits />
                <PartnerProcess />
                <div className="bg-[#0f1522]"> {/* Slightly darker background specifically for the form section to break it up visually */}
                    <PartnerForm />
                </div>
            </div>
        </div>
    );
}
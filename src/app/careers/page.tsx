import CareersHero from "@/components/careers/CareersHero";
import CultureBenefits from "@/components/careers/CultureBenefits";
import OpenPositions from "@/components/careers/OpenPositions";

export default function CareersPage() {
    return (
        <div className="w-full bg-[#111827] text-white min-h-screen">
            <CareersHero />
            <CultureBenefits />
            <OpenPositions />
        </div>
    );
}
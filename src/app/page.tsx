import HeroSection from "@/components/home/HeroSection";
import CuratedUniverse from "@/components/home/CuratedUniverse";
import FourPillars from "@/components/home/FourPillars";
import FlagshipExperiences from "@/components/home/FlagshipExperiences";
import TeamSection from "@/components/home/TeamSection";
import CallToAction from "@/components/home/CallToAction";

export default function Home() {
    return (
        <div className="w-full">
            <HeroSection />
            <CuratedUniverse />
            <FourPillars />
            <FlagshipExperiences />
            <TeamSection />
            <CallToAction />
        </div>
    );
}
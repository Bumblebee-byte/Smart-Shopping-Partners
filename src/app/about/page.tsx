import AboutHero from "@/components/about/AboutHero";
import Timeline from "@/components/about/Timeline";
import LeadershipGrid from "@/components/about/LeadershipGrid";

export default function AboutPage() {
    return (
        <div className="w-full bg-[#111827] text-white min-h-screen">
            <AboutHero />
            <Timeline />
            <LeadershipGrid />
        </div>
    );
}
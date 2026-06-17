import NewsHeader from "@/components/news/NewsHeader";
import NewsFeed from "@/components/news/NewsFeed";
import MediaKit from "@/components/news/MediaKit";

export default function NewsPage() {
    return (
        <div className="w-full bg-[#111827] text-white min-h-screen">
            <NewsHeader />
            <NewsFeed />
            <MediaKit />
        </div>
    );
}
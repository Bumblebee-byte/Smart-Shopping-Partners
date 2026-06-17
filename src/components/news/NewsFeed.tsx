import { client } from '@/sanity/lib/client';

// Define the shape of our Sanity data
interface NewsArticle {
    _id: string;
    title: string;
    category: string;
    publishedAt: string;
    excerpt: string;
    isFeatured: boolean;
}

// Helper function to format the date nicely
function formatDate(dateString: string) {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

export default async function NewsFeed() {
    // Fetch all published news, newest first
    const query = `*[_type == "news"] | order(publishedAt desc)`;
    const allNews: NewsArticle[] = await client.fetch(query);

    if (allNews.length === 0) {
        return (
            <section className="w-full py-16 px-8 max-w-7xl mx-auto text-center">
                <p className="text-gray-400">No news articles published yet. Check back soon.</p>
            </section>
        );
    }

    // Sort the data into our layout buckets
    const featuredStory = allNews.find(article => article.isFeatured) || allNews[0]; // Fallback to newest if none featured
    const remainingNews = allNews.filter(article => article._id !== featuredStory._id);
    const stackedNews = remainingNews.slice(0, 3); // Next 3 go on the right
    const gridNews = remainingNews.slice(3); // The rest go in the bottom grid

    return (
        <section className="w-full py-16 px-8 max-w-7xl mx-auto">

            {/* Top Editorial Block */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 border-b border-gray-800 pb-16">

                {/* Left: Main Featured Story */}
                <div className="lg:col-span-8 group cursor-pointer relative overflow-hidden bg-gray-800 aspect-video md:aspect-[16/10]">
                    {/* Placeholder for featured image */}
                    <div className="absolute inset-0 bg-gray-700 opacity-50 group-hover:scale-105 transition-transform duration-700"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/80 to-transparent opacity-90"></div>

                    <div className="absolute bottom-8 left-8 right-8">
            <span className="bg-white text-black px-2 py-1 text-[9px] font-bold uppercase tracking-widest mb-4 inline-block">
              {featuredStory.category}
            </span>
                        <h2 className="text-3xl md:text-4xl font-serif mb-3 text-white group-hover:text-gray-300 transition-colors">
                            {featuredStory.title}
                        </h2>
                        <p className="text-xs text-gray-400 max-w-2xl line-clamp-2">
                            {featuredStory.excerpt}
                        </p>
                    </div>
                </div>

                {/* Right: Stacked Latest News */}
                <div className="lg:col-span-4 flex flex-col space-y-6">
                    {stackedNews.map((article, idx) => (
                        <div key={article._id} className={`group cursor-pointer ${idx !== stackedNews.length - 1 ? 'border-b border-gray-800 pb-6' : ''}`}>
               <span className="text-[9px] text-gray-500 uppercase tracking-widest mb-2 block">
                 {article.category} • {formatDate(article.publishedAt)}
               </span>
                            <h3 className="text-lg font-serif text-gray-200 group-hover:text-white transition-colors line-clamp-2">
                                {article.title}
                            </h3>
                        </div>
                    ))}
                </div>

            </div>

            {/* Bottom Grid */}
            {gridNews.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {gridNews.map((article) => (
                        <div key={article._id} className="group cursor-pointer">
                            <div className="aspect-video bg-gray-800 mb-6 overflow-hidden">
                                <div className="w-full h-full bg-gray-700 group-hover:scale-105 transition-transform duration-500"></div>
                            </div>
                            <span className="text-[9px] text-gray-500 uppercase tracking-widest mb-2 block">
                {article.category} • {formatDate(article.publishedAt)}
              </span>
                            <h3 className="text-xl font-serif mb-3 text-gray-200 group-hover:text-white transition-colors line-clamp-2">
                                {article.title}
                            </h3>
                            <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                                {article.excerpt}
                            </p>
                        </div>
                    ))}
                </div>
            )}

        </section>
    );
}
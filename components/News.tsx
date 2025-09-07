
import React, { useState, useEffect } from 'react';
import { fetchIrishTechNews } from '../services/geminiService';
import type { NewsItem } from '../types';

const NewsCard: React.FC<{ item: NewsItem; delay: number }> = ({ item, delay }) => (
    <div 
        className="bg-white p-6 rounded-lg border border-border-grey flex flex-col animate-fade-in-up"
        style={{ animationDelay: `${delay}s` }}
    >
        <div className="flex-grow">
            <span className="inline-block bg-gray-100 text-soft-grey text-xs font-semibold px-3 py-1 rounded-full mb-3">{item.sector}</span>
            <h3 className="text-xl font-bold text-near-black mb-2">{item.title}</h3>
            <p className="text-soft-grey text-sm">{item.summary}</p>
        </div>
    </div>
);

const LoadingSkeleton: React.FC = () => (
    <div className="bg-white p-6 rounded-lg border border-border-grey animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
        <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
    </div>
);

const News: React.FC = () => {
    const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadNews = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const items = await fetchIrishTechNews();
                setNewsItems(items);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("An unexpected error occurred.");
                }
            } finally {
                setIsLoading(false);
            }
        };

        loadNews();
    }, []);

    return (
        <section id="news" className="py-20 bg-off-white border-t border-border-grey">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12 animate-fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-near-black">Latest AI-Powered Headlines</h2>
                    <p className="text-soft-grey mt-4 max-w-2xl mx-auto">Fresh insights from the Irish tech scene, curated by Gemini.</p>
                </div>

                {error && (
                    <div className="text-center bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg">
                        <p className="font-bold">Failed to load news</p>
                        <p className="text-sm">{error}</p>
                    </div>
                )}

                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                    {isLoading ? (
                        <>
                            <LoadingSkeleton />
                            <LoadingSkeleton />
                            <LoadingSkeleton />
                        </>
                    ) : (
                        newsItems.map((item, index) => (
                            <NewsCard key={index} item={item} delay={index * 0.15} />
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default News;
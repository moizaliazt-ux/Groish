import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Search } from 'lucide-react';
import { blogPostsData } from '@/data/blogPostsData';
import { BlogCard, BlogSidebar } from '@/components/BlogComponents';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Amazon FBA', 'Amazon Wholesale', 'Amazon Private Label', 'Amazon PPC', 'E-Commerce', 'Online Business'];

  const filteredPosts = blogPostsData.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPostsData.slice(0, 3);
  const latestPosts = filteredPosts.slice(0, 6);

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <Helmet>
        <title>E-Commerce & Amazon Blog | Groish</title>
        <meta name="description" content="Stay updated with the latest Amazon selling strategies, e-commerce tips, and online business guides tailored for Pakistani entrepreneurs." />
      </Helmet>

      <div className="relative overflow-hidden border-b border-white/10 bg-slate-950 py-20 text-white sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(56,189,248,0.16),transparent_28%),linear-gradient(135deg,#020617,#0f172a_54%,#172554)]" />
        <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:56px_56px]" />
        <div className="container relative z-10 mx-auto max-w-5xl px-4">
          <p className="premium-eyebrow !text-cyan-300">GROISH intelligence</p>
          <h1 className="max-w-3xl text-4xl font-black tracking-[-0.07em] sm:text-6xl">Ideas for the next stage of growth.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">Expert insights, strategies, and practical guides for building stronger Amazon and e-commerce businesses.</p>
          
          <div className="relative max-w-xl mx-auto">
            <input 
              type="text" 
              placeholder="Search articles, guides, strategies..." 
              className="w-full rounded-2xl border border-white/10 bg-white px-6 py-4 pl-12 text-slate-900 shadow-[0_18px_50px_rgba(2,6,23,0.22)] focus:outline-none focus:ring-4 focus:ring-cyan-300/30 sm:rounded-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-6 h-6" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-12 flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:flex-wrap lg:justify-center">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${selectedCategory === cat ? 'border-slate-950 bg-slate-950 text-white' : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="premium-eyebrow">The latest thinking</p>
                <h2 className="premium-section-title text-3xl">Latest Articles</h2>
              </div>
              <span className="hidden text-sm text-slate-500 sm:block">{latestPosts.length} stories</span>
            </div>
            {filteredPosts.length > 0 ? (
              <div className="grid sm:grid-cols-2 gap-8">
                {latestPosts.map(post => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-xl border border-slate-100">
                <p className="text-slate-500">No articles found matching your criteria.</p>
              </div>
            )}
          </div>
          <div className="lg:col-span-1">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
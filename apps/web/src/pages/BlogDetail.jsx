import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ChevronRight, Calendar, Clock, User } from 'lucide-react';
import { blogPostsData } from '@/data/blogPostsData';
import { BlogSidebar, BlogCTABanner, SocialShareButtons, BlogCard } from '@/components/BlogComponents';
import AdSenseAd from '@/components/AdSenseAd';

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogPostsData.find(p => p.slug === slug);

  if (!post) {
    return <div className="pt-32 text-center text-2xl font-bold">Post not found</div>;
  }

  const related = blogPostsData.filter(p => post.relatedBlogs.includes(p.slug));

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <Helmet>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription} />
        {/* Basic FAQ Schema representation */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": (post.faqs || []).map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          })}
        </script>
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/blog" className="hover:text-blue-600">Blog</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-900 font-medium truncate">{post.title}</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <img src={post.featuredImage} alt={post.title} loading="eager" fetchPriority="high" decoding="async" sizes="(max-width: 1024px) 100vw, 66vw" className="w-full h-[400px] object-cover rounded-2xl shadow-sm mb-8" />
            
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">{post.title}</h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600 mb-8 pb-8 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <img src={post.author.avatar} alt={post.author.name} loading="lazy" decoding="async" width="40" height="40" className="w-10 h-10 rounded-full" />
                <div>
                  <span className="block font-bold text-slate-900">{post.author.name}</span>
                  <span className="text-xs">{post.author.bio}</span>
                </div>
              </div>
              <div className="flex items-center gap-4 ml-auto">
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.publishedDate}</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readingTime}</span>
              </div>
            </div>

            <SocialShareButtons />

            <div className="bg-slate-100 p-6 rounded-xl mb-10">
              <h3 className="font-bold text-lg mb-3 text-slate-900">Table of Contents</h3>
              <ul className="space-y-2">
                {post.tableOfContents.map((item, i) => (
                  <li key={i}>
                    <a href={`#${item.id}`} className="text-blue-600 hover:underline">{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div 
              className="blog-content prose prose-lg max-w-none text-slate-700 mb-12"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="my-8">
              <AdSenseAd variant="card" format="auto" />
            </div>

            <BlogCTABanner title="Ready to Scale Your Amazon Business?" subtitle="Join 500+ successful students from Pakistan today." />

            {post.faqs && post.faqs.length > 0 && (
              <div className="mt-12 mb-12">
                <h2 className="text-2xl font-bold mb-6 text-slate-900">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {post.faqs.map((faq, i) => (
                    <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                      <h3 className="font-bold text-lg text-slate-900 mb-2">{faq.q}</h3>
                      <p className="text-slate-600">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {related.length > 0 && (
              <div className="mt-16 pt-12 border-t border-slate-200">
                <h2 className="text-2xl font-bold mb-8 text-slate-900">Related Articles</h2>
                <div className="grid sm:grid-cols-2 gap-8">
                  {related.map(r => (
                    <BlogCard key={r.slug} post={r} />
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
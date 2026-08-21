import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, CheckCircle2, MessageSquare, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const BlogCard = ({ post }) => (
  <Link to={`/blog/${post.slug}`} className="group bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-all flex flex-col h-full">
    <div className="relative h-48 overflow-hidden">
      <img src={post.featuredImage} alt={post.title} loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, 50vw" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">{post.category}</span>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.publishedDate}</span>
        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readingTime}</span>
      </div>
      <h3 className="font-bold text-lg mb-2 text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">{post.title}</h3>
      <p className="text-slate-600 text-sm mb-4 line-clamp-2">{post.metaDescription}</p>
      <div className="mt-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={post.author.avatar} alt={post.author.name} loading="lazy" decoding="async" width="32" height="32" className="w-8 h-8 rounded-full" />
          <span className="text-sm font-medium text-slate-700">{post.author.name}</span>
        </div>
        <ChevronRight className="w-5 h-5 text-blue-500" />
      </div>
    </div>
  </Link>
);

export const BlogSidebar = () => (
  <div className="space-y-8">
    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
      <h3 className="font-bold text-lg mb-4">Subscribe to Newsletter</h3>
      <p className="text-sm text-slate-600 mb-4">Get the latest Amazon strategies delivered to your inbox.</p>
      <input type="email" placeholder="Email Address" className="w-full px-4 py-2 rounded-lg border border-slate-300 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Subscribe</Button>
    </div>
    <div className="bg-blue-600 p-6 rounded-xl text-white text-center">
      <h3 className="font-bold text-xl mb-2">Start Your Journey</h3>
      <p className="text-blue-100 text-sm mb-6">Enroll in our expert-led Amazon courses today.</p>
      <Link to="/courses/amazon-fba-wholesale">
        <Button variant="secondary" className="w-full mb-3 bg-white text-blue-600 hover:bg-slate-100">Enroll Now</Button>
      </Link>
      <a href="https://wa.me/923286672129" target="_blank" rel="noreferrer">
        <Button className="w-full bg-green-500 hover:bg-green-600 text-white">WhatsApp Us</Button>
      </a>
    </div>
    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
      <h3 className="font-bold text-lg mb-4">Categories</h3>
      <ul className="space-y-2 text-slate-600">
        <li><Link to="/blog?category=Amazon FBA" className="hover:text-blue-600">Amazon FBA</Link></li>
        <li><Link to="/blog?category=Amazon Wholesale" className="hover:text-blue-600">Amazon Wholesale</Link></li>
        <li><Link to="/blog?category=Amazon PPC" className="hover:text-blue-600">Amazon PPC</Link></li>
        <li><Link to="/blog?category=E-Commerce" className="hover:text-blue-600">E-Commerce</Link></li>
      </ul>
    </div>
  </div>
);

export const BlogCTABanner = ({ title, subtitle, link }) => (
  <div className="my-12 bg-slate-900 text-white p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
    <div>
      <h3 className="text-2xl font-bold mb-2">{title || "Start Your Amazon Journey"}</h3>
      <p className="text-slate-300">{subtitle || "Join Pakistan's top e-commerce training institute."}</p>
    </div>
    <div className="flex gap-4 shrink-0">
      <Link to={link || "/courses/amazon-fba-wholesale"}>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold">Enroll Now</Button>
      </Link>
      <a href="https://wa.me/923286672129" target="_blank" rel="noreferrer">
        <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white font-bold">WhatsApp (03286672129)</Button>
      </a>
    </div>
  </div>
);

export const SocialShareButtons = () => (
  <div className="flex gap-3 my-8">
    <Button variant="outline" size="icon" className="rounded-full hover:bg-blue-50 hover:text-blue-600"><Facebook className="w-4 h-4" /></Button>
    <Button variant="outline" size="icon" className="rounded-full hover:bg-blue-50 hover:text-blue-400"><Twitter className="w-4 h-4" /></Button>
    <Button variant="outline" size="icon" className="rounded-full hover:bg-blue-50 hover:text-blue-700"><Linkedin className="w-4 h-4" /></Button>
    <a href="https://wa.me/?text=Check this out!" target="_blank" rel="noreferrer">
      <Button variant="outline" size="icon" className="rounded-full hover:bg-green-50 hover:text-green-600 text-green-500 border-green-200"><MessageSquare className="w-4 h-4" /></Button>
    </a>
  </div>
);
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Blog | Mohd Tauseef Ansari',
  description: 'Thoughts, research, and tutorials on Full-Stack Development and Cyber Security.',
};

export default function BlogIndex() {
  // Placeholder blog posts
  const posts = [
    {
      slug: 'ai-driven-anomaly-detection',
      title: 'Exploring AI-Driven Anomaly Detection in Zero-Day Networks',
      date: '2025-10-15',
      excerpt: 'How Isolation Forests can detect unseen threats in network traffic better than traditional signature-based systems.',
      tags: ['AI', 'Cyber Security']
    },
    {
      slug: 'modern-react-architecture',
      title: 'Architecting Scalable React Applications in 2026',
      date: '2025-08-02',
      excerpt: 'Best practices for managing state, side effects, and async data in complex Next.js single-page applications.',
      tags: ['React', 'Frontend', 'Next.js']
    }
  ];

  return (
    <div className="container mx-auto px-6 max-w-4xl py-32">
      <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-neon-blue transition-colors mb-12">
        <ArrowLeft size={16} /> Back to Portfolio
      </Link>
      
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Writing & Research</h1>
      <p className="text-gray-400 text-lg mb-16 max-w-2xl">Thoughts on software architecture, AI integration, cyber security research, and tutorials on modern web full-stack development.</p>
      
      <div className="space-y-12">
        {posts.map(post => (
          <article key={post.slug} className="group relative">
            <div className="absolute -left-6 top-0 bottom-0 w-1 bg-neon-blue rounded-full scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300"></div>
            
            <Link href={`/blog/${post.slug}`} className="block">
              <time className="text-sm font-mono text-electric-purple mb-2 block">{post.date}</time>
              <h2 className="text-2xl font-bold text-gray-200 group-hover:text-neon-blue transition-colors mb-3">
                {post.title}
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <div className="flex gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

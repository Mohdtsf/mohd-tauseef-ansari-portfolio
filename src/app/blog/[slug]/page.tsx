import Link from 'next/link';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Convert slug to title for placeholder
  const title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return (
    <article className="container mx-auto px-6 max-w-3xl py-32">
      <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-electric-purple transition-colors mb-12">
        <ArrowLeft size={16} /> Back to articles
      </Link>

      <header className="mb-12 border-b border-glass-border pb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          {title}
        </h1>
        
        <div className="flex items-center gap-6 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-neon-blue" />
            <time>October 24, 2025</time>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-neon-blue" />
            <span>5 min read</span>
          </div>
        </div>
      </header>

      <div className="prose prose-invert prose-neon max-w-none prose-headings:text-white prose-a:text-neon-blue prose-a:no-underline hover:prose-a:underline">
        <p className="lead text-xl text-gray-300 mb-8">
          This is a placeholder for the blog post content. In the full implementation, this content would be fetched from markdown files or a CMS.
        </p>
        
        <h2>Introduction</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        
        <pre className="p-4 rounded-xl bg-black/50 border border-glass-border overflow-x-auto my-8">
          <code className="text-sm font-mono text-green-400">
{`function connectToDatabase() {
  console.log("Connecting securely...");
  // Implement connection logic here
}`}
          </code>
        </pre>

        <h3>Core Concepts</h3>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
        </p>
        <ul>
          <li>Concept one requires deep understanding of the underlying system.</li>
          <li>Concept two revolves around the asynchronous nature of operations.</li>
          <li>Concept three ties everything together under a unified architecture.</li>
        </ul>
      </div>
    </article>
  );
}

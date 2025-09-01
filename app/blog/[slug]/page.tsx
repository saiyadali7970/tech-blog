import { getBlogPost, getBlogPosts } from '@/lib/blog-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 fade-in">
        <article className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/20 dark:border-gray-700/20">
          <div className="p-8 md:p-12">
            <div className="mb-8 slide-up">
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {post.readTime}
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <span className="font-semibold block">{post.author}</span>
                    <time className="text-sm opacity-75">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-96 w-full mb-12 rounded-2xl overflow-hidden shadow-2xl scale-in" style={{animationDelay: '0.3s'}}>
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>

            <div className="prose prose-lg max-w-none slide-up" style={{animationDelay: '0.6s'}}>
              <div className="text-xl text-gray-600 dark:text-gray-300 font-medium mb-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border-l-4 border-blue-500 italic leading-relaxed">
                {post.excerpt}
              </div>
              
              <div 
                className="text-gray-800 dark:text-gray-200 leading-relaxed space-y-6 text-lg"
                dangerouslySetInnerHTML={{ 
                  __html: post.content
                    .split('\n\n')
                    .map(paragraph => {
                      if (paragraph.startsWith('## ')) {
                        return `<h2 class="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">${paragraph.substring(3)}</h2>`;
                      } else if (paragraph.startsWith('### ')) {
                        return `<h3 class="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">${paragraph.substring(4)}</h3>`;
                      } else if (paragraph.startsWith('```')) {
                        const lines = paragraph.split('\n');
                        const language = lines[0].substring(3);
                        const code = lines.slice(1, -1).join('\n');
                        return `<div class="my-6 rounded-2xl overflow-hidden shadow-lg"><pre class="bg-gray-900 dark:bg-gray-800 text-gray-100 p-6 overflow-x-auto"><code class="language-${language}">${code}</code></pre></div>`;
                      } else if (paragraph.startsWith('- ')) {
                        const items = paragraph.split('\n').map(item => 
                          `<li class="ml-6 py-1">${item.substring(2)}</li>`
                        ).join('');
                        return `<ul class="list-disc list-inside space-y-2 my-6 pl-4">${items}</ul>`;
                      } else if (paragraph.match(/^\d+\. /)) {
                        const items = paragraph.split('\n').map(item => 
                          `<li class="ml-6 py-1">${item.substring(3)}</li>`
                        ).join('');
                        return `<ol class="list-decimal list-inside space-y-2 my-6 pl-4">${items}</ol>`;
                      } else {
                        return `<p class="leading-relaxed mb-6">${paragraph.replace(/`([^`]+)`/g, '<code class="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm font-mono">$1</code>')}</p>`;
                      }
                    })
                    .join('')
                }}
              />
            </div>

            <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-gray-900 dark:text-white font-bold text-lg">Written by {post.author}</p>
                    <p className="text-gray-600 dark:text-gray-300">Thanks for reading! Share your thoughts below.</p>
                  </div>
                </div>
                <Link
                  href="/"
                  className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-bold text-lg hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span className="flex items-center gap-2">
                    Read More Posts
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
import { getBlogPostsByCategory, getCategories } from '@/lib/blog-data';
import { notFound } from 'next/navigation';
import BlogCard from '@/components/BlogCard';

export async function generateStaticParams() {
  const categories = getCategories();
  return categories.map((category) => ({
    slug: category.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const categoryName = slug.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase());
  const posts = getBlogPostsByCategory(categoryName);

  if (posts.length === 0) {
    notFound();
  }

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 fade-in">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span className="text-white font-bold text-3xl">
              {categoryName.charAt(0)}
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            {categoryName} <span className="text-gradient">Articles</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our collection of {posts.length} article{posts.length !== 1 ? 's' : ''} about {categoryName.toLowerCase()}.
            From beginner guides to advanced techniques, find everything you need to know.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {posts.map((post, index) => (
            <div 
              key={post.id} 
              className="fade-in" 
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <BlogCard post={post} />
            </div>
          ))}
        </div>

        {/* Back to Categories */}
        <div className="text-center">
          <a
            href="/categories"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Browse All Categories
          </a>
        </div>
      </div>
    </div>
  );
}
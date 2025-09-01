import Link from "next/link";
import { getBlogPosts, getCategories } from "@/lib/blog-data";
import BlogCard from "@/components/BlogCard";

export default function CategoriesPage() {
  const categories = getCategories();
  const posts = getBlogPosts();

  // Get post count for each category
  const categoryStats = categories.map((category) => ({
    name: category,
    count: posts.filter((post) => post.category === category).length,
    posts: posts.filter((post) => post.category === category),
  }));

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 fade-in">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">
            Explore <span className="text-gradient">Categories</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover articles organized by topics that matter to you. From web
            development to programming best practices, find exactly what
            you&apos;re looking for.
          </p>
        </div>

        {/* Category Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categoryStats.map((category, index) => (
            <div
              key={category.name}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 text-center card-hover border border-white/20 dark:border-gray-700/20 fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">
                  {category.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {category.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {category.count} article{category.count !== 1 ? "s" : ""}
              </p>
              <Link
                href={`#${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
              >
                View Articles
              </Link>
            </div>
          ))}
        </div>

        {/* Articles by Category */}
        {categoryStats.map((category, categoryIndex) => (
          <section
            key={category.name}
            id={category.name.toLowerCase().replace(/\s+/g, "-")}
            className="mb-20 slide-up"
            style={{ animationDelay: `${categoryIndex * 0.2}s` }}
          >
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {category.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {category.count} article{category.count !== 1 ? "s" : ""} in
                  this category
                </p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">
                  {category.name.charAt(0)}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.posts.map((post, postIndex) => (
                <div
                  key={post.id}
                  className="fade-in"
                  style={{
                    animationDelay: `${categoryIndex * 0.2 + postIndex * 0.1}s`,
                  }}
                >
                  <BlogCard post={post} />
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Newsletter CTA */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 rounded-3xl p-12 text-center text-white slide-up">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8 opacity-90">
            Get notified when we publish new articles in your favorite
            categories
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full text-gray-900 font-medium focus:outline-none focus:ring-4 focus:ring-white/30"
            />
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

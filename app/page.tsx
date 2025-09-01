import BlogCard from '@/components/BlogCard';
import { getBlogPosts } from '@/lib/blog-data';

export default function HomePage() {
  const posts = getBlogPosts();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section id="hero-section" className="relative overflow-hidden animated-gradient py-24 md:py-32 lg:py-40" data-testid="hero-banner">
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-40 right-16 w-32 h-32 bg-yellow-400/30 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-pink-400/40 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-40 right-20 w-12 h-12 bg-purple-400/30 rounded-full blur-xl animate-float" style={{animationDelay: '3s'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center slide-up">
            <div className="mb-8">
              <span className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-white font-semibold text-sm mb-6 border border-white/30">
                🚀 New Articles Every Week
              </span>
            </div>
            
            <h1 id="hero-title" className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white mb-6 leading-tight">
              Tech<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Blog</span>
            </h1>
            
            <p id="hero-description" className="text-xl md:text-2xl lg:text-3xl text-blue-100 mb-12 max-w-4xl mx-auto font-medium leading-relaxed">
              Discover cutting-edge insights in web development, programming, and emerging technologies
            </p>

            {/* Primary CTA Section - Easy to target for A/B testing */}
            <div id="hero-cta-section" className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <button 
                id="primary-cta" 
                className="group bg-white text-gray-900 px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 relative overflow-hidden"
                data-testid="primary-button"
              >
                <span className="relative z-10">Start Reading</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button 
                id="secondary-cta"
                className="border-3 border-white text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-gray-900 transition-all duration-300 backdrop-blur-sm"
                data-testid="secondary-button"
              >
                Subscribe
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-2 border-white"></div>
                  ))}
                </div>
                <span className="text-sm font-medium">50K+ developers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {'★'.repeat(5)}
                </div>
                <span className="text-sm font-medium">4.9/5 rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" className="relative -mt-20 z-20" data-testid="stats-banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div id="stats-container" className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="fade-in">
                <div className="text-4xl font-black text-gradient mb-2">50K+</div>
                <p className="text-gray-600 dark:text-gray-300 font-medium">Active Readers</p>
              </div>
              <div className="fade-in" style={{animationDelay: '0.1s'}}>
                <div className="text-4xl font-black text-gradient mb-2">100+</div>
                <p className="text-gray-600 dark:text-gray-300 font-medium">Articles</p>
              </div>
              <div className="fade-in" style={{animationDelay: '0.2s'}}>
                <div className="text-4xl font-black text-gradient mb-2">15</div>
                <p className="text-gray-600 dark:text-gray-300 font-medium">Categories</p>
              </div>
              <div className="fade-in" style={{animationDelay: '0.3s'}}>
                <div className="text-4xl font-black text-gradient mb-2">4.9★</div>
                <p className="text-gray-600 dark:text-gray-300 font-medium">Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features-section" className="py-20" data-testid="features-showcase">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="features-title" className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
              Why Choose <span className="text-gradient">TechBlog?</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Everything you need to stay ahead in the rapidly evolving world of technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🚀",
                title: "Latest Technologies",
                description: "Stay updated with cutting-edge frameworks, tools, and best practices in web development."
              },
              {
                icon: "👨‍💻",
                title: "Expert Authors",
                description: "Learn from industry professionals with years of real-world experience."
              },
              {
                icon: "📚",
                title: "Comprehensive Guides",
                description: "Step-by-step tutorials that take you from beginner to expert level."
              },
              {
                icon: "🎯",
                title: "Practical Examples",
                description: "Real code examples and projects you can implement immediately."
              },
              {
                icon: "🔄",
                title: "Regular Updates",
                description: "Fresh content published weekly to keep your skills sharp."
              },
              {
                icon: "🌟",
                title: "Community Driven",
                description: "Join a community of passionate developers sharing knowledge."
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 dark:border-gray-700/20 card-hover fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials-section" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900" data-testid="testimonials-showcase">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="testimonials-title" className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
              What Developers <span className="text-gradient">Say</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Join thousands of satisfied developers worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Rivera",
                role: "Senior Frontend Developer",
                company: "Google",
                avatar: "AR",
                quote: "TechBlog has been instrumental in keeping me updated with the latest React patterns. The quality of content is exceptional!"
              },
              {
                name: "Sarah Kim",
                role: "Full Stack Engineer",
                company: "Microsoft",
                avatar: "SK", 
                quote: "The step-by-step tutorials helped me transition from junior to senior developer. Highly recommend to anyone serious about coding."
              },
              {
                name: "Marcus Johnson",
                role: "DevOps Engineer",
                company: "Netflix",
                avatar: "MJ",
                quote: "Best resource for staying current with modern development practices. The authors really know what they're talking about."
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 border border-white/20 dark:border-gray-700/20 shadow-xl card-hover fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.role}</p>
                    <p className="text-xs text-blue-600 dark:text-blue-400">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex text-yellow-400 mt-4">
                  {'★'.repeat(5)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <main id="blog-posts-section" className="py-20" data-testid="latest-articles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="articles-title" className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
              Latest <span className="text-gradient">Articles</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Stay ahead of the curve with our handpicked selection of the most relevant and insightful articles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {posts.slice(0, 6).map((post, index) => (
              <div key={post.id} className="fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <BlogCard post={post} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              id="view-all-cta"
              href="/categories"
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              data-testid="view-all-articles"
            >
              View All Articles
            </a>
          </div>
        </div>
      </main>

      {/* Newsletter Section - Optimized for A/B Testing */}
      <section id="newsletter-section" className="py-20" data-testid="newsletter-signup">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div id="newsletter-container" className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 rounded-3xl p-12 text-center text-white">
            <h3 id="newsletter-title" className="text-3xl md:text-4xl font-black mb-6">
              Never Miss an Update
            </h3>
            <p id="newsletter-description" className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join 50,000+ developers getting the latest insights delivered to their inbox every week
            </p>
            <div id="newsletter-form" className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                id="email-input"
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 font-medium focus:outline-none focus:ring-4 focus:ring-white/30"
                data-testid="email-input"
              />
              <button 
                id="newsletter-cta"
                className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition-all duration-300 hover:scale-105 shadow-lg"
                data-testid="newsletter-submit"
              >
                Subscribe Free
              </button>
            </div>
            <p id="newsletter-disclaimer" className="text-sm mt-4 opacity-75">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 dark:text-gray-400 mb-8 font-medium">
            Trusted by developers at leading companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['Google', 'Microsoft', 'Netflix', 'Spotify', 'Uber', 'Airbnb'].map((company) => (
              <div key={company} className="text-2xl font-bold text-gray-400 dark:text-gray-600">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

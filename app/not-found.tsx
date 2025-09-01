import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/20 dark:border-gray-700/20">
          {/* 404 Animation */}
          <div className="mb-8">
            <div className="text-8xl font-black text-gradient mb-4 animate-bounce">
              404
            </div>
            <div className="flex justify-center space-x-2 mb-6">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <div
                className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-3 h-3 bg-pink-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Page Not Found
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Oops! The page you&apos;re looking for seems to have wandered off
            into the digital void. Don&apos;t worry though, even the best
            developers hit a 404 sometimes.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              href="/"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-bold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Go Home
            </Link>

            <Link
              href="/categories"
              className="border-2 border-blue-500 text-blue-500 dark:text-blue-400 dark:border-blue-400 px-8 py-3 rounded-full font-bold hover:bg-blue-500 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300 hover:scale-105"
            >
              Browse Categories
            </Link>
          </div>

          {/* Quick Links */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Or try one of these popular sections:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/about"
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                About
              </Link>
              <span className="text-gray-300 dark:text-gray-600">•</span>
              <Link
                href="/contact"
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                Contact
              </Link>
              <span className="text-gray-300 dark:text-gray-600">•</span>
              <Link
                href="/blog/getting-started-nextjs-14"
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                Latest Post
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

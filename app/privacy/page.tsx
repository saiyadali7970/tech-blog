export default function PrivacyPage() {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/20 dark:border-gray-700/20">
          <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-8">
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 space-y-6">
            <p className="text-xl leading-relaxed">
              At TechBlog, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you visit our website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Information We Collect</h2>
            <p>We may collect information about you in a variety of ways. The information we may collect includes:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Personal information you voluntarily provide (name, email, comments)</li>
              <li>Usage data and analytics information</li>
              <li>Cookies and tracking technologies</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide and maintain our website</li>
              <li>Improve user experience</li>
              <li>Send newsletters and updates (with your consent)</li>
              <li>Respond to your comments and questions</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Data Protection</h2>
            <p>
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Third-Party Services</h2>
            <p>
              We may use third-party services for analytics and advertising. These services may collect 
              information about your use of our website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Your Rights</h2>
            <p>
              You have the right to access, update, or delete your personal information. 
              Contact us if you wish to exercise these rights.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:privacy@techblog.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                privacy@techblog.com
              </a>
            </p>

            <p className="text-sm text-gray-500 mt-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
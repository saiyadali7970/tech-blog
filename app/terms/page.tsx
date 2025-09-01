export default function TermsPage() {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/20 dark:border-gray-700/20">
          <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-8">
            Terms of <span className="text-gradient">Service</span>
          </h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 space-y-6">
            <p className="text-xl leading-relaxed">
              These Terms of Service govern your use of TechBlog and the services we provide. 
              By accessing our website, you agree to these terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms 
              and provision of this agreement.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials on TechBlog 
              for personal, non-commercial transitory viewing only.
            </p>
            <p>Under this license you may not:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>modify or copy the materials</li>
              <li>use the materials for any commercial purpose or for any public display</li>
              <li>attempt to reverse engineer any software contained on the website</li>
              <li>remove any copyright or other proprietary notations from the materials</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Disclaimer</h2>
            <p>
              The materials on TechBlog are provided on an 'as is' basis. TechBlog makes no warranties, 
              expressed or implied, and hereby disclaims and negates all other warranties including, 
              without limitation, implied warranties or conditions of merchantability, fitness for a 
              particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Limitations</h2>
            <p>
              In no event shall TechBlog or its suppliers be liable for any damages (including, 
              without limitation, damages for loss of data or profit, or due to business interruption) 
              arising out of the use or inability to use the materials on TechBlog, even if TechBlog 
              or an authorized representative has been notified orally or in writing of the possibility 
              of such damage.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">User Content</h2>
            <p>
              Users may post content such as comments. By posting content, you grant TechBlog a 
              non-exclusive license to use, modify, and display such content.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Modifications</h2>
            <p>
              TechBlog may revise these terms of service at any time without notice. 
              By using this web site, you are agreeing to be bound by the then current version 
              of these terms of service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at{' '}
              <a href="mailto:legal@techblog.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                legal@techblog.com
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
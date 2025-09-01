'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface ABTestingControlsProps {
  className?: string;
}

export default function ABTestingControls({ className = '' }: ABTestingControlsProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [currentVariants, setCurrentVariants] = useState({
    hero: 'A',
    cta: 'A',
    newsletter: 'A'
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setCurrentVariants({
      hero: params.get('hero') || 'A',
      cta: params.get('cta') || 'A',
      newsletter: params.get('newsletter') || 'A'
    });
  }, []);

  const updateVariant = (type: string, variant: string) => {
    const params = new URLSearchParams(window.location.search);
    params.set(type, variant);
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    router.push(newUrl);
    window.location.reload(); // Force reload to see changes
  };

  const resetAll = () => {
    router.push('/');
    window.location.reload();
  };

  const presetCombinations = [
    { name: 'Conversion Focus', hero: 'B', cta: 'B', newsletter: 'C' },
    { name: 'Trust Building', hero: 'A', cta: 'A', newsletter: 'B' },
    { name: 'Urgency/Scarcity', hero: 'C', cta: 'C', newsletter: 'C' },
    { name: 'Social Proof', hero: 'B', cta: 'A', newsletter: 'A' },
    { name: 'Default', hero: 'A', cta: 'A', newsletter: 'A' }
  ];

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${className}`}>
      <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 transition-all duration-300 ${isOpen ? 'w-96' : 'w-auto'}`}>
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-3 w-full p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-700 rounded-2xl transition-colors"
        >
          <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
          <span className="font-semibold text-gray-900 dark:text-white">A/B Testing</span>
          <svg 
            className={`w-4 h-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Controls Panel */}
        {isOpen && (
          <div className="p-4 pt-0 space-y-6">
            {/* Current Status */}
            <div className="text-sm text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
              <div className="font-semibold mb-2">Current Variants:</div>
              <div className="space-y-1">
                <div>Hero: <span className="font-mono bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded text-blue-800 dark:text-blue-200">{currentVariants.hero}</span></div>
                <div>CTA: <span className="font-mono bg-green-100 dark:bg-green-900 px-2 py-1 rounded text-green-800 dark:text-green-200">{currentVariants.cta}</span></div>
                <div>Newsletter: <span className="font-mono bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded text-purple-800 dark:text-purple-200">{currentVariants.newsletter}</span></div>
              </div>
            </div>

            {/* Individual Controls */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Hero Section</label>
                <div className="flex gap-2">
                  {['A', 'B', 'C'].map((variant) => (
                    <button
                      key={variant}
                      onClick={() => updateVariant('hero', variant)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        currentVariants.hero === variant
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-500'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  A: TechBlog | B: MasterCode | C: BuildBetter
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">CTA Buttons</label>
                <div className="flex gap-2">
                  {['A', 'B', 'C'].map((variant) => (
                    <button
                      key={variant}
                      onClick={() => updateVariant('cta', variant)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        currentVariants.cta === variant
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-500'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  A: Classic | B: Modern | C: Card Style
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Newsletter Signup</label>
                <div className="flex gap-2">
                  {['A', 'B', 'C'].map((variant) => (
                    <button
                      key={variant}
                      onClick={() => updateVariant('newsletter', variant)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        currentVariants.newsletter === variant
                          ? 'bg-purple-500 text-white'
                          : 'bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-500'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  A: Gradient | B: Benefits | C: Limited Offer
                </div>
              </div>
            </div>

            {/* Preset Combinations */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Quick Presets</label>
              <div className="space-y-2">
                {presetCombinations.map((preset) => (
                  <button
                    key={preset.name}
                    onClick={() => {
                      const params = new URLSearchParams();
                      params.set('hero', preset.hero);
                      params.set('cta', preset.cta);
                      params.set('newsletter', preset.newsletter);
                      const newUrl = `${window.location.pathname}?${params.toString()}`;
                      router.push(newUrl);
                      window.location.reload();
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                  >
                    <div className="font-medium text-gray-900 dark:text-white">{preset.name}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Hero:{preset.hero} • CTA:{preset.cta} • Newsletter:{preset.newsletter}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Reset Button */}
            <button
              onClick={resetAll}
              className="w-full bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
            >
              Reset All to Default
            </button>

            {/* Info */}
            <div className="text-xs text-gray-500 dark:text-gray-400 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
              💡 <strong>Tip:</strong> Use URL parameters to test specific combinations:
              <br />
              <code className="text-xs">?hero=B&cta=C&newsletter=A</code>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
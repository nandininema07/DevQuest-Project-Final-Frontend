import { HeroBlock } from "./components/hero-block.jsx"
import { FeatureCard } from "./components/feature-card.jsx"
import { FeatureSection } from "./components/feature-section.jsx"

export default function Page() {
  return (
    <div className="flex min-h-screen">
      {/* Fixed left sidebar */}
      <div className="w-[600px] p-8 fixed left-0 top-0 bottom-0 overflow-y-auto">
        <HeroBlock />
      </div>

      {/* Scrollable right content */}
      <div className="ml-[600px] flex-grow p-8 overflow-y-auto">
        <div className="max-w-3xl mx-auto space-y-12">
          <FeatureSection title="WHERE DESIGNERS CAN">
            <FeatureCard 
              title="Access project repo and view components at any stage"
              className="bg-emerald-400"
            >
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-18%20095130-mSfpbSYdeZ22eheVrTyDDfE9x8FIcJ.png" 
                alt="Branch selection interface"
                className="rounded-lg shadow-lg w-full"
              />
            </FeatureCard>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FeatureCard 
                title="Use Git feature branches to isolate work and design safely"
                className="bg-gray-100"
              >
                <div className="bg-white rounded-lg p-4 shadow-lg">
                  <h4 className="font-medium mb-2">Commit Changes</h4>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center">
                      <input type="checkbox" checked readOnly className="mr-2" /> All Changed Files (2)
                    </li>
                    <li className="flex items-center">
                      <input type="checkbox" checked readOnly className="mr-2" /> Sidebar.tsx
                    </li>
                    <li className="flex items-center">
                      <input type="checkbox" checked readOnly className="mr-2" /> nav-item.module.scss
                    </li>
                  </ul>
                  <p className="mt-4 text-sm text-gray-600">
                    Navigation button changed, also minor fix to the width of the sidebar
                  </p>
                  <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded">
                    Commit (2)
                  </button>
                </div>
              </FeatureCard>
              <FeatureCard 
                title="Share a link to an online playground of their latest work for feedback"
                className="bg-blue-100"
              >
                <div className="bg-white rounded-lg p-4 shadow-lg">
                  <h4 className="font-medium mb-2">Share "Cloud-cash"</h4>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium">Link Name</label>
                    <input 
                      type="text" 
                      defaultValue="With cart integration" 
                      className="w-full p-2 border rounded"
                    />
                    <label className="block text-sm font-medium">Project link to share</label>
                    <input 
                      type="text" 
                      defaultValue="https://online.codux.com/?boardPath=..." 
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div className="mt-4 flex justify-end space-x-2">
                    <button className="px-4 py-2 border rounded">Close</button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded">
                      Update link and share
                    </button>
                  </div>
                </div>
              </FeatureCard>
            </div>
          </FeatureSection>

          <FeatureSection title="WHERE DEVELOPERS CAN">
            <FeatureCard 
              title="Work side-by-side with your preferred IDE"
              className="bg-gray-100"
            >
              <div className="bg-[#1E1E1E] rounded-lg p-4 text-white/90 font-mono text-sm">
                <pre className="text-green-400">
                  {`@import '../../styles/spacing';
@import '../../styles/typo';

:root {
  display: flex;
  flex-direction: column;
  row-gap: $spacing-2;
  margin: $spacing-1;
}

.categories {
  list-style-type: none;
  padding: $spacing-1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: $spacing-2;
}`}
                </pre>
              </div>
            </FeatureCard>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FeatureCard 
                title="Develop faster by reducing feedback loops"
                className="bg-blue-100"
              >
                <div className="bg-white rounded-lg p-4 shadow-lg">
                  <h4 className="font-medium mb-2">Commit Changes</h4>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center justify-between">
                      <span>dev: changed login button color</span>
                      <span className="text-gray-500">369c6d6 Nicole Sayd | Jan 16, 13:16</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>dev: flattened layout depth</span>
                      <span className="text-gray-500">369c6d6 Nicole Sayd | Jan 15, 18:05</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>chore: rename board file and import</span>
                      <span className="text-gray-500">369c6d6 Nicole Sayd | Jan 14, 23:34</span>
                    </li>
                  </ul>
                </div>
              </FeatureCard>
              <FeatureCard 
                title="Render components from the project source code in real-time"
                className="bg-yellow-100"
              >
                <div className="bg-white rounded-lg p-4 shadow-lg">
                  <div className="bg-gray-100 rounded-lg p-4 text-center">
                    <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4"></div>
                    <h3 className="text-lg font-semibold">Give your money awesome space in cloud</h3>
                    <p className="text-sm text-gray-600 mt-2">
                      Securely store and manage your finances with our cloud solution
                    </p>
                    <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
                      Upgrade
                    </button>
                  </div>
                </div>
              </FeatureCard>
            </div>
          </FeatureSection>
        </div>
      </div>
    </div>
  )
}


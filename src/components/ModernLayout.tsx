import { Work } from './Work'
import { SectionHeader } from './SectionHeader'

export const ModernLayout = () => {
  return (
    <div className="flex">
      {/* Left sidebar */}
      <div className="w-1/4 bg-gray-800 text-white p-6 py-8 space-y-6 flex flex-col justify-between">
        <div className="space-y-6">
          {/* <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-8 bg-emerald-800" /> */}

          <div>
            <p className="text-xl font-bold mb-2">About Me</p>
            <p className="text-sm text-gray-300">
              <p>Experienced Fullstack Developer with a strong foundation in building scalable webapps.</p>
              <p>Passionate about building products that make people's lives easier.</p>
            </p>
          </div>

          <div>
            <p className="text-xl font-bold mb-2">Contact</p>
            <div className="text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <p>@oddwes</p>
              </div>
              <div className="flex items-center gap-2">
                <p>github.com/oddwes</p>
              </div>
              <div className="flex items-center gap-2">
                <p>oddwes3.0@gmail.com</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xl font-bold mb-2">Skills</p>
            <div className="text-sm text-gray-300">
              <p>Project leading & delivery</p>
              <p>Fullstack development</p>
              <p>Ruby on Rails, NextJS, NestJS</p>
              <p>React, Typescript, TailwindCSS</p>
              <p>Docker, Kubernetes, Datadog, AWS, GCP</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Education</h2>
          <div className="text-sm text-gray-300">
            <h3 className="font-bold">Bachelor of Computer Engineering</h3>
            <p className="text-gray-300">Concordia University</p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="w-3/4 p-8 bg-white">
        <div className="mb-4 text-right">
          <h1 className="text-5xl font-bold mb-2">Julian Lai</h1>
          <h2 className="text-2xl text-gray-600">Senior Fullstack Developer</h2>
        </div>

        <div className="mb-8">
          <Work />
        </div>

        <div>
          <SectionHeader title="Projects" />
          <div className="space-y-4">
            <div>
              <p className="text-lg font-bold mb-2">
                <b>Teleos - ETHDenver Hackhaton</b>
              </p>
              <ul className="text-sm list-disc pl-4 space-y-1">
                <li>
                  <a href="https://devfolio.co/projects/teleosai-4cca" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                    https://devfolio.co/projects/teleosai-4cca
                  </a>
                </li>
                <li>Web3 and AI enabled Shopify for AI Agents</li>
                <li>Top 10 for infrastructure track</li>
                <li>Built on NextJS. Integrates ElizaOS, Coinbase Wallet SDK</li>
              </ul>
            </div>
            <div>
              <p className="text-lg font-bold mb-2">
                <b>Heather</b>
              </p>
              <ul className="text-sm list-disc pl-4 space-y-1">
                <li>
                  <a href="https://github.com/oddwes/heather" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                    https://github.com/oddwes/heather
                  </a>
                </li>
                <li>A space to get the TLDR on your newsletters and chat on the covered topics</li>
                <li>Built on NextJS. Integrates open source TTS models</li>
              </ul>
            </div>
            <div>
              <p className="text-lg font-bold mb-2">
                <b>English Immersion AI</b>
              </p>
              <ul className="text-sm list-disc pl-4 space-y-1">
                <li>
                  <a href="https://github.com/oddwes/english-immersion-ai" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                    https://github.com/oddwes/english-immersion-ai
                  </a>
                </li>
                <li>
                  <a href="https://english-immersion-ai.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                    https://english-immersion-ai.vercel.app
                  </a>
                </li>
                <li>Mobile first, AI powered English immersion tool</li>
                <li>Point your phone at an object and tap on it to get the spelling and pronunciation</li>
                <li>Built on NextJS. Google Cloud Vision API for object detection, Google TTS for audio generation</li>
              </ul>
            </div>
            <div>
              <p className="text-lg font-bold mb-2">
                <b>RidesOfJulian</b>
              </p>
              <ul className="text-sm list-disc pl-4 space-y-1">
                <li><a href="https://github.com/oddwes/ridesofjulian" className="text-blue-600">https://github.com/oddwes/ridesofjulian</a></li>
                <li>AI generated training plans based on historical training data</li>
                <li>Dashboard to summarize activities, backed by StravaAPI</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
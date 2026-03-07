import { Work } from './Work'
import { SectionHeader } from './SectionHeader'
import { Mail, Github, Linkedin, Smartphone } from 'lucide-react';

export const ModernLayout = () => {
  return (
    <div className="flex h-full">
      {/* Left sidebar */}
      <div className="w-1/4 bg-gray-800 text-white p-5 py-6 flex flex-col justify-between min-h-0">
        <div className="space-y-6 flex flex-col grow">
          <div>
            <p className="text-lg font-bold mb-1">About</p>
            <ul className="text-xs text-gray-300 list-disc ml-5 space-y-0.5">
              <li>
                Full-stack engineer building <span className="font-semibold text-white">Web3 applications and wallet infrastructure</span>
              </li>
              <li>
                Strong experience with <span className="font-semibold text-white">TypeScript, React, Node, and EVM integrations</span>
              </li>
              <li>
                Interested in <span className="font-semibold text-white">blockchain analytics and on-chain data exploration</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-lg font-bold mb-1">Contact</p>
            <div className="text-xs text-gray-300 space-y-0.5">
              <div className="flex items-center gap-2">
                <Mail />
                <p>julianlai.777@gmail.com</p>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone />
                <p>778-682-4384</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-lg font-bold mb-1">Skills</p>
            <div className="text-xs text-gray-300 space-y-1.5">
              <div>
                <span className="font-semibold text-white">Languages</span>
                <div className="ml-2">TypeScript, JavaScript, Ruby, Java, SQL</div>
              </div>
              <div>
                <span className="font-semibold text-white">Frameworks</span>
                <div className="ml-2">React, Next.js, Node.js, Ruby on Rails</div>
              </div>
              <div>
                <span className="font-semibold text-white">Infrastructure</span>
                <div className="ml-2">Docker, Kubernetes, AWS, GCP</div>
              </div>
              <div>
                <span className="font-semibold text-white">Web3</span>
                <ul className="ml-3 list-disc space-y-0.5">
                  <li>EVM ecosystem</li>
                  <li>Smart-contract integrations</li>
                  <li>WalletConnect / Coinbase Wallet SDK</li>
                  <li>Token &amp; NFT standards (ERC20, ERC721, ERC1155)</li>
                  <li>On-chain transactions &amp; wallet infrastructure</li>
                </ul>
              </div>
              <div>
                <span className="font-semibold text-white">Data / Analytics</span>
                <ul className="ml-3 list-disc space-y-0.5">
                  <li>SQL querying</li>
                  <li>Blockchain analytics</li>
                  <li>On-chain data exploration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-1.5">Education</h2>
          <div className="text-xs text-gray-300">
            <h3 className="font-bold">Bachelor of Computer Engineering (2011 ~ 2016)</h3>
            <p className="text-gray-300">Concordia University, Montreal, QC</p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="w-3/4 px-4 bg-white">
        <div className="text-right">
          <h1 className="text-2xl font-bold mb-0.5 inline-flex w-full justify-end items-baseline gap-3">
            <span>Julian</span>
            <span>Lai</span>
          </h1>
          <h2 className="text-base text-gray-600 mb-1">Full-Stack Engineer — Web3 Applications</h2>
          <p className="text-[13px] flex flex-wrap items-center justify-end gap-x-2 gap-y-0 leading-[18px]">
            <a href="https://github.com/oddwes" target="_blank" rel="noopener noreferrer" className="text-blue-600 inline-flex items-center gap-1.5 h-[18px]">
              <span className="inline-flex items-center justify-center shrink-0 w-[14px] h-[14px] translate-y-[2.5px] [&_svg]:block">
                <Github size={14} />
              </span>
              Github
            </a>
            <span className="text-gray-400">·</span>
            <a href="https://www.linkedin.com/in/julian-l-06223795" target="_blank" rel="noopener noreferrer" className="text-blue-600 inline-flex items-center gap-1.5 h-[18px]">
              <span className="inline-flex items-center justify-center shrink-0 w-[14px] h-[14px] translate-y-[2.5px] [&_svg]:block">
                <Linkedin size={14} />
              </span>
              LinkedIn
            </a>
          </p>
        </div>

        <div className="mb-4">
          <SectionHeader title="Projects" />
          <div className="space-y-2">
            <div>
              <p className="text-base font-bold mb-0.5">
                <b>Crypto Market Health Dashboard — Dune</b>
              </p>
              <ul className="text-[13px] list-disc pl-4 space-y-0.5">
                <li>Dune: <a href="https://dune.com/oddwes/bev" target="_blank" rel="noopener noreferrer" className="text-blue-600">dune.com/oddwes/bev</a></li>
                <li>Built analytics dashboard tracking stablecoin supply, bridge flows, and liquidity migration</li>
                <li>Wrote SQL queries analyzing cross-chain capital flows</li>
                <li>Implemented time-series charts and parameterized queries</li>
                <li>Designed dashboard to monitor crypto market health indicators</li>
                <li>Tracked chains with elevated trading activity to identify shifts in speculative market demand</li>
              </ul>
            </div>
            <div>
              <p className="text-base font-bold mb-0.5">
                <b>Pondify — ETHDenver 2026 Hackathon</b>
              </p>
              <ul className="text-[13px] list-disc pl-4 space-y-0.5">
                <li>
                  Devfolio: <a href="https://devfolio.co/projects/pondify" target="_blank" rel="noopener noreferrer" className="text-blue-600">Pondify</a> |
                  Code: <a href="https://github.com/oddwes/pondify" target="_blank" rel="noopener noreferrer" className="text-blue-600">github.com/oddwes/pondify</a>
                </li>
                <li>Built Web3 application during ETHDenver 2026 BUIDLathon</li>
                <li>Focused on improving <b>on-chain user interactions</b> and <b>developer tooling</b></li>
                <li>Implemented blockchain integrations and smart-contract interactions</li>
                <li>Built full stack prototype using <b>Next.js</b> and <b>Web3 tooling</b></li>
              </ul>
            </div>
            <div>
              <p className="text-base font-bold mb-0.5">
                <b>Teleos — ETHDenver 2025 Hackathon</b>
              </p>
              <ul className="text-[13px] list-disc pl-4 space-y-0.5">
                <li>Devfolio: <a href="https://devfolio.co/projects/teleosai-4cca" target="_blank" rel="noopener noreferrer" className="text-blue-600">TeleosAI</a> |
                  Code: <a href="https://github.com/aramxc/teleos" target="_blank" rel="noopener noreferrer" className="text-blue-600">github.com/aramxc/teleos</a>
                </li>
                <li>Top 10 – Infrastructure Track</li>
                <li>The Shopify of AI agents</li>
                <li>Built with <b>Next.js</b> and modern <b>Web3 integrations</b>Integrated <b>Coinbase Wallet SDK</b> and <b>ElizaOS</b></li>
              </ul>
            </div>
            <div>
              <p className="text-base font-bold mb-0.5">
                <b>Arbitrum Coinflip Game</b>
              </p>
              <ul className="text-[13px] list-disc pl-4 space-y-0.5">
                <li>Code: <a href="https://github.com/oddwes/arbitrum-coinflip" target="_blank" rel="noopener noreferrer" className="text-blue-600">github.com/oddwes/arbitrum-coinflip</a></li>
                <li>Fully on-chain coinflip game built on <b>Arbitrum</b></li>
                <li>Implemented <b>wallet connect</b>, <b>bet settlement</b>, and <b>streak tracking</b></li>
                <li>NFT reward system for win streaks (Silver / Gold tiers)</li>
                <li>Full stack application built with <b>Next.js + TypeScript</b></li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <Work />
        </div>
      </div>
    </div>
  )
} 
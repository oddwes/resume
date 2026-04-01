import { SectionHeader } from './SectionHeader'

export const Projects = () => {
  return (
    <div>
      <SectionHeader title="Projects" />
      <div className="space-y-2">
        <div>
          <p className="text-base font-bold mb-0.5">
            <b>ETHDenver Conference Guide Chat Interface</b>
          </p>
          <ul className="text-[13px] list-disc pl-4 space-y-0.5">
            <li>Built a chat interface on top of <b>ElizaOS</b> to help ETHDenver attendees navigate the conference in real time.</li>
            <li>Answered attendee questions using official docs and websites, including <b>talk times</b>, <b>booth locations</b>, venue navigation, and event logistics.</li>
            <li>Designed the experience for fast, self-serve access so non-technical users could get useful answers without hunting through multiple sources.</li>
            <li>Combined conversational UX with curated source grounding to make conference information easier to discover and use.</li>
          </ul>
        </div>
        {/* <div>
          <p className="text-base font-bold mb-0.5">
            <b>Crypto Market Health Dashboard - Dune</b>
          </p>
          <ul className="text-[13px] list-disc pl-4 space-y-0.5">
            <li>Dune: <a href="https://dune.com/oddwes/bev" target="_blank" rel="noopener noreferrer" className="text-blue-600">dune.com/oddwes/bev</a></li>
            <li>Built analytics dashboard tracking stablecoin supply, bridge flows, and liquidity migration.</li>
            <li>Wrote SQL queries analyzing cross-chain capital flows.</li>
            <li>Implemented time-series charts and parameterized queries.</li>
            <li>Designed the dashboard to monitor crypto market health indicators.</li>
            <li>Tracked chains with elevated trading activity to identify shifts in speculative market demand.</li>
          </ul>
        </div> */}
        {/* <div>
          <p className="text-base font-bold mb-0.5">
            <b>Pondify - ETHDenver 2026 Hackathon</b>
          </p>
          <ul className="text-[13px] list-disc pl-4 space-y-0.5">
            <li>
              Devfolio: <a href="https://devfolio.co/projects/pondify" target="_blank" rel="noopener noreferrer" className="text-blue-600">Pondify</a> |
              Code: <a href="https://github.com/oddwes/pondify" target="_blank" rel="noopener noreferrer" className="text-blue-600">github.com/oddwes/pondify</a>
            </li>
            <li>Built a Web3 application during ETHDenver 2026 BUIDLathon.</li>
            <li>Focused on improving <b>on-chain user interactions</b> and <b>developer tooling</b>.</li>
            <li>Implemented blockchain integrations and smart-contract interactions.</li>
            <li>Built a full-stack prototype using <b>Next.js</b> and <b>Web3 tooling</b>.</li>
          </ul>
        </div> */}
        <div>
          <p className="text-base font-bold mb-0.5">
            <b>Teleos - ETHDenver 2025 Hackathon</b>
          </p>
          <ul className="text-[13px] list-disc pl-4 space-y-0.5">
            <li>
              Devfolio: <a href="https://devfolio.co/projects/teleosai-4cca" target="_blank" rel="noopener noreferrer" className="text-blue-600">TeleosAI</a> |
              Code: <a href="https://github.com/aramxc/teleos" target="_blank" rel="noopener noreferrer" className="text-blue-600">github.com/aramxc/teleos</a>
            </li>
            <li>Top 10 in the Infrastructure Track.</li>
            <li>Built an AI-agent platform concept for creating and managing reusable agent experiences.</li>
            <li>Integrated <b>Next.js</b>, <b>Coinbase Wallet SDK</b>, and <b>ElizaOS</b> into a working prototype.</li>
          </ul>
        </div>
        <div>
          <p className="text-base font-bold mb-0.5">
            <b>Arbitrum Coinflip Game</b>
          </p>
          <ul className="text-[13px] list-disc pl-4 space-y-0.5">
            <li>Code: <a href="https://github.com/oddwes/arbitrum-coinflip" target="_blank" rel="noopener noreferrer" className="text-blue-600">github.com/oddwes/arbitrum-coinflip</a></li>
            <li>Fully on-chain coinflip game built on <b>Arbitrum</b>.</li>
            <li>Implemented <b>wallet connect</b>, <b>bet settlement</b>, and <b>streak tracking</b>.</li>
            <li>NFT reward system for win streaks (Silver / Gold tiers).</li>
            <li>Full-stack application built with <b>Next.js + TypeScript</b>.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

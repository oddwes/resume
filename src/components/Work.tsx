import { SectionHeader } from './SectionHeader'

export const Work = () => {
  return (
    <div>
      <SectionHeader title="Work" />
      <div className="space-y-2">
        <div>
          <p className="text-base font-bold mb-0.5">
            <b>Blockchain Developer</b> (2025 ~ Present)
            <br />
            <i className="text-gray-600 text-sm">Unicorn.eth</i>
          </p>
          <ul className="text-[13px] list-disc pl-4 space-y-0.5">
            <li>Built wallet infrastructure and accounts platform used by communities including ETHDenver, Polygon, and Arbitrum.</li>
            <li>Implemented token and NFT transaction flows including transfer, swap, and wallet permissions.</li>
            <li>Developed membership tiers and token-gated community access with Stripe integrations.</li>
            <li>Designed account approval and compliance workflows for Web3 onboarding.</li>
            <li>Built scalable React / TypeScript full-stack systems integrating on-chain data.</li>
          </ul>
        </div>
        <div>
          <p className="text-base font-bold mb-0.5">
            <b>Senior Full-Stack Developer</b> (2021–2025)
            <br />
            <span className="text-gray-600 text-sm">Jane.app — Vancouver, BC</span>
          </p>
          <ul className="text-[13px] list-disc pl-4 space-y-0.5">
            <li>Full-stack development on a large healthcare SaaS platform (React, TypeScript, Ruby on Rails).</li>
            <li>Mentored internal program that trained support staff into developers.</li>
            <li>Led multiple product initiatives including:</li>
            <ul className="list-disc pl-4 space-y-0.5">
              <li><b>Waitlist Notifications:</b> Automated backfilling of ~7k cancelled appointments per week.</li>
              <li><b>Late Cancellation Fees:</b> Implemented billing workflow recovering ~$175k previously lost revenue.</li>
              <li><b>Treatment Add-Ons:</b> Enabled appointment upselling with additional billable services.</li>
            </ul>
          </ul>
        </div>
        <div>
          <p className="text-base font-bold mb-0.5">
            <b>Systems Integrations Developer</b> (2017 ~ 2021)
            <br />
            <i className="text-gray-600 text-sm">Diff Agency — Montreal, QC</i>
          </p>
          <ul className="text-[13px] list-disc pl-4 space-y-0.5">
            <li>Designed and implemented Shopify integrations across ecommerce and subscription systems.</li>
            <li>Built automation pipelines for high-volume retail operations.</li>
            <li><b>Key projects:</b></li>
            <ul className="list-disc pl-4 space-y-0.5">
              <li><b>Sakara Subscriptions:</b> In-house subscription platform (~10k weekly subscriptions).</li>
              <li><b>Ontario Cannabis Store:</b> Order processing platform handling 5-10 orders/sec at launch.</li>
              <li><b>Boathouse Stores:</b> Order routing across 100+ retail locations, removing 3-day manual fulfillment process.</li>
            </ul>
          </ul>
        </div>
        <div>
          <p className="text-base font-bold mb-0.5">
            <b>Java Developer</b> (2015 ~ 2017)
            <br />
            <i className="text-gray-600 text-sm">123Certification — Montreal, QC</i>
          </p>
          <ul className="text-[13px] list-disc pl-4 space-y-0.5">
            <li>Core development of Arc-T modular welding simulator.</li>
            <li>Built calibration and tracking modules for visual tracking system.</li>
            <li>Designed core framework for second-generation simulator platform.</li>
            <li>Optimized graph traversal algorithms for complex 3D shape analysis.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

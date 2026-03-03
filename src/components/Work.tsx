import { SectionHeader } from './SectionHeader'

export const Work = () => {
  return (
    <div>
      <SectionHeader title="Work" />
      <div className="space-y-4">
        <div>
          <p className="text-lg font-bold mb-2">
            <b>Blockchain Developer </b>(2025 ~ Present)
            <br />
            <i className="text-gray-600">Unicorn.eth</i><br />
          </p>
          <div className="text-sm pl-4">
            <ul className="list-disc">
              <li>Full-stack development on brand-safe wallet/accounts platform (clients include ETHDenver, Polygon, Arbitrum)</li>
              <li>Shipped in-app wallet: transfer and swap whitelisted tokens and NFTs</li>
              <li>Implemented membership tiers and community gating with Stripe</li>
              <li>Built account status and approval flows for compliance and ops</li>
            </ul>
          </div>
        </div>
        <div>
          <p className="text-lg font-bold mb-2">
            <b>Senior Fullstack Developer </b>(2021 ~ 2025)
            <br />
            <i className="text-gray-600">Jane.app, Vancouver, BC</i><br />
          </p>
          <div className="text-sm pl-4">
            <ul className="list-disc">
              <li>Full-stack on clinic management product (React/TypeScript, Ruby on Rails)</li>
              <li>Mentored internal program that upskilled support staff into developers</li>
              <li>Project lead for:</li>
              <ul className="list-disc pl-4">
                <li>Waitlist Notifications — automated backfill of ~7k cancelled appointments/week</li>
                <li>Late cancellation fees — feature capturing ~$175k previously lost revenue</li>
                <li>Treatment add-ons — augmenting appointments with additional billable services</li>
              </ul>
            </ul>
          </div>
        </div>

        <div>
          <p className="text-lg font-bold mb-2">
            <b>System Integrations Developer </b>(2017 ~ 2021)
            <br />
            <i className="text-gray-600">Diff Agency, Montreal, QC</i>
          </p>
          <div className="text-sm pl-4">
            <ul className="list-disc">
              <li>Designed and delivered Shopify integrations across e‑commerce, subscriptions, and high-volume retail</li>
              <li>Project lead for:</li>
              <ul className="list-disc pl-4">
                <li>Sakara Subscriptions — in-house subscription platform (10k+ weekly subs), customization and add-ons</li>
                <li>Ontario Cannabis Store — order processing at 5–10 orders/sec at launch, inventory management</li>
                <li>Boathouse Stores — order-routing across 100 locations; eliminated ~3h/day manual fulfillment</li>
              </ul>
            </ul>
          </div>
        </div>
        <div>
          <p className="text-lg font-bold mb-2">
            <b>Java Developer </b>(2015 ~ 2017)
            <br />
            <i className="text-gray-600">123Certification, Montreal, QC</i>
          </p>
          <div className="text-sm pl-4">
            <ul className="list-disc">
              <li>Core development on Arc+, a modular welding simulator</li>
              <li>Integrated visual tracking system and built tracking calibration module</li>
              <li>Set up SVN and Jenkins build slave servers</li>
              <li>Designed and developed core framework and features for second-generation simulator</li>
              <li>Optimized graph-traversal algorithm for complex 3D shape analysis</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 
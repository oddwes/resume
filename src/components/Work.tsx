import { SectionHeader } from './SectionHeader'

export const Work = () => {
  return (
    <div>
      <SectionHeader title="Work" />
      <div className="space-y-4">
        <div>
          <p className="text-lg font-bold mb-2">
            <b>Senior Fullstack Developer </b>(2021 ~ Present)
            <br />
            <i className="text-gray-600">Jane.app, Vancouver, BC</i><br />
          </p>
          <div className="text-sm pl-4">
            <ul className="list-disc">
              <li>Clinic management software</li>
              <li>Monolithic webapp with React/Typescript frontend, Ruby on rails backend</li>
              <li>Mentor for internal training program that allowed support staff with non-technical backgrounds to become full-fledged developers</li>
              <li>Project lead for</li>
              <ul className="list-disc pl-4">
                <li>Waitlist Notifications, an automated notification system which backfills ~7k cancelled appointments per week</li>
                <li>Late cancellation fees, allowing clinics to capture ~$175k of potentially lost revenue from cancelled appointments</li>
                <li>Treatment add-ons, allowing clinics to augment appointments with additional services</li>
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
              <li>Designed and deployed Shopify integrations for a variety of use cases and business models</li>
              <li>Project lead for:</li>
              <ul className="list-disc pl-4">
                <li>Sakara Subscriptions, meal delivery service processing over 10k weekly subscriptions, managed by in-house built subscription management platform, including customization and add-ons</li>
                <li>Ontario Cannabis Store, high volume order processing (5~10 orders/sec on launch night) and inventory management</li>
                <li>Boathouse Stores, order routing algorithm for optimizing online order fulfillment out of 100 locations across Canada, which saved ~3h/day of manual labour</li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 
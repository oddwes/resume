import Line from './Line'

export const Work = () => {
  return (
    <div className="main-panel">
      <h3>Work</h3>
      <Line />
      <div className="job-header">
        <p>
          <b>Fullstack Developer </b>(2021 ~ Present)
          <br />
          <i>Jane.app, Vancouver, BC</i><br />
        </p>
      </div>
      <div>
          <ul>
            <li>Clinic management software</li>
            <li>Monolithic webapp with React/Typescript frontend, Ruby on rails backend and Postrgresql database</li>
            <li>Project lead for Waitlist Notifications, Late Cancellation Fees, Group Profiles, Treatment Add-ons</li>
            <ul>
              <li>Waitlist Notifications</li>
              <ul>
                <li>Automatic notifications sent to patients on waitlist when appointments are cancelled</li>
                <li>~7k cancelled appointments filled in per week</li>
              </ul>
              <li>Late Cancellation Fees</li>
              <ul>
                <li>Ability to charge a fee when appointments are cancelled within the late cancellation</li>
                <li>~$175k of potentially lost revenue re-captured per week</li>
              </ul>
              <li>Group Profiles</li>
              <ul>
                <li>Grouped patient profiles with configurable shared relationships, notification and payment permissions</li>
              </ul>
              <li>Treatment Add-ons</li>
              <ul>
                <li>Ability to tack on one or multiple add-ons to an appointment, increasing the price and duration</li>
              </ul>
            </ul>
            <li>Jane&apos;s <i>Developing Developers</i> program mentor</li>
            <ul>
              <li>
                Training individuals with non-technical backgrounds into becoming full-fledged developers
              </li>
              <li>
                Program requirements: JavaScript, TypeScript, React, a myriad of other JS libraries, Ruby, Rails, Git & GitHub, SQL, Linux commands, API comprehension, containerization, DataDog, automated testing, CI/CD, algorithms, and data structures
              </li>
            </ul>
          </ul>
      </div>
      <div className="job-header">
        <b>System Integrations Developer </b>(2017 ~ 2021)
        <br />
        <i>Diff Agency, Montreal, QC</i>
      </div>
      <div>
        <ul>
          <li>Shopify integrations for order processing, inventory and product catalog management, and reporting</li>
          <li>Ruby on rails webapps with Postrgresql, hosted on AWS</li>
          <li>Project lead for:</li>
          <ul>
            <li>Sakara Subscriptions</li>
            <ul>
              <li>Processed ~10k weekly meals subscriptions with one-off and recurring add-ons</li>
              <li>Custom subscription and add-ons service built around Shopify payment capture (built pre-Shopify Subscriptions)</li>
            </ul>
          </ul>
          <ul>
            <li>Ontario Cannabis Store Order Processing</li>
            <ul>
              <li>High volume order processing, inventory management</li>
              <li>5~10 orders per second on launch night</li>
            </ul>
          </ul>
          <ul>
            <li>Boathouse Stores</li>
            <ul>
              <li>Order routing algorithm for optimized order fulfilment out of 100 locations across Canada</li>
              <li>Saved ~3 hours of daily manual labour</li>
            </ul>
          </ul>
          <li>Built the <i>Developer Onboarding Program</i> to bring devs up to speed on the most common integrations</li>
          <ul>
            <li>Shopify integrations with ERPs, WMSs, carrier services</li>
            <li>Product catalog and inventory management, order processing & reporting</li>
          </ul>
        </ul>
      </div>
      <div className="job-header">
        <p>
          <b>Java Developer </b>(2015 ~ 2017)
          <br />
          <i>123Certification, Montreal, QC</i>
        </p>
      </div>
      <div>
        <ul>
          <li>Welding simulator (Arc+)</li>
          <li>3D visual tracking system integration with calibration module</li>
          <li>Visual tracking system integration. Tracking calibration module</li>
          <li>Setup of SVN and Jenkins servers</li>
        </ul>
      </div>
    </div>
  )
}
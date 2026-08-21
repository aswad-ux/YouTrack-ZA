export default function PrivacyPolicy() {
  return (
    <main className="pt-40 pb-20 bg-page-bg">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-extrabold tracking-tighter text-text-primary mb-8">Privacy Policy</h1>
        <p className="text-text-secondary text-lg mb-12">Last updated: August 2026</p>

        <div className="space-y-12 text-text-secondary font-light leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4 tracking-tight">1. Introduction</h2>
            <p>
              Welcome to YouTrack ZA. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you as to how we look after your personal data when you visit our website 
              (regardless of where you visit it from) or use our tracking services, and tell you about your privacy rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4 tracking-tight">2. The Data We Collect About You</h2>
            <p className="mb-4">We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
              <li><strong>Financial Data</strong> includes bank account and payment card details.</li>
              <li><strong>Transaction Data</strong> includes details about payments to and from you and other details of products and services you have purchased from us.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
              <li><strong>Tracking Data</strong> includes real-time GPS location, vehicle telemetry, speed, harsh braking events, and dashcam footage (if applicable).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4 tracking-tight">3. How We Use Your Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., providing live tracking services).</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation (e.g., assisting law enforcement with vehicle recovery).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4 tracking-tight">4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. 
              In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. 
              They will only process your personal data on our instructions and they are subject to a duty of confidentiality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4 tracking-tight">5. Your Legal Rights</h2>
            <p>
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

export default function TermsOfService() {
  return (
    <main className="pt-40 pb-20 bg-page-bg">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-5xl font-extrabold tracking-tighter text-text-primary mb-8">Terms of Service</h1>
        <p className="text-text-secondary text-lg mb-12">Last updated: August 2026</p>

        <div className="space-y-12 text-text-secondary font-light leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4 tracking-tight">1. Agreement to Terms</h2>
            <p>
              By accessing our website and utilizing our tracking hardware and software services ("Services"), you agree to be bound by these Terms of Service. 
              If you disagree with any part of the terms, then you may not access the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4 tracking-tight">2. Hardware Installation & Maintenance</h2>
            <p className="mb-4">
              Our GPS tracking units and dashcams must be installed by our certified technicians. 
              Any attempt to tamper, remove, or modify the hardware by unauthorized personnel will immediately void your warranty and may result in the suspension of your tracking services.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Hardware remains the property of YouTrack ZA unless explicitly purchased outright.</li>
              <li>You are responsible for making your vehicle available for scheduled maintenance if a hardware fault is detected remotely.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4 tracking-tight">3. Service Availability</h2>
            <p>
              While we strive for 99.9% uptime, GPS tracking and remote engine cut-off features rely on cellular network coverage (GSM/LTE) and satellite visibility. 
              YouTrack ZA cannot be held liable for loss of connection in underground parking, remote rural areas, or other environments that block cellular or GPS signals.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4 tracking-tight">4. Vehicle Recovery</h2>
            <p>
              For clients on the "Guard" or "Sentinel" tiers, our recovery teams will be dispatched immediately upon a confirmed theft alert. 
              However, YouTrack ZA does not guarantee the successful recovery of stolen vehicles, nor do we assume liability for any damage to the vehicle sustained during a theft or recovery operation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4 tracking-tight">5. Acceptable Use</h2>
            <p>
              You agree to use the Services only for lawful purposes. You must not use our tracking services to track individuals without their consent, or for any form of stalking or harassment. 
              Commercial fleet managers must ensure their drivers are aware that the vehicles are being tracked in accordance with local labor laws.
            </p>
          </section>

           <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4 tracking-tight">6. Subscription & Billing</h2>
            <p>
              Services are billed on a monthly subscription basis. Failure to pay subscription fees may result in the immediate suspension of live tracking and recovery services until the account is brought up to date.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

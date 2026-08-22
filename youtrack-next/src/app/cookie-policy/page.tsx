import React from 'react';

export const metadata = {
  title: "Cookie Policy | YouTrack ZA",
  description: "Learn how YouTrack ZA uses cookies to improve your browsing experience.",
};

export default function CookiePolicy() {
  return (
    <main className="pt-32 pb-24 min-h-screen bg-page-bg">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-text-primary mb-8">
          Cookie Policy
        </h1>
        <div className="prose prose-invert prose-lg text-text-secondary font-light">
          <p className="mb-6">
            <strong>Last Updated: {new Date().toLocaleDateString('en-ZA')}</strong>
          </p>

          <p className="mb-6">
            This Cookie Policy explains how YouTrack ZA ("we," "us," or "our") uses cookies and similar technologies when you visit our website at <a href="https://www.youtrackza.com" className="text-accent-primary hover:underline">www.youtrackza.com</a>. It explains what these technologies are, why we use them, and your rights to control our use of them.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-12 mb-4">1. What are cookies?</h2>
          <p className="mb-6">
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-12 mb-4">2. Why do we use cookies?</h2>
          <p className="mb-4">We use first and third-party cookies for several reasons:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Essential Cookies:</strong> Some cookies are required for technical reasons in order for our website to operate. These are strictly necessary for the site to function properly.</li>
            <li><strong>Performance & Analytics Cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website's performance and design.</li>
            <li><strong>Functionality Cookies:</strong> These are used to recognize you when you return to our website. This enables us to personalize our content for you and remember your preferences.</li>
            <li><strong>Targeting/Advertising Cookies:</strong> These cookies record your visit to our website, the pages you have visited, and the links you have followed. We may use this information to make our website and the advertising displayed on it more relevant to your interests.</li>
          </ul>

          <h2 className="text-2xl font-bold text-text-primary mt-12 mb-4">3. Third-Party Cookies</h2>
          <p className="mb-6">
            In some special cases, we also use cookies provided by trusted third parties. For example, this site uses Google Analytics, which is one of the most widespread and trusted analytics solutions on the web, to help us understand how you use the site and ways that we can improve your experience.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-12 mb-4">4. How can I control cookies?</h2>
          <p className="mb-6">
            You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted. 
          </p>
          <p className="mb-6">
            As the means by which you can refuse cookies through your web browser controls vary from browser to browser, you should visit your browser's help menu for more information.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-12 mb-4">5. Updates to this Cookie Policy</h2>
          <p className="mb-6">
            We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
          </p>

          <h2 className="text-2xl font-bold text-text-primary mt-12 mb-4">6. Contact Us</h2>
          <p className="mb-6">
            If you have any questions about our use of cookies or other technologies, please contact us at:
          </p>
          <p className="mb-6">
            <strong>Email:</strong> <a href="mailto:info@youtrackza.com" className="text-accent-primary hover:underline">info@youtrackza.com</a>
          </p>
        </div>
      </div>
    </main>
  );
}

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | ToolNova",
  description:
    "Privacy Policy for ToolNova. Learn how we collect, use, and protect your personal data. We prioritize your privacy and security.",
  alternates: {
    canonical: "https://www.toolnovahub.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy | ToolNova",
    description:
      "Learn how ToolNova collects, uses, and protects your data. Your privacy matters to us.",
    url: "https://www.toolnovahub.com/privacy",
    type: "website",
    images: [
      {
        url: "https://www.toolnovahub.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "ToolNova Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | ToolNova",
    description: "Learn how ToolNova collects, uses, and protects your data.",
    creator: "@toolnovahub",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-6 py-24 max-w-4xl text-slate-800 dark:text-slate-200">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-8">
        Last Updated: {new Date().toLocaleDateString()}
      </p>

      <div className="prose dark:prose-invert max-w-none space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>
            Welcome to ToolNova ("we," "our," or "us"). We are committed to
            protecting your personal information and your right to privacy. If
            you have any questions or concerns about this privacy notice or our
            practices with regards to your personal information, please contact
            us at support@toolnovahub.com.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            2. Information We Collect
          </h2>
          <p>
            We collect personal information that you voluntarily provide to us
            when you register on the website, express an interest in obtaining
            information about us or our products and services, when you
            participate in activities on the website, or otherwise when you
            contact us.
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              <strong>Personal Information Provided by You:</strong> Names,
              email addresses, verify passwords, and other similar information.
            </li>
            <li>
              <strong>Automated Information:</strong> IP address, browser and
              device characteristics, operating system, language preferences,
              referring URLs, device name, country, location, information about
              how and when you use our website.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            3. How We Use Your Information
          </h2>
          <p>
            We use personal information collected via our website for a variety
            of business purposes described below:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>To facilitate account creation and logon process.</li>
            <li>To send you marketing and promotional communications.</li>
            <li>To fulfill and manage your orders.</li>
            <li>To post testimonials.</li>
            <li>To deliver and facilitate delivery of services to the user.</li>
            <li>To respond to user inquiries/offer support to users.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            4. Cookies and Web Beacons
          </h2>
          <p>
            Like any other website, ToolNova uses 'cookies'. These cookies are
            used to store information including visitors' preferences, and the
            pages on the website that the visitor accessed or visited. The
            information is used to optimize the users' experience by customizing
            our web page content based on visitors' browser type and/or other
            information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            5. Google DoubleClick DART Cookie
          </h2>
          <p>
            Google is one of a third-party vendor on our site. It also uses
            cookies, known as DART cookies, to serve ads to our site visitors
            based upon their visit to www.toolnovahub.com and other sites on the
            internet. However, visitors may choose to decline the use of DART
            cookies by visiting the Google ad and content network Privacy Policy
            at the following URL –{" "}
            <a
              href="https://policies.google.com/technologies/ads"
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://policies.google.com/technologies/ads
            </a>
          </p>
          <p className="mt-4">
            We use Google AdSense Advertising on our website. Google, as a
            third-party vendor, uses cookies to serve ads on our site. Google's
            use of the DART cookie enables it to serve ads to our users based on
            previous visits to our site and other sites on the Internet. Users
            may opt-out of the use of the DART cookie by visiting the Google Ad
            and Content Network privacy policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            6. Advertising Partners Privacy Policies
          </h2>
          <p>
            You may consult this list to find the Privacy Policy for each of the
            advertising partners of ToolNova.
          </p>
          <p className="mt-2">
            Third-party ad servers or ad networks uses technologies like
            cookies, JavaScript, or Web Beacons that are used in their
            respective advertisements and links that appear on ToolNova, which
            are sent directly to users' browser. They automatically receive your
            IP address when this occurs. These technologies are used to measure
            the effectiveness of their advertising campaigns and/or to
            personalize the advertising content that you see on websites that
            you visit.
          </p>
          <p className="mt-2">
            Note that ToolNova has no access to or control over these cookies
            that are used by third-party advertisers.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">About Our Cookies</h2>
          <p>
            Our cookies are used to improve your site experience and for
            advertising purposes. We do not sell your personal data. You can
            manage your cookie preferences through your browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            7. CCPA Privacy Rights (Do Not Sell My Personal Information)
          </h2>
          <p>
            Under the CCPA, among other rights, California consumers have the
            right to:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              Request that a business that collects a consumer's personal data
              disclose the categories and specific pieces of personal data that
              a business has collected about consumers.
            </li>
            <li>
              Request that a business delete any personal data about the
              consumer that a business has collected.
            </li>
            <li>
              Request that a business that sells a consumer's personal data, not
              sell the consumer's personal data.
            </li>
          </ul>
          <p className="mt-2">
            If you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            8. GDPR Data Protection Rights
          </h2>
          <p>
            We would like to make sure you are fully aware of all of your data
            protection rights. Every user is entitled to the following:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              The right to access – You have the right to request copies of your
              personal data.
            </li>
            <li>
              The right to rectification – You have the right to request that we
              correct any information you believe is inaccurate.
            </li>
            <li>
              The right to erasure – You have the right to request that we erase
              your personal data, under certain conditions.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

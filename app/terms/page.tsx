export const metadata = {
  title: "Terms of Service — Dauntless LLC",
  description: "Terms of Service for Dauntless LLC, including SMS consent and independent contractor language.",
};

export default function TermsPage() {
  return (
    <div className="bg-[#0D1627] text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-32">
        {/* Header */}
        <div className="mb-12">
          <a
            href="/"
            className="text-[#F59E0B] text-sm hover:underline mb-6 inline-block"
          >
            ← Back to Dauntless LLC
          </a>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Terms of Service
          </h1>
          <p className="text-white/50">
            <strong className="text-white/70">Effective Date:</strong> May 28, 2026 &nbsp;|&nbsp;
            <strong className="text-white/70">Company:</strong> Dauntless LLC
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-10 text-white/80 leading-relaxed">

          {/* Acceptance */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">1. Acceptance of Terms</h2>
            <p>
              These Terms of Service (&quot;Terms&quot;) constitute a legally binding
              agreement between you (&quot;User,&quot; &quot;Candidate,&quot; or &quot;Client&quot;) and
              Dauntless LLC (&quot;Dauntless,&quot; &quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;),
              a sales staffing and recruiting company headquartered in Salt Lake
              City, Utah.
            </p>
            <p className="mt-3">
              By accessing our website at{" "}
              <strong className="text-white">https://dauntless-llc.vercel.app</strong>,
              submitting any form, or engaging with Dauntless LLC via SMS, email,
              phone, or any other channel, you agree to be bound by these Terms.
              If you do not agree, do not use our services.
            </p>
          </section>

          {/* Services */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">2. Services Provided</h2>
            <p>
              Dauntless LLC provides sales staffing, recruiting, and workforce
              development services. Our services include identifying, screening,
              and placing sales talent with client companies in industries
              including but not limited to pest control, solar energy, fiber/
              telecommunications, and insurance.
            </p>
            <p className="mt-3">
              Dauntless LLC acts as an intermediary between candidate job seekers
              and client employers. We do not guarantee employment, placement, or
              any specific outcome from the use of our services.
            </p>
          </section>

          {/* SMS Consent */}
          <section className="bg-[#1a2744] border border-[#F59E0B]/30 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-[#F59E0B] mb-4">
              3. SMS Communications and Consent
            </h2>
            <p className="mb-4">
              By providing your mobile phone number to Dauntless LLC — whether
              through a web form, verbal agreement, or any other means — and
              expressly consenting to SMS communications, you agree to receive
              recurring automated text messages from Dauntless LLC. These messages
              may include:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
              <li>Recruiting updates and job opportunity notifications</li>
              <li>Interview scheduling and reminders</li>
              <li>Follow-up communications related to your candidacy</li>
              <li>Onboarding information for placed representatives</li>
              <li>General company and team communications</li>
            </ul>

            <h3 className="text-lg font-bold text-white mb-2">Consent</h3>
            <p className="mb-4">
              Consent to receive SMS messages is not a condition of any purchase,
              hiring decision, or service. You may withdraw consent at any time.
            </p>

            <h3 className="text-lg font-bold text-white mb-2">Opt-Out Instructions (STOP)</h3>
            <p className="mb-4">
              To stop receiving SMS messages from Dauntless LLC, reply{" "}
              <strong className="text-white">STOP</strong> to any message. You will
              receive one final confirmation text, and no further messages will be
              sent unless you re-opt-in.
            </p>

            <h3 className="text-lg font-bold text-white mb-2">Help</h3>
            <p className="mb-4">
              For assistance with SMS communications, reply{" "}
              <strong className="text-white">HELP</strong> to any Dauntless LLC
              text message or email{" "}
              <a
                href="mailto:eric@dauntlessllc.com"
                className="text-[#F59E0B] hover:underline"
              >
                eric@dauntlessllc.com
              </a>
              .
            </p>

            <h3 className="text-lg font-bold text-white mb-2">Message Frequency</h3>
            <p className="mb-4">
              Message frequency varies and depends on your active recruiting
              status with Dauntless LLC. You may receive multiple messages per
              week during active recruiting periods.
            </p>

            <h3 className="text-lg font-bold text-white mb-2">
              Message and Data Rates
            </h3>
            <p className="mb-4">
              <strong className="text-white">
                Message and data rates may apply.
              </strong>{" "}
              Standard carrier rates for text messaging and data usage apply based
              on your wireless plan. Dauntless LLC is not responsible for any
              charges from your wireless carrier.
            </p>

            <h3 className="text-lg font-bold text-white mb-2">
              Carrier Disclaimer
            </h3>
            <p>
              Carriers are not liable for delayed or undelivered messages.
              Dauntless LLC does not guarantee delivery of SMS messages and is
              not liable for any messages not received due to carrier issues,
              network outages, or technical failures.
            </p>
          </section>

          {/* Independent Contractor */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              4. Independent Contractor Relationship
            </h2>
            <p>
              Sales representatives and individuals placed by Dauntless LLC with
              client companies may be engaged as independent contractors rather
              than as employees of Dauntless LLC or the client company, depending
              on the nature of the placement and the agreement between the
              individual and the client company.
            </p>
            <p className="mt-4">
              As an independent contractor:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
              <li>
                You are responsible for your own taxes, including self-employment
                tax, federal income tax, and any applicable state and local taxes.
              </li>
              <li>
                You are not entitled to employee benefits (health insurance, 401(k),
                PTO, etc.) from Dauntless LLC by virtue of placement.
              </li>
              <li>
                You retain the right to control how, when, and where you perform
                your work, subject to the client company&apos;s reasonable requirements.
              </li>
              <li>
                You are responsible for obtaining any required licenses or
                certifications for your role (e.g., insurance licenses).
              </li>
              <li>
                Your relationship with the client company is governed by any
                separate agreement you enter into with that company.
              </li>
            </ul>
            <p className="mt-4">
              Nothing in these Terms or any placement facilitated by Dauntless LLC
              creates an employment relationship between you and Dauntless LLC.
            </p>
          </section>

          {/* User Responsibilities */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">5. User Responsibilities</h2>
            <p>By using our services, you agree to:</p>
            <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
              <li>
                Provide accurate, truthful, and complete information on all forms,
                résumés, and communications with Dauntless LLC.
              </li>
              <li>
                Not misrepresent your qualifications, work history, or identity.
              </li>
              <li>
                Not use our Site or services for any unlawful purpose or in
                violation of any applicable laws or regulations.
              </li>
              <li>
                Not interfere with or disrupt the operation of our Site or services.
              </li>
              <li>
                Maintain the confidentiality of any proprietary information shared
                with you during the recruiting process.
              </li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">6. Intellectual Property</h2>
            <p>
              All content on the Dauntless LLC website — including text, graphics,
              logos, and design — is the property of Dauntless LLC and is protected
              by applicable copyright, trademark, and other intellectual property
              laws. You may not reproduce, distribute, or create derivative works
              without our prior written consent.
            </p>
          </section>

          {/* Disclaimer of Warranties */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">7. Disclaimer of Warranties</h2>
            <p>
              Our Site and services are provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot;
              basis without warranties of any kind, either express or implied,
              including but not limited to warranties of merchantability, fitness
              for a particular purpose, or non-infringement. Dauntless LLC does not
              warrant that our Site will be error-free, uninterrupted, or free of
              viruses or other harmful components.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">8. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Dauntless LLC and its
              officers, directors, employees, and agents shall not be liable for
              any indirect, incidental, special, consequential, or punitive
              damages arising from your use of our services or Site, including but
              not limited to loss of employment, loss of income, or any failure to
              secure a placement.
            </p>
            <p className="mt-3">
              Our total liability to you for any claims arising under these Terms
              shall not exceed the total amount paid by you to Dauntless LLC in the
              twelve (12) months preceding the claim, or $100, whichever is less.
            </p>
          </section>

          {/* Indemnification */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">9. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Dauntless LLC and
              its officers, directors, employees, and agents from and against any
              claims, damages, liabilities, costs, and expenses (including
              reasonable attorneys&apos; fees) arising from your use of our services,
              your violation of these Terms, or your violation of any third-party
              rights.
            </p>
          </section>

          {/* Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">10. Privacy</h2>
            <p>
              Your use of our services is subject to our{" "}
              <a href="/privacy" className="text-[#F59E0B] hover:underline">
                Privacy Policy
              </a>
              , which is incorporated into these Terms by reference. By using our
              services, you consent to our collection and use of your information
              as described in the Privacy Policy.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">11. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of the State of Utah, without regard to its conflict of
              law provisions. Any disputes arising under these Terms shall be
              resolved in the state or federal courts located in Salt Lake County,
              Utah, and you consent to personal jurisdiction in such courts.
            </p>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              12. Changes to These Terms
            </h2>
            <p>
              Dauntless LLC reserves the right to update or modify these Terms at
              any time. Changes will be posted on this page with an updated
              effective date. Your continued use of our Site or services after
              changes are posted constitutes your acceptance of the revised Terms.
              We encourage you to review these Terms periodically.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">13. Contact Us</h2>
            <p>
              If you have questions about these Terms of Service, please contact:
            </p>
            <div className="mt-4 bg-[#1a2744] border border-white/10 rounded-xl p-6">
              <p className="font-bold text-white text-lg mb-2">Dauntless LLC</p>
              <p>Salt Lake City, UT</p>
              <p className="mt-2">
                Email:{" "}
                <a
                  href="mailto:eric@dauntlessllc.com"
                  className="text-[#F59E0B] hover:underline"
                >
                  eric@dauntlessllc.com
                </a>
              </p>
              <p className="mt-1">
                Website:{" "}
                <a
                  href="https://dauntless-llc.vercel.app"
                  className="text-[#F59E0B] hover:underline"
                >
                  https://dauntless-llc.vercel.app
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

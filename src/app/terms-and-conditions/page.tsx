import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <section className=" text-gray-800">
      <div className="max-w-3xl mx-auto py-12">
        <h1 className="text-4xl font-bold mb-6 text-center ">
          Terms and Conditions
        </h1>

        <div className="bg-white shadow-lg rounded-lg p-8">
          <p className="text-lg mb-4">
            Welcome to our platform. By accessing or using our services, you
            agree to be bound by the following terms and conditions. Please read
            them carefully.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 ">
            1. Acceptance of Terms
          </h2>
          <p className="mb-4">
            By using our services, you agree to these Terms and Conditions. If
            you do not agree with any part of these terms, you may not access or
            use our services.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 ">
            2. Use of the Service
          </h2>
          <p className="mb-4">
            You agree to use our platform in accordance with all applicable laws
            and regulations. You are solely responsible for your conduct and any
            content you submit, post, or display on the platform.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-3 ">
            3. User Accounts
          </h2>
          <p className="mb-4">
            To access certain features of our platform, you may need to create
            an account. You are responsible for maintaining the confidentiality
            of your account information and for all activities that occur under
            your account.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 ">
            4. Privacy
          </h2>
          <p className="mb-4">
            Your use of our platform is also governed by our <Link href={'/privacy-policy'} className=" hover:underline transition-all font-semibold">Privacy Policy</Link>.
            Please review our <Link href={'/privacy-policy'} className=" hover:underline transition-all font-semibold ">Privacy Policy</Link> to understand our practices
            regarding your personal information.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 ">
            5. Intellectual Property
          </h2>
          <p className="mb-4">
            All content on our platform, including text, graphics, logos, and
            software, is the property of our platform or its content suppliers
            and is protected by copyright and other intellectual property laws.
            You may not reproduce, distribute, or create derivative works based
            on any content without our express written consent.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3 ">
            6. Limitation of Liability
          </h2>
          <p className="mb-4">
            We are not liable for any damages arising from your use of our
            platform or from any content provided on the platform. This
            includes, but is not limited to, direct, indirect, incidental, and
            consequential damages.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-3 ">
            7. Changes to Terms
          </h2>
          <p className="mb-4">
            We reserve the right to modify these Terms and Conditions at any
            time. We will notify you of any changes by posting the new Terms and
            Conditions on our platform. Your continued use of the platform after
            any such changes constitutes your acceptance of the new terms.
          </p>


          <p className="text-sm text-gray-500 mt-8">
            This document was last updated on 23 August 2024. If you have any questions
            or concerns, please contact us.
          </p>
        </div>
      </div>
    </section>
  );
}

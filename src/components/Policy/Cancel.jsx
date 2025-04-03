// app/cancellation-refund-policy/page.tsx
import Head from "next/head";

export default function CancellationRefundPolicy() {
  return (
    <>
      <Head>
        <title>
          Cancellation & Refund Policy | Careertronic Global Services
        </title>
        <meta
          name="description"
          content="Cancellation and Refund Policy for Careertronic Global Services"
        />
      </Head>

      <div className="bg-black text-white font-sans">
        {/* Header */}
        <header className="bg-gradient-to-b from-[#111111] to-black py-12 px-4 sm:px-6 lg:px-8 border-b-4 border-red-600">
          <div className="max-w-7xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white animate-slide-in-down">
              Cancellation & Refund Policy
            </h1>
            <p className="text-xl text-red-300 animate-fade-in animate-delay-1000">
              Effective Date: 10th December 2024
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <section className="mb-16 animate-fade-in animate-delay-1000">
            <div className="bg-[#111111] p-8 rounded-lg border-l-4 border-red-600 shadow-[0_0_15px_rgba(255,0,0,0.3)] hover:shadow-[0_0_25px_rgba(255,0,0,0.5)] transition-shadow">
              <p className="text-lg">
                At Careertronic Global Services, we strive to provide the best
                possible experience and value for our clients. This Cancellation
                and Refund Policy outlines the terms under which services may be
                canceled, and how refunds will be handled in the case of
                cancellation.
              </p>
              <p className="mt-4 font-semibold text-red-400">
                By engaging our services, you agree to the terms set forth in
                this policy.
              </p>
            </div>
          </section>

          {/* Policy Sections */}
          <div className="space-y-12">
            {/* Cancellation Section */}
            <section className="group transition-all duration-300 hover:translate-x-[5px] animate-fade-in animate-delay-1000">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <span className="w-6 h-6 bg-red-600 rounded-full mr-3 animate-pulse"></span>
                <span>1. Cancellation of Services</span>
              </h2>
              <div className="bg-[#111111] p-6 rounded-lg border border-gray-800 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(255,0,0,0.3)]">
                <h3 className="text-xl font-semibold mb-4 text-red-400">
                  a. Cancellation by the Client
                </h3>
                <ul className="space-y-4 pl-6 list-disc">
                  <li className="hover:text-red-300 transition-colors duration-200">
                    <span className="font-medium">Notice Requirement:</span> If
                    you wish to cancel a service, you must provide written
                    notice to us at least 15 days before the intended
                    cancellation date.
                  </li>
                  <li className="hover:text-red-300 transition-colors duration-200">
                    <span className="font-medium">
                      Project Phase and Timing:
                    </span>{" "}
                    If the project is already in progress, the ability to cancel
                    and any associated costs will depend on the phase of the
                    project.
                  </li>
                  <li className="hover:text-red-300 transition-colors duration-200">
                    <span className="font-medium">
                      Pre-Development (Initial Phase):
                    </span>{" "}
                    If cancellation occurs before work on the project has
                    started, you will be refunded the deposit, minus any
                    non-refundable initial consultation or setup fees.
                  </li>
                  <li className="hover:text-red-300 transition-colors duration-200">
                    <span className="font-medium">In-Progress Projects:</span>{" "}
                    If cancellation occurs after work has begun, the Client will
                    be responsible for paying for all work completed up to the
                    cancellation date.
                  </li>
                  <li className="hover:text-red-300 transition-colors duration-200">
                    <span className="font-medium">Completed Projects:</span> If
                    the project has been completed and delivered to the Client,
                    no refunds will be provided unless the work is deemed
                    incomplete or defective.
                  </li>
                </ul>
              </div>

              <div className="bg-[#111111] p-6 rounded-lg border border-gray-800 mt-6 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(255,0,0,0.3)]">
                <h3 className="text-xl font-semibold mb-4 text-red-400">
                  b. Cancellation by Careertronic Global Services
                </h3>
                <p className="mb-4">
                  Careertronic Global Services reserves the right to cancel or
                  suspend services if the Client:
                </p>
                <ul className="space-y-2 pl-6 list-disc">
                  <li className="hover:text-red-300 transition-colors duration-200">
                    Fails to make payments in accordance with the agreed payment
                    terms.
                  </li>
                  <li className="hover:text-red-300 transition-colors duration-200">
                    Provides inadequate or misleading information that affects
                    the successful completion of the project.
                  </li>
                  <li className="hover:text-red-300 transition-colors duration-200">
                    Violates the terms of the service agreement.
                  </li>
                  <li className="hover:text-red-300 transition-colors duration-200">
                    Requests unreasonable modifications to the scope of work
                    after the project has commenced.
                  </li>
                </ul>
                <p className="mt-4">
                  In the event of cancellation by Careertronic Global Services,
                  the Client will be entitled to a refund for any unearned fees.
                </p>
              </div>
            </section>

            {/* Refund Policy Section */}
            <section className="group transition-all duration-300 hover:translate-x-[5px] animate-fade-in animate-delay-1000">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <span className="w-6 h-6 bg-red-600 rounded-full mr-3 animate-pulse"></span>
                <span>2. Refund Policy</span>
              </h2>
              <div className="bg-[#111111] p-6 rounded-lg border border-gray-800 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(255,0,0,0.3)]">
                <h3 className="text-xl font-semibold mb-4 text-red-400">
                  a. Refund Eligibility
                </h3>
                <div className="space-y-6">
                  <div className="hover:bg-black/30 p-4 rounded transition-all duration-200">
                    <h4 className="font-medium text-lg">
                      Pre-Development (Initial Phase)
                    </h4>
                    <p>
                      If you cancel the service before work has started, we will
                      provide a partial refund of any upfront payment or
                      deposit, minus any non-refundable consultation or setup
                      fees.
                    </p>
                  </div>
                  <div className="hover:bg-black/30 p-4 rounded transition-all duration-200">
                    <h4 className="font-medium text-lg">
                      In-Progress Projects
                    </h4>
                    <p>
                      If you cancel after development has begun, you are
                      entitled to a partial refund based on the work completed
                      at the time of cancellation.
                    </p>
                  </div>
                  <div className="hover:bg-black/30 p-4 rounded transition-all duration-200">
                    <h4 className="font-medium text-lg">
                      Milestone-based Payment Structure
                    </h4>
                    <p>
                      If payments were made in milestones, refunds will only
                      apply to unearned milestones based on the work completed
                      at the time of cancellation.
                    </p>
                  </div>
                  <div className="hover:bg-black/30 p-4 rounded transition-all duration-200">
                    <h4 className="font-medium text-lg">Completed Projects</h4>
                    <p>
                      No refunds will be issued for completed projects where
                      deliverables have been provided to the Client in
                      accordance with the project scope.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-[#111111] p-6 rounded-lg border border-gray-800 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(255,0,0,0.3)]">
                  <h3 className="text-xl font-semibold mb-4 text-red-400">
                    b. Non-Refundable Fees
                  </h3>
                  <p>
                    Certain fees may be non-refundable and will be specified in
                    the contract or Statement of Work (SOW). These may include:
                  </p>
                  <ul className="mt-3 space-y-2 pl-6 list-disc">
                    <li className="hover:text-red-300 transition-colors duration-200">
                      Consultation or initial project setup fees
                    </li>
                    <li className="hover:text-red-300 transition-colors duration-200">
                      Licensing fees for third-party software
                    </li>
                    <li className="hover:text-red-300 transition-colors duration-200">
                      Custom development costs already incurred
                    </li>
                    <li className="hover:text-red-300 transition-colors duration-200">
                      Expenses related to project resources
                    </li>
                  </ul>
                </div>

                <div className="bg-[#111111] p-6 rounded-lg border border-gray-800 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(255,0,0,0.3)]">
                  <h3 className="text-xl font-semibold mb-4 text-red-400">
                    c. Processing Time for Refunds
                  </h3>
                  <p>
                    Once a refund has been approved, the refund will be
                    processed within{" "}
                    <span className="text-red-400 font-medium">
                      180-240 business days
                    </span>
                    , depending on the payment method used for the original
                    transaction.
                  </p>
                  <p className="mt-3">
                    Refunds will be issued through the same payment method used
                    by the Client. Refund processing times may vary depending on
                    the financial institution.
                  </p>
                </div>
              </div>
            </section>

            {/* Additional Sections */}
            <section className="group transition-all duration-300 hover:translate-x-[5px] animate-fade-in animate-delay-1000">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <span className="w-6 h-6 bg-red-600 rounded-full mr-3 animate-pulse"></span>
                <span>3. Dispute Resolution</span>
              </h2>
              <div className="bg-[#111111] p-6 rounded-lg border border-gray-800 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(255,0,0,0.3)]">
                <p>
                  If the Client feels that the cancellation or refund is not
                  handled fairly or in accordance with the terms of the
                  agreement, they may contact us to resolve the issue. We will
                  work in good faith to resolve any disputes related to refunds
                  or cancellations.
                </p>
                <p className="mt-4">
                  In the event that a resolution cannot be reached, the matter
                  may be escalated to mediation or arbitration, as outlined in
                  our Terms and Conditions.
                </p>
              </div>
            </section>

            <section className="group transition-all duration-300 hover:translate-x-[5px] animate-fade-in animate-delay-1000">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <span className="w-6 h-6 bg-red-600 rounded-full mr-3 animate-pulse"></span>
                <span>4. Exceptions to the Policy</span>
              </h2>
              <div className="bg-[#111111] p-6 rounded-lg border border-gray-800 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(255,0,0,0.3)]">
                <p>
                  Careertronic Global Services may make exceptions to this
                  Cancellation and Refund Policy in certain circumstances. These
                  exceptions may include:
                </p>
                <ul className="mt-3 space-y-2 pl-6 list-disc">
                  <li className="hover:text-red-300 transition-colors duration-200">
                    <span className="font-medium">Custom Agreements:</span> If
                    your contract includes specific terms that override or
                    modify this policy.
                  </li>
                  <li className="hover:text-red-300 transition-colors duration-200">
                    <span className="font-medium">
                      Exceptional Circumstances:
                    </span>{" "}
                    If Careertronic Global Services agrees to waive certain fees
                    or refund amounts for reasons such as project delays or
                    client dissatisfaction.
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* Refund Request Terms */}
          <section className="mt-16 bg-gradient-to-r from-black to-[#111111] p-8 rounded-lg border border-gray-800 animate-fade-in animate-delay-1000">
            <h2 className="text-3xl font-bold mb-6 text-center text-red-400">
              Refund Request Terms
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <span className="text-red-500 font-bold mr-3 mt-1">1.</span>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Refund Norms</h4>
                  <p>
                    I understand that the refund will be processed in accordance
                    with Careertronic Global Services' policies and only after a
                    thorough review of the transaction details, including the
                    scope of work performed, payments made, and project
                    progress.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 font-bold mr-3 mt-1">2.</span>
                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    Refund Deduction
                  </h4>
                  <p>
                    I agree that Careertronic Global Services reserves the right
                    to deduct applicable administrative, processing, or other
                    charges from the refund amount as per the company's
                    policies.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 font-bold mr-3 mt-1">3.</span>
                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    Refund Processing Timeline
                  </h4>
                  <p>
                    I acknowledge that the refund may take 90 to 120 working
                    days from the date of submission of this refund request, and
                    may extend up to 180 working days due to unforeseen delays.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 font-bold mr-3 mt-1">4.</span>
                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    Refund Finality and No Further Claims
                  </h4>
                  <p>
                    I confirm that, upon the refund being credited to my
                    account, no further claims, disputes, or grievances will be
                    raised by me regarding this transaction.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 font-bold mr-3 mt-1">5.</span>
                <div>
                  <h4 className="font-semibold text-lg mb-2">
                    Refund Payment Mode
                  </h4>
                  <p>
                    I agree that the refund will be credited through the
                    original mode of payment used, unless otherwise directed by
                    Careertronic Global Services.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 p-4 bg-black/30 rounded-lg border border-red-900/50">
              <p className="text-center font-medium">
                By submitting a refund request, I confirm that I have read,
                understood, and agreed to the terms and conditions outlined in
                this Refund Policy.
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mt-16 animate-fade-in animate-delay-1000">
            <h2 className="text-3xl font-bold mb-6 flex items-center justify-center">
              <span className="w-6 h-6 bg-red-600 rounded-full mr-3 animate-pulse"></span>
              <span>5. Contact Us</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#111111] p-8 rounded-lg border border-gray-800 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,0,0,0.3)] hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-4 text-red-400">
                  Need to cancel or request a refund?
                </h3>
                <p className="mb-6">
                  Please contact us using the information below:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg
                      className="w-6 h-6 text-red-500 mr-3 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                    <span>contact@careertronics.in</span>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="w-6 h-6 text-red-500 mr-3 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                    <span>+918602755547</span>
                  </div>
                  <div className="flex items-start">
                    <svg
                      className="w-6 h-6 text-red-500 mr-3 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                    <span>E-108, Sec 1, Devendra Nagar, Raipur, CG</span>
                  </div>
                </div>
              </div>
              <div className="bg-[#111111] p-8 rounded-lg border border-gray-800 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,0,0,0.3)] hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-4 text-red-400">
                  Policy Acknowledgement
                </h3>
                <p className="mb-6">
                  By engaging Careertronic Global Services, you acknowledge that
                  you have read, understood, and agreed to this Cancellation and
                  Refund Policy.
                </p>
                <div className="p-4 bg-black/30 rounded-lg border border-red-900/50">
                  <p className="text-center italic">
                    This policy is subject to change, and we encourage you to
                    review it periodically.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gradient-to-b from-[#111111] to-black border-t-4 border-red-600 mt-16 py-8 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-red-300">
              © 2024 Careertronic Global Services. All rights reserved.
            </p>
            <p className="mt-2 text-sm text-gray-400">
              Effective Date: 10th December 2024
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

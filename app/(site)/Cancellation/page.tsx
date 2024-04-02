import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cancellation Policy : Genspace Technologies",
  description: "Welcome to Genspace Technologies, where cutting-edge solutions meet unparalleled expertise.",
  // other metadata
};

export default function DocsPage() {
  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/4">
              <div className="sticky top-[74px] rounded-lg border border-white p-4 shadow-solid-4  transition-all  dark:border-strokedark dark:bg-blacksection">
                <ul className="space-y-2">
                  <SidebarLink />
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h1>Cancellation Policy</h1>

                <p className="text-body-color dark:text-body-color-dark text-base">
                  At Genspace Technologies, we understand that sometimes things don't work out as planned. If you need to cancel your subscription to our SaaS website, we have a straightforward cancellation and refund policy in place to ensure that the process is simple and fair for all parties involved.
                </p>
                <h2>Cancellation Policy</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  You may cancel your subscription at any time by logging into your account and navigating to the subscription management section. Your subscription will be canceled at the end of the current billing cycle. We do not offer partial refunds for unused time within a billing cycle.
                </p>
                <h2>Refund Policy</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  If you cancel your subscription within the first 14 days of signing up, you will be eligible for a full refund. After the initial 14-day period, we do not offer refunds for any reason. If you cancel a yearly subscription early, we do not offer a prorated refund.
                </p>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  Exceptions to Refund Policy: We may make exceptions to our refund policy on a case-by-case basis if there are extenuating circumstances that prevent you from using our SaaS website. If we determine that there has been fraudulent or abusive activity on your account, we reserve the right to terminate your subscription without providing a refund. Please note that any fees paid for third-party services that are integrated with our SaaS website, such as payment processing fees, are non-refundable.
                </p>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  If you have any questions or concerns about our cancellation and refund policy, please contact our customer support team. We are happy to assist you and ensure that you have a positive experience using our SaaS website.
                </p>
              </div>
          </div>

        </div>
        </div>
      </section>
    </>
  );
}

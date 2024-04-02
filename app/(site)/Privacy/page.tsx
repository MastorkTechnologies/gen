import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy : Genspace Technologies",
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
                <h1>Privacy Policy</h1>

                <p className="text-body-color dark:text-body-color-dark text-base">
                  This Privacy Policy outlines how Genspace Technologies
                  collects, uses, and protects your personal information when
                  you interact with our services, including our website, AI
                  consulting, and AI SaaS solutions.
                </p>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  We are committed to ensuring the security of your personal
                  information and only use it for the purposes outlined in
                  this policy.
                </p>

                <h2>Information We Collect</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  <strong>Personal Information:</strong> We may collect personal
                  information that you provide directly to us, such as your
                  name, email address, phone number, etc.
                </p>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  <strong>Usage Information:</strong> We may automatically
                  collect information about your interactions with our website
                  and services, including your IP address, device information,
                  etc.
                </p>

                <h2>How We Use Your Information</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  We use the information we collect to provide and improve our
                  services, communicate with you, comply with legal
                  requirements, etc.
                </p>

                <h2>Sharing Your Information</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  We do not sell, trade, or rent your personal information to
                  third parties, but we may share it with service providers,
                  business partners, etc.
                </p>

                <h2>Security</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  We take reasonable measures to protect your information from
                  unauthorized access, disclosure, alteration, and destruction.
                  However, no method of transmission over the internet or
                  electronic storage is entirely secure.
                </p>

                <h2>Your Choices</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  You may access and update your personal information, opt-out
                  of receiving promotional communications from us, etc.
                </p>

                <h2>Changes to this Privacy Policy</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  We may update this Privacy Policy from time to time to
                  reflect changes in our practices or for other reasons. We
                  will notify you of any material changes.
                </p>

                <h2>Contact Us</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  If you have any questions or concerns about this Privacy
                  Policy or our data practices, please feel free to contact us
                  at <a href="mailto:contact@genspacetech.com">contact@genspacetech.com</a>.
                </p>
              </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}

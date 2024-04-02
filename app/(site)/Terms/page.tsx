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
                <h1>Terms of Use - Genspace</h1>

                <p className="text-body-color dark:text-body-color-dark text-base">
                  <strong>Last updated: 27/12/2023</strong>
                </p>

                <h2>Terms</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  By accessing this Website, you are agreeing to be bound by
                  these Website Terms and Conditions of Use and agree that you
                  are responsible for the agreement with any applicable local
                  laws. If you disagree with any of these terms, you are
                  prohibited from accessing this site. The materials contained
                  in this Website are protected by copyright and trademark
                  law.
                </p>

                <h2>Use Licence</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  Permission is granted to temporarily download one copy of the
                  materials on Genspace Technologies's Website for personal,
                  non-commercial transitory viewing only. This is the grant of
                  a license, not a transfer of title, and under this license
                  you may not: modify or copy the materials; use the materials
                  for any commercial purpose or for any public display;
                  attempt to reverse engineer any software contained on
                  Genspace Technologies's Website; remove any copyright or
                  other proprietary notations from the materials; or transfer
                  the materials to another person or "mirror" the materials on
                  any other server. This will let Genspace Technologies
                  terminate upon violations of any of these restrictions. Upon
                  termination, your viewing right will also be terminated, and
                  you should destroy any downloaded materials in your
                  possession, whether it is printed or electronic format.
                </p>

                <h2>Disclaimer</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  All the materials on Genspace Technologies's Website are
                  provided "as is". Genspace Technologies makes no warranties,
                  may it be expressed or implied, therefore negates all other
                  warranties. Furthermore, Genspace Technologies does not make
                  any representations concerning the accuracy or reliability
                  of the use of the materials on its Website or otherwise
                  relating to such materials or any sites linked to this
                  Website.
                </p>

                <h2>Limitations</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  Genspace Technologies or its suppliers will not be held
                  accountable for any damages that will arise with the use or
                  inability to use the materials on Genspace Technologies's
                  Website, even if Genspace Technologies or an authorized
                  representative of this Website has been notified, orally or
                  written, of the possibility of such damage. Some
                  jurisdictions do not allow limitations on implied warranties
                  or limitations of liability for incidental damages; these
                  limitations may not apply to you.
                </p>

                <h2>Revision and Errata</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  The materials appearing on Genspace Technologies's Website
                  may include technical, typographical, or photographic
                  errors. Genspace Technologies will not promise that any of
                  the materials on this Website are accurate, complete, or
                  current. Genspace Technologies may change the materials
                  contained on its Website at any time without notice.
                  Genspace Technologies does not make any commitment to update
                  the materials.
                </p>

                <h2>Links</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  Genspace Technologies has not reviewed all of the sites
                  linked to its Website and is not responsible for the contents
                  of any such linked site. The presence of any link does not
                  imply endorsement by Genspace Technologies of the site. The
                  use of any linked website is at the user's own risk.
                </p>

                <h2>Site Terms of Use Modifications</h2>
                <p className="text-body-color dark:text-body-color-dark text-base">
                  Genspace Technologies may revise these Terms of Use for its
                  Website at any time without prior notice. By using this
                  Website, you are agreeing to be bound by the current version
                  of these Terms and Conditions of Use.
                </p>
              </div>
            </div>
            </div>
        </div>
      </section>
    </>
  );
}

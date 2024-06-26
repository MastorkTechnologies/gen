import Banner from "@/components/Banner";
import CorAbout from "@/components/CorporateAbout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy : Genspace Technologies",
  description:
    "Welcome to Genspace Technologies, where cutting-edge solutions meet unparalleled expertise.",
  // other metadata
};

export default function coorporate() {
  return (
    <>
      <Banner />
      <CorAbout />
    </>
  );
}

import { Metadata } from "next";
import Banner from "@/components/Banner/index"
import Hero from "@/components/Hero";
import CorAbout from "@/components/CorporateAbout";

export const metadata: Metadata = {
  title: "Privacy Policy : Genspace Technologies",
  description: "Welcome to Genspace Technologies, where cutting-edge solutions meet unparalleled expertise.",
  // other metadata
};

export default function coorporate(){
return(
<>
<Banner />
<CorAbout />
</>
);
}
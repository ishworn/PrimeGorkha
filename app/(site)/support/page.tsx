import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support Page - Solid SaaS Boilerplate",
  description: "This is Support page for Solid Pro",
  // other metadata
};

//import components
import Breadcrumbs from "@/utils/breadcrumbs/Breadcrumbs";

const SupportPage = () => {
  return (
    <>
      <Breadcrumbs title={"Reach OUt to Us"} desc={"Get in touch with us"} />
      <Contact />
    </>
  );
};

export default SupportPage;

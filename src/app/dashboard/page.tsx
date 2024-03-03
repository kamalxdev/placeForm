import type { Metadata } from "next";
import "@/app/globals.css";
import FormTable from "@/components/formTable/formTable";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard for the form creator app.",
};


export default async function Form() {
  
  return (
    <>
      <FormTable/>
    </>
  );
}

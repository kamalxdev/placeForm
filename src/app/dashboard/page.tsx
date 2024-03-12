import "@/app/globals.css";
import { Metadata } from "next";
import FormTable from "@/components/Table/formTable";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard for the form creator app.",
};


export default function Form() {
  
  return (
    <>
      <FormTable/>
    </>
  );
}

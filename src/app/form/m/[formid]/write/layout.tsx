
import type { Metadata } from "next";
import FORM from "@/models/form"

type Props = {
  params: { formid: string }
  searchParams: { [key: string]: string | string[] | undefined }
}


export async function generateMetadata(
  { params, searchParams}: Props,
): Promise<Metadata> {
  try {
    const form = await FORM.findById(params.formid)
    return {
      title: form?.title || "404- Form not found",
      description: form?.description||"No form found with this id",
    }
  } catch (error) {
    console.log(error);
    return {
      title: "404- Incorrect link",
      description: "Please make sure you have the correct link",
    }
  }
  
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  
  return <>{children}</>;
}

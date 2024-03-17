
import type { Metadata } from "next";
import FORM from "@/models/form"
import QUIZ from "@/models/quiz"

type Props = {
  params: { id: string; TypeOfRequest: string }
}


export async function generateMetadata(
  { params}: Props,
): Promise<Metadata> {
  try {
    if(params?.TypeOfRequest == "form"){
      const form = await FORM.findById(params.id)
      return {
        title: form?.title || "404- Form not found",
        description: form?.description||"No form found with this id",
      }
    }
    else if(params?.TypeOfRequest == "quiz"){
      const quiz = await QUIZ.findById(params.id)
      return {
        title: quiz?.title || "404- Form not found",
        description: quiz?.description||"No form found with this id",
      }
    }

    return {
      title: "404- Invalid Request",
      description:"No form found with this id",
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

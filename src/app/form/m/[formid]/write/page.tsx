// "use client"
import connect from "@/db/mongo.config";
import FORM from "@/models/form";
import USER from "@/models/user";
import Footer from "@/components/footer";
import FieldGenerator from "@/components/formOutput/fieldGenerator";
import type { Metadata } from "next";
import Error404 from "@/components/errors/404";
import { log } from "console";
import { RecoilRoot } from "recoil";


connect();

type Props = {
  params: { formid: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
 
export async function generateMetadata(
  { params, searchParams}: Props,
): Promise<Metadata> {
  const id = params.formid
  try {
    const form = await FORM.findById(id);
    return {
      title: form?form.title:"404- Form not found",
      description: form?form.description:"No form found with this id",
    }
  } catch (error) {
    console.log(error);
    return {
      title: "404- Incorrect link",
      description: "Please make sure you have the correct link",
    }
  }
  
}


export default async function ViewForm({
  params,
}: {
  params: { formid: string };
}) {
  try {
    var form = await FORM.findById(params.formid);
    if (!form) {
      return(<Error404 title="We cannot find this form" description="The page you are looking for might have been removed had its name changed or is temporarily unavailable."/>)
    }
    if(form.state!="Live"){
      return(<Error404 title="This form is not Live yet" description="Please wait for the form to be published"/>)
    }
  } catch (error) {
    console.log(error);
    return(<Error404 title="Incorrect Link" description="Please make sure you have the correct link"/>)
    
  }
  
  const user = await USER.findById(form.created_by);
  // console.log(form);
  const allFields = form.fields;
  // console.log(allFields);
  // console.log("length", allFields.length);

  async function handleSubmit() {
    console.log("submitted");
  }
  return (
    <>
      <form className="relative w-screen h-full flex  items-center flex-col mt-4">
        <div className="relative w-10/12 lg:w-5/12 xl:w-6/12 2xl:w-6/12 h-auto py-5 rounded-sm bg-black text-white flex items-center flex-wrap">
          <div className="mx-4">
            <h1 className="text-lg font-extrabold">{form.title}</h1>
            <h6 className="text-sm">{form.description}</h6>
          </div>
          <div className="relative w-full h-6 mt-3 bg-white text-black flex justify-center items-center text-lg">
            <h6 className="text-sm font-extrabold   ">
              Created by {user.name}
            </h6>
          </div>
        </div>
        <FieldGenerator fields={allFields} formid={form._id}/>
      </form>
      <Footer />
      </>
  );
}

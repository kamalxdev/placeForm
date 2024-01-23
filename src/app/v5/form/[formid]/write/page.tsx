
import connect from "@/db/mongo.config";
import FORM from "@/models/form";
import USER from "@/models/user";
import Footer from "@/components/footer";
import FormSubmitBTN from "@/components/formOutput/formSubmitBTN";
import FieldGenerator from "@/components/formOutput/fieldGenerator";
import type { Metadata } from "next";

connect();

type Props = {
  params: { formid: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
 
export async function generateMetadata(
  { params, searchParams}: Props,
): Promise<Metadata> {
  const id = params.formid
  const form = await FORM.findById(id);
  return {
    title: form.title,
    description: form.description,
  }
}


export default async function ViewForm({
  params,
}: {
  params: { formid: string };
}) {
  const form = await FORM.findById(params.formid);
  if (!form)
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <h1>Form not found</h1>
      </div>
    );
  const user = await USER.findById(form.created_by);
  // console.log(form);
  const allFields = form.fields[0];
  console.log(allFields);
  console.log("length", allFields.length);

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

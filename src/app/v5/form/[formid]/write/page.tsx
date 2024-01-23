import Dropdownx from "@/components/formOutput/dropdown";
import Inputx from "@/components/formOutput/input";
import randomGenerator from "@/controllers/randomGenerator";
import connect from "@/db/mongo.config";
import FORM from "@/models/form";
import USER from "@/models/user";
import { Check } from "lucide-react";
import Radiox from "@/components/formOutput/radio";
import Checkboxx from "@/components/formOutput/checkbox";
import TextAreax from "@/components/formOutput/textarea";
import TextBoxx from "@/components/formOutput/textBox";
import Footer from "@/components/footer";

connect();

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
  
  return (<>
    <form className="relative w-screen h-full flex  items-center flex-col mt-4">
      <div className="relative w-10/12 lg:w-5/12 xl:w-6/12 2xl:w-6/12 h-auto py-5 rounded-sm bg-black text-white flex items-center flex-wrap">
        <div className="mx-4">
          <h1 className="text-lg font-extrabold">{form.title}</h1>
          <h6 className="text-sm">{form.description}</h6>
        </div>
        <div className="relative w-full h-6 mt-3 bg-white text-black flex justify-center items-center text-lg">
          <h6 className="text-sm font-extrabold   ">Created by {user.name}</h6>
        </div>
      </div>
      <div className="relative w-10/12 lg:w-5/12 xl:w-6/12 2xl:w-6/12 h-auto py-5 flex-col  text-white flex items-center ">
        
        {allFields.map((field:any) => {
          if (field.type === "text")
            return (
              <Inputx
              title={field.title}
              type="text"
              id={randomGenerator()}
              placeholder="Enter text here"
              required={field.required}
              />
            );
            if (field.type === "number")
            return (
              <Inputx
              title={field.title}
              type="number"
              id={randomGenerator()}
              placeholder="Enter number here"
              required={field.required}
              />
            );
            if (field.type === "email")
            return (
              <Inputx
              title={field.title}
              type="email"
              id={randomGenerator()}
              placeholder="Enter email here"
              required={field.required}
              />
            );
          if (field.type === "dropdown")
            return (
              <Dropdownx
                key={field._id}
                id={field._id}
                title={field.title}
                option={field.options}
              />
            );
          if (field.type === "checkbox-one")
            return (
              <Radiox
          id={randomGenerator()}
          title={field.title}
          option={field.options}
          required={field.required}
          unique={randomGenerator()}
        />
            );
          if (field.type === "checkbox-many")
            return (
              <Checkboxx
              id={randomGenerator()}
              title={field.title}
              option={field.options}
              unique={randomGenerator()}
              />
            );
          if (field.type === "textarea")
            return (
              <TextAreax
                id={randomGenerator()}
                title={field.title}
                placeholder="Enter here...."
                required={field.required}
              />
            );
          if (field.type === "textbox")
            return (
              <TextBoxx
                title={field.title}
              />
            );
        })}
      </div>
      <div className="flex relative w-10/12 lg:w-5/12 xl:w-6/12 2xl:w-6/12 items-center justify-center py-8 ">
        <button
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
          > Submit Form</button>
      </div>
    </form>
    <Footer /></>
  );
}

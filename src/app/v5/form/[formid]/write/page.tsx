import Dropdownx from "@/components/formOutput/dropdown";
import Inputx from "@/components/formOutput/input";
import randomGenerator from "@/controllers/randomGenerator";
import connect from "@/db/mongo.config";
import FORM from "@/models/form";
import USER from "@/models/user";

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
  console.log(form);

  return (
    <form className="w-screen h-screen flex  items-center flex-col mt-4">
      <div className="relative w-10/12 lg:w-5/12 xl:w-6/12 2xl:w-6/12 h-auto py-5 rounded-sm bg-black text-white flex items-center flex-wrap">
        <div className="mx-4">
          <h1 className="text-lg font-extrabold">{form.title}</h1>
          <h6 className="text-sm">{form.description}</h6>
        </div>
        <div className="relative w-full h-6 mt-3 bg-white text-black flex justify-center items-center text-lg">
          <h6 className="text-sm font-extrabold   ">Created by {user.name}</h6>
          {/* <button
            type="button"
            className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
          > Submit Form</button> */}
        </div>
      </div>
      <div className="relative w-10/12 lg:w-5/12 xl:w-6/12 2xl:w-6/12 h-auto py-5 flex-col  text-white flex items-center ">
        
        <Inputx
          title="Enter your name"
          type="text"
          id={randomGenerator()}
          placeholder="John Doe"
          required={true}
        />
        <Dropdownx id={randomGenerator()} title="Select from below" option={["Delhi","Mumbai","Banglore"]}/>
      </div>
    </form>
  );
}

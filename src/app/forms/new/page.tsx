import ChooseFormFields from "@/components/formsInput/chooseFormFields";
import { TextInput } from "@/components/formsInput/textInput";

export default function NewForm() {
  return (
    <section className="relative w-full h-auto flex flex-col items-center">
      <h1 className="text-3xl mb-4">New Form</h1>
      <div className="w-8/12 ">
        <div className="px-12 bg-black text-white py-8 rounded">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="FormTitle"
          >
            Form Title
          </label>
          <TextInput
            type="text"
            placeholder="Form title here"
            id="FormTitle"
            disabled={false}
          />
          <p className="mt-1 text-xs text-gray-300">*This field is required</p>
        </div>
        <div className="all-fields mt-4 px-4">

        </div>
        <ChooseFormFields />
      </div>
      </section>
  );
}

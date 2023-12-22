import { PlusSquare } from "lucide-react";
import {getNewCheckboxOneField,getNewCheckboxManyField,getNewTextField,updateFieldsData,getNewDropdownField,getNewTextAreaField,getNewTextBoxField} from "@/controllers/textField/getNewTextField";

const formNewFields = [
  {
    name: "Text",
    action: (event: React.MouseEvent<HTMLButtonElement>) => getNewTextField("text"),
    title: "Add a new text field",
  },
  {
    name: "Text Box",
    action: getNewTextBoxField,
    title: "Add a new text box",
  },
  {
    name: "Email",
    action: (event: React.MouseEvent<HTMLButtonElement>) => getNewTextField("email"),
    title: "Add a new email field",
  },
  {
    name: "Number",
    action: (event: React.MouseEvent<HTMLButtonElement>) => getNewTextField("number"),
    title: "Add a new number field",
  },
  {
    name: "Checkbox(many)",
    action: getNewCheckboxManyField,
    title: "Add a new checkbox field with multiple selection",
  },
  {
    name: "Checkbox(one)",
    action: getNewCheckboxOneField,
    title: "Add a new checkbox field with single selection",
  },
  {
    name: "Dropdown",
    action: getNewDropdownField,
    title: "Add a new dropdown field",
  },
  {
    name: "TextArea",
    action: getNewTextAreaField,
    title: "Add a new text area field",
  },
];


export default function ChooseFormFields() {
    return (
      <div className="dropdown dropdown-right">
        <label
          tabIndex={0}
          className="transition flex items-center border-2 px-3 py-1 hover:bg-slate-300 rounded-md font-bold"
        >
          <PlusSquare />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          {formNewFields.map((field) => (
            <li key={field.name}>
              <button
                type="button"
                onClick={field.action as VoidFunction}
                className="text-black"
                title={field.title}
              >
                {field.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

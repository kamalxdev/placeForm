"use client";

import { PlusSquare } from "lucide-react";
import { useEffect, useState } from "react";
import {getNewCheckboxOneField,getNewCheckboxManyField,getNewTextField,getNewNumberField,updateFieldsData,getNewEmailField,getNewTextAreaField} from "@/controllers/textField/getNewTextField";

const formNewFields = [
  {
    name: "Text",
    action: getNewTextField,
    title: "Add a new text field",
  },
  {
    name: "Text Box",
    action: (event: React.MouseEvent<HTMLButtonElement>) => {
      console.log("Text Box");
    },
    title: "Add a new text box",
  },
  {
    name: "Email",
    action: getNewEmailField,
    title: "Add a new email field",
  },
  {
    name: "Number",
    action: getNewNumberField,
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
    action: (event: React.MouseEvent<HTMLButtonElement>) => {
      console.log("Dropdown");
    },
    title: "Add a new dropdown field",
  },
  {
    name: "TextArea",
    action: getNewTextAreaField,
    title: "Add a new text area field",
  },
];


export default function ChooseFormFields() {
    const [formFields, setFormFields] = useState<Object[]>();
    useEffect(() => {
      setInterval(() => {
        setFormFields(updateFieldsData());
      }, 100);
    },[]);

    return (
      <div className="dropdown dropdown-right">
        <p>${JSON.stringify(formFields)}</p>
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
                onClick={field.action}
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

"use client";

import { PlusSquare } from "lucide-react";
import { useEffect, useState } from "react";
import {getNewCheckboxOneField,getNewCheckboxManyField,getNewTextField,getNewNumberField,updateFieldsData,getNewEmailField,getNewTextAreaField} from "@/controllers/textField/getNewTextField";

const formNewFields = [
  {
    name: "Text",
    action: getNewTextField,
  },
  {
    name: "Text Box",
    action: (event: React.MouseEvent<HTMLButtonElement>) => {
      console.log("Text Box");
    },
  },
  {
    name: "Email",
    action: getNewEmailField,
  },
  {
    name: "Number",
    action: getNewNumberField,
  },
  {
    name: "Checkbox(many)",
    action: getNewCheckboxManyField,
  },
  {
    name: "Checkbox(one)",
    action: getNewCheckboxOneField,
  },
  {
    name: "Dropdown",
    action: (event: React.MouseEvent<HTMLButtonElement>) => {
      console.log("Dropdown");
    },
  },
  {
    name: "TextArea",
    action: getNewTextAreaField,
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
              >
                {field.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

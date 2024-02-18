"use client";

import { Dropdown } from "keep-react";
import { useState } from "react";



export default function ChooseFormFields() {


  const [field, setField] = useState([{}])


  const formNewFields = [
    {
      name: "Text",
      action: ()=>{setField([...field, {type: "text",title:"",required:false}])},
      title: "Add a new text field",
    },
    {
      name: "Text Box",
      action: ()=>{setField([...field, {type: "textbox",title:"",required:false}])},
      title: "Add a new text box",
    },
    {
      name: "Email",
      action: ()=>{setField([...field, {type: "email",title:"",required:false}])},
      title: "Add a new email field",
    },
    {
      name: "Number",
      action: ()=>{setField([...field, {type: "number",title:"",required:false}])},
      title: "Add a new number field",
    },
    {
      name: "Checkbox(many)",
      action: ()=>{setField([...field, {type: "checkboxMany",title:"",required:false,options:[""]}])},
      title: "Add a new checkbox field with multiple selection",
    },
    {
      name: "Checkbox(one)",
      action: ()=>{setField([...field, {type: "checkboxOne",title:"",required:false,options:[""]}])},
      title: "Add a new checkbox field with single selection",
    },
    {
      name: "Dropdown",
      action: ()=>{setField([...field, {type: "dropdown",title:"",required:false,options:[""]}])},
      title: "Add a new dropdown field",
    },
    {
      name: "TextArea",
      action: ()=>{setField([...field, {type: "textarea",title:"",required:false}])},
      title: "Add a new text area field",
    },
  ];





  return (
    <>
    <p>{JSON.stringify(field)}</p>
    <Dropdown
      label="Add Fields"
      type="outlineGray"
      size="sm"
      dismissOnClick={true}
    >
      <div className="h-48 overflow-y-scroll">
        {formNewFields.map((field) => (
          <Dropdown.Item key={field.name}>
            <button
              type="button"
              onClick={field.action}
              className="flex flex-col items-start gap-1"
            >
              <p className="text-body-4 font-semibold text-metal-700">
                {field.name}
              </p>
              <p className="max-w-xs text-body-5 font-normal text-metal-500">
                {field.title}
              </p>
            </button>
          </Dropdown.Item>
        ))}
      </div>
    </Dropdown>
    </>
  );
}

"use client";

import randomGenerator from "@/controllers/randomGenerator";
import { FormField } from "@/store/atom/makeFormField";
import { Dropdown } from "keep-react";
import { memo } from "react";
import { useRecoilState } from "recoil";

export default memo(function ChooseFormFields() {
  const [field, setField] = useRecoilState(FormField);

  const formNewFields = [
    {
      name: "Text",
      action: () => {
        setField([
          ...field,
          {
            type: "text",
            title: "",
            required: false,
            uniqueID: randomGenerator(),
          },
        ]);
      },
      title: "A simple text field",
    },
    {
      name: "Text Box",
      action: () => {
        setField([
          ...field,
          { type: "textbox", title: "", uniqueID: randomGenerator() },
        ]);
      },
      title: "A small information between fields. Doesn't take any input",
    },
    {
      name: "Email",
      action: () => {
        setField([
          ...field,
          {
            type: "email",
            title: "",
            required: false,
            uniqueID: randomGenerator(),
          },
        ]);
      },
      title: "A simple email field",
    },
    {
      name: "Number",
      action: () => {
        setField([
          ...field,
          {
            type: "number",
            title: "",
            required: false,
            uniqueID: randomGenerator(),
          },
        ]);
      },
      title: "A simple number field",
    },
    {
      name: "Checkbox",
      action: () => {
        setField([
          ...field,
          {
            type: "checkbox",
            title: "",
            required: false,
            uniqueID: randomGenerator(),
            options: ["", ""],
          },
        ]);
      },
      title: "A checkbox field with multiple selection",
    },
    {
      name: "Dropdown",
      action: () => {
        setField([
          ...field,
          {
            type: "dropdown",
            title: "",
            required: false,
            uniqueID: randomGenerator(),
            options: ["", ""],
          },
        ]);
      },
      title: "A simple dropdown field which takes only one selection",
    },
    {
      name: "TextArea",
      action: () => {
        setField([
          ...field,
          {
            type: "textarea",
            title: "",
            required: false,
            uniqueID: randomGenerator(),
          },
        ]);
      },
      title: "A big text field, eg: comments",
    },
  ];

  return (
    <>
      <Dropdown
        label="Add Fields"
        type="outlineGray"
        size="sm"
        dismissOnClick={true}
        className="relative"
      >
        <div className="h-48 overflow-y-scroll">
          {formNewFields.map((field) => (
            <Dropdown.Item
              key={field.name}
              onClick={field.action}
              className="flex flex-col items-start gap-1"
            >
              <p className="text-body-4 font-semibold text-metal-700">
                {field.name}
              </p>
              <p className="max-w-xs text-body-5 font-normal text-metal-500">
                {field.title}
              </p>
            </Dropdown.Item>
          ))}
        </div>
      </Dropdown>
    </>
  );
});

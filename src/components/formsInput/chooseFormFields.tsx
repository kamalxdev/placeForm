import {
  getNewCheckboxOneField,
  getNewCheckboxManyField,
  getNewTextField,
  getNewDropdownField,
  getNewTextAreaField,
  getNewTextBoxField,
} from "@/controllers/textField/getNewTextField";
import { Dropdown } from "keep-react";

const formNewFields = [
  {
    name: "Text",
    action: (event: React.MouseEvent<HTMLButtonElement>) =>
      getNewTextField("text"),
    title: "Add a new text field",
  },
  {
    name: "Text Box",
    action: getNewTextBoxField,
    title: "Add a new text box",
  },
  {
    name: "Email",
    action: (event: React.MouseEvent<HTMLButtonElement>) =>
      getNewTextField("email"),
    title: "Add a new email field",
  },
  {
    name: "Number",
    action: (event: React.MouseEvent<HTMLButtonElement>) =>
      getNewTextField("number"),
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
    <Dropdown
      label="Add Fields"
      type="outlineGray"
      size="sm"
      dismissOnClick={true}
    >
      {formNewFields.map((field) => (
        <Dropdown.Item key={field.name}>
          <button type="button" onClick={field.action} className="flex flex-col items-start gap-1">
            <p className="text-body-4 font-semibold text-metal-700">
              {field.name}
            </p>
            <p className="max-w-xs text-body-5 font-normal text-metal-500">
              {field.title}
            </p>
          </button>
        </Dropdown.Item>
      ))}
    </Dropdown>
  );
}

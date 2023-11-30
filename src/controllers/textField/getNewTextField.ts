// getting new text field for the form

import { PlusSquare } from "lucide-react";

function makeAField(fieldHTML: string) {
  const allFields = document.querySelector(".all-fields");
  const field = document.createElement("div");
  field.classList.add(
    "main-field",
    "relative",
    "w-full",
    "rounded-md",
    "mb-4",
    "border",
    "border-black",
    "bg-transparent",
    "px-3",
    "py-2",
    "text-sm"
  );
  field.style.marginBottom = "1rem";
  allFields?.appendChild(field);
  fieldHTML = `<div class='relative flex items-center justify-between m-2' style="margin-bottom:1rem">
  <input
  type= 'text'
  id="title-input-field"
  class='relative title-input-field p-2 w-8/12 m-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-transparent'
  placeholder="Enter your question title" /><span class='w-4/12'> <input type="checkbox" class="checkbox checkbox-primary" /> Required</span> </div>${fieldHTML}`;
  field.insertAdjacentHTML("beforeend", fieldHTML);
}

// new text field

function getNewTextField() {
  const fieldHTML = `<input
    id="answer-input-field"
    class="flex h-10 w-full rounded-md border border-black bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
    type= 'text'
    title="text"
    placeholder="Answer will be writern here by the user" disabled/>`;
  makeAField(fieldHTML);
}

// new email field

function getNewEmailField() {
  const fieldHTML = `<input
    id="answer-input-field"
    class="flex h-10 w-full rounded-md border border-black bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
    type= 'email'
    title="email"
    placeholder="Answer will be writern here by the user" disabled/>`;
  makeAField(fieldHTML);
}

// new number field

function getNewNumberField() {
  const fieldHTML = `<input
    id="answer-input-field"
    class="flex h-10 w-full rounded-md border border-black bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
    type= 'number'
    title="number"
    placeholder="Answer will be writern here by the user" disabled/>`;
  makeAField(fieldHTML);
}

// new text area field

function getNewTextAreaField() {
  const fieldHTML = `<textarea
    id="answer-input-field"
    class="flex h-10 w-full rounded-md border border-black bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
    title="textarea"
    rows="30" cols="50"
    placeholder="Answer will be writern here by the user" disabled></textarea>`;
  makeAField(fieldHTML);
}


// new checkbox Many field

function getNewCheckboxManyField() {
  const allFields = document.querySelector(".all-fields");
  const field = document.createElement("div");
  field.classList.add(
    "main-field",
    "relative",
    "w-full",
    "rounded-md",
    "mb-4",
    "border",
    "border-black",
    "bg-transparent",
    "px-3",
    "py-2",
    "text-sm"
  );
  field.style.marginBottom = "1rem";
  allFields?.appendChild(field);
  const fieldHTML = `<div class='relative flex items-center justify-between m-2' style="margin-bottom:1rem">
  <input
  type= 'text'
  id="title-input-field"
  class='relative title-input-field p-2 w-8/12 m-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-transparent'
  placeholder="Enter your question title" />
  <span class='w-4/12'> 
  <input type="checkbox" class="checkbox checkbox-primary" /> Required</span> </div>
  <div title="checkbox-many" id="answer-input-field">
  <div class="checkbox-option-field" style="margin-left:1rem">
  <span class="flex "><input type= "checkbox" checked disabled/><input type="text" class="checkbox-option-input-field p-2 w-4/12 focus:ring-2 focus:ring-black focus:border-transparent bg-transparent ml-2" placeholder="Option title or value"/></span>
  <span class="flex "><input type= "checkbox" checked disabled/><input type="text" class="checkbox-option-input-field p-2 w-4/12 focus:ring-2 focus:ring-black focus:border-transparent bg-transparent ml-2" placeholder="Option title or value"/></span></div>
  <button class="add-checkbox-btn button">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-circle"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
  </button></div>`;
  field.insertAdjacentHTML("beforeend", fieldHTML);
  const addCheckboxBtn = field.querySelector(".add-checkbox-btn");
  addCheckboxBtn?.addEventListener("click", () => {
    field
      .querySelector(".checkbox-option-field")
      ?.insertAdjacentHTML(
        "beforeend",
        '<span class="flex "><input type= "checkbox" checked disabled/><input type="text" class="checkbox-option-input-field p-2 w-4/12 focus:ring-2 focus:ring-black focus:border-transparent bg-transparent ml-2" placeholder="Option title or value"/></span>'
      );
  });
}

// new checkbox One field

function getNewCheckboxOneField() {
  const allFields = document.querySelector(".all-fields");
  const field = document.createElement("div");
  field.classList.add(
    "main-field",
    "relative",
    "w-full",
    "rounded-md",
    "mb-4",
    "border",
    "border-black",
    "bg-transparent",
    "px-3",
    "py-2",
    "text-sm"
  );
  field.style.marginBottom = "1rem";
  allFields?.appendChild(field);
  const fieldHTML = `<div class='relative flex items-center justify-between m-2' style="margin-bottom:1rem">
  <input
  type= 'text'
  id="title-input-field"
  class='relative title-input-field p-2 w-8/12 m-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-transparent'
  placeholder="Enter your question title" />
  <span class='w-4/12'> 
  <input type="checkbox" class="checkbox checkbox-primary" /> Required</span> </div>
  <div title="checkbox-one" id="answer-input-field">
  <div class="checkbox-option-field" style="margin-left:1rem">
  <span class="flex "><input type= "checkbox" checked disabled/><input type="text" class="checkbox-option-input-field p-2 w-4/12 focus:ring-2 focus:ring-black focus:border-transparent bg-transparent ml-2" placeholder="Option title or value"/></span>
  <span class="flex "><input type= "checkbox" checked disabled/><input type="text" class="checkbox-option-input-field p-2 w-4/12 focus:ring-2 focus:ring-black focus:border-transparent bg-transparent ml-2" placeholder="Option title or value"/></span></div>
  <button class="add-checkbox-btn button">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-circle"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
  </button></div>`;
  field.insertAdjacentHTML("beforeend", fieldHTML);
  const addCheckboxBtn = field.querySelector(".add-checkbox-btn");
  addCheckboxBtn?.addEventListener("click", () => {
    field
      .querySelector(".checkbox-option-field")
      ?.insertAdjacentHTML(
        "beforeend",
        '<span class="flex "><input type= "checkbox" checked disabled/><input type="text" class="checkbox-option-input-field p-2 w-4/12 focus:ring-2 focus:ring-black focus:border-transparent bg-transparent ml-2" placeholder="Option title or value"/></span>'
      );
  });
}

// Update the fields data

function updateFieldsData() {
  const inputFields = document.querySelectorAll(
    ".main-field"
  ) as NodeListOf<HTMLInputElement>;
  const fieldData: Object[] = [];
  inputFields.forEach((field) => {
    const fieldOptions: Object[] = [];
    (
      field.querySelectorAll(
        ".checkbox-option-input-field"
      ) as NodeListOf<HTMLInputElement>
    ).forEach((option) => {
      fieldOptions.push(option.value);
    });
    fieldData.push({
      title: (field.querySelector("#title-input-field") as HTMLInputElement)
        .value,
      required: (field.querySelector(".checkbox") as HTMLInputElement).checked,
      options: fieldOptions,
      type: (field.querySelector("#answer-input-field") as HTMLInputElement)
        .title,
    });
  });
  return fieldData;
}

export {
  getNewTextField,
  getNewNumberField,
  updateFieldsData,
  getNewEmailField,
  getNewTextAreaField,
  getNewCheckboxOneField,
  getNewCheckboxManyField,
};

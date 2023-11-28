// getting new text field for the form

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
  fieldHTML = `<div class='relative flex items-center justify-between m-2'>
  <input
  type= 'text'
  id="title-input-field"
  class='relative title-input-field p-2 w-8/12 m-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent'
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

// new text  field

function getNewTextAreaField() {
  const fieldHTML = `<textarea
    id="answer-input-field"
    class="flex h-10 w-full rounded-md border border-black bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
    type= 'textarea'
    rows="4" cols="50"
    placeholder="Answer will be writern here by the user" disabled></textarea>`;
  makeAField(fieldHTML);
}

// add a new checkbox field

function addNewCheckbox() {}

// new checkbox Many field

function getNewCheckboxManyField() {
  const fieldHTML =
    '<div title="checkbox-many" id="answer-input-field"><button onClick={()=>alert("hello)}>add</button></div>';
  makeAField(fieldHTML);
}

// new checkbox One field

function getNewCheckboxOneField() {
  const fieldHTML =
    '<div title="checkbox-one" id="answer-input-field"><div class="add-checkbox"></div></div>';
  const checkboxDiv=document.querySelector(".add-checkbox");
  const newCheckboxBtn=document.createElement("button");
  checkboxDiv?.appendChild(newCheckboxBtn);
  newCheckboxBtn.appendChild(document.createTextNode("Add"));

  
  makeAField(fieldHTML);
}

// Update the fields data

function updateFieldsData() {
  const inputFields = document.querySelectorAll(
    ".main-field"
  ) as NodeListOf<HTMLInputElement>;
  const fieldData: Object[] = [];
  inputFields.forEach((field) => {
    fieldData.push({
      title: (field.querySelector("#title-input-field") as HTMLInputElement)
        .value,
      required: (field.querySelector(".checkbox") as HTMLInputElement).checked,
      options: [],
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

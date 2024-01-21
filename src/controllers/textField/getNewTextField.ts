// getting new text field for the form


function getNewTextField(type: string) {
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
    "text-sm",
    "transition-all"
  );
  field.style.marginBottom = "1rem";
  allFields?.appendChild(field);
  const fieldHTML = `<div class='relative flex items-center justify-between m-2' style="margin-bottom:1rem">
  <input
  type= 'text'
  id="title-input-field"
  class='relative title-input-field p-2 w-8/12 m-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-transparent'
  placeholder="Enter your question title" required/>
  <span class='w-4/12 flex items-center justify-between'> 
  <input type="checkbox" class="check-box"/> &nbsp; Required</span> 
  <button class="field-delete-btn" title="Delete Field"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg></button>
  </div> 
  <input
    id="answer-input-field"
    class="flex h-10 w-full rounded-md border border-black bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
    type= 'text'
    title=${type}
    placeholder="Answer will be writern here by the user" disabled/>
  `;
  field.insertAdjacentHTML("beforeend", fieldHTML);
  field.querySelector(".field-delete-btn")?.addEventListener("click", () => {
    field.remove();
  });
}

// new text area field

function getNewTextAreaField() {
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
    "text-sm",
    "transition-all"
  );
  field.style.marginBottom = "1rem";
  allFields?.appendChild(field);
  const fieldHTML = `<div class='relative flex items-center justify-between m-2' style="margin-bottom:1rem">
  <input
  type= 'text'
  id="title-input-field"
  class='relative title-input-field p-2 w-8/12 m-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-transparent'
  placeholder="Enter your question title" required/>
  <span class='w-4/12 flex items-center justify-between'> 
  <input type="checkbox" class="check-box"/> &nbsp; Required</span> 
  <button class="field-delete-btn" title="Delete Field"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg></button>
  </div>
  <textarea
    id="answer-input-field"
    class="flex w-full rounded-md border border-black bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
    title="textarea"
    rows="5" cols="50"
    placeholder="Answer will be writern here by the user" disabled></textarea>
  `;
  field.insertAdjacentHTML("beforeend", fieldHTML);
  field.querySelector(".field-delete-btn")?.addEventListener("click", () => {
    field.remove();
  });
  
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
    "text-sm",
    "transition-all"
  );
  field.style.marginBottom = "1rem";
  allFields?.appendChild(field);
  const fieldHTML = `<div class='relative flex items-center justify-between m-2' style="margin-bottom:1rem">
  <input
  type= 'text'
  id="title-input-field"
  class='relative title-input-field p-2 w-8/12 m-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-transparent'
  placeholder="Enter your question title" required/>
  <span class='w-4/12 flex items-center justify-between'> 
  <input type="checkbox" class="check-box"/> &nbsp; Required</span> 
  <button class="field-delete-btn" title="Delete Field"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg></button>
  </div>
  <div title="checkbox-many" id="answer-input-field">
  <div class="checkbox-option-field" style="margin-left:1rem">
  <span class="flex items-center options "><h2 class="mr-2">1</h2><input type= "checkbox" checked disabled/><input type="text" class="checkbox-option-input-field p-2 w-4/12 focus:ring-2 focus:ring-black focus:border-transparent bg-transparent ml-2" placeholder="Option title or value" required/></span>
  <span class="flex items-center options "><h2 class="mr-2">2</h2><input type= "checkbox" checked disabled/><input type="text" class="checkbox-option-input-field p-2 w-4/12 focus:ring-2 focus:ring-black focus:border-transparent bg-transparent ml-2" placeholder="Option title or value" required/></span>
  </div>
  <button class="add-checkbox-btn button">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-circle"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
  </button></div>`;


  field.insertAdjacentHTML("beforeend", fieldHTML);
  const addCheckboxBtn = field.querySelector(".add-checkbox-btn");


// add new option
  addCheckboxBtn?.addEventListener("click", () => {
    const option = document.createElement("span");
    option.classList.add("flex", "items-center", "options");
    option.innerHTML = `
        <h2 class="mr-2">${(field.querySelector(".checkbox-option-field") as HTMLDivElement).childElementCount+1}</h2>
        <input type= "checkbox" checked disabled/>
       <input type="text" class="checkbox-option-input-field p-2 w-4/12 focus:ring-2 focus:ring-black focus:border-transparent bg-transparent ml-2 mr-2" placeholder="Option title or value" required/>
        <button class="option-delete-btn" title="Remove option"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg></button>
    `;
    field.querySelector(".checkbox-option-field")?.appendChild(option);



    // delete option
    option?.querySelector(".option-delete-btn")?.addEventListener("click", () => {
      option.remove();
      const allOptions = field.querySelectorAll(".options");
      var index=1;
      allOptions.forEach((option) => {
        console.log("index= ",index);
        (option.querySelector("h2") as HTMLHeadingElement).innerHTML = `${index++}`;
      });
    });
  });
  
  field.querySelector(".field-delete-btn")?.addEventListener("click", () => {
    field.remove();
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
    "text-sm",
    "transition-all"
  );
  field.style.marginBottom = "1rem";
  allFields?.appendChild(field);
  const fieldHTML = `<div class='relative flex items-center justify-between m-2' style="margin-bottom:1rem">
  <input
  type= 'text'
  id="title-input-field"
  class='relative title-input-field p-2 w-8/12 m-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-transparent'
  placeholder="Enter your question title" required/>
  <span class='w-4/12 flex items-center justify-between'> 
  <input type="checkbox" class="check-box"/> &nbsp; Required</span> 
  <button class="field-delete-btn" title="Delete Field"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg></button>
  </div>
  <div title="checkbox-one" id="answer-input-field">
  <div class="checkbox-option-field" style="margin-left:1rem">
  <span class="flex items-center options"><h2 class="mr-2">1</h2><input type= "checkbox" checked disabled/><input type="text" class="checkbox-option-input-field p-2 w-4/12 focus:ring-2 focus:ring-black focus:border-transparent bg-transparent ml-2" placeholder="Option title or value" required/></span>
  <span class="flex items-center options"><h2 class="mr-2">2</h2><input type= "checkbox" checked disabled/><input type="text" class="checkbox-option-input-field p-2 w-4/12 focus:ring-2 focus:ring-black focus:border-transparent bg-transparent ml-2" placeholder="Option title or value" required/></span></div>
  <button class="add-checkbox-btn button">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-circle"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
  </button></div>`;
  field.insertAdjacentHTML("beforeend", fieldHTML);
  const addCheckboxBtn = field.querySelector(".add-checkbox-btn");



  // add new option
  addCheckboxBtn?.addEventListener("click", () => {
    const option = document.createElement("span");
    option.classList.add("flex", "items-center", "options");
    option.innerHTML = `
        <h2 class="mr-2">${(field.querySelector(".checkbox-option-field") as HTMLDivElement).childElementCount+1}</h2>
        <input type= "checkbox" checked disabled/>
       <input type="text" class="checkbox-option-input-field p-2 w-4/12 focus:ring-2 focus:ring-black focus:border-transparent bg-transparent ml-2 mr-2" placeholder="Option title or value" required/>
        <button class="option-delete-btn" title="Remove option"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg></button>
    `;
    field.querySelector(".checkbox-option-field")?.appendChild(option);



    // delete option
    option?.querySelector(".option-delete-btn")?.addEventListener("click", () => {
      option.remove();
      const allOptions = field.querySelectorAll(".options");
      var index=1;
      allOptions.forEach((option) => {
        console.log("index= ",index);
        (option.querySelector("h2") as HTMLHeadingElement).innerHTML = `${index++}`;
      });
    });
  });
  
  field.querySelector(".field-delete-btn")?.addEventListener("click", () => {
    field.remove();
  });
}


// new dropdown field

function getNewDropdownField() {
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
    "text-sm",
    "transition-all"
  );
  field.style.marginBottom = "1rem";
  allFields?.appendChild(field);
  const fieldHTML = `<div class='relative flex items-center justify-between m-2' style="margin-bottom:1rem">
  <input
  type= 'text'
  id="title-input-field"
  class='relative title-input-field p-2 w-8/12 m-2 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent bg-transparent'
  placeholder="Enter your question title" required/>
  <span class='w-4/12 flex items-center justify-between'> 
  <input type="checkbox" class="check-box"/> &nbsp; Required</span> 
  <button class="field-delete-btn" title="Delete Field"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg></button>
  </div>
  <div title="dropdown" id="answer-input-field">
  <div class="dropdown-option-field" style="margin-left:1rem">
  <span class="flex items-center options transition-all"><h2 class="mr-2">1</h2><input type="text" class="checkbox-option-input-field p-2 w-4/12 focus:ring-2 focus:ring-black focus:border-transparent bg-transparent ml-2" placeholder="Option title or value" required/></span>
  <span class="flex items-center options transition-all"><h2 class="mr-2">2</h2><input type="text" class="checkbox-option-input-field p-2 w-4/12 focus:ring-2 focus:ring-black focus:border-transparent bg-transparent ml-2" placeholder="Option title or value" required/></span></div>
  <button class="add-checkbox-btn button">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-circle"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
  </button></div>`;
  field.insertAdjacentHTML("beforeend", fieldHTML);
  const addCheckboxBtn = field.querySelector(".add-checkbox-btn");



  // add new option
  addCheckboxBtn?.addEventListener("click", () => {
    const option = document.createElement("span");
    option.classList.add("flex", "items-center", "options","transition-all");
    option.innerHTML = `
        <h2 class="mr-2">${(field.querySelector(".dropdown-option-field") as HTMLDivElement).childElementCount+1}</h2>
       <input type="text" class="checkbox-option-input-field p-2 w-4/12 focus:ring-2 focus:ring-black focus:border-transparent bg-transparent ml-2 mr-2" placeholder="Option title or value" required/>
        <button class="option-delete-btn" title="Remove option"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg></button>
    `;
    field.querySelector(".dropdown-option-field")?.appendChild(option);



    // delete option
    option?.querySelector(".option-delete-btn")?.addEventListener("click", () => {
      option.remove();
      const allOptions = field.querySelectorAll(".options");
      var index=1;
      allOptions.forEach((option) => {
        console.log("index= ",index);
        (option.querySelector("h2") as HTMLHeadingElement).innerHTML = `${index++}`;
      });
    });
  });
  
  field.querySelector(".field-delete-btn")?.addEventListener("click", () => {
    field.remove();
  });
}




function getNewTextBoxField() {
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
    "text-sm",
    "transition-all"
  );
  field.style.marginBottom = "1rem";
  allFields?.appendChild(field);
  const fieldHTML = `<div class='relative flex items-center justify-between m-2' style="margin-bottom:1rem">
  <textarea
    id="answer-input-field"
    class="mr-2 flex w-full rounded-md border border-black bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
    title="textbox"
    rows="7" cols="50" 
    placeholder="Enter the content here" required></textarea>
    <button class="field-delete-btn" title="Delete Field"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg></button>
  </div>`;
  field.insertAdjacentHTML("beforeend", fieldHTML);
  field.querySelector(".field-delete-btn")?.addEventListener("click", () => {
    field.remove();
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
      title: (field.querySelector("#title-input-field") as HTMLInputElement)?.value || (field.querySelector("#answer-input-field") as HTMLInputElement)?.value,
      required: (field.querySelector(".check-box") as HTMLInputElement)?(field.querySelector(".check-box") as HTMLInputElement).checked: null,
      options: fieldOptions,
      type: (field.querySelector("#answer-input-field") as HTMLInputElement)
        .title,
    });
  });
  return fieldData;
}

export {
  getNewTextField,
  updateFieldsData,
  getNewTextAreaField,
  getNewCheckboxOneField,
  getNewCheckboxManyField,
  getNewDropdownField,
  getNewTextBoxField,
};

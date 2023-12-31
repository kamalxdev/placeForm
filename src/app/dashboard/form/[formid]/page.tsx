'use client'

import ChooseFormFields from "@/components/formsInput/chooseFormFields";
import { TextInput } from "@/components/formsInput/textInput";
import { updateFieldsData } from "@/controllers/textField/getNewTextField";
import axios from "axios";
import {useRouter } from "next/navigation";
import React from "react";

export default function NewForm({ params }: { params: { formid: string } }) {
  const router = useRouter();
  const [formTitle, setFormTitle] = React.useState("");
  const handleSaveButtonClick = async () => {
    const data = updateFieldsData();
    console.log("Save Form",data,formTitle);

  

  };
  const handleSaveDraftButtonClick = async () => {
    const data = updateFieldsData();
    
    console.log("Save draft",data);


    await axios.post("/api/form/draft",{field:data,title:formTitle,form_id:params.formid}).then((res)=>{
      router.push(`/dashboard?msg=${res.data.msg}`);
    }).catch((err)=>{
      console.log(err);
    })


  }
  return (
    <section className="relative w-screen h-auto flex flex-col items-center">
      <div className="w-4/5 flex flex-wrap items-center justify-between mb-10 md:flex-nowrap">
        <span className="flex flex-col">
          <h1 className="text-3xl mb-4">New Form</h1>
          <p className="text-gray-500 mb-4">
            Create a new form by adding fields below. You can add as many fields
            as you want.
          </p>
        </span>
        <span>
          <button className=" transition-all bg-transparent hover:bg-slate-300 text-black px-4 py-2 rounded"
          onClick={handleSaveDraftButtonClick}
          >
            Save as Draft
            </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded ml-2"
            onClick={handleSaveButtonClick}
          >
            Save Form
          </button>
        </span>
      </div>
      <div className="w-9/12 ">
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
            class="form-title"
            onChange={(e) => {setFormTitle(e.target.value)}}
          />
          <p className="mt-1 text-xs text-gray-300">*This field is required</p>
        </div>
        <div className="all-fields mt-4 px-4"></div>
        <ChooseFormFields />
      </div>
    </section>
  );
}

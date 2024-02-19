"use client";

import OptionField from "@/components/formsInput/area/optionField";
import Inputz from "@/components/formsInput/area/input";
import TextBoxz from "@/components/formsInput/area/textbox";
import ChooseFormFields from "@/components/formsInput/chooseFormFields";
import { TextInput } from "@/components/formsInput/textInput";
import FormOnSubmit from "@/components/modal/formOnSubmit";
import { updateFieldsData } from "@/controllers/textField/getNewTextField";
import axios from "axios";
import { redirect, useRouter } from "next/navigation";
import React, { useState } from "react";
import {  useRecoilValue } from "recoil";
import { FormField } from "@/store/atom/makeFormField";
import { iFormField } from "@/types/makeFormField";

export default function NewForm({ params }: { params: { formid: string } }) {
  const router = useRouter();
  const fields = useRecoilValue(FormField) as iFormField
  // states
  const [formTitle, setFormTitle] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleSaveButtonClick = async () => {
    const data = updateFieldsData();
    console.log("Save Form", data, formTitle);
    if (!data[0]) {
      alert("Please add at least one field");
      return;
    }
    setShowModal(true);
  };

  const handleSaveDraftButtonClick = async () => {
    const data = updateFieldsData();

    console.log("Save draft", data);

    await axios
      .post("/api/form/draft", {
        data: {
          title: formTitle,
          updated_at: new Date(),
          start_date: startDate,
          expiry_date: endDate,
          state: "Draft",
          description: formDescription,
        },
        fields: data,
        form_id: params.formid,
      })
      .then((res) => {
        router.push(`/dashboard?msg=${res.data.msg}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handlePublishButtonClick = async () => {
    console.log("Publish Form");
    console.log(startDate);
    console.log(endDate);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSaveButtonClick();
      }}
      className="relative w-screen h-auto flex flex-col items-center"
    >
      <FormOnSubmit
        show={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        primaryButton="Publish"
        secondaryButton="Save as Draft"
        primaryButtonAction={handlePublishButtonClick}
        secondaryButtonAction={handleSaveDraftButtonClick}
        startDate={startDate}
        endDate={endDate}
        setStartDate={(e) => {
          setStartDate(new Date(Date.parse(e.target.value)));
        }}
        setEndDate={(e) => {
          setEndDate(new Date(Date.parse(e.target.value)));
        }}
      />
      <div className="w-4/5 flex flex-wrap items-center justify-between md:flex-nowrap">
        <span className="flex flex-col">
          <h1 className="text-3xl mb-4">New Form</h1>
          <p className="text-gray-500 mb-4">
            Create a new form by adding fields below. You can add as many fields
            as you want.
          </p>
        </span>
        <span>
          <button
            className=" transition-all bg-transparent hover:bg-slate-300 text-black px-4 py-2 rounded"
            onClick={handleSaveDraftButtonClick}
            type="button"
          >
            Save as Draft
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded ml-2"
            type="submit"
          >
            Save Form
          </button>
        </span>
      </div>
      <div className="w-9/12 my-6">
        <div className="px-12 bg-black text-white py-8 rounded">
          <div>
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
              onChange={(e) => {
                setFormTitle(e.target.value);
              }}
            />
            <p className="mt-1 text-xs text-gray-300">
              *This field is required
            </p>
          </div>
          <div className="mt-4">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="FormDescription"
            >
              Form Description
            </label>
            <TextInput
              type="text"
              placeholder="Form Description here"
              id="FormDescription"
              disabled={false}
              class="form-title"
              onChange={(e) => {
                setFormDescription(e.target.value);
              }}
            />
            <p className="mt-1 text-xs text-gray-300">
              *This field is required
            </p>
          </div>
        </div>
        <div className="all-fields my-4">
        {/* <Inputz type="text"/>
        <Inputz type="email"/>
        <Inputz type="number"/>
        <Inputz type="textarea"/>
        <OptionField type="dropdown"/>
        <OptionField type="checkbox"/> */}
        {/* <TextBoxz/> */}
        {fields.map((field, index) => {
          if (field?.type === "text" || field?.type === "email"||field?.type === "number"||field?.type === "textarea") {
            return <Inputz key={index} type={field?.type} />;
          }
          if (field?.type === "textbox") {
            return <TextBoxz key={index} />;
          }
          if (field?.type === "dropdown" || field?.type === "checkbox") {
            return <OptionField key={index} type={field?.type} />;
          }
        })}
        </div>
        <ChooseFormFields />
      </div>
    </form>
  );
}

"use client";

import { memo } from "react";
import OptionField from "@/components/newForm/area/optionField";
import Inputz from "@/components/newForm/area/input";
import TextBoxz from "@/components/newForm/area/textbox";
import ChooseFormFields from "@/components/newForm/chooseFormFields";
import TextInput from "@/components/newForm/textInput";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import { useRecoilValue } from "recoil";
import { FormField } from "@/store/atom/makeFormField";
import { iFormField } from "@/types/makeFormField";
import { Tabs } from "keep-react";
import Area from "@/components/newForm/area/util/area";
import Loader from "@/components/loader/loader";

function NewFormCreater({formid}: { formid: string}) {
    const router = useRouter();
  const fields = useRecoilValue(FormField) as iFormField;

  // states
  const [form, setForm] = useState({
    title: "",
    description: "",
    start: new Date(),
    end: new Date(),
  });
  const [loading, setLoading] = useState(false);
  const date = new Date();
  const [currentDate, setcurrentDate] = useState(
    date.getFullYear() +
      "-" +
      (date.getMonth() + 1 == 11 || date.getMonth() + 1 == 12
        ? date.getMonth() + 1
        : "0" + (date.getMonth() + 1)) +
      "-" +
      date.getDate() +
      "T" +
      (date.getHours() <= 9 ? "0" + date.getHours() : date.getHours()) +
      ":" +
      (date.getMinutes() <= 9 ? "0" + date.getMinutes() : date.getMinutes())
  );

  const handleSaveButtonClick = async () => {
    const data = fields;
    console.log("Save Form", data, form);
    if (!data[0]) {
      alert("Please add at least one field");
      return;
    }
  };

  const handleSaveDraftButtonClick = async () => {
    setLoading(true);
    await axios
      .post("/api/form/draft", {
        data: {
          title: form.title,
          updated_at: new Date(),
          start_date: form.start,
          expiry_date: form.end,
          state: "Draft",
          description: form.description,
        },
        fields,
        form_id: formid,
      })
      .then((res) => {
        router.push(`/dashboard?msg=${res.data.msg}`);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  const handlePublishButtonClick = async () => {
    console.log("Publish Form", fields, form);
    
  };
  if (loading) {
    return <Loader />;
  }
  return (<>
    <div className="mx-10 my-5">
        <span className="flex flex-col">
          <h1 className="text-3xl mb-4">New Form</h1>
          <p className="text-gray-500 mb-4">
            Create a new form by adding fields below. You can add as many fields
            as you want.
          </p>
        </span>
      </div>
      <Tabs
        aria-label="tabs"
        style="underline"
        borderPosition="bottom"
        className="mx-10 my-5"
      >
        <Tabs.Item title="Title & Description" className="">
          <Area>
            <div className="relative flex flex-col">
              <div>
                <h1>Enter Form title: </h1>
                <TextInput
                  placeholder="Title here"
                  onChange={(e) => {
                    setForm({ ...form, title: e.target.value });
                  }}
                />
              </div>
              <div className="mt-5">
                <h1>Enter Form Description: </h1>
                <TextInput
                  placeholder="Description here"
                  onChange={(e) => {
                    setForm({ ...form, description: e.target.value });
                  }}
                />
              </div>
            </div>
          </Area>
        </Tabs.Item>

        <Tabs.Item
          title="Fields- add fields to your form"
          disabled={form.title && form.description ? false : true}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSaveButtonClick();
            }}
            className="flex flex-col items-center"
          >
            <div className="relative w-11/12">
              <div className="">
                {fields.map((field, index) => {
                  if (
                    field?.type === "text" ||
                    field?.type === "email" ||
                    field?.type === "number" ||
                    field?.type === "textarea"
                  ) {
                    return (
                      <Inputz key={index} type={field?.type} index={index} />
                    );
                  }
                  if (field?.type === "textbox") {
                    return <TextBoxz key={index} index={index} />;
                  }
                  if (
                    field?.type === "dropdown" ||
                    field?.type === "checkbox"
                  ) {
                    return (
                      <OptionField
                        key={index}
                        type={field?.type}
                        index={index}
                      />
                    );
                  }
                })}
              </div>
              <p>{JSON.stringify(fields)}</p>
              <ChooseFormFields />
            </div>
          </form>
        </Tabs.Item>
        <Tabs.Item
          title="Submit- set start and expiry time"
          disabled={
            fields.length >= 1 && form.title && form.description ? false : true
          }
        >
          <div className="mx-5">
            <div className="w-fit ">
              <Area>
                The form starts on{" "}
                <span className="transition ">
                  <input
                    type="datetime-local"
                    onChange={(e) => {
                      setForm({
                        ...form,
                        start: new Date(Date.parse(e.target.value)),
                      });
                    }}
                    min={currentDate}
                    title="Begining time"
                  />
                </span>
                &nbsp;and expires on{" "}
                <span className="transition ">
                  <input
                    type="datetime-local"
                    onChange={(e) => {
                      setForm({
                        ...form,
                        end: new Date(Date.parse(e.target.value)),
                      });
                    }}
                    min={
                      form.start
                        ? form.start?.getFullYear() +
                          "-" +
                          (form.start?.getMonth() + 1 == 11 ||
                          form.start?.getMonth() + 1 == 12
                            ? form.start?.getMonth() + 1
                            : "0" + (form.start?.getMonth() + 1)) +
                          "-" +
                          form.start?.getDate() +
                          "T" +
                          (form.start?.getHours() <= 9
                            ? "0" + form.start?.getHours()
                            : form.start?.getHours()) +
                          ":" +
                          (form.start?.getMinutes() <= 9
                            ? "0" + form.start?.getMinutes()
                            : form.start?.getMinutes())
                        : currentDate
                    }
                    title="Ending time"
                  />
                </span>
              </Area>
            </div>
            <div>
              <button
                className=" transition-all bg-transparent hover:bg-slate-300 text-black px-4 py-2 rounded"
                onClick={handleSaveDraftButtonClick}
                type="button"
              >
                Save as Draft
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded ml-2"
                type="button"
                onClick={handlePublishButtonClick}
              >
                Publish Form
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded ml-2"
                type="button"
                title="No need to set start and expiry time for live form. It will be live as soon as you click it."
              >
                Live now
              </button>
            </div>
          </div>
        </Tabs.Item>
      </Tabs></>
  );
}



export default memo(NewFormCreater);
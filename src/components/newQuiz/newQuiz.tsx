"use client";

import { memo, use, useEffect } from "react";
import TextInput from "@/components/newForm/textInput";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import { useRecoilState, useRecoilValue } from "recoil";
import { FormField } from "@/store/atom/makeFormField";
import { Tabs } from "keep-react";
import Area from "@/components/newForm/area/util/area";
import Loader from "@/components/loader/loader";
import { iFormData } from "@/types/formData";
import Quiz from "./quiz";
import randomGenerator from "@/controllers/randomGenerator";

function NewQuizCreater({id,updateform}: { id: string, updateform: iFormData}) {
  
    const router = useRouter();
  // const fields = useRecoilValue(FormField) as iFormField;
  const [fields, setFields] = useRecoilState(FormField);
  useEffect(() => {
    if(updateform.fields){
      setFields(updateform?.fields);
    }
  },[])
  
  // states
  const [quiz, setQuiz] = useState({
    title: updateform.title?updateform.title:"",
    description: updateform.description?updateform.description:"",
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
    console.log("Save Form", data, quiz);
    if (!data[0]) {
      alert("Please add at least one field");
      return;
    }
  };

  const handleSaveDraftButtonClick = async () => {
    setLoading(true);
    await axios
      .post("/api/quiz/publish", {
        data: {
          title: quiz.title,
          updated_at: new Date(),
          start_date: quiz.start,
          expiry_date: quiz.end,
          state: "Draft",
          description: quiz.description,
        },
        fields,
        form_id: id,
      })
      .then((res) => {
        router.push(`/dashboard?msg=${res.data.msg}`);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  const handleButtonClick = async (state:string) => {
    setLoading(true);
    axios.post("/api/quiz/publish", {
      data: {
        title: quiz.title,
        updated_at: new Date(),
        start_date: quiz.start,
        expiry_date: quiz.end,
        state,
        description: quiz.description,
      },
      fields,
      form_id: id,
    })
    .then((res) => {
      router.push(`/dashboard?msg=${res.data.msg}`);
    })
    .catch((err) => {
      setLoading(false);
      console.log(err);
    });
    
  };

  if (loading) {
    return <Loader />;
  }
  return (<>
    <div className="mx-10 my-5">
        <span className="flex flex-col">
          <h1 className="text-3xl mb-4">Edit Quiz</h1>
          <p className="text-gray-500 mb-4">
            Create a new quiz by adding title, description and fields. You can
            also set start and expiry time for the quiz.
          </p>
        </span>
      </div>
      <Tabs
        aria-label="tabs"
        style="underline"
        borderPosition="bottom"
        className="mx-4 my-5 md:mx-10"
      >
        <Tabs.Item title="Title & Description" className="">
          <Area>
            <div className="relative flex flex-col">
              <div>
                <h1>Enter Quiz title: </h1>
                <TextInput
                  placeholder="Title here"
                  onChange={(e) => {
                    setQuiz({ ...quiz, title: e.target.value });
                  }}
                  value={quiz.title}
                />
              </div>
              <div className="mt-5">
                <h1>Enter Quiz Description: </h1>
                <TextInput
                  placeholder="Description here"
                  onChange={(e) => {
                    setQuiz({ ...quiz, description: e.target.value });
                  }}
                  value={quiz.description}
                />
              </div>
            </div>
          </Area>
        </Tabs.Item>

        <Tabs.Item
          title="Fields- add fields to your quiz"
          disabled={quiz.title && quiz.description ? false : true}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSaveButtonClick();
            }}
            className="flex flex-col items-center"
          >
            <div className="relative w-full md:11/12">
              <div className="">
                {fields.map((field, index) => {
                  return <Quiz key={index} index={index} />
                })}
              </div>
              <button
                className="bg-black hover:bg-black/80 text-white px-4 py-2 rounded ml-2"
                type="button"
                onClick={()=>setFields([...fields, {title:"",required:false,uniqueID:randomGenerator(),options:['','']}])}
                title="Add new quiz"
              >
                Add Quiz
              </button>
            </div>
          </form>
        </Tabs.Item>
        <Tabs.Item
          title="Submit- set start and expiry time"
          disabled={
            fields.length >= 1 && quiz.title && quiz.description ? false : true
          }
        >
          <div className="mx-5">
            <div className="w-fit ">
              <Area>
                The quiz starts on{" "}
                <span className="transition ">
                  <input
                    type="datetime-local"
                    onChange={(e) => {
                      setQuiz({
                        ...quiz,
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
                      setQuiz({
                        ...quiz,
                        end: new Date(Date.parse(e.target.value)),
                      });
                    }}
                    min={
                      quiz.start
                        ? quiz.start?.getFullYear() +
                          "-" +
                          (quiz.start?.getMonth() + 1 == 11 ||
                          quiz.start?.getMonth() + 1 == 12
                            ? quiz.start?.getMonth() + 1
                            : "0" + (quiz.start?.getMonth() + 1)) +
                          "-" +
                          quiz.start?.getDate() +
                          "T" +
                          (quiz.start?.getHours() <= 9
                            ? "0" + quiz.start?.getHours()
                            : quiz.start?.getHours()) +
                          ":" +
                          (quiz.start?.getMinutes() <= 9
                            ? "0" + quiz.start?.getMinutes()
                            : quiz.start?.getMinutes())
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
                onClick={()=>handleButtonClick("Published")}
              >
                Publish Form
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded ml-2"
                type="button"
                onClick={()=>handleButtonClick("Live")}
                title="No need to set start and expiry time for live quiz. It will be live as soon as you click it."
              >
                Live now
              </button>
            </div>
          </div>
        </Tabs.Item>
      </Tabs></>
  );
}



export default memo(NewQuizCreater);
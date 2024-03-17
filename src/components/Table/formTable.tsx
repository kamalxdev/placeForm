'use client'

import React, { memo, useState,} from "react";
import axios from "axios";

import { iFormData } from "@/types/formData";
import Loader from "../loader/loader";
import Error404 from "../errors/404";
import { useRouter } from "next/navigation";
import TableHeading, {TableRow } from "./tableComponents";
import useFetchData from "@/hooks/fetchData";
import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard for the form creator app.",
};

function FormTable() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const formAPI = useFetchData("/api/form/");
  const QuizAPI = useFetchData("/api/quiz/");

  const forms: iFormData[] = formAPI?.data?.form?.map((form: any) => {
    return {
      ...form,
      start_date: new Date(form.start_date),
      expiry_date: form.expiry_date && new Date(form.expiry_date),
      updated_at: new Date(form.updated_at),
    };
  });
  const quiz: iFormData[] = QuizAPI?.data?.quiz?.map((quiz: any) => {
    return {
      ...quiz,
      start_date: new Date(quiz.start_date),
      expiry_date: quiz.expiry_date && new Date(quiz.expiry_date),
      updated_at: new Date(quiz.updated_at),
    };
  });
  

  async function handleNewForm() {
    setLoading(true);
    await axios
      .get("/api/form/new")
      .then((res) => {
        setLoading(false);
        if (res.data.formID) {
          router.push(`/form/v/${res.data.formID}/edit`);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log("NewFormID error ------>", err);
      });
  }


  async function handleNewQuiz() {
    setLoading(true);
    await axios
      .get("/api/quiz/new")
      .then((res) => {
        setLoading(false);
        if (res.data.ID) {
          router.push(`/quiz/v/${res.data.ID}/edit`);
        }
      })
      .catch((err) => {
        setLoading(false);
        alert("Error in creating new Quiz");
        console.log("NewFormID error ------>", err);
      });
  }

  
  if (formAPI?.loading || QuizAPI?.loading || loading) return <Loader />;

  if (formAPI?.error?.title) return <Error404 title={formAPI?.error?.title} description={formAPI?.error?.description} />;
  if (QuizAPI?.error?.title) return <Error404 title={QuizAPI?.error?.title} description={QuizAPI?.error?.description} />;
  return (
    <div className="w-screen h-screen overflow-hidden">
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold">Manage your forms and quizzes</h2>
            <p className="mt-1 text-sm text-gray-700">
              This is where you can create, edit, and manage all your forms and quizzes
            </p>
          </div>
          <div className="flex  gap-5">
            <button
              type="button"
              onClick={handleNewForm}
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add new Form
            </button>
            <button
              type="button"
              onClick={handleNewQuiz}
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add new Quiz
            </button>
          </div>
          
        </div>
        {forms || quiz ? (
          forms[0] || quiz[0] ? (
            <div className="mt-6 flex flex-col">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                    <table className="min-w-full divide-y divide-white">
                      <thead className="bg-black !text-white">
                        <tr>
                          <TableHeading name="Title" />
                          <TableHeading name="Date" />
                          <TableHeading name="Expiry" />
                          <TableHeading name="Status" />
                          <TableHeading name="Attempt" />
                          <TableHeading name="" />
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-black bg-white">
                      {forms[0] && <tr className="border-t border-gray-800">
                          <th
                            scope="col"
                            className="py-2 pl-4 pr-3 text-left text-md font-medium text-gray-800"
                          >
                            Forms &rarr;
                          </th>
                        </tr>}
                        {forms?.map((form, index) => (
                            <TableRow form={form} index={index} key={"row"+index} mode="form" />
                        ))}
                        {quiz[0] && <tr className="border-t border-gray-800">
                          <th
                            colSpan={5}
                            scope="col"
                            className="py-2 pl-4 pr-3 text-left text-md font-medium text-gray-800"
                          >
                            Quiz &rarr;
                          </th>
                        </tr>}
                        {quiz?.map((quiz, index) => (
                            <TableRow form={quiz} index={index} key={"row"+index} mode="quiz"/>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-2xl mt-10">
              No forms or quiz Found
            </div>
          )
        ) : null}
      </section>
    </div>
  );
}

export default memo(FormTable);
'use client'

import React, { memo,} from "react";
import axios from "axios";
import {
  DotsThreeOutline,
  Pencil,
  Trash,
  Eye,
  FileArrowUp,
  FileArrowDown,
  HardDrives,
} from "phosphor-react";
import { Button, Popover } from "keep-react";
import { iFormData } from "@/types/formData";
import Loader from "../loader/loader";
import Error404 from "../errors/404";
import { useRouter } from "next/navigation";
import TableHeading, { EditIcons, TableData } from "./tableComponents";
import useFetchData from "@/hooks/fetchData";
import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard for the form creator app.",
};

function FormTable() {
  const router = useRouter();
  const currentDate = new Date();
  const { data, error, loading } = useFetchData("/api/form/");
  const forms: iFormData[] = data?.form?.map((form: any) => {
    return {
      ...form,
      start_date: new Date(form.start_date),
      expiry_date: form.expiry_date && new Date(form.expiry_date),
      updated_at: new Date(form.updated_at),
    };
  });
  

  async function handleNewForm() {
    await axios
      .get("/api/form/new")
      .then((res) => {
        if (res.data.formID) {
          router.push(`/form/v/${res.data.formID}/edit`);
        }
      })
      .catch((err) => {
        console.log("NewFormID error ------>", err);
      });
  }


  async function handleNewQuiz() {
    await axios
      .get("/api/quiz/new")
      .then((res) => {
        if (res.data.ID) {
          router.push(`/quiz/v/${res.data.ID}/edit`);
        }
      })
      .catch((err) => {
        alert("Error in creating new Quiz");
        console.log("NewFormID error ------>", err);
      });
  }

  // Delete form

  async function handledeleteform(
    formid: string,
    formtitle: string | undefined
  ) {
    let confirmation = confirm(
      `Are you sure you want to delete this form with title "${formtitle}" ?`
    );
    if (confirmation) {
      await axios
        .post("/api/form/delete/", { formid: formid })
        .then((res) => {
          const data = res.data;
          alert(data.message);
          router.refresh();
        })
        .catch((err) => {
          console.log("Error in PostDeleteForm------->", err);
          alert("Error in deleting form");
        });
    }
  }

  // publish status change
  async function publishStatusChange(
    formid: string,
    changeToThisStatus: string
  ) {
    let confirmation = confirm(
      `Are you sure you want to ${changeToThisStatus} this form?`
    );
    if (confirmation) {
      await axios
        .post("/api/form/save/", {
          id: formid,
          data: { state: changeToThisStatus },
        })
        .then((res) => {
          const data = res.data;
          alert(data.msg);
          router.refresh();
        })
        .catch((err) => {
          console.log("Error in PostStatusChange------->", err);
          alert("Error in changing status");
        });
    }
  }
  if (loading) return <Loader />;

  if (error?.title) return <Error404 title={error?.title} description={error?.description} />;
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
        {forms ? (
          forms[0] ? (
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
                      <tr className="border-t border-gray-800">
                          <th
                            scope="col"
                            className="py-2 pl-4 pr-3 text-left text-md font-medium text-gray-800"
                          >
                            Forms &rarr;
                          </th>
                        </tr>
                        {forms?.map((form, index) => (
                          <tr
                            key={index}
                            className="border-gray-500 rounded-2xl transition hover:bg-gray-300"
                          >
                            <TableData>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {form.title || "(Untitled)"}
                                </div>
                                <div className="text-sm text-gray-700">
                                  {"Last updated on  " +
                                    form.updated_at.toString()}
                                </div>
                              </div>
                            </TableData>
                            <TableData>
                              <div>
                                <div className="text-sm text-gray-900 ">
                                  {form?.start_date
                                    ? form?.start_date?.getDate() +
                                      "-" +
                                      (form?.start_date?.getMonth() + 1) +
                                      "-" +
                                      form?.start_date?.getFullYear()
                                    : "00-00-0000"}
                                </div>
                                <div className="text-sm text-gray-700">
                                  {form.start_date?.getHours() +
                                    ":" +
                                    form.start_date?.getMinutes() +
                                    ":" +
                                    form.start_date?.getSeconds() || "00:00:00"}
                                </div>
                              </div>
                            </TableData>
                            <TableData>
                              <div>
                                <div className="text-sm text-gray-900 ">
                                  {form?.expiry_date
                                    ? form?.expiry_date?.getDate() +
                                      "-" +
                                      (form?.expiry_date?.getMonth() + 1) +
                                      "-" +
                                      form?.expiry_date?.getFullYear()
                                    : "00-00-0000"}
                                </div>
                                <div className="text-sm text-gray-700">
                                  {form.expiry_date
                                    ? form.expiry_date?.getHours() +
                                      ":" +
                                      form.expiry_date?.getMinutes() +
                                      ":" +
                                      form.expiry_date?.getSeconds()
                                    : "00:00:00"}
                                </div>
                              </div>
                            </TableData>
                            <TableData>
                              {form.state == "Published" ? (
                                (form?.expiry_date as Date) > currentDate ? (
                                  <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                    {(form?.start_date as Date) > currentDate
                                      ? "Published"
                                      : "Live"}
                                  </span>
                                ) : (
                                  <span className="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800">
                                    Expired
                                  </span>
                                )
                              ) : (
                                <span
                                  className={`inline-flex rounded-full  px-2 text-xs font-semibold leading-5  ${
                                    form.state == "Live"
                                      ? "text-green-800 bg-green-100"
                                      : "text-red-800 bg-red-100"
                                  }`}
                                >
                                  {form.state}
                                </span>
                              )}
                            </TableData>
                            <TableData>{form.Attempts || 0}</TableData>
                            <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                              <Popover
                                showDismissIcon={false}
                                showArrow={false}
                                className="w-52 border border-metal-300 p-2"
                              >
                                <Popover.Container className="!mt-0 !block">
                                  <ul>
                                    {form.state == "Live" && (
                                      <EditIcons
                                        button
                                        onClick={() =>
                                          publishStatusChange(form._id, "Draft")
                                        }
                                      >
                                        <span className="text-red-600">
                                          Draft
                                        </span>
                                        <span>
                                          <FileArrowDown color="red" />
                                        </span>
                                      </EditIcons>
                                    )}
                                    {form.state == "Live" ||
                                      (form.state == "Published" && (
                                        <EditIcons
                                          href={`/form/m/${form._id}/write`}
                                        >
                                          <span>View</span>
                                          <span>
                                            <Eye />
                                          </span>
                                        </EditIcons>
                                      ))}
                                    {form.state == "Published" && (
                                      <EditIcons
                                        button
                                        onClick={() =>
                                          publishStatusChange(form._id, "Live")
                                        }
                                      >
                                        <span className="text-green-600">
                                          Live now
                                        </span>
                                        <span>
                                          <FileArrowUp color="green" />
                                        </span>
                                      </EditIcons>
                                    )}
                                    <EditIcons
                                      href={`/account/form/${form._id}/responses`}
                                    >
                                      <span>Responses</span>
                                      <span>
                                        <HardDrives />
                                      </span>
                                    </EditIcons>
                                    <EditIcons
                                      button
                                      onClick={() =>
                                        handledeleteform(form._id, form.title)
                                      }
                                    >
                                      <span>Delete</span>
                                      <span>
                                        <Trash />
                                      </span>
                                    </EditIcons>
                                    <EditIcons
                                      href={`/form/v/${form._id}/edit`}
                                    >
                                      <span>Edit</span>
                                      <span>
                                        <Pencil />
                                      </span>
                                    </EditIcons>
                                  </ul>
                                </Popover.Container>
                                <Popover.Action>
                                  <Button
                                    type="outlineGray"
                                    size="xs"
                                    circle={true}
                                  >
                                    <DotsThreeOutline
                                      size={14}
                                      color="#5E718D"
                                      weight="bold"
                                    />
                                  </Button>
                                </Popover.Action>
                              </Popover>
                            </td>
                          </tr>
                        ))}
                        <tr className="border-t border-gray-800">
                          <th
                            colSpan={5}
                            scope="col"
                            className="py-2 pl-4 pr-3 text-left text-md font-medium text-gray-800"
                          >
                            Quiz &rarr;
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-2xl mt-10">
              No forms Found
            </div>
          )
        ) : null}
      </section>
    </div>
  );
}

export default memo(FormTable);

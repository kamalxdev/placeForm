"use client";

import React from "react";
import axios from "axios";
import { DotsThreeOutline,Pencil,Trash,Eye,FileArrowUp,FileArrowDown   } from "phosphor-react";
import { Button, Popover } from "keep-react";

type iform = {
  formData: {
    _id: string;
    title?: string;
    created_at: Date;
    updated_at: Date;
    state: string;
    created_by: string;
    Attempts: number;
    expiry_date?: Date;
    fields?: any[];
    __v?: number;
    start_date: Date,
  }[];
};

export default function FormTable(props: iform) {
  async function handledeleteform(formid: string) {
    const confirmation = confirm(
      `Are you sure you want to delete this form with #${formid} ?`
    );
    if (confirmation) {
      await axios
        .post("/api/form/delete/", { formid: formid })
        .then((res) => {
          const data = res.data;
          alert(data.message);
          location.reload();
        })
        .catch((err) => {
          console.log("Error in PostDeleteForm------->", err);
          alert("Error in deleting form");
        });
    }
  }
  const formData = props.formData;
  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold">Forms</h2>
            <p className="mt-1 text-sm text-gray-700">
              This is a list of all forms created by you.
            </p>
          </div>
          <div>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              onClick={() => {
                location.href = "/dashboard/form";
              }}
            >
              Add new Form
            </button>
          </div>
        </div>
        {formData[0]?(<div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-white">
                  <thead className="bg-black !text-white">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal "
                      >
                        <span>Title</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal "
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal "
                      >
                        Expiry
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal "
                      >
                        Status
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal"
                      >
                        Attempt
                      </th>
                      <th scope="col" className="relative px-4 py-3.5">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-black bg-white">
                    {formData.map((form, index) => (
                      <tr
                        key={index}
                        className="border-gray-500 rounded-2xl transition hover:bg-gray-300"
                      >
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                            {/*<div className="h-10 w-10 flex-shrink-0">
                               <img
                                className="h-10 w-10 rounded-full object-cover"
                                src={person.image}
                                alt=""
                              />
                            </div> */}
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {form.title || "(Untitled)"}
                              </div>
                              <div className="text-sm text-gray-700">
                                {"Last updated at  " +
                                  form.updated_at.toString()}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">
                            {form.start_date.getDate() +
                              "-" +
                              (form.start_date.getMonth() + 1) +
                              "-" +
                              form.start_date.getFullYear() || "00-00-0000"}
                          </div>
                          <div className="text-sm text-gray-700">
                            {form.start_date.getHours() +
                              ":" +
                              form.start_date.getMinutes() +
                              ":" +
                              form.start_date.getSeconds() || "00:00:00"}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">
                            {form.expiry_date
                              ? form.expiry_date?.getDate() +
                                "-" +
                                (form.expiry_date?.getMonth() + 1) +
                                "-" +
                                form.expiry_date?.getFullYear()
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
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                            {form.state || "Pending"}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          {form.Attempts}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                          {/* <a href="#" className="text-gray-700">
                          <DotsThreeOutline />
                          </a> */}
                          <Popover
                            showDismissIcon={false}
                            showArrow={false}
                            className="w-52 border border-metal-300 p-2"
                          >
                            <Popover.Container className="!mt-0 !block">
                              <ul>
                              {form.state==="Pending"?null:(
                                <li className="w-auto transition rounded px-2 py-1 border hover:border-black">
                                <button className="flex w-full items-center justify-between text-body-4 font-normal text-metal-600">
                                  <span>{form.state=="Active"?"Make it Draft":"Make it Active"}</span>
                                  <span>{form.state=="Active"?(<FileArrowDown />):(<FileArrowUp/>)}</span>
                                </button>
                              </li>
                              )}
                                <li className="w-auto transition rounded px-2 py-1 border hover:border-black">
                                  <button className="flex w-full items-center justify-between text-body-4 font-normal text-metal-600" onClick={e=>handledeleteform(form._id)}>
                                    <span>Delete</span>
                                    <span><Trash /></span>
                                  </button>
                                </li>
                                <li className="w-auto transition rounded px-2 py-1 border hover:border-black">
                                  <button className="flex w-full items-center justify-between text-body-4 font-normal text-metal-600">
                                    <span>Edit</span>
                                    <span><Pencil /></span>
                                  </button>
                                </li>
                                <li className="w-auto transition rounded px-2 py-1 border hover:border-black">
                                  <button className="flex w-full items-center justify-between text-body-4 font-normal text-metal-600">
                                    <span>View</span>
                                    <span><Eye/></span>
                                  </button>
                                </li>
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
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>):(<div className="flex flex-col items-center justify-center text-2xl mt-10">No forms Found</div>)}
      </section>
    </>
  );
}

"use client";

import Error404 from "@/components/errors/404";
import Loader from "@/components/loader/loader";
import usePushData from "@/hooks/pushData";
import React from "react";

export default function FormResponses({
  params,
}: {
  params: { formid: string, TypeOfRequest: string};
}) {
  if(params.TypeOfRequest!="quiz" && params.TypeOfRequest!="form") return <Error404 title="Invalid URL" description="The URL is invalid. Please check the URL and try again." />;
  const formid = params.formid;
  const {data, error, loading}=usePushData(`/api/${params.TypeOfRequest}/responses/get`, { id: formid });
  const form=data?.form;
  const responses=data?.responses;

  
  if (loading) return <Loader />;
  if (error?.title) return <Error404 title={error.title} description={error.description} />;






  return (
    <>
      <section className="mx-auto w-screen h-screen max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold">Responses - {form.title}</h2>
            <p className="mt-1 text-sm text-gray-700">
              View and manage all your responses to the form.
            </p>
          </div>
          <div>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Export to Excel
            </button>
          </div>
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr className="divide-x divide-gray-200">
                      {params.TypeOfRequest==="quiz" && 
                        <th
                        scope="col"
                        key="name"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                      >
                        <span>Name</span>
                      </th>
                      }
                      {form?.fields?.map((field: any) => {
                        return (
                          <th
                            scope="col"
                            key={field.uniqueID}
                            className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                          >
                            <span>{field.title}</span>
                          </th>
                        );
                      })}

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                      ></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {responses.map((response: any, index: number) => (
                      <tr key={index} className="divide-x divide-gray-200">
                        {params.TypeOfRequest==="quiz" &&  <td
                              className="px-4 py-4 text-sm font-normal text-gray-900"
                              key={"name+index"}
                            >
                              <span>
                                {response?.name || "-"}
                              </span>
                            </td>}
                        {form.fields.map((field: any, indexx: number) => {
                          return (
                            <td
                              className="px-4 py-4 text-sm font-normal text-gray-900"
                              key={indexx}
                            >
                              <span>
                                {response.response[0][field.uniqueID]?.answer || "-"}
                              </span>
                            </td>
                          );
                        })}

                        <td className="whitespace-nowrap px-4 py-4 text-sm font-medium">
                          <a
                            href="#"
                            className="text-gray-500 hover:text-indigo-600"
                          >
                            Delete
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

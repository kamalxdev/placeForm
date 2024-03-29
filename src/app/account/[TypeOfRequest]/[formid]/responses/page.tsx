"use client";

import Error404 from "@/components/errors/404";
import Loader from "@/components/loader/loader";
import usePushData from "@/hooks/pushData";
import axios from "axios";
import { set } from "mongoose";
import React from "react";

export default function FormResponses({
  params,
}: {
  params: { formid: string; TypeOfRequest: string };
}) {
  const formid = params.formid;
  const { data, error, loading } = usePushData(
    `/api/${params.TypeOfRequest}/responses/get`,
    { id: formid }
  );
  const [loader, setLoader] = React.useState(false);
  if (params.TypeOfRequest != "quiz" && params.TypeOfRequest != "form")
    return (
      <Error404
        title="Invalid URL"
        description="The URL is invalid. Please check the URL and try again."
      />
    );
  const form = data?.form;
  const responses = data?.responses;

  if (loading || loader) return <Loader />;
  if (error?.title)
    return <Error404 title={error.title} description={error.description} />;






    // to export  responses in an excel file    
  async function handleExportExcel() {
    setLoader(true);



    let headers = params.TypeOfRequest === "quiz" ? [{title:"Name"},...form?.fields?.map((field: any) => {
      return { title: field.title };
    })] : form?.fields?.map((field: any) => {
      return { title: field.title };
    });


    let response = responses?.map((response: any) => {
      let res: any = params.TypeOfRequest === "quiz" ? {Name: response?.name || "-"} : {};
      form?.fields?.map((field: any) => {
        res[field.title] = response.response[0][field.uniqueID]?.answer || "-";
      });
      return res;
    });



    const res = await axios.post(
      `/api/download`,
      {
        headers,
        response,
      },
      {
        responseType: "blob",
      }
    );
    

    const url = window.URL.createObjectURL(new Blob([res.data]));

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${form?.title}.xlsx`);
    document.body.appendChild(link);
    link.click();
      setLoader(false);

  }






  return (
    <>
      <section className="relative mx-auto w-screen h-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold">Responses - {form?.title}</h2>
            <p className="mt-1 text-sm text-gray-700">
              View and manage all your responses to the form.
            </p>
          </div>
          <div>
            <button
              type="button"
              onClick={handleExportExcel}
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Export to Excel
            </button>
          </div>
        </div>
        {data?.responses.length > 0 ? (
          <div className="mt-6 flex flex-col">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr className="divide-x divide-gray-200">
                        {params.TypeOfRequest === "quiz" && (
                          <th
                            scope="col"
                            key="name"
                            className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                          >
                            <span>Name</span>
                          </th>
                        )}
                        {form?.fields?.map((field: any) => {
                          if (field?.type === "textbox") return null;
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
                      {responses?.map((response: any, index: number) => (
                        <tr key={index} className="divide-x divide-gray-200">
                          {params.TypeOfRequest === "quiz" && (
                            <td
                              className="px-4 py-4 text-sm font-normal text-gray-900"
                              key={"name+index"}
                            >
                              <span>{response?.name || "-"}</span>
                            </td>
                          )}
                          {form?.fields?.map((field: any, indexx: number) => {
                            if (field?.type === "textbox") return null;
                            return (
                              <td
                                className={`px-4 py-4 text-sm font-normal text-gray-900  ${
                                  params?.TypeOfRequest == "quiz" &&
                                  (field?.options[field?.correctOption] ==
                                  response?.response[0][field?.uniqueID]?.answer
                                    ? "text-green-600"
                                    : "text-red-600")
                                }`}
                                key={indexx}
                              >
                                <span>
                                  {response.response[0][field.uniqueID]
                                    ?.answer || "-"}
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
        ) : (
          <div className="flex w-screen h-screen pt-8 justify-center items-start ">
            <h1 className="text-xl font-semibold">No responses found</h1>
          </div>
        )}
      </section>
    </>
  );
}

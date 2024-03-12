"use client";
import Error404 from "@/components/errors/404";
import FormFieldGenerator from "@/components/formOutput/formFieldGenerator";
import Loader from "@/components/loader/loader";
import useFetchData from "@/hooks/fetchData";
import { memo } from "react";
import { RecoilRoot } from "recoil";

function ViewForm({
  params,
}: {
  params: { id: string; TypeOfRequest: string };
}) {
  const { data, error, loading } = useFetchData(
    `/api/
    ${params?.TypeOfRequest}/get?id=${params?.id}&mode=write`
  );
  if (params?.TypeOfRequest == "form") {
    if (loading) return <Loader />;
    if (error)
      return <Error404 title={error?.title} description={error?.description} />;

    return (
      <>
        <RecoilRoot>
          <form className="relative w-screen h-full flex  items-center flex-col mt-4">
            <div className="relative w-10/12 lg:w-5/12 xl:w-6/12 2xl:w-6/12 h-auto py-5 rounded-sm bg-black text-white flex items-center flex-wrap">
              <div className="mx-4">
                <h1 className="text-lg font-extrabold">{data?.title}</h1>
                <h6 className="text-sm">{data?.description}</h6>
              </div>
              <div className="relative w-full h-6 mt-3 bg-white text-black flex justify-center items-center text-lg">
                <h6 className="text-sm font-extrabold   ">
                  Created by {data?.user}
                </h6>
              </div>
            </div>
            <FormFieldGenerator fields={data?.fields} formid={data?.id} />
          </form>
        </RecoilRoot>
      </>
    );
  }else if(params?.TypeOfRequest=="quiz"){

  }else{
    return <Error404 title="Incorrect Link" description="Please make sure you have the correct link" />;
  }
}

export default memo(ViewForm);

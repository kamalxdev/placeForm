"use client";
import Error404 from "@/components/errors/404";
import FormFieldGenerator from "@/components/formOutput/formFieldGenerator";
import Quiz from "@/components/formOutput/quiz";
import Loader from "@/components/loader/loader";
import TextInput from "@/components/newForm/textInput";
import randomGenerator from "@/controllers/randomGenerator";
import useFetchData from "@/hooks/fetchData";
import { UserResponses } from "@/store/atom/formResponses";
import axios from "axios";
import { log } from "console";
import { useRouter } from "next/navigation";
import { memo, use, useEffect, useState } from "react";
import { RecoilRoot, useRecoilValue } from "recoil";
import { io } from "socket.io-client";
// import {Server} from "socket.io"

type idetails = {
  name: string;
  email?: string;
};

function ViewForm({
  params,
}: {
  params: { id: string; TypeOfRequest: string };
}) {
  const userResponse = useRecoilValue(UserResponses);
  const { data, error, loading } = useFetchData(
    `/api/${params?.TypeOfRequest}/get?id=${params?.id}&mode=write`
  );
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [details, setDetails] = useState<idetails>({ name: "" });
  const [time, setTime] = useState(0);
  const router = useRouter();

  const fields = data?.fields;
  if (loading) return <Loader />;
  if (error)
    return <Error404 title={error?.title} description={error?.description} />;





  if (params?.TypeOfRequest == "form") {
    return (
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
    );
  } else if (params?.TypeOfRequest == "quiz") {
    const expirytime = 10;
    
    const handleNextButton = () => {
      if (!details?.name) {
        return alert("Please enter your name");
      }
      if (fields?.length > currentQuestion) {
            return setCurrentQuestion(currentQuestion + 1);
      }
      setCurrentQuestion(0);

      // axios
      //   .post("/api/quiz/responses", {name:details?.name, response: userResponse, formid: data?.id})
      //   .then((res) => {
      //     alert(res?.data?.msg)
          
      //     router.push("/");
      //   })
      //   .catch((err) => {
      //     alert("Error submitting quiz");
      //     console.log(err);
      //   });
    };
    setTimeout(() => {
      if (currentQuestion >= 1) {
      
        setTime(time + 1);
      }
    }, 1000);

    if(time == expirytime && currentQuestion >= 1){
      handleNextButton();
    }
    //   const interval = setTimeout(() => {
    //     setTime(time + 1);
        
    //   }, 1000);
      
      
    // }
    return (
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

        {currentQuestion >= 1 ? (
          <div className="relative w-10/12 lg:w-5/12 xl:w-6/12 2xl:w-6/12 h-auto py-5 flex-col  text-white flex items-center ">
            <div className="text-md text-black w-full flex items-center justify-between px-5">
              <p>{"Question: " + currentQuestion + "/" + fields.length}</p>
              <p>{"Time: " + time + "s"}</p>
            </div>
            <Quiz
              id={randomGenerator()}
              key={fields[currentQuestion - 1]?.title}
              title={fields[currentQuestion - 1]?.title}
              option={fields[currentQuestion - 1]?.options}
              required={fields[currentQuestion - 1]?.required}
              unique={randomGenerator()}
              index={currentQuestion}
              correctAnswer={
                fields[currentQuestion - 1]?.options[
                  fields[currentQuestion - 1]?.correctOption
                ]
              }
              uniqueID={fields[currentQuestion - 1]?.uniqueID}
            />
          </div>
        ) : (
          <div className="mt-10">
            <h1 className="text-sm font-semibold mb-5">Enter your Details:</h1>
            <TextInput
              placeholder="Enter your name"
              onChange={(e) => {
                setDetails({ ...details, name: e.target.value });
              }}
            />
          </div>
        )}
        {currentQuestion == 0 && (
          <button
            type="button"
            onClick={() => {
              handleNextButton();
            }}
            className="rounded-md mt-10 bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500 disabled:bg-black/70"
          >
            Start
          </button>
        )}
      </form>
    );
  } else {
    return (
      <Error404
        title="Incorrect Link"
        description="Please make sure you have the correct link"
      />
    );
  }
}

export default memo(ViewForm);

"use client";

import Loader from "@/components/loader/loader";
import axios from "axios";
import { useRouter } from "next/navigation";
import { memo, useState } from "react";

function GenerateWithAI() {
  //   const span = useRef(null);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  async function generateQuiz() {
    setLoading(true);
    await axios
      .post("/api/generate", { prompt })
      .then((res) => {
        setLoading(false);
        const data=res.data
        if(data.status===400){
          alert(data.msg)
        }
        if(data.status===200){
          return router.push(`/quiz/v/${data?.quiz?._id}/edit`);
        }
      })
      .catch((err) => {
        setLoading(false);
        alert("Error in generating a quiz");
        console.log(err);
      });
  }
  if(loading) return <Loader/>
  return (
    <section className="w-screen h-screen ">
      <div className="h-5/6 flex justify-center items-center">
        <div className="border border-black md:w-8/12 lg:w-8/12 p-10 flex flex-col gap-5 flex-wrap">
          <span className="w-full flex item-center justify-center font-semibold text-xl text-black ">
            Generate a Quiz
          </span>
          <input
            type="text"
            aria-multiline
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full border border-stone-300 outline-indigo-500 p-5 text-lg"
          />
          <span className="w-full flex item-center justify-center ">
            <button type="button" className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded" onClick={generateQuiz}>
              Generate
            </button>
          </span>
        </div>
      </div>
    </section>
  );
}

export default memo(GenerateWithAI);

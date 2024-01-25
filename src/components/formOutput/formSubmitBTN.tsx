"use client";

import axios from "axios";

type iprops = {
  formid: string;
  responses?: Array<any>;
};

export default function FormSubmitBTN(props: iprops) {
  async function handleSubmit() {
    console.log("submitted");
    await axios
      .post("/api/form/responses", {response:props.responses, formid:props.formid})
      .then((res) => {
        // console.log(res.data);
        const { data } = res;
        if (data.status == 200) {
          alert(data.msg);
          window.location.href = "/";
        }
        
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="flex relative w-10/12 lg:w-5/12 xl:w-6/12 2xl:w-6/12 items-center justify-center py-8 ">
      <button
        type="button"
        onClick={handleSubmit}
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
      >
        {" "}
        Submit Form
      </button>
    </div>
  );
}

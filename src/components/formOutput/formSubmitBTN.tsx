"use client";

import { UserResponses } from "@/store/atom/formResponses";
import axios from "axios";
import { Spinner } from "keep-react";
import { useRouter } from "next/navigation";
import { memo, useMemo, useState } from "react";
import { useRecoilValue } from "recoil";

type iprops = {
  formid: string;
  responses?: any;
};
function FormSubmitBTN(props: iprops) {
  const UserResponse = useRecoilValue(UserResponses);
  const router = useRouter()
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    setLoading(true);
    await axios
      .get(`/api/auth/user`)
      .then(async (res) => {
        const { data } = res;
        await axios
          .post("/api/form/responses", {
            response: UserResponse,
            formid: props.formid,
            user: data?.user?._id || null,
          })
          .then((res) => {
            // console.log(res.data);
            setLoading(false);
            const { data } = res;
            if (data.status == 200) {
              alert(data.msg);
              return router.push("/");
            }
            alert(data.msg);
            return router.push("/");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((error) => {
        console.log("Error getting user details", error);
      });
  }
  
  return (
    <div className="flex relative w-10/12 lg:w-5/12 xl:w-6/12 2xl:w-6/12 items-center justify-center py-8 ">
      {loading ? (
        <Spinner color="info" size="lg" />
      ) : (
        <button
          type="submit"
          onClick={handleSubmit}
          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500 "
        >
          {" "}
          Submit Form
        </button>
      )}
    </div>
  );
}



export default memo(FormSubmitBTN);
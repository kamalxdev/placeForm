"use client";

import { UserResponses } from "@/store/atom/formResponses";
import { set } from "mongoose";
import { memo, useState } from "react";
import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil";

type iprops = {
  id: string;
  title: string;
  option: Array<string>;
  required?: boolean;
  unique: string;
  uniqueID: string;
  index?: number;
  // clicked?: boolean;
  correctAnswer?: string;
};

function Quiz(props: iprops) {
  const [userResponse, setUserResponse] = useRecoilState(UserResponses);
  const [clicked, setClicked] = useState(false);
  return (
    <div
      className="mt-4 relative w-full h-auto flex justify-center p-5 rounded-sm border flex-col border-black"
      key={props.id + props.title}
    >
      <label
        htmlFor={props.id}
        className="flex text-sm font-bold text-gray-900"
      >
        {props.index + ". " + props.title}
      </label>
      <div className="flex flex-col mt-4 gap-3">
        {props?.option?.map((option, index) => (
          <button
            onClick={(e) => {
              setClicked(true);
              setUserResponse((prev) => {
                return {
                  ...prev,
                  [props.uniqueID]: {
                    question: props.title,
                    answer: option,
                  },
                };
              });
            }}
            className={`flex ml-4 text-black p-2  rounded-lg transition-all ${
              clicked
                ? userResponse[props.uniqueID].answer == props.correctAnswer &&
                  option == props.correctAnswer
                  ? "bg-green-300 border-2 border-green-700"
                  : props.correctAnswer == option
                  ? "bg-green-300"
                  : userResponse[props.uniqueID].answer ==option?"bg-red-300 border-2 border-red-700":"bg-red-300"
                : "hover:bg-gray-200 bg-white"
            }`}
            key={props.id + index + option}
          >
            &rarr; {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default memo(Quiz);

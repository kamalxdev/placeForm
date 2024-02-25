'use client';

import { UserResponses } from "@/store/atom/formResponses";
import { useSetRecoilState } from "recoil";

type iprops = {
  id: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  title: string;
  option: Array<string>;
  uniqueID: string;
  type: string;
};

export default function Dropdownx(props: iprops) {
  const setUserResponse=useSetRecoilState(UserResponses);
  return (
    <div className="mt-4 relative w-full h-auto flex justify-center p-5 rounded-sm border flex-col border-black">
      <label
        htmlFor={props.id}
        className="block text-sm font-bold text-gray-900"
      >
        
        {props.title}
      </label>

      <select
        name={props.title}
        id={props.id}
        defaultValue={"null"}
        onChange={(e) => {
          setUserResponse(prev => ({
            ...prev,
            [props.uniqueID]: {question:props.title,answer:e.target.value,type:props.type||"dropdown"}
          }));
        }}
        className="mt-4 w-full   text-gray-700 sm:text-sm p-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="null" className="p-4" key={props.id + "select"} disabled>Select any one option</option>
        {(props.option).map((option, index) => (
          <option value={option} className="p-4" key={props.id + index + option}>{option}</option>
        ))}
      </select>
    </div>
  );
}

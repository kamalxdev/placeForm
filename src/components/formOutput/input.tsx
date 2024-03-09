"use client"

import { UserResponses } from "@/store/atom/formResponses";
import { useSetRecoilState } from "recoil";


type iprops = {
  id: string;
  placeholder: string;
  type: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  required: boolean;
  uniqueID: string;
};

export default function Inputx(props: iprops) {
  const setUserResponse = useSetRecoilState(UserResponses)
  const id=props.id;
  
  return (
    <div className="mt-4 relative w-full h-auto flex justify-center p-5 rounded-sm border flex-col border-black" key={id +props.title}>
      <label htmlFor={id} className=" text-sm text-gray-700 font-bold flex" key={props.title}> {props.title}&nbsp; {props.required && (<p className="text-red-500">*</p>)} </label>

            <input
                type={props.type}
                id={id}
                placeholder={props.placeholder}
                className="mt-4 w-full text-black shadow-sm sm:text-sm p-2 border-gray-700 focus:ring-blue-500 focus:border-blue-500"
                onChange={(e) => {
                  setUserResponse(prev => ({
                    ...prev,
                    [props.uniqueID]: {question:props.title,answer:e.target.value,type:props.type}
                  }));
                }}
                required={props.required}
                key={id +props.title+props.type}
            />

      
    </div>
  );
}

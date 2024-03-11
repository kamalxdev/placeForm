"use client";

import { PlusCircle, Trash } from "phosphor-react";
import { memo } from "react";
import Title from "./title";
import Options from "./options";
import { useRecoilState } from "recoil";
import { FormField } from "@/store/atom/makeFormField";

function Quiz(props: { index: number }) {
  const [fields, setFields] = useRecoilState(FormField);
  return (
    <div className="border p-4 my-4 md:mx-4">
      <Title index={props.index} />
      <div className="mt-2 ml-2">
        <h5>Add Options: </h5>
        <div className="m-2 transition relative flex items-center md:items-start flex-col">
          {fields[props.index].options?.map((option, index) => (
            <Options key={index} index={index}  fieldIndex={props.index}/>
          ))}
        </div>
        <button className="mt-4" type="button" onClick={()=>setFields((oldFields)=>oldFields.map((field,index)=>{
                if(index===props.index){
                  return {...field,options:[...(field.options!),""]}
                }
                return field
              }))}>
          <PlusCircle size={26} />
        </button>
      </div>
    </div>
  );
}

export default memo(Quiz);

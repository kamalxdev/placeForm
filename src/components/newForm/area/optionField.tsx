"use client";

import { PlusCircle, Trash } from "phosphor-react";
import { memo } from "react";
import Area from "./util/area";
import Title from "./util/title";
import Options from "./util/options";
import { useRecoilState } from "recoil";
import { FormField } from "@/store/atom/makeFormField";

function OptionField(props: { type: string; index: number }) {
  const [fields, setFields] = useRecoilState(FormField);
  return (
    <Area>
      <Title type={props.type} index={props.index} />
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
    </Area>
  );
}

export default memo(OptionField);

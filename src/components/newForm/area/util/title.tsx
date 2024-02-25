"use client";

import { FormField } from "@/store/atom/makeFormField";
import { Trash } from "phosphor-react";
import { memo } from "react";
import { useRecoilState } from "recoil";

type TitleProps = {
  type: string;
  index: number;
};

function Title(props: TitleProps) {
  const [fields, setFields] = useRecoilState(FormField)
  function handleDeleteField() {
    const newFields=fields.filter((field, index) => index !== props.index);
    setFields(newFields);
  }
  return (
    <>
      <h1>{props.type?.toUpperCase()} FIELD</h1>
      <div className="relative flex m-2 items-center flex-wrap md:flex-nowrap sm:flex-wrap">
        <input
          type="text"
          id="title-input-field"
          className=" md:mr-6 h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Title here"
          onChange={(e)=>{
            setFields((oldFields)=>
              oldFields.map((field,index)=>{
                if(index===props.index){
                  return {...field,title:e.target.value}
                }
                return field
              })
            )
          }}
          value={fields[props.index].title}
          required
        />
        <span className="flex mt-4 md:mt-0 justify-start">
          <span className=" flex items-center justify-between mr-6">
            <input type="checkbox" id={`check${props.index}`} className="check-box mr-2" onInput={(e:any)=>{setFields((oldFields)=>
              oldFields.map((field,index)=>{
                if(index===props.index){
                  return {...field,required:e.target.checked}
                }
                return field
              })
            )}}/>
            {" "}
            <label htmlFor={`check${props.index}`}>Required</label>
          </span>
          <button
            type="button"
            className="field-delete-btn"
            title="Delete Field"
            onClick={handleDeleteField}
          >
            <Trash size={22} />
          </button>
        </span>
      </div>
    </>
  );
}

export default memo(Title);

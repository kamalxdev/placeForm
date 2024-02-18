"use client";


import { PlusCircle, Trash } from "phosphor-react";
import { memo, useState } from "react";
import Area from "./util/area";
import Title from "./util/title";
import Options from "./util/options";

function OptionField(props:{type:string}) {
    const [options, setOptions] = useState(["",""]);
  return (
    <Area>
      <Title type={props.type} />
      <div className="mt-2 ml-2">
      <h5>Add Options: </h5>
      <div className="m-2 transition relative flex items-center md:items-start flex-col">
        {options.map((option, index) => {
            return <Options key={index} index={index+1}/>;
        })}
      </div>
      <button className="mt-4" type="button" onClick={()=>setOptions([...options,""])}><PlusCircle size={26} /></button>
    </div>
    </Area>
  );
}

export default memo(OptionField);

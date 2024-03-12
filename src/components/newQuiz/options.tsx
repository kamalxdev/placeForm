import { FormField } from "@/store/atom/makeFormField";
import { Trash } from "phosphor-react";
import { memo } from "react";
import { useRecoilState } from "recoil";


function Options(props: {index:any,fieldIndex:number}) {
  const [fields, setFields] = useRecoilState(FormField)
  function handleDeleteOption() {
    const newFields=fields.filter((field, index) => index !== props.index);
    setFields((prev)=>prev.map((field,index)=>{
      if(index===props.fieldIndex){
        return {...field,options:(field.options)?.filter((option,Optionindex)=>Optionindex!==props.index)}
      }
      return field
    }))
    console.log("delete option");
    
  }
  return (
    <>
      <span className="flex items-center mt-2 transition">
        <h1 className="">{props.index+1}.</h1>
        <input
          type="text"
          className="w-auto border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 mx-2"
          placeholder={"Option "+ (props.index+1)}
          onChange={(e) => {
            setFields((prev)=>prev.map((field,index)=>{
              if(index===props.fieldIndex){
                return {...field,options:(field.options)?.map((option,optionIndex)=>{
                  if(optionIndex===props.index){
                    return e.target.value
                  }
                  return option
                })}
              }
              return field
            }))
          }}
          value={fields[props.fieldIndex]?.options?.[props.index] }
        />
        {props.index>1 ?(
          <button type="button" className="" title="Delete Option" onClick={handleDeleteOption}>
          <Trash size={20} />
        </button>
        ):(
          <button type="button" className="cursor-not-allowed opacity-50" title="Delete Option" disabled>
          <Trash size={20} />
        </button>
        )}
      </span>
    </>
  );
}



export default memo(Options);
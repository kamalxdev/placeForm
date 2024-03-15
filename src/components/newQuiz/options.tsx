import { FormField } from "@/store/atom/makeFormField";
import { iQuizField } from "@/types/generateField";
import { Trash } from "phosphor-react";
import { memo } from "react";
import { useRecoilState } from "recoil";

function Options(props: { index: any; fieldIndex: number; radioName: string }) {
  const [fields, setFields] = useRecoilState<iQuizField>(FormField);
  console.log("Fields:", fields);

  function handleDeleteOption() {
    
    setFields((prev) =>
      prev.map((field, index) => {
        if (index === props.fieldIndex) {
          return {
            ...field,
            options: field.options?.filter(
              (option, Optionindex) => Optionindex !== props.index
            ),
            correctOption: field.correctOption === props.index ? undefined : field?.correctOption,
          }
        }
        return field;
      })
    );
  }

  return (
    <>
      <span className="flex items-center mt-2 transition">
        <input
          type="radio"
          onChange={() => {
            setFields((prev) =>
              prev.map((field, index) => {
                if (index === props.fieldIndex) {
                  return { ...field, correctOption: props.index };
                }
                return field;
              })
            );
          }}
          className="mr-5 accent-pink-500"
          name={props.radioName}
          checked={fields[props.fieldIndex]?.correctOption==props.index?true:false}
          title="Choose correct option for Quiz"
        />
        <h1 className="">{props.index + 1}.</h1>
        <input
          type="text"
          className="w-auto border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 mx-2"
          placeholder={"Option " + (props.index + 1)}
          onChange={(e) => {
            setFields((prev) =>
              prev.map((field, index) => {
                if (index === props.fieldIndex) {
                  return {
                    ...field,
                    options: field.options?.map((option, optionIndex) => {
                      if (optionIndex === props.index) {
                        return e.target.value;
                      }
                      return option;
                    }),
                  };
                }
                return field;
              })
            );
          }}
          value={fields[props.fieldIndex]?.options?.[props.index]}
        />
        {props.index > 1 ? (
          <button
            type="button"
            className=""
            title="Delete Option"
            onClick={handleDeleteOption}
          >
            <Trash size={20} />
          </button>
        ) : (
          <button
            type="button"
            className="cursor-not-allowed opacity-50"
            title="Delete Option"
            disabled
          >
            <Trash size={20} />
          </button>
        )}
      </span>
    </>
  );
}

export default memo(Options);

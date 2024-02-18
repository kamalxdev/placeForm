import { Trash } from "phosphor-react";
import { memo } from "react";




function Options(props: {index:any}) {
  return (
    <>
      <span className="flex items-center mt-2 transition">
        <h1 className="">{props.index}.</h1>
        <input
          type="text"
          className="w-auto border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 mx-2"
          placeholder={"Option "+ props.index}
        />
        <button type="button" className="field-delete-btn" title="Delete Field">
          <Trash size={20} />
        </button>
      </span>
    </>
  );
}



export default memo(Options);

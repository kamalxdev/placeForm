import { Trash } from "phosphor-react";
import { memo } from "react";
import Area from "./util/area";

function TextBoxz() {
  return (
    <Area>
      <h1>TEXTBOX</h1>
      <div className="relative flex m-2 items-center flex-wrap md:flex-nowrap sm:flex-wrap">
        <textarea rows={10} className="md:mr-6 h-auto w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"></textarea>
        <span className="flex mt-4 md:mt-0 justify-start">
          <button
            type="button"
            className="field-delete-btn"
            title="Delete Field"
          >
            <Trash size={22} />
          </button>
        </span>
      </div>
    </Area>
  );
}

export default memo(TextBoxz);

import { Trash } from "phosphor-react";
import { memo } from "react";

type TitleProps = {
  type: string;
};

function Title(props: TitleProps) {
  return (
    <>
      <h1>{props.type?.toUpperCase()} FIELD</h1>
      <div className="relative flex m-2 items-center flex-wrap md:flex-nowrap sm:flex-wrap">
        <input
          type="text"
          id="title-input-field"
          className=" md:mr-6 h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Title here"
          required
        />
        <span className="flex mt-4 md:mt-0 justify-start">
          <span className=" flex items-center justify-between mr-6">
            <input type="checkbox" className="check-box mr-2" />{" "}
            <p> Required</p>
          </span>
          <button
            type="button"
            className="field-delete-btn"
            title="Delete Field"
          >
            <Trash size={22} />
          </button>
        </span>
      </div>
    </>
  );
}

export default memo(Title);

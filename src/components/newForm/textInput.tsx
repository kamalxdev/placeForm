import React, { memo } from "react";
type TextInputProps = {
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};
 function TextInput(props: TextInputProps) {
  return (
    <>
      <input
          type="text"
          value={props.value}
          className=" md:mr-6 h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
          placeholder={props.placeholder}
          onChange={props.onChange}
          required
        />
    </>
  );
}
export default memo(TextInput);

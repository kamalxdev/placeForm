import React, { memo } from "react";
type TextInputProps = {
  placeholder: string;
  type: string;
  id?: string;
  disabled: boolean;
  class?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
 function TextInput(props: TextInputProps) {
  return (
    <>
      <input
        className={`flex h-10 w-full rounded-md border border-white/30 bg-transparent px-3 py-2 text-sm placeholder:text-white-600 focus:outline-none focus:ring-1 focus:ring-white/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 ${props.class}`}
        type={props.type}
        placeholder={props.placeholder}
        id={props.id}
        disabled={props.disabled ? true : false}
        onChange={props.onChange}
        required
      />
    </>
  );
}
export default memo(TextInput);

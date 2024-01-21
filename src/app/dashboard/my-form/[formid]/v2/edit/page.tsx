
import React from "react";

export default function NewForm({ params }: { params: { formid: string } }) {
  return(<>
    <div className="flex flex-col items-center justify-center min-h-screen py-2">{params.formid}</div>
  </>)
}

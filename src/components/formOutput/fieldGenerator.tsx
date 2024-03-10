// "use client";

import randomGenerator from "@/controllers/randomGenerator";
import Inputx from "./input";
import Dropdownx from "./dropdown";
import Checkboxx from "./checkbox";
import TextAreax from "./textarea";
import TextBoxx from "./textBox";
import FormSubmitBTN from "./formSubmitBTN";

type iprops = {
  fields: Array<any>;
  formid: string;
};

export default function FieldGenerator(props: iprops) {
  const allFields = props?.fields;

  return (
    <>
      <div className="relative w-10/12 lg:w-5/12 xl:w-6/12 2xl:w-6/12 h-auto py-5 flex-col  text-white flex items-center ">
        {allFields?.map((field: any,index) => {
          if (field.type === "text")
            return (
              <Inputx
                title={field.title}
                type="text"
                id={randomGenerator()}
                placeholder="Enter text here"
                required={field.required}
                key={field.title}
                uniqueID={field.uniqueID}
              />
            );
          if (field.type === "number")
            return (
              <Inputx
                title={field.title}
                type="number"
                id={randomGenerator()}
                placeholder="Enter number here"
                required={field.required}
                key={field.title}
                uniqueID={field.uniqueID}
              />
            );
          if (field.type === "email")
            return (
              <Inputx
                title={field.title}
                type="email"
                id={randomGenerator()}
                placeholder="Enter email here"
                required={field.required}
                key={field.title}
                uniqueID={field.uniqueID}
              />
            );
          if (field.type === "dropdown")
            return (
              <Dropdownx
                id={field._id}
                title={field.title}
                option={field.options}
                key={field.title}
                required={field.required}
                uniqueID={field.uniqueID}
                type="dropdown"
              />
            );
          if (field.type === "checkbox")
            return (
              <Checkboxx
                id={randomGenerator()}
                title={field.title}
                option={field.options}
                unique={randomGenerator()}
                required={field.required}
                key={field.title}
                uniqueID={field.uniqueID}
              />
            );
          if (field.type === "textarea")
            return (
              <TextAreax
                id={randomGenerator()}
                title={field.title}
                placeholder="Enter here...."
                required={field.required}
                key={field.title}
                type="textarea"
                uniqueID={field.uniqueID}
              />
            );
          if (field.type === "textbox") return <TextBoxx title={field.title} key={index} />;
        })}
      </div>
      <FormSubmitBTN formid={props.formid} />
    </>
  );
}

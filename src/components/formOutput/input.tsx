"use client"


import randomGenerator from "@/controllers/randomGenerator";


type iprops = {
  id: string;
  placeholder: string;
  type: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  required: boolean;
};

export default function Inputx(props: iprops) {
  const id=props.id;
  console.log("id: ", id,props.type);
  
  return (
    <div className="mt-4 relative w-full h-auto flex justify-center p-5 rounded-sm border flex-col border-black" key={id +props.title}>
      <label htmlFor={id} className="block text-sm text-gray-700 font-bold" key={props.title}> {props.title} </label>

            <input
                type={props.type}
                id={id}
                placeholder={props.placeholder}
                className="mt-4 w-full text-black shadow-sm sm:text-sm p-2 border-gray-700 focus:ring-blue-500 focus:border-blue-500"
                onChange={props.onChange}
                required={props.required}
                key={id +props.title+props.type}
            />
      
    </div>
  );
}
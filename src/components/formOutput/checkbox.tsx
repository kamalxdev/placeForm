'use client';

type iprops = {
    id: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    title: string;
    option: Array<string>;
    required?: boolean;
    unique:string;
    checkValue?:Array<string>;
  };
  
  export default function Checkboxx(props: iprops) {
    const ar=props.checkValue;
    return (
      <div className="mt-4 relative w-full h-auto flex justify-center p-5 rounded-sm border flex-col border-black" key={props.id +props.title}>
        <label
          htmlFor={props.id}
          className="block text-sm font-bold text-gray-900"
        >
          
          {props.title}
        </label>
          <div className="flex flex-col mt-4">
          {(props.option).map((option,index) => (
            <span className="text-black" key={props.id+index+option}>
                <input type="checkbox" id={props.id+index} name={props.unique} value={option} className="p-4" required={props.required}  onChange={props.onChange} checked={ar?.includes(option)|| false}  />
                <label htmlFor={props.id+index} className="ml-4">{option}</label>
            </span>
            
          ))}
          </div>
      </div>
    );
  }
  
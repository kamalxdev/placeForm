'use client';


type iprops = {
    id: string;
    placeholder: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    title: string;
    required: boolean;
};
  
  export default function TextAreax(props: iprops) {
    return (
      <div className="mt-4 relative w-full h-auto flex justify-center p-5 rounded-sm border flex-col border-black" key={props.id +props.title}>
        <label htmlFor={props.id} className="block text-sm text-gray-700 font-bold"> {props.title} </label>
  
                <textarea
                    id={props.id}
                    placeholder={props.placeholder}
                    className="resize-none mt-4 w-full text-black shadow-sm sm:text-sm p-2 border-gray-700 focus:ring-blue-500 focus:border-blue-500"
                    // onChange={props.onChange}
                    required={props.required}
                    rows={10}
                />
        
      </div>
    );
  }
  
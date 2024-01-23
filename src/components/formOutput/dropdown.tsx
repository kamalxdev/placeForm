type iprops = {
  id: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  option: Array<string>;
};

export default function Dropdownx(props: iprops) {
  return (
    <div className="mt-4 relative w-full h-auto flex justify-center p-5 rounded-sm border flex-col border-black">
      <label
        htmlFor={props.id}
        className="block text-sm font-bold text-gray-900"
      >
        
        {props.title}
      </label>

      <select
        name={props.title}
        id={props.id}
        className="mt-4 w-full   text-gray-700 sm:text-sm p-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500"
      >
        {(props.option).map((option,index) => (
          <option value={option} className="p-4" key={props.id+index}>{option}</option>
        )
        )}
      </select>
    </div>
  );
}

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
        className="block text-sm font-medium text-gray-900"
      >
        
        {props.title}
      </label>

      <select
        name={props.title}
        id={props.id}
        className="mt-1.5 w-full rounded-lg  text-gray-700 sm:text-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
      >
        {(props.option).map((option) => (
          <option value={option}>{option}</option>
        )
        )}
      </select>
    </div>
  );
}

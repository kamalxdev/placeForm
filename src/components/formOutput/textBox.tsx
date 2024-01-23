type iprops = {
    title: string;
};
  
  export default function TextBoxx(props: iprops) {
    return (
      <div className="mt-4 relative w-full h-auto flex justify-center p-5  flex-col border-black">
            <p className="block text-sm text-gray-700 font-bold"> {props.title} </p>
      </div>
    );
  }
  
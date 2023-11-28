export default function ShowAuthError(props: { msg: string }) {
  return (
    <span className="transition relative w-full h-4 p-1 text-red-400">
      {props.msg}
    </span>
  );
}

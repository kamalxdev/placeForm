import Link from "next/link";
import { memo } from "react";

function TableHeading({ name }: { name: string }) {
  return (
    <th scope="col" className=" px-4 py-3.5 text-left text-sm font-normal">
      <span>{name}</span>
    </th>
  );
}

const TableData = memo(function TableData({ children }: { children: React.ReactNode }) {
  return (
    <td className="whitespace-nowrap px-4 py-4">
      <div className="flex items-center">{children}</div>
    </td>
  );
});

const EditIcons = memo(function EditIcons
  ({
    children,
    button,
    href,
    onClick,
  }: {
    children: React.ReactNode;
    button?: boolean;
    href?: string;
    onClick?: () => void;
  }){
    return (
      <li className="w-auto transition rounded px-2 py-1 hover:border hover:border-black">
        {button ? (
          <button
            onClick={onClick}
            className="flex w-full items-center justify-between text-body-4 font-normal text-metal-600"
          >
            {children}
          </button>
        ) : (
          <Link
            href={href as string}
            className="flex w-full items-center justify-between text-body-4 font-normal text-metal-600"
          >
            {children}
          </Link>
        )}
      </li>
    );
  }
);

export { TableData, EditIcons};

export default memo(TableHeading);

import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import Image from "next/image";


interface addFormProps {
  name: string;
  image: string;
  email: string;
  title: string;
  department: string;
  role: string;
  key?: string;
}

export default function AddForm(props: addFormProps) {
  return (
    <>
      <tr key={props.name}>
        <td className="whitespace-nowrap px-4 py-4" key={props.name}>
          <div className="flex items-center">
            <div className="h-10 w-10 flex-shrink-0">
              <Image
                className="h-10 w-10 rounded-full object-cover"
                src={props.image}
                alt=""
              />
            
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">
                {props.name}
              </div>
              <div className="text-sm text-gray-700">{props.email}</div>
            </div>
          </div>
        </td>
        <td className="whitespace-nowrap px-12 py-4" key={props.name}>
          <div className="text-sm text-gray-900 ">{props.title}</div>
          <div className="text-sm text-gray-700">{props.department}</div>
        </td>
        <td className="whitespace-nowrap px-4 py-4 " key={props.name}>
          <span
            className="cursor-pointer inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800"
            title="Click to Disable"
          >
            Active
          </span>
        </td>
        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700" key={props.name}>
          {props.role}
        </td>
        <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium" key={props.name}>
          <Link href="#" className="text-gray-700">
            <MoreHorizontal/>
          </Link>
        </td>
      </tr>
    </>
  );
}

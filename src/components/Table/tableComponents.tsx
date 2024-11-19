import Link from "next/link";
import { memo } from "react";
import {
  DotsThreeOutline,
  Pencil,
  Trash,
  Copy,
  FileArrowUp,
  FileArrowDown,
  HardDrives,
} from "phosphor-react";
import { Button, Popover } from "keep-react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { iFormData } from "@/types/formData";

function TableHeading({ name }: { name: string }) {
  return (
    <th scope="col" className=" px-4 py-3.5 text-left text-sm font-normal">
      <span>{name}</span>
    </th>
  );
}

const TableData = memo(function TableData({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <td className="whitespace-nowrap px-4 py-4">
      <div className="flex items-center">{children}</div>
    </td>
  );
});

const EditIcons = memo(function EditIcons({
  children,
  button,
  href,
  onClick,
}: {
  children: React.ReactNode;
  button?: boolean;
  href?: string;
  onClick?: () => void;
}) {
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
});

const TableRow = memo(function TableRow({
  form,
  index,
  mode,
}: {
  form: iFormData;
  index: number;
  mode: string;
}) {
  const router = useRouter();
  const currentDate = new Date();
  // Delete form

  async function handledeleteform(
    formid: string,
    formtitle: string | undefined
  ) {
    let confirmation = confirm(
      `Are you sure you want to delete this ${mode} with title "${formtitle}" ?`
    );
    if (confirmation) {
      await axios
        .post(`/api/${mode}/delete/`, { formid: formid })
        .then((res) => {
          const data = res.data;
          alert(data.message);
          router.refresh();
        })
        .catch((err) => {
          console.log("Error in PostDeleteForm------->", err);
          alert("Error in deleting form");
        });
    }
  }

  // publish status change
  async function publishStatusChange(
    formid: string,
    changeToThisStatus: string
  ) {
    let confirmation = confirm(
      `Are you sure you want to ${changeToThisStatus} this ${mode}?`
    );
    if (confirmation) {
      await axios
        .post(`/api/${mode}/save/`, {
          id: formid,
          data: { state: changeToThisStatus },
        })
        .then((res) => {
          const data = res.data;
          alert(data.msg);
          router.refresh();
        })
        .catch((err) => {
          console.log("Error in PostStatusChange------->", err);
          alert("Error in changing status");
        });
    }
  }
  return (
    <tr
      key={index}
      className="border-gray-500 rounded-2xl transition hover:bg-gray-300"
    >
      <TableData>
        <div className="ml-4">
          <Link
            href={
              form.state == "Live" || form.state == "Published"
                ? `/${mode}/m/${form._id}/write`
                : ""
            }
            className="text-sm font-medium text-gray-900"
          >
            {form.title || "(Untitled)"}
          </Link>
          <div className="text-sm text-gray-700">
            {"Last updated on  " +
              form.updated_at.toLocaleString([], {
                dateStyle: "medium",
                // timeStyle: "short",
              })}
          </div>
        </div>
      </TableData>
      <TableData>
        <div>
          <div className="text-sm text-gray-900 ">
            {form?.start_date?.toLocaleDateString([], { dateStyle: "short" }) ||
              "00-00-0000"}
          </div>
          <div className="text-sm text-gray-700">
            {form.start_date?.toLocaleTimeString([], { timeStyle: "short" }) ||
              "00:00"}
          </div>
        </div>
      </TableData>
      <TableData>
        <div>
          <div className="text-sm text-gray-900 ">
            {form?.expiry_date?.toLocaleDateString([], {
              dateStyle: "short",
            }) || "00-00-0000"}
          </div>
          <div className="text-sm text-gray-700">
            {form?.expiry_date?.toLocaleTimeString([], {
              timeStyle: "short",
            }) || "00:00"}
          </div>
        </div>
      </TableData>
      <TableData>
        {form.state == "Published" ? (
          (form?.expiry_date as Date) > currentDate ? (
            <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
              {(form?.start_date as Date) > currentDate ? "Published" : "Live"}
            </span>
          ) : (
            <span className="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800">
              Expired
            </span>
          )
        ) : (
          <span
            className={`inline-flex rounded-full  px-2 text-xs font-semibold leading-5  ${
              form.state == "Live"
                ? "text-green-800 bg-green-100"
                : "text-red-800 bg-red-100"
            }`}
          >
            {form.state}
          </span>
        )}
      </TableData>
      <TableData>{form.Attempts || 0}</TableData>
      <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
        <Popover
          showDismissIcon={false}
          showArrow={false}
          className="w-52 border border-metal-300 p-2"
        >
          <Popover.Container className="!mt-0 !block">
            <ul>
              {form.state == "Live" && (
                <EditIcons
                  button
                  onClick={() => publishStatusChange(form._id, "Draft")}
                >
                  <span className="text-red-600">Draft</span>
                  <span>
                    <FileArrowDown color="red" />
                  </span>
                </EditIcons>
              )}
              {form.state == "Live" || form.state == "Published" ? (
                <EditIcons
                  button
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${mode}/m/${form._id}/write`
                    );
                    alert("Link Copied");
                  }}
                >
                  <span>Copy link</span>
                  <span>
                    <Copy />
                  </span>
                </EditIcons>
              ) : null}
              {form.state == "Published" && (
                <EditIcons
                  button
                  onClick={() => publishStatusChange(form._id, "Live")}
                >
                  <span className="text-green-600">Live now</span>
                  <span>
                    <FileArrowUp color="green" />
                  </span>
                </EditIcons>
              )}
              <EditIcons href={`/account/${mode}/${form._id}/responses`}>
                <span>Responses</span>
                <span>
                  <HardDrives />
                </span>
              </EditIcons>
              <EditIcons
                button
                onClick={() => handledeleteform(form._id, form.title)}
              >
                <span>Delete</span>
                <span>
                  <Trash />
                </span>
              </EditIcons>
              <EditIcons href={`/${mode}/v/${form._id}/edit`}>
                <span>Edit</span>
                <span>
                  <Pencil />
                </span>
              </EditIcons>
            </ul>
          </Popover.Container>
          <Popover.Action>
            <Button type="outlineGray" size="xs" circle={true}>
              <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
            </Button>
          </Popover.Action>
        </Popover>
      </td>
    </tr>
  );
});

export { TableRow };

export default memo(TableHeading);

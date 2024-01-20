"use client"
import { Badge, Button, Popover, Table } from "keep-react";
import {
  CalendarBlank,
  Crown,
  Cube,
  DotsNine,
  DotsThreeOutline,
  Flag,
  Pencil,
  Spinner,
  Trash,
  CalendarX,
  Eye,
} from "phosphor-react";
import Link from "next/link";
import axios from "axios";

type iform = {
  formData: 
    {
      _id: string;
      title?: string;
      created_at: Date,
      updated_at: string | Date,
      state: string,
      created_by: string,
      Attempts: number,
      expiry_date?: string | Date,
      fields?: any[];
      __v?: number;
    }[]
};
export default function FormTable(props: iform) {
  async function handledeleteform(formid: string) {
    const confirmation=confirm(`Are you sure you want to delete this form with #${formid} ?`);
    if (confirmation){
      await axios.post('/api/form/delete/',{formid:formid})
      .then((res) => {
        const data = res.data;
        alert(data.message);
        location.reload();
      })
      .catch((err)=>{
        console.log("Error in PostDeleteForm------->",err);
        alert("Error in deleting form");
      })
    }
  }
  const formData = props.formData;
  
  return (<>
    <section className="ml-4 mr-4">
      <Table>
        <Table.Caption>
          <div className="my-5 flex items-center justify-between px-6">
            <div className="flex items-center gap-5">
              <p className="text-body-1 font-semibold text-metal-600">Forms</p>
            </div>
            <div className="flex items-center gap-5">
              <Button type="outlineGray" size="sm">
                <span className="pr-2">
                  <Cube size={24} />
                </span>
                Filter
              </Button>
              <Button type="outlineGray" size="sm">
                <span className="pr-2">
                  <Cube size={24} />
                </span>
                Search
              </Button>
              <Link href="/dashboard/form" className="border-8">
                Add new Form
              </Link>
            </div>
          </div>
        </Table.Caption>
        <Table.Head>
          <Table.HeadCell className="min-w-[302px]">
            <p className="text-body-6 font-medium text-metal-400">Title</p>
          </Table.HeadCell>
          <Table.HeadCell
            className="min-w-[165px]"
            icon={<CalendarBlank size={14} color="#8897AE" />}
            iconPosition="left"
          >
            Date
          </Table.HeadCell>
          <Table.HeadCell
            className="min-w-[124px]"
            icon={<CalendarX size={14} color="#8897AE" />}
            iconPosition="left"
          >
            Expiry
          </Table.HeadCell>
          <Table.HeadCell
            className="min-w-[152px]"
            icon={<Spinner size={14} color="#8897AE" />}
            iconPosition="left"
          >
            State
          </Table.HeadCell>
          <Table.HeadCell
            className="min-w-[114px]"
            icon={<DotsNine size={14} color="#8897AE" />}
            iconPosition="left"
          >
            Attempt
          </Table.HeadCell>
          <Table.HeadCell className="min-w-[100px]" />
        </Table.Head>
        <Table.Body className="divide-gray-25 divide-y">
          {formData.map((form,index) => (
            <Table.Row className="bg-white" key={index}>
              <Table.Cell>
                <p className="text-body-4 font-medium text-metal-500">
                  {form.title || "Untitled"}
                </p>
              </Table.Cell>
              <Table.Cell>
                <p className="text-body-5 font-medium text-metal-500">
                  {(form.created_at).getDate()+ "-"+((form.created_at).getMonth()+1)+"-"+ (form.created_at).getFullYear()|| "00-00-0000"} 
                </p>
                <p className="text-body-6 font-normal text-metal-500">
                  {(form.created_at).getHours()+":"+(form.created_at).getMinutes()+":"+(form.created_at).getSeconds() ||"00:00:00"}
                </p>
              </Table.Cell>
              <Table.Cell>
                <p className="text-body-5 font-medium text-metal-500">
                  {(form.expiry_date)?.toString() || "00-00-0000"}
                </p>
                <p className="text-body-6 font-normal text-metal-500">
                  { "00:00"}
                </p>
              </Table.Cell>
              <Table.Cell>
                <div className="inline-block">
                  <Badge
                    colorType="light"
                    color="success"
                    icon={<Crown size={18} weight="light" />}
                    iconPosition="left"
                  >
                    {form.state || "Pending"}
                  </Badge>
                </div>
              </Table.Cell>
              <Table.Cell>
                <p className="text-body-5 font-medium text-metal-500">
                  {form.Attempts || "0"}
                </p>
              </Table.Cell>

              <Table.Cell>
                <Popover
                  showDismissIcon={false}
                  showArrow={false}
                  className="w-52 border border-metal-100 p-2"
                >
                  <Popover.Container className="!mt-0 !block">
                    <ul>
                    <li className="rounded px-2 py-1 hover:bg-metal-100">
                        <button className="flex w-full items-center justify-between text-body-4 font-normal text-metal-600">
                          <span>View</span>
                          <span>
                          <Eye/>
                          </span>
                        </button>
                      </li>
                      <li className="rounded px-2 py-1 hover:bg-metal-100">
                        <button className="flex w-full items-center justify-between text-body-4 font-normal text-metal-600" onClick={e=>{handledeleteform(form._id)}}>
                          <span>Delete</span>
                          <span>
                            <Trash />
                          </span>
                        </button>
                      </li>
                      <li className="rounded px-2 py-1 hover:bg-metal-100">
                        <button className="flex w-full items-center justify-between text-body-4 font-normal text-metal-600">
                          <span>Edit</span>
                          <span>
                            <Pencil />
                          </span>
                        </button>
                      </li>
                    </ul>
                  </Popover.Container>
                  <Popover.Action>
                    <Button type="outlineGray" size="xs" circle={true}>
                      <DotsThreeOutline
                        size={14}
                        color="#5E718D"
                        weight="bold"
                      />
                    </Button>
                  </Popover.Action>
                </Popover>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </section></>
  );
}

"use client";
import { Badge, Button, Popover, Table  } from "keep-react";
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

} from "phosphor-react";
import Link from "next/link";

export default function FormTable() {
  const formData = [
    {
      title: "Form Title",
      date: "2021-09-01",
      time: "12:00",
      expiry: "2021-09-01",
      expiry_time: "12:00",
      state: "Active",
      attempt: "1",
      key: "1",
    },
    {
      title: "User details",
      date: "2021-09-01",
      time: "12:00",
      expiry: "2021-09-01",
      expiry_time: "12:00",
      state: "pending",
      attempt: "10",
      key: "2",
    },
  ];
  return (
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
          {formData.map((form) => (
            <Table.Row className="bg-white" key={form.key}>
              <Table.Cell>
                <p className="text-body-4 font-medium text-metal-500">
                  {form.title}
                </p>
              </Table.Cell>
              <Table.Cell>
                <p className="text-body-5 font-medium text-metal-500">
                  {form.date}
                </p>
                <p className="text-body-6 font-normal text-metal-500">
                  {form.time}
                </p>
              </Table.Cell>
              <Table.Cell>
                <p className="text-body-5 font-medium text-metal-500">
                  {form.expiry}
                </p>
                <p className="text-body-6 font-normal text-metal-500">
                  {form.expiry_time}
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
                    {form.state}
                  </Badge>
                </div>
              </Table.Cell>
              <Table.Cell>
                <p className="text-body-5 font-medium text-metal-500">
                  {form.attempt}
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
    </section>
  );
}

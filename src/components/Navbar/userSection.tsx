"use client";
import { Dropdown } from "keep-react";
import Link from "next/link";
import { signOut } from "next-auth/react";

type iUserSection = {
  userItems: { name: string; href: string }[];
  username: string | undefined | null;
};

export default function UserSection(props: iUserSection) {
  return (
    <Dropdown
      label={props.username}
      size="sm"
      type="outlineGray"
      dismissOnClick={true}
    >
      {props.userItems.map((item) => (
        <Dropdown.Item key={item.name}>
          <Link href={item.href}>{item.name}</Link>
        </Dropdown.Item>
      ))}
      <Dropdown.Item key="signOUT">
        <button
          onClick={() => signOut({ callbackUrl: "/login", redirect: true })}
        >
          Log Out
        </button>
      </Dropdown.Item>
    </Dropdown>
  );
}

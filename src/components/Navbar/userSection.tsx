"use client";
import { Dropdown } from "keep-react";
import Link from "next/link";
import { signOut } from "next-auth/react";

type iUserSection = {
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

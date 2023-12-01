import React from "react";
import { ChevronDown} from "lucide-react";
import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import SignOutBtn from "./signOutBtn";
import NavbarResponsiveMenu from "./navbarResponsiveMenu";

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "Forms",
    href: "/forms",
  },
];
const userItems = [
  {
    name: "Account",
    href: "/account",
  },
  {
    name: "Settings",
    href: "/settings",
  },
];

export default async function Navbar() {
  const user = await getServerSession(authOptions)
  return (
    <div className="relative w-full bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
      <div className="inline-flex items-center space-x-2">
          <span className="font-bold text-2xl home-logo-style">
            <Link href="/">placeForm</Link>
          </span>
        </div>
        <div className="hidden grow items-start lg:flex">
          <ul className="ml-12 inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {user ? (
          <div className="hidden dropdown dropdown-hover lg:block">
            <label
              tabIndex={0}
              className="transition flex items-center border-2 px-3 py-1 hover:border-black rounded-md font-bold"
            >
              {user?.user?.name}&nbsp; <ChevronDown size={20} />
            </label>
            <ul
              tabIndex={0}
              className=" dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              {userItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="transition hover:bg-black hover:text-white hover:font-medium rounded-md"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <SignOutBtn />
              </li>
            </ul>
          </div>
        ) : (
          <div className="hidden space-x-2 lg:block">
            <Link
              href="/register"
              className="rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Register
            </Link>
            <Link
              href={"/login"}
              className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Log In
            </Link>
          </div>
        )}
        {/* // */}
      <NavbarResponsiveMenu name={user?user.user?.name:null} email={user?user.user?.email:null} menuItems={menuItems} userItems={userItems}/>
      </div>
    </div>
  );
}

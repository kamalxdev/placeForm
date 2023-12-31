import React from "react";
import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import NavbarResponsiveMenu from "./navbarResponsiveMenu";
import UserSection from "./userSection";
import AuthSection from "./authSection";


const menuItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
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
    name: "Blog",
    href: "/blog",
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
          <div className="hidden lg:block">
            <UserSection userItems={userItems} username={user?.user?.name}/>
          </div>
        ) : (
          <div className="hidden space-x-2 lg:block">
            <AuthSection />
          </div>
        )}
        {/* // */}
      <NavbarResponsiveMenu name={user?user.user?.name:null} email={user?user.user?.email:null} menuItems={menuItems} userItems={userItems}/>
      </div>
    </div>
  );
}

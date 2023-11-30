'use client';
import React from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";




interface iNavbarResponsiveMenu{
    name?:string | null,
    email?:string | null,
    menuItems:Array<any>,
    userItems:Array<any>
    key?:number
}



export default function NavbarResponsiveMenu(user:iNavbarResponsiveMenu) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (<>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span className="font-bold text-2xl home-logo-style">
                      <Link href="/">placeForm</Link>
                    </span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {user.menuItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </nav>
                </div>
                {user.name ? (
                  <div className="hidden dropdown dropdown-hover lg:block">
                    <label
                      tabIndex={0}
                      className="transition flex items-center border-2 px-3 py-1 hover:border-black rounded-md font-bold"
                    >
                      {user?.name}&nbsp; <ChevronDown size={20} />
                    </label>
                    <ul
                      tabIndex={0}
                      className=" dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      {user.userItems.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className="transition hover:bg-gray-300 hover:font-medium rounded-md"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className=" ml-5 mt-2 space-y-5">
                    <Link
                      href="/register"
                      className="w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Register
                    </Link>
                    <Link
                      href="/login"
                      className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Log In
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        </>
  );
}

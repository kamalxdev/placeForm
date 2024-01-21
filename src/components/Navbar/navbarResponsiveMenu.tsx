'use client';
import React from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import UserSection from "./userSection";
import AuthSection from "./authSection";




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
                  <div className="dropdown dropdown-hover ml-4 mt-4">
                    <UserSection
                      userItems={user.userItems}
                      username={user.name}/>
                  </div>
                ) : (
                  <div className="relative inline-block ml-4 mt-4 w-full space-x-5">
                    <AuthSection />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        </>
  );
}

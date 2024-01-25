// "use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Footer from "../footer";


type iprops = {
  title: string;
  description: string;
};

export default function Error404(props: iprops) {

  return (
    <div className="mx-auto w-full max-w-7xl px-2 md:px-4">
      <div className="my-12 flex items-center justify-center px-2 md:my-24 md:px-0">
        <div className="lg:flex lg:items-center lg:space-x-10">
          <Image
            src="https://illustrations.popsy.co/white/resistance-band.svg"
            alt="question-mark"
            className="h-[300px] w-auto"
            width={300}
            height={300}
          />
          <div>
            <p className="mt-6 text-sm font-semibold text-black">404 error</p>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
              {props.title}
            </h1>
            <p className="mt-4 text-gray-500">
            {props.description}
            </p>
            {/* <div className="mt-6 flex items-center space-x-3">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                <ArrowLeft size={16} className="mr-2" />
                Go back home
              </button>
              
            </div> */}
          </div>
        </div>
      </div>
      <hr />
      {/* footer */}
      <Footer />
    </div>
  );
}

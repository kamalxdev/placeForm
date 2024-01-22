"use client"

import React from 'react'
import Link from 'next/link'
import Footer from '@/components/footer'
import Image from 'next/image'


const whyChooseUs = [
  {
    title:"All-in-One Solution",
    content:"Craft quizzes, surveys, and forms with ease. No need for multiple platforms – placeForm is your one-stop destination."
  },
  {
    title:"User-Friendly Interface",
    content:"Whether you're a novice or an expert, our platform is designed for everyone. Enjoy the simplicity of form creation without compromising on functionality."
  },
  {
    title:"Innovative Features",
    content:"Stay ahead of the curve with our cutting-edge features. From question branching to real-time analytics, we've got it all."
  },
  {
    title:"Dedicated Support",
    content:"Our support team is ready to assist you with any questions or concerns. Your success is our priority."
  },
]
export default function Home() {

  return (
    <div className="w-full lg:mt-8">
      {/* Hero Section */}
      <div className="relative w-full bg-white">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
            <div className="mt-8 flex max-w-max items-center space-x-2 rounded-full bg-gray-100 p-1">
              {/* <div className="rounded-full bg-white p-1 px-2">
                <p className="text-sm font-medium">We&apos; hiring</p>
              </div> */}
              <p className="text-sm font-medium">Welcome to placeForm &rarr;</p>
            </div>
            <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
            Elevate your form creation game with placeForm
            </h1>
            <p className="mt-8 text-lg text-gray-700">
            The platform that goes beyond expectations. Whether you&apos;re crafting engaging quizzes or creating versatile forms, we&apos;ve got you covered. Unleash your creativity, gather valuable insights, and streamline data collection with our intuitive form builder.
            </p>
            
            <div className='mt-8 flex items-start space-x-2'>
                <button
                  type="button"
                  onClick={() => {location.href = '/dashboard'}}
                  className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Go to Dashboard
                </button>
              </div>
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
            <Image
              className="aspect-[3/2] inset-0 grayscale bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
              src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
              width={800}
              height={100}
            />
          </div>
        </div>
      </div>
      {/* Features Section */}
      <div className="mx-auto my-32 max-w-7xl px-2 lg:px-8">
        <div className="grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
              <svg
                className="h-9 w-9 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                />
              </svg>
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Versatility Redefined</h3>
            <p className="mt-4 text-sm text-gray-600">
            Create quizzes, surveys, feedback forms, and more, all in one place. Our platform adapts to your needs, offering a versatile form-building experience.


            </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
              <svg
                className="h-9 w-9 text-orange-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Seamless Data Management</h3>
            <p className="mt-4 text-sm text-gray-600">
            Gather responses effortlessly and analyze them in real-time. Our platform provides detailed insights, helping you make informed decisions.
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <svg
                className="h-9 w-9 text-green-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Effortless Form Creation</h3>
            <p className="mt-4 text-sm text-gray-600">
            Designing forms and quizzes is a breeze with our user-friendly interface. Customize layouts, choose question types, and create visually stunning forms effortlessly.
            </p>
          </div>
          <div>
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
              <svg
                className="h-9 w-9 text-red-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
            </div>
            <h3 className="mt-8 text-lg font-semibold text-black">Responsive Design</h3>
            <p className="mt-4 text-sm text-gray-600">
            Your forms will look great on any device, ensuring a smooth experience for both creators and respondents.
            </p>
          </div>
        </div>
      </div>
      {/* FAQs */}
      <section className="mx-auto max-w-7xl bg-gray-50 px-2 py-10 md:px-0">
        <div>
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Why Choose placeForm?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
            Our Vision is to be the leading platform that seamlessly combines form and quiz creation, offering unparalleled versatility to our users.
            </p>
          </div>
          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 md:mt-16 md:grid-cols-2">
            {whyChooseUs.map((reason, i) => (
              <div key={i}>
                <h2 className="text-xl font-semibold text-black">{reason.title}</h2>
                <p className="mt-6 text-sm leading-6 tracking-wide text-gray-500">{reason.content}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-gray-600">
          Ready to transform your form and quiz creation experience?&nbsp;
            <Link href="/register" title="" className="black font-semibold hover:underline">
              Register
            </Link>
             &nbsp;today and unlock the possibilities!
          </p>
        </div>
      </section>

      {/* footer */}
      <Footer />
    </div>
  )
}

"use client";
import React from "react";
import { ArrowRight, Ban } from "lucide-react";
import Link from "next/link";
import axios from "axios";
import ShowAuthError from "@/components/showAuthError";
import { useRouter} from "next/navigation";
import { signIn } from "next-auth/react";


export default function RegisterPage() {
  const [Auth, setAuth] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = React.useState<boolean>(false);
  const [validateError, setValidateError] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const [AuthError, setAuthError] = React.useState("");
  const router = useRouter();

  async function PostRegisterData(loginwith: string, userdata: any) {
    setLoading(true);
    await axios
      .post("/api/auth/register", { ...userdata, loginWith: loginwith })
      .then((res) => {
        setLoading(false);
        const data = res.data;
        if (data.status == 200) {
          router.push(`/login?msg=${data.msg}`);
        } else {
          if (typeof data.msg == "string") {
            setAuthError(data.msg);
          } else {
            setValidateError(data.msg);
          }
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log("RegisterWithToken error------>", err);
      });
  }
 
  return (
    <>
      <section>
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-center text-2xl font-bold leading-tight text-black">
              Register to create account
            </h2>
            <p className="mt-2 text-center text-base text-gray-600">
              Already have an account?{" "}
              <Link
                href="/login"
                title=""
                className="font-medium text-black transition-all duration-200 hover:underline"
              >
                Log In
              </Link>
            </p>
            {AuthError ? (
              <div className=" mt-4 transition flex items-center justify-center rounded-md w-full h-full p-1 bg-red-400 text-black font-bold">
                <Ban size={16} />
                <span className="ml-1">{AuthError}</span>
              </div>
            ) : null}
            <form className="mt-8">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Full Name{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Full Name"
                      id="name"
                      name="name"
                      title="name"
                      onChange={(e) =>
                        setAuth({ ...Auth, name: e.target.value })
                      }
                    ></input>
                  </div>
                </div>
                {validateError?.name ? (
                  <ShowAuthError msg={validateError.name} />
                ) : null}
                <div>
                  <label
                    htmlFor="email"
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      id="email"
                      name="email"
                      title="email"
                      onChange={(e) =>
                        setAuth({ ...Auth, email: e.target.value })
                      }
                    ></input>
                  </div>
                </div>
                {validateError?.email ? (
                  <ShowAuthError msg={validateError.email} />
                ) : null}
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Password{" "}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      id="password"
                      name="password"
                      title="password"
                      onChange={(e) =>
                        setAuth({ ...Auth, password: e.target.value })
                      }
                    ></input>
                  </div>
                </div>
                {validateError?.password ? (
                  <ShowAuthError msg={validateError.password} />
                ) : null}
                <div>
                  <button
                    type="button"
                    onClick={(e) => PostRegisterData("credentials", Auth)}
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Create Account{" "}
                    {loading ? (
                      <span className="loading loading-dots loading-sm ml-3"></span>
                    ) : (
                      <ArrowRight className="ml-2" size={16} />
                    )}
                  </button>
                </div>
              </div>
            </form>
            <div className="mt-3 space-y-3">
              <button
                type="button"
                onClick={e=>signIn("google", {
                  callbackUrl: "/?registerWithGoogle=true",
                  redirect: false,
                })}
                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
              >
                <span className="mr-2 inline-block">
                  <svg
                    className="h-6 w-6 text-rose-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                  </svg>
                </span>
                Sign up with Google
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { signOut } from "next-auth/react";

export default function SignOUTbtn() {
  console.log("signing out");

  return (
    <button
      type="button"
      onClick={() => alert("Signing out")}
      className="transition hover:bg-black hover:text-white hover:font-medium rounded-md"
    >
      Sign Out
    </button>
  );
}

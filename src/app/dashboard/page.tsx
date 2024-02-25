import type { Metadata } from "next";
import "@/app/globals.css";
import FormTable from "@/components/formTable/formTable";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/options";
import { igetUSER } from "@/types/getUSER";
import connect from "@/db/mongo.config";
import USER from "@/models/user";
import FORM from "@/models/form";
import { iFormData } from "@/types/formData";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard for the form creator app.",
};


export default async function Form() {
  const {user} = await getServerSession(authOptions) as igetUSER
  if (!user){
    return(<><h1>Please Login</h1></>  )
  }
  connect();
  const UserDataOnDB= await USER.findOne({email:user.email})
  const forms = await FORM.find({created_by:UserDataOnDB._id}) as iFormData[]
  
  return (
    <>
      <FormTable formData={forms}/>
    </>
  );
}

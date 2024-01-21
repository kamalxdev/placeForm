import type { Metadata } from "next";
import "@/app/globals.css";
import FormTable from "@/components/formTable/formTable";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/options";
import { igetUSER } from "@/types/getUSER";
import connect from "@/db/mongo.config";
import USER from "@/models/user";
import FORM from "@/models/form";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Generated by create next app",
};

type iFormData = {
  _id: string;
  title?: string;
  created_at: Date,
  updated_at: Date,
  state: string,
  created_by: string,
  Attempts: number,
  expiry_date: Date,
  fields?: Array<any>;
}

export default async function Form() {
  const {user} = await getServerSession(authOptions) as igetUSER
  if (!user){
    return(<><h1>Please Login</h1></>  )
  }
  connect();
  const UserDataOnDB= await USER.findOne({email:user.email})
  const forms = await FORM.find({created_by:UserDataOnDB._id}) as iFormData[];
  
  return (
    <>
      <FormTable formData={forms}/>
    </>
  );
}

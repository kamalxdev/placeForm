import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/options";
import { igetUSER } from "@/types/getUSER";
import FORM from "@/models/form";
import USER from "@/models/user";


export async function GET(request: Request) {
    const session= await getServerSession(authOptions) as igetUSER;
    const user = session?.user;
    if (!user){
        return Response.json({message:"Please Login",status:401})
    }
    const UserDataOnDB= await USER.findOne({email:user.email})
    if (!user || !UserDataOnDB){
        return Response.json({message:"User not found in Database",status:401})
    }



    const form = await FORM.find({created_by:UserDataOnDB._id})
    if(!form){
        return Response.json({message:"No forms found",status:404})
    }

    return Response.json({user,form,status:200})
}
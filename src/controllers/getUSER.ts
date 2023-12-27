import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";


export default async function getUSER(){
    return await getServerSession(authOptions)
}
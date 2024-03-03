
import { NextRequest, NextResponse } from "next/server";
import USER from "@/models/user";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../[...nextauth]/options";
import { igetUSER } from "@/types/getUSER";




export async function GET(req: NextRequest) {
  const user = await getServerSession(authOptions) as igetUSER;
  try {
    if (!user) {
      return NextResponse.json({ msg: "Please Login", status: 400 }, { status: 200})
    }
      const userdetails= await USER.findOne({email:user?.user?.email});
      if (userdetails) {
        return NextResponse.json({ msg: "User found",user:userdetails, status: 200 }, { status: 200})
      }
      return NextResponse.json({ msg: "User not found", status: 400 }, { status: 200})
  } catch (error) {
    console.log("GetUser error -------->", error);
    return NextResponse.json({ msg: "Error getting user", status: 400 }, { status: 200})
    
  }
}
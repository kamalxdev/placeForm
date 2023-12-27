import getUSER from "@/controllers/getUSER";
import { NextRequest, NextResponse } from "next/server";





export async function GET(req: NextRequest) {
  const user = await getUSER();
  if (!user) {
    return NextResponse.json({ msg: "Please Login", status: 400 }, { status: 200})
  }
  return NextResponse.json({ msg: "User found",user, status: 200 }, { status: 200})
}
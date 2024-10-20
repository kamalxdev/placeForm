import { NextRequest, NextResponse } from "next/server";
import FORM from "@/models/form";


export async function POST(req: NextRequest) {
    const body=await req.json();
    const formid=body.formid;
    console.log("formid",formid);
    
    try {
        const formDelete=await FORM.findByIdAndDelete(formid);
        if (formDelete){
          return NextResponse.json({message:`Form with #${formid} Deleted Successfully`,status:200},{status:200})
        }else{
          return NextResponse.json({message:`Form with #${formid} not found`,status:400},{status:200})
        }
    } catch (error) {
        console.log("PostDeleteFormData error -------->", error);
        return NextResponse.json({message:"Error deleting Form",status:400},{status:200})
    }
}
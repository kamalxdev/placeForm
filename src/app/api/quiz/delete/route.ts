import { NextRequest, NextResponse } from "next/server";
import QUIZ from "@/models/quiz";


export async function POST(req: NextRequest) {
    const body=await req.json();
    const formid=body.formid;
    console.log("formid",formid);
    
    try {
        const formDelete=await QUIZ.findByIdAndDelete(formid);
        if (formDelete){
          return NextResponse.json({message:`Quiz with #${formid} Deleted Successfully`,status:200},{status:200})
        }else{
          return NextResponse.json({message:`Quiz with #${formid} not found`,status:400},{status:200})
        }
    } catch (error) {
        console.log("PostDeleteFormData error -------->", error);
        return NextResponse.json({message:"Error deleting Quiz",status:400},{status:200})
    }
}
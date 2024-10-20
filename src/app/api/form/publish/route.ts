import { NextRequest, NextResponse } from "next/server";
import Forms from "@/models/form";


export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const form = await Forms.findByIdAndUpdate(body.form_id,{fields:body.fields,$set:body.data});
        if(!form) {
            return NextResponse.json({ msg: "Form not found", status: 400 }, { status: 200});
        }
        return NextResponse.json({ msg: "Form field submitted successfully", status: 200 }, { status: 200});
        
    } catch (error) {
        console.log("PostFormFieldData error -------->", error);
    }
}
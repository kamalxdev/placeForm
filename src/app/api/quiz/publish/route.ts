import { NextRequest, NextResponse } from "next/server";
import QUIZ from "@/models/quiz";


export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const quiz = await QUIZ.findByIdAndUpdate(body.form_id,{fields:body.fields,$set:body.data});
        if(!quiz) {
            return NextResponse.json({ msg: "Quiz not found", status: 400 }, { status: 200});
        }
        return NextResponse.json({ msg: "Quiz field submitted successfully", status: 200 }, { status: 200});
        
    } catch (error) {
        console.log("PostFormFieldData error -------->", error);
    }
}
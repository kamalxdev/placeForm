import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        console.log("PostFormFieldData body -------->", body);
        return NextResponse.json({ msg: "Form field submitted successfully", status: 200 }, { status: 200});
        
    } catch (error) {
        console.log("PostFormFieldData error -------->", error);
        
    }
}
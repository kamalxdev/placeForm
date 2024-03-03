import connect from "@/db/mongo.config";
import { NextRequest, NextResponse } from "next/server";
import RESPONSES from "@/models/responses";


connect();
export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        // const form = await Forms.findByIdAndUpdate(body.formid,{$push:{responses:body.response}});
        if(body.user){
            var response= await RESPONSES.create({responded_user:body.user, response:body.response, form:body.formid});
        }else{
            var response= await RESPONSES.create({response:body.response, form:body.formid});
        }

        if(!response) {
            return NextResponse.json({ msg: "Form not found", status: 400 }, { status: 200});
        }
        return NextResponse.json({ msg:"Form Submitted succesfully", status: 200 }, { status: 200});
        
    } catch (error) {
        console.log("PostFormFieldData error -------->", error);
        return NextResponse.json({ msg: error, status: 400 }, { status: 200});
    }
}
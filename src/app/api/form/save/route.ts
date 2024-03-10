import { NextRequest, NextResponse } from "next/server";
import FORM from "@/models/form";
import connect from "@/db/mongo.config";


export async function POST(req:NextRequest){
    const body = await req.json();
    connect()
    try {
        const form = await FORM.findByIdAndUpdate(body.id,{$set:body.data,updated_at:Date.now()});
        if(form){
            return NextResponse.json({status:200,msg:"Form Updated Successfully"},{status:200});
        }else{
            return NextResponse.json({status:400,msg:"Error updating form"},{status:200})
        }
    } catch (error) {
        console.log("Error from SavePostRequest ------> ",error);
        return NextResponse.json({status:400,msg:"Internal Server Error"},{status:200})
    }
    
}
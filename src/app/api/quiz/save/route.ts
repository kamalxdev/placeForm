import { NextRequest, NextResponse } from "next/server";
import QUIZ from "@/models/quiz";
import connect from "@/db/mongo.config";


export async function POST(req:NextRequest){
    const body = await req.json();
    connect()
    try {
        const quiz = await QUIZ.findByIdAndUpdate(body.id,{$set:body.data,updated_at:Date.now()});
        if(quiz){
            return NextResponse.json({status:200,msg:"Quiz Updated Successfully"},{status:200});
        }else{
            return NextResponse.json({status:400,msg:"Error updating quiz"},{status:200})
        }
    } catch (error) {
        console.log("Error from SavePostRequest ------> ",error);
        return NextResponse.json({status:400,msg:"Internal Server Error"},{status:200})
    }
    
}
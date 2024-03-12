import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/options";
import { igetUSER } from "@/types/getUSER";
import QUIZ from "@/models/quiz";
import USER from "@/models/user";
import RESPONSES from "@/models/responses";
import connect from "@/db/mongo.config";

connect();

export async function GET(request: Request) {
    const session= await getServerSession(authOptions) as igetUSER;
    try {
        const user = session?.user;
        if (!user){
            return Response.json({message:"Please Login",status:401})
        }
        const UserDataOnDB= await USER.findOne({email:user.email})
    if (!user || !UserDataOnDB){
        return Response.json({message:"User not found in Database",status:401})
    }



    const quiz = await QUIZ.find({created_by:UserDataOnDB._id})
    if(!quiz){
        return Response.json({message:"No forms found",status:404})
    }

    const formWithAttempts = quiz.map(async (formx)=>{
        const responseofcurrentform = await RESPONSES.find({quiz:formx._id})
        
        return {...formx._doc,Attempts:responseofcurrentform.length}
    })
    return Response.json({data:{user,quiz:await Promise.all(formWithAttempts)},status:200})

    } catch (error) {
        console.log(error);
        return Response.json({message:{
            title:"Internal Server Error",
            description:"There is an error with the Server. Please try again later"
        },status:500})
    }
}
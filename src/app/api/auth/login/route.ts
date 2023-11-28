import connect from "@/db/mongo.config";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/user";
import { loginSchema } from "@/app/validate/userSchema";
import vine , { errors }from "@vinejs/vine";
import ErrorReporter from "@/app/validate/errorReporter";
import bcrypt from "bcryptjs";

connect();


export async function POST(req:NextRequest) {
    try {
        const {email,password} = await req.json();

        // validating data from login schema, vine js

        const validator=vine.compile(loginSchema);
        validator.errorReporter=()=>new ErrorReporter(); 
        await validator.validate({email,password});


        // checking if user exists
        const userExists:any= await User.findOne({email});
        console.log(userExists);
        
        if(userExists){
            const comparePassword= bcrypt.compareSync(password,userExists.password);
            if(comparePassword){
                return NextResponse.json({msg:"User logged in successfully" ,status:200},{status:200})
            }
            return NextResponse.json({msg:"Invalid password",status:400},{status:200});
        }
        else{
            return NextResponse.json({msg:"User does not exist" ,status:400},{status:200});
        }
    } catch (error) {
        if (error instanceof errors.E_VALIDATION_ERROR) {
            return NextResponse.json({msg:error.messages,status:400},{status:200});
        }
    }
}
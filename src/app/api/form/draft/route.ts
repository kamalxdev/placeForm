import connect from "@/db/mongo.config";
import { NextRequest, NextResponse } from "next/server";
import Forms from "@/models/form";
import Users from "@/models/user";
import getUSER from "@/controllers/getUSER";

connect();
export async function POST(req: NextRequest) {
    const USER=await getUSER();
    try {
        const body = await req.json();
        const form = await Forms.findByIdAndUpdate(body.form_id, { $push: { fields: body.field } });
        if(form && USER) {
            var user = await Users.findOneAndUpdate({ email: USER.user?.email }, { $push: { forms: form._id } });
        }
        if(!form || !user) {
            return NextResponse.json({ msg: "Form not found", status: 400 }, { status: 200});
        }
        return NextResponse.json({ msg: "Form field submitted successfully", status: 200 }, { status: 200});
        
    } catch (error) {
        console.log("PostFormFieldData error -------->", error);
        
    }
}
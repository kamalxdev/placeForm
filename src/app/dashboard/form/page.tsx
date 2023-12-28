

import connect from "@/db/mongo.config";

import Forms from "@/models/form";
import { redirect } from "next/navigation";


connect();

export default async function NewFormID() {
    
    try {
        var formID = await Forms.create({});
    } catch (error) {
        console.log("NewFormID error ------>",error);
    }
    if (formID) {
        return redirect(`/dashboard/form/${formID._id}`);
    }
}
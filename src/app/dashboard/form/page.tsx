

import connect from "@/db/mongo.config";

import form from "@/models/form";
import { redirect } from "next/navigation";


connect();

export default async function NewFormID() {
    
    try {
        var formID = await form.create({});
    } catch (error) {
        console.log("NewFormID error ------>",error);
    }
    if (formID) {
        return redirect(`/dashboard/form/${formID._id}`);
    }
}


import getUSER from "@/controllers/getUSER";
import connect from "@/db/mongo.config";

import Forms from "@/models/form";
import { redirect } from "next/navigation";
import Users from "@/models/user";
import { igetUSER } from "@/types/getUSER";

connect();

export default async function NewFormID() {
    const USER =await getUSER() as igetUSER;
    try {
        var formID = await Forms.create({});
    } catch (error) {
        console.log("NewFormID error ------>",error);
    }
    if (formID) {
        await Users.findOneAndUpdate({ email: USER.user?.email }, { $push: { forms: formID } });
        return redirect(`/dashboard/form/${formID._id}`);
    }
}
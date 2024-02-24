

import getUSER from "@/controllers/getUSER";
import connect from "@/db/mongo.config";

import FORM from "@/models/form";
import { redirect } from "next/navigation";
import USER from "@/models/user";
import { igetUSER } from "@/types/getUSER";
import Loader from "@/components/loader/loader";

connect();



export default async function NewFormID() {
    const User =await getUSER() as igetUSER;
    try {
        if(User){
            var userID= await USER.findOne({email:User.user?.email});
            if(userID){
                var formID = await FORM.create({created_by : userID._id });
            }
        }
    } catch (error) {
        console.log("NewFormID error ------>",error);
    }
    if (formID) {
        return redirect(`/form/v/${formID._id}/edit`);
    }
    return <Loader />;
}
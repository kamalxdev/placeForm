import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/options";
import { igetUSER } from "@/types/getUSER";
import USER from "@/models/user";
import FORM from "@/models/form";
import connect from "@/db/mongo.config";

export async function GET(request: Request) {
  try {
    connect();
    const session = (await getServerSession(authOptions)) as igetUSER;
    const user = session?.user;
    if (!user) {
      return Response.json({ message: "Please Login", status: 401 });
    }
    const UserDataOnDB = await USER.findOne({ email: user.email });
    if (!user || !UserDataOnDB) {
      return Response.json({
        message: "User not found in Database",
        status: 401,
      });
    }
    const form = await FORM.create({ created_by: UserDataOnDB._id });
    if (form) {
      return Response.json({ formID: form._id, status: 200 });
    }
    return Response.json({ message: "Error in making a new form", status: 500 });

  } catch (error) {
    console.log("NewFormID error ------>", error);
    return Response.json({ message: "Internal Server Error", status: 500 });
    
  }
}

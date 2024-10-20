import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/options";
import { igetUSER } from "@/types/getUSER";
import USER from "@/models/user";
import QUIZ from "@/models/quiz";

export async function GET(request: Request) {
  const session = await getServerSession(authOptions) as igetUSER;
  try {
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
    const quiz = await QUIZ.create({ created_by: UserDataOnDB._id });
    if (quiz) {
      return Response.json({ ID: quiz._id, status: 200 });
    }
    return Response.json({ message: "Error in making a new quiz", status: 500 });

  } catch (error) {
    console.log("NewFormID error ------>", error);
    return Response.json({ message: "Internal Server Error", status: 500 });
    
  }
}

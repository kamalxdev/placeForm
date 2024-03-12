import connect from "@/db/mongo.config";
import QUIZ from "@/models/quiz";
import USER from "@/models/user";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/options";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const mode = searchParams.get("mode");
  const userSession = await getServerSession(authOptions);

  connect();
  try {
    const quiz = await QUIZ.findById(id);
    if (!quiz) {
      return Response.json({
        error: {
          title: "We cannot find this quiz",
          description:
            "The page you are looking for might have been removed had its name changed or is temporarily unavailable.",
        },
        status: 400,
      });
    }
    const user = await USER.findById(quiz.created_by);

    if (mode == "write") {
      const current = new Date();
      const start = quiz?.start_date;
      if (quiz.state != "Live" && current < start) {
        return Response.json({
          error: {
            title: "This quiz is not Live yet",
            description: "Please wait for the quiz to be published.",
          },
          status: 400,
        });
      }
      const expiry = quiz?.expiry_date;
      if (quiz.state != "Live" && current > expiry) {
        return Response.json({
          error: {
            title: "This quiz is expired",
            description: "You are not allowed to access this quiz",
          },
          status: 400,
        });
      }
    } else if (mode == "edit") {
      if (userSession?.user?.email != user?.email) {
        return Response.json({
          error: {
            title: "You are not allowed to access this quiz",
            description: "Please make sure you have the correct link.",
          },
          status: 400,
        });
      }
    } else {
      return Response.json({
        error: {
          title: "Incorrect Link",
          desciption: "Please make sure you have the correct link.",
          status: 500,
        },
        status: 400,
      });
    }
    return Response.json({
      data: {
        id: quiz.id,
        fields: quiz.fields,
        title: quiz.title,
        description: quiz.description,
        user: user?.name,
      },
      message: "Form Fetched Successfully",
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return Response.json({
      error: {
        title: "Incorrect Link",
        desciption: "Please make sure you have the correct link.",
        status: 500,
      },
      status: 400,
    });
  }
}

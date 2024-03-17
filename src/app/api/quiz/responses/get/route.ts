import RESPONSES from "@/models/responses";
import QUIZ from "@/models/quiz";
import connect from "@/db/mongo.config";

export async function POST(request: Request) {
  connect()
  const {id} = await request.json()
  if (id) {
    try {
      var quiz = await QUIZ.findById(id);
      if (!quiz) {
        return Response.json({
          message: {
            title: "We cannot find this quiz",
            description:
              "The page you are looking for might have been removed had its name changed or is temporarily unavailable.",
          },
          status: 404,
        });
      }
      var responses = await RESPONSES.find({ quiz: id });
      console.log("Responses: ",responses);
      
      if (!responses) {
        return Response.json({
          message: {
            title: "We cannot fetch the responses for this quiz",
            description:
              "The page you are looking for might have been removed had its name changed or is temporarily unavailable.",
          },
          status: 404,
        });
      }
      const filteredResponses = responses.map((response) => {
        return {
          name: response.name,
          response: response.response,
        };
      });

      const filteredForm = {
        title: quiz.title,
        fields: quiz.fields,
      }
      return Response.json({ form:filteredForm, responses:filteredResponses,status: 200 });

    } catch (error) {
      console.log(error);
      return Response.json({
        message: {
          title: "Incorrect Link",
          description: "Please make sure you have the correct link",
        },
        status: 400,
      });
    }
  }
  const data = await request.json();

  return Response.json({ id, data });
}

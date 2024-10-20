import RESPONSES from "@/models/responses";
import FORM from "@/models/form";

export async function POST(request: Request) {
  const {id} = await request.json()
  if (id) {
    try {
      var form = await FORM.findById(id);
      if (!form) {
        return Response.json({
          message: {
            title: "We cannot find this form",
            description:
              "The page you are looking for might have been removed had its name changed or is temporarily unavailable.",
          },
          status: 404,
        });
      }

      var responses = await RESPONSES.find({ form: id });
      if (!responses) {
        return Response.json({
          message: {
            title: "We cannot fetch the responses for this form",
            description:
              "The page you are looking for might have been removed had its name changed or is temporarily unavailable.",
          },
          status: 404,
        });
      }
      const filteredResponses = responses.map((response) => {
        return {
          response: response.response,
        };
      });
      const filteredForm = {
        title: form.title,
        fields: form.fields,
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

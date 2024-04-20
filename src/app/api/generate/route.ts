import { GoogleGenerativeAI } from "@google/generative-ai";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/options";
import { igetUSER } from "@/types/getUSER";
import QUIZ from "@/models/quiz";
import USER from "@/models/user";
import randomGenerator from "@/controllers/randomGenerator";

export async function POST(request: Request) {
  const session = (await getServerSession(authOptions)) as igetUSER;
  const user = session?.user;
  if (!user) {
    return Response.json({ message: "Please Login", status: 400 });
  }
  const UseronDB = await USER.findOne({ email: user.email });
  if (!UseronDB) {
    return Response.json({
      message: "User not found in Database",
      status: 400,
    });
  }
  const body = await request.json();
  if (!body.prompt) {
    return Response.json({ msg: "Prompt is required", status: 400 });
  }
  try {
    const genAI = new GoogleGenerativeAI(
      process.env.GOOGLE_GENERATIVE_TOKEN as string
    );
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `Generate a JSON response exclude any unwanted space just give a simple json output in this format {quiztitle: "title", quizdescription: "description", questions: [{title: "question", options: ["option1", "option2", "option3", "option4"], correctOption: index of the option}, ...], which has a quiz title and decription and 10 quiz on the topic '${body.prompt}' `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    const filteredText = text.replaceAll("```json", " ").replaceAll("``` json", " ").replaceAll("'''", " ").replaceAll("..."," ").replaceAll("```"," ");
    const parsedText = JSON.parse(filteredText);
    const fields= parsedText.questions.map((question: any) =>  {
        return {
            ...question,
            uniqueID:randomGenerator()
        };
    });
    const quiz=await QUIZ.create({
      created_by: UseronDB._id,
      state: "pending",
      title: parsedText?.quizTitle || parsedText?.quiztitle,
      description: parsedText?.quizDescription || parsedText?.quizdescription,
      fields,
    });
    if(!quiz){
        return Response.json({ msg: "Error while saving quiz", status: 400 });
    }
    return Response.json({ quiz,text,parsedText,filteredText,status: 200 });
  } catch (error) {
    console.log("Error while generating a response", error);
    return Response.json({
      msg: "Error while generating a response",
      status: 400,
    });
  }
}

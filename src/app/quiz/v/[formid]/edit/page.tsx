
import Error404 from "@/components/errors/404";
import NewQuizCreater from "@/components/newQuiz/newQuiz";
import connect from "@/db/mongo.config";
import QUIZ from "@/models/quiz"


connect();
export default async function NewQuiz({ params }: { params: { formid: string } }) {
  try {
    
    var quiz = await QUIZ.findById(params.formid);
    if (!quiz) {
      return(<Error404 title="We cannot find this quiz" description="The page you are looking for might have been removed had its name changed or is temporarily unavailable."/>)
    }
  } catch (error) {
    console.log(error);
    return(<Error404 title="Incorrect Link" description="Please make sure you have the correct link"/>)
  }
  ;
  return (
    <>
      <NewQuizCreater id={params.formid} updateform={quiz} />
    </>
  );
}

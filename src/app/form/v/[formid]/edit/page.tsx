
import Error404 from "@/components/errors/404";
import NewFormCreater from "@/components/newForm/newForm";
import connect from "@/db/mongo.config";
import FORM from "@/models/form"


connect();
export default async function NewForm({ params }: { params: { formid: string } }) {
  try {
    
    var form = await FORM.findById(params.formid);
    if (!form) {
      return(<Error404 title="We cannot find this form" description="The page you are looking for might have been removed had its name changed or is temporarily unavailable."/>)
    }
  } catch (error) {
    console.log(error);
    return(<Error404 title="Incorrect Link" description="Please make sure you have the correct link"/>)
  }
  ;
  return (
    <>
      <NewFormCreater formid={params.formid} updateform={form} />
    </>
  );
}

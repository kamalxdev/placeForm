import connect from "@/db/mongo.config";
import FORM from "@/models/form"
import USER from "@/models/user"
export async function GET(request:Request){
    const {searchParams}=new URL(request.url)
    const id = searchParams.get("id")

    connect();
    try{
        const form = await FORM.findById(id)
        if (!form){
            return Response.json({error:{title:"We cannot find this form",description:"The page you are looking for might have been removed had its name changed or is temporarily unavailable."},status:400})
        }
        const current=new Date();
        const start=form?.start_date;
        const IsStarted=current<start?true:false
        if(form.state!="Live" && IsStarted){
            return Response.json({error:{title:"This form is not Live yet",description:"Please wait for the form to be published."},status:400})
        }
        const expiry=form?.expiry_date
        const IsExpired=current>expiry?true:false
        if(form.state!="Live" && IsExpired){
            return Response.json({error:{title:"This form is expired",description:"You are not allowed to access this form"},status:400})
        }
        const user = await USER.findById(form.created_by)
        return Response.json({data:{id:form.id,fields:form.fields,title:form.title,description:form.description,user:user?.name},message:"Form Fetched Successfully",status:200})
    }catch(err){
        console.log(err);
        return Response.json({error:{title:"Incorrect Link",desciption:"Please make sure you have the correct link.",status:500},status:400})
    }
}
import connect from "@/db/mongo.config";
import FORM from "@/models/form"
import USER from "@/models/user"
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]/options";






export async function GET(request:Request){
    const {searchParams}=new URL(request.url)
    const id = searchParams.get("id")
    const mode = searchParams.get("mode")
    const userSession= await getServerSession(authOptions)
    
    connect();
    try{
        const form = await FORM.findById(id)
        if (!form){
            return Response.json({error:{title:"We cannot find this form",description:"The page you are looking for might have been removed had its name changed or is temporarily unavailable."},status:400})
        }
        const user = await USER.findById(form.created_by)
        
        if(mode=="write"){
            const current=new Date();
            const start=form?.start_date;
            if(form.state!="Live" && current<start){
                return Response.json({error:{title:"This form is not Live yet",description:"Please wait for the form to be published."},status:400})
            }
            const expiry=form?.expiry_date
            if(form.state!="Live" && current>expiry){
                return Response.json({error:{title:"This form is expired",description:"You are not allowed to access this form"},status:400})
            }
        }else if(mode=="edit"){
            if(userSession?.user?.email!=user?.email){
                return Response.json({error:{title:"You are not allowed to access this form",description:"Please make sure you have the correct link."},status:400})
            }
        }
        else{
            return Response.json({error:{title:"Incorrect Link",desciption:"Please make sure you have the correct link.",status:500},status:400})
        }
        return Response.json({data:{id:form.id,fields:form.fields,title:form.title,description:form.description,user:user?.name},message:"Form Fetched Successfully",status:200})
    }catch(err){
        console.log(err);
        return Response.json({error:{title:"Incorrect Link",desciption:"Please make sure you have the correct link.",status:500},status:400})
    }
}
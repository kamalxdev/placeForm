'use client';

import Error404 from "@/components/errors/404";
import Loader from "@/components/loader/loader";
import NewFormCreater from "@/components/newForm/newForm";
import useFetchData from "@/hooks/fetchData";
import NewQuizCreater from "@/components/newQuiz/newQuiz"




export default function NewForm({ params }: { params: { id: string,TypeOfRequest:string } }) {
  const { data, error, loading } = useFetchData(
    `/api/${params?.TypeOfRequest}/get?id=${params?.id}&mode=edit`
  );
  if(loading) return <Loader />
  if(params?.TypeOfRequest === "form"){
    if(error) return <Error404 title={error.title} description={error.description} />
    
    
      
    return (
      <>
        <NewFormCreater formid={data.id} updateform={data} />
      </>
    );
  }
  else if(params?.TypeOfRequest === "quiz"){
    if(error) return <Error404 title={error.title} description={error.description} />

    return (
      <>
      <NewQuizCreater id={data.id} updateform={data} />
      </>
    )
  }
  else{
    return (
      <Error404
        title="Incorrect Link"
        description="Please make sure you have the correct link"
      />
    );
  }
}

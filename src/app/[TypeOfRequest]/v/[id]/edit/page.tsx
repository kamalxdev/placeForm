'use client';

import Error404 from "@/components/errors/404";
import Loader from "@/components/loader/loader";
import NewFormCreater from "@/components/newForm/newForm";
import useFetchData from "@/hooks/fetchData";




export default function NewForm({ params }: { params: { id: string,TypeOfRequest:string } }) {
  if(params?.TypeOfRequest === "form"){
    const { data, error, loading } = useFetchData(
      `/api/form/get?id=${params?.id}&mode=edit`
    );
    if(loading) return <Loader />
    if(error) return <Error404 title={error.title} description={error.description} />
    
    
      
    return (
      <>
        <NewFormCreater formid={data.id} updateform={data} />
      </>
    );
  }
  else if(params?.TypeOfRequest === "quiz"){

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

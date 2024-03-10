"use client";

import axios from "axios";
import { useEffect, useState } from "react";

type ierror={
  title:string;
  description:string;
  status?:number
}

function useFetchData(url: string ) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ierror | null>(null);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setLoading(false);
        if(res.data.status==200){
          return setData(res.data.data);
        }
        setError(res.data.error)
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        
        setError({title:"Internal Server error",description:"Failed to get this page"});
      });
  }, [url]);
  return { data, loading, error };
}

export default useFetchData;

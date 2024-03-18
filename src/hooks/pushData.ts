"use client";

import axios from "axios";
import { useEffect, useState } from "react";

function usePushData( url: string, push: any ) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  useEffect(() => {
    axios
      .post(url, push)
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        setError({title:"Internal Server error",description:"Failed to get this page"});
      });
  }, [url]);
  return { data, loading, error };
}

export default usePushData;

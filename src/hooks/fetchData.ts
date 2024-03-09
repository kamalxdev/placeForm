"use client";

import axios from "axios";
import { useEffect, useState } from "react";

function useFetchData({ url }: { url: string }) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, [url]);
  return { data, loading, error };
}

export default useFetchData;

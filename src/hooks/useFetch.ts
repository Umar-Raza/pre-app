import React, { useEffect, useState } from "react";

export const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const respons = await fetch(url);
      const result = await respons.json();
      setData(result);
      setLoading(false);
    };
    fetchData();
  }, [url]);
  return { data, loading };
};

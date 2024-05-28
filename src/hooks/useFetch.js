import { useEffect, useState } from "react";

export default function useFetch(url, options) {
  let [data, setData] = useState({tickets:[],users:[]});
  let [isLoading, setIsLoading] = useState(false);
  let [isError, setIsError] = useState(null);
  useEffect(() => {
    if (!url) return;
    const controller = new AbortController();
    const signal = controller.signal;
    setIsLoading(true);
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setIsError(null);
        let response = await fetch(url, { ...options, signal: signal });
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
          }
        let data = await response.json();
        setData(data);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, [url, options]);
  return { data, isLoading, isError };
}

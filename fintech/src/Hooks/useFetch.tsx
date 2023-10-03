import React, { useEffect } from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

function useFetch<T>(URL: string, OPTIONS?: RequestInit): FetchState<T> {
  const [data, setData] = React.useState<null | T>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<null | string>(null);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setData(null);

    const fetchData = async () => {
      try {
        const dataFetch = await fetch(URL, {
          signal: controller.signal,
          method: OPTIONS?.method,
          headers: OPTIONS?.headers,
          ...OPTIONS,
        });
        if (!dataFetch.ok) throw new Error(`Erro:${dataFetch.status}`);
        const dataJson = await dataFetch.json();
        setData(dataJson);
        console.log(dataJson);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, [OPTIONS?.headers, OPTIONS?.method, URL]);

  return {
    data: data,
    loading: loading,
    error: error,
  };
}

export default useFetch;

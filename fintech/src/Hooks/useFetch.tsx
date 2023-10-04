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
    const fetchData = async () => {
      setLoading(true);
      setData(null)
      try {
        const dataFetch = await fetch(URL, {
          method: OPTIONS?.method,
          headers: OPTIONS?.headers,
          ...OPTIONS,
        });
        if (!dataFetch.ok) throw new Error(`Erro:${dataFetch.status}`);
        const dataJson = await dataFetch.json();
        setData(dataJson);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
          console.log(e.message)
        }
      } finally {
        setLoading(false)
      }
    };

    fetchData();
  }, [URL]);

  return {
    data: data,
    loading: loading,
    error: error,
  };
}

export default useFetch;

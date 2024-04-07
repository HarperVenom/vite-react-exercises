import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      setLoading(true);

      const response = await fetch(url);
      if (!response.ok) throw new Error(response.statusText);
      const data = await response.json();

      data && setData(data);

      setError(null);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return [data, loading, error];
}

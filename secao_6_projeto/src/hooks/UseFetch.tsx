import { useEffect, useState } from "react";
import type { Item } from "../components/Item";

const useFetch = (BASE_URL: string, id?: string) => {
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState<Item | Item[]>();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const url = id ? `${BASE_URL}/${id}` : BASE_URL;
        const res = await fetch(url);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        setError(error instanceof Error ? error : new Error(String(error)));
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id, BASE_URL]);
  return { product, loading, error };
};

export default useFetch;

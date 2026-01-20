import { useEffect, useState } from "react";
import type { Item } from "../components/Item";

const useFetch = (BASE_URL: string) => {
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState<Item | Item[]>();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(BASE_URL);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return { product, loading, error };
};

export default useFetch;

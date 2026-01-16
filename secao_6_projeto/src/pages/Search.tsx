import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import type { Item } from "../components/Item";

export const Search = () => {
  const [searchParam] = useSearchParams();
  const [results, setResults] = useState<Item[]>([]);
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState(false);

  const query = searchParam.get("q");
  const URL = "http://localhost:3000/products?name_like=" + query;

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const response = await axios.get(URL);
        setResults(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [query]);

  return (
    <div className="items-container">
      <h2 className="items-title">Resultados para: {query}</h2>
      {error && <p>Erro ao carregar produto</p>}

      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
          <p>Carregando produtos...</p>
        </div>
      ) : (
        <div className="items-grid">
          {results &&
            results.map((x) => (
              <div key={x.id} className="item-card">
                <h3 className="item-name">{x.name}</h3>
                <span className="item-price">R$ {x.price}</span>
                <Link
                  style={{ padding: "4px", color: "white" }}
                  to={`/products/${x.id}`}
                >
                  Detalhes
                </Link>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

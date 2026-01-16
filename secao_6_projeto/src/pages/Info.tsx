import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Item } from "../components/Item";
import axios from "axios";

const Info = () => {
  const { id } = useParams();
  const BASE_URL = `http://localhost:3000/products/${id}`;
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>();
  const [product, setProduct] = useState<Item>();

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(BASE_URL);
        setProduct(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <h1>Mais informações sobre o produto: {id}</h1>
      {error && <p>Erro ao carregar produto</p>}
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
          <p>Carregando produtos...</p>
        </div>
      ) : (
        <div>
          {product && (
            <div key={product.id} className="item-card">
              <h2 className="item-name">{product.name}</h2>
              {product.info && (
                <div>
                  {product.info.map((x, i) => (
                    <p className="item-name" key={i}>
                      {x.label} - {x.value}
                    </p>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Info;

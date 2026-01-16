import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Item } from "../components/Item";
import { Link } from "react-router-dom";

const ItemDetail = () => {
  const { id } = useParams();
  const BASE_URL = `http://localhost:3000/products/${id}`;
  const [product, setProduct] = useState<Item>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState(false);

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
  }, [id]);

  return (
    <>
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
              <h3 className="item-name">{product.name}</h3>
              <span className="item-price">
                De: R$ <s>{product.price}</s>
              </span>
              {product.hasDiscount && (
                <span className="item-price">
                  Por: R$ {(product.price * 0.8).toFixed(2)}
                </span>
              )}
              <Link to={`/products/${product.id}/info`}> + Info</Link>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ItemDetail;

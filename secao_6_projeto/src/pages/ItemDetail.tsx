import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useFetch from "../hooks/UseFetch";

const ItemDetail = () => {
  const { id } = useParams();
  const BASE_URL = `http://localhost:3000/products`;

  const {error, loading, product} = useFetch(BASE_URL, id);

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
          {product && !Array.isArray(product) &&(
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

import "./Items.css";
import { Link } from "react-router-dom";
import useFetch from "../hooks/UseFetch";

const Items = () => {
  const BASE_URL = "http://localhost:3000/products";

  const { product, loading, error } = useFetch(BASE_URL);

  return (
    <div className="items-container">
      <h2 className="items-title">Lista de Items</h2>
      {error && <p>Erro ao carregar produto</p>}

      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
          <p>Carregando produtos...</p>
        </div>
      ) : (
        <div className="items-grid">
          {product &&
            Array.isArray(product) &&
            product.map((x) => (
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

export default Items;

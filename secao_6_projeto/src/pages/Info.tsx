import { useParams } from "react-router-dom";
import useFetch from "../hooks/UseFetch";

const Info = () => {
  const { id } = useParams<{id : string}>();
  const BASE_URL = `http://localhost:3000/products`;
 

  const {error, loading, product} = useFetch(BASE_URL, id);

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
          {product && !Array.isArray(product) &&(
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

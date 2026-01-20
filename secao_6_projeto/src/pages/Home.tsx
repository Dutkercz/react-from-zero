import { useEffect, useState } from "react";
import "./Home.css";
import type { Item } from "../components/Item";
import { Link } from "react-router-dom";
import useFetch from "../hooks/UseFetch";

const Home = () => {
  const BASE_URL = "http://localhost:3000/products";
  // const [products, setProducts] = useState<Item[]>([]);
  // const [error, setError] = useState<any>();
  // const [loading, setLoading] = useState<boolean>(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const res = await fetch(BASE_URL);
  //       const data = await res.json();
  //       setProducts(data);
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // },[])


  const {error, loading, product} = useFetch(BASE_URL);

  return (
  <div className="items-container">
    <h1>Produtos Promoção</h1>
    <h2>Todos os itens dessa página estão com 20% de desconto!</h2>

    {error && <p>Erro ao carregar produto</p>}

    {loading ? (
      <div className="loader-container">
        <div className="spinner"></div>
        <p>Carregando produtos...</p>
      </div>
    ) : (
      <div className="items-grid">
        {product && Array.isArray(product) &&
          product
            .filter(x => x.hasDiscount)
            .map((x, i) => (
              <div key={i} className="item-card">
                <span className="item-name">{x.name}</span>

                <span className="item-price">
                  De: R$ <s>{x.price}</s>
                </span>

                <span className="item-price">
                  Por: R$ {(x.price * 0.8).toFixed(2)}
                </span>

                <Link to={`/products/${x.id}`}>Detalhes</Link>
              </div>
            ))}
      </div>
    )}
  </div>
);

};

export default Home;

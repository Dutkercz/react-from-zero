import React, { useEffect, useState } from "react";
import type { Item } from "../components/Item";
import "./Items.css"; 
import { Link } from "react-router-dom";

const Items = () => {
  const BASE_URL = "http://localhost:3000/products";

  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await fetch(BASE_URL);
        const data = await res.json();
        setItems(data);
      } catch (error) {
        setError(error);
      }
      finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []); 

  return (
    <div className="items-container">
      <h2 className="items-title">Lista de Items</h2>
      {error && <p>Erro ao carregar produto</p>}

      {loading ? 
        <div className="loader-container">
          <div className="spinner"></div>
          <p>Carregando produtos...</p>
        </div>
       : 
        <div className="items-grid">
          {items &&
            items.map((x, i) => (
              <div key={i} className="item-card">
                <h3 className="item-name">{x.name}</h3>
                <span className="item-price">R$ {x.price}</span>
                <Link style={{padding:"4px", color:"white" }} to={`/products/${i}`}>Detalhes</Link>
              </div>

            ))}
            
        </div>
      }
    </div>
  );
};

export default Items;
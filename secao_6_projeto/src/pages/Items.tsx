import React, { useEffect, useState } from "react";
import type { Item } from "../components/Item";
import "./Items.css"; 

const Items = () => {
  const BASE_URL = "http://localhost:3000/products";

  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await fetch(BASE_URL);
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.error("Erro ao buscar items:", error);
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
                <span className="item-name">{x.name}</span>
                <span className="item-price">R$ {x.price}</span>
              </div>
            ))}
        </div>
      }
    </div>
  );
};

export default Items;
import "./App.css";
import { useState, useEffect } from "react";
import { type Product } from './components/Product'

function App() {

  const BASE_URL = "http://localhost:3000/products";

  const [products, setProducts] = useState<Product[]>([]);

  // aula 1 resgatando dados

  useEffect(() => { 
    //use effect não aceita um async, então criamos uma outra função async dentro do effect, 
    // e fazemos uma chamada dessa função dentro do effect

    const fechtProducts = async () => { //criando a função assincrona
      const res = await fetch(BASE_URL);

      const data : Product[] = await res.json();

      setProducts(data);
    };
    fechtProducts(); //chamando a função criada dentro do useEffect
  }, []);

  console.log(products)

  return (
    <>
      <div className="App">
        <h1>Lista de Produtos</h1>
        <ul>
          {products.map((x) => 
            <p key={x.id}>{x.name} - R$ {x.price}</p>
          )}
        </ul>
      </div>
    </>
  );
}

export default App;

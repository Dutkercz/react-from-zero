import "./App.css";
import { useState, type FormEvent } from "react";
import { type Product, type ProductInput } from "./components/Product";
import {useFetch} from "./hooks/useFetch";

function App() {
  const BASE_URL = "http://localhost:3000/products";

  const [products, setProducts] = useState<Product[]>([]);

  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");

  // aula 1 resgatando dados

  // useEffect(() => {
  //   //use effect não aceita um async, então criamos uma outra função async dentro do effect,
  //   // e fazemos uma chamada dessa função dentro do effect

  //   const fechtProducts = async () => {
  //     //criando a função assincrona
  //     const res = await fetch(BASE_URL);

  //     const data: Product[] = await res.json();

  //     setProducts(data);
  //   };
  //   fechtProducts(); //chamando a função criada dentro do useEffect
  // }, []);

  const {data : items} = useFetch<Product[]>(BASE_URL);
  
  // 2 - add de produtos

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newProduct: ProductInput = { name, price: +price };

    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    });

    // carregamento dinamico

    const addedProduct = await res.json();

    setProducts((prev) => [...prev, addedProduct]);
    setName("");
    setPrice("");
  };

  return (
    <>
      <div className="App">
        <h1>Lista de Produtos</h1>
        <ul>
          {items && items.map((x) => (
            <p key={x.id}>
              {x.name} - R$ {x.price}
            </p>
          ))}
        </ul>

        <div className="add-product">
          <form onSubmit={handleSubmit}>
            <label>
              <span>Nome: </span>
              <input
                type="text"
                name="name"
                placeholder="Nome do produto"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              <span>Valor: </span>
              <input
                type="number"
                name="price"
                placeholder="Valor do produto"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>
            <input type="submit" value="criar-produto" />
          </form>
        </div>
      </div>
    </>
  );
}

export default App;

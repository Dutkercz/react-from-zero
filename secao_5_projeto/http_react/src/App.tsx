import "./App.css";
import { useEffect, useState, type FormEvent } from "react";
import { type Product, type ProductInput } from "./components/Product";

function App() {
  const BASE_URL = "http://localhost:3000/products";

  const [products, setProducts] = useState<Product[]>([]);

  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [loading, setLoading] = useState(false);

  //aula 1 resgatando dados

  useEffect(() => {
    //use effect não aceita um async, então criamos uma outra função async dentro do effect,
    // e fazemos uma chamada dessa função dentro do effect

    const fechtProducts = async () => {
      setLoading(true);
      //criando a função assincrona
      const res = await fetch(BASE_URL);

      const data: Product[] = await res.json();

      setProducts(data);
      setLoading(false);
    };
    fechtProducts(); //chamando a função criada dentro do useEffect
  }, []);

  // 2 - add de produtos

  const handleName = (e : any) => {
    setName(e.target.value)
  }

  const handlePassword = (e : any) => {
    setPrice(e.target.value)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

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
    setLoading(false);
  };

  return (
    <>
      <div className="App">
        <h1>Lista de Produtos</h1>
        {/* loading */}
        {loading && <p style={{"background":"red"}}>Carregando dados</p>}
        {!loading && (
          <ul>
          {products.map((x) => (
            <p key={x.id}>
              {x.name} - R$ {x.price}
            </p>
          ))}
        </ul>
        )}
        <div className="add-product">
          <form onSubmit={handleSubmit}>
            <label>
              <span>Nome: </span>
              <input
                type="text"
                name="name"
                placeholder="Nome do produto"
                value={name}
                onChange={handleName}
              />
            </label>
            <label>
              <span>Valor: </span>
              <input
                type="number"
                name="price"
                placeholder="Valor do produto"
                value={price}
                onChange={handlePassword}
              />
            </label>
            {!loading && <input type="submit" value="criar-produto" />}
          </form>
        </div>
      </div>
    </>
  );
}

export default App;

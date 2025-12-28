import { useState, type FormEvent } from "react";
import "./MyForm.css";

const MyForm = () => {
  // 3 - gerenciamento de dados
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleName = (e: any) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault() //impede o recarregamento da pagina
    console.log("Enviando o form")
    console.log("nome " + name);
    console.log("email " + email);
  }

  console.log(name);
  console.log(email);

  return (
    // 5 - ENVIO DE FORM
    <div>
      {/* 1- criação de Form*/}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            placeholder="Seu nome"
            onChange={handleName}
          />
        </div>

        {/* Label envolvendo o input (dispensa o uso do 'htmlFor=xxx'*/}
        <div>
          <label>
            <span>E-mail</span>
            <input
              type="email"
              name="email"
              placeholder="seu melhor email"
              // 4 - SIMPLIFICANDO A FUNÇÃO DE MANIPULAR O STATE, USANDO O METODO INLINE
              onChange={(e: any) => {
                setEmail(e.target.value);
              }}
            />
          </label>
        </div>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;

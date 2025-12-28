import { useState, type FormEvent } from "react";
import "./MyForm.css";
import type { User } from "./User";


  interface MyFormProps {
    userProps: User
  }

const MyForm = ({ userProps }: MyFormProps) => {

  // 3 - gerenciamento de dados
  const [name, setName] = useState(userProps ? userProps.name : "");
  const [email, setEmail] = useState(userProps ? userProps.email : "");
  const [bio, setBio] = useState(userProps ? userProps.bio : "");
  const [role, setRole] = useState(userProps ? userProps.role : "");
  // se userProps estiver presente, preenchemos nosso form com informações desse userProps

  const handleName = (e: any) => {
    setName(e.target.value);
  };

  const handleBio = (e : any) => {
    setBio(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault() //impede o recarregamento da pagina
    console.log("Enviando o form")
    console.log(name, email, bio, role);
    //validar
    //enviar
    //...e por fim.

    // 7 - LIMPAR FORMULAR : util quando estamos em um form de cadastro em que não temos o redirect pra outra page
    //ou seja, iremos repetir a operação de cadastro varias vezes, como o cadastro de produtos
    setName("");
    setEmail("");
    setBio("")
    setRole("")
  }

  console.log(name);
  console.log(email);

  return (
    // 5 - ENVIO DE FORM
    // 6 - CONTROLED INPUTS
    <div>
      {/* 1- criação de Form*/}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            value={name}
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
              value={email} //caso o formulario ja venha com alguma informação dentro da props, pode utilizar direto no campo
              placeholder="seu melhor email"
              // 4 - SIMPLIFICANDO A FUNÇÃO DE MANIPULAR O STATE, USANDO O METODO INLINE
              onChange={(e: any) => {
                setEmail(e.target.value);
              }}
            />
          </label>
        </div>

        {/* Text area: usando quando temos muitos caracteres como posts de blogs, bios, descrições, etc*/}
        <div>
              <label >
                <span>Biografia</span>
                <textarea name="bio" placeholder="descrição do usuario" onChange={handleBio} value={bio}></textarea>
              </label>
        </div>

        {/* Select: caixinha tradicional com opções de seleção como para generos, papeis, select de cidade, etc*/}
        <div>
              <label>
                <span>Função no sistema</span>
                <select name="role" onChange={(e) => {setRole(e.target.value)}} value={role}>
                  <option value="user">Usuario</option>
                  <option value="editor">Editor</option>
                  <option value="admin">Administrador</option>
                </select>
              </label>
        </div>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;

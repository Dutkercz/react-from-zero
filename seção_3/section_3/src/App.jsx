import './App.css'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Fragment from "./components/Fragment.jsx";
import {useState} from "react";
import Container from "./components/Container.jsx";
import ExecuteFunction from './components/ExecuteFunction.js'
import Message from './components/Message.js'
import ChangeMessageState from './components/ChangeMessageState.js'

function App() {
    const [count, setCount] = useState(0)

    const [username, setUsername] = useState("Indefinido");

    const handleChangeName = () => {
        setUsername(prompt('Novo nome de usuario? '))
    }
    
    //função a ser passda via props no ExecuteFunction
    function showMessage() {
        window.alert("UMA MENSAGEM EM 24/12 NO COMPONENTE PAI")
    }
    const [message, setMessage] = useState();

    const handleMessage = (msg) => {
        setMessage(msg)
    }

    const cars = [
        {id: 1, brand: "Chevrollet", color: "Preto", km: 95000},
        {id: 2, brand: "Ford", color: "Branco", km: 105000},
        {id: 3, brand: "Chevrollet", color: "Grafite", km: 0},
        {id: 4, brand: "Fiat", color: "Vermelho", km: 50000},
        {id: 5, brand: "Renault", color: "Azul", km: 0}
    ];

    return (
        <div>
            <title>section 3</title>
            <h1>Avançando em React</h1>
            Imagem em Public acessa apenas usando o /nomeDaImagem.(png,jpeg,etc)
            {/* <div>
            <img src="/imagem1.png" alt="uma.imagem" />
          </div> */}

            {/* Imagem em dentro assets ou img dentro de src temos que fazer o import e dar uma 'alias' para ela
            fazendo com que ela se torne uma var e podendo ser reutilizada ou modificada utilizando o mesmo nome
          */}
            {/* <div>
            <img src={Img} alt="uma imagem"/>
          </div> */}
            <ManageData/>
            <ListRender/>
            <ConditionalRender/>
            {/* props */}
            <ShowUserName name={username}/>
            <button onClick={handleChangeName}>Trocar nome de Usuario</button>
            {/* destructuring */}
            <CarDetails brand="Chevrollet" color="Preto" km={95000}/>
            {/* reaproveitamento de components*/}
            <CarDetails brand="Ford" color="Branco" km={105000}/>
            <CarDetails brand="Chevrollet" color="Grafite" km={0}/>
            {/* Loop em Listas */}
            {cars.map((x) => ( //para retornar um objeto tem que abrir parenteses na função e não chaves
                <CarDetails key={x.id} brand={x.brand} color={x.color} km={x.km}/>
            ))};
            {/*Fragments*/}
            <Fragment propFrag='test'/>
            <Container myval='teste con1'>Conteudo no app.jsx</Container>
            <Container myval='teste con2'>Conteudo no app2.jsx</Container>

            {/* Exexecutar funcção */}
            <ExecuteFunction myFunc = {showMessage}/>

            {/* State Lift = alteramos o estado por meio de componentes que não estão dentro do comp. pai */}
            <Message msg = {message}/>: {/* aqui 'message' é o meu useState que deve ser alterada em outro comp.*/}
            <ChangeMessageState handleMessage = {handleMessage}/> {/* este componente é responsavel por alterar a msg, recebendo o handle de manipulação dela*/}
        </div>
    )
}

export default App

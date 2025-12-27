import { useState } from "react"

const ListRender = () => {
    const [list] = useState(["Cristian", "Jenifer", "Álvaro", "Maria Ísis", "Preto", "Cuco"])

    const [users, setUsers] = useState([
        { id: 1, name: "Cristian", age: 23 },
        { id: 2, name: "Jenifer", age: 21 },
        { id: 3, name: "Álvaro", age: 24 },
        { id: 4, name: "Maria Ísis", age: 19 },
        { id: 5, name: "Preto", age: 1 },
        { id: 6, name: "Cuco", age: 9 },
    ]);

    const [nome, setNome] = useState('Visitante')

    const handleMudaNome = () => {
        const novoNome = window.prompt('Digite seu nome')
        setNome(novoNome)
    };

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 6)

        setUsers((prev) => {
            return prev.filter((user) => randomNumber !== user.id)
        })

    }


    return (
        <div>
            <div>


                <ul>
                    <p>Lista com index do map</p>
                    {list.map((x, i) =>
                        (<li key={i}>{x}</li>)
                    )}
                </ul>

                <ul>
                    <p>Lista com id do objeto</p>
                    {users.map((user) =>
                        (<li key={user.id}>{user.name} - {user.age} anos</li>)
                    )}
                </ul>

                <button onClick={deleteRandom}>Delete Random User</button>
            </div>

            <div>
                <p>Meu nome no momento é {nome}</p>
                <button onClick={() => {
                    setNome(handleMudaNome)   
                }}>Clique para mudar de nome</button>
            </div>
        </div>
    )
}

export default ListRender
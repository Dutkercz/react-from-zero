import { useState } from "react";

function ManageData() {
    let someData = 10;

    console.log(someData)

    const [number, setNumber] = useState(10); //posso inicializar o valor dentro do useState

    const handleAdd10 = () => {
        setNumber(number+10);
    };

    const handleDividePor7 = () => {
        setNumber(number/7)
    };

    return (
        <div>
            <div>
                <h1>Sem useState valor sempre é {someData}</h1>
                <button onClick={() => someData += 5}>clique para alterar (não funciona)</button>
            </div>

            <div>
                <h1>Com o useState o valor é atulizado dinamicamente, começando em {number}</h1>
                <button onClick={() => setNumber(number + 5)}>Aumentar +5 (totalmente funcional)</button>
                <br />
                <button onClick={handleAdd10}> Aumentar +10</button>
                <br />
                <button onClick={handleDividePor7}>Dividir por 7</button>
            </div>
        </div>
    )
}

export default ManageData
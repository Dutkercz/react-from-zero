import React, { useState } from 'react'

function ConditionalRender() {

    const [x] = useState(false)

    const [name, setName] = useState("Criss")

    const handleAlterName = () => {
        if (name === "Cris") {
            setName("Um nome qualquer")
        } else {
            setName("Cris")
        }
    }

    return (
        <div>
            <div>
                <h1>ConditionalRender IF simples</h1>

                <p>O meu nome abaixo será exibido?</p>
                {x && <p> Se você está vendo é porque o x é TRUE</p>}
                {!x && <p> Se você está vendo é porque o x é FALSE</p>}
            </div>

            <div>
                <h1>ConditionalRender IF/ELSE Ternário </h1>
                {name == "Cris" ?
                    (<div>
                        <p>Seu nome é {name}, TOP DAS GALÁXIAS</p>
                        <button onClick={handleAlterName}>Clique aqui para não ter uma nome top</button>
                    </div>)
                    :
                    (<div>
                        <p>Outro nome qualquer</p>
                        <button onClick={handleAlterName}>clique aqui para se chamar Cris</button>
                    </div>)}
            </div>

        </div>
    )
}
export default ConditionalRender
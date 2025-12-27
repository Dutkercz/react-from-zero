const Events = () => {
    
    const handleMyEvent = (e) => {
        console.log(e)
    }

    const renderSomething = (x) => {
        if (x){
            return <h1>Renderizando true</h1>
        }else{
            return <h1>Renderizando false</h1>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>clique aqui</button>
            </div>

            <div>
                <button onClick={() => console.log('Clicou aqui tambem')}>clique aqui tambem</button>
            </div>

            <div>
                {renderSomething()}
            </div>

        </div>
    )
}

export default Events;
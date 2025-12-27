import "./MyComponent.css"

const MyComponent = () => {
  return (
    <>
        <h1>Css de Componente</h1>
        <p>Este é o paragrafo do componente sem className estilizado de forma global</p>
        <p className="myparagraf">Este componente possui className</p>
    </>
  )
}

export default MyComponent
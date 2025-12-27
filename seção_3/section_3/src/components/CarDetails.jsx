// o nome que chega no parametro, deve ser igual ao que é enviado como props
const CarDetails = ({km, color, brand}) => {
  return (
    <div>
        <h2>Detalhes do carro</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>Km: {km}</li>
            <li>Cor: {color}</li>
        {km == 0 && <li>Este carro é zero KM</li>}
        </ul>
    </div>
  )
}

export default CarDetails
import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'

const PerfilPage = () => {

    const counter = useContext(CounterContext)

  return (
    <div>
        <h1>PerfilPage</h1>
        <p>valor do contador {counter?.counter}</p>
    </div>
    
  )
}

export default PerfilPage
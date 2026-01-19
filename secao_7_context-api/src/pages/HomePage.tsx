import React, { useContext } from 'react'
import {CounterContext} from '../context/CounterContext'
import ChangeCounter from '../context/ChangeCounter'

const HomePage = () => {

    const counter = useContext(CounterContext)

  return (
    <div>
        <h1>Home</h1>
        <p>valor do contador {counter?.counter}</p>
        {/* componente que altera o valor */}
        <ChangeCounter />
    </div>
  )
}

export default HomePage
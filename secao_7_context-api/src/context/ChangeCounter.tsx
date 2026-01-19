import React, { useContext } from 'react'
import { CounterContext } from './CounterContext'

const ChangeCounter = () => {
    const {counter, setCounter} = useContext(CounterContext)!
  
    const handleCounter = () => {
        setCounter(counter + 1)
    }

    return (
    <div>
        <button onClick={handleCounter}>Add value to counter</button>
    </div>
  )
}

export default ChangeCounter
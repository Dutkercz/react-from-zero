import { useState } from 'react'
import './App.css'
import FirstComponent from './components/FirstComponent.jsx'
import TemplateExpressions from './components/TemplateExpressions.jsx'
import MyComponent from './components/MyComponent.jsx'
import Events from './components/Events.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Fundamentos React</h1>
      <FirstComponent/>
      <TemplateExpressions/>
      <MyComponent />
      <Events />
    </>
  )
}

export default App

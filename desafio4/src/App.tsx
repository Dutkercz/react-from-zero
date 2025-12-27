import './App.css'
import type { Person } from './components/Person'
import UserDetails from './components/UserDetails'

function App() {

  const people: Person[] = [
    {id:1, name:"Cristian", age:33, profession:"Desenvolvedor"},
    {id:2, name:"Jenifer", age:30, profession:"Dona de casa"},
    {id:3, name:"Álvaro", age:6, profession:"Estudante"},
    {id:4, name:"Maria Ísis", age:3, profession:"Estudante"}
  ]
  

  return (
    <>
      <UserDetails peoples={people}/>
      
    </>
  )
}

export default App

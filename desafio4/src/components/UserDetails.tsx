import type { Person } from './Person';

interface UserDetailsProps {
    peoples : Person[];
}

const UserDetails = ({peoples} : UserDetailsProps) => {
  return (
    <div>
        <h2>Lista de Pessoal</h2>
        <ol>
            {peoples.map((p) => (
                <li key={p.id}>
                    <p>Nome: {p.name} - Idade: {p.age} anos - {p.profession}</p>
                    {p.age >= 18 && <p> {p.name} está apto(a) a tirar CNH</p>}
                </li>
            ))}
        </ol>
    </div>
  )
}

export default UserDetails
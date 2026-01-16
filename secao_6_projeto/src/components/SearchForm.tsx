import { useState, type FormEvent } from "react"
import { useNavigate } from "react-router-dom"

const SearchForm = () => {

    const navigate = useNavigate()
    const [query, setQuery] = useState("")

    const handleSubmit = (e : FormEvent<HTMLElement>) => {
        e.preventDefault()

        // Me leva para a Page de Search com a query
        navigate(`/search?q=${query}`)
    }


  return (
    <>
        <form onSubmit={handleSubmit}>
            <input type="text" value={query}  onChange={(e) => setQuery(e.target.value)}/>
            <input style={{padding:"2px", margin:"4px 4px"}} type="submit" value="Buscar" />
        </form>
    </>
)
}

export default SearchForm
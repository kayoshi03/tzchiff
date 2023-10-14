import {useEffect, useState} from "react";
import {AllTea} from "../../API/AllTea";
import {Link} from "react-router-dom";

const Search = () => {
    const [search, setSearch] = useState([])
    const [value, setValue] = useState("")
    const allTea = async () => {
        try {
            const tea = await AllTea()
            setSearch(tea.rows)
        }
        catch (err) {

        }
    }
    const Filterd = search.filter(tea => {
        return tea.name.toLowerCase().includes(value.toLowerCase())
    })
    console.log(search)
    useEffect(() => {
        allTea()
    }, [])
    return (
        <div className="search">
            <label>
                <input type="search" onChange={e => setValue(e.target.value)} placeholder="Поиск"/>
            </label>

            {
                value.length === 0 ?
                    <div></div>
                 :   <div>
                        {
                            Filterd.map(search => (
                                <Link to={`/tea/${search.id}`}>{search.name}</Link>
                            ))
                        }
                    </div>
            }


        </div>
    )
}

export default Search
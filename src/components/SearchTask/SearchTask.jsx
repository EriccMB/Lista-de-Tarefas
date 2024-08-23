import React from 'react'

const SearchTask = ({search, setSearch}) => {
    return (
        <div className="searchTask">
            <h2>Pesquisar</h2>
            <input type="text" placeholder='Digite o nome da tarefa' value={search} onChange={(e) => setSearch(e.target.value)}/>
        </div>
    )
}
 
export default SearchTask
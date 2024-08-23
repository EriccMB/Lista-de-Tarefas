import React from 'react'

const FilterTask = ({filter, setFilter, setSortBy}) => {
    return (
        <div className="filterTask">
            <h2>Filtrar</h2>
            <div className="filter-group">
                <div className="status-box">
                    <span>Status</span>
                    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="All">Todas</option>
                        <option value="Completed">Completas</option>
                        <option value="Incompleted">Incompletas</option>
                    </select>
                </div>
                <div className="alpOrder-box">
                    <span>Ordem alfabética</span>
                    <div className="button-box">
                        <button onClick={() => setSortBy("Asc")}>Asc</button>
                        <button onClick={() => setSortBy("Desc")}>Desc</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterTask
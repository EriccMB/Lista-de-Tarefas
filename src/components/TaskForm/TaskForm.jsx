import { useState } from 'react'

const TaskForm = ({addTask}) => {
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!title || !category) return
        addTask(title, category)
        setTitle("")
        setCategory("")
    }   

    return (
        <div className="createTask-box">
            <h2>Criar tarefa</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} placeholder='Digite o nome da tarefa' onChange={(e) => setTitle(e.target.value)}/>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudo">Estudo</option>
                </select>
                <button type="submit">Criar</button>
            </form>
        </div>
    )
}

export default TaskForm
import { useEffect, useState } from "react"
import { ToDo } from "../models/todo-item"
import { useNavigate, useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "../app/store"

export const ViewListItem = () => {
    const todoList = useSelector((state: RootState) => state.todoList.todos)
    const { id } = useParams() // достаёт динамические параметры
    const navigate = useNavigate() // создаёт навигацию
    const [todo, setTodo] = useState<ToDo>()

    // Эффект, который будет запущен во время загрузки данного компотента
    // Объединяет все жизненные циклы компотента
    useEffect(() => {
        const searchToDo = todoList.find((todo) => String(todo.id) === id)
        if (searchToDo) {
            setTodo(searchToDo)
        } else {

            navigate('/404')
        }

    }, [todoList, id, navigate]);

    return (
        <div className="container">
            <h1>{todo?.text}</h1>
        </div>
    )
}
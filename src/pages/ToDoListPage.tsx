// import React from "react"

import { useState } from "react"
import { Form } from "../components/Form/Form"
import { Header } from "../components/Header/Header"
import { ToDoList } from "../components/ToDoList/ToDoList"
import { ToDo } from "../models/todo-item"
import { ToastContainer, toast } from 'react-toastify';

export const ToDoListPage = () => {
    const [todos, setTodos] = useState<ToDo[]>([])

    const notifyAdd = () => toast.success("Задача добавлена");
    const notifyToggle = () => toast.info("Статус обновлён");
    const notifyDelete = () => toast.error("Запись удалена");

    const createNewToDo = (text: string) => {
        console.log('createNewToDo:' + text)
        const newToDo: ToDo = {
            id: todos.length,
            text: text,
            isDone: false
        }
        setTodos([...todos, newToDo])
        notifyAdd();
    }

    const updateToDo = (toDoItem: ToDo) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === toDoItem.id) {
                todo.isDone = !todo.isDone
            }
            return todo
        })
        setTodos(newTodos)
        notifyToggle();
    }

    const deleteToDo = (toDoItem: ToDo) => {
        const newTodos = todos.filter((todo) => {
            return todo.id !== toDoItem.id // Вернёт всё, кто отличается по идентификатору
        })

        setTodos(newTodos);
        notifyDelete();
    }

    return (
        <>
            <Header />
            <Form createNewToDo={createNewToDo} />
            <ToDoList todos={todos} updateToDo={updateToDo} deleteToDo={deleteToDo} />
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}
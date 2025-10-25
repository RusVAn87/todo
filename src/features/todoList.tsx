import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ToDo } from '../models/todo-item'
import { toast } from 'react-toastify';

const notifyAdd = () => toast.success("Задача добавлена");
const notifyToggle = () => toast.info("Статус обновлён");
const notifyDelete = () => toast.error("Запись удалена");

export interface TodoState {
    todos: ToDo[]
}

const initialState: TodoState = {
    todos: [],
}

export const todoSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        createAction: (state, action: PayloadAction<string>) => {
            const newToDo: ToDo = {
                id: state.todos.length,
                text: action.payload,
                isDone: false
            }
            state.todos = [...state.todos, newToDo]
            notifyAdd();
        },
        updateAction: (state, action: PayloadAction<ToDo>) => {
            const newTodos = state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    todo.isDone = !todo.isDone
                }
                return todo
            })
            state.todos = newTodos
            notifyToggle()
        },
        deleteAction: (state, action: PayloadAction<ToDo>) => {
            const newTodos = state.todos.filter((todo) => {
                return todo.id !== action.payload.id // Вернёт всё, кто отличается по идентификатору
            })
            state.todos = newTodos
            // setTodos(newTodos);
            notifyDelete()
        },
    },
})

// Action creators are generated for each case reducer function
export const { createAction, updateAction, deleteAction } = todoSlice.actions

export default todoSlice.reducer

// function notifyAdd() {
//     throw new Error('Function not implemented.')
// }
// function setTodos(arg0: ToDo[]) {
//     throw new Error('Function not implemented.')
// }


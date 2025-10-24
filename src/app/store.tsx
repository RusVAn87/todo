import { configureStore, combineReducers } from '@reduxjs/toolkit'
import todoReducer from '../features/todoList'
import { saveToLocalStorage, loadFromLocalStorage } from '../helpers/storage'

const rootReducer = combineReducers({
    todoList: todoReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const store = configureStore({
    reducer: rootReducer,
    preloadedState: loadFromLocalStorage()
})

store.subscribe(() => {
    saveToLocalStorage(store.getState())
})

export type AppDispatch = typeof store.dispatch

import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
import { themes } from '../styles/themes';
import { Theme } from '../models/theme';

const notifyThemeToggle = () => toast.error("Тема переключена");

export interface ThemeState {
    theme: Theme
}

const initialState: ThemeState = {
    theme: themes['light']
}

export const themeSlice = createSlice({
    name: 'themeList',
    initialState,
    reducers: {
        toggleThemeAction: (state) => {
            state.theme = state.theme.name === 'light' ? themes['dark'] : themes['light']
            notifyThemeToggle()
        },
    },
})

// Action creators are generated for each case reducer function
export const { toggleThemeAction } = themeSlice.actions

export default themeSlice.reducer

// function notifyAdd() {
//     throw new Error('Function not implemented.')
// }
// function setTodos(arg0: ToDo[]) {
//     throw new Error('Function not implemented.')
// }


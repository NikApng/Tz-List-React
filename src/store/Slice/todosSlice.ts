import {createSlice, type PayloadAction} from '@reduxjs/toolkit'
import * as crypto from "node:crypto";

type Todo = {
    id: string
    title: string
    done: boolean
}

type TodosState = {
    items: Todo[]
}
const initialState = {
    items: [],
}

const todosSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<{ title: string }>) => {
            const newTodo: Todo = {
                id: Date.now(),
                title: action.payload.title,
                done: false,
            }
            state.items.push(newTodo)
        },
        deleteTodo: (state, action: PayloadAction<{ id: string }>) => {
            const removeItem = state.items.filter(i => i.id !== action.payload.id)
            return {...state, items: removeItem}
        },
        editTodo: (state, action: PayloadAction<{ id: string }>) => {
            const editItem = state.items.map(i => i.id === action.payload.id)
            return {...state, items: editItem}
        }
    }
})

export default todosSlice.reducer
export const {addTodo, deleteTodo, editTodo} = todosSlice.actions
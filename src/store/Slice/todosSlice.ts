import { createSlice, type PayloadAction } from '@reduxjs/toolkit'


type Todo = {
  id: string
  title: string
  description?: string
  done: boolean
}

type TodosState = {
  items: Todo[]
}
const initialState: TodosState = {
  items: [],
}

const todosSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<{ title: string, description?: string }>) => {
      const newTodo: Todo = {
        id: Date.now().toString(),
        title: action.payload.title,
        description: action.payload.description ?? '',
        done: false,
      }
      state.items.push(newTodo)
    },
    deleteTodo: (state, action: PayloadAction<{ id: string }>) => {
      const removeItem = state.items.filter(i => i.id !== action.payload.id)
      return { ...state, items: removeItem }
    },
    editTodo: (state, action: PayloadAction<{ id: string }>) => {
      const editItem = state.items.map(i => i.id === action.payload.id)
      return { ...state, items: editItem }
    },
  },
})

export default todosSlice.reducer
export const { addTodo, deleteTodo, editTodo } = todosSlice.actions
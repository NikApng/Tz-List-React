import { configureStore } from '@reduxjs/toolkit'
import todosSlice from "./Slice/todosSlice.ts";
import boardSlice from '../store/board/boardsSlice.ts'

const store = configureStore({
    reducer: {
        todos: todosSlice,
        board: boardSlice,
    }
})
export default store;
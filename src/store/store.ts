import { configureStore } from '@reduxjs/toolkit'
import todosSlice from "./Slice/todosSlice.ts";

const store = configureStore({
    reducer: {
        todos: todosSlice,
    }
})
export default store;
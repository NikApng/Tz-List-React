import { createSlice } from '@reduxjs/toolkit'

type BoardTask = {
  id: string
  title: string
  description: string
  todoId: string
  done: boolean
}

type ColumnId = 'todo' | 'inProgress' | 'done'

type Board = {
  columns: Record<ColumnId, BoardTask[]>
}

type BoardState = {
  byTodoId: Record<string, Board>
}

const initialState: BoardState = {
  byTodoId: {},
}
const boardSlice = createSlice({
  name: 'Board',
  initialState,
  reducers: {
    addBoard: (state, action: PayloadAction<{
      title: string
      description: string
      todoId: string
      columnId: ColumnId
    }>) => {
      const { todoId, columnId, title, description } = action.payload

      let board = state.byTodoId[todoId]
      if (!board) {
        board = {
          columns: {
            todo: [],
            inProgress: [],
            done: [],
          },
        }
        state.byTodoId[todoId] = board
      }


      const newTask: BoardTask = {
        id: Date.now().toString(),
        title,
        description,
        todoId,
        done: false,
      }

      board.columns[columnId].push(newTask)
    },

  },
})

export const { addBoard } = boardSlice.actions
export default boardSlice.reducer
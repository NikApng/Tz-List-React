import React from 'react'
import Button from '../../../shared/ui/Button.tsx'
import { deleteTodo } from '../../../store/Slice/todosSlice.ts'
import {removeBoard} from '../../../store/board/boardsSlice.ts'
import { useDispatch, useSelector } from 'react-redux'

type OpenBoardTaskProps = {
  onOpenBoard: (todoId: string) => void
}


function Task({ onOpenBoard }: OpenBoardTaskProps) {

  const todos = useSelector(state => state.todos.items)

  const dispatch = useDispatch()
  return (
    <>
      {todos.map((i) => (
        <li
          key={i.id}
          onClick={() => onOpenBoard(i.id)}
          className="hover:cursor-pointer w-full flex items-center justify-between
          bg-neutral-100 dark:bg-neutral-900 px-3 py-2 rounded-lg hover:bg-neutral-200
           dark:hover:bg-neutral-800 transition"
        >
          <div className="flex flex-col">
        <span className="font-medium text-black dark:text-white">
          {i.title}
        </span>
            {i.description && (
              <span className="text-sm text-neutral-600 dark:text-neutral-400">
            {i.description}
          </span>
            )}
          </div>

          <Button
            onClick={(e) => {
              e.stopPropagation()
              dispatch(deleteTodo({ id: i.id }))
              dispatch(removeBoard({todoId: i.id}))
            }}
            variant="danger"
          >
            Del
          </Button>
        </li>
      ))}
    </>


  )
}

export default Task
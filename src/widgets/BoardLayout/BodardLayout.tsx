import React from 'react'
import Button from '../../shared/ui/Button.tsx'
import { useDispatch, useSelector } from 'react-redux'
import { addBoard } from '../../store/board/boardsSlice.ts'

type BoardLayoutProps = {
  activeTodoId: string | null
}

function BoardLayout({ activeTodoId }: BoardLayoutProps) {
  const dispatch = useDispatch()

  const board = useSelector((state: any) => {
    activeTodoId ? state.board.byTodoId[activeTodoId] : null
  })

  return (
    <div className="h-full flex flex-col gap-4">

      {board ? (
        <div className="flex gap-4">
          {/* Колонка To Do */}
          <div className="flex-1">
            <h3 className="font-semibold mb-2 text-sm">To Do</h3>
            <ul className="flex flex-col gap-2">
              {board.columns.todo.map((task) => (
                <li
                  key={task.id}
                  className="bg-neutral-100 text-black dark:bg-neutral-900 px-3 py-2 rounded-lg text-sm"
                >
                  <div className="font-medium text-black">{task.title}</div>
                  {task.description && (
                    <div className="text-xs text-black text-neutral-500">
                      {task.description}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

        </div>
      ) : (
        <div className="text-neutral-500 text-sm">
          Для этой задачи доска пока пустая
        </div>
      )}

      <Button
        className="mt-4 text-xs"
        onClick={() => {
          dispatch(
            addBoard({
              todoId: activeTodoId,
              columnId: 'todo',
              title: 'Новая подзадача',
              description: 'Описание...',
            })
          )
        }}
      >
        + Новая подзадача
      </Button>
    </div>
  )
}
export default BoardLayout;

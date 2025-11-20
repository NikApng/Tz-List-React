import React from 'react'
import Button from '../../shared/ui/Button.tsx'
import { useDispatch, useSelector } from 'react-redux'
import { addBoard } from '../../store/board/boardsSlice.ts'

type BoardLayoutProps = {
  activeTodoId: string | null
}

function BoardLayout({ activeTodoId }: BoardLayoutProps) {
  const dispatch = useDispatch()
  const activeTodo = useSelector((state: any) =>
    activeTodoId ? state.todos.items.find((t: any) => t.id === activeTodoId) : null,
  )
  const board = useSelector((state: any) => activeTodoId ? state.board.byTodoId[activeTodoId] : null)
  console.log('activeTodoId:', activeTodoId)
  console.log('board:', board)
  return (
    <div className="h-full flex flex-col gap-4">
      {activeTodo ? (
        <div className="mb-4">
          <h2 className="text-lg font-semibold">{activeTodo.title}</h2>
          {activeTodo.description && (
            <p className="text-sm text-neutral-500">{activeTodo.description}</p>
          )}
          <Button
            className="mt-4 text-xs"
            onClick={() => {
              if (!activeTodoId) return

              dispatch(
                addBoard({
                  todoId: activeTodoId,
                  columnId: 'todo',
                  title: 'Новая подзадача',
                  description: 'Описание...',
                }),
              )
            }}

          >
            + Новая подзадача
          </Button>
        </div>

      ) : (
        <div className="text-neutral-500 text-sm">
          Выберите задачу слева, чтобы открыть её доску
        </div>
      )
      }

      {board && (
        <div className="flex gap-4">

          <div className="flex-1">
            <h3 className="font-semibold mb-2 text-sm">
              Задачи {' '}
              <span className="text-xs text-neutral-500">
          ({board.columns.todo.length})
        </span>
            </h3>
            <ul className="flex flex-col gap-2">
              {board.columns.todo.map((task) => (
                <li
                  key={task.id}
                  className="bg-neutral-100 dark:bg-neutral-900 px-3 py-2 rounded-lg text-sm"
                >
                  <div className="font-medium text-black dark:text-white">
                    {task.title}
                  </div>
                  {task.description && (
                    <div className="text-xs text-neutral-600 dark:text-neutral-400">
                      {task.description}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>


          <div className="flex-1">
            <h3 className="font-semibold mb-2 text-sm">
              Выполняются {' '}
              <span className="text-xs text-neutral-500">
          ({board.columns.inProgress.length})
        </span>
            </h3>
            <ul className="flex flex-col gap-2">
              {board.columns.inProgress.map((task) => (
                <li
                  key={task.id}
                  className="bg-neutral-100 dark:bg-neutral-900 px-3 py-2 rounded-lg text-sm"
                >
                  <div className="font-medium text-black dark:text-white">
                    {task.title}
                  </div>
                  {task.description && (
                    <div className="text-xs text-neutral-600 dark:text-neutral-400">
                      {task.description}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>


          <div className="flex-1">
            <h3 className="font-semibold mb-2 text-sm">
              Готово {' '}
              <span className="text-xs text-neutral-500">
          ({board.columns.done.length})
        </span>
            </h3>
            <ul className="flex flex-col gap-2">
              {board.columns.done.map((task) => (
                <li
                  key={task.id}
                  className="bg-neutral-100 dark:bg-neutral-900 px-3 py-2 rounded-lg text-sm opacity-80"
                >
                  <div className="font-medium text-black dark:text-white line-through">
                    {task.title}
                  </div>
                  {task.description && (
                    <div className="text-xs text-neutral-600 dark:text-neutral-400">
                      {task.description}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}


    </div>
  )
}

export default BoardLayout

import React, { useEffect } from 'react'
import Header from './Header/Header'
import BoardLayout from './BoardLayout/BodardLayout.tsx'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../shared/ui/Button.tsx'
import { deleteTodo } from '../store/Slice/todosSlice.ts'

interface AppLayoutProps {
  onCreateTaskClick: () => void
}

function AppLayout({ onCreateTaskClick }: AppLayoutProps) {
  const todos = useSelector(state => state.todos.items)
  const dispatch = useDispatch()

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 dark:bg-neutral-950 text-black dark:text-white">
      <Header onCreateTaskClick={onCreateTaskClick} />

      <div className="flex flex-1">
        <aside
          className="w-64 shrink-0 border-r border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 p-4">
          <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
            Всего: {todos.length}
          </div>

          <ul className="flex flex-col gap-3">
            {todos.map((i) => (
              <li
                key={i.id}
                className="w-full flex items-center justify-between bg-neutral-100 dark:bg-neutral-900 px-3 py-2 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
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
                  onClick={() => dispatch(deleteTodo({ id: i.id }))}
                  variant="danger"
                >
                  Del
                </Button>
              </li>
            ))}
          </ul>

        </aside>


        <main className="flex-1 px-4 py-4 overflow-x-auto">
          <BoardLayout />
        </main>
      </div>
    </div>
  )
}


export default AppLayout

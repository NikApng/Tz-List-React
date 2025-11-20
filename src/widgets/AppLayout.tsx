import React, { useState } from 'react'
import Header from './Header/Header'
import BoardLayout from './BoardLayout/BodardLayout.tsx'
import { useSelector } from 'react-redux'
import Task from '../entities/task/ui/Task.tsx'

interface AppLayoutProps {
  onCreateTaskClick: () => void

}

function AppLayout({ onCreateTaskClick }: AppLayoutProps) {
  const todos = useSelector((state: any) => state.todos.items)
  const [activeID, setActiveId] = useState<string | null>(null)

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 dark:bg-neutral-950 text-black dark:text-white">
      <Header onCreateTaskClick={onCreateTaskClick} />

      <div className="flex flex-1">
        <aside className="w-64 shrink-0 border-r border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 p-4">
          <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
            Всего: {todos.length}
          </div>

          <ul className="flex flex-col gap-3">
            <Task onOpenBoard={(id) => setActiveId(id)} />
          </ul>
        </aside>

        <main className="flex-1 px-4 py-4 overflow-x-auto">
          <BoardLayout activeTodoId={activeID} />
        </main>
      </div>
    </div>
  )
}



export default AppLayout

import React from 'react'
import Header from './Header/Header'
import BoardLayout from './BoardLayout/BodardLayout.tsx'
import {useDispatch, useSelector} from "react-redux";
import Button from "../shared/ui/Button.tsx";
import {deleteTodo} from "../store/Slice/todosSlice.ts";

interface AppLayoutProps {
    onCreateTaskClick: () => void
}

function AppLayout({ onCreateTaskClick }: AppLayoutProps) {
    const todos = useSelector(state => state.todos.items);
    const dispatch = useDispatch();

    return (
        <div className="min-h-screen flex flex-col bg-neutral-50 dark:bg-neutral-950">
            <Header onCreateTaskClick={onCreateTaskClick} />

            <div className="flex flex-1">
                <aside className="w-64 shrink-0 border-r border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80">
                    {todos.map((i) => (
                        <ul className={`flex items-center ${i}`}>
                            <li><span
                                className={'text-black dark:text-white'}
                                key={i.id}>{i.title} <Button onClick={()=> dispatch(deleteTodo({id: i.id}))}>Del</Button></span></li>
                        </ul>

                    ))}
                </aside>

                <main className="flex-1 px-4 py-4 overflow-x-auto">
                    <BoardLayout />
                </main>
            </div>
        </div>
    )
}


export default AppLayout

import React, { useEffect, useRef, useState } from 'react'
import AppLayout from "../widgets/AppLayout.tsx";
import Modal from "../shared/ui/Modal.tsx";
import Button from "../shared/ui/Button.tsx";
import {useDispatch, useSelector} from "react-redux";
import {addTodo} from "../store/Slice/todosSlice.ts";


function Index() {
    const [isOpenModal, setOpenModal] = useState<boolean>(false)
    const [title, setTitle] = useState<string>("")
    const [description, setDesc] = useState<string>('')
    const dispatch = useDispatch()

    const handleCreateTask = ()=> {
        if(!title.trim()) {
            throw new Error('Введите хотя бы один символ')
        }
        if(!description.trim()) {
            throw new Error('Введите хотя бы один символ')
        }

        dispatch(addTodo({title, description}))

        setDesc('')
        setTitle('')
        setOpenModal(false)
    }
    const inputRef = useRef<HTMLInputElement | null>(null)
    useEffect(() => {
        inputRef.current?.focus()
    }, [isOpenModal])


    const handleOpen = () => setOpenModal(true)


    return (
        <>
            <AppLayout onCreateTaskClick={handleOpen}/>
            <Modal isOpen={isOpenModal} onClose={() => setOpenModal(false)}>
                <h2 className="text-lg font-semibold mb-4 dark:text-white text-black">
                    Новая задача
                </h2>

                <input
                    type="text"
                    ref={inputRef}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Название задачи"
                    className="w-full mb-3 rounded-lg text-black border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40"
                />

                <textarea
                    placeholder="Описание (необязательно)"
                    value={description}
                    onChange={(e)=> setDesc(e.target.value)}
                    className="w-full mb-4 text-black rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-sm outline-none resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40"
                    rows={3}
                />

                <div className="flex justify-end gap-2">
                    <Button variant="ghost" onClick={() => setOpenModal(false)}>
                        Отмена
                    </Button>
                    <Button variant="primary" onClick={handleCreateTask}>
                        Создать
                    </Button>
                </div>
            </Modal>
        </>
    );
}

export default Index;
// src/widgets/Header/Header.tsx
import React from 'react'
import ThemeButton from '@/shared/ui/ThemeButton'
import Button from '@/shared/ui/Button'

interface HeaderProps {
    onCreateTaskClick: () => void
}

const Header: React.FC<HeaderProps> = ({onCreateTaskClick}) => {
    return (
        <header
            className="w-full border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
                <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-blue-500 to-purple-500"/>
                    <div className="flex flex-col leading-tight"><span
                        className="text-sm font-semibold text-neutral-900 dark:text-neutral-50"> TZ-List </span> <span
                        className="text-xs text-neutral-500 dark:text-neutral-400"> Tasks • Boards • Focus </span></div>
                </div>
                <div className="hidden md:flex items-center gap-3">
                    <input type="text" placeholder="Поиск задач..."
                           className="h-9 w-56 rounded-lg border border-neutral-200
                           dark:border-neutral-700 bg-white dark:bg-neutral-900
                           px-3 text-sm text-neutral-900 dark:text-neutral-50
                           placeholder:text-neutral-400 outline-none focus:border-blue-500 focus:ring-2
                            focus:ring-blue-500/40"/>
                </div>

                <div className="flex items-center gap-3">
                    <ThemeButton/>
                    <Button
                        variant="primary"
                        className="hidden sm:inline-flex h-9 rounded-lg px-3 text-xs sm:text-sm"
                        onClick={onCreateTaskClick}
                    >
                        + Новая задача
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default Header

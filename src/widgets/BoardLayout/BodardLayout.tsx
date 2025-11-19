import React from 'react';
import Button from "../../shared/ui/Button.tsx";

function BodardLayout(props) {
    return (
        <aside className="w-64 shrink-0 border-r ...">
            <div className="p-4">
                <div className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400 mb-2">
                    Доски
                </div>

                <nav className="space-y-1">
                    {/* Активная доска */}
                    <Button variant={'primary'} className="w-full ">
                        📝 Inbox
                    </Button>

                    {/* Остальные */}
                    <Button variant={'primary'} className="w-full ">
                        💼 Работа
                    </Button>

                    {/* и т.д. */}
                </nav>

                <Button className="mt-4 text-xs text-blue-600 hover:underline">
                    + Новая доска
                </Button>
            </div>
        </aside>

    );
}

export default BodardLayout;
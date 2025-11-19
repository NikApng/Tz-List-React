import React from "react";
import clsx from "clsx";

interface ModalProps {
    isOpen?: boolean
    onClose: () => void
    children: React.ReactNode
    className?: string
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, className }) => {
    if (!isOpen) return null

    const stop = (e: React.MouseEvent) => e.stopPropagation()

    return (
        <div
            className={clsx(
                "absolute inset-0 z-1150 flex items-center justify-center bg-black/50 backdrop-blur-sm",
            )}
            onClick={onClose}
        >
            <div
                onClick={stop}
                className={clsx(
                    "bg-white dark:bg-neutral-900 rounded-xl shadow-xl p-6 min-w-[300px] max-w-[90%] transition",
                    className
                )}
            >
                {children}
            </div>
        </div>
    )
}

export default Modal

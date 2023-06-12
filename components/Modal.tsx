"use client"
import React, { useRef, useEffect } from 'react';

interface Props {
    children: React.ReactNode;
}

declare const dialogPolyfill: {
    registerDialog(dialog: HTMLElement): void;
};

const Modal = ({ children }: Props) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialogElement = dialogRef.current;
        console.log("hello")

        if (dialogElement) {
            if (!dialogElement.showModal) {
                dialogPolyfill.registerDialog(dialogElement);
            }
        }

        const handleClickOutside = (event: MouseEvent) => {
            if (dialogElement && !dialogElement.contains(event.target as Node)) {
                dialogElement.close();
                console.log("hello")
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };

    }, []);

    const openModal = () => {
        const dialogElement = dialogRef.current;

        if (dialogElement) {
            dialogElement.showModal();
        }
    };

    const closeModal = () => {
        const dialogElement = dialogRef.current;

        if (dialogElement) {
            dialogElement.close();
        }
    };

    return (
        <div>
            <button onClick={openModal}>Open Modal</button>

            <dialog ref={dialogRef}>
                {children}
                <button onClick={closeModal}>Close</button>
            </dialog>
        </div>
    );
}

export default Modal;


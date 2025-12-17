'use client';

import React, { useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';

export interface ToastProps {
    message: string;
    show: boolean;
    onClose?: () => void;
}

export function Toast({ message, show, onClose }: ToastProps) {
    useEffect(() => {
        if (show && onClose) {
            const timer = setTimeout(onClose, 3000);
            return () => clearTimeout(timer);
        }
    }, [show, onClose]);

    if (!show) return null;

    return (
        <div className="fixed bottom-8 right-8 z-50 animate-in slide-in-from-bottom-4 duration-300">
            <div className="flex items-center gap-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-6 py-4 rounded-lg shadow-2xl border border-zinc-700 dark:border-zinc-300">
                <CheckCircle2 className="w-5 h-5 text-green-400 dark:text-green-600" />
                <span className="font-medium">{message}</span>
            </div>
        </div>
    );
}

import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    glassmorphism?: boolean;
}

export function Card({ className, glassmorphism, children, ...props }: CardProps) {
    const baseClasses = 'rounded-xl border transition-all';
    const glassClasses = glassmorphism
        ? 'bg-white/80 dark:bg-black/80 backdrop-blur-xl border-zinc-200/50 dark:border-zinc-800/50 shadow-2xl'
        : 'bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-800 shadow-lg';

    return (
        <div className={`${baseClasses} ${glassClasses} ${className || ''}`} {...props}>
            {children}
        </div>
    );
}

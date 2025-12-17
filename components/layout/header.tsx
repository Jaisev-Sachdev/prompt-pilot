'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronUp } from 'lucide-react';

interface HeaderProps {
    isLandingVisible?: boolean;
    onScrollToTop?: () => void;
}

export function Header({ isLandingVisible = true, onScrollToTop }: HeaderProps) {

    // Header is transparent on landing, visible on main app
    const headerClasses = isLandingVisible
        ? 'fixed top-0 left-0 right-0 z-40 bg-transparent border-transparent transition-all duration-300'
        : 'fixed top-0 left-0 right-0 z-40 border-b border-zinc-200/50 dark:border-zinc-800/50 bg-white/80 dark:bg-black/80 backdrop-blur-xl transition-all duration-300';

    return (
        <header className={headerClasses}>
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Link href="/" className="flex items-baseline gap-1 group">
                        <span className="text-2xl font-serif font-bold tracking-tight text-zinc-200 group-hover:text-white transition-colors">
                            PromptPilot
                        </span>
                        <span className="text-2xl font-mono font-black italic bg-gradient-to-r from-indigo-500 to-indigo-400 bg-clip-text text-transparent transform skew-x-[-10deg]">
                            AI
                        </span>
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    {!isLandingVisible && onScrollToTop && (
                        <button
                            onClick={onScrollToTop}
                            className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors flex items-center gap-1"
                            aria-label="Back to top"
                        >
                            <ChevronUp className="w-4 h-4" />
                            <span className="hidden sm:inline">Back to Top</span>
                        </button>
                    )}
                    <Link
                        href="/learn"
                        className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                        Learn
                    </Link>
                </div>
            </div>
        </header>
    );
}

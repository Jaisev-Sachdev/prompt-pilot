import Link from 'next/link';
import { Github, Mail } from 'lucide-react';

export function Footer() {
    return (
        <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/50 py-8 mt-auto backdrop-blur-sm">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
                    <span>&copy; {new Date().getFullYear()} Built by <span className="font-medium text-zinc-900 dark:text-zinc-100">Jaisev Sachdev</span></span>
                    <span className="hidden md:inline text-zinc-300 dark:text-zinc-700">|</span>
                    <Link href="/terms" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                        Terms of Service
                    </Link>
                </div>

                <div className="flex items-center gap-6">
                    <Link
                        href="mailto:jaisevsachdev06@gmail.com"
                        className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                        <Mail className="w-4 h-4" />
                        <span className="hidden sm:inline">jaisevsachdev06@gmail.com</span>
                    </Link>

                    <Link
                        href="https://github.com/Jaisev-Sachdev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                    >
                        <Github className="w-4 h-4" />
                        <span>GitHub</span>
                    </Link>
                </div>
            </div>
        </footer>
    );
}

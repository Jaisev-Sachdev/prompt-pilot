import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col">
            <main className="flex-1 container mx-auto px-4 py-16 max-w-3xl">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>

                <h1 className="text-3xl font-bold font-serif text-zinc-900 dark:text-zinc-50 mb-2">Terms of Service</h1>
                <p className="text-zinc-600 dark:text-zinc-400 mb-12">Last updated: {new Date().getFullYear()}</p>

                <div className="prose dark:prose-invert prose-zinc max-w-none">
                    <section className="mb-8">
                        <h2 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using PromptPilot AI ("the Service"), you agree to be bound by these Terms of Service.
                            If you do not agree to these terms, please do not use the Service.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">2. Intellectual Property Rights</h2>
                        <div className="bg-zinc-100 dark:bg-zinc-900 p-6 rounded-lg border border-zinc-200 dark:border-zinc-800">
                            <p className="mb-3 font-medium">
                                The content, source code, functionality, and design elements of this website are the exclusive property of Jaisev Sachdev and are protected by international copyright, trademark, and other intellectual property laws.
                            </p>
                            <p>
                                <strong>You are strictly prohibited from:</strong>
                            </p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>Reproducing, copying, or cloning any part of the Service for commercial purposes.</li>
                                <li>Reverse engineering or attempting to extract the source code of the Service.</li>
                                <li>Using the Service's design or functionality to create a competing product.</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">3. Usage License</h2>
                        <p>
                            Permission is granted to temporarily access the Service for personal, non-commercial transitory viewing only.
                            This is the grant of a license, not a transfer of title.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">4. Disclaimer</h2>
                        <p>
                            The materials on PromptPilot AI are provided on an 'as is' basis. Makes no warranties, expressed or implied,
                            and hereby disclaims and negates all other warranties including, without limitation, implied warranties or
                            conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property
                            or other violation of rights.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">5. Contact</h2>
                        <p>
                            If you have any questions about these Terms of Service, please contact us at: <a href="mailto:jaisevsachdev06@gmail.com" className="text-purple-600 hover:text-purple-500 underline">jaisevsachdev06@gmail.com</a>
                        </p>
                    </section>
                </div>
            </main>
        </div>
    );
}

'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { AlertTriangle, ArrowRight, Zap, Code, Terminal, MessageSquare, BookOpen, AlertCircle } from 'lucide-react';

export default function LearnPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-purple-500/30 font-sans bg-noise relative">
            <Header isLandingVisible={false} />

            <main className="pt-24 pb-20">
                {/* 1. Hero Section */}
                <section className="container mx-auto px-6 py-12 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                        Master the <span className="retro-gradient-text px-2">Prompt</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg text-zinc-400 leading-relaxed">
                        AI isn't replacing people. It's replacing people who don't know how to use it.
                        The ability to guide AI (Prompt Engineering) is the defining skill of this decade.
                    </p>
                </section>

                {/* 2. Decoding the Buzzword */}
                <section className="container mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <Zap className="w-8 h-8 text-purple-500" />
                                <h2 className="text-3xl font-bold text-white">Decoding the Buzzword</h2>
                            </div>
                            <div className="prose prose-invert lg:prose-lg text-zinc-400">
                                <p>
                                    "Prompt Engineering" sounds technical, but it's simply <strong className="text-purple-400">communication</strong>.
                                    Think of AI as a super-intelligent intern who knows everything but has zero
                                    common sense.
                                </p>
                                <p>
                                    If you grunt "make a video" at it, you get garbage. If you provide context,
                                    examples, and constraints, you get magic. The quality of the output is a
                                    direct reflection of the quality of your input.
                                </p>
                            </div>
                        </div>

                        {/* Visual Card */}
                        <Card className="p-12 relative overflow-hidden bg-zinc-900 border-zinc-800 flex flex-col items-center justify-center gap-6">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-rose-500/10 pointer-events-none" />

                            <div className="text-center space-y-2">
                                <h3 className="text-sm font-bold tracking-widest text-blue-400 uppercase">Input</h3>
                                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto" />
                            </div>

                            <ArrowRight className="w-8 h-8 text-zinc-600 animate-pulse" />

                            <div className="text-center space-y-2">
                                <h3 className="text-sm font-bold tracking-widest text-purple-400 uppercase">Output</h3>
                                <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-rose-500 rounded-full mx-auto" />
                            </div>
                        </Card>
                    </div>
                </section>

                {/* 3. The Architect's Toolkit */}
                <section className="container mx-auto px-6 py-16 bg-zinc-900/30 mt-12 rounded-3xl border border-white/5">
                    <div className="flex items-center gap-3 mb-10">
                        <Code className="w-8 h-8 text-blue-500" />
                        <h2 className="text-3xl font-bold text-white">The Architect's Toolkit</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Zero-Shot */}
                        <Card className="p-6 bg-zinc-950 border-zinc-800 hover:border-purple-500/50 transition-colors group">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">Zero-Shot</h3>
                                <span className="px-2 py-1 rounded text-xs font-bold bg-zinc-800 text-zinc-400">BASIC</span>
                            </div>
                            <p className="text-zinc-400 text-sm mb-4 min-h-[40px]">
                                The "Google Search" method. Asking without examples.
                            </p>
                            <div className="p-3 bg-zinc-900 rounded border border-zinc-800 font-mono text-xs text-green-400">
                                "Write a poem about rust."
                            </div>
                        </Card>

                        {/* Few-Shot */}
                        <Card className="p-6 bg-zinc-950 border-zinc-800 hover:border-blue-500/50 transition-colors group">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">Few-Shot</h3>
                                <span className="px-2 py-1 rounded text-xs font-bold bg-blue-900/30 text-blue-400">POWERFUL</span>
                            </div>
                            <p className="text-zinc-400 text-sm mb-4 min-h-[40px]">
                                Teaching by example. Showing the AI the pattern you want.
                            </p>
                            <div className="p-3 bg-zinc-900 rounded border border-zinc-800 font-mono text-xs text-blue-300">
                                "Convert: Happy -{'>'} Ecstatic.<br />
                                Sad -{'>'} Despondent.<br />
                                Angry -{'>'} ?"
                            </div>
                        </Card>

                        {/* Role Prompting */}
                        <Card className="p-6 bg-zinc-950 border-zinc-800 hover:border-rose-500/50 transition-colors group">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold text-white group-hover:text-rose-400 transition-colors">Role Prompting</h3>
                                <span className="px-2 py-1 rounded text-xs font-bold bg-rose-900/30 text-rose-400">CONTEXT</span>
                            </div>
                            <p className="text-zinc-400 text-sm mb-4 min-h-[40px]">
                                Assigning a persona to narrow the search space.
                            </p>
                            <div className="p-3 bg-zinc-900 rounded border border-zinc-800 font-mono text-xs text-rose-300">
                                "Act as a Senior Python Developer. Explain loops to a junior."
                            </div>
                        </Card>

                        {/* Chain of Thought */}
                        <Card className="p-6 bg-zinc-950 border-zinc-800 hover:border-amber-500/50 transition-colors group">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">Chain of Thought</h3>
                                <span className="px-2 py-1 rounded text-xs font-bold bg-amber-900/30 text-amber-400">LOGIC</span>
                            </div>
                            <p className="text-zinc-400 text-sm mb-4 min-h-[40px]">
                                Forcing the AI to "show its work" step-by-step.
                            </p>
                            <div className="p-3 bg-zinc-900 rounded border border-zinc-800 font-mono text-xs text-amber-300">
                                "Before answering, outline the steps required to solve this."
                            </div>
                        </Card>
                    </div>
                </section>

                {/* 3.5 Strategies */}
                <section className="container mx-auto px-6 py-12">
                    <div className="flex items-center gap-3 mb-10 justify-center">
                        <BookOpen className="w-8 h-8 text-green-500" />
                        <h2 className="text-3xl font-bold text-white">Core Strategies</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="space-y-3">
                            <div className="w-10 h-10 rounded-full bg-green-900/20 text-green-500 flex items-center justify-center font-bold border border-green-500/20">1</div>
                            <h3 className="text-lg font-bold text-white">Clear Goals</h3>
                            <p className="text-zinc-400 text-sm">Don't be vague. Specify format, length, and style. Instead of "Write about X", say "Write a 500-word essay on X for beginners".</p>
                        </div>
                        <div className="space-y-3">
                            <div className="w-10 h-10 rounded-full bg-green-900/20 text-green-500 flex items-center justify-center font-bold border border-green-500/20">2</div>
                            <h3 className="text-lg font-bold text-white">Add Context</h3>
                            <p className="text-zinc-400 text-sm">Who is this for? What background info matters? "Explain quantum physics" vs "Explain quantum physics to a 5-year-old".</p>
                        </div>
                        <div className="space-y-3">
                            <div className="w-10 h-10 rounded-full bg-green-900/20 text-green-500 flex items-center justify-center font-bold border border-green-500/20">3</div>
                            <h3 className="text-lg font-bold text-white">Be Specific</h3>
                            <p className="text-zinc-400 text-sm">Avoid ambiguity. "Make it interesting" is subjective. "Use a humorous tone and include 3 metaphors" is specific.</p>
                        </div>
                        <div className="space-y-3">
                            <div className="w-10 h-10 rounded-full bg-green-900/20 text-green-500 flex items-center justify-center font-bold border border-green-500/20">4</div>
                            <h3 className="text-lg font-bold text-white">Iterate</h3>
                            <p className="text-zinc-400 text-sm">The first prompt is rarely perfect. Treat it as a conversation. Refine your request based on the AI's first draft.</p>
                        </div>
                    </div>
                </section>

                {/* 4. The AI Slop Trap */}
                <section className="container mx-auto px-6 py-16">
                    <div className="flex items-center gap-3 mb-8">
                        <AlertTriangle className="w-8 h-8 text-amber-500" />
                        <h2 className="text-3xl font-bold text-white">The "AI Slop" Trap</h2>
                    </div>

                    <div className="bg-[#09090b] border border-zinc-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">
                        {/* Glow effect */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />

                        <div className="space-y-6 relative z-10">
                            <div className="flex gap-4 items-start">
                                <div className="w-8 h-8 rounded-full bg-red-900/30 flex items-center justify-center shrink-0 border border-red-500/20">
                                    <span className="text-red-500 font-bold">✕</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Vagueness</h3>
                                    <p className="text-zinc-400">"Make it pop" means nothing to a computer. Be specific about adjectives.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="w-8 h-8 rounded-full bg-red-900/30 flex items-center justify-center shrink-0 border border-red-500/20">
                                    <span className="text-red-500 font-bold">✕</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Ignoring Context</h3>
                                    <p className="text-zinc-400">Failing to tell the AI *who* the audience is ensures a generic result.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="w-8 h-8 rounded-full bg-red-900/30 flex items-center justify-center shrink-0 border border-red-500/20">
                                    <span className="text-red-500 font-bold">✕</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Blind Acceptance</h3>
                                    <p className="text-zinc-400">AI is the drafter, you are the editor. Never copy-paste without reading.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="container mx-auto px-6 py-12 text-center border-t border-white/10 mt-12">
                    <p className="text-zinc-500 italic mb-8 text-lg">"AI rewards practice, not theory."</p>

                    <Link href="/#main-app">
                        <Button size="lg" variant="primary" className="px-12 py-6 text-lg rounded-full">
                            OPEN THE BUILDER
                        </Button>
                    </Link>
                </section>

            </main>
        </div>
    );
}

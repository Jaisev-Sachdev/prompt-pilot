'use client';


import React from 'react';
import { Loader2, Sparkles } from 'lucide-react';


export interface WriterInputProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    isAnalyzing?: boolean;
    onAnalyze?: () => void;
}

export function WriterInput({ value, onChange, placeholder, isAnalyzing, onAnalyze }: WriterInputProps) {


    const charCount = value.length;

    return (
        <div className="relative h-full flex flex-col">
            <div className="flex-1 relative">
                <textarea
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder || "Describe what you need... (e.g., 'Write an email to my boss about missing a deadline')"}
                    className="w-full h-full resize-none bg-transparent border-none focus:outline-none text-lg leading-relaxed p-6 text-zinc-900 dark:text-zinc-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
                />
            </div>

            <div className="flex items-center justify-between px-6 pb-4 pt-2 border-t border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-3">
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">
                        {charCount} characters
                    </span>
                    {isAnalyzing && (
                        <div className="flex items-center gap-2 text-xs text-purple-500 animate-pulse">
                            <Loader2 className="w-3 h-3 animate-spin" />
                            <span>AI Analyzing...</span>
                        </div>
                    )}
                </div>

                <div className="flex items-center gap-4">
                    {onAnalyze && value.length > 0 && (
                        <button
                            onClick={onAnalyze}
                            disabled={isAnalyzing}
                            className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors disabled:opacity-50"
                        >
                            <Sparkles className="w-4 h-4" />
                            Analyze
                        </button>
                    )}

                    {value && (

                        <button
                            onClick={() => onChange('')}
                            className="text-sm text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors"
                        >
                            Clear
                        </button>
                    )}
                </div>
            </div>

        </div>
    );
}

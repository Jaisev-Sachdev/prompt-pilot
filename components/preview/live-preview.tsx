'use client';

import React from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from '../ui/button';

export interface LivePreviewProps {
    prompt: string;
    onCopy: () => void;
    copied: boolean;
}

export function LivePreview({ prompt, onCopy, copied }: LivePreviewProps) {
    return (
        <div className="h-full flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800">
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                    Your Mega-Prompt
                </h2>
                <Button
                    onClick={onCopy}
                    variant={copied ? 'secondary' : 'primary'}
                    size="sm"
                    disabled={!prompt || prompt.includes('Start typing')}
                >
                    {copied ? (
                        <>
                            <Check className="w-4 h-4" />
                            Copied!
                        </>
                    ) : (
                        <>
                            <Copy className="w-4 h-4" />
                            Copy Prompt
                        </>
                    )}
                </Button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
                <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 bg-zinc-50 dark:bg-zinc-900/50 p-6 rounded-lg border border-zinc-200 dark:border-zinc-800">
                    {prompt}
                </pre>
            </div>
        </div>
    );
}

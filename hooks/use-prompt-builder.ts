// React Hook for Prompt Builder State Management
// Manages the sync between user input, tag selections, and live preview

'use client';

import { useState, useEffect } from 'react';
import { TagSelections, DEFAULT_TAG_VALUES } from '@/lib/tag-presets';
import { assembleMegaPrompt, copyToClipboard } from '@/lib/prompt-assembler';



export function usePromptBuilder() {
    const [userInput, setUserInput] = useState('');
    const [tags, setTags] = useState<TagSelections>(DEFAULT_TAG_VALUES);
    const [megaPrompt, setMegaPrompt] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    // Reusable prediction function
    const triggerAnalysis = async (textOverride?: string) => {
        const textToAnalyze = textOverride || userInput;
        if (!textToAnalyze.trim() || textToAnalyze.length < 10) return;

        setIsAnalyzing(true);
        try {
            const response = await fetch('/api/predict-context', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userInput: textToAnalyze }),
            });

            if (response.ok) {
                const predictions = await response.json();
                setTags(prev => ({ ...prev, ...predictions }));
            }
        } catch (error) {
            console.error('Failed to predict context:', error);
        } finally {
            setIsAnalyzing(false);
        }
    };

    // AI Context Prediction (Debounced) - DISABLED per user request
    // useEffect(() => {
    //     triggerAnalysis(debouncedInput);
    // }, [debouncedInput]); 

    // Update mega-prompt whenever input or tags change
    useEffect(() => {
        const prompt = assembleMegaPrompt(userInput, tags);
        setMegaPrompt(prompt);
    }, [userInput, tags]);

    // Update a single tag
    const updateTag = <K extends keyof TagSelections>(
        category: K,
        value: TagSelections[K]
    ) => {
        setTags(prev => ({ ...prev, [category]: value }));
    };

    // Copy prompt to clipboard
    const handleCopy = async () => {
        const success = await copyToClipboard(megaPrompt);
        if (success) {
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);
        }
    };

    return {
        userInput,
        setUserInput,
        tags,
        updateTag,
        megaPrompt,
        handleCopy,
        showToast,
        isAnalyzing,
        triggerAnalysis,
    };
}

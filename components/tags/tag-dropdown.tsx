'use client';

import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ChevronDown, Plus, Check } from 'lucide-react';

export interface TagDropdownProps {
    label: string;
    options: { label: string; value: string }[];
    value: string;
    onChange: (value: string) => void;
}

export function TagDropdown({ label, options, value, onChange }: TagDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isCustomMode, setIsCustomMode] = useState(false);
    const [customValue, setCustomValue] = useState('');
    const [position, setPosition] = useState({ top: 0, left: 0, width: 0, maxHeight: 400 });

    const buttonRef = useRef<HTMLButtonElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Initial check: if current value is not in options and not empty, we are in custom mode conceptually,
    // but visually we might just show it.
    // If the user selects "Custom...", we switch to input mode.

    const selectedOption = options.find(opt => opt.value === value);
    const displayLabel = selectedOption?.label || value;

    useEffect(() => {
        if (isOpen && buttonRef.current) {
            const updatePosition = () => {
                const rect = buttonRef.current!.getBoundingClientRect();
                const viewportHeight = window.innerHeight;

                const spaceBelow = viewportHeight - rect.bottom - 10;
                const spaceAbove = rect.top - 10;

                // Desire at least 250px for the dropdown
                const DESIRED_HEIGHT = 300;

                let top: number;
                let maxHeight: number;

                // Prefer opening down if there's space, or if there's more space down than up
                if (spaceBelow >= DESIRED_HEIGHT || spaceBelow >= spaceAbove) {
                    // Open Down
                    top = rect.bottom + 8;
                    maxHeight = Math.min(DESIRED_HEIGHT, spaceBelow);
                } else {
                    // Open Up
                    // We need to calculate the top position such that the bottom of the dropdown 
                    // is above the button (rect.top - 8)
                    // The dropdown top will be: buttonTop - 8 - height
                    const height = Math.min(DESIRED_HEIGHT, spaceAbove);
                    top = rect.top - 8 - height;
                    maxHeight = height;
                }

                setPosition({
                    top,
                    left: rect.left,
                    width: Math.max(rect.width, 280),
                    maxHeight
                });
            };

            updatePosition();
            window.addEventListener('scroll', updatePosition, true);
            window.addEventListener('resize', updatePosition);

            return () => {
                window.removeEventListener('scroll', updatePosition, true);
                window.removeEventListener('resize', updatePosition);
            };
        }
    }, [isOpen]);

    useEffect(() => {
        if (isCustomMode && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isCustomMode]);

    const handleCustomSubmit = () => {
        if (customValue.trim()) {
            onChange(customValue.trim());
            setIsCustomMode(false);
            setIsOpen(false);
        } else {
            setIsCustomMode(false); // Cancel if empty
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleCustomSubmit();
        } else if (e.key === 'Escape') {
            setIsCustomMode(false);
            setIsOpen(false);
        }
    };

    // If we are in custom input mode, render the input instead of the button
    if (isCustomMode) {
        return (
            <div className="relative inline-flex items-center">
                <span className="text-sm text-zinc-600 dark:text-zinc-400 mr-2 whitespace-nowrap">{label}:</span>
                <div className="relative">
                    <input
                        ref={inputRef}
                        type="text"
                        value={customValue}
                        onChange={(e) => setCustomValue(e.target.value)}
                        onBlur={handleCustomSubmit}
                        onKeyDown={handleKeyDown}
                        className="bg-white dark:bg-zinc-900 border border-purple-500 rounded-lg px-3 py-1.5 text-sm outline-none shadow-[0_0_0_2px_rgba(168,85,247,0.2)] min-w-[200px]"
                        placeholder="Type your strategy..."
                    />
                    <button
                        onMouseDown={(e) => e.preventDefault()} // Prevent blur before click
                        onClick={handleCustomSubmit}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-purple-600 hover:text-purple-700"
                    >
                        <Check className="w-4 h-4" />
                    </button>
                </div>
            </div>
        );
    }

    // Portal Content
    const dropdownContent = (
        <div className="fixed inset-0 z-[9999] flex flex-col">
            {/* Backdrop */}
            <div
                className="absolute inset-0"
                onClick={() => setIsOpen(false)}
            />

            {/* Menu */}
            <div
                className="absolute bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-xl overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-300 dark:scrollbar-thumb-zinc-700"
                style={{
                    top: position.top,
                    left: position.left,
                    minWidth: position.width,
                    maxHeight: position.maxHeight
                }}
            >
                {options.map((option) => (
                    <button
                        key={option.value}
                        onClick={() => {
                            onChange(option.value);
                            setIsOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 text-sm transition-colors border-b border-zinc-50 dark:border-zinc-800/50 last:border-0 ${value === option.value
                            ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 font-medium'
                            : 'hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300'
                            }`}
                    >
                        {option.label}
                    </button>
                ))}

                {/* Custom Option Separator */}
                <div className="h-px bg-zinc-100 dark:bg-zinc-800 my-1" />

                <button
                    onClick={() => {
                        setCustomValue('');
                        setIsCustomMode(true);
                        setIsOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 text-sm transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 text-purple-600 dark:text-purple-400 font-medium flex items-center gap-2"
                >
                    <Plus className="w-4 h-4" />
                    Custom...
                </button>
            </div>
        </div>
    );

    return (
        <>
            <button
                ref={buttonRef}
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg transition-all border ${isOpen
                    ? 'bg-zinc-100 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700'
                    : 'border-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800'
                    }`}
            >
                <span className="text-zinc-600 dark:text-zinc-400">{label}:</span>
                <span className="font-medium text-zinc-900 dark:text-zinc-50 truncate max-w-[200px]">
                    {displayLabel}
                </span>
                <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && createPortal(dropdownContent, document.body)}
        </>
    );
}


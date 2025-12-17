'use client';

import React from 'react';
import { TagDropdown } from './tag-dropdown';

export interface TagChipProps {
    label: string;
    value: string;
    options: { label: string; value: string }[];
    onChange: (value: string) => void;
    locked?: boolean;
}

export function TagChip({ label, value, options, onChange, locked }: TagChipProps) {
    const selectedOption = options.find(opt => opt.value === value);

    if (locked) {
        return (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg">
                <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">{label}</span>
                <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                    {selectedOption?.label || value}
                </span>
            </div>
        );
    }

    return (
        <div className="inline-flex items-center gap-1 px-3 py-2 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 rounded-lg hover:border-purple-500 dark:hover:border-rose-500 transition-all hover:shadow-md hover:shadow-purple-500/10">
            <TagDropdown
                label={label}
                options={options}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

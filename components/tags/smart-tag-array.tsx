'use client';

import React from 'react';
import { TagChip } from './tag-chip';
import {
    AUDIENCE_PRESETS,
    TONE_PRESETS,
    STRUCTURE_PRESETS,
    LENGTH_PRESETS,
    DOMAIN_TAGS,
    TagSelections,
} from '@/lib/tag-presets';

export interface SmartTagArrayProps {
    tags: TagSelections;
    onTagChange: <K extends keyof TagSelections>(category: K, value: TagSelections[K]) => void;
    hasInput: boolean;
}

export function SmartTagArray({ tags, onTagChange, hasInput }: SmartTagArrayProps) {
    const domainConfig = DOMAIN_TAGS[tags.domainType];

    if (!hasInput) {
        return (
            <div className="flex items-center justify-center h-24 border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-lg">
                <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                    Start typing to generate context...
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
                <TagChip
                    label="Audience"
                    value={tags.audience}
                    options={AUDIENCE_PRESETS}
                    onChange={(value) => onTagChange('audience', value)}
                />
                <TagChip
                    label="Tone"
                    value={tags.tone}
                    options={TONE_PRESETS}
                    onChange={(value) => onTagChange('tone', value)}
                />
                <TagChip
                    label="Structure"
                    value={tags.structure}
                    options={STRUCTURE_PRESETS}
                    onChange={(value) => onTagChange('structure', value)}
                />
                <TagChip
                    label="Length"
                    value={tags.length}
                    options={LENGTH_PRESETS}
                    onChange={(value) => onTagChange('length', value)}
                />
            </div>

            {domainConfig && (
                <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-200 dark:border-zinc-800">
                    <TagChip
                        label={domainConfig.label}
                        value={tags.domainValue}
                        options={domainConfig.presets}
                        onChange={(value) => onTagChange('domainValue', value)}
                    />
                </div>
            )}
        </div>
    );
}

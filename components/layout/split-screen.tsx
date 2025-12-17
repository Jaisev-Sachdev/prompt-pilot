'use client';

import React from 'react';
import { Card } from '../ui/card';

export interface SplitScreenProps {
    leftPanel: React.ReactNode;
    rightPanel: React.ReactNode;
}

export function SplitScreen({ leftPanel, rightPanel }: SplitScreenProps) {
    return (
        <div className="h-full w-full flex flex-col lg:flex-row gap-6">
            {/* Left Panel: Input + Smart Tags */}
            <Card glassmorphism className="flex-1 flex flex-col min-h-0 h-full overflow-hidden">
                {leftPanel}
            </Card>

            {/* Right Panel: Live Preview */}
            <Card glassmorphism className="flex-1 flex flex-col min-h-0 h-full overflow-hidden">
                {rightPanel}
            </Card>
        </div>
    );
}

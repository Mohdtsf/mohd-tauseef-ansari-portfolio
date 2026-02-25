import React from 'react';
import { Terminal } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Logo = ({ className }: { className?: string }) => {
    return (
        <div className={cn("flex items-center gap-2 group", className)}>
            <Terminal className="text-neon-blue group-hover:text-electric-purple transition-colors shrink-0" size={28} />
            <span className="font-mono font-bold text-xl tracking-tighter text-foreground group-hover:text-gradient transition-all">
                Mohdtsf<span className="text-neon-blue animate-cursor-blink">_</span>
            </span>
        </div>
    );
};

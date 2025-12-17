'use client';

interface LandingHeroProps {
    onScrollToMain: () => void;
}

export function LandingHero({ onScrollToMain }: LandingHeroProps) {
    return (
        <section className="relative h-[100svh] w-full snap-section overflow-hidden bg-black">
            {/* Spline 3D Interactive - Background */}
            <div className="absolute inset-0 w-full h-full pointer-events-none opacity-60 scale-125">
                <iframe
                    src="https://my.spline.design/retrofuturismbganimation-Nx7F8mhwbTkV8nPKUTtSXWhc/"
                    frameBorder="0"
                    width="100%"
                    height="100%"
                    className="w-full h-full"
                    title="PromptPilot AI Interactive Landing"
                />
            </div>
        </section>
    );
}

'use client';

import { useEffect, useState } from 'react';

export function useScrollPosition() {
    const [scrollY, setScrollY] = useState(0);
    const [isLandingVisible, setIsLandingVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrollY(currentScrollY);

            // Landing is visible if scroll position is less than 80% of viewport height
            setIsLandingVisible(currentScrollY < window.innerHeight * 0.8);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial call

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToMain = () => {
        const mainSection = document.getElementById('main-app');
        mainSection?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return {
        scrollY,
        isLandingVisible,
        scrollToMain,
        scrollToTop,
    };
}

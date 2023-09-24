'use client';

import { useState, useEffect } from 'react';

export function useWindowScroll(scrollAt: number): { isScrolled: boolean } {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onWindowScroll = () => {
      const isScrollAtTop = window.scrollY < scrollAt;

      setIsScrolled(!isScrollAtTop);
    };

    window.addEventListener('scroll', onWindowScroll);

    return () => window.removeEventListener('scroll', onWindowScroll);
  }, [scrollAt]);

  return { isScrolled };
}

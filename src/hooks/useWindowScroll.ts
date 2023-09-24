'use client';

import { useState, useEffect, useCallback } from 'react';

export function useWindowScroll(scrollAt: number): { isScrolled: boolean } {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const onWindowScroll = useCallback(() => {
    const isScrollAtTop = window.scrollY < scrollAt;

    setIsScrolled(!isScrollAtTop);
  }, [scrollAt]);

  useEffect(() => {
    window.addEventListener('scroll', onWindowScroll);

    return () => window.removeEventListener('scroll', onWindowScroll);
  }, [onWindowScroll]);

  return { isScrolled };
}

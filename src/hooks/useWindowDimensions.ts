'use client';

import { useState, useEffect } from 'react';

function getWindowDimensions(): { width: number; height: number } {
  const { innerWidth: width, innerHeight: height } = window;

  return { width, height };
}

export function useWindowDimensions(): { width: number; height: number } {
  const [windowDimesions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    const onSize = () => {
      setWindowDimensions(getWindowDimensions);
    };

    window.addEventListener('resize', onSize);

    return () => window.removeEventListener('resize', onSize);
  }, []);

  return windowDimesions;
}

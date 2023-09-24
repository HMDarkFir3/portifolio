import { useState, useEffect, useCallback } from 'react';

interface WindowDimensions {
  width: number;
  height: number;
}

function getWindowDimensions(): WindowDimensions {
  if (typeof window !== 'undefined') {
    const { innerHeight, innerWidth } = window;
    return { width: innerWidth, height: innerHeight };
  }

  return { width: 0, height: 0 };
}

export function useWindowDimensions(): WindowDimensions {
  const [windowDimesions, setWindowDimensions] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });

  const updateScreen = useCallback(
    () => setWindowDimensions(getWindowDimensions()),
    [setWindowDimensions]
  );

  useEffect(() => {
    window.addEventListener('resize', updateScreen);

    return () => window.removeEventListener('resize', updateScreen);
  }, [updateScreen]);

  return windowDimesions;
}

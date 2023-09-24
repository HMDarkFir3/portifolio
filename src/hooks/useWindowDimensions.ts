import { useState, useEffect } from 'react';

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;

  return { width, height };
};

export function useWindowDimensions() {
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

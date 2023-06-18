import { useEffect, useState } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleWindowResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return windowDimensions;
}

export default useWindowDimensions;

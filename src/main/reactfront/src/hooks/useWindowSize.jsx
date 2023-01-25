import { useCallback, useEffect, useState } from 'react';

const STAND_SIZE = 640;
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(0);
  const handleSize = useCallback(() => {
    setWindowSize(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleSize);
    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, []);

  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, []);

  return { standardWindowSize: windowSize < STAND_SIZE };
};
export default useWindowSize;

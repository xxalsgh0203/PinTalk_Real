import { useCallback, useEffect, useState } from 'react';

const STAND_SIZE = 640;
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const handleSize = useCallback(() => {
    setWindowSize(window.innerWidth);
  }, []);

  const toggleActive = () => {
    setIsActive((prev) => !prev);
  };

  const smallSize = windowSize < STAND_SIZE;
  useEffect(() => {
    !smallSize && setIsActive(false);
  }, [smallSize]);

  useEffect(() => {
    window.addEventListener('resize', handleSize);
    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, []);

  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, []);

  return { smallSize, isActive, toggleActive };
};
export default useWindowSize;

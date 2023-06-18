import { useEffect, useState } from 'react';

const getLocalStorageValue = (key, initialValue) => {
  const value = JSON.parse(localStorage.getItem(key));
  if (value) return value;

  if (initialValue instanceof Function) return initialValue();
  return initialValue;
};

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() =>
    getLocalStorageValue(key, initialValue)
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;

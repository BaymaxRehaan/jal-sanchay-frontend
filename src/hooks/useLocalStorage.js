/**
 * useLocalStorage — simple hook to sync state with localStorage.
 *
 * Usage:
 *   const [value, setValue] = useLocalStorage("key", defaultValue);
 */
import { useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const val = value instanceof Function ? value(storedValue) : value;
      setStoredValue(val);
      window.localStorage.setItem(key, JSON.stringify(val));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

// useToggleWithOutsideClick.ts
import { useState, useCallback, useRef, useEffect } from 'react';

/**
 * Toggle hook with outside click detection
 * @param initialState - Initial boolean value (default: false)
 * @returns [currentValue, toggleFunction, setValue, ref]
 */
export function useToggleWithOutsideClick(initialState: boolean = false): [
  boolean,
  () => void,
  (value: boolean) => void,
  React.RefObject<any>
] {
  const [value, setValue] = useState<boolean>(initialState);
  const ref = useRef<HTMLDivElement>(null);

  const toggle = useCallback(() => {
    setValue(prevValue => !prevValue);
  }, []);

  // Outside click handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setValue(false);
      }
    };

    if (value) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [value]);

  return [value, toggle, setValue, ref];
}
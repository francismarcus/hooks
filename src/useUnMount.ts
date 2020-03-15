import { useRef } from 'react';
import { useMount } from './useMount';

export const useUnmount = (fn: () => any) => {
  const fnRef = useRef(fn);
  fnRef.current = fn;

  useMount(() => () => fnRef.current());
};

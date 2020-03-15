import { useMount } from './useMount';

export const useDidMount = (fn: () => void) => {
  useMount(() => {
    fn();
  });
};


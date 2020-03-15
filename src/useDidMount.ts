import useMount from './useMount';

const useDidMount = (fn: () => void) => {
  useMount(() => {
    fn();
  });
};

export default useDidMount;

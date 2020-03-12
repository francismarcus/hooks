import { useEffect, useRef } from 'react';

const useDidUpdate = (fn: () => any, dependencies: any[] | undefined) => {
  const DidMountRef = useRef(false);
  useEffect(() => {
    if (!DidMountRef.current) {
      DidMountRef.current = true;
      return;
    }

    return fn && fn();
  }, dependencies);
};

export default useDidUpdate;

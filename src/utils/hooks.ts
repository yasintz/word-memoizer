import React from 'react';

function useStateFromProp<T>(initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => setValue(initialValue), [initialValue]);

  return [value, setValue];
}

function usePrevious<T>(value: T, setInitial?: boolean): T {
  const ref = React.useRef<T>(setInitial ? value : undefined);

  React.useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

function useMemoWithPrevDeps<T, D>(
  factory: (prevDeps: ReadonlyArray<D>, prevResult: T) => T,
  deps: ReadonlyArray<D>,
): T {
  const prevValRef = React.useRef<T>(undefined);
  const depsMemo = React.useMemo(() => deps, deps); // eslint-disable-line
  const prevDeps = usePrevious(depsMemo);
  const factoryMemo = React.useCallback((prevVal: T) => factory(prevDeps || [], prevVal), deps); // eslint-disable-line

  return React.useMemo(() => {
    const value = factoryMemo(prevValRef.current);
    prevValRef.current = value;

    return value;
  }, [factoryMemo]);
}

function useKeepValue<T>(value: T | undefined, wantedValue: T): T {
  const constantWantedValue = React.useRef(wantedValue).current;
  const ref = React.useRef(value);

  if (ref.current !== constantWantedValue && value !== ref.current) {
    ref.current = value;
  }

  return ref.current;
}

function useStateWithCallback<T>(
  initialState: T,
  callback: (s: T) => void,
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [state, setState] = React.useState(initialState);

  React.useEffect(() => callback(state), [state, callback]);

  return [state, setState];
}

function useWindowEvent<T extends keyof WindowEventMap>(event: T, callback: (e: WindowEventMap[T]) => void) {
  React.useEffect(() => {
    window.addEventListener(event, callback);

    return () => window.removeEventListener(event, callback);
  }, [event, callback]);
}
type UseObjectStateSetStateAction<T> = (newValue: Partial<T>, isCompletely?: boolean) => void;
function useObjectState<T>(initialState: T): [T, UseObjectStateSetStateAction<T>] {
  const [state, setState] = React.useState(initialState);
  const setMergedState = React.useCallback((newState, isCompletely) => {
    if (isCompletely) {
      setState(prevState => newState);
    } else {
      setState(prevState => ({ ...prevState, ...newState }));
    }
  }, []);

  return [state, setMergedState];
}
function useArrayState<T>(initialState: T[]): [T[], React.Dispatch<React.SetStateAction<Partial<T>>>] {
  const [state, setState] = React.useState(initialState);
  const setMergedState = React.useCallback(newState => setState(prevState => [...prevState, ...newState]), []);

  return [state, setMergedState];
}

export {
  useStateFromProp,
  usePrevious,
  useKeepValue,
  useStateWithCallback,
  useWindowEvent,
  useObjectState,
  useArrayState,
  useMemoWithPrevDeps,
};

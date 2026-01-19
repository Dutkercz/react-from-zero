import { createContext, useState, type Dispatch, type SetStateAction } from "react";

interface CounterContextType {
  counter: number;
  setCounter: Dispatch<SetStateAction<number>>;
}

export const CounterContext = createContext<CounterContextType | null>(null);


// criar provider
export const CounterContextProvider = ({ children } : any) => {
  const [counter, setCounter] = useState<number>(5);

  return (
    <CounterContext.Provider value ={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
};

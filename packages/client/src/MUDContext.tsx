import { createContext, ReactNode, useContext, useEffect } from "react";
import { SetupResult } from "./mud/setup";
import { mudStore } from "./mudStore";
const MUDContext = createContext<SetupResult | null>(null);

type Props = {
  children: ReactNode;
  value: SetupResult;
};

export const MUDProvider = ({ children, value }: Props) => {
  const currentValue = useContext(MUDContext);
  if (currentValue) throw new Error("MUDProvider can only be used once");
  useEffect(()=>{
mudStore.setState(value)
  },[value])
  return <MUDContext.Provider value={value}>{children}</MUDContext.Provider>;
};

export const useMUD = () => {
  const value = useContext(MUDContext);
  if (!value) throw new Error("Must be used within a MUDProvider");
  return value;
};

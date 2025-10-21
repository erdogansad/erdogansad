import { createContext, useContext, useRef, type RefObject } from "react";

const RefContext = createContext<{ contactRef: RefObject<HTMLElement | null> | null }>({
  contactRef: null,
});

export function RefProvider({ children }: { children: React.ReactNode }) {
  const contactRef = useRef<HTMLElement | null>(null);

  return <RefContext.Provider value={{ contactRef }}>{children}</RefContext.Provider>;
}

export const useSharedRef = () => useContext(RefContext);

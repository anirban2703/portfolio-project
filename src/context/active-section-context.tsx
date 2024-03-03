"use client";
import type { SectionName } from "@/lib/types";
import React, { useState, createContext, useContext } from "react";

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};
type ActiveSectionContextType = {
  timeofLastClick: number;
  settimeofLastClick: React.Dispatch<React.SetStateAction<number>>;
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [timeofLastClick, settimeofLastClick] = useState(0);
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  return (
    <ActiveSectionContext.Provider
      value={{
        timeofLastClick,
        settimeofLastClick,
        activeSection,
        setActiveSection,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export default ActiveSectionContextProvider;
export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);

  if (context == null) {
    throw new Error(
      "useActiveSection must be used within a ActiveSectionContextProvider"
    );
  }

  return context;
};

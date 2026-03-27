"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { DATA as INITIAL_DATA } from "@/data/resume";

type ResumeData = typeof INITIAL_DATA;

interface ResumeContextType {
  data: ResumeData;
  updateData: (newData: Partial<ResumeData>) => void;
  resetData: () => void;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export function ResumeProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<ResumeData>(INITIAL_DATA);

  // Load from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem("resume-data");
    if (savedData) {
      try {
        setData(JSON.parse(savedData));
      } catch (e) {
        console.error("Failed to parse saved resume data", e);
      }
    }
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem("resume-data", JSON.stringify(data));
  }, [data]);

  const updateData = (newData: Partial<ResumeData>) => {
    setData((prev) => ({ ...prev, ...newData }));
  };

  const resetData = () => {
    setData(INITIAL_DATA);
    localStorage.removeItem("resume-data");
  };

  return (
    <ResumeContext.Provider value={{ data, updateData, resetData }}>
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  const context = useContext(ResumeContext);
  if (context === undefined) {
    throw new Error("useResume must be used within a ResumeProvider");
  }
  return context;
}

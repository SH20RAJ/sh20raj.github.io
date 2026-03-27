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
  const [isMounted, setIsMounted] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    setIsMounted(true);
    const savedData = localStorage.getItem("resume-data");
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        // Only update if it looks like our data structure
        if (parsed && typeof parsed === "object" && "name" in parsed) {
          setData(parsed);
        }
      } catch (e) {
        console.error("Failed to parse saved resume data", e);
      }
    }
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("resume-data", JSON.stringify(data));
    }
  }, [data, isMounted]);

  const updateData = (newData: Partial<ResumeData>) => {
    setData((prev) => ({ ...prev, ...newData }));
  };

  const resetData = () => {
    setData(INITIAL_DATA);
    localStorage.removeItem("resume-data");
  };

  return (
    <ResumeContext.Provider value={{ data, updateData, resetData }}>
      <div className={!isMounted ? "invisible" : ""}>
        {children}
      </div>
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

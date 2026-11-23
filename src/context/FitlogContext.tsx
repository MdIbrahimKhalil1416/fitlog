"use client";

import { IWorkout } from "@/types/Workout";
import React, { createContext, ReactNode, useState } from "react";

interface IFitLogContext {
  todayPlan: IWorkout[];
  setTodayPlan: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  saved: IWorkout[];
  setSaved: React.Dispatch<React.SetStateAction<IWorkout[]>>;
}

export const FitLogContext = createContext<IFitLogContext>({
  todayPlan: [],
  setTodayPlan: () => {},
  saved: [],
  setSaved: () => {},
});

const FitLogProvider = ({ children }: { children: ReactNode }) => {
  const [todayPlan, setTodayPlan] = useState<IWorkout[]>([]);
  const [saved, setSaved] = useState<IWorkout[]>([]);

  const sharedData = {
    todayPlan,
    setTodayPlan,
    saved,
    setSaved,
  };

  return (
    <FitLogContext.Provider value={sharedData}>
      {children}
    </FitLogContext.Provider>
  );
};

export default FitLogProvider;
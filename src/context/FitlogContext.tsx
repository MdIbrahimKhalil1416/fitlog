"use client";

import { IWorkout } from "@/types/Workout";
import React, { createContext, ReactNode, useEffect, useState } from "react";

interface IFitLogContext {
  todayPlan: IWorkout[];
  setTodayPlan: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  saved: IWorkout[];
  setSaved: React.Dispatch<React.SetStateAction<IWorkout[]>>;
  doneIds: number[];
  setDoneIds: React.Dispatch<React.SetStateAction<number[]>>;
  isLoaded: boolean;
}

export const FitLogContext = createContext<IFitLogContext>({
  todayPlan: [],
  setTodayPlan: () => {},
  saved: [],
  setSaved: () => {},
  doneIds: [],
  setDoneIds: () => {},
  isLoaded: false,
});

const FitLogProvider = ({ children }: { children: ReactNode }) => {
  const [todayPlan, setTodayPlan] = useState<IWorkout[]>([]);
  const [saved, setSaved] = useState<IWorkout[]>([]);
  const [doneIds, setDoneIds] = useState<number[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);


  // Load from localStorage once (only runs in the browser)
  useEffect(() => {
    const storedPlan = localStorage.getItem("todayPlan");
    const storedSaved = localStorage.getItem("saved");
    const storedDone = localStorage.getItem("doneIds");

    /* eslint-disable react-hooks/set-state-in-effect */
    if (storedPlan) setTodayPlan(JSON.parse(storedPlan));
    if (storedSaved) setSaved(JSON.parse(storedSaved));
    if (storedDone) setDoneIds(JSON.parse(storedDone));
    setIsLoaded(true);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  // Save to localStorage (skip until stored data is loaded)


  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem("todayPlan", JSON.stringify(todayPlan));
    localStorage.setItem("saved", JSON.stringify(saved));
    localStorage.setItem("doneIds", JSON.stringify(doneIds));
  }, [todayPlan, saved, doneIds, isLoaded]);

  const sharedData = {
    todayPlan,
    setTodayPlan,
    saved,
    setSaved,
    doneIds,
    setDoneIds,
    isLoaded,
  };

  return (
    <FitLogContext.Provider value={sharedData}>
      {children}
    </FitLogContext.Provider>
  );
};

export default FitLogProvider;
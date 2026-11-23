"use client";

import { FitLogContext } from "@/context/FitlogContext";
import { IWorkout } from "@/types/Workout";
import { useContext } from "react";
import { FiPlus } from "react-icons/fi";
import { toast } from "react-toastify";

const AddToPlanButton = ({ workout }: { workout: IWorkout }) => {
  const { todayPlan, setTodayPlan } = useContext(FitLogContext);

  const isAdded = todayPlan.some((item: IWorkout) => item.id === workout.id);
  const isFull = todayPlan.length >= 5;

  const handleAddToPlan = () => {
    if (isAdded) {
      toast.warning(`${workout.name} is already in today's plan`);
      return;
    }

    if (isFull) {
      toast.error("Today's plan is full (max 5 lifts)");
      return;
    }

    setTodayPlan([...todayPlan, workout]);
    toast.success(`${workout.name} added to today's plan`);
  };

  return (
    <button
      onClick={handleAddToPlan}
      disabled={isFull}
      className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-[#C6FF00] py-3 font-bold uppercase text-black hover:bg-[#b3e600] transition disabled:cursor-not-allowed disabled:opacity-50"
    >
      <FiPlus />
      {isAdded ? "Added to plan" : isFull ? "Plan is full" : "Add to today's plan"}
    </button>
  );
};

export default AddToPlanButton;

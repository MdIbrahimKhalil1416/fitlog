"use client";

import { FitLogContext } from "@/context/FitlogContext";
import { IWorkout } from "@/types/Workout";
import { useContext } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { toast } from "react-toastify";

const SaveButton = ({ workout }: { workout: IWorkout }) => {
  const { saved, setSaved } = useContext(FitLogContext);

  const isSaved = saved.some((item: IWorkout) => item.id === workout.id);

  const handleSave = () => {
    if (isSaved) {
      toast.warning(`${workout.name} is already saved`);
      return;
    }

    setSaved([...saved, workout]);
    toast.success(`${workout.name} saved for later`);
  };

  return (
    <button
      onClick={handleSave}
      className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-[#C6FF00] py-3 font-bold uppercase text-[#C6FF00] hover:bg-[#C6FF00]/10 transition"
    >
      {isSaved ? <FaHeart /> : <FaRegHeart />}
      {isSaved ? "Saved" : "Save for later"}
    </button>
  );
};

export default SaveButton;

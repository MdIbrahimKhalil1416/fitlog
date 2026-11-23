"use client";

import { FitLogContext } from "@/context/FitlogContext";
import { IWorkout } from "@/types/Workout";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { FaFire, FaStar } from "react-icons/fa";
import { FiCheck, FiClock, FiX } from "react-icons/fi";
import { toast } from "react-toastify";

interface IPlanCardProps {
  workout: IWorkout;
  listType: "plan" | "saved";
}

const PlanCard = ({ workout, listType }: IPlanCardProps) => {
  const { todayPlan, setTodayPlan, saved, setSaved, doneIds, setDoneIds } =
    useContext(FitLogContext);

  const isDone = listType === "plan" && doneIds.includes(workout.id);

  const handleDone = () => {
    if (isDone) return;
    setDoneIds([...doneIds, workout.id]);
    toast.success(`${workout.name} marked as done`);
  };

  const handleRemove = () => {
    if (listType === "plan") {
      setTodayPlan(todayPlan.filter((item: IWorkout) => item.id !== workout.id));
      setDoneIds(doneIds.filter((id: number) => id !== workout.id));
      toast.info(`${workout.name} removed from today's plan`);
    } else {
      setSaved(saved.filter((item: IWorkout) => item.id !== workout.id));
      toast.info(`${workout.name} removed from saved`);
    }
  };

  return (
    <div
      className={`flex flex-col sm:flex-row sm:items-center gap-4 rounded-xl border border-[#222329] bg-[#15161B] p-4 transition ${
        isDone ? "opacity-50" : ""
      }`}
    >
      {/* Thumbnail */}
      <Image
        src={workout.image}
        alt={workout.name}
        width={100}
        height={100}
        className="h-20 w-20 rounded-lg object-cover"
      />

      {/* Info */}
      <div className="flex-1">
        <h3 className={`font-display text-lg text-white font-bold uppercase ${isDone ? "line-through" : ""}`}>
          {workout.name}
        </h3>
        <p className="text-[#9296A1] text-xs mt-1">{workout.equipment}</p>
        <div className="flex flex-wrap gap-4 mt-2 text-xs text-[#9296A1]">
          <span className="flex items-center gap-1">
            <FiClock /> {workout.duration} min
          </span>
          <span className="flex items-center gap-1">
            <FaFire /> {workout.caloriesBurned} kcal
          </span>
          <span className="flex items-center gap-1 text-[#C6FF00]">
            <FaStar /> {workout.rating}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap items-center gap-2">
        <Link
          href={`/workouts/${workout.id}`}
          className="rounded-lg border border-[#C6FF00] px-4 py-2 text-xs font-bold text-[#C6FF00] hover:bg-[#C6FF00]/10 transition"
        >
          View Details
        </Link>

        {listType === "plan" && (
          <button
            onClick={handleDone}
            disabled={isDone}
            className="flex items-center gap-1 rounded-lg bg-[#C6FF00] px-4 py-2 text-xs font-bold text-black hover:bg-[#b3e600] transition disabled:cursor-not-allowed"
          >
            <FiCheck /> {isDone ? "Done" : "Mark as Done"}
          </button>
        )}

        <button
          onClick={handleRemove}
          aria-label="Remove"
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#222329] text-[#9296A1] hover:border-red-500 hover:text-red-500 transition"
        >
          <FiX />
        </button>
      </div>
    </div>
  );
};

export default PlanCard;

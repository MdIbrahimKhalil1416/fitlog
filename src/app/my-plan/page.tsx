"use client";

import { FitLogContext } from "@/context/FitlogContext";
import { IWorkout } from "@/types/Workout";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";

const MyPlan = () => {
  const { todayPlan, saved } = useContext(FitLogContext);
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");
  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">(
    "duration",
  );

  // Metrics (Today's Plan theke)
  const totalMinutes = todayPlan.reduce((sum, w) => sum + w.duration, 0);
  const totalCalories = todayPlan.reduce((sum, w) => sum + w.caloriesBurned, 0);

  // Sort
  const sortWorkouts = (workouts: IWorkout[]) => {
    const sorted = [...workouts];
    if (sortBy === "duration") {
      sorted.sort((a, b) => b.duration - a.duration);
    } else if (sortBy === "calories") {
      sorted.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    } else if (sortBy === "rating") {
      sorted.sort((a, b) => b.rating - a.rating);
    }
    return sorted;
  };

  const currentList = sortWorkouts(activeTab === "plan" ? todayPlan : saved);

  return (
    <section className="max-w-[1280px] mx-auto w-full px-6 py-12">
      {/* Title */}
      <h1 className="text-white text-4xl font-bold uppercase">My Plan</h1>
      <p className="text-[#9296A1] text-sm mt-2">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      {/* Metrics */}
      <div className="mt-8 grid grid-cols-3 rounded-xl border border-[#222329] bg-[#15161B]">
        <div className="p-5">
          <p className="text-[#9296A1] text-xs">Exercises</p>
          <p className="text-[#C6FF00] text-3xl font-bold mt-2">
            {todayPlan.length}
          </p>
        </div>
        <div className="p-5 border-l border-[#222329]">
          <p className="text-[#9296A1] text-xs">Minutes</p>
          <p className="text-white text-3xl font-bold mt-2">{totalMinutes}</p>
        </div>
        <div className="p-5 border-l border-[#222329]">
          <p className="text-[#9296A1] text-xs">Calories</p>
          <p className="text-white text-3xl font-bold mt-2">{totalCalories}</p>
        </div>
      </div>

      {/* Tabs + Sort */}
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex rounded-lg border border-[#222329] bg-[#15161B] p-1">
          <button
            onClick={() => setActiveTab("plan")}
            className={`px-4 py-2 text-xs rounded-md ${
              activeTab === "plan"
                ? "bg-[#222329] text-white font-bold"
                : "text-[#9296A1]"
            }`}
          >
            Today&apos;s Plan
          </button>
          <button
            onClick={() => setActiveTab("saved")}
            className={`px-4 py-2 text-xs rounded-md ${
              activeTab === "saved"
                ? "bg-[#222329] text-white font-bold"
                : "text-[#9296A1]"
            }`}
          >
            Saved
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[#9296A1] text-xs">Sort By</span>
          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value as "duration" | "calories" | "rating")
            }
            className="bg-[#15161B] border border-[#222329] text-white text-xs rounded-md px-3 py-2"
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      {/* List / Empty State */}
      <div className="mt-6">
        {currentList.length === 0 ? (
          <div className="rounded-xl border border-dashed border-[#2A2B31] py-20 text-center">
            <h3 className="text-white text-xl font-bold uppercase">
              Nothing here yet
            </h3>
            <p className="text-[#9296A1] text-xs mt-2">
              Browse the library and add a lift to get today moving.
            </p>
            <Link
              href="/"
              className="inline-block mt-6 rounded-full bg-[#C6FF00] px-6 py-2 text-xs font-bold text-black"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {currentList.map((workout) => (
              <div
                key={workout.id}
                className="flex flex-col sm:flex-row sm:items-center gap-4 rounded-xl border border-[#222329] bg-[#15161B] p-4"
              >
                <Image
                  src={workout.image}
                  alt={workout.name}
                  width={100}
                  height={100}
                  className="h-20 w-20 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-white font-bold uppercase">
                    {workout.name}
                  </h3>
                  <p className="text-[#9296A1] text-xs mt-1">
                    {workout.equipment}
                  </p>
                  <div className="flex gap-4 mt-2 text-xs text-[#9296A1]">
                    <span>◷ {workout.duration} min</span>
                    <span>🔥 {workout.caloriesBurned} kcal</span>
                    <span className="text-[#C6FF00]">★ {workout.rating}</span>
                  </div>
                </div>
                <Link
                  href={`/workouts/${workout.id}`}
                  className="rounded-lg border border-[#C6FF00] px-4 py-2 text-xs font-bold text-[#C6FF00]"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MyPlan;
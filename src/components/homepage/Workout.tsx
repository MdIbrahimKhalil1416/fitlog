import React from "react";
import WorkoutCard from "../shared/WorkoutCard";
import { IWorkout } from "@/types/Workout";

const getWorkouts = async (): Promise<IWorkout[]> => {
  try {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching workouts data:", error);
    return [];
  }
};

const Workout = async () => {
  const workoutData = await getWorkouts();

  return (
    <section id="library" className="max-w-[1280px] mx-auto px-6 py-12 scroll-mt-4">
      {/* Section Heading */}
      <div className="mb-8">
        <h2 className="font-display text-white text-3xl font-bold uppercase">
          THE LIBRARY
        </h2>
        <p className="text-[#9296A1] text-sm mt-2">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* Workout Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {workoutData.map((workout: IWorkout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </section>
  );
};

export default Workout;

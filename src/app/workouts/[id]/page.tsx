import { IWorkout } from "@/types/Workout";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

interface IWorkoutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getWorkouts = async () => {
  try {
    const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching workouts data:", error);
    return [];
  }
};

const WorkoutDetailsPage = async ({ params }: IWorkoutDetailsPageProps) => {
  const { id } = await params;
  const workoutsData = await getWorkouts();

  const workout = workoutsData.find(
    (workout: IWorkout) => String(workout.id) === String(id),
  ) as IWorkout;

  if (!workout) {
    notFound();
  }

  return (
    <div className="max-w-[1280px] mx-auto px-6 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-2xl border border-[#222329] bg-[#15161B]">
        {/* Workout Image */}
        <div className="relative min-h-[350px]">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Workout Details */}
        <div className="flex flex-col gap-5 p-6 lg:p-10">
          {/* Title */}
          <h1 className="text-3xl font-extrabold uppercase text-white md:text-4xl">
            {workout.name}
          </h1>

          {/* Description */}
          <p className="text-[#9296A1] leading-7">{workout.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded px-3 py-1 text-xs font-bold uppercase bg-[#252C16] text-[#C6FF00]"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Key Specs */}
          <div className="rounded-xl bg-[#1E1F25] p-4 text-sm">
            <p className="flex justify-between py-2 border-b border-[#292A30]">
              <span className="text-[#9296A1]">EQUIPMENT</span>
              <span className="font-bold text-white">{workout.equipment}</span>
            </p>
            <p className="flex justify-between py-2 border-b border-[#292A30]">
              <span className="text-[#9296A1]">DIFFICULTY</span>
              <span className="font-bold text-white">{workout.difficulty}</span>
            </p>
            <p className="flex justify-between py-2 border-b border-[#292A30]">
              <span className="text-[#9296A1]">SETS</span>
              <span className="font-bold text-white">{workout.sets}</span>
            </p>
            <p className="flex justify-between py-2 border-b border-[#292A30]">
              <span className="text-[#9296A1]">REPS</span>
              <span className="font-bold text-white">{workout.reps}</span>
            </p>
            <p className="flex justify-between py-2 border-b border-[#292A30]">
              <span className="text-[#9296A1]">DURATION</span>
              <span className="font-bold text-white">{workout.duration} min</span>
            </p>
            <p className="flex justify-between py-2 border-b border-[#292A30]">
              <span className="text-[#9296A1]">CALORIES</span>
              <span className="font-bold text-white">{workout.caloriesBurned} kcal</span>
            </p>
            <p className="flex justify-between py-2">
              <span className="text-[#9296A1]">RATING</span>
              <span className="font-bold text-[#C6FF00]">★ {workout.rating}</span>
            </p>
          </div>

          {/* Instructions */}
          <div>
            <h3 className="mb-3 text-lg font-bold text-white">INSTRUCTIONS</h3>
            <ol className="space-y-3">
              {workout.instructions.map((step, index) => (
                <li key={index} className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#C6FF00] text-xs font-bold text-black">
                    {index + 1}
                  </span>
                  <span className="text-sm text-[#9296A1]">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <button className="flex-1 rounded-lg bg-[#C6FF00] py-3 font-bold uppercase text-black hover:bg-[#b3e600] transition">
              + Add to today&apos;s plan
            </button>
            <button className="flex-1 rounded-lg border border-[#C6FF00] py-3 font-bold uppercase text-[#C6FF00] hover:bg-[#C6FF00]/10 transition">
              ♡ Save for later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailsPage;
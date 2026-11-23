import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFire, FaStar } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { IWorkout } from "@/types/Workout";

interface IWorkoutCardProps {
  workout: IWorkout;
}

const WorkoutCard = ({ workout }: IWorkoutCardProps) => {
  return (
    <Link href={`/workouts/${workout.id}`} className="block h-full">
      <div className="h-full bg-[#15161B] border border-[#222329] rounded-xl overflow-hidden group hover:border-[#C6FF00]/50 transition-all duration-300">
        {/* Workout Image */}
        <div className="h-[200px] overflow-hidden">
          <Image
            src={workout.image}
            alt={workout.name}
            height={600}
            width={600}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Card Content */}
        <div className="p-5">
          {/* Muscle Groups */}
          <div className="flex flex-wrap gap-2 mb-3">
            {workout.muscleGroups.map((muscle: string) => (
              <span
                key={muscle}
                className="bg-[#252C16] text-[#C6FF00] text-[10px] font-bold px-2 py-1 rounded"
              >
                {muscle.toUpperCase()}
              </span>
            ))}
          </div>

          {/* Workout Name */}
          <h3 className="font-display text-white text-lg font-bold uppercase mb-2 group-hover:text-[#C6FF00] transition-colors">
            {workout.name}
          </h3>

          {/* Equipment */}
          <p className="text-[#9296A1] text-xs">{workout.equipment}</p>

          {/* Workout Statistics */}
          <div className="flex items-center justify-between mt-5 pt-4 border-t border-[#292A30]">
            <div className="flex items-center gap-4 text-[#9296A1] text-xs">
              <span className="flex items-center gap-1">
                <FiClock /> {workout.duration} min
              </span>
              <span className="flex items-center gap-1">
                <FaFire /> {workout.caloriesBurned} kcal
              </span>
            </div>
            <span className="flex items-center gap-1 text-[#C6FF00] text-xs font-bold">
              <FaStar /> {workout.rating}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;

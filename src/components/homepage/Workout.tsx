import React from 'react';
import WorkoutCard from '../shared/WorkoutCard';


const getWorkout =async ()=>{
    try{
        const res = await fetch("https://api.abcz.workers.dev/api/fitlog")
    const data = await res.json();
    return data;
    }catch(error){
        throw error;
    }
}

const Workout =async () => {

    const workoutData = await getWorkout();



    return (
         <section id="workouts" className="max-w-[1280px] mx-auto px-6 py-12">

            {/* Section Heading */}
            <div className="mb-8">
                <h2 className="text-white text-2xl font-extrabold uppercase">
                    THE LIBRARY
                </h2>

                <p className="text-[#9296A1] text-sm mt-2">
                    Twelve lifts covering every major muscle group.
                </p>
            </div>

            {/* Workout Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {workoutData.map((workout) => (
                    <WorkoutCard
                        key={workout.id}
                        workout={workout}
                    />
                ))}

            </div>

        </section>
    );
};

export default Workout;
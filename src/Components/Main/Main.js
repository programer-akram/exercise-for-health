import React, { useEffect, useState } from 'react';
import CalculationZone from '../CalculationZone/CalculationZone';

import Exercises from '../Exercises/Exercises';
import './Main.css'



const Main = () => {
    const [exercises, setExercises] = useState([]);
    const [timeSum, setTimeSum] = useState([]);
    useEffect(() => {
        fetch('exercise.json')
            .then((res) => res.json())
            .then((data) => setExercises(data));
    }, []);
    const handelAddToCart = (exercises) => {
        const sum = [...timeSum, exercises];
        setTimeSum(sum);
    };

    return (
        <div>
            <div className="grid md:grid-cols-12 gap-4 justify-center">
                <div className="md:col-span-9 mt-10 mx-20">
                    <div>
                        <div className="flex">
                            <img src="logo.jpg" className="logo" alt="" />
                            <h1 className="text-3xl text-indigo-500 font-bold">
                                Exercise for Health
                            </h1>
                        </div>
                        <h3 className="text-xl font-semibold my-5">
                            Select today’s Exercise
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {exercises.map((exercise) => (
                            <Exercises
                                exercise={exercise}
                                key={exercise.id}
                                handelAddToCart={handelAddToCart}></Exercises>
                        ))}

                    </div>
                </div>

                <div className="md:col-span-3">
                    <CalculationZone timeSum={timeSum}></CalculationZone>
                </div>
            </div>


            
        </div>
    );
};

export default Main;
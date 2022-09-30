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

            <div className="questionnaire">
                <h2>Some Questionnaire about react</h2>
                <hr />
                <h3>1. What does react work?</h3>

                <h4>
                    React uses a declarative paradigm that makes it easier to
                    reason about your application and aims to be both efficient
                    and flexible. It designs simple views for each state in your
                    application, and React will efficiently update and render
                    just the right component when your data changes.
                </h4>
                <br />
                <br />
                <h3>2. What is the difference between props and state?</h3>

                <h4>
                    Props are used to pass data from one component to another.
                    The state is a local data storage that is local to the
                    component only and cannot be passed to other components.
                </h4>
                <br />
                <br />
                <h3>3. What are the uses of useEffect except API data loading?</h3>
                <h4>
                    <p>a. Add an event listener for a button.</p>
                    <p>b. Perform an action when state or props change.</p>
                    <p>c. Clean up event listeners when the component unmounts.</p>


                </h4>
            </div>
            
        </div>
    );
};

export default Main;
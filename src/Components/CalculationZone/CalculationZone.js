import React, { useEffect, useState } from 'react';


const CalculationZone = ({ timeSum }) => {
    // const notify = () => toast('WOW!! You Fillup your Targeted..!!');
    const [time, setTime] = useState([]);
    const addBreakTime = (timeAdd) => {
        setTime(timeAdd);
        localStorage.setItem('time', timeAdd);
    };
    useEffect(() => {
        const prevTime = localStorage.getItem('time');
        if (prevTime) {
            setTime(prevTime);
        }
    }, []);

    let total = 0;
    for (const sumCount of timeSum) {
        total = total + sumCount.time;
    }

    return (
        <div>
            <div className="studyContainer">
                <div className="m-10">
                    <div className="grid grid-cols-4 myProfile">
                        <div>
                            <img
                                className="myPic"
                                src="pp.jpg"
                                alt=""
                            />
                        </div>
                        <div className="col-span-3 pl-3">
                            <h1 className="text-xl font-semibold">
                                Md Akram Hossain
                            </h1>
                            <p>Dinajpur, Bangladesh</p>
                        </div>
                    </div>
                </div>

                <div className="mx-10">
                    <div className="flex justify-around myDetails bg-gray-200">
                        <div>
                            <h1 className="text-2xl font-semibold">
                                <span className="text-3xl font-bold">55</span>kg
                            </h1>
                            <h1 className="font-semibold ml-3">Weight</h1>
                        </div>
                        <div>
                            <h1 className="text-2xl font-semibold">
                                <span className="text-3xl font-bold">5.4</span>
                            </h1>
                            <h1 className="font-semibold ml-2">Height</h1>
                        </div>
                        <div>
                            <h1 className="text-2xl font-semibold">
                                <span className="text-3xl font-bold">22</span>
                                yrs
                            </h1>
                            <h1 className="font-semibold ml-2">Age</h1>
                        </div>
                    </div>
                </div>
                <h1 className="my-5 ml-10 text-xl font-semibold">
                    Add A Break
                </h1>
                <div className="mx-10 pb-5">
                    <div className="flex justify-around secBtn">
                        <div className="time">
                            <div>
                                <h5 onClick={() => addBreakTime('10s')}>10s</h5>
                            </div>
                            <div>
                                <h5 onClick={() => addBreakTime('20s')}>20s</h5>
                            </div>
                            <div>
                                <h5 onClick={() => addBreakTime('30s')}>30s</h5>
                            </div>
                            <div>
                                <h5 onClick={() => addBreakTime('40s')}>40s</h5>
                            </div>
                        </div>
                    </div>
                    <h1 className="riding-details text-xl font-semibold mt-20 mb-5">
                        Exercise Details
                    </h1>
                    <div className="flex justify-around myDetails mb-5 bg-gray-200">
                        <h3 className="font-bold text-xl p-2">Study time</h3>
                        <h3 className="font-semibold p-2 text-gray-400">
                            {total} seconds
                        </h3>
                    </div>
                    <div className="flex justify-around myDetails bg-gray-200">
                        <h3 className="font-bold text-xl p-2">Break Time</h3>
                        <h3 className="font-semibold p-2 text-gray-400">
                            {time}
                        </h3>
                    </div>

                    
                </div>
            </div>
        </div>
    );
};

export default CalculationZone;



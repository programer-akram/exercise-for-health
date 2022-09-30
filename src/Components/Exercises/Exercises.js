import React from 'react';

const Exercises = ({ exercise, handelAddToCart }) => {
    const { time, picture, name, about } = exercise;

    return (
        <div className="card w-64 bg-base-100 shadow-xl">
            <figure className="pt-5">
                <img src={picture} alt="Shoes" className="rounded-xl card-img" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{about ? about.slice(0, 100) : 'Nothing'}</p>
                <h3 className="text-lg font-semibold">
                    Time required : {time}s
                </h3>
                
            </div>

            <div className="card-actions">
                <button onClick={() => handelAddToCart(exercise)} className="btn w-full btn-success">Add to list</button>
            </div>
            
        </div>
    );
};

export default Exercises;



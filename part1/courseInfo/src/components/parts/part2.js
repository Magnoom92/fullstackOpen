import React from 'react';

const Part2 = () => {
  const part2 ={
    name: 'Using props to pass data',
    exercises: 7
  }
    const b= [part2.name,part2.exercises]

    return (
        <div>
        <p>
        {b}
      </p>
        </div>  );
}
 
export default Part2;
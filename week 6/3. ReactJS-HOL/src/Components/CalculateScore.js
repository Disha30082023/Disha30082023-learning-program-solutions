import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore() {
  const name = "Disha";
  const school = "Sister Nivedita Girls' School";
  const total = 600;
  const goal = 8;

  const average = total / goal;

  return (
    <div className="container">
      <h1>Score Calculator</h1>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>School:</strong> {school}</p>
      <p><strong>Total Score:</strong> {total}</p>
      <p><strong>Goal Subjects:</strong> {goal}</p>
      <p><strong>Average Score:</strong> {average}</p>
    </div>
  );
}

export default CalculateScore;
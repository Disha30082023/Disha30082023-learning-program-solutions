import React from "react";

const IndianPlayers = () => {
  const OddTeam = ["Virat", "Rahul", "Gill", "Jadeja", "Bumrah"];
  const EvenTeam = ["Rohit", "Shreyas", "Hardik", "Pant", "Shami", "Siraj"];

  
  const [odd1, odd2, ...restOdd] = OddTeam;
  const [even1, even2, ...restEven] = EvenTeam;


  const T20players = ["Kohli", "Surya", "Ishan"];
  const RanjiPlayers = ["Shubman", "Pujara", "Rahane"];
  const MergedPlayers = [...T20players, ...RanjiPlayers];

  return (
    <div>
      <h2>Odd Team Players (Destructured)</h2>
      <ul>
        <li>{odd1}</li>
        <li>{odd2}</li>
        {restOdd.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

      <h2>Even Team Players (Destructured)</h2>
      <ul>
        <li>{even1}</li>
        <li>{even2}</li>
        {restEven.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

      <h2>Merged Players (T20 + Ranji)</h2>
      <ul>
        {MergedPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
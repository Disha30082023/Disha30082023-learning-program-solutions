import React from "react";

const ListofPlayers = () => {
  const players = [
    { name: "Hardik", score: 80 },
    { name: "Rahul", score: 60},
    { name: "Shreyas", score: 65 },
    { name: "Rohit", score: 60 },
    { name: "Siraj", score: 72 },
    { name: "Pant", score: 40},
    { name: "Bumrah", score: 35 },
    { name: "Shami", score: 55 },
    { name: "Jadeja", score: 77 },
  ];

  
  const filteredPlayers = players.filter((player) => player.score < 70);

  return (
    <div>
      <h2>All Players (Using map)</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>

      <h2>Filtered Players (Score below 70)</h2>
      <ul>
        {filteredPlayers.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
import React, { useState } from "react";
import ListofPlayers from "./ListofPlayers";
import IndianPlayers from "./IndianPlayers";

function App() {
  const [flag, setFlag] = useState(true);

  return (
    <div className="App">
      <h1>Welcome to Cricket App</h1>
      <button onClick={() => setFlag(!flag)}>
        Show {flag ? "Indian Players" : "List of Players"}
      </button>

      {flag ? <ListofPlayers /> : <IndianPlayers />}
    </div>
  );
}

export default App;